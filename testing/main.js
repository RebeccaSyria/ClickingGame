
function clickMine(){
	var totalResources = document.getElementById("resourceTable").rows[0].cells[1].innerText++;
	var maxResources = document.getElementById("resourceTable").rows[0].cells[2].innerText;

	maxResources = maxResources.substr(1);

	if (totalResources >= maxResources) {
		document.getElementById("resourceTable").rows[0].cells[1].innerText = maxResources;
	}
}

function buyAutoMiner() {
	var totalMiners = document.getElementById("resourceTable").rows[1].cells[0].innerText;

	var minerCost = totalMiners.substr(12);

	if (document.getElementById("resourceTable").rows[0].cells[1].innerText >= minerCost) {
		var totalMiners = document.getElementById("resourceTable").rows[1].cells[1].innerText++;
		document.getElementById("resourceTable").rows[0].cells[1].innerText -= totalCost;
	}
}

setInterval(function(){ 
	var autoMiningAmount = int(document.getElementById("resourceTable").rows[0].cells[1].innerText) += int(document.getElementById("resourceTable").rows[1].cells[1].innerText);

	document.getElementById("resourceTable").rows[0].cells[1].innerText += autoMiningAmount;
}, 30);