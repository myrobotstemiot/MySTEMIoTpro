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
#define Relay1_12VDC 0    
#define Relay2_12VDC 1
#define Relay3_12VDC 2
#define Relay4_12VDC 3
#define Relay5_220VAC 4
#define Relay6_220VAC 5
#define Relay7_220VAC 6
#define Relay8_220VAC 7
#define USB1_5VDC 8
#define USB2_5VDC 9
#define USB3_5VDC 10
#define USB4_5VDC 11

int analog(int _pin){
	if(_pin == 0)_pin = 32;
	else if(_pin == 1)_pin = 33;
	else if(_pin == 2)_pin = 25;
	else if(_pin == 3)_pin = 26;
	else if(_pin == 4)_pin = 27;
	else if(_pin == 5)_pin = 12;
	else if(_pin == 6)_pin = 13;
	else if(_pin == 7)_pin = 2;
	else if(_pin == 8)_pin = 14;
	else if(_pin == 9)_pin = 15;
	else if(_pin == 10)_pin = 16;
	else if(_pin == 11)_pin = 17;

	pinMode(_pin,INPUT);
  return analogRead(_pin);
}
int in(int _pin){
  pinMode(_pin,INPUT);
  return digitalRead(_pin);
}
int in_pullup(int _pin){
  pinMode(_pin,INPUT_PULLUP);
  return digitalRead(_pin);
}
void out(int _pin,int _state){
  pinMode(_pin,OUTPUT);
  digitalWrite(_pin,_state);
}
float getdist(int _pin){
  float volts_distance = analog(_pin)*0.000805;  
  return  (12*pow(volts_distance, -1))-2.00;
}
void buzzer(int _pin,int _state){
  pinMode(_pin,OUTPUT);
  digitalWrite(_pin,_state);
}
void led(int _pin,int _state){
  pinMode(_pin,OUTPUT);
  digitalWrite(_pin,_state);
}
void laser(int _pin,int _state){
  pinMode(_pin,OUTPUT);
  digitalWrite(_pin,_state);
}
/*
void output(int _pin,int _state){
  mcp.pinMode(_pin,OUTPUT);
  mcp.digitalWrite(_pin,_state);
}
*/
void rgb(int _pin,int _r_state,int _g_state,int _b_state){
	if(_pin == 26)_pin = 26;
		  pinMode(26, OUTPUT);
		  pinMode(13, OUTPUT);
		  pinMode(2, OUTPUT);
		  digitalWrite(26,_r_state);
		  digitalWrite(13,_g_state);
		  digitalWrite(2,_b_state);

	else if(_pin == 27)_pin = 27;
		  pinMode(27, OUTPUT);
		  pinMode(14, OUTPUT);
		  pinMode(15, OUTPUT);
		  digitalWrite(27,_r_state);
		  digitalWrite(14,_g_state);
		  digitalWrite(15,_b_state);
	else if(_pin == 12)_pin = 12;
 		  pinMode(12, OUTPUT);
		  pinMode(16, OUTPUT);
		  pinMode(17, OUTPUT);
		  digitalWrite(12,_r_state);
		  digitalWrite(16,_g_state);
		  digitalWrite(17,_b_state);
}
