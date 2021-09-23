module.exports = function(Blockly){
'use strict';

Blockly.JavaScript['ds3231_rtc_set_datetime'] = function (block) {
	var dropdown_dayofweek= block.getFieldValue('DOW');
	var dropdown_year = block.getFieldValue('YEAR');
	var dropdown_month = block.getFieldValue('MONTH');
	var dropdown_day = block.getFieldValue('DAY');
	var dropdown_hour = block.getFieldValue('HOUR');
	var dropdown_minute = block.getFieldValue('MINUTE');
	var dropdown_secound = block.getFieldValue('SECOND');
	var code = `rtc.adjust(DateTime( ${dropdown_year}, ${dropdown_month}, ${dropdown_day}, ${dropdown_hour}, ${dropdown_minute}, ${dropdown_secound}));\n`;
	return code;
};

 Blockly.JavaScript["ds3231_rtc_get_DateTime"] = function(block) {
    let code = ` DateTime now = rtc.now();\n`;
    return code;
  };

Blockly.JavaScript['ds3231_rtc_get_dayOfWeek'] = function (block) {
    var code = `daysOfTheWeek[now.dayOfTheWeek()]`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['ds3231_rtc_get_hour'] = function (block) {
	var code = `now.hour()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ds3231_rtc_get_minute'] = function (block) {
	var code = `now.minute()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ds3231_rtc_get_second'] = function (block) {
	var code = `now.second()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ds3231_rtc_get_day'] = function (block) {
	var code = `now.day()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ds3231_rtc_get_month'] = function (block) {
	var code = `now.month()`;		
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['ds3231_rtc_get_year'] = function (block) {
	var code = `now.year()`;	
	return [code, Blockly.JavaScript.ORDER_NONE];
};

};