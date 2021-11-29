
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
    let dropdown_status =  block.getFieldValue("status");
    let code =  `led(${dropdown_pin},${dropdown_status});`;
	return code;
  };

  Blockly.JavaScript["Buzzers_MySTEMIoTpro"] = function(block) {
    let dropdown_pin = block.getFieldValue("pin");
    let dropdown_status =  block.getFieldValue("status");
    let code =  `buzzer(${dropdown_pin},${dropdown_status});`;
	return code;
  };

  Blockly.JavaScript["Laser_MySTEMIoTpro"] = function(block) {
    let dropdown_pin = block.getFieldValue("pin");
    let dropdown_status =  block.getFieldValue("status");
    let code = `laser(${dropdown_pin},${dropdown_status});`;
    return code;
  };

  Blockly.JavaScript["Output_MySTEMIoTpro"] = function(block) {
    let dropdown_pin = block.getFieldValue("ch");
    let dropdown_status = block.getFieldValue("status");
   let code = `mcp.digitalWrite(${dropdown_pin}, ${dropdown_status});`;
	return code;
  };

  Blockly.JavaScript["RGB_MySTEMIoTpro"] = function(block) {
    let dropdown_ch = block.getFieldValue("ch");
	let dropdown_r4_status =  block.getFieldValue("r4_status");
    let dropdown_g4_status =  block.getFieldValue("g4_status");
    let dropdown_b4_status =  block.getFieldValue("b4_status");
    let code = `rgb(${dropdown_ch},${dropdown_r4_status},${dropdown_g4_status},${dropdown_b4_status});`;
    return code;
  };

}
