$(function () {
    $("#changeDate1").click(function () {
        $('#field1').attr('src', 'https://thingspeak.com/channels/401458/charts/1?bgcolor=%23ffffff&color=%23d62020&start='+document.getElementById("b1").value+'%2000:00:00&end='+document.getElementById("e1").value+'%2023:59:00&type=line&update=15&title=Meses&xaxis=Data');
    });
});

$(function () {
    $("#changeRange1").click(function () {
        $('#field1').attr('src', 'https://thingspeak.com/channels/401458/charts/1?bgcolor=%23ffffff&color=%23d62020&results='+document.getElementById("range1").value+'&type=line&update=15&&dynamic=true&title=Meses&xaxis=Data');
    });
});

$(function () {
    $("#return1").click(function () {
        $('#field1').attr('src', 'https://thingspeak.com/channels/401458/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Meses&xaxis=Data');
    });
});

$(function () {
    $("#changeDate2").click(function () {
        $('#field2').attr('src', 'https://thingspeak.com/channels/401458/charts/2?bgcolor=%23ffffff&color=%23d62020&start='+document.getElementById("b2").value+'%2000:00:00&end='+document.getElementById("e2").value+'%2023:59:00&type=line&update=15&title=Dias&xaxis=Data');
    });
});

$(function () {
    $("#changeRange2").click(function () {
        $('#field2').attr('src', 'https://thingspeak.com/channels/401458/charts/2?bgcolor=%23ffffff&color=%23d62020&results='+document.getElementById("range2").value+'&type=line&update=15&&dynamic=true&title=Dias&xaxis=Data');
    });
});

$(function () {
    $("#return2").click(function () {
        $('#field2').attr('src', 'https://thingspeak.com/channels/401458/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Dias&xaxis=Data');
    });
});


$(function () {
    $("#changeDate3").click(function () {
        $('#field3').attr('src', 'https://thingspeak.com/channels/401458/charts/3?bgcolor=%23ffffff&color=%23d62020&start='+document.getElementById("b3").value+'%2000:00:00&end='+document.getElementById("e3").value+'%2023:59:00&type=line&update=15&title=Horas&xaxis=Data');
    });
});

$(function () {
    $("#changeRange3").click(function () {
        $('#field3').attr('src', 'https://thingspeak.com/channels/401458/charts/3?bgcolor=%23ffffff&color=%23d62020&results='+document.getElementById("range3").value+'&type=line&update=15&&dynamic=true&title=Horas&xaxis=Data');
    });
});

$(function () {
    $("#return3").click(function () {
        $('#field3').attr('src', 'https://thingspeak.com/channels/401458/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Horas&xaxis=Data');
    });
});


$(function () {
    $("#changeDate4").click(function () {
        $('#field4').attr('src', 'https://thingspeak.com/channels/401458/charts/4?bgcolor=%23ffffff&color=%23d62020&start='+document.getElementById("b4").value+'%2000:00:00&end='+document.getElementById("e4").value+'%2023:59:00&type=line&update=15&title=Minutos&xaxis=Data');
    });
});

$(function () {
    $("#changeRange4").click(function () {
        $('#field4').attr('src', 'https://thingspeak.com/channels/401458/charts/4?bgcolor=%23ffffff&color=%23d62020&results='+document.getElementById("range4").value+'&type=line&update=15&&dynamic=true&title=Minutos&xaxis=Data');
    });
});

$(function () {
    $("#return4").click(function () {
        $('#field4').attr('src', 'https://thingspeak.com/channels/401458/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Minutos&xaxis=Data');
    });
});


$(function () {
    $("#changeDate5").click(function () {
        $('#field5').attr('src', 'https://thingspeak.com/channels/401458/charts/5?bgcolor=%23ffffff&color=%23d62020&start='+document.getElementById("b5").value+'%2000:00:00&end='+document.getElementById("e5").value+'%2023:59:00&type=line&update=15&title=Temperatura&xaxis=Data');
    });
});

$(function () {
    $("#changeRange5").click(function () {
        $('#field5').attr('src', 'https://thingspeak.com/channels/401458/charts/5?bgcolor=%23ffffff&color=%23d62020&results='+document.getElementById("range5").value+'&type=line&update=15&&dynamic=true&title=Temperatura&xaxis=Data');
    });
});

$(function () {
    $("#return5").click(function () {
        $('#field5').attr('src', 'https://thingspeak.com/channels/401458/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Temperatura&xaxis=Data');
    });
});


$(function () {
    $("#changeDate6").click(function () {
        $('#field6').attr('src', 'https://thingspeak.com/channels/401458/charts/6?bgcolor=%23ffffff&color=%23d62020&start='+document.getElementById("b6").value+'%2000:00:00&end='+document.getElementById("e6").value+'%2023:59:00&type=line&update=15&title=Oxigênio&xaxis=Data');
    });
});

$(function () {
    $("#changeRange6").click(function () {
        $('#field6').attr('src', 'https://thingspeak.com/channels/401458/charts/6?bgcolor=%23ffffff&color=%23d62020&results='+document.getElementById("range6").value+'&type=line&update=15&&dynamic=true&title=Oxigênio&xaxis=Data');
    });
});

$(function () {
    $("#return6").click(function () {
        $('#field6').attr('src', 'https://thingspeak.com/channels/401458/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Oxigênio&xaxis=Data');
    });
});

$(function () {
    $("#changeDate7").click(function () {
        $('#field7').attr('src', 'https://thingspeak.com/channels/401458/charts/7?bgcolor=%23ffffff&color=%23d62020&start='+document.getElementById("b7").value+'%2000:00:00&end='+document.getElementById("e7").value+'%2023:59:00&type=line&update=15&title=Bateria&xaxis=Data');
    });
});

$(function () {
    $("#changeRange7").click(function () {
        $('#field7').attr('src', 'https://thingspeak.com/channels/401458/charts/7?bgcolor=%23ffffff&color=%23d62020&results='+document.getElementById("range7").value+'&type=line&update=15&&dynamic=true&title=Bateria&xaxis=Data');
    });
});

$(function () {
    $("#return7").click(function () {
        $('#field7').attr('src', 'https://thingspeak.com/channels/401458/charts/7?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Bateria&xaxis=Data');
    });
});

$(function () {
    $("#changeDate8").click(function () {
        $('#field8').attr('src', 'https://thingspeak.com/channels/401458/charts/8?bgcolor=%23ffffff&color=%23d62020&start='+document.getElementById("b8").value+'%2000:00:00&end='+document.getElementById("e8").value+'%2023:59:00&type=line&update=15&title=Sink_Bat&xaxis=Data');
    });
});

$(function () {
    $("#changeRange8").click(function () {
        $('#field8').attr('src', 'https://thingspeak.com/channels/401458/charts/8?bgcolor=%23ffffff&color=%23d62020&results='+document.getElementById("range8").value+'&type=line&update=15&&dynamic=true&title=Sink_Bat&xaxis=Data');
    });
});

$(function () {
    $("#return8").click(function () {
        $('#field8').attr('src', 'https://thingspeak.com/channels/401458/charts/8?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&title=Sink_Bat&xaxis=Data');
    });
});




$(function(){
    $(".max-today").prop('max', function(){
        return new Date().toJSON().split('T')[0];
    });
});


$(document).ready(function () {
        console.log($(window).width());
        var $gr = $(".graphic");
        var $br = $(".breaker");
        if ($(window).width() < 991) {
            $gr.removeClass('col-md-6').addClass('col-md-8');
            $br.addClass('w-100');
        }
        else{
            $gr.removeClass('col-md-8').addClass('col-md-6');
            $br.removeClass('w-100');
        }
});



$(window).resize(function () {
        console.log($(window).width());
        var $gr = $(".graphic");
        var $br = $(".breaker");
        if ($(window).width() < 991) {
            console.log($(window).width());
            $gr.removeClass('col-md-6').addClass('col-md-8');
            $br.addClass('w-100');
        }
        else{
            $gr.removeClass('col-md-8').addClass('col-md-6');
            $br.removeClass('w-100');
        }
});

var myLineChart = null;
var startDate = null;
var endDate = null;
var qtdResults = null;
var urlTemp1 = null, urlOxy1 = null, urlBat1 = null, urlSink1 = null, urlTemp2 = null, urlOxy2 = null, urlBat2 = null, 
urlSink2 = null, urlTemp3 = null, urlOxy3 = null, urlBat3 = null, urlSink3 = null;

function drawLineChart() {
 Date.prototype.formatDDMMYYYY = function() {
      return this.getDate() +
      "/" +  (this.getMonth()+ 1) +
      "/" +  this.getFullYear() + 
      " " + this.getHours() + 
      ":" + this.getMinutes();
  }
  var labelTemp1 = [], dataTemp1=[], labelOxy1=[], dataOxy1=[], labelBat1 = [], dataBat1 = [], labelSink1 = [], dataSink1 = [],
  labelTemp2 = [], dataTemp2=[], labelOxy2=[], dataOxy2=[], labelBat2 = [], dataBat2 = [], labelSink2 = [], dataSink2 = [], labelTemp3 = [],
  dataTemp3 = [], labelOxy3 = [], dataOxy3 = [], labelBat3 = [], dataBat3 = [], labelSink3 = [], dataSink3 = [];

  var temp1 = document.getElementById("temp1");
  var temp1Data = null;
  if (temp1.checked) {
    temp1 = new XMLHttpRequest();
    temp1.open("GET", urlTemp1, false);
    temp1.send(null);
    temp1Data = JSON.parse(temp1.responseText)["feeds"];
    temp1Data.forEach(function(packet) {
      labelTemp1.push(new Date(packet.created_at));
      dataTemp1.push(parseFloat(packet.field5));
    });        
  }

  var oxy1 = document.getElementById("oxy1");
  var oxy1Data = null;
  if (oxy1.checked) {
    oxy1 = new XMLHttpRequest();
    oxy1.open("GET", urlOxy1, false);
    oxy1.send(null);
    oxy1Data = JSON.parse(oxy1.responseText)["feeds"];
    oxy1Data.forEach(function(packet) {
      labelOxy1.push(new Date(packet.created_at));
      dataOxy1.push(parseFloat(packet.field6));
    });
  }
  
  var bat1 = document.getElementById("bat1");
  var bat1Data = null;
  if (bat1.checked) {
    bat1 = new XMLHttpRequest();
    bat1.open("GET", urlBat1, false);
    bat1.send(null);
    bat1Data = JSON.parse(bat1.responseText)["feeds"];
    bat1Data.forEach(function(packet) {
      labelBat1.push(new Date(packet.created_at));
      dataBat1.push(parseFloat(packet.field7));
    });
  }

  var sink1 = document.getElementById("sink1");
  var sink1Data = null;
  if (sink1.checked) {
    sink1 = new XMLHttpRequest();
    sink1.open("GET", urlSink1, false);
    sink1.send(null);
    sink1Data = JSON.parse(sink1.responseText)["feeds"];
    sink1Data.forEach(function(packet) {
      labelSink1.push(new Date(packet.created_at));
      dataSink1.push(parseFloat(packet.field8));
    });
  }
   
   var tempData = null;
   var graphSet = [];
   var finalDataTemp1 = [];
   var finalTemp1 = null;

   var data1 = null;
   if (temp1Data != null) {
    data1 = labelTemp1;
   }else{
        if (oxy1Data != null) {
        data1 = labelOxy1;
        }else{
            if (bat1Data != null) {
            data1 = labelBat1;
            }else{
                if (sink1Data != null) {
                data1 = labelSink1;
                }
            }
        }
   }

   if (temp1Data != null) {
    for (var i = 0; i < data1.length; i++) {
      finalDataTemp1.push({
        x: data1[i],
        y: dataTemp1[i]
      })
    }
   }

   if (temp1Data != null) {
    finalTemp1 = {
          label                 : "Temperatura - Ponto 1",
          borderColor           : 'red',  
          backgroundColor       : 'red',
          fill                  : false,
          data                  : finalDataTemp1
        };
   }

var finalDataOxy1 = [];
var finalOxy1 = null;

   if (oxy1Data != null) {
    for (var i = 0; i < data1.length; i++) {
      finalDataOxy1.push({
        x: data1[i],
        y: dataOxy1[i]
      })
    }
   }

   if (oxy1Data != null) {
    finalOxy1 = {
          label                 : "Oxigênio - Ponto 1",
          borderColor           : 'blue',  
          backgroundColor       : 'blue',
          fill                  : false,
          data                  : finalDataOxy1
        };
   }

var finalDataBat1 = [];
var finalBat1 = null;

   if (bat1Data != null) {
    for (var i = 0; i < data1.length; i++) {
      finalDataBat1.push({
        x: data1[i],
        y: dataBat1[i]
      })
    }
   }

   if (bat1Data != null) {
    finalBat1 = {
          label                 : "Bateria - Ponto 1",
          borderColor           : 'purple',  
          backgroundColor       : 'purple',
          fill                  : false,
          data                  : finalDataBat1
        };
   }

var finalDataSink1 = [];
var finalSink1 = null;

   if (sink1Data != null) {
    for (var i = 0; i < data1.length; i++) {
      finalDataSink1.push({
        x: data1[i],
        y: dataSink1[i]
      })
    }
   }

   if (sink1Data != null) {
    finalSink1 = {
          label                 : "Sink Bateria - Ponto 1",
          borderColor           : 'green',  
          backgroundColor       : 'green',
          fill                  : false,
          data                  : finalDataSink1
        };
   }


   /**********************************************************************************/

   var temp2 = document.getElementById("temp2");
  var temp2Data = null;
  if (temp2.checked) {
    temp2 = new XMLHttpRequest();
    temp2.open("GET", urlTemp2, false);
    temp2.send(null);
    temp2Data = JSON.parse(temp2.responseText)["feeds"];
    temp2Data.forEach(function(packet) {
      labelTemp2.push(new Date(packet.created_at));
      dataTemp2.push(parseFloat(packet.field5));
    });        
  }

  var oxy2 = document.getElementById("oxy2");
  var oxy2Data = null;
  if (oxy2.checked) {
    oxy2 = new XMLHttpRequest();
    oxy2.open("GET", urlOxy2, false);
    oxy2.send(null);
    oxy2Data = JSON.parse(oxy2.responseText)["feeds"];
    oxy2Data.forEach(function(packet) {
      labelOxy2.push(new Date(packet.created_at));
      dataOxy2.push(parseFloat(packet.field6));
    });
  }
  
  var bat2 = document.getElementById("bat2");
  var bat2Data = null;
  if (bat2.checked) {
    bat2 = new XMLHttpRequest();
    bat2.open("GET", urlBat2, false);
    bat2.send(null);
    bat2Data = JSON.parse(bat2.responseText)["feeds"];
    bat2Data.forEach(function(packet) {
      labelBat2.push(new Date(packet.created_at));
      dataBat2.push(parseFloat(packet.field7));
    });
  }

  var sink2 = document.getElementById("sink2");
  var sink2Data = null;
  if (sink2.checked) {
    sink2 = new XMLHttpRequest();
    sink2.open("GET", urlSink2, false);
    sink2.send(null);
    sink2Data = JSON.parse(sink2.responseText)["feeds"];
    sink2Data.forEach(function(packet) {
      labelSink2.push(new Date(packet.created_at));
      dataSink2.push(parseFloat(packet.field8));
    });
  }

var data2 = null;
   if (temp2Data != null) {
    data2 = labelTemp2;
   }else{
        if (oxy2Data != null) {
        data2 = labelOxy2;
        }else{
            if (bat2Data != null) {
            data2 = labelBat2;
            }else{
                if (sink2Data != null) {
                data2 = labelSink2;
                }
            }
        }
   }

var finalTemp2 = null;
var finalDataTemp2 = [];
   
   if (temp2Data != null) {
    for (var i = 0; i < data2.length; i++) {
      finalDataTemp2.push({
        x: data2[i],
        y: dataTemp2[i]
      })
    }
   }

   if (temp2Data != null) {
    finalTemp2 = {
          label                 : "Temperatura - Ponto 2",
          borderColor           : 'orange',  
          backgroundColor       : 'orange',
          fill                  : false,
          data                  : finalDataTemp2
        };
   }

var finalDataOxy2 = [];
var finalOxy2 = null;

   if (oxy2Data != null) {
    for (var i = 0; i < data2.length; i++) {
      finalDataOxy2.push({
        x: data2[i],
        y: dataOxy2[i]
      })
    }
   }

   if (oxy2Data != null) {
    finalOxy2 = {
          label                 : "Oxigênio - Ponto 2",
          borderColor           : 'pink',  
          backgroundColor       : 'pink',
          fill                  : false,
          data                  : finalDataOxy2
        };
   }

var finalDataBat2 = [];
var finalBat2 = null;

   if (bat2Data != null) {
    for (var i = 0; i < data2.length; i++) {
      finalDataBat2.push({
        x: data2[i],
        y: dataBat2[i]
      })
    }
   }

   if (bat2Data != null) {
    finalBat2 = {
          label                 : "Bateria - Ponto 2",
          borderColor           : 'yellow',  
          backgroundColor       : 'yellow',
          fill                  : false,
          data                  : finalDataBat2
        };
   }

var finalDataSink2 = [];
var finalSink2 = null;

   if (sink2Data != null) {
    for (var i = 0; i < data2.length; i++) {
      finalDataSink2.push({
        x: data2[i],
        y: dataSink2[i]
      })
    }
   }

   if (sink2Data != null) {
    finalSink2 = {
          label                 : "Sink Bateria - Ponto 2",
          borderColor           : 'brown',  
          backgroundColor       : 'brown',
          fill                  : false,
          data                  : finalDataSink2
        };
   }
   /************************************************************************/

  var temp3 = document.getElementById("temp3");
  var temp3Data = null;
  if (temp3.checked) {
    temp3 = new XMLHttpRequest();
    temp3.open("GET", urlTemp3, false);
    temp3.send(null);
    temp3Data = JSON.parse(temp3.responseText)["feeds"];
    temp3Data.forEach(function(packet) {
      labelTemp3.push(new Date(packet.created_at));
      dataTemp3.push(parseFloat(packet.field5));
    });        
  }

  var oxy3 = document.getElementById("oxy3");
  var oxy3Data = null;
  if (oxy3.checked) {
    oxy3 = new XMLHttpRequest();
    oxy3.open("GET", urlOxy3, false);
    oxy3.send(null);
    oxy3Data = JSON.parse(oxy3.responseText)["feeds"];
    oxy3Data.forEach(function(packet) {
      labelOxy3.push(new Date(packet.created_at));
      dataOxy3.push(parseFloat(packet.field6));
    });
  }
  
  var bat3 = document.getElementById("bat3");
  var bat3Data = null;
  if (bat3.checked) {
    bat3 = new XMLHttpRequest();
    bat3.open("GET", urlBat3, false);
    bat3.send(null);
    bat3Data = JSON.parse(bat3.responseText)["feeds"];
    bat3Data.forEach(function(packet) {
      labelBat3.push(new Date(packet.created_at));
      dataBat3.push(parseFloat(packet.field7));
    });
  }

  var sink3 = document.getElementById("sink3");
  var sink3Data = null;
  if (sink3.checked) {
    sink3 = new XMLHttpRequest();
    sink3.open("GET", urlSink3, false);
    sink3.send(null);
    sink3Data = JSON.parse(sink3.responseText)["feeds"];
    sink3Data.forEach(function(packet) {
      labelSink3.push(new Date(packet.created_at));
      dataSink3.push(parseFloat(packet.field8));
    });
  }
   
   var finalDataTemp3 = [];
   var finalTemp3 = null;

   var data3 = null;
   if (temp3Data != null) {
    data3 = labelTemp3;
   }else{
        if (oxy3Data != null) {
        data3 = labelOxy3;
        }else{
            if (bat3Data != null) {
            data3 = labelBat3;
            }else{
                if (sink3Data != null) {
                data3 = labelSink3;
                }
            }
        }
   }

   if (temp3Data != null) {
    for (var i = 0; i < data3.length; i++) {
      finalDataTemp3.push({
        x: data3[i],
        y: dataTemp3[i]
      })
    }
   }

   if (temp3Data != null) {
    finalTemp3 = {
          label                 : "Temperatura - Ponto 3",
          borderColor           : '#ADFF2F',  
          backgroundColor       : '#ADFF2F',
          fill                  : false,
          data                  : finalDataTemp3
        };
   }

var finalDataOxy3 = [];
var finalOxy3 = null;

   if (oxy3Data != null) {
    for (var i = 0; i < data3.length; i++) {
      finalDataOxy3.push({
        x: data3[i],
        y: dataOxy3[i]
      })
    }
   }

   if (oxy3Data != null) {
    finalOxy3 = {
          label                 : "Oxigênio - Ponto 3",
          borderColor           : '#FF1493',  
          backgroundColor       : '#FF1493',
          fill                  : false,
          data                  : finalDataOxy3
        };
   }

var finalDataBat3 = [];
var finalBat3 = null;

   if (bat3Data != null) {
    for (var i = 0; i < data3.length; i++) {
      finalDataBat3.push({
        x: data3[i],
        y: dataBat3[i]
      })
    }
   }

   if (bat3Data != null) {
    finalBat3 = {
          label                 : "Bateria - Ponto 3",
          borderColor           : '#FF7256',  
          backgroundColor       : '#FF7256',
          fill                  : false,
          data                  : finalDataBat3
        };
   }

var finalDataSink3 = [];
var finalSink3 = null;

   if (sink3Data != null) {
    for (var i = 0; i < data3.length; i++) {
      finalDataSink3.push({
        x: data3[i],
        y: dataSink3[i]
      })
    }
   }

   if (sink3Data != null) {
    finalSink3 = {
          label                 : "Sink Bateria - Ponto 3",
          borderColor           : '#728FD0',  
          backgroundColor       : '#728FD0',
          fill                  : false,
          data                  : finalDataSink3
        };
   }

/*********************************************************************************************************************/

   var conc = null;

   var vData1 = false, vData2 = false, vData3 = false;

   if (data1 != null) {
    vData1 = true;
   }
   if (data2 != null) {
    vData2 = true;
   }
   if (data3 != null) {
    vData3 = true;
   }

   if (vData1 && vData2 && vData3) {
    conc = data1.concat(data2);
    conc = conc.concat(data3);
   }
   if (vData1 && vData2 && !vData3) {
    conc = data1.concat(data2);
   }
   if (vData1 && !vData2 && vData3) {
    conc = data1.concat(data3);
   }
   if (vData1 && !vData2 && !vData3) {
    conc = data1;
   }
   if (!vData1 && vData2 && vData3) {
    conc = data2.concat(data3);
   }
   if (!vData1 && vData2 && !vData3) {
    conc = data2;
   }
   if (!vData1 && !vData2 && vData3) {
    conc = data3;
   }

   /*tempData = {
    type : 'line',
    data : {
        labels : data1 != null ? data1 : data2 != null ? data2 : "Erro",
        datasets : graphSet
    }
   };*/

   var dadosFinais = [];

   if (finalTemp1 != null) {
    dadosFinais.push(finalTemp1);
   }
   if (finalOxy1 != null) {
    dadosFinais.push(finalOxy1);
   }
   if (finalBat1 != null) {
    dadosFinais.push(finalBat1);
   }
   if (finalSink1 != null) {
    dadosFinais.push(finalSink1);
   }

   if (finalTemp2 != null) {
    dadosFinais.push(finalTemp2);
   }
   if (finalOxy2 != null) {
    dadosFinais.push(finalOxy2);
   }
   if (finalBat2 != null) {
    dadosFinais.push(finalBat2);
   }
   if (finalSink2 != null) {
    dadosFinais.push(finalSink2);
   }

   if (finalTemp3 != null) {
    dadosFinais.push(finalTemp3);
   }
   if (finalOxy3 != null) {
    dadosFinais.push(finalOxy3);
   }
   if (finalBat3 != null) {
    dadosFinais.push(finalBat3);
   }
   if (finalSink3 != null) {
    dadosFinais.push(finalSink3);
   }


    var timeFormat = 'DD/MM/YYYY HH:mm';
    var tempData = {
      type: 'line',
      data: {
        labels: conc,
        datasets: dadosFinais
      },
      options: {
        title: {
          text: 'Monitoramento Rio Pirapó'
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              parser: timeFormat,
              unit: 'day',
              displayFormat: {
                                    day: 'DD/MM/YYYY'
                                }
            },
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'value'
            }
          }]
        },
      }
    };

   console.log(tempData);
    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("myLineChart").getContext('2d');

    // Instantiate a new chart

    if (myLineChart) { myLineChart.destroy(); }
    myLineChart = new Chart(ctx, tempData);

}

$(function () {
    var condition1, condition2, condition3 = false;
    $("#g0").click(function () {
       startDate = document.getElementById("b0").value;
       if (startDate !== "") {
        condition1 = true;
       }
       endDate = document.getElementById("e0").value;
       if (endDate !== "") {
        console.log('DATA FIM');
        console.log(endDate);
        endDate = new Date(endDate);
        endDate.setDate(endDate.getDate() + 1);
        endDate= endDate.getFullYear() +
        "-" +  (endDate.getMonth()+ 1) +
        "-" +  (endDate.getDate()+1);
        console.log(endDate);
        condition2 = true;
       }
       qtdResults = document.getElementById("range0").value;
       if (qtdResults !== "") {
        condition3 = true;
       }
       if (!condition1 && !condition2 && !condition3) {
        urlTemp1 = 'https://thingspeak.com/channels/401458/field/5.json';
        urlOxy1 = 'https://thingspeak.com/channels/401458/field/6.json';
        urlBat1 = 'https://thingspeak.com/channels/401458/field/7.json';
        urlSink1 = 'https://thingspeak.com/channels/401458/field/8.json';
        urlTemp2 = 'https://thingspeak.com/channels/401461/field/5.json';
        urlOxy2 = 'https://thingspeak.com/channels/401461/field/6.json';
        urlBat2 = 'https://thingspeak.com/channels/401461/field/7.json';
        urlSink2 = 'https://thingspeak.com/channels/401461/field/8.json';
        urlTemp3 = 'https://thingspeak.com/channels/498278/field/5.json';
        urlOxy3 = 'https://thingspeak.com/channels/498278/field/6.json';
        urlBat3 = 'https://thingspeak.com/channels/498278/field/7.json';
        urlSink3 = 'https://thingspeak.com/channels/498278/field/8.json';
       }
       if (condition1 && !condition2 && !condition3) {
        urlTemp1 = 'https://thingspeak.com/channels/401458/field/5.json?start=' + startDate + "%2003:00:00";
        urlOxy1 = 'https://thingspeak.com/channels/401458/field/6.json?start=' + startDate + "%2003:00:00";
        urlBat1 = 'https://thingspeak.com/channels/401458/field/7.json?start=' + startDate + "%2003:00:00";
        urlSink1 = 'https://thingspeak.com/channels/401458/field/8.json?start=' + startDate + "%2003:00:00";
        urlTemp2 = 'https://thingspeak.com/channels/401461/field/5.json?start=' + startDate + "%2003:00:00";
        urlOxy2 = 'https://thingspeak.com/channels/401461/field/6.json?start=' + startDate + "%2003:00:00";
        urlBat2 = 'https://thingspeak.com/channels/401461/field/7.json?start=' + startDate + "%2003:00:00";
        urlSink2 = 'https://thingspeak.com/channels/401461/field/8.json?start=' + startDate + "%2003:00:00";
        urlTemp3 = 'https://thingspeak.com/channels/498278/field/5.json?start=' + startDate + "%2003:00:00";
        urlOxy3 = 'https://thingspeak.com/channels/498278/field/6.json?start=' + startDate + "%2003:00:00";
        urlBat3 = 'https://thingspeak.com/channels/498278/field/7.json?start=' + startDate + "%2003:00:00";
        urlSink3 = 'https://thingspeak.com/channels/498278/field/8.json?start=' + startDate + "%2003:00:00";
       }
       if (condition1 && condition2 && !condition3) {
        urlTemp1 = 'https://thingspeak.com/channels/401458/field/5.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlOxy1 = 'https://thingspeak.com/channels/401458/field/6.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlBat1 = 'https://thingspeak.com/channels/401458/field/7.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlSink1 = 'https://thingspeak.com/channels/401458/field/8.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlTemp2 = 'https://thingspeak.com/channels/401461/field/5.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlOxy2 = 'https://thingspeak.com/channels/401461/field/6.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlBat2 = 'https://thingspeak.com/channels/401461/field/7.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlSink2 = 'https://thingspeak.com/channels/401461/field/8.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlTemp3 = 'https://thingspeak.com/channels/498278/field/5.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlOxy3 = 'https://thingspeak.com/channels/498278/field/6.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlBat3 = 'https://thingspeak.com/channels/498278/field/7.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
        urlSink3 = 'https://thingspeak.com/channels/498278/field/8.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59';
       }
       if (!condition1 && condition2 && !condition3) {
        urlTemp1 = 'https://thingspeak.com/channels/401458/field/5.json?end=' + endDate + '%2002:59:59';
        urlOxy1 = 'https://thingspeak.com/channels/401458/field/6.json?end=' + endDate + '%2002:59:59';
        urlBat1 = 'https://thingspeak.com/channels/401458/field/7.json?end=' + endDate + '%2002:59:59';
        urlSink1 = 'https://thingspeak.com/channels/401458/field/8.json?end=' + endDate + '%2002:59:59';
        urlTemp2 = 'https://thingspeak.com/channels/401461/field/5.json?end=' + endDate + '%2002:59:59';
        urlOxy2 = 'https://thingspeak.com/channels/401461/field/6.json?end=' + endDate + '%2002:59:59';
        urlBat2 = 'https://thingspeak.com/channels/401461/field/7.json?end=' + endDate + '%2002:59:59';
        urlSink2 = 'https://thingspeak.com/channels/401461/field/8.json?end=' + endDate + '%2002:59:59';
        urlTemp3 = 'https://thingspeak.com/channels/498278/field/5.json?end=' + endDate + '%2002:59:59';
        urlOxy3 = 'https://thingspeak.com/channels/498278/field/6.json?end=' + endDate + '%2002:59:59';
        urlBat3 = 'https://thingspeak.com/channels/498278/field/7.json?end=' + endDate + '%2002:59:59';
        urlSink3 = 'https://thingspeak.com/channels/498278/field/8.json?end=' + endDate + '%2002:59:59';
       }
       if (!condition1 && !condition2 && condition3) {
        urlTemp1 = 'https://thingspeak.com/channels/401458/field/5.json?results=' + qtdResults;
        urlOxy1 = 'https://thingspeak.com/channels/401458/field/6.json?results=' + qtdResults;
        urlBat1 = 'https://thingspeak.com/channels/401458/field/7.json?results=' + qtdResults;
        urlSink1 = 'https://thingspeak.com/channels/401458/field/8.json?results=' + qtdResults;
        urlTemp2 = 'https://thingspeak.com/channels/401461/field/5.json?results=' + qtdResults;
        urlOxy2 = 'https://thingspeak.com/channels/401461/field/6.json?results=' + qtdResults;
        urlBat2 = 'https://thingspeak.com/channels/401461/field/7.json?results=' + qtdResults;
        urlSink2 = 'https://thingspeak.com/channels/401461/field/8.json?results=' + qtdResults;
        urlTemp3 = 'https://thingspeak.com/channels/498278/field/5.json?results=' + qtdResults;
        urlOxy3 = 'https://thingspeak.com/channels/498278/field/6.json?results=' + qtdResults;
        urlBat3 = 'https://thingspeak.com/channels/498278/field/7.json?results=' + qtdResults;
        urlSink3 = 'https://thingspeak.com/channels/498278/field/8.json?results=' + qtdResults;
       }
       if (condition1 && condition2 && condition3) {
        urlTemp1 = 'https://thingspeak.com/channels/401458/field/5.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlOxy1 = 'https://thingspeak.com/channels/401458/field/6.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlBat1 = 'https://thingspeak.com/channels/401458/field/7.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlSink1 = 'https://thingspeak.com/channels/401458/field/8.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlTemp2 = 'https://thingspeak.com/channels/401461/field/5.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlOxy2 = 'https://thingspeak.com/channels/401461/field/6.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlBat2 = 'https://thingspeak.com/channels/401461/field/7.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlSink2 = 'https://thingspeak.com/channels/401461/field/8.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlTemp3 = 'https://thingspeak.com/channels/498278/field/5.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlOxy3 = 'https://thingspeak.com/channels/498278/field/6.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlBat3 = 'https://thingspeak.com/channels/498278/field/7.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
        urlSink3 = 'https://thingspeak.com/channels/498278/field/8.json?start=' + startDate + '%2003:00:00&end=' + endDate + '%2002:59:59&results=' + qtdResults;
       }
       //console.log(urlTemp2);
       drawLineChart();
   });
});

    