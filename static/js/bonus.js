//function to build gauge chart
function oldbuildGauge(wfreq) {
    //calculate wfreq as a fraction of 9
    var fraction = wfreq/9;
    console.log(wfreq);
    //use trigonometry to calculate meter point
    var level = fraction * 180;
    var degrees = 180 - level, radius = .5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    //Path
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    var path = mainPath.concat(pathX, space, pathY, pathEnd);

    //create data object
    var data = [{ 
        type: 'scatter',
        x: [0],
        y: [0],
        marker: {size: 28, color: '850000'},
        showlegend: false,
        name: ' wpw',
        text: wfreq,
        hoverinfo: 'text+name'},
        {
            values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
            rotation: 90,
            text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
            textinfo: 'text',
            textposition: 'inside',
            marker: {
                colors: ['rgba(119, 170, 221, .5)', 
                'rgba(153, 221, 255, .5)', 
                'rgba(68, 187, 153, .5)', 
                'rgba(187, 204, 51, .5)', 'rgba(170, 170, 0, .5)', 
                'rgba(238, 221, 136, .5)', 'rgba(238, 136, 102, .5)', 
                'rgba(255, 170, 187, .5)', 'rgba(221, 221, 221, .5)', 
                'rgba(255, 255, 255, 0)']
            },
            labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
            hoverinfo: 'label',
            hole: .5,
            type: 'pie',
            showlegend: false
    }];

    //create layout object
    var layout = {
        shapes:[{
            type: 'path',
            path: path,
            fillcolor: '850000',
            line: {
                color: '850000'
            }
        }],
        title: 'Belly Button Washing Frequency\nScrubs Per Week',
        xaxis: {
            zeroline: false, 
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        },
        yaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        }
    };

    //plot
    Plotly.newPlot("gauge", data, layout);
}

function BuildGauge(wfreq) 
{
    //Split the wedges into 9 parts for 50% of the pie
    let values = [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50];
    let labels = ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''];
    
    let split = wfreq/9;

    let level = split * 180;
    let degrees = 180 - level, radius = .5;
    let radians = degrees * Math.PI / 180;
    let x = radius * Math.cos(radians);
    let y = radius * Math.sin(radians);
    // console.log(x);
    // console.log(y);

    let mainPath = "M -.0 -0.025 L .0 0.025 L";
    let pathX = String(x);
    let space = " ";
    let pathY = String(y);
    let pathEnd = ' Z';
    let path = mainPath.concat(pathX, space, pathY, pathEnd);

    var data = [{ 
        // type: 'scatter',
        x: [0],
        y: [0],
        marker: {size: 8, color: '850000'},
        showlegend: false,
        name: "Scrubs / Week",
        text: wfreq,
        hoverinfo: 'text+name'},
        {
            values: values, // [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
            rotation: 90,
            text: labels, // ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
            textinfo: 'text',
            textposition: 'inside',
            marker: {
                colors: [
                'rgb(132, 181, 136)', 
                'rgb(136, 188, 141)', 
                'rgb(138, 192, 134)', 
                'rgb(183, 205, 143)', 
                'rgb(213, 229, 153)', 
                'rgb(229, 232, 176)', 
                'rgb(233, 230, 201)', 
                'rgb(244, 241, 228)', 
                'rgb(248, 243, 236)', 
                'rgb(255, 255, 255)']
            },
            labels: labels, //['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
            hoverinfo: 'label',
            hole: .5,
            type: 'pie',
            showlegend: false
    }];
//     base_chart = [{
//         values: values,
//         labels: labels,
//         textposition: 'inside',
//         marker: {
//             colors: colors,
//             line: {
//                 width: 1,
//                 color: "black"
//             }
//         },
//         name = "Gauge",
//         hole: .5,
//         type: 'pie',
//         direction: "clockwise",
//         sort: false,
//         textinfo: 'text',
//         hoverinfo: 'label',
//         showlegend: false
//     }];
    let layout = 
    {
        title: "Belly Button Washing Frequency<br>Scrubs per Week",
        xaxis: {
            zeroline: false, 
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        },
        yaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false,
            range: [-1, 1]
        },
        shapes:[
        {
            type: 'path',
            path: path,
            fillcolor: '850000',
            line: {
                color: '850000',
                width: 0.5
            }
            // xref: 'paper',
            // yref: 'paper'

            // type: "path",
            // path: path, //'M 0.235 0.5 L 0.24 0.62 L 0.245 0.5 Z',
            // fillcolor: 'rgba(44, 160, 101, 0.5)',
            // line: {
            //     width: 0.5
            // },
            // xref: 'paper',
            // yref: 'paper'
        }]
    };
//     var layout = {
//         shapes:[{
//             type: 'path',
//             path: path,
//             fillcolor: '850000',
//             line: {
//                 color: '850000'
//             }
//         }],
//         title: 'Belly Button Washing Frequency\nScrubs Per Week',
//         xaxis: {
//             zeroline: false, 
//             showticklabels: false,
//             showgrid: false,
//             range: [-1, 1]
//         },
//         yaxis: {
//             zeroline: false,
//             showticklabels: false,
//             showgrid: false,
//             range: [-1, 1]
//         }
//     };

    Plotly.newPlot("gauge", data, layout);
}