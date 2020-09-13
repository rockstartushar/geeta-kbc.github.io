var que=1, rtclick=0, wgclick=0, i=0, op, timetaken=0, kbcaudio=0, audio1=0;
	document.getElementById("name").addEventListener("mousemove", function () {
		audio1 = document.createElement("AUDIO");
		document.body.appendChild(audio1);
		audio1.src = "kbc-begin.mp3";
    	audio1.play();
	});

	function playQ() {
		audio1.pause();
	 	audio1.remove();
		audio1 = document.createElement("AUDIO");
		document.body.appendChild(audio1);
		audio1.src = "kbc-lock.mp3";
    	audio1.play();
    	playTimer();
	}

	function playTimer() {
		audio1.pause();
	 	audio1.remove();
		audio1 = document.createElement("AUDIO");
		document.body.appendChild(audio1);
		audio1.src = "kbc-timer.mp3";
		audio1.loop=true;
    	audio1.play();
	}

	function playFlute() {
		audio1.pause();
	 	audio1.remove();
		audio1 = document.createElement("AUDIO");
		document.body.appendChild(audio1);
		audio1.src = "krshn-flute.mp3";
		audio1.loop=true;
    	audio1.play();
	}

	function llNotAvailable() {
		alert("This LifeLine is not available");
	}

	function showFifty(qn) {
		var remove = document.getElementsByClassName("wrong");
		var fiftyImg = document.getElementsByClassName("img-fifty");
		console.log(remove);
		var a = 3*qn-2, b=3*qn;
		for (var i = 1; i < remove.length; i++) {
 			remove[i].style.opacity = '0.3';
		}

		for (var i = 3; i < remove.length; i++) {
 			remove[i].style.opacity = '1';
		}

		for(let i=0; i<15; i++) {
			fiftyImg[i].style.opacity= "0.5";
			fiftyImg[i].removeEventListener("click", showFifty);
			fiftyImg[i].addEventListener("click", llNotAvailable);
		}
		console.log(a,b);
	}

	function showPoll(qn) {
		var audienceImg = document.getElementsByClassName("img-audience");
		var abc=0, a=[1, 3, 4, 2, 2, 3, 4, 1, 2, 4, 3, 4, 2, 3, 1, 1, 3, 2, 1, 4, 3, 1, 4, 2, 3];
		document.getElementById("poll-container").innerHTML=document.getElementById("poll-cover").innerHTML;
    	for(let i=0; i<15; i++) {
			audienceImg[i].style.opacity="0.5";
			audienceImg[i].removeEventListener("click", showPoll);
			audienceImg[i].addEventListener("click", llNotAvailable);
		}

		switch (a[qn-1]) {
			case 1: document.getElementById("op1").innerHTML=39;
			document.getElementById("op2").innerHTML=36;
			document.getElementById("op3").innerHTML=5;
			document.getElementById("op4").innerHTML=20;
			break;
			case 2: document.getElementById("op2").innerHTML=39;
			document.getElementById("op1").innerHTML=36;
			document.getElementById("op4").innerHTML=5;
			document.getElementById("op3").innerHTML=20;
			break;
			case 3: document.getElementById("op3").innerHTML=39;
			document.getElementById("op2").innerHTML=36;
			document.getElementById("op4").innerHTML=5;
			document.getElementById("op1").innerHTML=20;
			break;
			default: document.getElementById("op4").innerHTML=39;
			document.getElementById("op3").innerHTML=36;
			document.getElementById("op1").innerHTML=5;
			document.getElementById("op2").innerHTML=20;
		}
	}

	if ("serviceWorker" in navigator) {
		window.addEventListener("load", function() {
			navigator.serviceWorker.register("serviceWorker.js").then(res => console.log('service worker regiseter')).catch(err => console.log("service worker not registered", err))
		})
	}

	function startTimer(op) {
		if(op==1) {
			const a = setInterval(timer, 1000);
			function timer() {
				i++;
				$('#timer').html(i);
			}
		} else {
			clearInterval(timer);
			timetaken+=i;
			i=0;
			playTimer();
			console.log("hello");
		}
	}

	function enterGame() {
		var key = document.getElementById("key").value;
		if(key === 'harekrishna' || key === 'haribol') {
			audio1.pause();
			audio1.remove();
			var name = document.getElementById("name").value;
			document.getElementById("container").innerHTML=document.getElementById("kbc-screen").innerHTML;
			$("body").css("background", "linear-gradient(to right, midnightblue, blue, purple)");
			document.getElementById("heading").innerHTML="Best wishes to "+name+"!";
			$("he").css("background", "linear-gradient(to right, midnightblue, blue, purple)");
			startTimer(1);
			playQ();
			playTimer();
		} else {
			alert('Wrong key');
		}
	}

	function nextClick() {
		que++;
		console .log(que);
		switch(que) {
			case 2: 
				document.getElementById("q-container").innerHTML=document.getElementById("q-2").innerHTML;
				break;
			case 3:
				document.getElementById("q-container").innerHTML=document.getElementById("q-3").innerHTML;
				break;
			case 4: document.getElementById("q-container").innerHTML=document.getElementById("q-4").innerHTML;
			break;
			case 5: document.getElementById("q-container").innerHTML=document.getElementById("q-5").innerHTML;
			break;
			case 6: document.getElementById("q-container").innerHTML=document.getElementById("q-6").innerHTML;
			break;
			case 7: document.getElementById("q-container").innerHTML=document.getElementById("q-7").innerHTML;
			break;
			case 8: document.getElementById("q-container").innerHTML=document.getElementById("q-8").innerHTML; 
			break;
			case 9: document.getElementById("q-container").innerHTML=document.getElementById("q-9").innerHTML;
			break;
			case 10: document.getElementById("q-container").innerHTML=document.getElementById("q-10").innerHTML;
			break;
			case 11: document.getElementById("q-container").innerHTML=document.getElementById("q-11").innerHTML;
			break;
			case 12: document.getElementById("q-container").innerHTML=document.getElementById("q-12").innerHTML;
			break;
			case 13: document.getElementById("q-container").innerHTML=document.getElementById("q-13").innerHTML;
			break;
			case 14: document.getElementById("q-container").innerHTML=document.getElementById("q-14").innerHTML;
			break;
			case 15: document.getElementById("q-container").innerHTML=document.getElementById("q-15").innerHTML;
			break;
			case 16: document.getElementById("q-container").innerHTML=document.getElementById("q-16").innerHTML;
			break;
			case 17: document.getElementById("q-container").innerHTML=document.getElementById("q-17").innerHTML;
			break;
			case 18: document.getElementById("q-container").innerHTML=document.getElementById("q-18").innerHTML;
			break;
			case 19: document.getElementById("q-container").innerHTML=document.getElementById("q-19").innerHTML;
			break;
			case 20: document.getElementById("q-container").innerHTML=document.getElementById("q-20").innerHTML;
			break;
			case 21: document.getElementById("q-container").innerHTML=document.getElementById("q-21").innerHTML;
			break;
			case 22: document.getElementById("q-container").innerHTML=document.getElementById("q-22").innerHTML;
			break;
			case 23: document.getElementById("q-container").innerHTML=document.getElementById("q-23").innerHTML;
			break;
			case 24: document.getElementById("q-container").innerHTML=document.getElementById("q-24").innerHTML;
			break;
			case 25: document.getElementById("q-container").innerHTML=document.getElementById("q-25").innerHTML;
			break;
			case 26: document.getElementById("q-container").innerHTML=document.getElementById("q-26").innerHTML;
			break;
			case 27: document.getElementById("q-container").innerHTML=document.getElementById("q-27").innerHTML;
			break;
			case 28: document.getElementById("q-container").innerHTML=document.getElementById("q-28").innerHTML;
			break;
			case 29: document.getElementById("q-container").innerHTML=document.getElementById("q-15").innerHTML;
			break;
			case 30: document.getElementById("q-container").innerHTML=document.getElementById("q-30").innerHTML;
			break;
			case 31: document.getElementById("q-container").innerHTML=document.getElementById("q-31").innerHTML;
			break;
			case 32: document.getElementById("q-container").innerHTML=document.getElementById("q-32").innerHTML;
			break;
			case 33: document.getElementById("q-container").innerHTML=document.getElementById("q-33").innerHTML;
			break;
			case 34: document.getElementById("q-container").innerHTML=document.getElementById("q-34").innerHTML;
			break;
			case 35: document.getElementById("q-container").innerHTML=document.getElementById("q-35").innerHTML;
			break;
			case 36: document.getElementById("q-container").innerHTML=document.getElementById("q-36").innerHTML;
			break;
			case 37: document.getElementById("q-container").innerHTML=document.getElementById("q-37").innerHTML;
			break;
			case 38: document.getElementById("q-container").innerHTML=document.getElementById("q-38").innerHTML;
			break;
			case 39: document.getElementById("q-container").innerHTML=document.getElementById("q-39").innerHTML;
			break;
			case 40: document.getElementById("q-container").innerHTML=document.getElementById("q-40").innerHTML;
			break;

			default: alert("nothing matched");
		}
	}
	function rightscore() {
		rtclick++;
		startTimer(0);
	}
	function wrongscore() {
		wgclick++;
		startTimer(0);
	}
	function showResult() {
		var board="";
		board=`<form style="border: 2px solid white; opacity: 0.3; background: black; margin-top: 20%">
    			<div style="margin-top:5%; margin-bottom: 15%;">
    			<center>
    				<q>One who tries..is a winner in himself</q>
    				<img id="board-icon" src="kbc-icon.png" width="20%" style="float: right; top:-10%;" />
    				<h2>Your winning score of Gita KBC is as follows:</h2>
    				<h4>Right answer: ${rtclick}</h4>
    				<h4>Wrong answer: ${wgclick}</h4>   
    				<h4>Time Taken: ${timetaken} seconds</h4>
    			
    			<center>
    			</div>
    			</form>`;
    	document.getElementById("container").innerHTML=board;
    	playFlute();
	}
	function nextRight() {
		rightscore();
		nextClick();
		playQ();
	}
	function nextWrong() {
		wrongscore();
		nextClick();
		playQ();
	}
	function rtShowResult() {
		rightscore();
		startTimer(0);
		showResult();
	}
	function wgShowResult() {
		wrongscore();
		startTimer(0);
		showResult();
	}
