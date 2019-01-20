//JavaScript for index.html

document.addEventListener("DOMContentLoaded", function(e) {
	console.log("index.js linked and working");

	var counter = 0;
	var startTime;
	var endTime;
	var timeDiff;
	var logArray = [];

	document.getElementById("button1").addEventListener("click", function(e) {
		counter ++;
		startTime = new Date();
		document.getElementById("button1").style.display = "none";
		document.getElementById("button2").style.display = "inline-block";
		document.getElementById("instructions").innerText = "Suck that sweet sweet 02 through your nose, ya mouthbreather--when full click Begin Exhale.";
	})

	document.getElementById("button2").addEventListener("click", function(e) {
		document.getElementById("button2").style.display = "none";
		document.getElementById("button3").style.display = "inline-block";
		document.getElementById("instructions").innerText = "Now let it out gasbag--gently I say!!! When empty click Finish Breath.";

	})

	document.getElementById("button3").addEventListener("click", function(e) {
		endTime = new Date();
		timeDiff = endTime - startTime;
		timeDiff /= 1000;
		timeDiff = Math.round(timeDiff);
		document.getElementById("button3").style.display = "none";
		document.getElementById("button1").style.display = "inline-block";
		document.getElementById("instructions").innerText = "Click button to begin a new inhale.";

		var logElement = document.createElement("div");
		var logText = document.createTextNode(`Breath ${counter}: ${timeDiff} seconds`);
		logElement.appendChild(logText);
		document.getElementById("breathLog").appendChild(logElement);

		logArray.push(timeDiff);
		updateMean(logArray);
		updateMedian(logArray);
		updateMode(logArray);

		function updateMean(numbers) {
			var mean = 0;
			numbers.forEach(function(item) {
				mean += item;
			})
			mean = Math.round(mean / numbers.length);
			document.getElementById("mean").innerText = mean + " seconds";
		}

		function updateMedian(numbers) {
			var median = 0, numsLen = numbers.length;
			numbers.sort();
 			if (numsLen % 2 === 0) {
        		median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    		} else {
    			median = numbers[(numsLen - 1) / 2];
    		}
    		document.getElementById("median").innerText = Math.round(median) + " seconds";
		}

		function updateMode(numbers) {
		    // as result can be bimodal or multi-modal,
		    // the returned result is provided as an array
		    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
		    var modes = [], count = [], i, number, maxIndex = 0;
		 
		    for (i = 0; i < numbers.length; i += 1) {
		        number = numbers[i];
		        count[number] = (count[number] || 0) + 1;
		        if (count[number] > maxIndex) {
		            maxIndex = count[number];
		        }
		    }
		 
		    for (i in count)
		        if (count.hasOwnProperty(i)) {
		            if (count[i] === maxIndex) {
		                modes.push(Number(i));
		            }
		        }
		 	document.getElementById("mode").innerText = Math.round(modes) + " seconds";
		}
	})
})