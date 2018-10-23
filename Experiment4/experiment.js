var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;          
var mySceneH;          
var myCenterX;         
var myCenterY;   
var pcount = 0;


var ring;
var wire1;
var wire2;      
var swtch;
var lampBulb;
var onoff;
var saltbottle;
var saltbottleadded;
var BubbleAdded ;
var wireObject;
var direction;
var copperParticle;
var smallplus;
var smallplus2;
var smallminus;
var plus;
var plus2;
var minus;

var arrowLeft;
var arrowLeftPointer1;
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
var BubbleCount = 0.0;
var BubbleArray = [];
var shiftEverything = 15;
var granule;
function initialiseHelp() {
	helpContent="";
	helpContent = helpContent + "<h1> Basic electroplating with carbon rod </h1>";
	helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
	helpContent = helpContent + "<p>In this experiment,batteries are connected to a switched circuit consisting of carbon rod connected to positive terminal and copper rod connected to negative terminal. Both rods are dipped in copper sulphate (blue). When the switch is closed, copper gets deposited on the copper plate.</p>";
	helpContent = helpContent + "<h3><u>Animation control</u></h3>";
	helpContent = helpContent + "<h4>Click on switch to close/open the circuit.</h4>";
	helpContent = helpContent + "<h4>Click on Reset button to reset animation</h4>";
	helpContent = helpContent + "<h4>Click on |>>| button to make animation rate faster than normal</h4>";
	helpContent = helpContent + "<h4>Click on |<<| button to make animation rate slower than normal</h4>";
	helpContent = helpContent + "<h4>Drag anywhere to view a 360 degree view and scroll to zoom</h4>";
	helpContent = helpContent + "<h3>Interaction</h3>";
	helpContent = helpContent + "<p>User can use mouse controls to look around as it's a 3D model.</p>";
	helpContent = helpContent + "<h3> ADDITIONAL FEATURES </h3>"
	helpContent = helpContent + "<p> 2. A Digital timer has been provided for user's convenience."
	helpContent = helpContent + "<h3> Happy Experimenting !!!! </h3>";

	PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
	infoContent =  "";
	infoContent = infoContent + "<h1> Basic electroplating with carbon rod </h1>";
	infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
	infoContent = infoContent + "<p>In this experiment,batteries are connected to a switched circuit consisting of carbon rod connected to positive terminal and copper rod connected to negative terminal. Both rods are dipped in copper sulphate (blue). When the switch is closed, copper gets deposited on the copper plate.</p>";
	infoContent = infoContent + "<p>The experiment shows a circuit having the following components: bulb,wires,switch,batteries,beaker,copper sulphate solution ,carbon electrode and a copper electrode.</p>";
	infoContent = infoContent + "<p><h3><u>Electroplating</u></h3></p>";
	infoContent = infoContent + "<p>Electroplating is the process of plating one metal onto another by hydrolysis, most commonly for decorative purposes or to prevent corrosion of a metal.</p>";
	infoContent = infoContent + "<p> When we close the switch ,the reaction starts taking place and the copper ions present in the solution get converted to copper metal and hence,pure copper gets accumulates gradually on the copper electrode and Oxygen gas is being released from the solution near the carbon electrode.</p> "
	infoContent = infoContent + "<h3> ADDITIONAL FEATURES </h3>";
	infoContent = infoContent + "<p> 2. A Digital timer has been provided for user's convenience."
	infoContent = infoContent + "<h2>Happy Experimenting</h2>";
	PIEupdateInfo(infoContent);
}
function initialiseScene() {
	mySceneTLX = -25.0;
	mySceneTLY = 25.5;
	mySceneBRX = 5.0;
	mySceneBRY = -25.5;
	mySceneW   = (mySceneBRX - mySceneTLX);
	mySceneH   = (mySceneTLY - mySceneBRY);
	myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
	myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

	PIEcamera.position.set(0, 0, 40);

	var ambLight = new THREE.AmbientLight( 0x909090);
	PIEaddElement(ambLight);

	var dirLight = new THREE.DirectionalLight( 0xfffff, 1);
	dirLight.position.set(1,1,1);
	PIEaddElement(dirLight);
}

function addBall(x, y, z){
	var ballGeom = new THREE.SphereGeometry(0.8, 32, 24);
	var ball = new THREE.Mesh(ballGeom, new THREE.MeshPhongMaterial({color:"red"}));
	ball.position.set(x-shiftEverything, y, z);
	PIEaddElement(ball);
	return ball;
}

var electronGeom;
var electron;
function setOn(){
	var vv = 0;
	for(vv=0;vv<8;vv++){
		wireObject[vv].material.color.setStyle("yellow");
		wireObject[vv].material.transparent = true;
		wireObject[vv].material.opacity = 0.6;

	}
	oxygen.visible = true;
	lampBulb.material.color.setStyle("yellow");
	lampBulb.material.transparent = false;
	swtch.rotation.z = 0;

	var oo = 0;
	for(oo=0;oo<BubbleCount;oo++){
		BubbleArray[oo].visible = true;
	}
	onoff = true;
	PIErender();
}
function setOnWithoutLights(){
	swtch.rotation.z = 0;
	onoff = true;
}

function setOff(){ 
	oxygen.visible =false;
	var vv = 0;
	for(vv=0;vv<8;vv++){
		wireObject[vv].material.color.setStyle("blue");

	}
	var oo = 0;
	for(oo=0;oo<BubbleCount;oo++){
		BubbleArray[oo].visible = false;
	}
	lampBulb.material.color.setStyle("white");
	lampBulb.material.transparent = true;
   	onoff = false;
   	lampBulb.material.opacity = 0.5;
   	lampBulb.material.shininess = 500;
   
  	swtch.rotation.z = Math.PI / 4;
	
	direction.visible = false;
	PIErender();
}

function setOnOff(){
	onoff = !onoff;
	if (onoff) {setOn()} else {setOff()};
}
var time=0.0;
function handleTime(newvalue){
	time = newvalue;
}

var timeString = "TIME  (ms)";

function pieSetInputOutputDisplay(){

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
var Bubble;
var Bubble2;
function BubbleWork(){
	var xx=32;
	var yy=-6;
	var bubbleGeo = new THREE.SphereGeometry(0.4,32,24);
	Bubble = new THREE.Mesh(bubbleGeo, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.7}));
	var x = (Math.random() * (4.8)) + (10.8-xx)  ;
	var y = (Math.random() * (9))-10.9+yy  ;
	var z = (Math.random() * 8)-3  ;

	Bubble.position.set(x,y,z);
	PIEaddElement(Bubble);
	BubbleArray.push(Bubble);
	BubbleCount = BubbleCount + 1;
}
var counter = 0;
function mysaltbottleDrag(element, newpos)
{
	var mysaltbottleX = newpos.x;
	var mysaltbottleY = newpos.y;
	var mysaltbottleZ = newpos.z;
	if ((mysaltbottleX > (13-31-10) )&&( mysaltbottleX < (23-31+10) )&&(mysaltbottleY < 6)&&(mysaltbottleY > -7)&&(mysaltbottleZ < 7)&&(mysaltbottleZ > -7)){
		animationOfSaltBottle = true;
	}
	else{
		saltbottle.material.color.setStyle("white");
		saltbottle.rotation.z = 0;
		counter = 0;
		animationOfSaltBottle = false;
	}

	saltbottle.position.set(mysaltbottleX,mysaltbottleY, mysaltbottleZ);
}
function disableControls(){
	controls.enabled = false;
}
function enableControls(){
	controls.enabled = true;
}

var visiconstant=0;
var mouse = new THREE.Vector2();
//var objects = []
function PIEmouseDown( event )
{
	var intersects;     // to hold return array of ray intersects

    event.defaultPrevented = true;
    PIEselectedDrag = null;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    intersects = PIEraycaster.intersectObjects(PIEdragElements);
    if (intersects.length > 0) {
    	PIEselectedDrag = intersects[0].object;
    	if (PIEraycaster.ray.intersectPlane(PIEdragPlane, PIEdragIntersect))
    	{
    		PIEdragOffset.copy(PIEdragIntersect).sub(PIEselectedDrag.position);
    	}
    	PIEscreenElem.style.cursor = 'move';
    	PIEdefaultDragStart(PIEselectedDrag);
    }
    intersects = PIEraycaster.intersectObject(swtch);
    if (intersects.length > 0) {
    	if(!onoff){
	    	document.getElementById("start").click();
	    	if(true){
	    		setOn();
			}
			else{
    			setOnWithoutLights();
			}
		}
		else{
			setOff();
	    	document.getElementById("stop").click();
	    }
	}

}

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
			intersects = PIEraycaster.intersectObjects(PIEdragElements);
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
			else{

				intersects = PIEraycaster.intersectObject(swtch);
				if (intersects.length > 0) 
				{
					PIEscreenElem.style.cursor = 'pointer';
				}
				else{
					PIEscreenElem.style.cursor = 'auto';
				}  	
			}
		}
	}
function functionz(){
	var height = 0.01;
	var outerRadius = 4.6;
	var innerRadius = 4;
	var Segments = 24;
	var extrudeSettings = {
		amount: height,
		bevelEnabled: false,
		curveSegments: Segments
	};
	var arcShape = new THREE.Shape();
	arcShape.moveTo(outerRadius, 1);
	arcShape.absarc(0, 0, outerRadius, 0, Math.PI *2, false);

	var holePath = new THREE.Path();
	holePath.moveTo(innerRadius, 1);
	holePath.absarc(0, 0, innerRadius, 0, Math.PI *2, true);
	arcShape.holes.push(holePath);

	var geometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);

	var material = new THREE.MeshPhongMaterial({
		color: "yellow"
	});

	ring = new THREE.Mesh(geometry, material);
	PIEaddElement(ring);
	ring.position.set(-13,0,0);
} 
function addwireObject(){
	var Geom = new THREE.CylinderGeometry(0.15,0.15,20.5, 32 );
    wireObject[0] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue"}));//#FF4500
    wireObject[0].position.set(-13-7-4-3-1-0.3,-2.5,0);
    wireObject[0].rotation.z = Math.PI/2;
    PIEaddElement(wireObject[0]);


    var Geom = new THREE.CylinderGeometry(0.15,0.15,17, 32 );
    wireObject[1] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue"}));//#FF4500
    wireObject[1].position.set(-38.5,6,0);
    PIEaddElement(wireObject[1]);


    var Geom = new THREE.CylinderGeometry(0.15,0.15, 10, 32 );
    wireObject[2] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue"}));//#FF4500
    wireObject[2].position.set(-30-4+0.5,10+4.5,0);
    wireObject[2].rotation.z = Math.PI/2;
    PIEaddElement(wireObject[2]);

    var Geom = new THREE.CylinderGeometry(0.15,0.15, 33, 32 );
    wireObject[3] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wireObject[3].position.set(0.75-5-1,10+4.5,0);
    wireObject[3].rotation.z = Math.PI/2;
    PIEaddElement(wireObject[3]);


    var Geom = new THREE.CylinderGeometry(0.15,0.15, 17.2, 32 );
    wireObject[4] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wireObject[4].position.set(11.4,4.4+1.5+0.1,0);
    //wireObject[3].rotation.z = Math.PI/2;
    PIEaddElement(wireObject[4]);

    var Geom = new THREE.CylinderGeometry(0.15,0.15,7, 32 );
    wireObject[5] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wireObject[5].position.set(13-31,-6,0);
    //wireObject[5].rotation.z = Math.PI/2;
    PIEaddElement(wireObject[5]);

    var Geom = new THREE.CylinderGeometry(0.15,0.15,19.4, 32 );
    wireObject[6] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wireObject[6].position.set(1.5,-2.5,0);
    wireObject[6].rotation.z = Math.PI/2;
    PIEaddElement(wireObject[6]);


    var Geom = new THREE.CylinderGeometry(0.15,0.15,11.2, 32 );
    wireObject[7] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wireObject[7].position.set(-8,-8,0);
	PIEaddElement(wireObject[7]);
}

function stopTheProcess(){
	setOff();
}
function startTheProcess(){
	if(!onoff){
		setOn();
	}
}
var particlepresent = false;
var copperParticleCount = 0;
function addcopperParticle(){
	var xx=32;
	var yy=-6;
	var bubbleGeo = new THREE.SphereGeometry(0.4,2,1);
	
	copperParticle[copperParticleCount] = new THREE.Mesh(bubbleGeo, new THREE.MeshPhongMaterial({color: "#8b4513"}));
	x = (Math.random() * (4.9)) + 20.2-xx ;
	y = (Math.random() * 7.9) - 16.4;  ;
	z = (Math.random() * 10) -5  ;

	copperParticle[copperParticleCount].position.set(x,y,z);
	PIEaddElement(copperParticle[copperParticleCount]);
	particlepresent = true;
	console.log("particle added");
    
}
var carbonname;
function carbon(x,y,z,colorz){
	var Geom = new THREE.SphereGeometry(1.5, 32, 24);
	var carbonname = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color: "white", transparent: true , opacity: 0.0001}));
	carbonname.position.set(x,y,z);

	var one =  new THREE.Mesh( new THREE.RingGeometry(0.4,0.7,32,8,0,1.4*Math.PI),new THREE.MeshPhongMaterial({color: "white",side:THREE.DoubleSide}));
	one.position.set(-0.4,-0.1,0.05);
	one.rotation.z = Math.PI*0.3;
	carbonname.add(one);

	PIEaddElement(carbonname);

}
var oxygen;
function Oxygen( x, y, z, colorz){

	var Geom = new THREE.SphereGeometry(1.5, 32, 24);
	oxygen = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color: "white", transparent: true , opacity: 0.08}));
	oxygen.position.set(x+1,y-2,z);

	var one =  new THREE.Mesh( new THREE.RingGeometry(0.4,0.7,32),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	one.position.set(-0.4,-0.1,0);
	one.rotation.z = Math.PI*0.15;
	oxygen.add(one);

	var two =  new THREE.Mesh( new THREE.RingGeometry(0.2,0.4,32,8,0,1.6*Math.PI),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	two.position.set(0.7,-0.5,0.05);
	two.rotation.z = Math.PI*1.2;
	oxygen.add(two);

	var fou =  new THREE.Mesh( new THREE.CubeGeometry(1.25,0.3,0.01,4,4,4),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	fou.position.set(-1.4,1,0);
	fou.rotation.z = -Math.PI/4;
	oxygen.add(fou);

	var fou =  new THREE.Mesh( new THREE.CubeGeometry(1.25,0.3,0.01,4,4,4),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	fou.position.set(-2.2,1,0);
	fou.rotation.z = Math.PI/4;
	oxygen.add(fou);


	var fou =  new THREE.Mesh( new THREE.CubeGeometry(2.5,0.4,0.01,4,4,4),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	fou.position.set(-1.8,0.2,0);
	fou.rotation.z = Math.PI/2;
	oxygen.add(fou);



	var fiv =  new THREE.Mesh( new THREE.CubeGeometry(0.4,0.2,0.01,4,4,4),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	fiv.position.set(0.5,-0.9,0);
	fiv.rotation.z = Math.PI/2;
	oxygen.add(fiv);


	var five =  new THREE.Mesh( new THREE.CubeGeometry(0.7,0.2,0.01,4,4,4),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	five.position.set(0.8,-1.2,0);
	oxygen.add(five);

	PIEaddElement(oxygen);

}


var coppername;
function addcoppername(x,y,z,colorz){
	var Geom = new THREE.SphereGeometry(1.5, 32, 24);
	var coppername = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color: "white", transparent: true , opacity: 0.01}));
	coppername.position.set(x,y,z);

	var one =  new THREE.Mesh( new THREE.RingGeometry(0.4,0.7,32,8,0,1.4*Math.PI),new THREE.MeshPhongMaterial({color: "black",side:THREE.DoubleSide}));
	one.position.set(-0.2,-0.1,0.05);
	one.rotation.z = Math.PI*0.3;
	coppername.add(one);


	var two =  new THREE.Mesh( new THREE.RingGeometry(0.2,0.4,32,8,0,1.6*Math.PI),new THREE.MeshPhongMaterial({color: "black",side:THREE.DoubleSide}));
	two.position.set(0.6,-0.35,0.05);
	two.rotation.z = Math.PI*0.7;
	coppername.add(two);

	PIEaddElement(coppername);

}

function sodium( x, y, z, colorz){
	var Geom = new THREE.SphereGeometry(1.5, 32, 24);
	var sodium = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.08}));
	sodium.position.set(x,y,z);

	var one =  new THREE.Mesh( new THREE.CubeGeometry( 0.3, 1.3, 0.2, 4, 4, 1 ),new THREE.MeshPhongMaterial({color: colorz}));
	one.position.set(-1,0,0);
	sodium.add(one);

	var two =  new THREE.Mesh( new THREE.CubeGeometry( 0.3, 1.5, 0.2, 4, 4, 1 ),new THREE.MeshPhongMaterial({color: colorz}));
	two.position.set(-0.5,0,0);
	two.rotation.z = Math.PI/4; 
	sodium.add(two);


	var three =  new THREE.Mesh( new THREE.CubeGeometry( 0.3, 1.3, 0.2, 4, 4, 1 ),new THREE.MeshPhongMaterial({color: colorz}));
	three.position.set(0,0,0);
	sodium.add(three);

	var four =  new THREE.Mesh( new THREE.RingGeometry(0.3,0.55,32),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	four.position.set(0.8,-0.2,0);
	sodium.add(four);


	var five =  new THREE.Mesh( new THREE.CubeGeometry(0.2,0.8,0.01,4,4,1),new THREE.MeshPhongMaterial({color: colorz}));
	five.position.set(1.3,-0.3,0);
	sodium.add(five);

	var six =  new THREE.Mesh( new THREE.CubeGeometry( 0.6, 0.2, 0.01, 4, 4, 1 ),new THREE.MeshPhongMaterial({color: colorz}));
	six.position.set(0.8,0.8,0);
	sodium.add(six);


	var seven =  new THREE.Mesh( new THREE.CubeGeometry( 0.2, 0.6, 0.01, 4, 4, 1 ),new THREE.MeshPhongMaterial({color: colorz}));
	seven.position.set(0.8,0.8,0);
	sodium.add(seven);

	PIEaddElement(sodium);
	sodium.visible = false;

}
function hydroxide( x, y, z, colorz){

	var Geom = new THREE.SphereGeometry(1.5, 32, 24);
	var hydroxide = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color: "white", transparent: true , opacity: 0.08}));
	hydroxide.position.set(x,y,z);

	var one =  new THREE.Mesh( new THREE.RingGeometry(0.4,0.7,32,8,0,1.8*Math.PI),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	one.position.set(-0.4,-0.1,0);
	one.rotation.z = Math.PI*0.15;
	hydroxide.add(one);

	var four =  new THREE.Mesh( new THREE.CubeGeometry(0.3,1.2,0.01,4,4,4),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	four.position.set(0.6,-0.1,0);
	hydroxide.add(four);


	var five =  new THREE.Mesh( new THREE.CubeGeometry(0.7,0.3,0.01,4,4,4),new THREE.MeshPhongMaterial({color: colorz,side:THREE.DoubleSide}));
	five.position.set(0.6,1,0);
	hydroxide.add(five);

	PIEaddElement(hydroxide);
	hydroxide.visible = false;
}
function loadExperimentElements() {

	var geometry;
	var material;
	var loader;
	var texture;

	PIEsetExperimentTitle("Basic electroplating with carbon rod");
	PIEsetDeveloperName("Anupam Singhal");

	initialiseHelp();
	initialiseInfo();

	initialiseScene();

	controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
	controls.target = new THREE.Vector3(-10, 0, 0);
	copperParticle = new Array(1000);
	copperParticleCount = 0;

	BubbleAdded = false;
	particlepresent = false;
	addcoppername(23-31,-5.5,1,"white");
	wireObject = new Array(8);
	var CapGeom = new THREE.CylinderGeometry(3.4, 3.4, 3, 32);
	CapGeom.translate(0, 2.555, 0);
	var Cap = new THREE.Mesh(CapGeom, new THREE.MeshPhongMaterial({color:"brown"}));

	var CapGeom1 = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32);
	CapGeom1.translate(1, 4, 1);
	var Cap1 = new THREE.Mesh(CapGeom1, new THREE.MeshPhongMaterial({color:"white"}));

	var CapGeom2 = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32);
	CapGeom2.translate(-1.6, 4,0);
	var Cap2 = new THREE.Mesh(CapGeom2, new THREE.MeshPhongMaterial({color:"white"}));

	var CapGeom3 = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 32);
	CapGeom3.translate(0.2, 4, -1);
	var Cap3 = new THREE.Mesh(CapGeom3, new THREE.MeshPhongMaterial({color:"white"}));

    var btryGeom = new THREE.CylinderGeometry( 2, 2, 2, 32 );
    var battery = new THREE.Mesh(btryGeom, new THREE.MeshPhongMaterial({color:"#FF4500"}));
    var tipGeom = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    tipGeom.translate(0, 1.3, 0);
    var tip = new THREE.Mesh(tipGeom, new THREE.MeshPhongMaterial({color:"black"}));
    var btrybackgeo = new THREE.CylinderGeometry( 2,2,5,32);
    
    var btryback = new THREE.Mesh(btrybackgeo,new THREE.MeshPhongMaterial({color:"black"}));
    btryback.position.set(3.5-shiftEverything-22-5,5.5+1+1,0);
    PIEaddElement(btryback);

    btryback.rotation.z = Math.PI;

    battery.add(tip);
    battery.rotation.z = Math.PI;
    battery.position.set(3.5-shiftEverything-22-5,0+2+1+1,0);

    PIEaddElement(battery);

    connector = addBall(-7, 10+4.5, 0);
    mount = addBall(-13, 10+4.5, 0);

    var switchGeom = new THREE.BoxGeometry(6, .5, .5);
    switchGeom.translate(3, 0, 0);
    swtch = new THREE.Mesh(switchGeom, new THREE.MeshLambertMaterial({color: "red"}));
    swtch.rotation.z = Math.PI / 4;

    mount.add(swtch);

    var lampBottomGeom = new THREE.CylinderGeometry(1.5, 1.5, 2, 32);
    var lampBottom = new THREE.Mesh(lampBottomGeom, new THREE.MeshPhongMaterial({color: "gray"}));
    lampBottom.position.set(10-shiftEverything+2.5,10.5+4.5,0);
    PIEaddElement(lampBottom);

    var lampBulbGeom = new THREE.SphereGeometry(3.5, 32, 24);
    lampBulbGeom.translate(0, 4, 0);
    lampBulb = new THREE.Mesh(lampBulbGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
    lampBottom.add(lampBulb);

    PIEscene.background = new THREE.Color("#67DEF7");
    var groundMaterial = new THREE.MeshBasicMaterial(  );

	var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6000, 6000 ), groundMaterial );
	mesh233.position.y =  -29;
	mesh233.material.color.set("lightgreen" );
	mesh233.rotation.x = - Math.PI / 2;
	PIEaddElement(mesh233);

	var groundMaterial = new THREE.MeshBasicMaterial(  );
	mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 550, 5550 ), groundMaterial );
	mesh233.position.y = - 17-10;
	mesh233.material.color.set("#47FC57" );
	mesh233.rotation.x = - Math.PI / 2;
	PIEaddElement(mesh233);
	var groundMaterial = new THREE.MeshBasicMaterial(  );

	mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry(300, 300 ), groundMaterial );
	mesh233.position.y = - 15-10;
	mesh233.material.color.set("#33C720" );
	mesh233.rotation.x = - Math.PI / 2;
	PIEaddElement(mesh233);

	var extrudeSettings = {
		amount : 1.8,
		steps : 1,
		bevelEnabled: false,
		curveSegments: 8
	};

	var arcShape = new THREE.Shape();

	arcShape.absarc(0, 0, 2, 0, Math.PI *0.06, 0, false);

	var geometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
	var wrapShape = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
	wrapShape.rotation.x = (Math.PI/2);

	wrapShape.rotation.z = (Math.PI/2)*88/100;

	wrapShape.position.set(-38.5,10-1,0);
	PIEaddElement(wrapShape);

	var wrapShape2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
	wrapShape2.rotation.x = (Math.PI/2);
	wrapShape2.rotation.z = (Math.PI/2)*88/100;

	wrapShape2.position.set(-38.5,5.85-1,0);
	PIEaddElement(wrapShape2);

	var extrudeSettings2 = {
		amount : 0.4,
		steps : 1,
		bevelEnabled: false,
		curveSegments: 8
	};

	var arcShape2 = new THREE.Shape();

	arcShape2.absarc(0, 0, 2, 0,(Math.PI/2)*70/100 , 0, false);

	var geometry2 = new THREE.ExtrudeGeometry(arcShape2, extrudeSettings2);
	var wrapShape3 = new THREE.Mesh(geometry2, new THREE.MeshLambertMaterial({color: "red"}));
	wrapShape3.rotation.z = Math.PI/3.3;
	//wrapShape3.rotation.y = Math.PI/4;
	wrapShape3.rotation.x = (Math.PI/2);

	wrapShape3.position.set(-38.5,5.35-1,0.03);
	PIEaddElement(wrapShape3);
	carbon(13-31+0.5,-5.5,1,"white");
	var beakerGeo = new THREE.CylinderGeometry(10, 10, 10, 32);
	var beaker = new THREE.Mesh(beakerGeo, new THREE.MeshPhongMaterial({color: "#0000CD",transparent:true,opacity:0.4}));
	beaker.position.set(-13,-12-1,0);
	beaker.rotation.x = Math.PI*1/100;
	PIEaddElement(beaker);

	var beakerGeo = new THREE.CylinderGeometry(11, 10, 0.2, 32);
	var beaker = new THREE.Mesh(beakerGeo, new THREE.MeshPhongMaterial({color: "white",transparent:true,opacity:0.4}));
	beaker.position.set(-13,-0.8-6-1,0);
	beaker.rotation.x = Math.PI*1/100;
	PIEaddElement(beaker);

	var leftEGeo = new THREE.CylinderGeometry(1,1, 8+4+1, 32);
	var leftE = new THREE.Mesh(leftEGeo, new THREE.MeshPhongMaterial({color: "black"}));
	leftE.position.set(13-31,-5.5-6-1+2,0);
	PIEaddElement(leftE);

	Oxygen(13-31+5-2,-5.5-5,0,"white");


	var RightEGeo = new THREE.CylinderGeometry(1,1, 8+5, 32);
	var RightE = new THREE.Mesh(RightEGeo, new THREE.MeshPhongMaterial({color: "#8b4513"}));
	RightE.position.set(23-31,-5.5-6-1+2,0);
	PIEaddElement(RightE);

	var geometry = new THREE.RingGeometry(4,4.6 , 32 , 24 , 0,80*Math.PI*2/100);
	ring = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: "yellow",side: THREE.DoubleSide}));
	ring.position.set(-13, 0, 0);
	PIEaddElement(ring);

	var AltObjectGeom = new THREE.BoxGeometry(4, .5, 0.01);
	AltObjectGeom.translate(-2.2, -4.4, 0);
	var AltObject = new THREE.Mesh(AltObjectGeom, new THREE.MeshLambertMaterial({color: "yellow"}));
	AltObject.rotation.z = Math.PI /8;

	ring.add(AltObject);


	var AltObject1Geom = new THREE.BoxGeometry(4, .5, 0.01);
	AltObject1Geom.translate(2, -2.4, 0);
	var AltObject1 = new THREE.Mesh(AltObject1Geom, new THREE.MeshLambertMaterial({color: "yellow"}));
	AltObject1.rotation.z = -1.8*Math.PI /8;

	ring.add(AltObject1);

	var directiongeo = new THREE.SphereGeometry(0.4, 32, 24);
	direction = new THREE.Mesh(directiongeo, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 1, shininess: 500}));
	direction.position.set(-38.5,-7,0);
	PIEaddElement(direction);


	var dd = 30;
	var ddy = 5;
	var granuleGeom = new THREE.SphereGeometry(0.2, 2, 10);
	granule = new Array(15);
	granule[0]= new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[0].position.set(18-dd,5-ddy,0);
	PIEaddElement(granule[0]);

	granule[1] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[1].position.set(16-dd,5-ddy,0);
	PIEaddElement(granule[1]);


	granule[2] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[2].position.set(16-dd,4-ddy,2);
	PIEaddElement(granule[2]);

	granule[3] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[3].position.set(19-dd,3.5-ddy,2);
	PIEaddElement(granule[3]);

	granule[4] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[4].position.set(19.1-dd,3.9-ddy,2.2);
	PIEaddElement(granule[4]);

	granule[5] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[5].position.set(18-dd,4-ddy,0);
	PIEaddElement(granule[5]);

	granule[6] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[6].position.set(17-dd,2.5-ddy,1);
	PIEaddElement(granule[6]);



	granule[7] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[7].position.set(17.5-dd,2.5-ddy,0);
	PIEaddElement(granule[7]);

	granule[8] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[8].position.set(17.2-dd,1-ddy-0.5,1);
	PIEaddElement(granule[8]);

	granule[9] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[9].position.set(19-dd,2.5-ddy-0.5,0);
	PIEaddElement(granule[9]);

	granule[10] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[10].position.set(18-dd,1.6-ddy-0.5,1);
	PIEaddElement(granule[10]);


	granule[11] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[11].position.set(16.5-dd,1.2-ddy-1,0);
	PIEaddElement(granule[11]);

	granule[12] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[12].position.set(16.2-dd,1-ddy-1,1);
	PIEaddElement(granule[12]);

	granule[13] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[13].position.set(18.6-dd,0.9-ddy-1,0);
	PIEaddElement(granule[13]);


	granule[14] = new THREE.Mesh(granuleGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
	granule[14].position.set(17.7-dd,0.9-ddy-1,1);
	PIEaddElement(granule[14]);

	var gg = 0;
	for(gg=0;gg<15;gg++){
		granule[gg].visible = false;
	}

	onoff = false;

	ring.visible= false;

	addwireObject();


	sodium(-15,-10,4,"yellow");
	hydroxide(-10,-10,6,"red");

	sodium(-12,-13,-3,"yellow");
	hydroxide(-15,-13,-3,"darkred");


	sodium(-15,-16,3,"yellow");
	hydroxide(-11,-16,-4,"darkred");


    hydroxide(-11.9,-9.5,1,"darkred");


    sodium(-21,-10,3,"yellow");
    hydroxide(-21,-13,-3,"darkred");


    sodium(-20.2,-16,-3,"yellow");
    hydroxide(-17,-17,6,"darkred");



    sodium(-9,-16,5,"yellow");
    hydroxide(-5,-10,-3,"darkred");


    sodium(-5,-13,0,"yellow");
    hydroxide(-5,-15.5,0,"darkred");
    oxygen.visible = false;

    pieSetInputOutputDisplay();
	
	document.getElementById("start").addEventListener("click",startTheProcess);
  	document.getElementById("stop").addEventListener("click",setOff);
 	document.getElementById(">>").addEventListener("click",speedUp);
  	document.getElementById("<<").addEventListener("click",speedDown);
 
	resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIErender();

}
function resetExperiment()
{

	setOff();
	var i=0;
	for(i=0;i<copperParticleCount;i++){
		copperParticle[i].visible = false;
	}
	if(copperParticle[copperParticleCount]){
		copperParticle[copperParticleCount].visible = false;
	}
	pcount = 0;
	copperParticleCount = 0;
	particlepresent = false;

	document.getElementById("pause").style.visibility="hidden";
	oxygen.visible = false;
	PIEchangeDisplayText(timeString,0);
	scalar = 1.0;
    onoff = false;
    BubbleAdded = false;
    ring.visible = false;

    for(i = 0;i<BubbleCount;i++){	
    	PIEscene.remove(BubbleArray[i]);
    }
    BubbleCount = 0.0;

    BubbleArray = [];

    direction.visible = false;
    direction.position.set(-38.5,-7,0);


    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIErender();

}
var x=0.0;
var yco=0.0;
var xco=0.0;
var yco2=0.0;
var xco3 = 0.0;

var oldtime = 0;
var oldtimedir = 0;
var coundir = 0;
function updateExperimentElements(t, dt)
{  
	PIEchangeDisplayText(timeString,t);
	document.getElementById("pause").style.visibility="hidden";
	if(!pcount){
		addcopperParticle();
		pcount = 1;
	}
	var xpos = copperParticle[copperParticleCount].position.x;
	var ypos = copperParticle[copperParticleCount].position.y;
	var zpos = copperParticle[copperParticleCount].position.z;
	console.log(zpos);

	if(copperParticle[copperParticleCount].position.x < -6 && copperParticle[copperParticleCount].position.x >-8 && copperParticle[copperParticleCount].position.z < 1 && copperParticle[copperParticleCount].position.z > -1){
		copperParticleCount = copperParticleCount + 1;
		addcopperParticle();
	}
	else{
		if(xpos > -6){
			copperParticle[copperParticleCount].position.set(xpos-0.1,ypos,zpos);
		}
		if(xpos < -8){
			copperParticle[copperParticleCount].position.set(xpos+0.1,ypos,zpos);
		}
		if(zpos >1){
			copperParticle[copperParticleCount].position.set(xpos,ypos,zpos-0.1);
		}

		if(zpos < -1){
			copperParticle[copperParticleCount].position.set(xpos,ypos,zpos+0.1);
		}
	}
	if(BubbleAdded){
		var oo = 0;
		for(oo=0;oo<BubbleCount;oo++){
			if(BubbleArray[oo].position.y<-7.9){
				BubbleArray[oo].position.set(BubbleArray[oo].position.x,BubbleArray[oo].position.y+0.1*scalar,BubbleArray[oo].position.z);
			}
			else{
				BubbleArray[oo].position.set(BubbleArray[oo].position.x,-16.9,BubbleArray[oo].position.z);
			}
		}
	}
	if(onoff ){
		direction.visible = true;
		var posx = direction.position.x;
		var posy = direction.position.y;
		var posz = direction.position.z;

		if(coundir == 0){
			oldtimedir = t;
			coundir = 1;
		}
		if(!BubbleAdded){
			if(t<1200){
				BubbleWork();
			}
			else{
				BubbleAdded = true;
			}
		}
		if(posx == -38.5 && (posy <=14.5 ) && (posy > -2.5)){
			direction.position.set(posx,posy-0.1*scalar,0);
		}
		else if(posy <= -2.5 && (posx < -18) && (posx >= -38.5) ){
			direction.position.set(posx+0.1*scalar,-2.5,0);

		}

		else if( (posx<=-10)&& (posx >= -18) && (posy <= -2.5) && (posy > -8) ){
			direction.position.set(-18,posy-0.1*scalar,0);

		}
		else if(posy <= -8 && (posx == -18) && (posy < -2.5)){
			direction.position.set(-8,-9,0);
		}
		else if(posx == -8 && posy >= -9 && (posy<=-2.5) ){
			direction.position.set(-8,posy+0.1*scalar,0);
		}
		else if(posy >= -2.5&& posy<=0 && posx>=-8 && posx<11.3){
			direction.position.set(posx+0.1*scalar,-2.5,0);

		}
		else if(posx >= 11.3 && posy>=-2.5 && posy<14.4){
			direction.position.set(posx,posy+0.1*scalar,0);

		}
		else if(posy >=14.4 && posx<=12 && posx>=-38.5){
			direction.position.set(posx - 0.1*scalar , 14.4,0);	
		}
		else {
			direction.position.set(-38.5,posy-0.1*scalar,0);
		}
	}
	else{
	    direction.visible = false;	
	}
}
