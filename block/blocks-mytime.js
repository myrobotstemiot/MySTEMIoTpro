module.exports = function(Blockly){
'use strict';
// =============================================================================
// rtc
// =============================================================================
// var rtc_colour = Blockly.Msg.RTC_HUE;
var rtc_colour = 0;

Blockly.Blocks['ds3231_rtc_set_datetime'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("RTC adjust DateTime")
		this.appendDummyInput()
			.appendField("DayOfWeek")
			.appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "DOW")
		this.appendDummyInput()
			.appendField("Date")
			.appendField(new Blockly.FieldDropdown([["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"],
			["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"]]), "DAY")
			.appendField("/")
			.appendField(new Blockly.FieldDropdown([["January", "1"], ["February", "2"], ["March", "3"], ["April", "4"], ["May", "5"], ["June", "6"], ["July", "7"], ["Augest", "8"], ["September", "9"], ["October", "10"], ["November", "11"], ["December", "12"]]), "MONTH")
			.appendField("/")
			.appendField(new Blockly.FieldDropdown([["2021", "21"], ["2022", "22"], ["2023", "23"], ["2024", "24"], ["2025", "25"], ["2026", "26"], ["2027", "27"], ["2028", "28"], ["2029", "29"], ["2030", "30"], ["2031", "31"], ["2032", "32"], ["2033", "33"], ["2034", "34"], ["2035", "35"], ["2036", "36"], ["2037", "37"], ["2038", "38"], ["2039", "39"], ["2040", "40"], ["2041", "41"]]), "YEAR")
		this.appendDummyInput()
			.appendField("Time")
			.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"],
			["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "HOUR")
			.appendField(":")
			.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"],
			["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"],
			["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"],
			["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "MINUTE")
			.appendField(":")
			.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"],
			["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"],
			["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"],
			["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "SECOND")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(false);
		this.setColour(rtc_colour);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

   Blockly.Blocks['ds3231_rtc_get_DateTime'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Start get DateTime")
//        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "status")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
      this.setTooltip("");
    }
  };

Blockly.Blocks['ds3231_rtc_get_dayOfWeek'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("get : Day of Week");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(rtc_colour);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['ds3231_rtc_get_hour'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("get : Hour");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(rtc_colour);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['ds3231_rtc_get_minute'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("get : Minute");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(rtc_colour);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['ds3231_rtc_get_second'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("get : Second");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(rtc_colour);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['ds3231_rtc_get_day'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("get : Day");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(rtc_colour);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['ds3231_rtc_get_month'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("get : Month");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(rtc_colour);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['ds3231_rtc_get_year'] = {
	init: function () {
		this.appendDummyInput()
			.appendField("get : Year");
		this.setInputsInline(true);
		this.setOutput(true, "Number");
		this.setColour(rtc_colour);
		this.setTooltip("");
		this.setHelpUrl("");
	}
};

};