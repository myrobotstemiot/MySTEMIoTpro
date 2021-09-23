#include <Wire.h>
#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include "MySTEMIoTpro.h"
#include "RTClib.h"
#include "Adafruit_MCP23X17.h"
${EXTINC}

${VARIABLE}

${FUNCTION}

void setup()
{
	MySTEMIoTpro();

	/* setup code */
${SETUP_CODE}
    /* block setup */
${BLOCKSETUP}
}

void loop()
{
  ${LOOP_CODE}
  ${LOOP_EXT_CODE}
}
