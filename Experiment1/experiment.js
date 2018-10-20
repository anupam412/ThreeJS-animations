var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;          
var mySceneH;          

var myCenterX;         
var myCenterY;   


var controls;
var helpContent;

var greenCircle;
var bulb;
var key;
var swtch;
var radius=0;
var on=0;

function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Chemical effect of electric current on potato</h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>This experiment shows a circuit containing a battery,switch, bulb and a potato.</p>";
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
    infoContent = infoContent + "<h2>Chemical effect of electric current on potato</h2>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>This experiment shows a circuit containing a battery,switch, bulb and a potato.</p>";
    infoContent = infoContent + "<h3> Concept: </h3>";
 	infoContent = infoContent + "<p> When current is made to flow through the circuit , green stains gets visible near positive end of the battery showing conduction phenomenon through potato.</p>";
 	infoContent+="<p> This experiment is used to determine the positive terminal of the battery as green stain always gets formed on the positive terminal side of the potato.</p>";
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
	on = 1;
	bulb.material.color.setStyle("yellow");
	key.rotation.z = 0;
}


function setOff(){ 
	on = 0;
	bulb.material.color.setStyle("white");
	key.rotation.z = Math.PI/4;

    PIErender();
}
function pieSetInputOutputDisplay(){


}

function PIEmouseDown( event ){
    var intersects;     
    event.defaultPrevented = true;
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    intersects = PIEraycaster.intersectObjects([key,swtch]);
    if (intersects.length > 0) {
    	if(on){
    		on = 0 ;
    		setOff();
    	}
    	else{
    		on = 1;
    		document.getElementById("start").click();
    	}
    }
}




function PIEmouseMove( event )
{
	var intersects; 
    event.defaultPrevented = true;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;
	
	PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
    intersects = PIEraycaster.intersectObjects([swtch,key]);
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
    minus.position.set(x,y-2.3,z+1.1);
    PIEaddElement(minus);

	var plus1 =  new THREE.Mesh( new THREE.CubeGeometry( 2, 0.3, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
    plus1.position.set(x,y+1.5,z+1.1);
    PIEaddElement(plus1);

	var plus2 =  new THREE.Mesh( new THREE.CubeGeometry( 2, 0.3, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "red"}));
    plus2.position.set(x,y+1.5,z+1.1);
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

function loadExperimentElements() {
    
    var geometry;
    var material;
    var loader;
    var texture;

    PIEsetExperimentTitle(" Chemical effect of electric current on potato");
    PIEsetDeveloperName("Anupam Singhal");

    initialiseHelp();
    initialiseInfo();
    initialiseScene();

    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);

	var geometry = new THREE.SphereGeometry( 5, 32, 32 ,0,Math.PI,0,Math.PI);
	var material = new THREE.MeshPhongMaterial( {color: "#7E6119",side : THREE.DoubleSide} );
	var sphere = new THREE.Mesh( geometry, material );
	PIEaddElement(sphere);
	sphere.position.set(0-5,0-6,0);
	sphere.rotation.x = Math.PI/2;

	var geometry = new THREE.CylinderGeometry( 5, 5, 0.1 ,32);
	var material = new THREE.MeshBasicMaterial( {color: "#EBDE72"} );
	var disc = new THREE.Mesh( geometry, material );
	PIEaddElement(disc);
	disc.position.set(0-5,0.05-6,0);

	var geometry = new THREE.SphereGeometry( 4, 32, 32 ,0,Math.PI,0,Math.PI);
	var material = new THREE.MeshPhongMaterial( {color: "#7E6119",side : THREE.DoubleSide} );
	var sphere = new THREE.Mesh( geometry, material );
	PIEaddElement(sphere);
	sphere.position.set(2-5,0-6,0);
	sphere.rotation.x = Math.PI/2;

	var geometry = new THREE.CylinderGeometry( 4, 4, 0.1 ,32);
	var material = new THREE.MeshBasicMaterial( {color: "#EBDE72"} );
	var disc = new THREE.Mesh( geometry, material );
	PIEaddElement(disc);
	disc.position.set(2-5,0.05-6,0);


	var redNodeT = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1,32),new THREE.MeshBasicMaterial({color:"black"}));
	PIEaddElement(redNodeT);
	redNodeT.position.set(-2-5.4+0.05,-3.5,0);

	var redNode = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,1.5,32),new THREE.MeshPhongMaterial({color:"red",wireframe:true}));
	PIEaddElement(redNode);
	redNode.position.set(-2-5.4,-4,0);

	var redNodePin = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,2,32),new THREE.MeshPhongMaterial({color:"black"}));
	redNode.add(redNodePin);
	redNodePin.position.set(0,-1,0);

	var blackNodeT = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(blackNodeT);
	blackNodeT.position.set(2-4-0.05,-3.5,0);

	var blackNode = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,1.5,32),new THREE.MeshPhongMaterial({color:"black",wireframe:true}));
	PIEaddElement(blackNode);
	blackNode.position.set(2-4,-4,0);

	var blackNodePin = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,2,32),new THREE.MeshPhongMaterial({color:"black"}));
	blackNode.add(blackNodePin);
	blackNodePin.position.set(0,-1,0);

	var bulbbottom = new THREE.Mesh(new THREE.CylinderGeometry(1,1,2,32),new THREE.MeshPhongMaterial({color:"gray"}));
	PIEaddElement(bulbbottom);
	bulbbottom.position.set(-15,3,0);	

	 bulb = new THREE.Mesh(new THREE.SphereGeometry(3,24,32),new THREE.MeshPhongMaterial({color : "white",transparent:true,opacity:0.7,shininess:500}));
	bulb.position.set(-15,6.7,0);
	PIEaddElement(bulb);

	 key = new THREE.Mesh(new THREE.SphereGeometry(0.5,24,32),new THREE.MeshPhongMaterial({color : "black",transparent:true,opacity:0.7,shininess:500}));
	key.position.set(-4,3,0);
	PIEaddElement(key);

	var key2 = new THREE.Mesh(new THREE.SphereGeometry(0.5,24,32),new THREE.MeshPhongMaterial({color : "black",transparent:true,opacity:0.7,shininess:500}));
	key2.position.set(2,3,0);
	PIEaddElement(key2);

	 swtch = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,6.5,32),new THREE.MeshPhongMaterial({color:"gray"}));
	key.add(swtch);
	swtch.rotation.z = Math.PI/2;
	swtch.position.set(3,0,0);	

	mybattery(14,-1,0);

	var wire1 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,12,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(wire1);
	wire1.position.set(-10,3,0);
	wire1.rotation.z = Math.PI/2;


	var wire2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,9,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(wire2);
	wire2.position.set(7,3,0);
	wire2.rotation.z = Math.PI/2;


	var wire3 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,1.9,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(wire3);
	wire3.position.set(11.5,2,0);


	var wire4 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,15,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(wire4);
	wire4.position.set(5.4,-3,0);
	wire4.rotation.z = Math.PI/2;

	var wire5 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,13,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(wire5);
	wire5.position.set(-13.8,-3,0);
	wire5.rotation.z = Math.PI/2;


	var wire6= new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,6.1,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(wire6);
	wire6.position.set(-20.3,0,0);

	var wire7= new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,6.1,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(wire7);
	wire7.position.set(-17.25,3,0);
	wire7.rotation.z = Math.PI/2;

	key.rotation.z = Math.PI/4;

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
    PIEadjustCamera(0,0,45);
   	
   	PIErender();
}
function resetExperiment(){
    on=0;
	setOff();
	PIEscene.remove(greenCircle);
	radius = 0;
	PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEadjustCamera(0,0,45);
	PIErender();
}
function updateExperimentElements(t, dt){
	if(on == 1){
		if(radius < 2){
			PIEscene.remove(greenCircle);

			greenCircle = new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,0.1,32),new THREE.MeshBasicMaterial({color:"#3CB371"}));	
			greenCircle.position.set(-7.4,0.05-6+0.01,0)
			PIEaddElement(greenCircle);
			radius = radius + 0.01;
		}
	}
}

