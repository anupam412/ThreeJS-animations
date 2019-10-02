var mySceneTLX;        
var mySceneTLY;        
var mySceneBRX;        
var mySceneBRY;        
var mySceneW;          
var mySceneH;          
var myCenterX;         
var myCenterY;   
var ammetersphere;
var wire;      
var swtch;
var lampBulb;
var onoff;


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
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Calculating charge flowing through circuit</h2>";
    helpContent = helpContent + "<h3><u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>In this experiment,we are trying to Calculate the total charge flowed through an electrical circuit in a given time.<u>About the experiment</u></h3>";
    helpContent = helpContent + "<p>The experiment shows a circuit having components like bulb,wires,switch,battery,ammeter etc.</p>";
    helpContent = helpContent + "<p> Electric current is expressed by the amount of charge flowing through a particular area in unit time </p>";
    helpContent = helpContent + "<p> In circuits using metallic wires, electrons constitute the flow of charges. </p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<h4>Click on start button to start the animation</h4>";
    helpContent = helpContent + "<p>It will close the switch ,hence charge will start flowing</p>";
    helpContent = helpContent + "<h4>Click on Reset button to reset animation</h4>";
    helpContent = helpContent + "<h4>Click on |>>| button to make animation rate faster than normal</h4>";
    
    helpContent = helpContent + "<h4>Click on |<<| button to make animation rate slower than normal</h4>";
    helpContent = helpContent + "<h4>Click on start button and then drag to view a 360 degree view and scroll to zoom</h4>";
    helpContent = helpContent + "<h4>Click on stop button to stop the animation</h4>";
    helpContent = helpContent + "<p>It will open the circuit,charge will not flow further</p>";
    helpContent = helpContent + "<h3>INPUT </h3>";
    helpContent = helpContent + "<p> The given experiment takes current as the input which can be given as a value or by using input slider</p>";
    helpContent = helpContent + "<h3> OUTPUT </h3>";
    helpContent = helpContent + "<p> OUTPUT has been shown in following ways :- </p>";
    helpContent = helpContent + "<p>1. Text Boxes</p>";
    helpContent = helpContent + "<p>2. Output display in OUTPUT Panel </p>";






    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h1>Calculating charge flowing through circuit</h1>";
    infoContent = infoContent + "<h3><u>About the experiment</u></h3>";
    infoContent = infoContent + "<p>In this experiment,we are trying to Calculate the total charge flowed through an electrical circuit in a given time.</p>";
    infoContent = infoContent + "<p>The experiment shows a circuit having components like bulb,wires,switch,battery,ammeter etc.</p>";
    infoContent = infoContent + "<p> Electric current is expressed by the amount of charge flowing through a particular area in unit time </p>";
    infoContent = infoContent + "<p> In circuits using metallic wires, electrons constitute the flow of charges. </p>";
    
    infoContent = infoContent + "<p> Therefore charge flowed (Q) through the circuit in time (T) can be estimated by :-</p>";
    infoContent = infoContent + "<h3> I = Q/T </h3>";
    infoContent = infoContent + "<h3> hence, Q = I X T </h3>";
    infoContent = infoContent + "<h3> SI UNIT of charge is Coulomb </h3>";
    infoContent = infoContent + "<p> 1 Coulomb is the total charge flowed through a circuit having 1 Ampere current in unit time.</p>";
    infoContent = infoContent + "<p> Conventionally, in an electric circuit the direction of electric current is taken as opposite to the direction of the flow of electrons, which are negative charges.</p>";
    
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

var beforeCloseText;
function addBeforeCloseText(){

    beforeCloseText = document.createElement( 'div4' );
    beforeCloseText.style.position = 'absolute';
    beforeCloseText.style.top = window.innerHeight*30/100+"px";
    beforeCloseText.style.left = window.innerWidth*3/100+"px";
    beforeCloseText.style.width = '15%';
    beforeCloseText.style.textAlign = 'center';
    beforeCloseText.style.color = '#fff';
    beforeCloseText.style.backgroundColor = 'black';
    beforeCloseText.style.zIndex = '0';
    beforeCloseText.style.fontSize = "20px";
    beforeCloseText.style.fontFamily = 'Monospace';
    beforeCloseText.innerHTML = "Click on start to close the switch";
    beforeCloseText.style.padding ="20px";
    document.body.appendChild( beforeCloseText );


}

var afterCloseText;
function addAfterCloseText(){

    afterCloseText = document.createElement( 'div6' );
    afterCloseText.style.position = 'absolute';
    afterCloseText.style.top = window.innerHeight*30/100+"px";
    afterCloseText.style.left = window.innerWidth*3/100+"px";
    afterCloseText.style.width = '12%';
    afterCloseText.style.textAlign = 'center';
    afterCloseText.style.color = '#fff';
    afterCloseText.style.backgroundColor = 'black';
    afterCloseText.style.zIndex = '0';
    afterCloseText.style.fontSize = "20px";
    afterCloseText.style.fontFamily = 'Monospace';
    afterCloseText.innerHTML = "Because of the potential difference in wire , bulb is not waiting for a yellow charge to come and glow him";
    afterCloseText.style.padding ="20px";
    document.body.appendChild( afterCloseText );


}

var bulbText;
function addBulbText(){
	bulbText = document.createElement( 'div5' );
    bulbText.style.position = 'absolute';
    bulbText.style.top = window.innerHeight*3.5/100+"px";
    bulbText.style.left = window.innerWidth*52/100+"px";
    bulbText.style.width = '18%';
    bulbText.style.height = '0.8%';
    
    bulbText.style.textAlign = 'center';
    bulbText.style.color = '#fff';
    bulbText.style.backgroundColor = 'black';
    bulbText.style.zIndex = '0';
    bulbText.style.fontSize = "15px";
    bulbText.style.fontFamily = 'Monospace';
    bulbText.innerHTML = "Bulb glows immediately !!";
    bulbText.style.padding ="20px";
    document.body.appendChild( bulbText );


}
var camera;
function initialiseScene() {
    mySceneTLX = 0.0;
    mySceneTLY = 20.0;
    mySceneBRX = 5.0;
    mySceneBRY = -20.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
	
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 40;
    PIEscene.add( camera );
    
    PIEcamera.position.set(0, 0, 40);

    var ambLight = new THREE.AmbientLight( 0x909090);
    PIEaddElement(ambLight);

    var dirLight = new THREE.DirectionalLight( 0xfffff, 1);
    dirLight.position.set(1,1,1);
    PIEaddElement(dirLight);
}

function addBall(x, y, z){
    var ballGeom = new THREE.SphereGeometry(0.5, 32, 24);
    var ball = new THREE.Mesh(ballGeom, new THREE.MeshPhongMaterial({color:"red"}));
    ball.position.set(x, y, z);
    PIEaddElement(ball);
    return ball;
}

var electronGeom;
var electron;
function setOn(){
    wire.material.color.setStyle("yellow");
    lampBulb.material.color.setStyle("yellow");
    lampBulb.material.transparent = false;
    swtch.rotation.z = 0;
	for(var k=0;k<40;k++){
    	electron[k].visible = false;
	}
	electron[0].visible = true;

	onoff = true;

 	ElementToClick.visible = true;
	ElementToClick.rotation.z = 0;
    ElementToClick.position.set(-11,8.5,0);
	PIErender();
}

function setOff(){ 
    wire.material.color.setStyle("blue");
    lampBulb.material.color.setStyle("white");
    lampBulb.material.transparent = true;
    swtch.rotation.z = Math.PI / 4;
    ammetersphere.rotation.z = Math.PI/3;
	ElementToClick.rotation.z = Math.PI / 4;
    ElementToClick.position.set(-11,10.8,0);
    onoff= false;
    for(var k=0;k<40;k++){
    	electron[k].visible = false;
	}

	PIErender();
}

function setOnOff(){
    onoff = !onoff;
    if (onoff) {setOn()} else {setOff()};
}
var current=0.1;
function handleCurrent(newvalue){
	current = newvalue*1.0;
    PIErender();
}
var time=0.0;
function handleTime(newvalue){
    time = newvalue;
    PIErender();
}

var currentString = "CURRENT  (A)";
var timeString = "TIME  (ms)";
var chargeString = "CHARGE  (mC)"

function pieSetInputOutputDisplay(){

	PIEaddInputSlider(currentString,1, handleCurrent, 1, 100, 1);
    PIEaddDisplayText(currentString, current);
    PIEaddDisplayText(timeString, 0);
    PIEaddDisplayText(chargeString, 0);
      

}
var info;
function addTimerText(){
    info = document.createElement( 'div' );
    info.style.position = 'absolute';
    info.style.top = ( window.innerHeight*32/100 )+"px";
    info.style.left = ( window.innerWidth*87/100 )+"px";
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
var currentDetails;
function addCurrentFlowingText(){

    currentDetails = document.createElement( 'div1' );
    currentDetails.style.position = 'absolute';
    currentDetails.style.top = '160px';
    currentDetails.style.left = '70px';
    currentDetails.style.width = '15%';
    currentDetails.style.textAlign = 'center';
    currentDetails.style.color = '#000';
    currentDetails.style.fontWeight = 'bold';
    currentDetails.style.backgroundImage = 'radial-gradient(white,#04EDCA,black)';
    currentDetails.style.zIndex = '0';
    currentDetails.style.fontSize = "50px";
    currentDetails.style.fontFamily = 'Monospace';
    currentDetails.innerHTML = "Current flowing in the circuit = 0 A";
    currentDetails.style.padding ="20px";
    document.body.appendChild( currentDetails );

}

var chargeDetails;
function addChargeFlowedText(){

    chargeDetails = document.createElement( 'div3' );
    chargeDetails.style.position = 'absolute';
    chargeDetails.style.top = '280px';
    chargeDetails.style.left = '1050px';
    chargeDetails.style.width = '15%';
    chargeDetails.style.textAlign = 'center';
    chargeDetails.style.color = '#000';
    chargeDetails.style.fontWeight = 'bold';
    chargeDetails.style.backgroundImage = 'radial-gradient(white,#04EDCA,black)';
    chargeDetails.style.zIndex = '0';
    chargeDetails.style.fontSize = "50px";
    chargeDetails.style.fontFamily = 'Monospace';
    chargeDetails.innerHTML = "Charge flowed = 0 C";
    chargeDetails.style.padding ="20px";
    document.body.appendChild( chargeDetails );

}
function resetCam(){
//	PIEcamera.position.set(0,0,70);
}
function define_electrons(){


	electron[0] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[0].position.set(-20,-10,0);
    PIEaddElement(electron[0]);

	electron[1] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[1].position.set(-17,-10,0);
    PIEaddElement(electron[1]);

    electron[2] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[2].position.set(-14,-10,0);
    PIEaddElement(electron[2]);

	electron[3] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[3].position.set(-11,-10,0);
    PIEaddElement(electron[3]);

    electron[4] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[4].position.set(-8,-10,0);
    PIEaddElement(electron[4]);

    electron[5] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[5].position.set(-5,-10,0);
    PIEaddElement(electron[5]);

    electron[6] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[6].position.set(-2,-10,0);
    PIEaddElement(electron[6]);

    electron[7] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "yellow", transparent: true, opacity: 0.5, shininess: 500}));
    electron[7].position.set(1,-10,0);
    PIEaddElement(electron[7]);

	electron[8] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[8].position.set(4,-10,0);
    PIEaddElement(electron[8]);

    electron[9] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[9].position.set(7,-10,0);
    PIEaddElement(electron[9]);


	electron[10] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[10].position.set(10,-10,0);
    PIEaddElement(electron[10]);

    electron[11] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[11].position.set(14,-10,0);
    PIEaddElement(electron[11]);

    electron[12] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[12].position.set(17,-10,0);
    PIEaddElement(electron[12]);

	electron[13] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[13].position.set(20,-10,0);
    PIEaddElement(electron[13]);

	electron[14] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[14].position.set(-20,-7,0);
    PIEaddElement(electron[14]);

	electron[15] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[15].position.set(-20,-4,0);
    PIEaddElement(electron[15]);

	electron[16] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[16].position.set(-20,-1,0);
    PIEaddElement(electron[16]);

	electron[17] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[17].position.set(-20,2,0);
    PIEaddElement(electron[17]);
	
	electron[18] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[18].position.set(-20,5,0);
    PIEaddElement(electron[18]);

	electron[19] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[19].position.set(-20,8,0);
    PIEaddElement(electron[19]);

	electron[20] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[20].position.set(-18,10,0);
    PIEaddElement(electron[20]);


	electron[21] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[21].position.set(-15,10,0);
    PIEaddElement(electron[21]);

	electron[22] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[22].position.set(-12,10,0);
    PIEaddElement(electron[22]);

	electron[23] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[23].position.set(-9,10,0);
    PIEaddElement(electron[23]);

	electron[24] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[24].position.set(-6,10,0);
    PIEaddElement(electron[24]);


	electron[25] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[25].position.set(-3,10,0);
    PIEaddElement(electron[25]);

	electron[26] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[26].position.set(0,10,0);
    PIEaddElement(electron[26]);

	electron[27] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[27].position.set(3,10,0);
    PIEaddElement(electron[27]);


	electron[28] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[28].position.set(6,10,0);
    PIEaddElement(electron[28]);

	electron[29] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[29].position.set(9,10,0);
    PIEaddElement(electron[29]);

	electron[30] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[30].position.set(12,10,0);
    PIEaddElement(electron[30]);

	electron[31] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[31].position.set(15,10,0);
    PIEaddElement(electron[31]);

	electron[32] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[32].position.set(18,10,0);
    PIEaddElement(electron[32]);

	electron[33] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[33].position.set(20,9.5,0);
    PIEaddElement(electron[33]);

	electron[34] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[34].position.set(20,6.5,0);
    PIEaddElement(electron[34]);

	electron[35] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[35].position.set(20,3.5,0);
    PIEaddElement(electron[35]);

	electron[36] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[36].position.set(20,0.5,0);
    PIEaddElement(electron[36]);

	electron[37] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[37].position.set(20,-2.5,0);
    PIEaddElement(electron[37]);

	electron[38] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[38].position.set(20,-5.1,0);
    PIEaddElement(electron[38]);

	electron[39] = new THREE.Mesh(electronGeom,new THREE.MeshPhongMaterial({color: "skyblue", transparent: true, opacity: 0.5, shininess: 500}));
    electron[39].position.set(20,-7.5,0);
    PIEaddElement(electron[39]);

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

function setElectronPosi(){

	electron[0].position.set(-20,-10,0);
    electron[1].position.set(-17,-10,0);
    electron[2].position.set(-14,-10,0);
    electron[3].position.set(-11,-10,0);
    electron[4].position.set(-8,-10,0);
    electron[5].position.set(-5,-10,0);
    electron[6].position.set(-2,-10,0);
    electron[7].position.set(1,-10,0);
    electron[8].position.set(4,-10,0);
    electron[9].position.set(7,-10,0);
    electron[10].position.set(10,-10,0);
    electron[11].position.set(14,-10,0);
    electron[12].position.set(17,-10,0);
    electron[13].position.set(20,-10,0);
    electron[14].position.set(-20,-7,0);
    electron[15].position.set(-20,-4,0);
    electron[16].position.set(-20,-1,0);
    electron[17].position.set(-20,2,0);
    electron[18].position.set(-20,5,0);
    electron[19].position.set(-20,8,0);
    electron[20].position.set(-18,10,0);
    electron[21].position.set(-15,10,0);
    electron[22].position.set(-12,10,0);
    electron[23].position.set(-9,10,0);
    electron[24].position.set(-6,10,0);
    electron[25].position.set(-3,10,0);
    electron[26].position.set(0,10,0);
    electron[27].position.set(3,10,0);
    electron[28].position.set(6,10,0);
    electron[29].position.set(9,10,0);
    electron[30].position.set(12,10,0);
    electron[31].position.set(15,10,0);
    electron[32].position.set(18,10,0);
    electron[33].position.set(20,9.5,0);
    electron[34].position.set(20,6.5,0);
    electron[35].position.set(20,3.5,0);
    electron[36].position.set(20,0.5,0);
    electron[37].position.set(20,-2.5,0);
    electron[38].position.set(20,-5.1,0);
    electron[39].position.set(20,-7.5,0);

}
function ResetElectrons(){

	setElectronPosi();    
    scalar = 1.0;
    PIErender();
}
function PIEmouseDown(event){

	var intersects;     // to hold return array of ray intersects

    event.defaultPrevented = true;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);

    intersects = PIEraycaster.intersectObjects([swtch]);

 	if(intersects.length > 0){
 		if(!onoff){
 		 	 document.getElementById("start").click();
   		}	    	
    	else{
			document.getElementById("stop").click();
   		
    	}
    }
}
function PIEmouseMove (event){

	var intersects;     // to hold return array of ray intersects

    event.defaultPrevented = true;

    PIEmouseP.x = ( event.clientX / PIEcanvasW ) * 2 - 1;
    PIEmouseP.y = - ( event.clientY / PIEcanvasH ) * 2 + 1;

    /* Cast the ray to find intersecting objects */
    PIEraycaster.setFromCamera(PIEmouseP, PIEcamera);
	intersects = PIEraycaster.intersectObjects([swtch]);
     if (intersects.length > 0)
     {
            console.log("asdsda");
            PIEscreenElem.style.cursor = 'pointer';
     }
	   else{
	        PIEscreenElem.style.cursor = 'auto';
        }
    

}
function loadExperimentElements() {
    
    var geometry;
    var material;
    var loader;
    var texture;

    PIEsetExperimentTitle("Calculating charge flowing through circuit");
    PIEsetDeveloperName("Anupam Singhal");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();
    controls = new THREE.OrbitControls(PIEcamera, PIErenderer.domElement);
    

    var ElementToClickGeo = new THREE.BoxGeometry(6,1,1);
    ElementToClick = new THREE.Mesh(ElementToClickGeo, new THREE.MeshLambertMaterial({color: "white",transparent:true,opacity:0.0,depthWrite:false}));
    ElementToClick.rotation.z = Math.PI / 4;
    ElementToClick.position.set(-11,10.8,0);
    PIEaddElement(ElementToClick);

	var ammeterbody = new THREE.Mesh(new THREE.CylinderGeometry(4.6,4.6,4,32),new THREE.MeshPhongMaterial({color:"skyblue"}));
	ammeterbody.rotation.x = Math.PI/2;
	ammeterbody.position.set(-20,0,0);
	PIEaddElement(ammeterbody);

	var ammeterbody = new THREE.Mesh(new THREE.CylinderGeometry(5,5,3.8,32),new THREE.MeshPhongMaterial({color:"black"}));
	ammeterbody.rotation.x = Math.PI/2;
	ammeterbody.position.set(-20,0,0);
	PIEaddElement(ammeterbody);
	
	var ammeterbody = new THREE.Mesh(new THREE.RingGeometry(5.1,5.3,32,8,8,Math.PI*2/3),new THREE.MeshPhongMaterial({color:"black"}));
	ammeterbody.position.set(-20,-1.7,2.2);
	ammeterbody.rotation.z = -Math.PI*77/200;
	PIEaddElement(ammeterbody);
	
	var Geom = new THREE.SphereGeometry(1.5, 32, 24);
   	var one = new Array(12);
	one[0] =  new THREE.Mesh( new THREE.RingGeometry(0.1,0.2,32,8,0,1.4*Math.PI),new THREE.MeshBasicMaterial({color: "black",side:THREE.DoubleSide}));
	one[0].position.set(-20-0.3,3.9,2.1);
	PIEaddElement(one[0]);
	one[0].rotation.z = -Math.PI/1.45;

    one[1] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 0.3, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[1].position.set(-20.1-0.3,4.3-2+1.9,2.1);
	PIEaddElement(one[1]);

    one[2] =  new THREE.Mesh( new THREE.CubeGeometry( 0.4, 0.1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[2].position.set(-19.9-0.3,4.5-2+1.9,2.1);
	PIEaddElement(one[2]);

    one[3] =  new THREE.Mesh( new THREE.RingGeometry( 0.2, 0.3, 32, 8, 0, Math.PI*2 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[3].position.set(-19.3-0.3,4.1-2+1.9,2.1);
	PIEaddElement(one[3]);
	
    one[4] =  new THREE.Mesh( new THREE.RingGeometry( 0.2, 0.3, 32, 8, 0, Math.PI*2 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[4].position.set(-24.5+0.8,0.9,2.1);
	PIEaddElement(one[4]);

    var l=1;var ll=0.4;
	one[5] =  new THREE.Mesh( new THREE.RingGeometry( 0.2, 0.3, 32, 8, 0, Math.PI*2 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[5].position.set(-15.5-l,0.5+ll,2.1);
	PIEaddElement(one[5]);
	
    one[6] =  new THREE.Mesh( new THREE.RingGeometry( 0.2, 0.3, 32, 8, 0, Math.PI*2 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[6].position.set(-16.2-l,0.5+ll,2.1);
	PIEaddElement(one[6]);

 	one[7] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 0.6, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[7].position.set(-16.7-l,0.5+ll,2.1);
	PIEaddElement(one[7]);

	one[8] =  new THREE.Mesh( new THREE.RingGeometry(0.25,0.35,32,8,0,1.4*Math.PI),new THREE.MeshBasicMaterial({color: "black",side:THREE.DoubleSide}));
	one[8].position.set(-20-0.7,0,2.2);
	PIEaddElement(one[8]);
	one[8].rotation.z = -Math.PI/6;

	one[8] =  new THREE.Mesh( new THREE.RingGeometry(0.25,0.35,32,8,0,1.4*Math.PI),new THREE.MeshBasicMaterial({color: "black",side:THREE.DoubleSide}));
	one[8].position.set(-20-0.15,0,2.2);
	PIEaddElement(one[8]);
	one[8].rotation.z = -Math.PI/6;

 	one[9] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 0.6, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[9].position.set(-20-1,0.1,2.2);
	PIEaddElement(one[9]);

 	one[10] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[10].position.set(-19.3,0.3,2.2);
	PIEaddElement(one[10]);
	one[10].rotation.z = -Math.PI/10;

 	one[11] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[11].position.set(-19.3,0.3,2.2);
	PIEaddElement(one[11]);
	one[11].rotation.z = -Math.PI/10;

 	one[12] =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[12].position.set(-19,0.3,2.2);
	PIEaddElement(one[12]);
	one[12].rotation.z = -9*Math.PI/10;
 	one[12] =  new THREE.Mesh( new THREE.CubeGeometry( 0.3, 0.1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "black"}));
	one[12].position.set(-19.2,0.3,2.2);
	PIEaddElement(one[12]);

    ammetersphere = new THREE.Mesh(new THREE.SphereGeometry(0.3,32,28),new THREE.MeshPhongMaterial({color:"green"}));
	ammetersphere.position.set(-20,-2,2.1);
	var ammeterneedle2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.2,4.3,32),new THREE.MeshPhongMaterial({color:"red"}));
	ammeterneedle2.rotation.x = 0;
	ammeterneedle2.position.set(0,2.4,0);

	ammetersphere.add(ammeterneedle2);

	ammetersphere.rotation.z = Math.PI/3;
	PIEaddElement(ammetersphere);

	var ammeter1 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.8,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(ammeter1);
	ammeter1.position.set(-24.3,0.5,2.1);
	ammeter1.rotation.z = Math.PI/3;

	var ammeter2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.8,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(ammeter2);
	ammeter2.position.set(-15.7,0.4,2.1);
	ammeter2.rotation.z = -Math.PI/3;

	var ammeter3 = new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.8,32),new THREE.MeshPhongMaterial({color:"black"}));
	PIEaddElement(ammeter3);
	ammeter3.position.set(-19.7,3.1,2.2);
	ammeter3.rotation.z =0;

    var btryGeom = new THREE.CylinderGeometry( 2.5, 2.5, 4, 32 );
    var battery = new THREE.Mesh(btryGeom, new THREE.MeshPhongMaterial({color:"#FF4500"}));
    var tipGeom = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    tipGeom.translate(0, 2.555, 0);
    var tip = new THREE.Mesh(tipGeom, new THREE.MeshPhongMaterial({color:"black"}));
    var btrybackgeo = new THREE.CylinderGeometry( 2.5,2.5,7,32);
    var btryback = new THREE.Mesh(btrybackgeo,new THREE.MeshPhongMaterial({color:"black"}));
    btryback.position.set(-2-9,-10,0);
    PIEaddElement(btryback);
    btryback.rotation.z = Math.PI/2;
    battery.add(tip);
    battery.rotation.z = -Math.PI / 2;
    battery.position.set(3.5-9,-10,0);
 	var onez =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "white"}));
	onez.position.set(3.5-9-4.8,-9.6,2.6);
	PIEaddElement(onez);


 	var onezm =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "white"}));
	onezm.position.set(3.5-9-3.5+0.2,-9.6,2.6);
	//one.rotation.z = Math.PI/2;
	PIEaddElement(onezm);

	onezm.rotation.z= Math.PI*0.1;

 	var oLnezm =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "white"}));
	oLnezm.position.set(3.5-9-3.5+0.5,-9.6,2.6);
	//one.rotation.z = Math.PI/2;
	PIEaddElement(oLnezm);

	oLnezm.rotation.z= -Math.PI*0.1;


 	var onezj =  new THREE.Mesh( new THREE.RingGeometry(0.3,0.4,32),new THREE.MeshBasicMaterial({color: "white"}));
	onezj.position.set(3.5-9-4.1,-9.6,2.6);
	//one.rotation.z = Math.PI/2;
	PIEaddElement(onezj);

    var op=17.7;
 	var onez2 =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "white"}));
	onez2.position.set(op+3.5-9-4.8,-9.6,2.6);
	//one.rotation.z = Math.PI/2;
	PIEaddElement(onez2);


 	var onezm2 =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "white"}));
	onezm2.position.set(3.5-9-3.5+0.2+op,-9.6,2.6);
	//one.rotation.z = Math.PI/2;
	PIEaddElement(onezm2);

	onezm2.rotation.z= Math.PI*0.1;

 	var oLnezm2 =  new THREE.Mesh( new THREE.CubeGeometry( 0.1, 1, 0.1, 4, 4, 1 ),new THREE.MeshBasicMaterial({color: "white"}));
	oLnezm2.position.set(3.5-9-3.5+0.5+op,-9.6,2.6);
	//one.rotation.z = Math.PI/2;
	PIEaddElement(oLnezm2);

	oLnezm2.rotation.z= -Math.PI*0.1;


 	var onezj2 =  new THREE.Mesh( new THREE.RingGeometry(0.3,0.4,32),new THREE.MeshBasicMaterial({color: "white"}));
	onezj2.position.set(3.5-9-4.1+op,-9.6,2.6);
	PIEaddElement(onezj2);
    PIEaddElement(battery);

    var btryGeom = new THREE.CylinderGeometry( 2.5, 2.5, 4, 32 );
    var battery = new THREE.Mesh(btryGeom, new THREE.MeshPhongMaterial({color:"#FF4500"}));
    var tipGeom = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    tipGeom.translate(0, 2.555, 0);
    var tip = new THREE.Mesh(tipGeom, new THREE.MeshPhongMaterial({color:"black"}));
    var btrybackgeo = new THREE.CylinderGeometry( 2.5,2.5,7,32);
    
    var btryback = new THREE.Mesh(btrybackgeo,new THREE.MeshPhongMaterial({color:"black"}));
    btryback.position.set(-2+9,-10,0);
    PIEaddElement(btryback);
    
    btryback.rotation.z = Math.PI/2;
    battery.add(tip);
    battery.rotation.z = -Math.PI / 2;
    battery.position.set(3.5+9,-10,0);

    PIEaddElement(battery);

    connector = addBall(-7, 10, 0);
    mount = addBall(-13, 10, 0);

    var switchGeom = new THREE.BoxGeometry(6, .5, .5);
    switchGeom.translate(3, 0, 0);
    swtch = new THREE.Mesh(switchGeom, new THREE.MeshLambertMaterial({color: "red"}));
    swtch.rotation.z = Math.PI / 4;
    mount.add(swtch);

    var lampBottomGeom = new THREE.CylinderGeometry(1, 1, 2, 32);
    var lampBottom = new THREE.Mesh(lampBottomGeom, new THREE.MeshPhongMaterial({color: "gray"}));
    lampBottom.position.set(10,10,0);
    PIEaddElement(lampBottom);

    var lampBulbGeom = new THREE.SphereGeometry(3, 32, 24);
    lampBulbGeom.translate(0, 3, 0);
    lampBulb = new THREE.Mesh(lampBulbGeom, new THREE.MeshPhongMaterial({color: "white", transparent: true, opacity: 0.5, shininess: 500}));
    lampBottom.add(lampBulb);
    electronGeom = new THREE.SphereGeometry(0.25,40,24);
    
    electron = new Array(20);

	define_electrons();
    
    for(var k=0;k<40;k++){
    	electron[k].visible = false;
	}
    var wireShape = new THREE.Shape();
        ( function roundedRect( ctx, x, y, width, height, radius ){
            ctx.moveTo( x + 13, y + height);
            ctx.lineTo( x + width - radius, y + height) ;
            ctx.lineTo( x + width, y + height, x + width, y + height - radius );
            ctx.lineTo( x + width, y + radius );
            ctx.lineTo( x + width, y, x + width - radius, y );
            ctx.lineTo( x + radius, y );
            ctx.lineTo( x, y, x, y + radius );
            ctx.moveTo( x, y + radius );
            ctx.lineTo( x, y + height - radius );
            ctx.lineTo( x, y + height, x + radius, y + height );
            ctx.lineTo( x + 7, y + height) ;

    } )( wireShape, -20, -10, 40, 20, 5 );

    var wirePoints = wireShape.createPointsGeometry();
    wire = new THREE.Line(wirePoints, new THREE.LineBasicMaterial({color: "blue"}));
    PIEaddElement(wire);
	

	PIEscene.background = new THREE.Color("skyblue");
    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
    var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6000, 6000 ), groundMaterial );
    mesh233.position.y = - 19;
    mesh233.material.color.set("lightgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);

    var groundMaterial = new THREE.MeshBasicMaterial(  );
    mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 550, 5550 ), groundMaterial );
    mesh233.position.y = - 17;
    mesh233.material.color.set("green" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
    var groundMaterial = new THREE.MeshBasicMaterial(  );
 
    mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry(300, 300 ), groundMaterial );
    mesh233.position.y = - 15;
    mesh233.material.color.set("darkgreen" );
    mesh233.rotation.x = - Math.PI / 2;
    PIEaddElement(mesh233);
 
    var extrudeSettings = {
        amount : 2.2,
        steps : 1,
        bevelEnabled: false,
        curveSegments: 8
    };

    var arcShape = new THREE.Shape();
    arcShape.absarc(0, 0, 2.5, 0, Math.PI * 0.05, 0, false);

    var geometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
    var wrapShape = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
    wrapShape.rotation.z = Math.PI/2;
    wrapShape.rotation.y = Math.PI/2;
    wrapShape.rotation.x = 90*(Math.PI/2)/100;

    wrapShape.position.set(-5+9,-10,0.03);
    PIEaddElement(wrapShape);

    var wrapShape2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
    wrapShape2.rotation.z = Math.PI/2;
    wrapShape2.rotation.y = Math.PI/2;
    wrapShape2.rotation.x = 90*(Math.PI/2)/100;

    wrapShape2.position.set(2.5+9,-10,0.03);
    PIEaddElement(wrapShape2);

    var extrudeSettings2 = {
        amount : 0.4,
        steps : 1,
        bevelEnabled: false,
        curveSegments: 8
    };

    var arcShape2 = new THREE.Shape();
    arcShape2.absarc(0, 0, 2.5, 0,72*(Math.PI/2)/100 , 0, false);

    var geometry2 = new THREE.ExtrudeGeometry(arcShape2, extrudeSettings2);
    var wrapShape3 = new THREE.Mesh(geometry2, new THREE.MeshLambertMaterial({color: "red"}));
    wrapShape3.rotation.z = Math.PI/2;
    wrapShape3.rotation.y = Math.PI/2;
    wrapShape3.rotation.x = 58*(Math.PI/2)/100;

    wrapShape3.position.set(3.4+9,-10,0.03);
    PIEaddElement(wrapShape3);
    	


    var extrudeSettings = {
        amount : 2.2,
        steps : 1,
        bevelEnabled: false,
        curveSegments: 8
    };

    var arcShape = new THREE.Shape();
    //arcShape.moveTo(2.5,0);
    arcShape.absarc(0, 0, 2.5, 0, Math.PI * 0.05, 0, false);

    var geometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
    var wrapShape = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
    wrapShape.rotation.z = Math.PI/2;
    wrapShape.rotation.y = Math.PI/2;
    wrapShape.rotation.x = 90*(Math.PI/2)/100;

    wrapShape.position.set(-5-9,-10,0.03);
    PIEaddElement(wrapShape);

    var wrapShape2 = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: "red"}));
    wrapShape2.rotation.z = Math.PI/2;
    wrapShape2.rotation.y = Math.PI/2;
    wrapShape2.rotation.x = 90*(Math.PI/2)/100;

    wrapShape2.position.set(2.5-9,-10,0.03);
    PIEaddElement(wrapShape2);

    var extrudeSettings2 = {
        amount : 0.4,
        steps : 1,
        bevelEnabled: false,
        curveSegments: 8
    };

    var arcShape2 = new THREE.Shape();
    //arcShape.moveTo(2.5,0);
    arcShape2.absarc(0, 0, 2.5, 0,72*(Math.PI/2)/100 , 0, false);

    var geometry2 = new THREE.ExtrudeGeometry(arcShape2, extrudeSettings2);
    var wrapShape3 = new THREE.Mesh(geometry2, new THREE.MeshLambertMaterial({color: "red"}));
    wrapShape3.rotation.z = Math.PI/2;
    wrapShape3.rotation.y = Math.PI/2;
    wrapShape3.rotation.x = 58*(Math.PI/2)/100;

    wrapShape3.position.set(3.4-9,-10,0.03);
    PIEaddElement(wrapShape3);
    	

    onoff = false;
    pieSetInputOutputDisplay();
 
    document.getElementById("start").addEventListener("click", setOn);
    document.getElementById("stop").addEventListener("click",setOff);
    document.getElementById(">>").addEventListener("click",speedUp);
    document.getElementById("<<").addEventListener("click",speedDown);
    document.getElementById("reset").addEventListener("click",ResetElectrons);	

    resetExperiment();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
    PIEcamera.position.set(0,0,70);
    PIErender();
}
function resetExperiment()
{
    
	setOff();
    resetCam();
    current = (Math.random()*100);
    PIEchangeInputSlider(currentString, current);
    PIEchangeDisplayText(currentString, current);
    PIEchangeDisplayText(timeString,0);
    PIEchangeDisplayText(chargeString,0);
    ammetersphere.rotation.z = Math.PI/3;
    setElectronPosi();    
    scalar = 1.0;
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
	PIEcamera.position.set(0,0,70);
    PIErender();
}

var x=0.0;
var yco=0.0;
var xco=0.0;
var yco2=0.0;
var xco3 = 0.0;
var counter = 0.0;

function updateExperimentElements(t, dt)
{  

    PIEchangeDisplayText(currentString, current);
    PIEchangeDisplayText(timeString,t);
    PIEchangeDisplayText(chargeString,current*t);
   	var maxangle = -Math.PI*2*current/300 + (Math.PI/3);
   	if(ammetersphere.rotation.z > maxangle){
   		ammetersphere.rotation.z = ammetersphere.rotation.z - 0.1;
   	}


   	var i=0;
    for(i=0;i<40;i++){
    	var posx = electron[i].position.x;
   		var posy = electron[i].position.y;

   		if((-20<posx) && (posx<=20) && (parseInt(posy) == -10) ){
    		electron[i].position.set(posx-0.1*scalar,-10,0);
    	}
    	else if((parseInt(posx) == -20) && (-10<=posy) && (posy<10)){

			electron[i].position.set(-20,posy+0.1*scalar,0);
		
		}

    	else if((parseInt(posx) == 20) && (-10<posy) && (posy<=10)){

			electron[i].position.set(20,posy-0.1*scalar,0);
		
		}

    	else if((-20<=posx) && (posx<20) && (parseInt(posy) == 10 )){

			electron[i].position.set(posx+0.1*scalar,10,0);
		
		}

	}
   	if (counter<=1){
   	electron[0].material.opacity = 0.0+counter;
   	counter = counter + 0.1;
    }
    else{
    	counter = 0;
    }
    
    var timerText = "";
    var q= parseInt(t/60000);
    var y = parseInt(t/1000);
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
}

