var year = 2018
var graphtype = 'bar'
var months = ["Jan", "Feb", "Mar", "Apr", 
        "May", "Jun", "Jul", "Aug", 
        "Sep", "Oct", "Nov", "Dec"]
var amount = [3904.11, 3719.41, 3854.22, 4868.06,
        4032.32, 3961.88, 4159.88, 4069.26,
        3981.35, 4231.91, 3838.48, 4164.05]
var debit_amount = [3904.11, 3719.41, 3854.22, 4868.06,
        4032.32, 3961.88, 4159.88, 4069.26,
        3981.35, 4231.91, 3838.48, 4164.05]
var credit_amount = [4004.11, 3819.41, 3954.22, 5068.06,
        4232.32, 4061.88, 4359.88, 4469.26,
        3881.35, 4031.91, 3638.48, 4064.05]
        
var onemonth = ["jan"]

var onecred = ["1234"]
var onedebt = ["1567"]

if (graphtype ==  'bar')
{
    var trace1 = {
    type: 'bar',
    name: 'Debit',
    x: onemonth,
    y: onedebt,
    marker: {
        color: '#C8A2C8',
        line: {
            width: 2.5
        }
    }
};
    
    var trace2 = {
    type: 'bar',
    name: 'Credit',
    x: onemonth,
    y: onecred,
    marker: {
        color: '#a4a2c8',
        line: {
            width: 2.5
        }
    }
    };
} else {
    var trace1 = {
    type: 'pie',
    labels: months,
    values: amount,
    marker: {
        color: '#C8A2C8',
        line: {
            width: 2.5
            }
        }
    }
}    



var data = [ trace1, trace2 ];

var layout = { 
  title: 'Customer Transaction!'+ year,
  font: {size: 18}
};

Plotly.newPlot('myDiv', data, layout, {responsive: true});
