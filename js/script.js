
var millisec=document.getElementById("millisec")
millisec.innerHTML="Milliseconds"
var millitag=document.createElement("h6")
millitag.innerHTML="00"
millisec.append(millitag)

var sec=document.getElementById("sec")
sec.innerHTML="Seconds"
var sectag=document.createElement("h6")
sectag.innerHTML="00"
sec.append(sectag)

var minutes=document.getElementById("min")
minutes.innerHTML="Minutes"
var mintag=document.createElement("h6")
mintag.innerHTML="00"
minutes.append(mintag)

var hours=document.getElementById("hrs")
hours.innerHTML="Hours"
var hrtag=document.createElement("h6")
hrtag.innerHTML="00"
hours.append(hrtag)


var myInterval_1
var myInterval_2
var myInterval_3
var myInterval_4
var startCount=0
var stopCount=0
var resetCount=0

		//milliseconds
		var count0=0
		function callsec0(){
			if(count0==10){
				count0=0
			}
			millitag.innerHTML=count0
			count0++
		}

		//seconds
		var count=0
		function callsec(){
			if(count==60){
				count=0
			}
			sectag.innerHTML=count
			count++
		}

		//minutes
		var count1=1
		function callsec1(){
			if(count1==60){
				count1=0
			}
			mintag.innerHTML=count1
			count1++
		}

		//hours
		var count2=1
		function callsec2(){
				if(count2==60){
					count2=0
				}
				hrtag.innerHTML=count2
				count2++
		}
function start(){
	var count0
	var count
	var count1
	var count2
	myInterval_1=setInterval(callsec0,100)
	myInterval_2=setInterval(callsec,1000)
	myInterval_3=setInterval(callsec1,60000)
	myInterval_4=setInterval(callsec2,3600000)
}

function myStop(){
	
	clearInterval(myInterval_1)
	clearInterval(myInterval_2)
	clearInterval(myInterval_3)
	clearInterval(myInterval_4)
}

function reset(){
	count0=0
	count=0
	count1=0
	count2=0
	millitag.innerHTML=0
	sectag.innerHTML=0
	mintag.innerHTML=0
	hrtag.innerHTML=0
	clearInterval(myInterval_1,count0)
	clearInterval(myInterval_2,count)
	clearInterval(myInterval_3,count1)
	clearInterval(myInterval_4,count2)
}