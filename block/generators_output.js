
//Block from IKB1 


module.exports = function(Blockly) {

Blockly.JavaScript['MySTEMIoTpro_servo'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo(' + dropdown_ch + ', ' + value_angle + ');\n';
  return code;
};

Blockly.JavaScript['MySTEMIoTpro_servo2'] = function(block) {
  var dropdown_ch = block.getFieldValue('ch');
  var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'servo360(' + dropdown_ch + ', ' + dropdown_dir +', ' + value_speed + ');\n';
  return code;
};

  Blockly.JavaScript["LED_MySTEMIoTpro"] = function(block) {
    let dropdown_pin = block.getFieldValue("pin");
    let dropdown_status = Blockly.JavaScript.valueToCode(block, 'status', Blockly.JavaScript.ORDER_ATOMIC) || 0;
//    let code = `pinMode(${dropdown_pin}, OUTPUT);`;
//	  code +=  `led(${dropdown_pin},${dropdown_status});`;
    let code =  `led(${dropdown_pin},${dropdown_status});`;
	return code;
  };

  Blockly.JavaScript["Buzzers_MySTEMIoTpro"] = function(block) {
    let dropdown_pin = block.getFieldValue("pin");
    let dropdown_status = Blockly.JavaScript.valueToCode(block, 'status', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    let code =  `buzzer(${dropdown_pin},${dropdown_status});`;
	return code;
  };

  Blockly.JavaScript["Laser_MySTEMIoTpro"] = function(block) {
    let dropdown_pin = block.getFieldValue("pin");
    let dropdown_status = Blockly.JavaScript.valueToCode(block, 'status', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    let code = `laser(${dropdown_pin},${dropdown_status});`;
    return code;
  };

  Blockly.JavaScript["RGB6_MySTEMIoTpro"] = function(block) {
    let dropdown_r_status = block.getFieldValue("r_status");
    let dropdown_g_status = block.getFieldValue("g_status");
	let dropdown_b_status = block.getFieldValue("b_status");
    let code = `pinMode(15,OUTPUT);\n`;
		 code += `pinMode(13,OUTPUT);\n`;
		 code += `pinMode(14,OUTPUT);\n`;
         code += `digitalWrite(15,${dropdown_r_status});`;
		 code += `digitalWrite(13,${dropdown_g_status});`;
         code += `digitalWrite(14,${dropdown_b_status});`;
    return code;
  };

  Blockly.JavaScript["RGB7_MySTEMIoTpro"] = function(block) {
    let dropdown_rr_status = block.getFieldValue("rr_status");
    let dropdown_gg_status = block.getFieldValue("gg_status");
	let dropdown_bb_status = block.getFieldValue("bb_status");
    let code = `pinMode(17,OUTPUT);\n`;
		 code += `pinMode(2,OUTPUT);\n`;
		 code += `pinMode(16,OUTPUT);\n`;
         code += `digitalWrite(17,${dropdown_rr_status});`;
		 code += `digitalWrite(2,${dropdown_gg_status});`;
         code += `digitalWrite(16,${dropdown_bb_status});`;
    return code;
  };

  Blockly.JavaScript["Output_MySTEMIoTpro"] = function(block) {
    let dropdown_pin = block.getFieldValue("pin");
    let dropdown_status = Blockly.JavaScript.valueToCode(block, 'status', Blockly.JavaScript.ORDER_ATOMIC) || 0;
   let code = `mcp.digitalWrite(${dropdown_pin}, ${dropdown_status});`;
	return code;
  };

}
