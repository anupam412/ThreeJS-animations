var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var first_time = 1;
var mySceneBRY;        
var mySceneW;          
var mySceneH;          
var Velocity=1;
var timett = 0;
var taken = 0;
var off = 0;
var myCenterX;         
var myCenterY;   
var counting = 0;
var ammetersphere;
var wire;      
var swtch;
var lampBulb;
var onoff;
var connector;
var thinFilm;
var smallplus;
var smallplus2;
var smallminus;
var plus;
var plus2;
var minus;
var speed=1;
var arrowLeft;
var arrowLeftPointer1;
var pauseTime = 0;
var arrowLeftPointer2;
var arrowRight;
var arrowRightPointer1;
var arrowRightPointer2;
var arrowUp;
var arrowUpPointer1;
var arrowUpPointer2;
var arrowDown;
var arrowDownPointer1;
var arrowDownPointer2;

var controls;
var helpContent;
var connector;
var mount;
var controlball;
var wire;
var pendulum;

var fast=0.5;
var posDontCOUNT = 0;
var negDontCOUNT = 0;

var direction = 1;

function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Time period of a simple pendulum</h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>In this experiment,we have given a control of pendulum's length , counter of number of oscillations and digital stopwatch ,using all these features one can find time Period of a simple pendulum and can see the variation of time period with varying length of the string.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<h4>Click on start button to start the animation</h4>";
    helpContent = helpContent + "<h4>Click on Reset button to reset animation</h4>";
    helpContent = helpContent + "<h4>Click on |>>| button to make animation rate faster than normal</h4>";
    
    helpContent = helpContent + "<h4>Click on |<<| button to make animation rate slower than normal</h4>";
    helpContent = helpContent + "<h4>Click on start button and then drag anywhere to view a 360 degree view and scroll to zoom</h4>";
    helpContent = helpContent + "<h4>Click on stop button to stop the animation</h4>";
    helpContent = helpContent + "<h3>Interaction</h3>";
    helpContent = helpContent + "<p> User can use mouse controls to look around as it's a 3D model .</p>";
    helpContent = helpContent + "<h3> ADDITIONAL FEATURES </h3>"
    helpContent = helpContent + "<p> 1. A digital timer has been provided for user's convenience.</p>"
    
    helpContent = helpContent + "<h3> Happy Experimenting !!!! </h3>";

    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Time period of a simple pendulum</h2>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>In this experiment,we have given a control of pendulum's length , counter of number of oscillations and digital stopwatch ,using all these features one can find time Period of a simple pendulum and can see the variation of time period while changing length of the string.</p>";
    infoContent = infoContent + "<p>The experiment shows a pendulum fixed on the roof through a wire,user can vary length of the wire using input slider.</p>";
    infoContent = infoContent + "<h3> Time period of a simple Pendulum</h3>";
 	infoContent = infoContent + "<p> Time taken by a pendulum to complete one full oscillation can be called as it's time period</p>";
 	infoContent = infoContent + "<p> Time Period of a simple pendulum is directly proportional to the length of the wire.</p>";
 	
    infoContent = infoContent + "<h3> ADDITIONAL FEATURES </h3>"
    infoContent = infoContent + "<p> 1. A digital timer has been provided for user's convenience.</p>"
    
    infoContent = infoContent + "<h3> Happy Experimenting !!!! </h3>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    mySceneTLX = 0.0;
    mySceneTLY = 20.0;
    mySceneBRX = 5.0;
    mySceneBRY = -20.0;
}

var length = "Length of the wire";
var osc = "Oscillations";
var timeString = "TIME  (ms)";
var oscCount = 0;
var xlimit;
var maxAngle;
var initialdirection = 0;
function setOn(){
	controls.enabled = false;
	PIEchangeDisplayText(osc,0);
	oscCount = 0;
	xlimit = pendulum.position.x;
	var x= pendulum.position.x;
	var y=pendulum.position.y;
	var z=pendulum.position.z;
	if(x<0){
		direction = 1;
		initialdirection = 1;
	}
	if(x>0){
		direction = -1;
		initialdirection = -1;
	}
	wirelength = Math.sqrt(x*x+(y-11)*(y-11));
	maxAngle = Math.acos((11-y)/Math.sqrt(x*x+(y-11)*(y-11)));
	console.log("maxAngle="+maxAngle);
   
	PIEscene.remove(pendulum);

	pendulum = new THREE.Mesh(new THREE.SphereGeometry(1,32,24),new THREE.MeshPhongMaterial({color:"red"}));
	pendulum.position.set(x,(y-11),0);
	controlball.add(pendulum);

	PIEdragElement(pendulum);
    PIEsetDrag(pendulum, mypendulumDrag);
    controls.enabled = true;
	PIErender();
}

var info;
function addTimerText(){
    info = document.createElement( 'div' );
    info.style.position = 'absolute';
    info.style.top = ( window.innerHeight*32/100 )+"px";
    info.style.left = ( window.innerWidth*85/100 )+"px";
    info.style.width = '8%';
    info.style.textAlign = 'center';
    info.style.color = '#166800';
    info.style.fontWeight = 'bold';
    info.style.backgroundImage = 'linear-gradient(black,white,black)';
    info.style.zIndex = '0';
    info.style.fontSize = "35px";
    info.style.fontFamily = 'Monospace';
    info.innerHTML = "00:00";
    info.style.padding ="20px";
    document.body.appendChild( info );

}
function myButton(){
	var buttton;           /* The button element */

    button = document.createElement('button');
    button.setAttribute("id", "RESET");
    button.style.position = 'absolute';
    button.style.top = ( window.innerHeight*45/100 )+"px";
    button.style.left = ( window.innerWidth*85/100 )+"px";
    button.style.width = '5%';
    button.style.textAlign = 'center';
    button.style.color = 'black';
    button.style.fontWeight = 'bold';
    button.innerHTML = "RESET"
    document.body.appendChild(button);
    button.addEventListener("click",resetTimer);
    
    myButton1();
 	
}
var button;
function myButton1(){

    button = document.createElement('button');
    button.setAttribute("id", "PAUSE");
    button.style.position = 'absolute';
    button.style.top = ( window.innerHeight*45/100 )+"px";
    button.style.left = ( window.innerWidth*90/100 )+"px";
    button.style.width = '6%';
    button.style.textAlign = 'center';
    button.style.color = 'black';
    button.style.fontWeight = 'bold';
    button.innerHTML = "PAUSE";
    button.addEventListener("click",pauseTimer);
	document.body.appendChild(button);

}
var resetTime = 0;
var c=0;
function resetTimer(){
	resetTime = 1;
	pauseTime = 0;
	if(pauseTime==0)
		button.innerHTML = 'PAUSE';
	else
		button.innerHTML = "PLAY";

	c=0;
}
var recordTime = 0;
function pauseTimer(){
	if(pauseTime == 0){
		pauseTime = 1;
		button.innerHTML = "PLAY";
		recordTime = 1;
	}
	else{
		button.innerHTML = "PAUSE";
		recordTime = 0;
		pauseTime = 0;

	}

}
function setOff(){ 

	oscCount = 0;
	negDontCOUNT = 0;
	posDontCOUNT = 0;

	if(pendulum){
		PIEscene.remove(pendulum);
		controlball.remove(pendulum);
	}
	
	pendulum = new THREE.Mesh(new THREE.SphereGeometry(1,32,24),new THREE.MeshPhongMaterial({color:"red"}));
	pendulum.position.set(0,11-wirelength,0);
	PIEaddElement(pendulum);
	controls.enabled = false;
	PIEscene.remove(line);
	var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(pendulum.position.x,11-wirelength,pendulum.position.z),new THREE.Vector3(0,11,0)), 20, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );

	line = new THREE.Mesh(geometry, material);
	PIEaddElement(line);

	PIEdragElement(pendulum);
    PIEsetDrag(pendulum, mypendulumDrag);
	
	oscCount = 0;
	PIEchangeDisplayText(osc,0);
	direction = 1;
	controls.enabled = false;

	PIErender();
}
var wirelength=22.0;
var time=0.0;
function handleTime(newvalue){
    time = newvalue;
    PIErender();
}

function lengthHandle(newvalue){
	wirelength = newvalue;

	PIEchangeDisplayText(osc,0);
	PIEchangeDisplayText(timeString,0);

	PIErender();
}

function pieSetInputOutputDisplay(){

	PIEaddInputSlider(length,11,lengthHandle,4,40,0.1);
	PIEaddDisplaySlider(length,wirelength,4,40,0.1);
	PIEaddDisplayText(osc,0);
    PIEaddDisplayText(timeString, 0);

}
var scalar = 1.0;
function speedUp(){
	if (scalar < 4){
		scalar = scalar*2;
	}
}
function speedDown(){
	if (scalar>0.25){
		scalar = scalar/2;
	}

}	
var line;
     
function PIEmouseMove( event )
{
var intersects;     // to hold return array of ray intersects

    event.defaultPrevented = true;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);

    if (PIEselectedDrag != null)
    {   
    	PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect);
		PIEdefaultDrag(PIEselectedDrag, PIEdragIntersect.sub(PIEdragOffset)); 
    }
    else
    {   
    	intersects = PIEraycaster.intersectObjects([pendulum]);
        if (intersects.length > 0)
        {
            PIEdragPlane.setFromNormalAndCoplanarPoint(PIEcamera.getWorldDirection(PIEdragPlane.normal), intersects[0].object.position);
            if (PIEselectedHover != intersects[0].object)
            {
                PIEdefaultHoverOFF(PIEselectedHover);
                PIEselectedHover = intersects[0].object;
                PIEdefaultHoverON(PIEselectedHover);
            }
            PIEscreenElem.style.cursor = 'pointer';
        }
	else if (PIEselectedHover != null)
        {
            PIEdefaultHoverOFF(PIEselectedHover);
            PIEselectedHover = null;
            PIEscreenElem.style.cursor = 'auto';
        }
    }
}

function mypendulumDrag(element, newpos)
{
	if(line)
		PIEscene.remove(line);

    var mypenX = newpos.x;
    var mypenY = newpos.y;
    var mypenZ = newpos.z;

    var radii = Math.sqrt( mypenX*mypenX + (mypenY-11)*(mypenY-11) );
    wirelength = radii;
	var material = new THREE.LineBasicMaterial({ color: "black" });
	var geometry = new THREE.Geometry();
	
	if(mypenY > 7){
    
    	pendulum.position.set(mypenX,7,mypenZ);
    	var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(mypenX,7,mypenZ),new THREE.Vector3(0,11,0)), 20, 0.04, 8, false );
	    var material = new THREE.MeshBasicMaterial( { color: "black" } );
		
		line = new THREE.Mesh(geometry, material);

		PIEaddElement(line);
	
    }
    else{

	   	pendulum.position.set(mypenX,mypenY, mypenZ);
	   	var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(mypenX,mypenY,mypenZ),new THREE.Vector3(0,11,0)), 20, 0.04, 8, false );
	    var material = new THREE.MeshBasicMaterial( { color: "black" } );
			
		line = new THREE.Mesh(geometry, material);

		PIEaddElement(line);
		PIEchangeInputSlider( length , radii);
    
    }

    PIErender();
}

function loadExperimentElements() {
    
    var geometry;
    var material;
    var loader;
    var texture;

    PIEsetExperimentTitle("Time period of a simple pendulum");
    PIEsetDeveloperName("Anupam Singhal");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

 
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    controls.enabled = false;
 	var geometry = new THREE.PlaneGeometry( 5, 5, 5 );
	var material = new THREE.MeshPhongMaterial( {color: "#8B4513", side: THREE.DoubleSide} );
	var plane = new THREE.Mesh( geometry, material );	
	plane.rotation.z = Math.PI/4;
	plane.rotation.x = Math.PI/2;
	plane.position.set(0,11,0);
	PIEaddElement( plane );

    controlball = new THREE.Mesh(new THREE.SphereGeometry(0.5,32,24),new THREE.MeshPhongMaterial({color:"white"}));
	PIEaddElement(controlball);
	controlball.position.set(0,11,0);

	pendulum = new THREE.Mesh(new THREE.SphereGeometry(1,32,24),new THREE.MeshPhongMaterial({color:"red"}));
	pendulum.position.set(0,-11,0);
	PIEaddElement(pendulum);
	if(!line){
		var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(0,-11,0),new THREE.Vector3(0,11,0)), 60, 0.06, 32, false );
	    var material = new THREE.MeshBasicMaterial( { color: "black" } );
	
		line = new THREE.Line(geometry, material);
		PIEaddElement(line);	
	}

	PIEdragElement(pendulum);
    PIEsetDrag(pendulum, mypendulumDrag);
	addTimerText();

    PIEscene.background = new THREE.Color("#ffdead");
    myButton();
    pieSetInputOutputDisplay();
 
    document.getElementById("start").addEventListener("click", setOn);
    document.getElementById("stop").addEventListener("click",setOff);
    
    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIEadjustCamera(0,0,50);
    document.getElementById("reset").click();
    console.log("request");
   
    PIErender();
}
function resetExperiment()
{
	wirelength=22;
	info.innerHTML="00:00";
	PIEchangeInputSlider(length,22);
	PIEchangeDisplayText(length,22);
	PIEchangeDisplayText(osc,0);
	oscCount = 0;
	negDontCOUNT = 0;
	posDontCOUNT = 0;
	off =0;
	pauseTime = 0;
	if(pendulum){
		PIEscene.remove(pendulum);
		controlball.remove(pendulum);
	}
	
	pendulum = new THREE.Mesh(new THREE.SphereGeometry(1,32,24),new THREE.MeshPhongMaterial({color:"red"}));
	//controlball.add(pendulum);
	pendulum.position.set(0,-11,0);
	PIEaddElement(pendulum);
	controls.enabled = false;
	if(line){
		PIEscene.remove(line);
		var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(0,-11,0),new THREE.Vector3(0,11,0)), 20, 0.04, 8, false );
	    var material = new THREE.MeshBasicMaterial( { color: "black" } );
		line = new THREE.Mesh(geometry, material);	
		PIEaddElement(line);
	}
	
	PIEdragElement(pendulum);
    PIEsetDrag(pendulum, mypendulumDrag);
	
	direction = 0;

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEadjustCamera(0,0,50);
	PIErender();
	console.log("reset Ran");
}
var vrp = 0; var k_oldtime = 0;
var k_diff = 0; var k_startset = 0;
var k_stopset = 0;
function updateExperimentElements(t, dt)
{  
	
	if(t>=0 && t<=500){
		oscCount=0;
		console.log("heyyya");
	}
	PIEchangeDisplaySlider(length,wirelength);
 	PIEchangeDisplayText(timeString,t);
	PIEchangeDisplayText(osc,oscCount);

    var ttt = 4.0*((Math.abs(xlimit)-Math.abs(pendulum.position.x)+1)/Math.abs(xlimit));
 	fast = (10/wirelength)*Math.abs(xlimit/10)*Math.sqrt(2*9.8*wirelength*(ttt*ttt))/100;
 	
	if(initialdirection > 0){
		if(pendulum.position.x < xlimit){
			if(posDontCOUNT == 0){
				oscCount = oscCount + 1;
				posDontCOUNT = 1;
			}
		}
	}

	if(initialdirection < 0){
		if(pendulum.position.x > xlimit){
			if(negDontCOUNT == 0){
				oscCount = oscCount + 1;
				negDontCOUNT = 1;
			}
		}
	}
	if(direction > 0){

		if(pendulum.position.x < Math.abs(xlimit)){
			pendulum.position.x = pendulum.position.x + fast;
			pendulum.position.y = -(Math.sqrt(wirelength*wirelength - pendulum.position.x*pendulum.position.x))
		}
		else{
			direction  = -1;
			posDontCOUNT = 0;
		}
	}
	if(direction < 0){

		if((pendulum.position.x) > -Math.abs(xlimit)){
			pendulum.position.x = pendulum.position.x -fast;
			pendulum.position.y = -(Math.sqrt(wirelength*wirelength - pendulum.position.x*pendulum.position.x))
			
		}
		else{
			direction  = 1;
			negDontCOUNT = 0;
		}	
	}
	
	if(line && (first_time==0) ){
		PIEscene.remove(line);
		var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(pendulum.position.x,pendulum.position.y+11,pendulum.position.z),new THREE.Vector3(0,11,0)), 20, 0.04, 8, false );
	    var material = new THREE.MeshBasicMaterial( { color: "black" } );
		console.log("ggggggggggg");
		 line = new THREE.Mesh(geometry, material);
		 PIEaddElement(line);
		
	}
	if(line && (first_time==1) ){
		PIEscene.remove(line);
		var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(pendulum.position.x,pendulum.position.y,pendulum.position.z),new THREE.Vector3(0,11,0)), 20, 0.04, 8, false );
	    var material = new THREE.MeshBasicMaterial( { color: "black" } );
	
		 console.log("ffffffffffffff");
		 line = new THREE.Mesh(geometry, material);
		 PIEaddElement(line);
		 first_time = 0;
	}
	if(recordTime == 1){
		vrp = t-off;
		recordTime = 0;
	}
	if(resetTime){
		off = t-k_diff;
		console.log("off:"+off);
		resetTime = 0;
	}
	if(!pauseTime){
		k_stopset = 0;
		if(k_startset == 0){
			k_diff += t-k_oldtime;
			k_startset = 1;
		}
		var timerText = "";
    	var q= parseInt((counting)/60000);
    	var y = parseInt((counting)/1000);
    	y = y%60;
    	var minutes = ""+q;
    	var seconds = ""+y;
    	if(parseFloat(q)<10.0){
        	minutes = "0"+minutes;
    	}

    	if(parseFloat(y)<10.0){
        	seconds = "0"+seconds;
    	}
    	timerText = minutes +":"+seconds;
    	info.innerHTML=timerText;
		counting = t - k_diff-off;
	} else {
		k_startset = 0;
		if(k_stopset == 0){
			k_oldtime = t;
			k_stopset = 1;
		}
	}
}

