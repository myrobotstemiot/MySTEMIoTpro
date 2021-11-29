#include <FS.h>                   //this needs to be first, or it all crashes and burns...
#include <SPIFFS.h>
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <DNSServer.h>
#include <memory>
#include <Wire.h>  
#include <esp_wifi.h>
#include <SPI.h>

// #include "MySTEMIoTpro_Motor_drive.h"
#include "MySTEMIoTpro_Servo_lib.h"
#include "MySTEMIoTpro_IO.h"
#include "Adafruit_TCS34725.h"
#include "Arduino_GFX_Library.h"
#include "Adafruit_MCP23X17.h"
#include "RTClib.h"
#include "vector"
#define TONE_CHANNEL 1
static const uint8_t KB_BUZZER = 14;
#define BUZZER_PIN 19
#define SOUND_PWM_CHANNEL 0
#define SOUND_RESOLUTION 8
#define SOUND_ON (1 << (SOUND_RESOLUTION - 1))
#define SOUND_OFF 0
// Standard ESP32 GPIO for MyESP32
#define A0 32		
#define A1 33
#define A2 25
#define A3 26
#define A4 27
#define A5 12
#define A6 13
#define A7 2
#define A8 14
#define A9 15
#define A10 16
#define A11 17
 // MCP23XXX pin Relay is attached to
#define Relay1_NC_COM_NO 0    
#define Relay2_NC_COM_NO 1
#define Relay3_12VDC_NC_COM_NO 2
#define Relay4_12VDC_NC_COM_NO 3
#define Relay5_220VAC 4
#define Relay6_220VAC 5
#define Relay7_220VAC 6
#define Relay8_220VAC 7
#define USB1_5VDC 8
#define USB2_5VDC 9
#define USB3_5VDC 10
#define USB4_5VDC 11

 RTC_DS3231 rtc;
 char daysOfTheWeek[7][12] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
 Adafruit_MCP23X17 mcp;
 unsigned long timeElapsed;

Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_1X);
Arduino_DataBus *bus = new Arduino_ESP32SPI(4 /* DC */, 5 /* CS */, 18 /* SCK */, 23 /* MOSI */, 19 /* MISO */);
Arduino_GFX *gfx = new Arduino_ST7735(bus, -1 /* RST*/, 0 /* rotation */, false /* IPS */,128 /* width */, 160 /* height */, 0 /* col offset 1 */, 0 /* row offset 1 */, 0 /* col offset 2 */, 0 /* row offset 2 */, false /* BGR */);

void wait();
void beep();
// int TCS_Read(int C=1);


class KB_music
{
 public:
  void begin(void);
  void tone(unsigned int frequency, unsigned long duration = 0);
  void noTone();
  void song(std::vector<int> notes,int duration);

 protected:
  uint16_t channel;
  uint16_t bit;

 private:
};

void KB_music::begin(void) {
    //ledcSetup(TONE_CHANNEL, 5000, 13);
}

void KB_music::tone(unsigned int frequency, unsigned long duration)
{
    if (ledcRead(TONE_CHANNEL)) {
        log_e("Tone channel %d is already in use", ledcRead(TONE_CHANNEL));
        return;
    }
    ledcAttachPin(KB_BUZZER, TONE_CHANNEL);
    ledcWriteTone(TONE_CHANNEL, frequency);
    if (duration) {
        delay(duration);
        noTone();
    }
}

void KB_music::noTone()
{
    ledcDetachPin(KB_BUZZER);
    ledcWrite(TONE_CHANNEL, 0);
}

void KB_music::song(std::vector<int>notes,int duration)
{
    for(int freq : notes){
        if(freq == -1){
            noTone();
            delay(duration);
        }else{
            tone(freq,duration);
        }
    }
}

KB_music music = KB_music();

void tone(int pin, int frequency, int duration) {
  ledcSetup(0, frequency, 8);
  ledcAttachPin(pin, 0);
  ledcWrite(0, SOUND_ON);
  delay(duration);
  ledcWrite(0, SOUND_OFF);
}

void MySTEMIoTpro(){
  Serial.begin(115200);
  rtc.begin();
  mcp.begin_I2C();
  music.begin();
  gfx->begin();
  gfx->fillScreen(0x0000);
  pinMode(34,INPUT);
  pinMode(35,INPUT);
  pinMode(36,INPUT);
  pinMode(19,OUTPUT);
  //
  pinMode(14,OUTPUT);
  pinMode(15,OUTPUT);
  digitalWrite(14, 0);
  digitalWrite(15, 0);
  //
  //configure pin for mcp output
  mcp.pinMode(Relay1_NC_COM_NO, OUTPUT);
  mcp.pinMode(Relay2_NC_COM_NO, OUTPUT);
  mcp.pinMode(Relay3_12VDC_NC_COM_NO, OUTPUT);
  mcp.pinMode(Relay4_12VDC_NC_COM_NO, OUTPUT);
  mcp.pinMode(Relay5_220VAC, OUTPUT);
  mcp.pinMode(Relay6_220VAC, OUTPUT);
  mcp.pinMode(Relay7_220VAC, OUTPUT);
  mcp.pinMode(Relay8_220VAC, OUTPUT);
  mcp.pinMode(USB1_5VDC, OUTPUT);
  mcp.pinMode(USB2_5VDC, OUTPUT);
  mcp.pinMode(USB3_5VDC, OUTPUT);
  mcp.pinMode(USB4_5VDC, OUTPUT);
  // Read sensor for 0-1023 (2^10=1024)
  analogReadResolution(10); 
  // Logo display
  gfx->setTextSize(2);
  gfx->setCursor(5, 20);
  gfx->println(String("MySTEMIoTpro"));
  gfx->setTextSize(2);
  gfx->setCursor(20, 45);
  gfx->println(String("Myrobot"));
  gfx->setCursor(40, 70);
  gfx->println(String("STEM"));
  gfx->setCursor(20, 100);
  gfx->println(String("V.1.0.0"));
  delay(500);

  pinMode(39, INPUT); // Knob
  
  if (tcs.begin()) {
     Serial.println("Found sensor");
  }
 
  // Splash Screen //
  gfx->setTextSize(3);
  gfx->setTextColor(0xFFFF);
  for (int i = 120; i >= -100; i -= 10) {
    gfx->fillRect(0,0,128,128,0x000);
    gfx->setCursor(i, 64);
    gfx->println(String("Ready!"));
    delay(100);
  }

  beep();
  //wait();
}

#define _knob 39
int _Knob(){
  return analogRead(_knob);
}
void beep(){
  int _buzzer = 19;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(200);
  digitalWrite(_buzzer,LOW);
}
void beep(int _delay){
  int _buzzer = 19;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
  delay(_delay);
  digitalWrite(_buzzer,LOW);
}
void beep_on(){
  int _buzzer = 19;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,HIGH);
}
void beep_off(){
  int _buzzer = 19;
  pinMode(_buzzer,OUTPUT);
  digitalWrite(_buzzer,LOW);
}
float TCS_Read(int color_of_sensor){
  uint16_t clearcol_lib, red_lib, green_lib, blue_lib;
   float average_lib, r_lib, g_lib, b_lib;
   //delay(100); // Farbmessung dauert c. 50ms 
   tcs.getRawData(&red_lib, &green_lib, &blue_lib, &clearcol_lib);
   average_lib = (red_lib+green_lib+blue_lib)/3;
   r_lib = red_lib/average_lib;
   g_lib = green_lib/average_lib;
   b_lib = blue_lib/average_lib;
   if(color_of_sensor == 0){
    return r_lib*100;
   }
   else if(color_of_sensor == 1){
    return g_lib*100;
   }
    else if(color_of_sensor == 2){
    return b_lib*100;
   }
 }
float ultrasonic(int ECHO,int TRIG){
  pinMode(ECHO,INPUT);
  pinMode(TRIG,OUTPUT);
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  long duration = pulseIn(ECHO, HIGH);
  // Calculating the distance
  return duration*0.034/2;
}

