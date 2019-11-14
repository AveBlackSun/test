// part1	
function vote(v) {

	// if(localStorage['voted']== 'true') return;

	// localStorage.setItem('voted', 'true');
	var rs = parseInt(localStorage.getItem('raitings-sum'))+parseInt(v);
	var rc = parseInt(localStorage.getItem('raitings-count'))+1;

	localStorage.setItem('raitings-sum',rs);
	localStorage.setItem('raitings-count',rc);

	var overall = rs/rc;
	console.log (overall);
	document.getElementById('rating-num').innerHTML = Math.round(overall);

}

function createLS() {
	if ((localStorage.getItem('raitings-sum')==undefined)||(localStorage.getItem('raitings-sum')==NaN)) {
		localStorage.setItem('raitings-sum',0);
		localStorage.setItem('raitings-count',0);

	} else {
		var overall = parseInt(localStorage.getItem('raitings-sum'))/parseInt(localStorage.getItem('raitings-count'));
		console.log (overall);
		document.getElementById('rating-num').innerHTML = Math.round(overall);
	}
	
}

document.addEventListener("DOMContentLoaded", function(event) { 
	createLS();
});

// part2

function progress() {
	var start = document.getElementById("progress-num").value;
	var add = document.getElementById("add-value").value;
	start = parseInt(start)+parseInt(add);
	if (start>100) {
		start = 100;
	}

	document.getElementById('progress-num').value = start;
	document.getElementById('progress-bar-inner').style.cssText="width:"+start+"%;"
	console.log(start);
  	return ; 

}

// part3

window.addEventListener("load",function() {
  var request = new XMLHttpRequest();
  request.open('GET','processing.php',true);
  request.addEventListener('readystatechange', function() {
    if ((request.readyState==4) && (request.status==200)) {
      var welcome = document.getElementById('goip');
      welcome.innerHTML = request.responseText;
    }
  });
request.send();
});