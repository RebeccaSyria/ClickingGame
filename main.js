var n = 0; 
var cost = 10
var autoclicker = '<button onclick="buy()">autoclicker:' + cost + '</button>'

var autos = 0

function ac(){
setInterval(function(){n = parseFloat(n) + parseFloat(autos)},1000)
setInterval(function(){document.getElementById('count').innerHTML = n.toFixed(2)},1)
}

function buy(){
if (n < cost) {
alert("Not enough to buy that!");
}else{
n = (n - cost).toFixed(2) ;
autos = autos + 1;
document.getElementById('count').innerHTML = n;
cost = (cost*1.1).toFixed(2)
autoclicker = '<button onclick="buy()">autoclicker:' + cost + '</button>';
document.getElementById('auto').innerHTML = autoclicker;
document.getElementById('num').innerHTML = "You Have: " + autos;
}
}

function clicker(){

n++;
document.getElementById('count').innerHTML = n.toFixed(2);


if( n >= 10) {
document.getElementById('auto').innerHTML = autoclicker

    }
	
}

ac();