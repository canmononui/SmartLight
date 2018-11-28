#include <ESP8266WiFi.h>
#include <time.h>
#include <FirebaseArduino.h>

#define WIFI_SSID       ""
#define WIFI_PASSWORD   ""
#define FIREBASE_HOST ""
#define FIREBASE_AUTH ""
int sw1 = D0;
int sw2 = D1;
int sw3 = D2;
int led_sw1 = D3;
int led_sw2 = D4;
int led_sw3 = D5;
int relay_sw1 = D6;
int relay_sw2 = D7;
int relay_sw3 = D8;
int status_light1 = 0;
int status_light2 = 0;
int status_light3 = 0;
/* SET FOR TIME */
int timezone = 7 * 3600;
int dst = 0;
String hrTimeString;
String minTimeString;
void setup() {
  Serial.begin(9600);
//  Serial.setDebugOutput(true);
  pinMode(sw1, INPUT);
  pinMode(sw2, INPUT);
  pinMode(sw3, INPUT);
  pinMode(led_sw1, OUTPUT);
  pinMode(led_sw2, OUTPUT);
  pinMode(led_sw3, OUTPUT);
  pinMode(relay_sw1, OUTPUT);
  pinMode(relay_sw2, OUTPUT);
  pinMode(relay_sw3, OUTPUT);
  /*  CONNECTING WIFI  */
  Serial.println(WiFi.localIP());
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
 /*  CONNECTING WIFI  */
 /*  CONNECTING TIME SERVER  */
  configTime(timezone, dst, "pool.ntp.org", "time.nist.gov");
  while (!time(nullptr)) {
    Serial.print(".");
    delay(1000);
  }
 /*  CONNECTING TIME SERVER  */
 /*  CONNECTING Firebase  */
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
 /*  CONNECTING FirebaseIFI  */
}


    
void loop() {
//  FirebaseObject sw = Firebase.get("sw");
  FirebaseObject timeSet = Firebase.get("timeSet");
  /*  GET TIME  */
  time_t now = time(nullptr);
  struct tm* p_tm = localtime(&now);
  int hrTime = p_tm->tm_hour;
  int minTime = p_tm->tm_min;
  if(hrTime < 10){
    hrTimeString = String("0" + String(hrTime));
    }
    else{
      hrTimeString = String(hrTime);
      }
  if(minTime < 10){
    minTimeString = String("0" + String(minTime));
    }
    else{
      minTimeString = String(minTime);
      }
  /*  GET TIME  */
  
  /*  CHECK TIME SET SW 1  */
  if(timeSet.getInt("time_sw1/status") == 1){
    if(timeSet.getString("time_sw1/timeOn/hrOn1") == hrTimeString && timeSet.getString("time_sw1/timeOn/minOn1") == minTimeString){
        Serial.println("TIME SET LIGHT1 ON");
        status_light1 = 1;
        digitalWrite(led_sw1, HIGH);
        // RELAY ACTIVE LOW
        digitalWrite(relay_sw1, LOW); 
        Firebase.setInt("sw/sw1", status_light1);
        Firebase.setInt("timeSet/time_sw1/status_light", status_light1);
        /*  PUSH TIME FOR CHART  */
        StaticJsonBuffer<200> jsonBuffer;
        JsonObject& timechartSw1 = jsonBuffer.createObject();
        timechartSw1["label"] = String(hrTimeString + ":" + minTimeString);
        timechartSw1["value"] = status_light1;
        Firebase.push("data_sw1", timechartSw1);
        Serial.println("CHART TIME SW1_1");
        /*  PUSH TIME FOR CHART  */
        delay(500);
      }
    if(timeSet.getString("time_sw1/timeOff/hrOff1") == hrTimeString && timeSet.getString("time_sw1/timeOff/minOff1") == minTimeString){
        Serial.println("TIME SET LIGHT1 OFF");
        status_light1 = 0;
        digitalWrite(led_sw1, LOW);
        digitalWrite(relay_sw1, HIGH);
        Firebase.setInt("sw/sw1", status_light1);
        Firebase.setInt("timeSet/time_sw1/status_light", status_light1); 
        /*  PUSH TIME FOR CHART  */
        StaticJsonBuffer<200> jsonBuffer;
        JsonObject& timechartSw1 = jsonBuffer.createObject();
        timechartSw1["label"] = String(hrTimeString + ":" + minTimeString);
        timechartSw1["value"] = status_light1;
        Firebase.push("data_sw1", timechartSw1);
        Serial.println("CHART TIME SW1_0");
        /*  PUSH TIME FOR CHART  */
        delay(500);
      }
    }
  /*  CHECK TIME SET SW 1  */
  
  /*  CHECK TIME SET SW 2  */
  if(timeSet.getInt("time_sw2/status") == 1){
    if(timeSet.getString("time_sw2/timeOn/hrOn2") == hrTimeString && timeSet.getString("time_sw2/timeOn/minOn2") == minTimeString){
        Serial.println("TIME SET LIGHT2 ON");
        status_light2 = 1;
        digitalWrite(led_sw2, HIGH);
        // RELAY ACTIVE LOW
        digitalWrite(relay_sw2, LOW); 
        Firebase.setInt("sw/sw2", status_light2);
        Firebase.setInt("timeSet/time_sw2/status_light", status_light2);
        /*  PUSH TIME FOR CHART  */
        StaticJsonBuffer<200> jsonBuffer;
        JsonObject& timechartSw2 = jsonBuffer.createObject();
        timechartSw2["label"] = String(hrTimeString + ":" + minTimeString);
        timechartSw2["value"] = status_light2;
        Firebase.push("data_sw2", timechartSw2);
        Serial.println("CHART TIME SW2_1");
        /*  PUSH TIME FOR CHART  */
        delay(500);
      }
    if(timeSet.getString("time_sw2/timeOff/hrOff2") == hrTimeString && timeSet.getString("time_sw2/timeOff/minOff2") == minTimeString){
        Serial.println("TIME SET LIGHT2 OFF");
        status_light2 = 0;
        digitalWrite(led_sw2, LOW);
        digitalWrite(relay_sw2, HIGH);
        Firebase.setInt("sw/sw2", status_light2);
        Firebase.setInt("timeSet/time_sw2/status_light", status_light2); 
        /*  PUSH TIME FOR CHART  */
        StaticJsonBuffer<200> jsonBuffer;
        JsonObject& timechartSw2 = jsonBuffer.createObject();
        timechartSw2["label"] = String(hrTimeString + ":" + minTimeString);
        timechartSw2["value"] = status_light2;
        Firebase.push("data_sw2", timechartSw2);
        Serial.println("CHART TIME SW2_0");
        /*  PUSH TIME FOR CHART  */
        delay(500);
      }
    }
  /*  CHECK TIME SET SW 2  */

  /*  CHECK TIME SET SW 3  */
  if(timeSet.getInt("time_sw3/status") == 1){
    if(timeSet.getString("time_sw3/timeOn/hrOn3") == hrTimeString && timeSet.getString("time_sw3/timeOn/minOn3") == minTimeString){
        Serial.println("TIME SET LIGHT3 ON");
        status_light3 = 1;
        digitalWrite(led_sw3, HIGH);
        // RELAY ACTIVE LOW
        digitalWrite(relay_sw3, LOW); 
        Firebase.setInt("sw/sw3", status_light3);
        Firebase.setInt("timeSet/time_sw3/status_light", status_light3);
        /*  PUSH TIME FOR CHART  */
        StaticJsonBuffer<200> jsonBuffer;
        JsonObject& timechartSw3 = jsonBuffer.createObject();
        timechartSw3["label"] = String(hrTimeString + ":" + minTimeString);
        timechartSw3["value"] = status_light3;
        Firebase.push("data_sw3", timechartSw3);
        Serial.println("CHART TIME SW3_1");
        /*  PUSH TIME FOR CHART  */
        delay(500);
      }
    if(timeSet.getString("time_sw3/timeOff/hrOff3") == hrTimeString && timeSet.getString("time_sw3/timeOff/minOff3") == minTimeString){
        Serial.println("TIME SET LIGHT3 OFF");
        status_light3 = 0;
        digitalWrite(led_sw3, LOW);
        digitalWrite(relay_sw3, HIGH);
        Firebase.setInt("sw/sw3", status_light3); 
        Firebase.setInt("timeSet/time_sw3/status_light", status_light3);
        /*  PUSH TIME FOR CHART  */
        StaticJsonBuffer<200> jsonBuffer;
        JsonObject& timechartSw3 = jsonBuffer.createObject();
        timechartSw3["label"] = String(hrTimeString + ":" + minTimeString);
        timechartSw3["value"] = status_light3;
        Firebase.push("data_sw3", timechartSw3);
        Serial.println("CHART TIME SW3_0");
        /*  PUSH TIME FOR CHART  */
        delay(500);
      }
    }
  /*  CHECK TIME SET SW 3  */
  
/*  =================================================== LIGHT 1 ===================================================  */
/*  SWITCH ON WHEN LIGHT OFF = LIGHT ON */
  if(status_light1 == 0 && Firebase.getInt("sw/sw1") == 1){
    Serial.println("LIGHT1 ON");
    status_light1 = 1;
    digitalWrite(led_sw1, HIGH);
    // RELAY ACTIVE LOW
    digitalWrite(relay_sw1, LOW);
    }
  if(status_light1 == 0 && digitalRead(sw1) == 1){
    Serial.println("LIGHT1 ON");
    status_light1 = 1;
    digitalWrite(led_sw1, HIGH);
    // RELAY ACTIVE LOW
    digitalWrite(relay_sw1, LOW); 
    Firebase.setInt("sw/sw1", status_light1);
      /*  PUSH TIME FOR CHART  */
      StaticJsonBuffer<200> jsonBuffer;
      JsonObject& timechartSw1 = jsonBuffer.createObject();
      timechartSw1["label"] = String(hrTimeString + ":" + minTimeString);
      timechartSw1["value"] = status_light1;
      Firebase.push("data_sw1", timechartSw1);
      Serial.println("CHART PRESS SW1_1");
      /*  PUSH TIME FOR CHART  */
    delay(500);
    }
/*  SWITCH ON WHEN LIGHT OFF = LIGHT ON */

/*  SWITCH ON WHEN LIGHT ON = LIGHT OFF */
  if(status_light1 == 1 && Firebase.getInt("sw/sw1") == 0){
    Serial.println("LIGHT1 OFF");
    status_light1 = 0;
    digitalWrite(led_sw1, LOW);
    // RELAY ACTIVE LOW
    digitalWrite(relay_sw1, HIGH);
    if(timeSet.getInt("time_sw1/status_light") == 1){
      Firebase.setInt("timeSet/time_sw1/status_light", status_light1);
      }
    }
  if(status_light1 == 1 && digitalRead(sw1) == 1){
    Serial.println("LIGHT1 OFF");
    status_light1 = 0;
    digitalWrite(led_sw1, LOW);
    // RELAY ACTIVE LOW
    digitalWrite(relay_sw1, HIGH);
    Firebase.setInt("sw/sw1", status_light1);
    if(timeSet.getInt("time_sw1/status_light") == 1){
      Firebase.setInt("timeSet/time_sw1/status_light", status_light1);
      }
      /*  PUSH TIME FOR CHART  */
      StaticJsonBuffer<200> jsonBuffer;
      JsonObject& timechartSw1 = jsonBuffer.createObject();
      timechartSw1["label"] = String(hrTimeString + ":" + minTimeString);
      timechartSw1["value"] = status_light1;
      Firebase.push("data_sw1", timechartSw1);
      Serial.println("CHART PRESS SW1_0");
      /*  PUSH TIME FOR CHART  */
    delay(500);
    }
/*  SWITCH ON WHEN LIGHT ON = LIGHT OFF */
/*  =================================================== LIGHT 1 ===================================================  */

/*  =================================================== LIGHT 2 ===================================================  */
/*  SWITCH ON WHEN LIGHT OFF = LIGHT ON */
  if(status_light2 == 0 && Firebase.getInt("sw/sw2") == 1){
    Serial.println("LIGHT2 ON");
    status_light2 = 1;
    digitalWrite(led_sw2, HIGH);
    // RELAY ACTIVE LOW
    digitalWrite(relay_sw2, LOW);
    }
  if(status_light2 == 0 && digitalRead(sw2) == 1){
    Serial.println("LIGHT2 ON");
    status_light2 = 1;
    digitalWrite(led_sw2, HIGH);
    // RELAY ACTIVE LOW
    digitalWrite(relay_sw2, LOW); 
    Firebase.setInt("sw/sw2", status_light2);
      /*  PUSH TIME FOR CHART  */
      StaticJsonBuffer<200> jsonBuffer;
      JsonObject& timechartSw2 = jsonBuffer.createObject();
      timechartSw2["label"] = String(hrTimeString + ":" + minTimeString);
      timechartSw2["value"] = status_light2;
      Firebase.push("data_sw2", timechartSw2);
      Serial.println("CHART PRESS SW2_1");
      /*  PUSH TIME FOR CHART  */
    delay(500);
    }
/*  SWITCH ON WHEN LIGHT OFF = LIGHT ON */

/*  SWITCH ON WHEN LIGHT ON = LIGHT OFF */
  if(status_light2 == 1 && Firebase.getInt("sw/sw2") == 0){
    Serial.println("LIGHT2 OFF");
    status_light2 = 0;
    digitalWrite(led_sw2, LOW);
    digitalWrite(relay_sw2, HIGH);
    if(timeSet.getInt("time_sw2/status_light") == 1){
      Firebase.setInt("timeSet/time_sw2/status_light", status_light2);
      }
  }
  if(status_light2 == 1 && digitalRead(sw2) == 1){
    Serial.println("LIGHT2 OFF");
    status_light2 = 0;
    digitalWrite(led_sw2, LOW);
    digitalWrite(relay_sw2, HIGH);
    Firebase.setInt("sw/sw2", status_light2); 
    if(timeSet.getInt("time_sw2/status_light") == 1){
      Firebase.setInt("timeSet/time_sw2/status_light", status_light2);
      }
      /*  PUSH TIME FOR CHART  */
      StaticJsonBuffer<200> jsonBuffer;
      JsonObject& timechartSw2 = jsonBuffer.createObject();
      timechartSw2["label"] = String(hrTimeString + ":" + minTimeString);
      timechartSw2["value"] = status_light2;
      Firebase.push("data_sw2", timechartSw2);
      Serial.println("CHART PRESS SW2_0");
      /*  PUSH TIME FOR CHART  */
    delay(500);
    }
/*  SWITCH ON WHEN LIGHT ON = LIGHT OFF */
/*  =================================================== LIGHT 2 ===================================================  */

/*  =================================================== LIGHT 3 ===================================================  */
/*  SWITCH ON WHEN LIGHT OFF = LIGHT ON */
  if(status_light3 == 0 && Firebase.getInt("sw/sw3") == 1){
    Serial.println("LIGHT3 ON");
    status_light3 = 1;
    digitalWrite(led_sw3, HIGH);
    // RELAY ACTIVE LOW
    digitalWrite(relay_sw3, LOW); 
    }
  if(status_light3 == 0 && digitalRead(sw3) == 1){
    Serial.println("LIGHT3 ON");
    status_light3 = 1;
    digitalWrite(led_sw3, HIGH);
    // RELAY ACTIVE LOW
    digitalWrite(relay_sw3, LOW);  
    Firebase.setInt("sw/sw3", status_light3);
      /*  PUSH TIME FOR CHART  */
      StaticJsonBuffer<200> jsonBuffer;
      JsonObject& timechartSw3 = jsonBuffer.createObject();
      timechartSw3["label"] = String(hrTimeString + ":" + minTimeString);
      timechartSw3["value"] = status_light3;
      Firebase.push("data_sw3", timechartSw3);
      Serial.println("CHART PRESS SW3_1");
      /*  PUSH TIME FOR CHART  */
   delay(500);
   }
/*  SWITCH ON WHEN LIGHT OFF = LIGHT ON */

/*  SWITCH ON WHEN LIGHT ON = LIGHT OFF */
  if(status_light3 == 1 && Firebase.getInt("sw/sw3") == 0){
    Serial.println("LIGHT3 OFF");
    status_light3 = 0;
    digitalWrite(led_sw3, LOW);
    digitalWrite(relay_sw3, HIGH);
    if(timeSet.getInt("time_sw3/status_light") == 1){
      Firebase.setInt("timeSet/time_sw3/status_light", status_light3);
      }
  }
  if(status_light3 == 1 && digitalRead(sw3) == 1){
    Serial.println("LIGHT3 OFF");
    status_light3 = 0;
    digitalWrite(led_sw3, LOW);
    digitalWrite(relay_sw3, HIGH);
    Firebase.setInt("sw/sw3", status_light3);
    if(timeSet.getInt("time_sw3/status_light") == 1){
      Firebase.setInt("timeSet/time_sw3/status_light", status_light3);
      }
      /*  PUSH TIME FOR CHART  */
      StaticJsonBuffer<200> jsonBuffer;
      JsonObject& timechartSw3 = jsonBuffer.createObject();
      timechartSw3["label"] = String(hrTimeString + ":" + minTimeString);
      timechartSw3["value"] = status_light3;
      Firebase.push("data_sw3", timechartSw3);
      Serial.println("CHART PRESS SW3_0");
      /*  PUSH TIME FOR CHART  */
    delay(500);
    }
/*  SWITCH ON WHEN LIGHT ON = LIGHT OFF */
/*  =================================================== LIGHT 3 ===================================================  */

} /*  END LOOP  */

