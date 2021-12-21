let display = require("./menu/config.group.display");
let gpio = require("./menu/config.group.gpio");

const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  //language=HTML format=false
  blocks: [
    display,
    {
      override : true,
      name: "MyOutput",
      index: 4,
      color: "260",
      icon: `file:///${dirIcon}/static/icons/robot.png`,
      blocks: [
		{
          xml: `<sep gap="32"></sep><label text="MySTEMIoTpro Output" web-class="headline"></label>`
        },


          {
              xml:
                  `<block type="MySTEMIoTpro_servo">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="angle">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
          },

          {
              xml:
                  `<block type="MySTEMIoTpro_servo2">
                        <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="dir">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="speed">
                            <shadow type="math_number">
                                <field name="NUM">50</field>
                            </shadow>
                        </value>
                    </block>`
          },
       
		    {
			 xml:
				  `<block type="LED_MySTEMIoTpro">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>

					</block>`
		 },

		 {
			 xml:
				  `<block type="Buzzers_MySTEMIoTpro">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
						<value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },
/*
		 {
			 xml:
				  `<block type="Laser_MySTEMIoTpro">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
						<value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },
*/
		 {
			 xml:
				  `<block type="RGB_MySTEMIoTpro">
                         <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
						<value name="r4_status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="g4_status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="b4_status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },
/*
		 {
			 xml:
				  `<block type="Output_MySTEMIoTpro">
                         <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
						<value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },
*/
		 {
			 xml:
				  `<block type="Relay_MySTEMIoTpro">
                         <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
						<value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },
		 {
			 xml:
				  `<block type="USB_MySTEMIoTpro">
                         <value name="ch">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
						<value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },

      ]
   },
// ]
//  },

 {
      override : true,
      name: "MyTime",
      index: 5,
      color: "230",
      icon: "/static/icons/icons8_Story_Time_96px.png",
      blocks: [

		{
          xml: `<sep gap="32"></sep><label text="MySTEMIoTpro-Real Time Clock" web-class="headline"></label>`
        },

		    "ds3231_rtc_set_datetime",

	    {
			 xml:
				  `<block type="ds3231_rtc_get_DateTime">
                        <value name="status">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
		 },

			'ds3231_rtc_get_dayOfWeek',
			'ds3231_rtc_get_hour',
			'ds3231_rtc_get_minute',
			'ds3231_rtc_get_second',
			'ds3231_rtc_get_day',
			'ds3231_rtc_get_month',
			'ds3231_rtc_get_year',
		{
          xml: `<sep gap="32"></sep><label text="Platform Blocks" web-class="headline"></label>`
        },
 
		{
              xml:
                  `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
          {
              xml:
                  `<block type="time_delay_microsec">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
          },
      ]
  },

    {
      override : true,
      name: "MyInput",
      index: 3,
      color: "230",
      icon: "/static/icons/icons8_thermometer_96px.png",
      blocks: [
		{
          xml: `<sep gap="32"></sep><label text="MySTEMIoTpro Sensor" web-class="headline"></label>`
        },

          'Distance sensor',
          'Hall Magnetic sensor',
		  'LDR sensor',
          'Light sensor',
		  'MQ Gas sensor',
		  'PIR Motion sensor',
		  'Push sensor',
          'Reed sensor',
          'Soil moisture sensor',
          'TCS_read_rgb',
//          'Ultrasonic sensor',
          'dhtesp_setup_MySTEMIoTpro',
          'dhtesp_read_temp_MySTEMIoTpro',
          'dhtesp_read_humid_MySTEMIoTpro',
          'ds18b20_init_MySTEMIoTpro',
          {
                xml:
                   `<block type="ds18b20_get_temperature_MySTEMIoTpro">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
          },
          'IRremote_sensor',
		  {
                xml:
                   `<block type="ds3231_rtc_get_temp">
                        <value name="device">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
          },
	
      ]
  },
  gpio,
  ],
};
