module.exports = function(Blockly){
  'use strict';

var sensor_colour= Blockly.Msg.SENSOR_HUE ;
Blockly.Blocks['button_1_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("Swith 1 is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(200);
 this.setTooltip("get GREEN button pressed or not");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button_2_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/sw12x12.png", 20, 20, "*"))
        .appendField("Swith 2 is pressed");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(200);
 this.setTooltip("get RED button pressed or not");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['analog_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog sensor ")
        .appendField(new Blockly.FieldDropdown([
                                            ["1 (D35)", "35"],
                                            ["2 (D34)", "34"],
                                            ["3 (D39)", "39"],
                                            ["4 (D36)", "36"],
                                            ["5 (D12)", "12"],
                                            ["6 (D13)", "13"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(200);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['digital_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital sensor ")
        .appendField(new Blockly.FieldDropdown([
                                            ["1 (D35)", "35"],
                                            ["2 (D34)", "34"],
                                            ["3 (D39)", "39"],
                                            ["4 (D36)", "36"],
                                            ["5 (D12)", "12"],
                                            ["6 (D13)", "13"]]), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(200);
 this.setTooltip("read digital value from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['TCS_read_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS read value ")
        .appendField(new Blockly.FieldDropdown([["Red","0"], ["Green","1"], ["Blue","2"]]), "color");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(200);
 this.setTooltip("TCS read RGB value");
 this.setHelpUrl("");
  }
};
/*
Blockly.Blocks['Knob_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/bmx055.png", 20, 20, "*"))
        .appendField("read Knob status");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(200);
 this.setTooltip("read Knob status");
 this.setHelpUrl("");
  }
};
*/
Blockly.Blocks['sw1_press'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait for Button press");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("");
  }
};
Blockly.Blocks["Light sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Light sensor")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "0"],
                                              ["A1 (33)", "1"],
                                              ["A2 (25)", "2"],
                                              ["A3 (26)", "3"],
                                              ["A4 (27)", "4"],
                                              ["A5 (12)", "5"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
/*
Blockly.Blocks["Switch sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Switch")
          .appendField(new Blockly.FieldDropdown([
                                              ["A (34)", "34"],
                                              ["B (35)", "35"],
                                              ["OK (36)", "36"],
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  */
Blockly.Blocks["Push sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("PUSH Switch")
          .appendField(new Blockly.FieldDropdown([
                                              ["A (34)", "34"],
                                              ["B (35)", "35"],
                                              ["OK (36)", "36"],
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks["Reed sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("REED Switch")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks["Hall Magnetic sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Hall Magnetic sensor")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks["LDR sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("LDR sensor")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "0"],
                                              ["A1 (33)", "1"],
                                              ["A2 (25)", "2"],
                                              ["A3 (26)", "3"],
                                              ["A4 (27)", "4"],
                                              ["A5 (12)", "5"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks["PIR Motion sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("PIR Motion sensor")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "0"],
                                              ["A1 (33)", "1"],
                                              ["A2 (25)", "2"],
                                              ["A3 (26)", "3"],
                                              ["A4 (27)", "4"],
                                              ["A5 (12)", "5"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks["MQ Gas sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("MQ Gas sensor")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "0"],
                                              ["A1 (33)", "1"],
                                              ["A2 (25)", "2"],
                                              ["A3 (26)", "3"],
                                              ["A4 (27)", "4"],
                                              ["A5 (12)", "5"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks["Distance sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Distance (Sharp)")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "0"],
                                              ["A1 (33)", "1"],
                                              ["A2 (25)", "2"],
                                              ["A3 (26)", "3"],
                                              ["A4 (27)", "4"],
                                              ["A5 (12)", "5"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks["DS18B20 sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("DS18B20 (water temp)")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "0"],
                                              ["A1 (33)", "1"],
                                              ["A2 (25)", "2"],
                                              ["A3 (26)", "3"],
                                              ["A4 (27)", "4"],
                                              ["A5 (12)", "5"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks["Soil moisture sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Soil Moisture sensor")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "0"],
                                              ["A1 (33)", "1"],
                                              ["A2 (25)", "2"],
                                              ["A3 (26)", "3"],
                                              ["A4 (27)", "4"],
                                              ["A5 (12)", "5"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(200);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
/*
Blockly.Blocks["Ultrasonic sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ultrasonic Echo")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "Echo");
      this.appendDummyInput()
          .appendField("Trig")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],	
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "Trig");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(180);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
*/
Blockly.Blocks["IR remote sensor"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IR remote")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],	
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(180);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks['dhtesp_setup_MySTEMIoTpro'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("Setup")
        .appendField(new Blockly.FieldDropdown([["DHT11","DHT11"], ["DHT22","DHT22"], ["AM2302","AM2302"], ["RHT03","RHT03"]]), "dht_type")
        .appendField("pin")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("setup sensor DHT ");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dhtesp_read_temp_MySTEMIoTpro'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("read temperature °C");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(180);
 this.setTooltip("read temperature in Celsius");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dhtesp_read_humid_MySTEMIoTpro'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("DhtSensor1",null,["Plugin.DHTesp"],["Plugin.DHTesp"]), "instance")
        .appendField("read humidity %");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(180);
 this.setTooltip("read humidity in percentage");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['ds18b20_init_MySTEMIoTpro'] = {
  init: function() {
    /*this.appendDummyInput()
        .appendField("DS18B20 Init pin")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "pin");*/
    this.appendDummyInput()
          .appendField("DS18B20 setup pin")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],	
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("init DS18B20");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ds18b20_get_devices_num_MySTEMIoTpro'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DS18B20 get number of devices");
    this.setOutput(true, ["int", "Number"]);
    this.setColour(180);
 this.setTooltip("get number of connected devices.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ds18b20_get_temperature_MySTEMIoTpro'] = {
  init: function() {
    this.appendValueInput("device")
        .setCheck("Number")
        .appendField("DS18B20 get temperature (C) of device");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(180);
 this.setTooltip("get temperature of device index N");
 this.setHelpUrl("");
  }
};
Blockly.Blocks["IRremote_sensor"] = {
    init: function() {
      this.appendDummyInput().appendField("IRremote_sensor");
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],	
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");
      this.appendDummyInput()
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("IR_RECEIVER_VALUE"),
          "IR_RECEIVER_VALUE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['ds3231_rtc_get_temp'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("get Temperature onboard");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};



}