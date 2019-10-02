var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;          
var mySceneH;          
var myCenterX;         
var myCenterY;   

var ring;
var wire1;
var wire2;      
var swtch;
var lampBulb;
var onoff;
var saltbottle;
var saltbottleadded;
var BubbleAdded ;
var wares;
var direction;

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
//-shiftEverything-shiftEverything
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Basic chemical effect of electric current</h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>In this experiment,we are trying to depict that when the solution is pure water ,it doesn't conducts electricity but when we add some common salt to the soltion,it starts conducting electricity.</p>";
    helpContent = helpContent + "<p>The experiment shows a circuit having the following components: bulb,wires,switch,battery,beaker,common salt and electrodes.</p>";
 //   helpContent = helpContent + "<p>When the circuit is closed,electrons attain drift velocity</p>";
   // helpContent = helpContent + "<p> In circuits using metallic wires, electrons constitute the flow of charges. </p>";
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
    infoContent = infoContent + "<h1>Basic chemical effect of electric current</h1>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>In this experiment,we are trying to depict that when the solution is salt water ,solution conducts Electricity because of presence of free mobile ions.</p>";
    infoContent = infoContent + "<p>The experiment shows a circuit having the following components: bulb,wires,switch,battery,beaker,salt solution and electrodes.</p>";
    infoContent = infoContent + "<p><h3><u>Pure water is a poor conductor </u></h3></p>";
    
    infoContent = infoContent + "<p> The water that we get from sources such as taps, hand pumps, wells and ponds is not pure. It may contain several salts dissolved in it. Small amounts of mineral salts are naturally present in it. This water is thus a good conductor of electricity. On the other hand, distilled water is free of salts and is a poor conductor.So due to absence of free mobile ions in pure water, it is a poor conductor of electricity.</p>";
    infoContent = infoContent + "<p> When we dissolve common salt in the water solution, solution becomes conducting due to presence of sodium and chloride ions and reaction starts on both electrodes,Hence salt solution is a good conductor of electricity.</p> "
    infoContent = infoContent + "<h3> ADDITIONAL FEATURES </h3>";
    infoContent = infoContent + "<p> 2. A Digital timer has been provided for user's convenience."
    
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}
function initialiseScene() {
    mySceneTLX = 0.0;
    mySceneTLY = 20.0;
    mySceneBRX = 5.0;
    mySceneBRY = -20.0;
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
     	 			wares[vv].material.color.setStyle("yellow");
     	 				wares[vv].material.transparent = true;
	  				wares[vv].material.opacity = 0.6;
	  				
      			}
   
    lampBulb.material.color.setStyle("yellow");
    lampBulb.material.transparent = false;
    swtch.rotation.z = 0;

    ElementToClick.rotation.z = 0;
    ElementToClick.position.set(-25.5,8.7+2.2+1.8,0);

    var oo = 0;
    for(oo=0;oo<BubbleCount;oo++){
    	BubbleArray[oo].visible = true;
    }
    onoff = true;

}
function setOnWithoutLights(){
    swtch.rotation.z = 0;
    onoff = true;
    ElementToClick.rotation.z = 0;
    ElementToClick.position.set(-25.5,8.7+2.2+1.8,0);
}

function setOff(){ 
	var vv = 0;
	for(vv=0;vv<8;vv++){
			wares[vv].material.color.setStyle("blue");
		
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
    ElementToClick.rotation.z = Math.PI/4;
    ElementToClick.position.set(-26,10.3+2.5+1.8,0);

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
    var z = (Math.random() * 10)-3  ;

    Bubble.position.set(x,y,z);
    PIEaddElement(Bubble);
    BubbleArray.push(Bubble);
	BubbleCount = BubbleCount + 1;

	Bubble2 = new THREE.Mesh(bubbleGeo, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.7}));
    x = (Math.random() * (4.9)) + 20.2-xx ;
    y = (Math.random() * 9) -10.9+yy  ;
    z = (Math.random() * 10) -3  ;

    Bubble2.position.set(x,y,z);
    PIEaddElement(Bubble2);
    BubbleArray.push(Bubble2);
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
var ElementToClick;
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

    /* Cast the ray to find intersecting objects */
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);

    if (PIEselectedDrag != null)
    {   /* Drag the element */
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
function addwares(){
	var Geom = new THREE.CylinderGeometry(0.15,0.15,20.5, 32 );
    wares[0] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue"}));//#FF4500
    wares[0].position.set(-13-7-4-3-1-0.3,-2.5,0);
    wares[0].rotation.z = Math.PI/2;
    PIEaddElement(wares[0]);


	var Geom = new THREE.CylinderGeometry(0.15,0.15,17, 32 );
    wares[1] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue"}));//#FF4500
    wares[1].position.set(-38.5,6,0);
 //   wares[1].rotation.z = Math.PI/2;
    PIEaddElement(wares[1]);


	var Geom = new THREE.CylinderGeometry(0.15,0.15, 10, 32 );
    wares[2] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue"}));//#FF4500
    wares[2].position.set(-30-4+0.5,10+4.5,0);
    wares[2].rotation.z = Math.PI/2;
    PIEaddElement(wares[2]);

	var Geom = new THREE.CylinderGeometry(0.15,0.15, 33, 32 );
    wares[3] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wares[3].position.set(0.75-5-1,10+4.5,0);
    wares[3].rotation.z = Math.PI/2;
    PIEaddElement(wares[3]);


	var Geom = new THREE.CylinderGeometry(0.15,0.15, 17.2, 32 );
    wares[4] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wares[4].position.set(11.4,4.4+1.5+0.1,0);
    //wares[3].rotation.z = Math.PI/2;
    PIEaddElement(wares[4]);

	var Geom = new THREE.CylinderGeometry(0.15,0.15,7, 32 );
    wares[5] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wares[5].position.set(13-31,-6,0);
    //wares[5].rotation.z = Math.PI/2;
    PIEaddElement(wares[5]);

	var Geom = new THREE.CylinderGeometry(0.15,0.15,19.4, 32 );
    wares[6] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wares[6].position.set(1.5,-2.5,0);
    wares[6].rotation.z = Math.PI/2;
    PIEaddElement(wares[6]);


	var Geom = new THREE.CylinderGeometry(0.15,0.15,11.2, 32 );
    wares[7] = new THREE.Mesh(Geom, new THREE.MeshPhongMaterial({color:"darkblue",depthWrite:true}));//#FF4500
    wares[7].position.set(-8,-8,0);
   // wares[6].rotation.z = Math.PI/2;
    PIEaddElement(wares[7]);
}

function stopTheProcess(){

	setOff();
}
function startTheProcess(){
	if(!onoff){
		setOn();
	}
	//document.getElementById("stop").addEventListener("click",stopTheProcess);
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
}
function loadExperimentElements() {
    
    var geometry;
    var material;
    var loader;
    var texture;

    PIEsetExperimentTitle("Basic chemical effect of electric current");
    PIEsetDeveloperName("Anupam Singhal");

    initialiseHelp();
    initialiseInfo();

    initialiseScene();

    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    controls.target = new THREE.Vector3(-10, 0, 0);
   	BubbleAdded = false;

   	wares = new Array(8);
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

    var ElementToClickGeo = new THREE.BoxGeometry(6,1,1);
    ElementToClick = new THREE.Mesh(ElementToClickGeo, new THREE.MeshLambertMaterial({color: "green",transparent:true,opacity:0.0,depthWrite:false}));
    ElementToClick.rotation.z = Math.PI / 4;
    ElementToClick.position.set(-26,10.8+2.5+1.8,0);
    PIEaddElement(ElementToClick);

    var btryGeom = new THREE.CylinderGeometry( 2, 2, 2, 32 );
    var battery = new THREE.Mesh(btryGeom, new THREE.MeshPhongMaterial({color:"#FF4500"}));
    var tipGeom = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    tipGeom.translate(0, 1.3, 0);
    var tip = new THREE.Mesh(tipGeom, new THREE.MeshPhongMaterial({color:"black"}));
    var btrybackgeo = new THREE.CylinderGeometry( 2,2,5,32);
    
    var btryback = new THREE.Mesh(btrybackgeo,new THREE.MeshPhongMaterial({color:"black"}));
    btryback.position.set(3.5-shiftEverything-22-5,5.5+1+2+3,0);
    PIEaddElement(btryback);

    btryback.rotation.z = Math.PI;

    battery.add(tip);
    battery.rotation.z = Math.PI;
    battery.position.set(3.5-shiftEverything-22-5,0+2+1+2+3,0);

    PIEaddElement(battery);
     

     var btryGeom = new THREE.CylinderGeometry( 2, 2, 2, 32 );
    var battery = new THREE.Mesh(btryGeom, new THREE.MeshPhongMaterial({color:"#FF4500"}));
    var tipGeom = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    tipGeom.translate(0, 1.3, 0);
    var tip = new THREE.Mesh(tipGeom, new THREE.MeshPhongMaterial({color:"black"}));
    var btrybackgeo = new THREE.CylinderGeometry( 2,2,5,32);
    
    var btryback = new THREE.Mesh(btrybackgeo,new THREE.MeshPhongMaterial({color:"black"}));
    btryback.position.set(3.5-shiftEverything-22-5,5.5+1+2-5.5,0);
    PIEaddElement(btryback);

    btryback.rotation.z = Math.PI;

    battery.add(tip);
    battery.rotation.z = Math.PI;
    battery.position.set(3.5-shiftEverything-22-5,0+2+1+2-5.5,0);

    PIEaddElement(battery);
    

    var btryGeom = new THREE.CylinderGeometry( 2, 2, 2, 32 );
    var battery = new THREE.Mesh(btryGeom, new THREE.MeshPhongMaterial({color:"#FF4500"}));
    var tipGeom = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    tipGeom.translate(0, 1.3, 0);
    var tip = new THREE.Mesh(tipGeom, new THREE.MeshPhongMaterial({color:"black"}));
    var btrybackgeo = new THREE.CylinderGeometry( 2,2,5,32);
    
    var btryback = new THREE.Mesh(btrybackgeo,new THREE.MeshPhongMaterial({color:"black"}));
    btryback.position.set(3.5-shiftEverything-22-5+50,5.5+1+2-5+5.3,0);
    PIEaddElement(btryback);

    btryback.rotation.z = Math.PI;

    battery.add(tip);
    battery.rotation.z =0;
    battery.position.set(3.5-shiftEverything-22-5+50,0+2+1+2-5+12.3,0);

    PIEaddElement(battery);


    var btryGeom = new THREE.CylinderGeometry( 2, 2, 2, 32 );
    var battery = new THREE.Mesh(btryGeom, new THREE.MeshPhongMaterial({color:"#FF4500"}));
    var tipGeom = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    tipGeom.translate(0, 1.3, 0);
    var tip = new THREE.Mesh(tipGeom, new THREE.MeshPhongMaterial({color:"black"}));
    var btrybackgeo = new THREE.CylinderGeometry( 2,2,5,32);
    
    var btryback = new THREE.Mesh(btrybackgeo,new THREE.MeshPhongMaterial({color:"black"}));
    btryback.position.set(3.5-shiftEverything-22-5+50,5.5+1+2-5+5.3-8.5,0);
    PIEaddElement(btryback);

    btryback.rotation.z = Math.PI;

    battery.add(tip);
    battery.rotation.z =0;
    battery.position.set(3.5-shiftEverything-22-5+50,0+2+1+2-5+12.3-8.5,0);

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

	PIEscene.background = new THREE.Color("skyblue");
    var groundMaterial = new THREE.MeshBasicMaterial(  );
//---------------------------------------------------------------------------------------------------

    var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6000, 6000 ), groundMaterial );
    mesh233.position.y =  -29;
    mesh233.material.color.set("lightgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);

    var groundMaterial = new THREE.MeshBasicMaterial(  );
    mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 550, 5550 ), groundMaterial );
    mesh233.position.y = - 17-10;
    mesh233.material.color.set("green" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
    mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry(300, 300 ), groundMaterial );
    mesh233.position.y = - 15-10;
    mesh233.material.color.set("darkgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
    
//----------------------------------------------------------------------------------------------------
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
    //wrapShape.rotation.z = Math.PI/2;
    //wrapShape.rotation.y = Math.PI/2;
    wrapShape.rotation.x = (Math.PI/2);

    wrapShape.rotation.z = (Math.PI/2)*88/100;

    wrapShape.position.set(-38.5,10+3,0);
    //battery.add(wrapShape);
    PIEaddElement(wrapShape);

    var wrapShape2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
    //wrapShape2.rotation.z = Math.PI/2;
    //wrapShape2.rotation.y = Math.PI/2;
    wrapShape2.rotation.x = (Math.PI/2);
    wrapShape2.rotation.z = (Math.PI/2)*88/100;

    wrapShape2.position.set(-38.5,5.85+3,0);
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

    wrapShape3.position.set(-38.5,5.35+3,0.03);
    PIEaddElement(wrapShape3);

//----------------------------------------------------------------------------------------------------
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
    //wrapShape.rotation.z = Math.PI/2;
    //wrapShape.rotation.y = Math.PI/2;
    wrapShape.rotation.x = (Math.PI/2);

    wrapShape.rotation.z = (Math.PI/2)*88/100;

    wrapShape.position.set(-38.5,10-5.5,0);
    //battery.add(wrapShape);
    PIEaddElement(wrapShape);

    var wrapShape2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
    //wrapShape2.rotation.z = Math.PI/2;
    //wrapShape2.rotation.y = Math.PI/2;
    wrapShape2.rotation.x = (Math.PI/2);
    wrapShape2.rotation.z = (Math.PI/2)*88/100;

    wrapShape2.position.set(-38.5,5.85-5.5,0);
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

    wrapShape3.position.set(-38.5,5.35-5.5,0.03);
    PIEaddElement(wrapShape3);

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
    //wrapShape.rotation.z = Math.PI/2;
    //wrapShape.rotation.y = Math.PI/2;
    wrapShape.rotation.x = (Math.PI/2);

    wrapShape.rotation.z = (Math.PI/2)*88/100;

    wrapShape.position.set(-38.5+50,10+3,0);
    //battery.add(wrapShape);
    PIEaddElement(wrapShape);

    var wrapShape2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
    //wrapShape2.rotation.z = Math.PI/2;
    //wrapShape2.rotation.y = Math.PI/2;
    wrapShape2.rotation.x = (Math.PI/2);
    wrapShape2.rotation.z = (Math.PI/2)*88/100;

    wrapShape2.position.set(-38.5+50,5.85+3,0);
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

    wrapShape3.position.set(-38.5+50,5.35+3+4.2,0.03);
    PIEaddElement(wrapShape3);


    //----------------------------------------------------------------------------------------------------
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
    //wrapShape.rotation.z = Math.PI/2;
    //wrapShape.rotation.y = Math.PI/2;
    wrapShape.rotation.x = (Math.PI/2);

    wrapShape.rotation.z = (Math.PI/2)*88/100;

    wrapShape.position.set(-38.5+50,10-5.5,0);
    //battery.add(wrapShape);
    PIEaddElement(wrapShape);

    var wrapShape2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
    //wrapShape2.rotation.z = Math.PI/2;
    //wrapShape2.rotation.y = Math.PI/2;
    wrapShape2.rotation.x = (Math.PI/2);
    wrapShape2.rotation.z = (Math.PI/2)*88/100;

    wrapShape2.position.set(-38.5+50,5.85-5.5,0);
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

    wrapShape3.position.set(-38.5+50,5.35-5.5+4.25,0.03);
    PIEaddElement(wrapShape3);


    var beakerGeo = new THREE.CylinderGeometry(10, 10, 10, 32);
    var beaker = new THREE.Mesh(beakerGeo, new THREE.MeshPhongMaterial({color: "skyblue",transparent:true,opacity:0.7}));
    beaker.position.set(-13,-12-1,0);
    beaker.rotation.x = Math.PI*1/100;
    PIEaddElement(beaker);

    var beakerGeo = new THREE.CylinderGeometry(11, 10, 0.2, 32);
    var beaker = new THREE.Mesh(beakerGeo, new THREE.MeshPhongMaterial({color: "white",transparent:true,opacity:0.5}));
    beaker.position.set(-13,-0.8-6-1,0);
    beaker.rotation.x = Math.PI*1/100;
    PIEaddElement(beaker);

    var leftEGeo = new THREE.CylinderGeometry(1,1, 8, 32);
    var leftE = new THREE.Mesh(leftEGeo, new THREE.MeshPhongMaterial({color: "gray"}));
    leftE.position.set(13-31,-5.5-6-1,0);
	PIEaddElement(leftE);

    var RightEGeo = new THREE.CylinderGeometry(1,1, 8, 32);
    var RightE = new THREE.Mesh(RightEGeo, new THREE.MeshPhongMaterial({color: "gray"}));
    RightE.position.set(23-31,-5.5-6-1,0);
	PIEaddElement(RightE);

	var geometry = new THREE.RingGeometry(4,4.6 , 32 , 24 , 0,80*Math.PI*2/100);
    ring = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: "yellow",side: THREE.DoubleSide}));
	ring.position.set(-13, 0, 0);
	PIEaddElement(ring);


	//functionz();


	var NewShapeGeom = new THREE.BoxGeometry(4, .5, 0.01);
    NewShapeGeom.translate(-2.2, -4.4, 0);
    var NewShape = new THREE.Mesh(NewShapeGeom, new THREE.MeshLambertMaterial({color: "yellow"}));
    NewShape.rotation.z = Math.PI /8;

    ring.add(NewShape);


	var NewShape1Geom = new THREE.BoxGeometry(4, .5, 0.01);
    NewShape1Geom.translate(2, -2.4, 0);
    var NewShape1 = new THREE.Mesh(NewShape1Geom, new THREE.MeshLambertMaterial({color: "yellow"}));
    NewShape1.rotation.z = -1.8*Math.PI /8;

    ring.add(NewShape1);

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

    addwares();


    sodium(-15,-10,4,"yellow");
    hydroxide(-10,-10,6,"red");

    sodium(-12,-13,-3,"yellow");
    hydroxide(-15,-13,-3,"darkred");


    sodium(-15,-16,3,"yellow");
    hydroxide(-11,-16,-4,"darkred");


    //sodium(-17,-19,0,"darkblue");
    hydroxide(-11.9,-9.5,1,"darkred");


    sodium(-21,-10,3,"yellow");
    hydroxide(-21,-13,-3,"darkred");


    sodium(-20.2,-16,-3,"yellow");
    hydroxide(-17,-17,6,"darkred");



    sodium(-9,-16,5,"yellow");
   hydroxide(-5,-10,-3,"darkred");


    sodium(-5,-13,0,"yellow");
    hydroxide(-5,-15.5,0,"darkred");


    pieSetInputOutputDisplay();
 
   // document.getElementById("start").addEventListener("click", setOnWithoutLights);
  //  document.getElementById("stop").style.visibility="hidden";
  	document.getElementById("start").addEventListener("click",startTheProcess);
  	document.getElementById("stop").addEventListener("click",setOff);
  //  document.getElementById("pause").style.visibility="hidden";
    document.getElementById(">>").addEventListener("click",speedUp);
    document.getElementById("<<").addEventListener("click",speedDown);
 //   document.getElementById("reset").addEventListener("click",ResetElectrons);
// 	PIErenderer.domElement.addEventListener('mousedown', onDocumentMouseDown, false );
    
    resetExperiment();
    //PIEcamera.position.set(-60,0,70);
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    //PIEcamera.position.set(0,0,70);
    PIEadjustCamera(-10, 2, 90);
    PIErender();
//    PIEstartAnimation();

}
function resetExperiment()
{
    
	setOff();
   
    document.getElementById("pause").style.visibility="hidden";
    
    PIEchangeDisplayText(timeString,0);
    scalar = 1.0;
    // saltbottleadded = false;
    onoff = false;
    BubbleAdded = false;
    //animationOfSaltBottle = false;
    ring.visible = false;

    var i = 0;
    for(i = 0;i<BubbleCount;i++){	
    	PIEscene.remove(BubbleArray[i]);
    }
    BubbleCount = 0.0;
   
    BubbleArray = [];
   	
   	direction.visible = false;
   	direction.position.set(-38.5,-7,0);


    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	//PIEcamera.position.set(0,0,70);
    
    PIEadjustCamera(-10, 2, 90);
    PIErender();

   // document.getElementById("start").click();
    
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
//PIEadjustDisplayScene();
    PIEchangeDisplayText(timeString,t);
document.getElementById("pause").style.visibility="hidden";
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
   			
   	//		direction.position.set(-12,posy+0.1,0);
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
    //	ring.visible = false;
   	 	direction.visible = false;	
    	
    }
}
