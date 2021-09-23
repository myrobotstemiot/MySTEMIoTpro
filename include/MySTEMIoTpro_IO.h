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

#define Relay_1 0     // MCP23XXX pin Relay is attached to
#define Relay_2 1
#define RelayDC_3 2
#define RelayDC_4 3
#define RelayAC_5 4
#define RelayAC_6 5
#define RelayAC_7 6
#define RelayAC_8 7
#define USB_1 8
#define USB_2 9
#define USB_3 10
#define USB_4 11

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

void rgb(int _pin,int _state){
  pinMode(_pin,OUTPUT);
  digitalWrite(_pin,_state);
}
*/