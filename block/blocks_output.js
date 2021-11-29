
//Block from IKB1 

module.exports = function(Blockly){
  'use strict';
var motor_colour=Blockly.Msg.MUSIC_HUE ;
Blockly.Blocks['MySTEMIoTpro_servo'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(new Blockly.FieldDropdown([["A0 (D32)","0"],["A1 (D33)","1"], ["A2 (D25)","2"], ["A3 (D26)","3"], ["A4 (D27)","4"], ["A5 (D12)","5"]]), "ch");
	this.appendValueInput("angle")
      .setCheck("Number")
      .appendField("degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("Select servo to control.");
  }
};

Blockly.Blocks['MySTEMIoTpro_servo2'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Servo360")
      .appendField(new Blockly.FieldDropdown([["A0 (D32)","0"],["A1 (D33)","1"], ["A2 (D25)","2"], ["A3 (D26)","3"], ["A4 (D27)","4"], ["A5 (D12)","5"]]), "ch")
      .appendField("direction")
      .appendField(new Blockly.FieldDropdown([["Forward","1"], ["Backward", "2"]]), "dir");
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField("speed");
    this.appendDummyInput()
      .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("Select servo to control.");
  }
};

  Blockly.Blocks['LED_MySTEMIoTpro'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("LED")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (D32)", "32"],
                                              ["A1 (D33)", "33"],
                                              ["A2 (D25)", "25"],
                                              ["A3 (D26)", "26"],
                                              ["A4 (D27)", "27"],
                                              ["A5 (D12)", "12"]]), "pin");
       this.appendDummyInput()
        .appendField("status")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

  Blockly.Blocks['Buzzers_MySTEMIoTpro'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Buzzer")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (D32)", "32"],
                                              ["A1 (D33)", "33"],
                                              ["A2 (D25)", "25"],
                                              ["A3 (D26)", "26"],
                                              ["A4 (D27)", "27"],
                                              ["A5 (D12)", "12"]]), "pin");
       this.appendDummyInput()
        .appendField("status")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

 Blockly.Blocks['Laser_MySTEMIoTpro'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Laser")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (D32)", "32"],
                                              ["A1 (D33)", "33"],
                                              ["A2 (D25)", "25"],
                                              ["A3 (D26)", "26"],
                                              ["A4 (D27)", "27"],
                                              ["A5 (D12)", "12"]]), "pin");
       this.appendDummyInput()
        .appendField("status")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

  Blockly.Blocks['Output_MySTEMIoTpro'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Output CH")
        .appendField(new Blockly.FieldDropdown([
                                              ["Relay1_NC_COM_NO", "0"],
                                              ["Relay2_NC_COM_NO", "1"],
                                              ["Relay3_12VDC_NC_COM_NO", "2"],
                                              ["Relay4_12VDC_NC_COM_NO", "3"],
                                              ["Relay5_220VAC", "4"],
                                              ["Relay6_220VAC", "5"],
                                              ["Relay7_220VAC", "6"],
                                              ["Relay8_220VAC", "7"],
                                              ["USB1_5VDC", "8"],
                                              ["USB2_5VDC", "9"],
                                              ["USB3_5VDC", "10"],
                                              ["USB4_5VDC", "11"]]), "ch");
       this.appendDummyInput()
        .appendField("status")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

   Blockly.Blocks['RGB_MySTEMIoTpro'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("RGB")
      .appendField(new Blockly.FieldDropdown([["A3 (D26)","3"], ["A4 (D27)","4"], ["A5 (D12)","5"]]), "ch")
        .appendField("status  Red:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "r4_status")
        .appendField("Green:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "g4_status")
        .appendField("Blue:")
        .appendField(new Blockly.FieldDropdown([["OFF","0"], ["ON","1"]]), "b4_status");
	  this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };

}
