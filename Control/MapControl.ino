/*
 Name:		MapControl.ino
 Created:	1/19/2018 10:49:35 PM
 Author:	ToanND
*/

// the setup function runs once when you press reset or power the board
#include <Servo.h>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <EEPROM.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include "FS.h"
#include <ESP8266FtpServer.h>
#include <Timer.h>
#include <ArduinoJson.h>

#define SPLIT_CHAR '*'

Servo myservo[8];  // create servo object to control a servo 
				// twelve servo objects can be created on most boards

Timer t;

static const char ssid[] = "ESP8266AccessPoint";
static const char password[] = "123456789";

static const char* servo0 = "servo0";
static const char* servo1 = "servo1";
static const char* servo2 = "servo2";
static const char* servo3 = "servo3";
static const char* servo4 = "servo4";
static const char* servo5 = "servo5";
static const char* servo6 = "servo6";
static const char* servo7 = "servo7";

MDNSResponder mdns;
ESP8266WebServer server(80);
ESP8266WiFiMulti WiFiMulti;
FtpServer ftpSrv;
int romsize = 0;
byte value[2];
char connectssid[40];
char connectpassword[40];
char host[100];
int timeout = 0;
int ssidindex = 0;
int passwordindex = 0;
int hostindex = 0;
int count = 0;
char valueindex;
char parse[3];

void setup()
{
	myservo[0].attach(16);  // attaches the servo on GIO2 to the servo object 
	myservo[1].attach(5);
	myservo[2].attach(4);
	myservo[3].attach(0);
	myservo[4].attach(2);
	myservo[5].attach(14);
	myservo[6].attach(12);
	myservo[7].attach(13);
	Serial.begin(9600);
	EEPROM.begin(512);
	for (uint8_t t = 4; t > 0; t--) {
		Serial.printf("[SETUP] BOOT WAIT %d...\r\n", t);
		Serial.flush();
		delay(1000);
	}

	getRomSetting();

	Serial.println(connectssid);
	Serial.println(connectpassword);
	Serial.println(host);

	WiFiMulti.addAP(connectssid, connectpassword);

	while (WiFi.status() != WL_CONNECTED) {
		delay(500);
		timeout++;
		Serial.print(".");
		if (timeout > 20) {
			setup_local_wifi();
			break;
		}
	}

	setup_setting_server();
	Serial.println("WiFi connected");
	Serial.println("IP address: ");
	Serial.println(WiFi.localIP());
}

void loop()
{
	t.update();
	ftpSrv.handleFTP();
	server.handleClient();
}

void handleNotFound() {
	server.send_P(404, "text/plain", "Not Found!");
}

void onPostSetting() {
	auto content = server.arg("plain");
	auto con = content.c_str();
	Serial.println(content);
	memset(parse, '\0', 2);
	memcpy(parse, con, 2);
	romsize = atoi(parse);
	for (int i = 0; i < romsize + 3; i++) {
		EEPROM.write(i, con[i]);
	}
	EEPROM.commit();
	EEPROM.end();
	server.send_P(200, "text/html", "success!");
}

void onGetSetting() {
	getRomSetting();
	String result = "";
	result += connectssid;
	result += SPLIT_CHAR;
	result += connectpassword;
	result += SPLIT_CHAR;
	result += host;
	result += SPLIT_CHAR;
	server.send_P(200, "text/html", result.c_str());
}

void onPostServo() {
	auto content = server.arg("plain");
	auto con = content.c_str();
	//ahihi
	Serial.println(content);
	StaticJsonBuffer<200> jsonBuffer;

	JsonObject& root = jsonBuffer.parseObject(con);
	if (root.containsKey(servo0))
		myservo[0].write((int)(root[servo0]));
	if (root.containsKey(servo1))
		myservo[1].write((int)(root[servo1]));
	if (root.containsKey(servo2))
		myservo[2].write((int)(root[servo2]));
	if (root.containsKey(servo3))
		myservo[3].write((int)(root[servo3]));
	if (root.containsKey(servo4))
		myservo[4].write((int)(root[servo4]));
	if (root.containsKey(servo5))
		myservo[5].write((int)(root[servo5]));
	if (root.containsKey(servo6))
		myservo[6].write((int)(root[servo6]));
	if (root.containsKey(servo7))
		myservo[7].write((int)(root[servo7]));
	server.send_P(200, "text/html", "success!");
}

void getRomSetting() {
	count = 0;
	ssidindex = 0;
	passwordindex = 0;
	hostindex = 0;
	value[0] = EEPROM.read(0);
	value[1] = EEPROM.read(1);
	memset(connectssid, '\0', 40);
	memset(connectpassword, '\0', 40);
	memset(host, '\0', 100);
	romsize = atoi((char*)value);

	for (int i = 0; i < romsize + 3; i++) {
		valueindex = (char)EEPROM.read(i);
		Serial.print(valueindex);
		if (valueindex != SPLIT_CHAR) {
			switch (count) {
			case 1:
				connectssid[ssidindex++] = valueindex;
				break;
			case 2:
				connectpassword[passwordindex++] = valueindex;
				break;
			case 3:
				host[hostindex++] = valueindex;
				break;
			}
		}
		else
			count++;
	}
}
void setup_setting_server() {
	server.on("/servo", HTTPMethod::HTTP_POST, onPostServo);
	server.on("/setting", HTTPMethod::HTTP_POST, onPostSetting);
	server.on("/setting", HTTPMethod::HTTP_GET, onGetSetting);
	server.serveStatic("/", SPIFFS, "/");
	server.onNotFound(handleNotFound);
	if (SPIFFS.begin()) {
		Serial.println("SPIFFS opened!");
		ftpSrv.begin(ssid, password);    //username, password for ftp.  set ports in ESP8266FtpServer.h  (default 21, 50009 for PASV)
	}
	server.begin();
}

void setup_local_wifi() {
	WiFi.softAP(ssid, password);
	WiFi.softAPConfig(IPAddress(192, 168, 1, 69), IPAddress(192, 168, 1, 1), IPAddress(255, 255, 255, 0));
	WiFi.config(IPAddress(192, 168, 1, 69), IPAddress(192, 168, 1, 1), IPAddress(255, 255, 255, 0));
	WiFi.begin();

	Serial.println();
	Serial.print("Connected to ");
	Serial.println(ssid);
	Serial.print("IP address: ");
	Serial.println(WiFi.localIP());
	if (mdns.begin("espWebSock", IPAddress(192, 168, 1, 69))) {
		Serial.println("MDNS responder started");
		mdns.addService("http", "tcp", 80);

	}
	else {
		Serial.println("MDNS.begin failed");
	}
	Serial.print("Connect to http://espWebSock.local or http://");
	Serial.println(WiFi.localIP());

	setup_setting_server();
}
