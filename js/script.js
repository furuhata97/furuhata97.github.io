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
