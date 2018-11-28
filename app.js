var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

/* CHECK FIREBASE CONTROL BUTTON */
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.on('value',function(snapshot) {
    if(snapshot.child("sw1").val() == 1){
      document.getElementById("btn1").classList.add("active");
    }
    else{
      document.getElementById("btn1").classList.remove("active");
    }
    if(snapshot.child("sw2").val() == 1){
      document.getElementById("btn2").classList.add("active");
    }
    else{
      document.getElementById("btn2").classList.remove("active");
    }
    if(snapshot.child("sw3").val() == 1){
      document.getElementById("btn3").classList.add("active");
    }
    else{
      document.getElementById("btn3").classList.remove("active");
    }
    // console.log(snapshot.child("sw1").val());
    // console.log(snapshot.child("sw2").val());
    // console.log(snapshot.child("sw3").val());
  });

/* WHEN PRESS BUTTON ON ALL */
function onAll(){
  // var button = document.getElementById("btnOnAll");
  // var firebaseRef = firebase.database().ref("sw");
  /*  CHECK SW1  */
  var button1 = document.getElementById("btn1");
  if (button1.classList.contains("active")) {
  }else{
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw1: 1});
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw1");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 1,
    });
  }
  /*  CHECK SW2  */
  var button2 = document.getElementById("btn2");
  if (button2.classList.contains("active")) {
  }else{
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw2: 1});
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw2");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 1,
    });
  }
  /*  CHECK SW3  */
  var button3 = document.getElementById("btn3");
  if (button3.classList.contains("active")) {
  }else{
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw3: 1});
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw3");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 1,
    });
  }
  // firebaseRef.update({ sw2: 1});
  // firebaseRef.update({ sw3: 1});
}

/* WHEN PRESS BUTTON OFF ALL */
function offAll(){
  // var button1 = document.getElementById("btnOffAll");
  // var firebaseRef = firebase.database().ref("sw");
  /*  CHECK SW1  */
  var button1 = document.getElementById("btn1");
  if (button1.classList.contains("active")) {
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw1: 0});
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw1");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 0,
    });
  }
/*  CHECK SW2  */
var button2 = document.getElementById("btn2");
if (button2.classList.contains("active")) {
  var firebaseRef = firebase.database().ref("sw");
  firebaseRef.update({ sw2: 0});
  var getTimeServer = new Date();
  if(getTimeServer.getHours() < 10){
    var getHr = "0" + getTimeServer.getHours();
  }else{
    var getHr = getTimeServer.getHours();
  }
  if(getTimeServer.getMinutes() < 10){
    var getMin = "0" + getTimeServer.getMinutes();
  }else{
    var getMin = getTimeServer.getMinutes();
  }
  var timeServer = getHr + ":" + getMin;
  var firebaseRef = firebase.database().ref("/data_sw2");
  firebaseRef.push({ 
    "label": timeServer,
    "value": 0,
  });
}
/*  CHECK SW3  */
var button3 = document.getElementById("btn3");
if (button3.classList.contains("active")) {
  var firebaseRef = firebase.database().ref("sw");
  firebaseRef.update({ sw3: 0});
  var getTimeServer = new Date();
  if(getTimeServer.getHours() < 10){
    var getHr = "0" + getTimeServer.getHours();
  }else{
    var getHr = getTimeServer.getHours();
  }
  if(getTimeServer.getMinutes() < 10){
    var getMin = "0" + getTimeServer.getMinutes();
  }else{
    var getMin = getTimeServer.getMinutes();
  }
  var timeServer = getHr + ":" + getMin;
  var firebaseRef = firebase.database().ref("/data_sw3");
  firebaseRef.push({ 
    "label": timeServer,
    "value": 0,
  });
}
  // firebaseRef.update({ sw2: 0});
  // firebaseRef.update({ sw3: 0});
}

/* WHEN PRESS BUTTON 1 */
function btn1Update(){
  var button = document.getElementById("btn1");
  if (button.classList.contains("active")) { 
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw1: 0});
    console.log("set to firebase sw1: 0");
    // document.getElementById("btn1").classList.remove("active");
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw1");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 0,
    });
  } else {
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw1: 1});
    console.log("set to firebase sw1: 1");
    // document.getElementById("btn1").classList.add("active");
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw1");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 1,
    });
  }
}
/* WHEN PRESS BUTTON 2 */
function btn2Update(){
  var button = document.getElementById("btn2"); 
  if (button.classList.contains("active")) { 
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw2: 0});
    console.log("set to firebase sw2: 0");
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw2");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 0,
    });
  } else { 
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw2: 1});
    console.log("set to firebase sw2: 1");
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw2");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 1,
    });
  }
}
/* WHEN PRESS BUTTON 3 */
function btn3Update(){
  var button = document.getElementById("btn3"); 
  if (button.classList.contains("active")) { 
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw3: 0});
    console.log("set to firebase sw3: 0");
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw3");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 0,
    });
  } else { 
    var firebaseRef = firebase.database().ref("sw");
    firebaseRef.update({ sw3: 1});
    console.log("set to firebase sw3: 1");
    var getTimeServer = new Date();
    if(getTimeServer.getHours() < 10){
      var getHr = "0" + getTimeServer.getHours();
    }else{
      var getHr = getTimeServer.getHours();
    }
    if(getTimeServer.getMinutes() < 10){
      var getMin = "0" + getTimeServer.getMinutes();
    }else{
      var getMin = getTimeServer.getMinutes();
    }
    var timeServer = getHr + ":" + getMin;
    var firebaseRef = firebase.database().ref("/data_sw3");
    firebaseRef.push({ 
      "label": timeServer,
      "value": 1,
    });
  }
}

/* CHECK FIREBASE CONTROL BUTTON SET TIME ON/OFF */
var firebaseRef = firebase.database().ref("timeSet");
firebaseRef.on('value',function(snapshot) {
if(snapshot.child("/time_sw1/status").val() == 1){
  document.getElementById("btntimeOnOff1").classList.add("active");
}
else{
  document.getElementById("btntimeOnOff1").classList.remove("active");
}
if(snapshot.child("/time_sw2/status").val() == 1){
  document.getElementById("btntimeOnOff2").classList.add("active");
}
else{
  document.getElementById("btntimeOnOff2").classList.remove("active");
}
if(snapshot.child("/time_sw3/status").val() == 1){
  document.getElementById("btntimeOnOff3").classList.add("active");
}
else{
  document.getElementById("btntimeOnOff3").classList.remove("active");
}
});

/* WHEN PRESS BUTTON SET TIME SW 1 ON/OFF*/
function timeOnOff1(){
  var button = document.getElementById("btntimeOnOff1"); 
  if (button.classList.contains("active")) { 
    var firebaseRef = firebase.database().ref("/timeSet/time_sw1/");
    firebaseRef.update({ status: 0});
    console.log("time_sw1 status: 0");
//-----------------------------------------------------------------------------------------    
  } else { 
    var firebaseRef = firebase.database().ref("timeSet/time_sw1/");
    firebaseRef.update({ status: 1});
    console.log("time_sw1 status: 1");
  }
}

/* WHEN PRESS BUTTON SET TIME SW 2 ON/OFF*/
function timeOnOff2(){
  var button = document.getElementById("btntimeOnOff2"); 
  if (button.classList.contains("active")) { 
    var firebaseRef = firebase.database().ref("/timeSet/time_sw2/");
    firebaseRef.update({ status: 0});
    console.log("time_sw2 status: 0");
  } else { 
    var firebaseRef = firebase.database().ref("timeSet/time_sw2/");
    firebaseRef.update({ status: 1});
    console.log("time_sw2 status: 1");
  }
}

/* WHEN PRESS BUTTON SET TIME SW 3 ON/OFF*/
function timeOnOff3(){
  var button = document.getElementById("btntimeOnOff3"); 
  if (button.classList.contains("active")) { 
    var firebaseRef = firebase.database().ref("/timeSet/time_sw3/");
    firebaseRef.update({ status: 0});
    console.log("time_sw3 status: 0");
  } else { 
    var firebaseRef = firebase.database().ref("timeSet/time_sw3/");
    firebaseRef.update({ status: 1});
    console.log("time_sw3 status: 1");
  }
}

/* WHEN PRESS BUTTON SAVE TIME SW 1 ON/OFF*/
function saveTimeOnOff1(){
  var seHrOn1 = document.getElementById("hrOn1").selectedIndex;
  var opHrOn1 = document.getElementById("hrOn1").options;
  var seMinOn1 = document.getElementById("minOn1").selectedIndex;
  var opMinOn1 = document.getElementById("minOn1").options;
  var seHrOff1 = document.getElementById("hrOff1").selectedIndex;
  var opHrOff1 = document.getElementById("hrOff1").options;
  var seMinOff1 = document.getElementById("minOff1").selectedIndex; 
  var opMinOff1 = document.getElementById("minOff1").options; 

  var firebaseRef = firebase.database().ref("/timeSet/time_sw1/timeOn");
  firebaseRef.update({ hrOn1: opHrOn1[seHrOn1].text});
  firebaseRef.update({ minOn1: opMinOn1[seMinOn1].text});

  var firebaseRef = firebase.database().ref("/timeSet/time_sw1/timeOff");
  firebaseRef.update({ hrOff1: opHrOff1[seHrOff1].text});
  firebaseRef.update({ minOff1: opMinOff1[seMinOff1].text});

  console.log("set time on/off: " + opHrOn1[seHrOn1].text + ":" + opMinOn1[seMinOn1].text + "-" + opHrOff1[seHrOff1].text + ":" + opMinOff1[seMinOff1].text);
}

/* WHEN PRESS BUTTON SAVE TIME SW 2 ON/OFF*/
function saveTimeOnOff2(){
  var seHrOn2 = document.getElementById("hrOn2").selectedIndex;
  var opHrOn2 = document.getElementById("hrOn2").options;
  var seMinOn2 = document.getElementById("minOn2").selectedIndex;
  var opMinOn2 = document.getElementById("minOn2").options;
  var seHrOff2 = document.getElementById("hrOff2").selectedIndex;
  var opHrOff2 = document.getElementById("hrOff2").options;
  var seMinOff2 = document.getElementById("minOff2").selectedIndex; 
  var opMinOff2 = document.getElementById("minOff2").options; 

  var firebaseRef = firebase.database().ref("/timeSet/time_sw2/timeOn");
  firebaseRef.update({ hrOn2: opHrOn2[seHrOn2].text});
  firebaseRef.update({ minOn2: opMinOn2[seMinOn2].text});

  var firebaseRef = firebase.database().ref("/timeSet/time_sw2/timeOff");
  firebaseRef.update({ hrOff2: opHrOff2[seHrOff2].text});
  firebaseRef.update({ minOff2: opMinOff2[seMinOff2].text});

  console.log("set time on/off: " + opHrOn2[seHrOn2].text + ":" + opMinOn2[seMinOn2].text + "-" + opHrOff2[seHrOff2].text + ":" + opMinOff2[seMinOff2].text);
}

/* WHEN PRESS BUTTON SAVE TIME SW 3 ON/OFF*/
function saveTimeOnOff3(){
  var seHrOn3 = document.getElementById("hrOn3").selectedIndex;
  var opHrOn3 = document.getElementById("hrOn3").options;
  var seMinOn3 = document.getElementById("minOn3").selectedIndex;
  var opMinOn3 = document.getElementById("minOn3").options;
  var seHrOff3 = document.getElementById("hrOff3").selectedIndex;
  var opHrOff3 = document.getElementById("hrOff3").options;
  var seMinOff3 = document.getElementById("minOff3").selectedIndex; 
  var opMinOff3 = document.getElementById("minOff3").options; 

  var firebaseRef = firebase.database().ref("/timeSet/time_sw3/timeOn");
  firebaseRef.update({ hrOn3: opHrOn3[seHrOn3].text});
  firebaseRef.update({ minOn3: opMinOn3[seMinOn3].text});

  var firebaseRef = firebase.database().ref("/timeSet/time_sw3/timeOff");
  firebaseRef.update({ hrOff3: opHrOff3[seHrOff3].text});
  firebaseRef.update({ minOff3: opMinOff3[seMinOff3].text});

  console.log("set time on/off: " + opHrOn3[seHrOn3].text + ":" + opMinOn3[seMinOn3].text + "-" + opHrOff3[seHrOff3].text + ":" + opMinOff3[seMinOff3].text);
}


/* GET TIME SW 1 ON/OFF */
var firebaseRef = firebase.database().ref("/timeSet/time_sw1/");
firebaseRef.on('value',function(snapshot) {
  var timeSetSw1 = "  " + snapshot.child("timeOn/hrOn1").val() + ":" + snapshot.child("timeOn/minOn1").val() + "-" + snapshot.child("timeOff/hrOff1").val() + ":" + snapshot.child("timeOff/minOff1").val();
  // console.log(timeSetSw1);
  document.getElementById("getTime1").innerHTML = timeSetSw1;
});

/* GET TIME SW 2 ON/OFF */
var firebaseRef = firebase.database().ref("/timeSet/time_sw2/");
firebaseRef.on('value',function(snapshot) {
  var timeSetSw2 = "  " + snapshot.child("timeOn/hrOn2").val() + ":" + snapshot.child("timeOn/minOn2").val() + "-" + snapshot.child("timeOff/hrOff2").val() + ":" + snapshot.child("timeOff/minOff2").val();
  // console.log(timeSetSw2);
  document.getElementById("getTime2").innerHTML = timeSetSw2;
});

/* GET TIME SW 3 ON/OFF */
var firebaseRef = firebase.database().ref("/timeSet/time_sw3/");
firebaseRef.on('value',function(snapshot) {
  var timeSetSw3 = "  " + snapshot.child("timeOn/hrOn3").val() + ":" + snapshot.child("timeOn/minOn3").val() + "-" + snapshot.child("timeOff/hrOff3").val() + ":" + snapshot.child("timeOff/minOff3").val();
  // console.log(timeSetSw3);
  document.getElementById("getTime3").innerHTML = timeSetSw3;
});