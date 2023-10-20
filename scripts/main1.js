<div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> 
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
 </div> 
$(document).ready(function() {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: '2019 Hate Crime Incidents'
        },
        // ... (rest of the chart configuration)
    });
});

$(function () {
    $('#something').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: '2019 Hate Crimes Against Race'
        },
        // ... (rest of the pie chart configuration)
    });
});