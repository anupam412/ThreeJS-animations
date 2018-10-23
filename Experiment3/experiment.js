var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var first_time = 1;
var mySceneBRY;        
var mySceneW;          
var mySceneH;          

var curveObject;

var curveObject1;
var curveObject2;
var curveObject3;
var curveObject4;
var curveObject5;
var curveObject6;
var curveObject7;
var curveObject8;
var curveObject9;
var curveObject10;
var curveObject11;
var curveObject12;
var line;
var Velocity=1;
var timett = 0;
var taken = 0;
var first_time = 0;
var off = 0;
var key;
var myCenterX;         
var myCenterY;   
var counting = 0;
var ammetersphere;
var wire;      
var swtch;
var lampBulb;
var switchMainBody;
var onoff;
var connector;
var thinFilm;
var smallplus;
var pin;
var smallplus2;
var north;
var south;
var south2;

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
var redLight;
var greenLight;
var connector;
var mount;
var controlball;
var wire;
var wire1;
var wire2;
var wire3;
var wire4;

var pendulum;

var fast=0.5;
var posDontCOUNT = 0;
var negDontCOUNT = 0;

var direction = 1;

function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Simple railway signal</h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>This experiment shows a circuit containing a solenoid with a metallic conductor inside it ,a battery ,a switch and a signal light which when switch is closed ,metal conductor acts as a magnet and attracts the iron nail which causes light to change.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<h4>Click on start button to start the animation</h4>";
    helpContent = helpContent + "<h4>Click on Reset button to reset animation</h4>";
    helpContent = helpContent + "<h4>Click on |>>| button to make animation rate faster than normal</h4>";
    
    helpContent = helpContent + "<h4>Click on |<<| button to make animation rate slower than normal</h4>";
    helpContent = helpContent + "<h4>Click on start button and then drag anywhere to view a 360 degree view and scroll to zoom</h4>";
    helpContent = helpContent + "<h4>Click on stop button to stop the animation</h4>";
    helpContent = helpContent + "<h3>Interaction</h3>";
    helpContent = helpContent + "<p> User can use mouse controls to look around as it's a 3D model .</p>";
    
    helpContent = helpContent + "<h3> Happy Experimenting !!!! </h3>";

    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Simple railway signal</h2>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>This experiment shows a circuit containing a solenoid with a metallic conductor inside it ,a battery ,a switch and a signal light which when switch is closed ,metal conductor acts as a magnet and attracts the iron nail which causes light to change.</p>";
    infoContent = infoContent + "<h3> Concept: </h3>";
 	infoContent = infoContent + "<p> When current is made to flow through the circuit , iron nail gets attracted towards the coil due to magnetic field and hence it shows green signal.</p>";
 	infoContent = infoContent + "<p> Similarly when switch is opened,current stops flowing and hence magnetic field starts vanishing.Therefore iron nail would get back to it's original position and hence it shows red signal</p>";
 	
    infoContent = infoContent + "<h3> Happy Experimenting !!!! </h3>";
    PIEupdateInfo(infoContent);
}

function initialiseScene() {
    mySceneTLX = 0.0;
    mySceneTLY = 20.0;
    mySceneBRX = 5.0;
    mySceneBRY = -20.0;
}

function setOn(){
    key.rotation.z = 0;
    onoff = 1;
	PIErender();
    line.material.color.setStyle("yellow");
    wire.material.color.setStyle("yellow");
    wire1.material.color.setStyle("yellow");
    wire2.material.color.setStyle("yellow");
    wire3.material.color.setStyle("yellow");
    wire4.material.color.setStyle("yellow");
}


function setOff(){ 
    key.rotation.z = Math.PI/4;
    pin.rotation.y = 0;
    redLight.material.color.setStyle("red");
    greenLight.material.color.setStyle("white");
    onoff = 0;
    line.material.color.setStyle("black");
    wire.material.color.setStyle("black");
    wire1.material.color.setStyle("black");
    wire2.material.color.setStyle("black");
    wire3.material.color.setStyle("black");
    wire4.material.color.setStyle("black");

	curveObject.visible = false;

	curveObject1.visible = false;
	curveObject2.visible = false;
	curveObject3.visible = false;
	curveObject4.visible = false;
	curveObject5.visible = false;
	curveObject6.visible = false;
	curveObject7.visible = false;
	curveObject8.visible = false;
	curveObject9.visible = false;
	curveObject10.visible = false;
	curveObject11.visible = false;
	curveObject12.visible = false;

	north.visible = false;
	south.visible = false;
	south2.visible  = false;

    PIErender();
}
function pieSetInputOutputDisplay(){


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

function PIEmouseDown( event )
{
    var intersects;  

    event.defaultPrevented = true;
   
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    intersects = PIEraycaster.intersectObjects([switchMainBody]);
    if (intersects.length > 0) {
        if(onoff == 0){
            
            setOn();
            onoff = 1;
            document.getElementById("start").click();
        }
        else{
          
            line.material.color.setStyle("black");
            wire.material.color.setStyle("black");
            wire1.material.color.setStyle("black");
            wire2.material.color.setStyle("black");
            wire3.material.color.setStyle("black");
            wire4.material.color.setStyle("black");

            key.rotation.z = Math.PI/4;
            onoff = 0;

        }
        PIEscreenElem.style.cursor = 'pointer';
    }
}

function mybattery( x, y, z){
    var cuboidOrange =  new THREE.Mesh( new THREE.CubeGeometry( 4, 5, 2, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "orange"}));
    cuboidOrange.position.set(x,y,z);
    PIEaddElement(cuboidOrange);

    var curve1O = new THREE.Mesh(new THREE.CylinderGeometry(1,1,4,32),new THREE.MeshBasicMaterial({color:"orange"}));
    curve1O.position.set(x,y+2.5,z);
    PIEaddElement(curve1O);
    curve1O.rotation.z = Math.PI/2;


    var curve2O = new THREE.Mesh(new THREE.CylinderGeometry(1,1,4,32),new THREE.MeshBasicMaterial({color:"orange"}));
    curve2O.position.set(x,y-2.5,z);
    PIEaddElement(curve2O);
    curve2O.rotation.z = Math.PI/2;

    var cuboidBlack =  new THREE.Mesh( new THREE.CubeGeometry( 6, 5, 2, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
    cuboidBlack.position.set(x+5,y,z);
    PIEaddElement(cuboidBlack);


    var curve1B = new THREE.Mesh(new THREE.CylinderGeometry(1,1,6,32),new THREE.MeshBasicMaterial({color:"black"}));
    curve1B.position.set(x+5,y+2.5,z);
    PIEaddElement(curve1B);
    curve1B.rotation.z = Math.PI/2;


    var curve2B = new THREE.Mesh(new THREE.CylinderGeometry(1,1,6,32),new THREE.MeshBasicMaterial({color:"black"}));
    curve2B.position.set(x+5,y-2.5,z);
    PIEaddElement(curve2B);
    curve2B.rotation.z = Math.PI/2;

    var minus =  new THREE.Mesh( new THREE.CubeGeometry( 2, 0.3, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
    minus.position.set(x,y+2.5,z+1.1);
    PIEaddElement(minus);

    var plus1 =  new THREE.Mesh( new THREE.CubeGeometry( 2, 0.3, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
    plus1.position.set(x,y-1.5,z+1.1);
    PIEaddElement(plus1);

    var plus2 =  new THREE.Mesh( new THREE.CubeGeometry( 2, 0.3, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
    plus2.position.set(x,y-1.5,z+1.1);
    PIEaddElement(plus2);
    plus2.rotation.z=Math.PI/2;


    var terminal1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5,32),new THREE.MeshBasicMaterial({color:"gray"}));
    terminal1.position.set(x-2.2,y+2.2,z);
    PIEaddElement(terminal1);
    terminal1.rotation.z = Math.PI/2;

    var terminal2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5,32),new THREE.MeshBasicMaterial({color:"gray"}));
    terminal2.position.set(x-2.2,y-2.2,z);
    PIEaddElement(terminal2);
    terminal2.rotation.z = Math.PI/2;

}

function PIEmouseMove( event )
{
	var intersects; 
    event.defaultPrevented = true;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    intersects = PIEraycaster.intersectObjects([switchMainBody]);
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

     

function loadExperimentElements() {
    
    var geometry;
    var material;
    var loader;
    var texture;

    PIEsetExperimentTitle("Simple railway signal");
    PIEsetDeveloperName("Anupam Singhal");

    initialiseHelp();
    initialiseInfo();

    initialiseScene();

    onoff = 0;

    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
 	
    mybattery(20,0,0);


    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(0,-11,0),new THREE.Vector3(0,3,0)), 25, 2, 30, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
     line = new THREE.Line(geometry, material);
    PIEaddElement(line);

    line.rotation.y = Math.PI;

    var cylinderTube = new THREE.Mesh( new THREE.CylinderGeometry(1.8,1.8,14,24) ,new THREE.MeshPhongMaterial({color:"skyblue"}));
    cylinderTube.position.set(0,-4,0);
    PIEaddElement(cylinderTube);

    var nailTube = new THREE.Mesh( new THREE.CylinderGeometry(0.5,0.5,2,24) ,new THREE.MeshPhongMaterial({color:"gray"}));
    var nailTubeC = new THREE.Mesh( new THREE.CylinderGeometry(1,1,0.8,24) ,new THREE.MeshPhongMaterial({color:"gray"}));
    nailTube.add(nailTubeC);
   
    nailTubeC.position.set(0,1.3,0);


    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(-0.5,3,-2),new THREE.Vector3(20,2.5,0)), 20, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire = new THREE.Mesh(geometry, material);
    PIEaddElement(wire);

    key = new THREE.Mesh( new THREE.SphereGeometry(0.6,24,32),new THREE.MeshPhongMaterial({color : "black"}));
    key.position.set(5,-10.5,0);
    PIEaddElement(key);

    var key1 = new THREE.Mesh( new THREE.SphereGeometry(0.6,24,32),new THREE.MeshPhongMaterial({color : "black"}));
    key1.position.set(11,-10.5,0);
    PIEaddElement(key1);

    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(0,-11,-2),new THREE.Vector3(5,-10.5,0)), 20, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire1 = new THREE.Mesh(geometry, material);
    PIEaddElement(wire1);

    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(17,-10.5,0),new THREE.Vector3(11,-10.5,0)), 20, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire2 = new THREE.Mesh(geometry, material);
    PIEaddElement(wire2);

    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(17,-10.5,0),new THREE.Vector3(17,-2,0)), 20, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire3 = new THREE.Mesh(geometry, material);
    PIEaddElement(wire3);


    var geometry = new THREE.TubeGeometry( new THREE.LineCurve(new THREE.Vector3(17,-2,0),new THREE.Vector3(19,-2,0)), 20, 0.04, 8, false );
    var material = new THREE.MeshBasicMaterial( { color: "black" } );
    
    wire4 = new THREE.Mesh(geometry, material);
    PIEaddElement(wire4);

	switchMainBody = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,6,32),new THREE.MeshPhongMaterial({color : "gray"}));
    switchMainBody.rotation.z = Math.PI/2;
    key.add(switchMainBody);
    switchMainBody.position.set(3,0,0);
    key.rotation.z = Math.PI/4;


	pin = new THREE.Mesh(new THREE.CylinderGeometry(1.3,1.3,1,8),new THREE.MeshBasicMaterial({color : "grey"}));
    pin.position.set(-24,10,0);
    PIEaddElement(pin);
    pin.rotation.x = Math.PI/2;

	var support = new THREE.Mesh(new THREE.BoxGeometry(2.6,23,2),new THREE.MeshPhongMaterial({color: "gray"}));
    PIEaddElement(support);
    support.position.set(-29,1,0);

	var support1 = new THREE.Mesh(new THREE.BoxGeometry(5,2,5),new THREE.MeshBasicMaterial({color: "black"}));
    PIEaddElement(support1);
    support1.position.set(-29,-10,0);

	var support2 = new THREE.Mesh(new THREE.BoxGeometry(3.5,0.5,2),new THREE.MeshPhongMaterial({color: "gray"}));
    PIEaddElement(support2);
    support2.position.set(-27,10,0);

    var pp = new THREE.Mesh(new THREE.BoxGeometry(2.6,0.1,0.3),new THREE.MeshBasicMaterial({color: "white"}));
    pin.add(pp);
    pp.position.set(0.05,0.5,0);


    var woodenPlank = new THREE.Mesh(new THREE.BoxGeometry(28,0.5,1.7),new THREE.MeshBasicMaterial({color: "#663300"}));
    pin.add(woodenPlank);
    woodenPlank.position.set(14,0,0);

    pin.add(nailTube);
    nailTube.position.set(25,0,2.6);
    nailTube.rotation.x = -Math.PI/2;

    var woodenPlank1 = new THREE.Mesh(new THREE.BoxGeometry(20,0.5,1.7),new THREE.MeshBasicMaterial({color: "#663300"}));
    pin.add(woodenPlank1);
    woodenPlank1.position.set(6,0,8);
    woodenPlank1.rotation.y = -Math.PI/3.5;

    var signal = new THREE.Mesh(new THREE.BoxGeometry(15,7,4),new THREE.MeshPhongMaterial({color: "black"}));
    PIEaddElement(signal);
    signal.position.set(-15,-6,0);

    var bb = new THREE.Mesh(new THREE.CylinderGeometry(3.5,3.5,4,32),new THREE.MeshPhongMaterial({color : "black"}));
    bb.position.set(-8,-6,0);
    PIEaddElement(bb);
    bb.rotation.x = Math.PI/2;

	redLight = new THREE.Mesh(new THREE.CylinderGeometry(2.5,2.5,4,32),new THREE.MeshBasicMaterial({color : "red"}));
    redLight.position.set(-11,-6,0.01);
    PIEaddElement(redLight);
    redLight.rotation.x = Math.PI/2;


	greenLight = new THREE.Mesh(new THREE.CylinderGeometry(2.5,2.5,4,32),new THREE.MeshBasicMaterial({color : "#00ff00"}));
    greenLight.position.set(-18,-6,0.01);
    PIEaddElement(greenLight);
    greenLight.rotation.x = Math.PI/2;
    greenLight.material.color.setStyle("white");

	var curve = new THREE.CubicBezierCurve3(
	new THREE.Vector3( -2, 3, 0 ),
	new THREE.Vector3( -2, 5, 0 ),
	new THREE.Vector3( -3, 6, 0 ),
	new THREE.Vector3( -5, 8, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject);
	
		var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( -1, 3, 0 ),
		new THREE.Vector3( -1, 5, 0 ),
		new THREE.Vector3( -2, 6, 0 ),
		new THREE.Vector3( -3, 8, 0 )
	
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject1 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject1);

		var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( -0, 3, 0 ),
		new THREE.Vector3( -0, 6, 0 ),
		new THREE.Vector3( -0.5, 6, 0 ),
		new THREE.Vector3( -1, 8, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject2 = new THREE.Line( geometry, material );    
	
	PIEaddElement(curveObject2);

	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( 0.5, 3, 0 ),
		new THREE.Vector3( 0.5, 5, 0 ),
		new THREE.Vector3( 0.5, 8, 0 ),
		new THREE.Vector3( 1, 8, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject3 = new THREE.Line( geometry, material );    
	
	PIEaddElement(curveObject3);


	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( 1, 3, 0 ),
		new THREE.Vector3( 1, 5, 0 ),
		new THREE.Vector3( 2, 6, 0 ),
		new THREE.Vector3( 3, 8, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject4 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject4);

	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( 1.5, 3, 0 ),
		new THREE.Vector3( 1.5, 5, 0 ),
		new THREE.Vector3( 3, 6, 0 ),
		new THREE.Vector3( 5, 8, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject5 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject5);

	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( -2, -11, 0 ),
		new THREE.Vector3( -2, -13, 0 ),
		new THREE.Vector3( -4, -14, 0 ),
		new THREE.Vector3( -6, -15, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject6 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject6);

	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( -1, -11, 0 ),
		new THREE.Vector3( -1, -13, 0 ),
		new THREE.Vector3( -2.5, -14, 0 ),
		new THREE.Vector3( -3, -15, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject7 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject7);

	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( -0.5, -11, 0 ),
		new THREE.Vector3( -0.5, -13, 0 ),
		new THREE.Vector3( -1, -14, 0 ),
		new THREE.Vector3( -1.5, -15, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject8 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject8);


	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( 0.5, -11, 0 ),
		new THREE.Vector3( 0.5, -13, 0 ),
		new THREE.Vector3( 1, -14, 0 ),
		new THREE.Vector3( 1.5, -15, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject9 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject9);

	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( 1, -11, 0 ),
		new THREE.Vector3( 1, -13, 0 ),
		new THREE.Vector3( 1.5, -14, 0 ),
		new THREE.Vector3( 3, -15, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject10 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject10);

	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( 1.8, -11, 0 ),
		new THREE.Vector3( 1.8, -13, 0 ),
		new THREE.Vector3( 3, -14, 0 ),
		new THREE.Vector3( 5, -15, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject11 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject11);



	var curve = new THREE.CubicBezierCurve3(
		new THREE.Vector3( 0, -11, 0 ),
		new THREE.Vector3( 0, -13, 0 ),
		new THREE.Vector3( 0, -14, 0 ),
		new THREE.Vector3( 0.3, -15, 0 )
	);

	var geometry = new THREE.Geometry();
	geometry.vertices = curve.getPoints( 50 );

	var material = new THREE.LineBasicMaterial( { color : "white" } );

	curveObject12 = new THREE.Line( geometry, material );    

	PIEaddElement(curveObject12);


	curveObject.visible = false;

	curveObject1.visible = false;
	curveObject2.visible = false;
	curveObject3.visible = false;
	curveObject4.visible = false;
	curveObject5.visible = false;
	curveObject6.visible = false;
	curveObject7.visible = false;
	curveObject8.visible = false;
	curveObject9.visible = false;
	curveObject10.visible = false;
	curveObject11.visible = false;
	curveObject12.visible = false;


	north = new THREE.Mesh(new THREE.BoxGeometry(0.2,2.5,0.1),new THREE.MeshBasicMaterial({color:"red"}));
	PIEaddElement(north);
	north.position.set(-1,1,2);


	var north1 = new THREE.Mesh(new THREE.BoxGeometry(0.2,3.3,0.1),new THREE.MeshBasicMaterial({color:"red"}));
	north.add(north1);
	north1.rotation.z = Math.PI/5;
	north1.position.set(1,0,0);

	var north2 = new THREE.Mesh(new THREE.BoxGeometry(0.2,2.5,0.1),new THREE.MeshBasicMaterial({color:"red"}));
	north.add(north2);
	north2.position.set(2,0,0);

	north.visible = false;


	var geometry = new THREE.RingGeometry( 0.8, 1, 32,8,0,Math.PI );
	var material = new THREE.MeshBasicMaterial( { color: "blue", side: THREE.DoubleSide } );
	
	south = new THREE.Mesh( geometry, material );
	PIEaddElement(south);
	south.position.set(4-4,-5-3,2);
	south.rotation.z = Math.PI/2;
	var geometry = new THREE.RingGeometry( 0.8, 1, 32,8,0,Math.PI );
	var material = new THREE.MeshBasicMaterial( { color: "blue", side: THREE.DoubleSide } );
	
	south2 = new THREE.Mesh( geometry, material );
	PIEaddElement(south2);
	south2.position.set(3.45-4,-6.6-3,2);
	south2.rotation.z = -Math.PI/2;

	south.visible = false;
	south2.visible  = false;
	
	PIEscene.background = new THREE.Color("skyblue");

    var groundMaterial = new THREE.MeshBasicMaterial(  );

	var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6000, 6000 ), groundMaterial );
    mesh233.position.y =  -29;
    mesh233.material.color.set("lightgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);

    var groundMaterial = new THREE.MeshBasicMaterial(  );
    mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 550, 5550 ), groundMaterial );
    mesh233.position.y = - 17-10;
    mesh233.material.color.set("darkgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
	mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry(300, 300 ), groundMaterial );
    mesh233.position.y = - 15-10;
    mesh233.material.color.set("darkgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
    pieSetInputOutputDisplay();
 
    document.getElementById("start").addEventListener("click", setOn);
    document.getElementById("stop").addEventListener("click",setOff);

    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIEadjustCamera(0,0,75);
   

    PIErender();
}

function resetExperiment()
{
	
	curveObject.visible = false;

	curveObject1.visible = false;
	curveObject2.visible = false;
	curveObject3.visible = false;
	curveObject4.visible = false;
	curveObject5.visible = false;
	curveObject6.visible = false;
	curveObject7.visible = false;
	curveObject8.visible = false;
	curveObject9.visible = false;
	curveObject10.visible = false;
	curveObject11.visible = false;
	curveObject12.visible = false;

	north.visible = false;
	south.visible = false;
	south2.visible  = false;

    line.material.color.setStyle("black");
    wire.material.color.setStyle("black");
    wire1.material.color.setStyle("black");
    wire2.material.color.setStyle("black");
    wire3.material.color.setStyle("black");
    wire4.material.color.setStyle("black");

    onoff = 0;
    pin.rotation.y = 0;
    key.rotation.z = Math.PI/4;
    redLight.material.color.setStyle("red");
    greenLight.material.color.setStyle("white");
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEadjustCamera(0,0,75);
	PIErender();
}
function updateExperimentElements(t, dt)
{  
    if(onoff == 1){
    	curveObject.visible = true;

		curveObject1.visible = true;
		curveObject2.visible = true;
		curveObject3.visible = true;
		curveObject4.visible = true;
		curveObject5.visible = true;
		curveObject6.visible = true;
		curveObject7.visible = true;
		curveObject8.visible = true;
		curveObject9.visible = true;
		curveObject10.visible = true;
		curveObject11.visible = true;
		curveObject12.visible = true;

		north.visible = true;
		south.visible = true;
		south2.visible  = true;

        if(pin.rotation.y > -Math.PI/24)
	        pin.rotation.y-=0.005;
        if(pin.rotation.y < -Math.PI/50){
            greenLight.material.color.setStyle("#00ff00");
            redLight.material.color.setStyle("white");

         }

    }
    if(onoff == 0){
    	curveObject.visible = false;

		curveObject1.visible = false;
		curveObject2.visible = false;
		curveObject3.visible = false;
		curveObject4.visible = false;
		curveObject5.visible = false;
		curveObject6.visible = false;
		curveObject7.visible = false;
		curveObject8.visible = false;
		curveObject9.visible = false;
		curveObject10.visible = false;
		curveObject11.visible = false;
		curveObject12.visible = false;

		north.visible = false;
		south.visible = false;
		south2.visible  = false;

        if(pin.rotation.y < 0)
            pin.rotation.y+=0.005;
        if(pin.rotation.y > -Math.PI/50){
            greenLight.material.color.setStyle("white");
            redLight.material.color.setStyle("red");
         }
    }
}

