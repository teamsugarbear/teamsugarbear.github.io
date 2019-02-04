google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Day', 'Exercises'],
        [1,  37.8],
        [2,  30.9],
        [3,  25.4],
        [4,  11.7],
        [5,  11.9],
        [6,   8.8],
        [7,   7.6],
        [8,  12.3],
        [9,  16.9],
        [10, 12.8],
        [11,  5.3],
        [12,  6.6],
        [13,  4.8],
        [14,  4.2]
    ]);

    var options = {
        title: 'Exercises This Month',
        hAxis: {title: 'Day'},
        legend: 'bottom',
        lineWidth: 3,
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Meal', 'Blood Sugar'],
        [1,  37.8],
        [2,  30.9],
        [3,  25.4],
        [4,  11.7],
        [5,  11.9],
        [6,   8.8],
        [7,   7.6],
        [8,  12.3],
        [9,  16.9],
        [10, 12.8],
        [11,  5.3],
        [12,  6.6],
        [13,  4.8],
        [14,  4.2]
    ]);

    var options = {
        title: 'Your Blood Sugar',
        hAxis: {title: 'Meal',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        legend: 'bottom',
        lineWidth: 3
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

$(window).resize(function(){
    drawChart1();
    drawChart2();
});