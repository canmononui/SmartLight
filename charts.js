/*  LOAD DATA FORM DATA_SW1  */
window.addEventListener("load", getData1(genFunction1));

function getData1(callbackIN) {
    var ref = firebase.database().ref("data_sw1");
        // ref.once('value').then(function (snapshot) {
        ref.on('value',function(snapshot) {    
        callbackIN(snapshot.val())
    });
  }

function genFunction1(data1) {
    // var cdata = [];
    /*  ADD  */
    var labelData1 = [];
    var valueData1 = [];
    /*  END ADD  */
    // var len = data.length;
    // const propOwn = Object.entries(data[0]);
    // console.log(propOwn);
    var len1 = Object.keys(data1).length;
    // console.log(data);
    var result1 = Object.keys(data1).map(function(key) {
        return [Number(key), data1[key]];
      });
    //   console.log(result);
    //   console.log(result[0][1]['label']);
    //   console.log(result[0][1]['value']);
    for(var i=0; i<len1; i++) {
    /*  ADD  */
        // labelData.push({
        //     "label": data[i]['label']
        // });
        // valueData.push({
        //     "value": data[i]['value']
        // });
        labelData1.push({
            "label": result1[i][1]['label']
        });
        valueData1.push({
            "value": result1[i][1]['value']
        });
    /*  END ADD  */
    //     cdata.push({
    //     label: data[i]['label'],
    //     value: data[i]['value']
    // });
}
// console.log(cdata);
// console.log(labelData);
// console.log(valueData);

var fusioncharts = new FusionCharts({
    type: 'msstepline',
    renderAt: 'chart-container1',
    width: '850',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "ON/OFF Switch 1",
            "xaxisname": "Time",
            "yaxisname": "ON/OFF",
            "yaxismaxvalue": "1",
            "captionFontColor": "#606060",
            "xaxisnameFontColor": "#606060",
            "yaxisnameFontColor": "#606060",
            "bgColor": "#efc2a3",
            "paletteColors": "#FFFFFF",
        },
        "categories": [{
            "category": labelData1
        }],
        "dataset": [{
            "data": valueData1
        }]
    }
}
);

fusioncharts.render();
}


/*  LOAD DATA FORM DATA_SW2  */
window.addEventListener("load", getData2(genFunction2));

function getData2(callbackIN) {
    var ref = firebase.database().ref("data_sw2");
        ref.on('value',function(snapshot) {    
        callbackIN(snapshot.val())
    });
  }

  function genFunction2(data2) {
    var labelData2 = [];
    var valueData2 = [];
    var len2 = Object.keys(data2).length;
    var result2 = Object.keys(data2).map(function(key) {
        return [Number(key), data2[key]];
      });
    for(var i=0; i<len2; i++) {
        labelData2.push({
            "label": result2[i][1]['label']
        });
        valueData2.push({
            "value": result2[i][1]['value']
        });
}

var fusioncharts = new FusionCharts({
    type: 'msstepline',
    renderAt: 'chart-container2',
    width: '850',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "ON/OFF Switch 1",
            "xaxisname": "Time",
            "yaxisname": "ON/OFF",
            "yaxismaxvalue": "1",
            "captionFontColor": "#606060",
            "xaxisnameFontColor": "#606060",
            "yaxisnameFontColor": "#606060",
            "bgColor": "#fcdbab",
            "paletteColors": "#FFFFFF",
        },
        "categories": [{
            "category": labelData2
        }],
        "dataset": [{
            "data": valueData2
        }]
    }
}
);

fusioncharts.render();
}


/*  LOAD DATA FORM DATA_SW3  */
window.addEventListener("load", getData3(genFunction3));

function getData3(callbackIN) {
    var ref = firebase.database().ref("data_sw3");
        ref.on('value',function(snapshot) {    
        callbackIN(snapshot.val())
    });
  }

  function genFunction3(data3) {
    var labelData3 = [];
    var valueData3 = [];
    var len3 = Object.keys(data3).length;
    var result3 = Object.keys(data3).map(function(key) {
        return [Number(key), data3[key]];
      });
    for(var i=0; i<len3; i++) {
        labelData3.push({
            "label": result3[i][1]['label']
        });
        valueData3.push({
            "value": result3[i][1]['value']
        });
}

var fusioncharts = new FusionCharts({
    type: 'msstepline',
    renderAt: 'chart-container3',
    width: '850',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "ON/OFF Switch 1",
            "xaxisname": "Time",
            "yaxisname": "ON/OFF",
            "yaxismaxvalue": "1",
            "captionFontColor": "#606060",
            "xaxisnameFontColor": "#606060",
            "yaxisnameFontColor": "#606060",
            "bgColor": "#d8bce0",
            "paletteColors": "#FFFFFF",
        },
        "categories": [{
            "category": labelData3
        }],
        "dataset": [{
            "data": valueData3
        }]
    }
}
);

fusioncharts.render();
}