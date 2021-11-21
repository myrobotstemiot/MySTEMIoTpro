module.exports = function(Blockly) {
  "use strict";
  Blockly.Blocks["adc_pin_dummy_input"] = {
    init: function() {
      
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks["ADC_MySTEMIoTpro"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Analog")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "A0"],
                                              ["A1 (33)", "A1"],
                                              ["A2 (25)", "A2"],
                                              ["A3 (26)", "A3"],
                                              ["A4 (27)", "A4"],
                                              ["A5 (12)", "A5"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["IN_MySTEMIoTpro"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IN")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "A0"],
                                              ["A1 (33)", "A1"],
                                              ["A2 (25)", "A2"],
                                              ["A3 (26)", "A3"],
                                              ["A4 (27)", "A4"],
                                              ["A5 (12)", "A5"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks["IN_PULLUP_MySTEMIoTpro"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IN_PULLUP")
          .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['OUT_MySTEMIoTpro'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("OUT")
        .appendField(new Blockly.FieldDropdown([
                                              ["A0 (32)", "32"],
                                              ["A1 (33)", "33"],
                                              ["A2 (25)", "25"],
                                              ["A3 (26)", "26"],
                                              ["A4 (27)", "27"],
                                              ["A5 (12)", "12"]]), "pin");
      this.appendValueInput("status")
        .setCheck("Number")
        .appendField("status");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };
   Blockly.Blocks['Buzzer_MySTEMIoTpro'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Buzzer onboard status")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "status")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
    }
  };
  /*
  Blockly.Blocks['Knob_MySTEMIoTpro'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Knob Status");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("read analog value from pin");
   this.setHelpUrl("");
    }
  };
  */
  Blockly.Blocks["SW_MySTEMIoTpro"] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Switch ")
          .appendField(new Blockly.FieldDropdown([
                                              ["A (34)", "34"],
                                              ["B (35)", "35"],
                                              ["OK (36)", "36"]]), "pin");
      this.setInputsInline(true);
      this.setOutput(true, "Number");
      this.setColour(45);
   this.setTooltip("get SW pressed or not");
   this.setHelpUrl("");
    }
  };
  
};

