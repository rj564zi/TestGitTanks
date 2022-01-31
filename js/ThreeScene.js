var camera, scene, renderer, controls;
var geometry,testooo,testvzad,stena1,testobject,odpall,stena2,stena3,stena4,strela,telo, material,cube ,cube11, cube1, cube2, cube3,circle,cube4,cube5,cube6,cube7,cube8,cube9,cube10, circle2,circle3,circle4, plane, sphere;
var podvozok,pas1,pas2,mriezka1,mriezka2,periskop,gulomet,gulometgula,hrdloveze,veza,kanon,koncovkakanona,poklop1,poklop2,naboj,predok,zadok;
var ironbox1,ironbox2,woodbox1,woodbox2;
var clock = new THREE.Clock();
var keyboard = new THREEx.KeyboardState();
var tank;
var meshes = {};
var koniec ="";
var interval;
var Obtiaznost = "Stredna"
var odpal = false;
var nabojtf = false;
var print = false;

var ammo = "Hráč 1 munícia: "
var stavodpocet ="Prebíjam"
var municia = 20;
var silaNaboja = 500;
var speed = 0.60;

var rychlostPrebijania = 2000;
var stavodpocett2 ="Prebíjam"
var municiat22 = 20;
var odpocet22 = false;
var municiapoistkat2 =false;
var municiapoistka2t2 =false;
var zasahTanku11 = false;
var print1= false;
var hP=1000;
var hP2=1000;
var hpPrepinac=false;
var hpPrepinac2=false;
var hpPrepinact2=false;
var hpPrepinac2t2=false;
var obtiaznostPoistka=false;

var municiapoistka =false;
var municiapoistka1 =false;
var trefa = false;

var t2Trefa = false;
var zasahTanku1 = false;


var zasahtestOT1 = false;
var zasahtestOT2 = false;

var prepinacT1 = false;
var prepinacT2 = false;

var odpinacT1 = false;
var odpinacT2 = false;

var vpred = false;
var vpred1 = false;
var vzad = false;
var vzad1 = false;

var pohonVzad = false;
var pohonVzadPrepinac=false;
var kontaktStenaT1W = false;
///////////////////////////t1
var boxzasah1=false;
var boxzasah2 = false;
var boxzasah3 = false;
var boxzasah4 = false;

var boxzasah1odstranenie =false;
var boxzasah2odstranenie =false;
var boxzasah3odstranenie =false;
var boxzasah4odstranenie =false;

var poistka1 = false;
var poistka2 = false;
var poistka3 = false;
var poistka4 = false;
////////////////////////////

//////////////////////////////t2
var boxzasah1t2=false;
var boxzasah2t2 = false;
var boxzasah3t2 = false;
var boxzasah4t2 = false;

var boxzasah1odstraneniet2 =false;
var boxzasah2odstraneniet2 =false;
var boxzasah3odstraneniet2 =false;
var boxzasah4odstraneniet2 =false;

var poistka1t2 = false;
var poistka2t2 = false;
var poistka3t2 = false;
var poistka4t2 = false;

/////////////////////////////////
///////////////////////////////////kontakt woodbox1

var prepinacWood1=false;
var prWood1=false;
var prepinacWood2=false;
var prWood2=false;
var prepinacWood3=false;
var prWood3=false;
var prepinacWood4=false;
var prWood4=false;
var prepinacStena1=false;
var prepinacStena2=false;
var prepinacStena3=false;
var prepinacStena4=false;


////////////////////////////////////////
////////////////////////////////////////kontakt woodbox1 t2
var prepinacWood1t2=false;
var prWood1t2=false;
var prepinacWood2t2=false;
var prWood2t2=false;
var prepinacWood3t2=false;
var prWood3t2=false;
var prepinacWood4t2=false;
var prWood4t2=false;
var prepinacStena1t2=false;
var prepinacStena2t2=false;
var prepinacStena3t2=false;
var prepinacStena4t2=false;
///////////////////////////////////////////

var resett =false;
var odpocet = false;

var a = 1 ;

var help1=0;
var help1T="";
var help2T="";
var help3T="";
var help4T="";
var help5T="";
var help6T="";
var help7T="";
var help8T="";
var help9T="Help - H";

var help1Poistka = false;

var tankN =0;
var tankP=false;

var tankN2 =0;
var tankP2=false;

var zmenaTP=false;

var mapaN=0;
var mapaP = false;


init();
render();


var rotacia;

function poistkaHelp (){
    help1Poistka=false;
}
function tankPo(){
    tankP=false;
}
function tankPo2(){
    tankP2=false;
}
function mapaPo(){
    mapaP = false;
}
function strelabaZv(){
    // create an AudioListener and add it to the camera
// load a sound and set it as the Audio object's buffer

    const listener = new THREE.AudioListener();
    camera.add( listener );

// create a global audio source
    const sound = new THREE.Audio( listener );

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load( 'sound/strelaba.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( false );
        sound.setVolume( 0.9 );
        sound.play();


    });
}
function abraka(){
    a=1;
}
function trefaaa(){
    // create an AudioListener and add it to the camera
// load a sound and set it as the Audio object's buffer
if (a <= 1 ){
    const listener = new THREE.AudioListener();
    camera.add( listener );

// create a global audio source
    const sound = new THREE.Audio( listener );

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load( 'sound/trefa.wav', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( false );
        sound.setVolume( 0.3 );
        sound.play();
        a+=1;
        setTimeout(abraka,300);




    });


}

}
function veza(){
    // create an AudioListener and add it to the camera
// load a sound and set it as the Audio object's buffer

    const listener = new THREE.AudioListener();
    camera.add( listener );

// create a global audio source
    const sound = new THREE.Audio( listener );

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load( 'sound/veza.wav', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( false );
        sound.setVolume( 0.0001 );
        sound.play();


    });
}


function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 69, window.innerWidth / window.innerHeight, 0.01, 1000 );
    camera.position.set(0, 4, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );





    addObjects();
    mapa1();

    tankOp();

    cube1.position.x=-4
    cube1.rotation.z=-4.71
    cube1.scale.set(0.7,0.7,0.7);

    is7();


    podvozok.position.x=4
    podvozok.rotation.z=4.71
    podvozok.scale.set(0.7,0.7,0.7);
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enabled=false;

}

function render() {

    requestAnimationFrame( render );

    renderer.render( scene, camera );
    update();
    camera.lookAt(scene.position);

}
function reset(){
    podvozok.position.set(0.1, 0.49, 0);
    cube1.position.set(0, 0.49, 0);
    hrdloveze.rotation.z=0;
    cube4.rotation.z=0;
   // rvza = hrdloveze.position.z;


    cube1.position.x=-4
    cube1.rotation.z=-4.71
    cube1.scale.set(0.7,0.7,0.7);

    podvozok.position.x=4
    podvozok.rotation.z=4.71
    podvozok.scale.set(0.7,0.7,0.7);
    prWood1 = false;
    prWood2 = false;
    prWood3 = false;
    prWood4 = false;
    prWood1t2 = false;
    prWood2t2 = false;
    prWood3t2 = false;
    prWood4t2 = false;


     boxzasah1=false;
     boxzasah2 = false;
     boxzasah3 = false;
     boxzasah4 = false;

     boxzasah1odstranenie =false;
     boxzasah2odstranenie =false;
     boxzasah3odstranenie =false;
     boxzasah4odstranenie =false;

     poistka1 = false;
     poistka2 = false;
     poistka3 = false;
     poistka4 = false;

     boxzasah1t2=false;
     boxzasah2t2 = false;
     boxzasah3t2 = false;
     boxzasah4t2 = false;

     boxzasah1odstraneniet2 =false;
     boxzasah2odstraneniet2 =false;
     boxzasah3odstraneniet2 =false;
     boxzasah4odstraneniet2 =false;

     poistka1t2 = false;
     poistka2t2 = false;
     poistka3t2 = false;
     poistka4t2 = false;
     resett = false;

     municiapoistka = false;
     municiapoistkat2 = false;

     zmenaTP = false;


    municia = 15;
    municiat22 = 15;
    hP2 = 1000;
    hP = 1000;
    silaNaboja = 500;
    speed=0.50;
    rychlostPrebijania = 5000;



    obtiaznostPoistka = false;

    Obtiaznost = "Stredná"
    koniec="";


    scene.remove(cube1);
    scene.remove(podvozok);
    scene.remove(ironbox1);
    scene.remove(ironbox2);
    scene.remove(woodbox1);
    scene.remove(woodbox2);
    scene.add(cube1);
    scene.add(podvozok);
    scene.add(ironbox1);
    scene.add(ironbox2);
    scene.add(woodbox1);
    scene.add(woodbox2);

}
function odpocet1(){
    odpocet =false;
}

function zasobnik(){
    municia-=1;


}

function odpocet1t2(){
    odpocet22 =false;
}

function zasobnikt2(){
    municiat22-=1;
}
function zivot(){
    hP-=silaNaboja;
    hpPrepinac=false;
}
function zivot2(){
    hP2-=silaNaboja;
    hpPrepinact2=false;
}
function vypocetOdpaluT2(){
    if(hP>0){
        if(keyboard.pressed('N')&&municiapoistka2t2===false&&odpocet22===false){


            var xa = podvozok.position.x;
            var ya = podvozok.position.y;
            var za = podvozok.position.z;


            var rtxa = podvozok.rotation.x;
            var rtya = podvozok.rotation.y;
            var rtza = podvozok.rotation.z;

            var rvza = hrdloveze.rotation.z;
            odpinacT2 = false;
            nabojtf = true;
            odpocet22=true;
            municiapoistkat2=true;
            obtiaznostPoistka = true;
            hpPrepinac2t2=true;
            zmenaTP = true;
            scene.add(naboj);
            strelabaZv();
            naboj.position.set(xa,ya,za);
            naboj.rotation.set(rtxa,rtya,rvza+rtza+4.71);
            naboj.rotation.x = Math.PI / 2;

            setTimeout(odpocet1t2,rychlostPrebijania);
            if(municiapoistkat2===true){
                setTimeout(zasobnikt2,1000);
            }
            if(municiat22<=1){
                municiapoistka2t2 = true;
            }

        }
    }
}
function vypocetOdpaluT1(){

       if(hP2>0){
           if(keyboard.pressed('space')&&odpocet===false&&municiapoistka1===false){


               var x = cube1.position.x;
               var y = cube1.position.y;
               var z = cube1.position.z;


               var rtx = cube1.rotation.x;
               var rty = cube1.rotation.y;
               var rtz = cube1.rotation.z;

               var rvz = cube4.rotation.z;
               odpinacT1=false;

               odpal = true;
               scene.add(odpall);
               odpall.position.set(x,y,z);
               odpall.rotation.set(rtx,rty,rvz+rtz+4.71);
               odpall.rotation.x = Math.PI / 2;

               odpocet=true;
               municiapoistka=true;
               obtiaznostPoistka=true;
               zmenaTP =true;

               hpPrepinac2=true;
               strelabaZv();
               //trefaaa();

               setTimeout(odpocet1,rychlostPrebijania);
               if(municiapoistka===true){
                   setTimeout(zasobnik,1000);
               }
               if(municia<=1){
                   municiapoistka1 = true;
               }
           }
       }



}
function update(){
    var delta = clock.getDelta();

    var boost = 2;



    var moveDistanceBoost = boost * delta;
    var moveDistance = speed * delta;
    var rotateAngle = Math.PI / 2 * delta;
    var rotation_matrix = new THREE.Matrix4().identity();


   vypocetOdpaluT1();
   vypocetOdpaluT2();

////////////////////////////////////////////////////////  kontakt t1 stena woodbox
   kontaktStena1(cube1,stena1);
   kontaktStena2(cube1,stena2);
   kontaktStena3(cube1,stena3);
   kontaktStena4(cube1,stena4);

    if(odpocet===true){
        stavodpocet = " Prebíjam"

    }
    if (odpocet===false&&municia !== 0){
        stavodpocet = " Nabité "

    }else if(municia === 0){
        stavodpocet = " Nie sú náboje "
    }

    if(odpocet22===true){
        stavodpocett2 = " Prebíjam "

    }
    if (odpocet22===false&&municiat22 !== 0){
        stavodpocett2 = " Nabité "

    }else if(municiat22 === 0){
        stavodpocett2 = "Nie sú náboje"
    }

    let id = document.getElementById("count");
    id.innerText = ammo + municia;
    let id2 = document.getElementById("count1");
    id2.innerText = stavodpocet+ " Život " +hP2;
    let id3 = document.getElementById("count4");
    id3.innerText = "Hráč 2 munícia: "+ municiat22+stavodpocett2;
    let id5 = document.getElementById("count5");
    id5.innerText = "Život " + hP;
    let id6 = document.getElementById("count7");
    id6.innerText = Obtiaznost;
    let id7 = document.getElementById("info");
    id7.innerText = koniec;

    let id8 = document.getElementById("help1");
    id8.innerText = help1T;
    let id9 = document.getElementById("help2");
    id9.innerText = help2T;
    let id10 = document.getElementById("help3");
    id10.innerText = help3T;
    let id11 = document.getElementById("help4");
    id11.innerText = help4T;
    let id12 = document.getElementById("help5");
    id12.innerText = help5T;
    let id13 = document.getElementById("help6");
    id13.innerText = help6T;
    let id14 = document.getElementById("help7");
    id14.innerText = help7T;
    let id15 = document.getElementById("help8");
    id15.innerText = help8T;
    let id16 = document.getElementById("help9");
    id16.innerText = help9T;


   if(prWood1===false){
       kontaktWoodBox1(cube1,ironbox1);
   }
    if(prWood2===false){
        kontaktWoodBox2(cube1,ironbox2);
    }
    if(prWood3===false){
        kontaktWoodBox3(cube1,woodbox1);
    }
    if(prWood4===false){
        kontaktWoodBox4(cube1,woodbox2);
    }
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////  kontakt t1 stena woodbox
    kontaktStena1t2(podvozok,stena1);
    kontaktStena2t2(podvozok,stena2);
    kontaktStena3t2(podvozok,stena3);
    kontaktStena4t2(podvozok,stena4);

    if(prWood1t2===false){
        kontaktWoodBox1t2(podvozok,ironbox1);
    }
    if(prWood2t2===false){
        kontaktWoodBox2t2(podvozok,ironbox2);
    }
    if(prWood3t2===false){
        kontaktWoodBox3t2(podvozok,woodbox1);
    }
    if(prWood4t2===false){
        kontaktWoodBox4t2(podvozok,woodbox2);
    }
////////////////////////////////////////////////////////

    //////////////////////////////////////////// zasah boxov 1 2 3 4 tank 1
   if(boxzasah1odstranenie===false&&poistka1===false){
       zasahBox(odpall,ironbox1);
   }
    if(boxzasah1 === true){
        scene.remove(odpall);
        scene.remove(ironbox1);
        boxzasah1=false;
    }
    if(boxzasah2odstranenie===false&&poistka2===false){
        zasahBox2(odpall,ironbox2);
    }
    if(boxzasah2 === true){
        scene.remove(odpall);
        scene.remove(ironbox2);
        boxzasah2=false;
    }
    if(hP<0){
        hP=0;
    }
    if(hP2<0){
        hP2 = 0;
    }

    if(boxzasah3odstranenie===false&&poistka3===false){
        zasahBox3(odpall,woodbox1);
    }
    if(boxzasah3 === true){
        scene.remove(odpall);
        scene.remove(woodbox1);
        boxzasah3=false;
    }
    if(boxzasah4odstranenie===false&&poistka4===false){
        zasahBox4(odpall,woodbox2);
    }
    if(boxzasah4 === true){
        scene.remove(odpall);
        scene.remove(woodbox2);
        boxzasah4=false;
    }

 /////////////////////////////////////////////

//////////////////////////////////////////////////set tank
   if(zmenaTP === false){
       if(tankN===1){
           is77();
           tankN+=1;
       }
       if(tankN===3){
           tiger();
           tankN+=1;
       }
       if(tankN===5){
           tPovodny();
           tankN+=1;
       }
       if(tankN>6){
           tankN = 1;
       }
       if(tankN2===1){
           is772();
           tankN2+=1;
       }
       if(tankN2===3){
           tiger2();
           tankN2+=1;
       }
       if(tankN2===5){
           tPovodny2();
           tankN2+=1;
       }
       if(tankN2>6){
           tankN2 = 1;
       }
       if(mapaN === 1){
           mapa2();
           mapaN +=1;
       }
       if(mapaN === 3){
           mapaPovodna();
           mapaN +=1;
       }
       if(mapaN===4){
           mapaN =0;
       }
   }

/////////////////////////////////////////////////

    ///////////////////////////////////////////// zasah boxov 1 2 3 4 tank 2
    if(boxzasah1odstraneniet2===false&&poistka1t2===false){
        zasahBoxt2(naboj,ironbox1);
    }
    if(boxzasah1t2 === true){
        scene.remove(naboj);
        scene.remove(ironbox1);
        boxzasah1t2=false;
    }
    if(boxzasah2odstraneniet2===false&&poistka2t2===false){
        zasahBox2t2(naboj,ironbox2);
    }
    if(boxzasah2t2 === true){
        scene.remove(naboj);
        scene.remove(ironbox2);
        boxzasah2t2=false;
    }


    if(boxzasah3odstraneniet2===false&&poistka3t2===false){
        zasahBox3t2(naboj,woodbox1);
    }
    if(boxzasah3t2 === true){
        scene.remove(naboj);
        scene.remove(woodbox1);
        boxzasah3t2=false;
    }
    if(boxzasah4odstraneniet2===false&&poistka4t2===false){
        zasahBox4t2(naboj,woodbox2);
    }
    if(boxzasah4t2 === true){
        scene.remove(naboj);
        scene.remove(woodbox2);
        boxzasah4t2=false;
    }
/////////////////////////////////////////////

   if(vpred1 ===false){
       kontakST1W(cube1,testooo);
   }

   if(prepinacT1 ===false){
        kontakST1W(podvozok,testooo);
   }



    if(odpinacT1 === false&&hP>0){

        detectionC(odpall,podvozok);

    }

    if(print===true&&hP <=0){
        scene.remove(podvozok);
        koniec="Hráč 1 vyhral stlač B a hraj znova";
        resett=true;
        print=false;

    }
    if(print1===true){
        scene.remove(odpall);
        print1=false;
    }
    if(help1 > 1){
        help1=0;
        help1T="";
        help2T="";
        help3T="";
        help4T="";
        help5T="";
        help6T="";
        help7T="";
        help8T="";
    }
    if(help1 ===1){
        help1T="Hráč 1 ovládanie tanku - WASD";
        help2T="Hráč 1 ovládanie veže - QE";
        help3T="Hráč 1 strelaba - SPACE";
        help4T="Hráč 2 ovládanie tanku - IKJL";
        help5T="Hráč 2 ovládanie veže - UO";
        help6T="Hráč 2 strelaba - N";
        help7T="Obtiažnosť - RTY odstránenie boxov - V";
        help8T="Zmena tanku hráč 1 - X hráč 2 - M";
    }





    if(odpinacT2 === false&&hP2>0){
        detectionT2(naboj,cube1);
    }
    if(zasahTanku1===true&&hP2<=0){

            scene.remove(cube1);
            koniec="Hráč2 vyhral stlač B a hraj znova";
            resett = true;
            zasahTanku1=false;

    }
    if(zasahTanku11===true){
        scene.remove(naboj);
        zasahTanku11=false;
    }



    if(odpal === true){
        odpall.translateX(0.055);
    }
    if(nabojtf === true){
        naboj.translateX(0.055);
    }

    if(hpPrepinac === true&&hpPrepinac2===true){
        setTimeout(zivot,300);
        hpPrepinac2=false
    }
    if(hpPrepinact2 ===true&&hpPrepinac2t2===true){
        setTimeout(zivot2,300);
        hpPrepinac2t2=false
    }

   // if(prepinacT1 === false){
        testzasahuT1(odpall,testooo)
   // }
   // if(prepinacT2 === false){
        testzasahuT2(naboj,testooo)
   // }


    if(zasahtestOT2 === true){
        scene.remove(naboj);
        trefaaa();

       // scene.remove(testooo);
        zasahtestOT2 = false;
    }
    if(zasahtestOT1 === true){
        scene.remove(odpall);
        trefaaa();
       // scene.remove(testooo);
        zasahtestOT1 = false;
        //vpred1 = true;
    }


        if ( keyboard.pressed("W") ){

            if(vzad === false&&vpred===false) {
                cube1.translateY(-moveDistance);
               // vpred = false;
            }
            if(vzad ===false&&vpred===true){
                cube1.translateY(moveDistance);
               // vpred =false;
                vzad = true;
            }
            if(vzad===true&&vpred===true){
                vzad= false;
                vpred=false;
            }
            if(prepinacWood1===true){
                cube1.translateY(moveDistance);
                prepinacWood1=false;
            }
            if(prepinacWood2===true){
                cube1.translateY(moveDistance);
                prepinacWood2=false;
            }
            if(prepinacWood3===true){
                cube1.translateY(moveDistance);
                prepinacWood3=false;
            }
            if(prepinacWood4===true){
                cube1.translateY(moveDistance);
                prepinacWood4=false;
            }
            if(prepinacStena1===true){
                cube1.translateY(moveDistance);
                prepinacStena1=false;
            }
            if(prepinacStena3===true){
                cube1.translateY(moveDistance);
                prepinacStena3=false;
            }
            if(prepinacStena4===true){
                cube1.translateY(moveDistance);
                prepinacStena4=false;
            }



        }

    if(keyboard.pressed("F")&& keyboard.pressed("W"))
        cube1.translateY( -moveDistanceBoost );

    if ( keyboard.pressed("S") ) {

        if(vpred===false ){
            cube1.translateY(moveDistance);
        }
        if(vpred===true){
            cube1.translateY(-moveDistance);
        }
        if(prepinacStena2===true){
            cube1.translateY(-moveDistance);
            prepinacStena2=false;
        }

    }
    if ( keyboard.pressed("Q") ){
        cube4.rotateOnAxis( new THREE.Vector3(0,0,1),-rotateAngle);

    }

    //    cube3.translateX( -moveDistance );
    if ( keyboard.pressed("E") ){
        cube4.rotateOnAxis( new THREE.Vector3(0,0,1),rotateAngle);

    }

      //  cube3.translateX( moveDistance );
    // if ( keyboard.pressed("up") )
    //     cube1.position.z -= moveDistance;
    // if ( keyboard.pressed("down") )
    //     cube1.position.z += moveDistance;
    // if ( keyboard.pressed("left") )
    //     cube1.position.x -= moveDistance;
    // if ( keyboard.pressed("right") )
    //     cube1.position.x += moveDistance;
    if ( keyboard.pressed("A") ){
        cube1.rotateOnAxis( new THREE.Vector3(0,0,1),-rotateAngle);

    }

    if ( keyboard.pressed("D") ){
        cube1.rotateOnAxis( new THREE.Vector3(0,0,1),rotateAngle);

    }

        if ( keyboard.pressed("I") ){
            if(kontaktStenaT1W === false){
                podvozok.translateY( -moveDistance );
                pohonVzad = false;
            }
            if(vpred === true){
                podvozok.translateY(moveDistance);
                vpred =false
            }
            if(prepinacStena2t2===true){
                podvozok.translateY(moveDistance);
                prepinacStena2t2=false;
            }
            if(prepinacStena3t2===true){
                podvozok.translateY(moveDistance);
                prepinacStena3t2=false;
            }
            if(prepinacStena4t2===true){
                podvozok.translateY(moveDistance);
                prepinacStena4t2=false;
            }
            if(prepinacWood1t2===true){
                podvozok.translateY(moveDistance);
                prepinacWood1t2=false;
            }
            if(prepinacWood2t2===true){
                podvozok.translateY(moveDistance);
                prepinacWood2t2=false;
            }
            if(prepinacWood3t2===true){
                podvozok.translateY(moveDistance);
                prepinacWood3t2=false;
            }
            if(prepinacWood4t2===true){
                podvozok.translateY(moveDistance);
                prepinacWood4t2=false;
            }
        }



        if ( keyboard.pressed("K") ) {
            if (pohonVzad === false) {
                podvozok.translateY(moveDistance);
                kontaktStenaT1W = false;
            }
            if(prepinacStena1t2===true){
                podvozok.translateY(-moveDistance);
                prepinacStena1t2=false;
            }
        }



    if ( keyboard.pressed("J") )
        podvozok.rotateOnAxis( new THREE.Vector3(0,0,1),-rotateAngle);
        kontaktStenaT1W=false;
    if ( keyboard.pressed("L") )
        podvozok.rotateOnAxis( new THREE.Vector3(0,0,1),rotateAngle);
        kontaktStenaT1W=false;
    if ( keyboard.pressed("U") )
        hrdloveze.rotateOnAxis( new THREE.Vector3(0,0,1),-rotateAngle);
    //    cube3.translateX( -moveDistance );
    if ( keyboard.pressed("O") )
        hrdloveze.rotateOnAxis( new THREE.Vector3(0,0,1),rotateAngle);
    if(obtiaznostPoistka===false){
        if ( keyboard.pressed("R") ){
            Obtiaznost="Ľahká"
            municia = 40;
            municiat22 = 40;
            hP2 = 1000;
            hP = 1000;
            silaNaboja = 200;
            speed=0.60;
            rychlostPrebijania = 2000;
        }
        if ( keyboard.pressed("T") ){
            Obtiaznost="Stredná"
            municia = 15;
            municiat22 = 15;
            hP2 = 1000;
            hP = 1000;
            silaNaboja = 500;
            speed=0.50;
            rychlostPrebijania = 5000;

        }
        if ( keyboard.pressed("Y") ){
            Obtiaznost="Tažká"
            municia = 10;
            municiat22 = 10;
            hP2 = 1000;
            hP = 1000;
            silaNaboja = 1000;
            speed=0.40;
            rychlostPrebijania = 8000;

        }
   }
    if(resett===true){
        if ( keyboard.pressed("B") ){
            reset();
        }
    }

   if(help1Poistka===false){
       if ( keyboard.pressed("H") ){
           help1 +=1;
           setTimeout(poistkaHelp,300);
           help1Poistka =true;

       }
   }
    if(tankP === false){
        if ( keyboard.pressed("M") ){
            tankN +=1;
            setTimeout(tankPo,300);
            tankP = true;
        }
    }
    if(tankP2 === false){
        if ( keyboard.pressed("X") ){
            tankN2 +=1;
            setTimeout(tankPo2,300);
            tankP2 = true;
        }
    }
    if(mapaP === false){
        if ( keyboard.pressed("V") ){
            mapaN +=1;
            setTimeout(mapaPo,300);
            mapaP = true;
        }
    }




    controls.update();
}

function addObjects(){

    var geometryPlane = new THREE.PlaneGeometry( 9.5, 4.5, 4, 4 );
    var cubeTextu = new THREE.ImageUtils.loadTexture( 'texture/iron2.jpg' );
    var materialPlane = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide } );
    plane = new THREE.Mesh( geometryPlane, materialPlane );
    plane.position.set(0, 0.46, 0);
    plane.rotation.x = Math.PI / 2;
    scene.add( plane );



    // var etryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    // var eTexture = new THREE.ImageUtils.loadTexture('texture/maskace.jpg')
    // var erialPlanee = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:eTexture} );
    // testobject= new THREE.Mesh( etryPlanee, erialPlanee );
    // testobject.position.set(0, 0.49, 0);
    // testobject.rotation.x = Math.PI / 2;
    // scene.add( testobject );

    // var geometryPlan = new THREE.PlaneGeometry( 0.51, 0.51, 4, 4 );
    // var cubeTextur = new THREE.ImageUtils.loadTexture( 'texture/box.jpg' );
    // var materialPlan = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide,map:cubeTextur } );
    // cube11 = new THREE.Mesh( geometryPlan, materialPlan );
    // cube11.position.set(2, 0.49, 0);
    // cube11.rotation.x = Math.PI / 2;
    // scene.add( cube11 );

    // var geometryCube = new THREE.BoxGeometry( 0, 0, 0 );
    // var cubeTexture = new THREE.ImageUtils.loadTexture( 'texture/box.jpg' );
    // var materialCube = new THREE.MeshBasicMaterial( {map: cubeTexture} );
    // cube1 = new THREE.Mesh( geometryCube, materialCube );
    // cube1.position.set(0,0.01, 4);
    // scene.add( cube11 );

    // var geometryWiredBox = new THREE.BoxGeometry( 1, 1, 1 );
    // var cubeTexture = new THREE.ImageUtils.loadTexture( 'texture/box.jpg' );
    // var materialWiredBox = new THREE.MeshBasicMaterial( {color: 0xEAF913, transparent: true, opacity: 0.5 } );
    // cube2 = new THREE.Mesh( geometryWiredBox, materialWiredBox );
    // cube2.position.set(1.5, 0, 0);
    // scene.add( cube2 );

    // var geometryWiredBox = new THREE.BoxGeometry( 1, 1, 1 );
    // var cubeTexture = new THREE.ImageUtils.loadTexture( 'texture/box.jpg' );
    // var materialWiredBox = new THREE.MeshBasicMaterial( {color: 'rgb(255,0,0)', wireframe: true, transparent: true} );
    // cube3 = new THREE.Mesh( geometryWiredBox, materialWiredBox );
    // cube3.position.set(-1.5, 0, 0);
    // scene.add( cube3 );

    // var geometrySphere = new THREE.SphereGeometry( 100, 100, 100 );
    // var cubeTexture = new THREE.ImageUtils.loadTexture( 'texture/sky.jpg' );
    // var materialSphere = new THREE.MeshBasicMaterial( {map: cubeTexture, transparent: true, side: THREE.DoubleSide} );
    // sphere = new THREE.Mesh( geometrySphere, materialSphere );
    // sphere.position.set(0, 0, 0);
    // scene.add( sphere );

}
function mapa1(){

    var geometryPlanee = new THREE.PlaneGeometry( 1.2, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/ironbox.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 'rgb(169,160,147)', side: THREE.DoubleSide, map:planeTexture} );
    testooo= new THREE.Mesh( geometryPlanee, materialPlanee );
    testooo.position.set(0, 0.49, 0);
    testooo.rotation.x = Math.PI / 2;
    scene.add( testooo );


    var wwBox = new THREE.PlaneGeometry( 0.7, 0.7, 4, 4 );
    var wwBoxTexture = new THREE.ImageUtils.loadTexture('texture/box.jpg')
    var wwBoxx = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:wwBoxTexture} );
    ironbox1= new THREE.Mesh( wwBox, wwBoxx );
    ironbox1.position.set(0, 0.49, 1);
    ironbox1.rotation.x = Math.PI / 2;
    scene.add( ironbox1 );

    var wwBox2 = new THREE.PlaneGeometry( 0.7, 0.7, 4, 4 );
    var wwBoxTexture2 = new THREE.ImageUtils.loadTexture('texture/box.jpg')
    var wwBoxx2 = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:wwBoxTexture2} );
    ironbox2= new THREE.Mesh( wwBox2, wwBoxx2 );
    ironbox2.position.set(0, 0.49, 1.75);
    ironbox2.rotation.x = Math.PI / 2;
    scene.add( ironbox2 );



    var wBox = new THREE.PlaneGeometry( 0.7, 0.7, 4, 4 );
    var wBoxTexture = new THREE.ImageUtils.loadTexture('texture/box.jpg')
    var wBoxx = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:wBoxTexture} );
    woodbox1= new THREE.Mesh( wBox, wBoxx );
    woodbox1.position.set(0, 0.49, -1);
    woodbox1.rotation.x = Math.PI / 2;
    scene.add( woodbox1 );

    var wBox2 = new THREE.PlaneGeometry( 0.7, 0.7, 4, 4 );
    var wBoxTexture2 = new THREE.ImageUtils.loadTexture('texture/box.jpg')
    var wBoxx2 = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:wBoxTexture2} );
    woodbox2= new THREE.Mesh( wBox2, wBoxx2 );
    woodbox2.position.set(0, 0.49, -1.75);
    woodbox2.rotation.x = Math.PI / 2;
    scene.add( woodbox2 );

    var geometryStena1 = new THREE.PlaneGeometry( 0.18, 4.859, 4, 4 );
    var stena2Texture = new THREE.ImageUtils.loadTexture( 'texture/stena4k2.jpg' );
    // var stena1Texture = new THREE.ImageUtils.loadTexture( 'texture/iron2.jpg' );
    var materialStena1 = new THREE.MeshBasicMaterial( {color: 'rgb(161,156,93)', side: THREE.DoubleSide,map:stena2Texture } );
    stena1 = new THREE.Mesh( geometryStena1, materialStena1 );
    stena1.position.set(4.8, 0.49, 0);
    stena1.rotation.x = Math.PI / 2;
    scene.add( stena1 );

    var geometryStena2 = new THREE.PlaneGeometry(0.18 , 4.859, 4, 4 );
    var materialStena2 = new THREE.MeshBasicMaterial( {color: 'rgb(161,156,93)', side: THREE.DoubleSide,map: stena2Texture } );
    stena2 = new THREE.Mesh( geometryStena2, materialStena2 );
    stena2.position.set(-4.8, 0.49, 0);
    stena2.rotation.x = Math.PI / 2;
    scene.add( stena2 );

    var geometryStena3 = new THREE.PlaneGeometry(9.42 , 0.18, 4, 4 );
    var stena3Texture = new THREE.ImageUtils.loadTexture( 'texture/stena4k.jpg' );
    var materialStena3 = new THREE.MeshBasicMaterial( {color: 'rgb(161,156,93)', side: THREE.DoubleSide,map: stena3Texture } );
    stena3 = new THREE.Mesh( geometryStena3, materialStena3 );
    stena3.position.set(0, 0.49, 2.34);
    stena3.rotation.x = Math.PI / 2;
    scene.add( stena3 );

    var geometryStena4 = new THREE.PlaneGeometry(9.42 , 0.18, 4, 4 );

    var materialStena4 = new THREE.MeshBasicMaterial( {color: 'rgb(161,156,93)', side: THREE.DoubleSide,map:stena3Texture } );
    stena4 = new THREE.Mesh( geometryStena4, materialStena4 );
    stena4.position.set(0, 0.49, -2.34);
    stena4.rotation.x = Math.PI / 2;
    scene.add( stena4 );

    var geometryPodlaha = new THREE.PlaneGeometry( 9.5, 4.6, 4, 4 );
    var podlahaTextu = new THREE.ImageUtils.loadTexture( 'texture/podlahap.jpg' );
    var materialPodlaha = new THREE.MeshBasicMaterial( {color: 'rgb(161,156,93)', side: THREE.DoubleSide,map:podlahaTextu } );
    podlaha = new THREE.Mesh( geometryPodlaha, materialPodlaha );
    podlaha.position.set(0, 0.479, 0);
    podlaha.rotation.x = Math.PI / 2;
    scene.add( podlaha );
}
function mapa2(){

    scene.remove(ironbox1);
    scene.remove(ironbox2);
    scene.remove(woodbox1);
    scene.remove(woodbox2);
    prWood1 = true;
    prWood2 = true;
    prWood3 = true;
    prWood4 = true;
    prWood1t2 = true;
    prWood2t2 = true;
    prWood3t2 = true;
    prWood4t2 = true;

    poistka1 = true;
    poistka2 = true;
    poistka3 = true;
    poistka4 = true;

    boxzasah1odstranenie =true;
    boxzasah2odstranenie =true;
    boxzasah3odstranenie =true;
    boxzasah4odstranenie =true;

    boxzasah1odstraneniet2 =true;
    boxzasah2odstraneniet2 =true;
    boxzasah3odstraneniet2 =true;
    boxzasah4odstraneniet2 =true;

    poistka1t2 = true;
    poistka2t2 = true;
    poistka3t2 = true;
    poistka4t2 = true;

}

function mapaPovodna(){

    scene.add(ironbox1);
    scene.add(ironbox2);
    scene.add(woodbox1);
    scene.add(woodbox2);
    prWood1 = false;
    prWood2 = false;
    prWood3 = false;
    prWood4 = false;
    prWood1t2 = false;
    prWood2t2 = false;
    prWood3t2 = false;
    prWood4t2 = false;

    poistka1 = false;
    poistka2 = false;
    poistka3 = false;
    poistka4 = false;

    boxzasah1odstranenie =false;
    boxzasah2odstranenie =false;
    boxzasah3odstranenie =false;
    boxzasah4odstranenie =false;

    boxzasah1odstraneniet2 =false;
    boxzasah2odstraneniet2 =false;
    boxzasah3odstraneniet2 =false;
    boxzasah4odstraneniet2 =false;

    poistka1t2 = false;
    poistka2t2 = false;
    poistka3t2 = false;
    poistka4t2 = false;

}
function is7(){
    var pokloptextura = new THREE.ImageUtils.loadTexture('texture/iron3.jpg')
    var geometryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/maskace.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:planeTexture} );
    podvozok= new THREE.Mesh( geometryPlanee, materialPlanee );
    podvozok.position.set(0.1, 0.49, 0);
    podvozok.rotation.x = Math.PI / 2;
    scene.add( podvozok );

    var geometryPlaneee = new THREE.PlaneGeometry( 0.06, 1.16,4 , 4 );
    var materialPlaneee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas1= new THREE.Mesh( geometryPlaneee, materialPlaneee );
    pas1.position.set(-0.4, 0, 0);
    scene.add( pas1 );

    var geometryPlaneeee = new THREE.PlaneGeometry( -0.06, 1.16,4 , 4 );
    var materialPlaneeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas2= new THREE.Mesh( geometryPlaneeee, materialPlaneeee );
    pas2.position.set(0.4, 0, 0);
    scene.add( pas2 );

    var geometryPlaneeeea = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeea = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka1= new THREE.Mesh( geometryPlaneeeea, materialPlaneeeea );
    mriezka1.position.set(0.2, 0.3, -0.001);
    scene.add( mriezka1 );

    var geometryPlaneeeeaa = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeeaa = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka2= new THREE.Mesh( geometryPlaneeeeaa, materialPlaneeeeaa );
    mriezka2.position.set(-0.2, 0.3, -0.001);
    scene.add( mriezka2 );

    var geometryPlaneeeeas = new THREE.PlaneGeometry( -0.12, 0.029,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeas = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    periskop= new THREE.Mesh( geometryPlaneeeeas, materialPlaneeeeas );
    periskop.position.set(-0.27, -0.55, -0.0001);
    scene.add( periskop );

    var geometryPlaneeeeaass = new THREE.PlaneGeometry( -0.02, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaass = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    gulomet= new THREE.Mesh( geometryPlaneeeeaass, materialPlaneeeeaass );
    gulomet.position.set(0.27, -0.55, 0);
    scene.add( gulomet );

    var geometryaas = new THREE.CircleGeometry( 0.09, 50);
    var materialaas = new THREE.MeshBasicMaterial( { color: 'rgb(30,29,29)', side: THREE.DoubleSide } );
    var gulometgula = new THREE.Mesh( geometryaas, materialaas );
    gulometgula.position.set(0.27, -0.55, 0);
    scene.add( gulometgula );

    var geometry = new THREE.CircleGeometry( 0.3,50);
    var planeT = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material = new THREE.MeshBasicMaterial( { color: 'rgb(22,120,248)', side: THREE.DoubleSide, map:planeT } );
    var veza = new THREE.Mesh( geometry, material );
    veza.position.set(0, 0, -0.002);
    scene.add( veza );

    var geometryPlaneeeee = new THREE.PlaneGeometry( 0.2,0.1,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    hrdloveze= new THREE.Mesh( geometryPlaneeeee, materialPlaneeeee );
    hrdloveze.position.set(0, 0, 0);
    scene.add( hrdloveze );

    var geometryPlaneeeeee = new THREE.PlaneGeometry( 0.13,1,4 , 4 );
    var planeTeturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(229,234,229)', side: THREE.DoubleSide, map:planeTeturee} );
    kanon= new THREE.Mesh( geometryPlaneeeeee, materialPlaneeeeee );
    kanon.position.set(0, -0.6, -0.001);
    scene.add( kanon );

    var geometryPlaneeeeeee = new THREE.PlaneGeometry( 0.15,0.15,4 , 4 );
    var planeTturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(101,74,48)', side: THREE.DoubleSide,map:planeTturee} );
    koncovkakanona= new THREE.Mesh( geometryPlaneeeeeee, materialPlaneeeeeee );
    koncovkakanona.position.set(0, -0.98, -0.001);
    scene.add( koncovkakanona );

    var geometryodpall = new THREE.PlaneGeometry( 0.07,0.07,4 , 4 );
    var materialodpall = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
    naboj= new THREE.Mesh( geometryodpall, materialodpall );

    var geometrya = new THREE.CircleGeometry( 0.07, 50);
    var materiala = new THREE.MeshBasicMaterial( { color: 'rgb(248,245,245)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop1 = new THREE.Mesh( geometrya, materiala );
    poklop1.position.set(0.1, 0, -0.003);

    scene.add( poklop1 );

    var geometryaa = new THREE.CircleGeometry( 0.09, 50);
    var materialaa = new THREE.MeshBasicMaterial( { color: 'rgb(241,246,241)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop2 = new THREE.Mesh( geometryaa, materialaa );
    poklop2.position.set(-0.15, 0, -0.003);

    scene.add( poklop2 );

    hrdloveze.add(veza,kanon,koncovkakanona,poklop1,poklop2)
    podvozok.add(pas1,pas2,mriezka1,mriezka2,periskop,gulomet,gulometgula,hrdloveze);
}
function t34(){
    var pokloptextura = new THREE.ImageUtils.loadTexture('texture/iron3.jpg')
    var geometryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/maskace.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:planeTexture} );
    podvozok= new THREE.Mesh( geometryPlanee, materialPlanee );
    podvozok.position.set(0.1, 0.49, 0);
    podvozok.rotation.x = Math.PI / 2;
    scene.add( podvozok );

    var geometryPlaneee = new THREE.PlaneGeometry( 0.06, 1.16,4 , 4 );
    var materialPlaneee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas1= new THREE.Mesh( geometryPlaneee, materialPlaneee );
    pas1.position.set(-0.4, 0, 0);
    scene.add( pas1 );

    var geometryPlaneeee = new THREE.PlaneGeometry( -0.06, 1.16,4 , 4 );
    var materialPlaneeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas2= new THREE.Mesh( geometryPlaneeee, materialPlaneeee );
    pas2.position.set(0.4, 0, 0);
    scene.add( pas2 );

    var geometryPlaneeeea = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeea = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka1= new THREE.Mesh( geometryPlaneeeea, materialPlaneeeea );
    mriezka1.position.set(0.2, 0.3, -0.001);
    scene.add( mriezka1 );

    var geometryPlaneeeeaa = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeeaa = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka2= new THREE.Mesh( geometryPlaneeeeaa, materialPlaneeeeaa );
    mriezka2.position.set(-0.2, 0.3, -0.001);
    scene.add( mriezka2 );

    var geometryPlaneeeeas = new THREE.PlaneGeometry( -0.12, 0.029,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeas = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    periskop= new THREE.Mesh( geometryPlaneeeeas, materialPlaneeeeas );
    periskop.position.set(-0.27, -0.55, -0.0001);
    scene.add( periskop );

    var geometryPlaneeeeaass = new THREE.PlaneGeometry( -0.02, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaass = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    gulomet= new THREE.Mesh( geometryPlaneeeeaass, materialPlaneeeeaass );
    gulomet.position.set(0.27, -0.55, 0);
    scene.add( gulomet );

    var geometryaas = new THREE.CircleGeometry( 0.09, 50);
    var materialaas = new THREE.MeshBasicMaterial( { color: 'rgb(30,29,29)', side: THREE.DoubleSide } );
    var gulometgula = new THREE.Mesh( geometryaas, materialaas );
    gulometgula.position.set(0.27, -0.55, 0);
    scene.add( gulometgula );

    var geometry = new THREE.CircleGeometry( 0.3,50);
    var planeT = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material = new THREE.MeshBasicMaterial( { color: 'rgb(22,120,248)', side: THREE.DoubleSide, map:planeT } );
    var veza = new THREE.Mesh( geometry, material );
    veza.position.set(0, 0, -0.002);
    scene.add( veza );

    var geometryPlaneeeee = new THREE.PlaneGeometry( 0.2,0.1,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    hrdloveze= new THREE.Mesh( geometryPlaneeeee, materialPlaneeeee );
    hrdloveze.position.set(0, 0, 0);
    scene.add( hrdloveze );

    var geometryPlaneeeeee = new THREE.PlaneGeometry( 0.13,1,4 , 4 );
    var planeTeturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(229,234,229)', side: THREE.DoubleSide, map:planeTeturee} );
    kanon= new THREE.Mesh( geometryPlaneeeeee, materialPlaneeeeee );
    kanon.position.set(0, -0.6, -0.001);
    scene.add( kanon );

    var geometryPlaneeeeeee = new THREE.PlaneGeometry( 0.15,0.15,4 , 4 );
    var planeTturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(101,74,48)', side: THREE.DoubleSide,map:planeTturee} );
    koncovkakanona= new THREE.Mesh( geometryPlaneeeeeee, materialPlaneeeeeee );
    koncovkakanona.position.set(0, -0.98, -0.001);
    scene.add( koncovkakanona );

    var geometryodpall = new THREE.PlaneGeometry( 0.07,0.07,4 , 4 );
    var materialodpall = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
    naboj= new THREE.Mesh( geometryodpall, materialodpall );

    var geometrya = new THREE.CircleGeometry( 0.07, 50);
    var materiala = new THREE.MeshBasicMaterial( { color: 'rgb(248,245,245)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop1 = new THREE.Mesh( geometrya, materiala );
    poklop1.position.set(0.1, 0, -0.003);

    scene.add( poklop1 );

    var geometryaa = new THREE.CircleGeometry( 0.09, 50);
    var materialaa = new THREE.MeshBasicMaterial( { color: 'rgb(241,246,241)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop2 = new THREE.Mesh( geometryaa, materialaa );
    poklop2.position.set(-0.15, 0, -0.003);

    scene.add( poklop2 );

    hrdloveze.add(veza,kanon,koncovkakanona,poklop1,poklop2)
    podvozok.add(pas1,pas2,mriezka1,mriezka2,periskop,gulomet,gulometgula,hrdloveze);
}
function tankOp(){
    var pokloptextura = new THREE.ImageUtils.loadTexture('texture/iron3.jpg')

    var geometryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/maskace.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:planeTexture} );
    cube1= new THREE.Mesh( geometryPlanee, materialPlanee );
    cube1.position.set(0, 0.49, 0);
    cube1.rotation.x = Math.PI / 2;
    scene.add( cube1 );

    var geometryPlaneee = new THREE.PlaneGeometry( 0.06, 1.16,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    cube2= new THREE.Mesh( geometryPlaneee, materialPlaneee );
    cube2.position.set(-0.4, 0, 0);
    //cube2.rotation.x = Math.PI / 2;
    scene.add( cube2 );


    var geometryPlaneeee = new THREE.PlaneGeometry( -0.06, 1.16,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    cube3= new THREE.Mesh( geometryPlaneeee, materialPlaneeee );
    cube3.position.set(0.4, 0, 0);
    //cube2.rotation.x = Math.PI / 2;
    scene.add( cube3 );

    var geometryPlaneeeea = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeea = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    cube7= new THREE.Mesh( geometryPlaneeeea, materialPlaneeeea );
    cube7.position.set(0.2, 0.3, -0.001);
    //cube2.rotation.x = Math.PI / 2;
    scene.add( cube7 );

    var geometryPlaneeeeaa = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaa = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    cube8= new THREE.Mesh( geometryPlaneeeeaa, materialPlaneeeeaa );
    cube8.position.set(-0.2, 0.3, -0.001);
    //cube2.rotation.x = Math.PI / 2;
    scene.add( cube8 );





    var geometryPlaneeeeas = new THREE.PlaneGeometry( -0.12, 0.029,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeas = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    cube9= new THREE.Mesh( geometryPlaneeeeas, materialPlaneeeeas );
    cube9.position.set(-0.27, -0.55, -0.0001);
    //cube2.rotation.x = Math.PI / 2;
    scene.add( cube9 );

    var geometryPlaneeeeaass = new THREE.PlaneGeometry( -0.02, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaass = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    cube10= new THREE.Mesh( geometryPlaneeeeaass, materialPlaneeeeaass );
    cube10.position.set(0.27, -0.55, 0);
    //cube2.rotation.x = Math.PI / 2;
    scene.add( cube10 );

    var geometryaas = new THREE.CircleGeometry( 0.09, 50);
    var materialaas = new THREE.MeshBasicMaterial( { color: 'rgb(30,29,29)', side: THREE.DoubleSide } );
    var circle4 = new THREE.Mesh( geometryaas, materialaas );
    circle4.position.set(0.27, -0.55, 0);
    // circle.rotation.x = Math.PI / 2;
    scene.add( circle4 );




    var geometry = new THREE.CircleGeometry( 0.3,50);
    var planeT = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material = new THREE.MeshBasicMaterial( { color: 'rgb(248,115,22)', side: THREE.DoubleSide, map:planeT } );
    var circle = new THREE.Mesh( geometry, material );
    circle.position.set(0, 0, -0.002);
    // circle.rotation.x = Math.PI / 2;
    scene.add( circle );

    var geometryPlaneeeee = new THREE.PlaneGeometry( 0.2,0.1,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    cube4= new THREE.Mesh( geometryPlaneeeee, materialPlaneeeee );
    cube4.position.set(0, 0, 0);
    //cube2.rotation.x = Math.PI / 2;
    scene.add( cube4 );


    var geometryPlaneeeeee = new THREE.PlaneGeometry( 0.13,1,4 , 4 );
    var planeTeturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(229,234,229)', side: THREE.DoubleSide, map:planeTeturee} );
    cube5= new THREE.Mesh( geometryPlaneeeeee, materialPlaneeeeee );
    cube5.position.set(0, -0.6, -0.001);
    //cube2.rotation.x = Math.PI / 2;
    scene.add( cube5 );

    var geometryPlaneeeeeee = new THREE.PlaneGeometry( 0.15,0.15,4 , 4 );
    var planeTturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(101,74,48)', side: THREE.DoubleSide,map:planeTturee} );
    cube6= new THREE.Mesh( geometryPlaneeeeeee, materialPlaneeeeeee );
    cube6.position.set(0, -0.98, -0.001);
    //cube2.rotation.x = Math.PI / 2;
    scene.add( cube6 );

   //  var geogulka = new THREE.CircleGeometry( 0.04, 10);
   //  var materigulka = new THREE.MeshBasicMaterial( { color: 'rgb(0,0,0)', side: THREE.DoubleSide,map:planeTturee } );
   //  var strelaa = new THREE.Mesh( geogulka, materigulka );
   //  strelaa.position.set(0, -0.03, 0.0001);
   //  // circle.rotation.x = Math.PI / 2;
   // // scene.add( strela );
   //
   //  var geometrytelo = new THREE.PlaneGeometry( 0.05,0.05,4 , 4 );
   //  var planetelo = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
   //  var materialtelo = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
   //  strela= new THREE.Mesh( geometrytelo, materialtelo );
   //  strela.position.set(0, 0, 0.0001);


    var geometryodpall = new THREE.PlaneGeometry( 0.07,0.07,4 , 4 );
    //var planetelo = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialodpall = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
    odpall= new THREE.Mesh( geometryodpall, materialodpall );
    //odpall.position.set(0, 0.5, 0.0001);
    //strela.rotation.x = Math.PI / 2;
    //scene.add( telo );


    var geometrya = new THREE.CircleGeometry( 0.07, 50);
    var materiala = new THREE.MeshBasicMaterial( { color: 'rgb(248,245,245)', side: THREE.DoubleSide,map:planeTturee } );
    var circle2 = new THREE.Mesh( geometrya, materiala );
    circle2.position.set(0.1, 0, -0.003);
    // circle.rotation.x = Math.PI / 2;
    scene.add( circle2 );


    var geometryaa = new THREE.CircleGeometry( 0.09, 50);
    var materialaa = new THREE.MeshBasicMaterial( { color: 'rgb(241,246,241)', side: THREE.DoubleSide,map:planeTturee } );
    var circle3 = new THREE.Mesh( geometryaa, materialaa );
    circle3.position.set(-0.15, 0, -0.003);
    // circle.rotation.x = Math.PI / 2;
    scene.add( circle3 );



    cube4.add(circle,cube5,cube6,circle2,circle3)
    cube1.add(cube2,cube3,cube4,cube7,cube8,cube9,cube10,circle4);


}
function detectionC(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        print = true;
        print1=true;
        trefa = true;
        hpPrepinac=true;
        trefaaa();



    }


}

function detectionT2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
         t2Trefa = true;
         zasahTanku1 = true;
         zasahTanku11 = true;
         hpPrepinact2=true;
         trefaaa();

    }


}


function testzasahuT1(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        odpinacT1 = true;
        zasahtestOT1=true;
        prepinacT1=true;
    }


}



function testzasahuT2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        odpinacT2 = true;
        zasahtestOT2=true;
        prepinacT2=true;

    }


}

function kontakST1W(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        vpred = true;
    }
}

//////////////////////////////////////////////////////// t1
function setTimeBox1(){
    boxzasah1odstranenie=true;
    boxzasah2odstranenie=false;
    boxzasah3odstranenie=false;
    boxzasah4odstranenie=false;
    poistka1=true;
    poistka1t2=true;
    prWood1=true;
    prWood1t2=true;
}
function setTimeBox2(){
    boxzasah1odstranenie=false;
    boxzasah2odstranenie=true;
    boxzasah3odstranenie=false;
    boxzasah4odstranenie=false;
    poistka2=true;
    poistka2t2=true;
    prWood2=true;
    prWood2t2=true;
}
function setTimeBox3(){
    boxzasah1odstranenie=false;
    boxzasah2odstranenie=false;
    boxzasah3odstranenie=true;
    boxzasah4odstranenie=false;
    poistka3=true;
    poistka3t2=true;
    prWood3=true;
    prWood3t2=true;
}
function setTimeBox4(){
    boxzasah1odstranenie=false;
    boxzasah2odstranenie=false;
    boxzasah3odstranenie=false;
    boxzasah4odstranenie=true;
    poistka4=true;
    poistka4t2=true;
    prWood4=true;
    prWood4t2=true;
}
function zasahBox(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        boxzasah1 =true;
        boxzasah1odstranenie=true;
        boxzasah2odstranenie=true;
        boxzasah3odstranenie=true;
        boxzasah4odstranenie=true;
        setTimeout(setTimeBox1,1500);
        odpinacT1 = true;

    }

}
function zasahBox2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        boxzasah2 =true;
        boxzasah1odstranenie=true;
        boxzasah2odstranenie=true;
        boxzasah3odstranenie=true;
        boxzasah4odstranenie=true;
        setTimeout(setTimeBox2,1500);
        odpinacT1 = true;

    }




}

function zasahBox3(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        boxzasah3 =true;
        boxzasah1odstranenie=true;
        boxzasah2odstranenie=true;
        boxzasah3odstranenie=true;
        boxzasah4odstranenie=true;
        setTimeout(setTimeBox3,1500);
        odpinacT1 = true;

    }

}
function zasahBox4(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        boxzasah4 =true;
        boxzasah1odstranenie=true;
        boxzasah2odstranenie=true;
        boxzasah3odstranenie=true;
        boxzasah4odstranenie=true;
        setTimeout(setTimeBox4,1500);

        odpinacT1 = true;

    }




}

///////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////t2
function setTimeBox1t2(){
    boxzasah1odstraneniet2=true;
    boxzasah2odstraneniet2=false;
    boxzasah3odstraneniet2=false;
    boxzasah4odstraneniet2=false;
    poistka1t2=true;
    poistka1=true;
    prWood1t2=true;
    prWood1=true;
}
function setTimeBox2t2(){
    boxzasah1odstraneniet2=false;
    boxzasah2odstraneniet2=true;
    boxzasah3odstraneniet2=false;
    boxzasah4odstraneniet2=false;
    poistka2t2=true;
    poistka2=true;
    prWood2t2=true;
    prWood2=true;
}
function setTimeBox3t2(){
    boxzasah1odstraneniet2=false;
    boxzasah2odstraneniet2=false;
    boxzasah3odstraneniet2=true;
    boxzasah4odstraneniet2=false;
    poistka3t2=true;
    poistka3=true;
    prWood3t2=true;
    prWood3=true;
}
function setTimeBox4t2(){
    boxzasah1odstraneniet2=false;
    boxzasah2odstraneniet2=false;
    boxzasah3odstraneniet2=false;
    boxzasah4odstraneniet2=true;
    poistka4t2=true;
    poistka4=true;
    prWood4t2=true;
    prWood4=true;
}
function zasahBoxt2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        boxzasah1t2 =true;
        boxzasah1odstraneniet2=true;
        boxzasah2odstraneniet2=true;
        boxzasah3odstraneniet2=true;
        boxzasah4odstraneniet2=true;
        setTimeout(setTimeBox1t2,1500);
        odpinacT2 = true;

    }

}
function zasahBox2t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);

    if(bounding1.intersectsBox(bounding2)){
        boxzasah2t2 =true;
        boxzasah1odstraneniet2=true;
        boxzasah2odstraneniet2=true;
        boxzasah3odstraneniet2=true;
        boxzasah4odstraneniet2=true;
        setTimeout(setTimeBox2t2,1500);
        odpinacT2 = true;

    }




}

function zasahBox3t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        boxzasah3t2 =true;
        boxzasah1odstraneniet2=true;
        boxzasah2odstraneniet2=true;
        boxzasah3odstraneniet2=true;
        boxzasah4odstraneniet2=true;
        setTimeout(setTimeBox3t2,1500);
        odpinacT2 = true;

    }

}
function zasahBox4t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);

    if(bounding1.intersectsBox(bounding2)){
        boxzasah4t2 =true;
        boxzasah1odstraneniet2=true;
        boxzasah2odstraneniet2=true;
        boxzasah3odstraneniet2=true;
        boxzasah4odstraneniet2=true;
        setTimeout(setTimeBox4t2,1500);

        odpinacT2 = true;

    }




}

//////////////////////////////////////////////////////////kontakt t1 stena a woodbox


function kontaktWoodBox1(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacWood1 = true;
    }
}
function kontaktWoodBox2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacWood2 = true;
    }
}
function kontaktWoodBox3(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacWood3 = true;
    }
}

function kontaktWoodBox4(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacWood4 = true;
    }
}
function kontaktStena1(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacStena1=true;
    }
}
function kontaktStena2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacStena2=true;
    }
}
function kontaktStena3(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacStena3=true;
    }
}
function kontaktStena4(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacStena4=true;
    }
}
//////////////////////////////////////////////////
////////////////////////////////////////////////////kontakt stena woodbox t2
function kontaktWoodBox1t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacWood1t2 = true;
    }
}
function kontaktWoodBox2t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacWood2t2 = true;
    }
}
function kontaktWoodBox3t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacWood3t2 = true;
    }
}

function kontaktWoodBox4t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacWood4t2 = true;
    }
}
function kontaktStena1t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacStena1t2=true;
    }
}
function kontaktStena2t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacStena2t2=true;
    }
}
function kontaktStena3t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacStena3t2=true;
    }
}
function kontaktStena4t2(object1,object2){
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    var bounding1 = object1.geometry.boundingBox.clone();
    var bounding2 = object2.geometry.boundingBox.clone();
    bounding1.applyMatrix4(object1.matrixWorld);
    bounding2.applyMatrix4(object2.matrixWorld);
    if(bounding1.intersectsBox(bounding2)){
        prepinacStena4t2=true;
    }
}
/////////////////////////////////////////////////////
///////////////////////////////////////////////////// new tank
function is77(){
    scene.remove(podvozok);

    var pokloptextura = new THREE.ImageUtils.loadTexture('texture/iron3.jpg')
    var geometryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/bielemm.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:planeTexture} );
    podvozok= new THREE.Mesh( geometryPlanee, materialPlanee );
    podvozok.position.set(0.1, 0.49, 0);
    podvozok.rotation.x = Math.PI / 2;
    scene.add( podvozok );

    podvozok.position.x=4
    podvozok.rotation.z=4.71
    podvozok.scale.set(0.7,0.7,0.7);

    var geometryPlaneee = new THREE.PlaneGeometry( 0.06, 1.16,4 , 4 );
    var materialPlaneee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas1= new THREE.Mesh( geometryPlaneee, materialPlaneee );
    pas1.position.set(-0.4, 0, 0);
    scene.add( pas1 );

    var geometryPlaneeee = new THREE.PlaneGeometry( -0.06, 1.16,4 , 4 );
    var materialPlaneeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas2= new THREE.Mesh( geometryPlaneeee, materialPlaneeee );
    pas2.position.set(0.4, 0, 0);
    scene.add( pas2 );

    var geometryPlaneeeea = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeea = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka1= new THREE.Mesh( geometryPlaneeeea, materialPlaneeeea );
    mriezka1.position.set(0.2, 0.3, -0.001);
    scene.add( mriezka1 );

    var geometryPlaneeeeaa = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeeaa = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka2= new THREE.Mesh( geometryPlaneeeeaa, materialPlaneeeeaa );
    mriezka2.position.set(-0.2, 0.3, -0.001);
    scene.add( mriezka2 );

    var geometryPlaneeeeas = new THREE.PlaneGeometry( -0.12, 0.029,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeas = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    periskop= new THREE.Mesh( geometryPlaneeeeas, materialPlaneeeeas );
    periskop.position.set(-0.27, -0.55, -0.0001);
    scene.add( periskop );

    var geometryPlaneeeeaass = new THREE.PlaneGeometry( -0.02, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaass = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    gulomet= new THREE.Mesh( geometryPlaneeeeaass, materialPlaneeeeaass );
    gulomet.position.set(0.27, -0.55, 0);
    scene.add( gulomet );

    var geometryaas = new THREE.CircleGeometry( 0.09, 50);
    var materialaas = new THREE.MeshBasicMaterial( { color: 'rgb(30,29,29)', side: THREE.DoubleSide } );
    var gulometgula = new THREE.Mesh( geometryaas, materialaas );
    gulometgula.position.set(0.27, -0.55, 0);
    scene.add( gulometgula );

    var geometry = new THREE.PlaneGeometry( -0.6, 0.6,4 , 4 );
    var planeT = new THREE.ImageUtils.loadTexture('texture/bielemm.jpg')
    var material = new THREE.MeshBasicMaterial( { color: 'rgb(52,64,105)', side: THREE.DoubleSide, map:planeT } );
    var veza = new THREE.Mesh( geometry, material );
    veza.position.set(0, 0, -0.002);
    scene.add( veza );

    var geometry2 = new THREE.PlaneGeometry( -0.28, 0.08,4 , 4 );
    var planeT2 = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material2 = new THREE.MeshBasicMaterial( { color: 'rgb(225,225,10)', side: THREE.DoubleSide, map:planeT2 } );
    var veza2 = new THREE.Mesh( geometry2, material2 );
    veza2.position.set(0, -0.34, -0.002);
    scene.add( veza2 );
    var geometry3 = new THREE.PlaneGeometry( -0.28, 0.08,4 , 4 );
    var planeT3 = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material3 = new THREE.MeshBasicMaterial( { color: 'rgb(52,64,105)', side: THREE.DoubleSide, map:planeT3 } );
    var veza3 = new THREE.Mesh( geometry3, material3 );
    veza3.position.set(0, 0.34, -0.002);
    scene.add( veza3 );

    var geometryPlaneeeee = new THREE.PlaneGeometry( 0.2,0.1,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    hrdloveze= new THREE.Mesh( geometryPlaneeeee, materialPlaneeeee );
    hrdloveze.position.set(0, 0, 0);
    scene.add( hrdloveze );

    var geometryPlaneeeeee = new THREE.PlaneGeometry( 0.13,0.8,4 , 4 );
    var planeTeturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(95,98,95)', side: THREE.DoubleSide, map:planeTeturee} );
    kanon= new THREE.Mesh( geometryPlaneeeeee, materialPlaneeeeee );
    kanon.position.set(0, -0.6, -0.001);
    scene.add( kanon );

    var geometryPlaneeeeeee = new THREE.PlaneGeometry( 0.17,0.15,4 , 4 );
    var planeTturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide,map:planeTturee} );
    koncovkakanona= new THREE.Mesh( geometryPlaneeeeeee, materialPlaneeeeeee );
    koncovkakanona.position.set(0, -0.9, -0.001);
    scene.add( koncovkakanona );

    var geometryodpall = new THREE.PlaneGeometry( 0.07,0.07,4 , 4 );
    var materialodpall = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
    naboj= new THREE.Mesh( geometryodpall, materialodpall );

    var geometrya = new THREE.CircleGeometry( 0.09, 50);
    var materiala = new THREE.MeshBasicMaterial( { color: 'rgb(248,245,245)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop1 = new THREE.Mesh( geometrya, materiala );
    poklop1.position.set(0.15, 0, -0.003);

    scene.add( poklop1 );

    var geometryaa = new THREE.CircleGeometry( 0.09, 50);
    var materialaa = new THREE.MeshBasicMaterial( { color: 'rgb(241,246,241)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop2 = new THREE.Mesh( geometryaa, materialaa );
    poklop2.position.set(-0.15, 0, -0.003);

    scene.add( poklop2 );

    hrdloveze.add(veza,veza2,veza3,kanon,koncovkakanona,poklop1,poklop2)
    podvozok.add(pas1,pas2,mriezka1,mriezka2,periskop,gulomet,gulometgula,hrdloveze);

}

function tiger(){
    scene.remove(podvozok);

    var pokloptextura = new THREE.ImageUtils.loadTexture('texture/iron3.jpg')
    var geometryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/maskaceff.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 'rgb(42,87,3)', side: THREE.DoubleSide, map:planeTexture} );
    podvozok= new THREE.Mesh( geometryPlanee, materialPlanee );
    podvozok.position.set(0.1, 0.49, 0);
    podvozok.rotation.x = Math.PI / 2;
    scene.add( podvozok );

    podvozok.position.x=4
    podvozok.rotation.z=4.71
    podvozok.scale.set(0.7,0.7,0.7);

    var geometryPlaneee = new THREE.PlaneGeometry( 0.06, 1.16,4 , 4 );
    var materialPlaneee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas1= new THREE.Mesh( geometryPlaneee, materialPlaneee );
    pas1.position.set(-0.4, 0, 0);
    scene.add( pas1 );

    var geometryPlaneeee = new THREE.PlaneGeometry( -0.06, 1.16,4 , 4 );
    var materialPlaneeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas2= new THREE.Mesh( geometryPlaneeee, materialPlaneeee );
    pas2.position.set(0.4, 0, 0);
    scene.add( pas2 );

    var geometryPlaneeeea = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeea = new THREE.MeshBasicMaterial( {color: 'rgb(14,14,14)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka1= new THREE.Mesh( geometryPlaneeeea, materialPlaneeeea );
    mriezka1.position.set(0.2, 0.3, -0.001);
    scene.add( mriezka1 );

    var geometryPlaneeeeaa = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeeaa = new THREE.MeshBasicMaterial( {color: 'rgb(14,14,14)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka2= new THREE.Mesh( geometryPlaneeeeaa, materialPlaneeeeaa );
    mriezka2.position.set(-0.2, 0.3, -0.001);
    scene.add( mriezka2 );

    var geometryPlaneeeeas = new THREE.PlaneGeometry( -0.12, 0.029,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeas = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    periskop= new THREE.Mesh( geometryPlaneeeeas, materialPlaneeeeas );
    periskop.position.set(-0.27, -0.55, -0.0001);
    scene.add( periskop );

    var geometryPlaneeeeaass = new THREE.PlaneGeometry( -0.02, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaass = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    gulomet= new THREE.Mesh( geometryPlaneeeeaass, materialPlaneeeeaass );
    gulomet.position.set(0.27, -0.55, 0);
    scene.add( gulomet );

    var geometryaas = new THREE.CircleGeometry( 0.09, 50);
    var materialaas = new THREE.MeshBasicMaterial( { color: 'rgb(30,29,29)', side: THREE.DoubleSide } );
    var gulometgula = new THREE.Mesh( geometryaas, materialaas );
    gulometgula.position.set(0.27, -0.55, 0);
    scene.add( gulometgula );

    var geometry = new THREE.CircleGeometry( 0.35,50);
    var planeT = new THREE.ImageUtils.loadTexture('texture/maskacegg.jpg')
    var material = new THREE.MeshBasicMaterial( { color: 'rgb(22,120,248)', side: THREE.DoubleSide, map:planeT } );
    var veza = new THREE.Mesh( geometry, material );
    veza.position.set(0, 0, -0.002);
    scene.add( veza );

    var geometry2 = new THREE.PlaneGeometry( -0.22, 0.08,4 , 4 );
    var planeT2 = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material2 = new THREE.MeshBasicMaterial( { color: 'rgb(0,0,0)', side: THREE.DoubleSide, map:planeT2 } );
    var veza2 = new THREE.Mesh( geometry2, material2 );
    veza2.position.set(0, -0.34, -0.002);
    scene.add( veza2 );

    var geometry3 = new THREE.PlaneGeometry( -0.28, 0.08,4 , 4 );
    var planeT3 = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material3 = new THREE.MeshBasicMaterial( { color: 'rgb(166,167,171)', side: THREE.DoubleSide, map:planeT3 } );
    var veza3 = new THREE.Mesh( geometry3, material3 );
    veza3.position.set(0, 0.34, -0.002);
    scene.add( veza3 );

    var geometryPlaneeeee = new THREE.PlaneGeometry( 0.2,0.1,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    hrdloveze= new THREE.Mesh( geometryPlaneeeee, materialPlaneeeee );
    hrdloveze.position.set(0, 0, 0);
    scene.add( hrdloveze );

    var geometryPlaneeeeee = new THREE.PlaneGeometry( 0.16,1,4 , 4 );
    var planeTeturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(129,187,129)', side: THREE.DoubleSide, map:planeTeturee} );
    kanon= new THREE.Mesh( geometryPlaneeeeee, materialPlaneeeeee );
    kanon.position.set(0, -0.6, -0.001);
    scene.add( kanon );

    var geometryPlaneeeeeee = new THREE.PlaneGeometry( 0.21,0.15,4 , 4 );
    var planeTturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(1,42,1)', side: THREE.DoubleSide,map:planeTturee} );
    koncovkakanona= new THREE.Mesh( geometryPlaneeeeeee, materialPlaneeeeeee );
    koncovkakanona.position.set(0, -0.98, -0.001);
    scene.add( koncovkakanona );

    var geometryodpall = new THREE.PlaneGeometry( 0.09,0.09,4 , 4 );
    var materialodpall = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
    naboj= new THREE.Mesh( geometryodpall, materialodpall );

    var geometrya = new THREE.CircleGeometry( 0.07, 50);
    var materiala = new THREE.MeshBasicMaterial( { color: 'rgb(248,245,245)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop1 = new THREE.Mesh( geometrya, materiala );
    poklop1.position.set(0.1, 0, -0.003);

    scene.add( poklop1 );

    var geometryaa = new THREE.CircleGeometry( 0.09, 50);
    var materialaa = new THREE.MeshBasicMaterial( { color: 'rgb(241,246,241)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop2 = new THREE.Mesh( geometryaa, materialaa );
    poklop2.position.set(-0.15, 0, -0.003);

    scene.add( poklop2 );

    hrdloveze.add(veza,veza2,veza3,kanon,koncovkakanona,poklop1,poklop2)
    podvozok.add(pas1,pas2,mriezka1,mriezka2,periskop,gulomet,gulometgula,hrdloveze);

}
function tPovodny(){
    scene.remove(podvozok);

    var pokloptextura = new THREE.ImageUtils.loadTexture('texture/iron3.jpg')
    var geometryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/maskace.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:planeTexture} );
    podvozok= new THREE.Mesh( geometryPlanee, materialPlanee );
    podvozok.position.set(0.1, 0.49, 0);
    podvozok.rotation.x = Math.PI / 2;
    scene.add( podvozok );

    podvozok.position.x=4
    podvozok.rotation.z=4.71
    podvozok.scale.set(0.7,0.7,0.7);

    var geometryPlaneee = new THREE.PlaneGeometry( 0.06, 1.16,4 , 4 );
    var materialPlaneee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas1= new THREE.Mesh( geometryPlaneee, materialPlaneee );
    pas1.position.set(-0.4, 0, 0);
    scene.add( pas1 );

    var geometryPlaneeee = new THREE.PlaneGeometry( -0.06, 1.16,4 , 4 );
    var materialPlaneeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas2= new THREE.Mesh( geometryPlaneeee, materialPlaneeee );
    pas2.position.set(0.4, 0, 0);
    scene.add( pas2 );

    var geometryPlaneeeea = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeea = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka1= new THREE.Mesh( geometryPlaneeeea, materialPlaneeeea );
    mriezka1.position.set(0.2, 0.3, -0.001);
    scene.add( mriezka1 );

    var geometryPlaneeeeaa = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeeaa = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka2= new THREE.Mesh( geometryPlaneeeeaa, materialPlaneeeeaa );
    mriezka2.position.set(-0.2, 0.3, -0.001);
    scene.add( mriezka2 );

    var geometryPlaneeeeas = new THREE.PlaneGeometry( -0.12, 0.029,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeas = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    periskop= new THREE.Mesh( geometryPlaneeeeas, materialPlaneeeeas );
    periskop.position.set(-0.27, -0.55, -0.0001);
    scene.add( periskop );

    var geometryPlaneeeeaass = new THREE.PlaneGeometry( -0.02, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaass = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    gulomet= new THREE.Mesh( geometryPlaneeeeaass, materialPlaneeeeaass );
    gulomet.position.set(0.27, -0.55, 0);
    scene.add( gulomet );

    var geometryaas = new THREE.CircleGeometry( 0.09, 50);
    var materialaas = new THREE.MeshBasicMaterial( { color: 'rgb(30,29,29)', side: THREE.DoubleSide } );
    var gulometgula = new THREE.Mesh( geometryaas, materialaas );
    gulometgula.position.set(0.27, -0.55, 0);
    scene.add( gulometgula );

    var geometry = new THREE.CircleGeometry( 0.3,50);
    var planeT = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material = new THREE.MeshBasicMaterial( { color: 'rgb(22,120,248)', side: THREE.DoubleSide, map:planeT } );
    var veza = new THREE.Mesh( geometry, material );
    veza.position.set(0, 0, -0.002);
    scene.add( veza );

    var geometryPlaneeeee = new THREE.PlaneGeometry( 0.2,0.1,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    hrdloveze= new THREE.Mesh( geometryPlaneeeee, materialPlaneeeee );
    hrdloveze.position.set(0, 0, 0);
    scene.add( hrdloveze );

    var geometryPlaneeeeee = new THREE.PlaneGeometry( 0.13,1,4 , 4 );
    var planeTeturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(229,234,229)', side: THREE.DoubleSide, map:planeTeturee} );
    kanon= new THREE.Mesh( geometryPlaneeeeee, materialPlaneeeeee );
    kanon.position.set(0, -0.6, -0.001);
    scene.add( kanon );

    var geometryPlaneeeeeee = new THREE.PlaneGeometry( 0.15,0.15,4 , 4 );
    var planeTturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(101,74,48)', side: THREE.DoubleSide,map:planeTturee} );
    koncovkakanona= new THREE.Mesh( geometryPlaneeeeeee, materialPlaneeeeeee );
    koncovkakanona.position.set(0, -0.98, -0.001);
    scene.add( koncovkakanona );

    var geometryodpall = new THREE.PlaneGeometry( 0.07,0.07,4 , 4 );
    var materialodpall = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
    naboj= new THREE.Mesh( geometryodpall, materialodpall );

    var geometrya = new THREE.CircleGeometry( 0.07, 50);
    var materiala = new THREE.MeshBasicMaterial( { color: 'rgb(248,245,245)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop1 = new THREE.Mesh( geometrya, materiala );
    poklop1.position.set(0.1, 0, -0.003);

    scene.add( poklop1 );

    var geometryaa = new THREE.CircleGeometry( 0.09, 50);
    var materialaa = new THREE.MeshBasicMaterial( { color: 'rgb(241,246,241)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop2 = new THREE.Mesh( geometryaa, materialaa );
    poklop2.position.set(-0.15, 0, -0.003);

    scene.add( poklop2 );

    hrdloveze.add(veza,kanon,koncovkakanona,poklop1,poklop2)
    podvozok.add(pas1,pas2,mriezka1,mriezka2,periskop,gulomet,gulometgula,hrdloveze);
}








//////


function is772(){
    scene.remove(cube1);

    var pokloptextura = new THREE.ImageUtils.loadTexture('texture/iron3.jpg')
    var geometryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/bielemm.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:planeTexture} );
    cube1= new THREE.Mesh( geometryPlanee, materialPlanee );
    cube1.position.set(0.1, 0.49, 0);
    cube1.rotation.x = Math.PI / 2;
    scene.add( cube1 );

    cube1.position.x=-4
    cube1.rotation.z=-4.71
    cube1.scale.set(0.7,0.7,0.7);

    var geometryPlaneee = new THREE.PlaneGeometry( 0.06, 1.16,4 , 4 );
    var materialPlaneee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas1= new THREE.Mesh( geometryPlaneee, materialPlaneee );
    pas1.position.set(-0.4, 0, 0);
    scene.add( pas1 );

    var geometryPlaneeee = new THREE.PlaneGeometry( -0.06, 1.16,4 , 4 );
    var materialPlaneeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas2= new THREE.Mesh( geometryPlaneeee, materialPlaneeee );
    pas2.position.set(0.4, 0, 0);
    scene.add( pas2 );

    var geometryPlaneeeea = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeea = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka1= new THREE.Mesh( geometryPlaneeeea, materialPlaneeeea );
    mriezka1.position.set(0.2, 0.3, -0.001);
    scene.add( mriezka1 );

    var geometryPlaneeeeaa = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeeaa = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka2= new THREE.Mesh( geometryPlaneeeeaa, materialPlaneeeeaa );
    mriezka2.position.set(-0.2, 0.3, -0.001);
    scene.add( mriezka2 );

    var geometryPlaneeeeas = new THREE.PlaneGeometry( -0.12, 0.029,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeas = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    periskop= new THREE.Mesh( geometryPlaneeeeas, materialPlaneeeeas );
    periskop.position.set(-0.27, -0.55, -0.0001);
    scene.add( periskop );

    var geometryPlaneeeeaass = new THREE.PlaneGeometry( -0.02, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaass = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    gulomet= new THREE.Mesh( geometryPlaneeeeaass, materialPlaneeeeaass );
    gulomet.position.set(0.27, -0.55, 0);
    scene.add( gulomet );

    var geometryaas = new THREE.CircleGeometry( 0.09, 50);
    var materialaas = new THREE.MeshBasicMaterial( { color: 'rgb(30,29,29)', side: THREE.DoubleSide } );
    var gulometgula = new THREE.Mesh( geometryaas, materialaas );
    gulometgula.position.set(0.27, -0.55, 0);
    scene.add( gulometgula );

    var geometry = new THREE.PlaneGeometry( -0.6, 0.6,4 , 4 );
    var planeT = new THREE.ImageUtils.loadTexture('texture/bielemm.jpg')
    var material = new THREE.MeshBasicMaterial( { color: 'rgb(86,49,9)', side: THREE.DoubleSide, map:planeT } );
    var veza = new THREE.Mesh( geometry, material );
    veza.position.set(0, 0, -0.002);
    scene.add( veza );

    var geometry2 = new THREE.PlaneGeometry( -0.28, 0.08,4 , 4 );
    var planeT2 = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material2 = new THREE.MeshBasicMaterial( { color: 'rgb(225,225,10)', side: THREE.DoubleSide, map:planeT2 } );
    var veza2 = new THREE.Mesh( geometry2, material2 );
    veza2.position.set(0, -0.34, -0.002);
    scene.add( veza2 );
    var geometry3 = new THREE.PlaneGeometry( -0.28, 0.08,4 , 4 );
    var planeT3 = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material3 = new THREE.MeshBasicMaterial( { color: 'rgb(52,64,105)', side: THREE.DoubleSide, map:planeT3 } );
    var veza3 = new THREE.Mesh( geometry3, material3 );
    veza3.position.set(0, 0.34, -0.002);
    scene.add( veza3 );

    var geometryPlaneeeee = new THREE.PlaneGeometry( 0.2,0.1,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    cube4= new THREE.Mesh( geometryPlaneeeee, materialPlaneeeee );
    cube4.position.set(0, 0, 0);
    scene.add( cube4 );

    var geometryPlaneeeeee = new THREE.PlaneGeometry( 0.13,0.8,4 , 4 );
    var planeTeturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(95,98,95)', side: THREE.DoubleSide, map:planeTeturee} );
    kanon= new THREE.Mesh( geometryPlaneeeeee, materialPlaneeeeee );
    kanon.position.set(0, -0.6, -0.001);
    scene.add( kanon );

    var geometryPlaneeeeeee = new THREE.PlaneGeometry( 0.17,0.15,4 , 4 );
    var planeTturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide,map:planeTturee} );
    koncovkakanona= new THREE.Mesh( geometryPlaneeeeeee, materialPlaneeeeeee );
    koncovkakanona.position.set(0, -0.9, -0.001);
    scene.add( koncovkakanona );

    var geometryodpall = new THREE.PlaneGeometry( 0.07,0.07,4 , 4 );
    var materialodpall = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
    odpall= new THREE.Mesh( geometryodpall, materialodpall );

    var geometrya = new THREE.CircleGeometry( 0.09, 50);
    var materiala = new THREE.MeshBasicMaterial( { color: 'rgb(248,245,245)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop1 = new THREE.Mesh( geometrya, materiala );
    poklop1.position.set(0.15, 0, -0.003);

    scene.add( poklop1 );

    var geometryaa = new THREE.CircleGeometry( 0.09, 50);
    var materialaa = new THREE.MeshBasicMaterial( { color: 'rgb(241,246,241)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop2 = new THREE.Mesh( geometryaa, materialaa );
    poklop2.position.set(-0.15, 0, -0.003);

    scene.add( poklop2 );

    cube4.add(veza,veza2,veza3,kanon,koncovkakanona,poklop1,poklop2)
    cube1.add(pas1,pas2,mriezka1,mriezka2,periskop,gulomet,gulometgula,cube4);

}

function tiger2(){
    scene.remove(cube1);

    var pokloptextura = new THREE.ImageUtils.loadTexture('texture/iron3.jpg')
    var geometryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/maskaceff.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 'rgb(42,87,3)', side: THREE.DoubleSide, map:planeTexture} );
    cube1= new THREE.Mesh( geometryPlanee, materialPlanee );
    cube1.position.set(0.1, 0.49, 0);
    cube1.rotation.x = Math.PI / 2;
    scene.add( cube1 );

    cube1.position.x=-4
    cube1.rotation.z=-4.71
    cube1.scale.set(0.7,0.7,0.7);

    var geometryPlaneee = new THREE.PlaneGeometry( 0.06, 1.16,4 , 4 );
    var materialPlaneee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas1= new THREE.Mesh( geometryPlaneee, materialPlaneee );
    pas1.position.set(-0.4, 0, 0);
    scene.add( pas1 );

    var geometryPlaneeee = new THREE.PlaneGeometry( -0.06, 1.16,4 , 4 );
    var materialPlaneeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas2= new THREE.Mesh( geometryPlaneeee, materialPlaneeee );
    pas2.position.set(0.4, 0, 0);
    scene.add( pas2 );

    var geometryPlaneeeea = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeea = new THREE.MeshBasicMaterial( {color: 'rgb(14,14,14)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka1= new THREE.Mesh( geometryPlaneeeea, materialPlaneeeea );
    mriezka1.position.set(0.2, 0.3, -0.001);
    scene.add( mriezka1 );

    var geometryPlaneeeeaa = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeeaa = new THREE.MeshBasicMaterial( {color: 'rgb(14,14,14)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka2= new THREE.Mesh( geometryPlaneeeeaa, materialPlaneeeeaa );
    mriezka2.position.set(-0.2, 0.3, -0.001);
    scene.add( mriezka2 );

    var geometryPlaneeeeas = new THREE.PlaneGeometry( -0.12, 0.029,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeas = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    periskop= new THREE.Mesh( geometryPlaneeeeas, materialPlaneeeeas );
    periskop.position.set(-0.27, -0.55, -0.0001);
    scene.add( periskop );

    var geometryPlaneeeeaass = new THREE.PlaneGeometry( -0.02, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaass = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    gulomet= new THREE.Mesh( geometryPlaneeeeaass, materialPlaneeeeaass );
    gulomet.position.set(0.27, -0.55, 0);
    scene.add( gulomet );

    var geometryaas = new THREE.CircleGeometry( 0.09, 50);
    var materialaas = new THREE.MeshBasicMaterial( { color: 'rgb(30,29,29)', side: THREE.DoubleSide } );
    var gulometgula = new THREE.Mesh( geometryaas, materialaas );
    gulometgula.position.set(0.27, -0.55, 0);
    scene.add( gulometgula );

    var geometry = new THREE.CircleGeometry( 0.35,50);
    var planeT = new THREE.ImageUtils.loadTexture('texture/maskacegg.jpg')
    var material = new THREE.MeshBasicMaterial( { color: 'rgb(248,115,22)', side: THREE.DoubleSide, map:planeT } );
    var veza = new THREE.Mesh( geometry, material );
    veza.position.set(0, 0, -0.002);
    scene.add( veza );

    var geometry2 = new THREE.PlaneGeometry( -0.22, 0.08,4 , 4 );
    var planeT2 = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material2 = new THREE.MeshBasicMaterial( { color: 'rgb(0,0,0)', side: THREE.DoubleSide, map:planeT2 } );
    var veza2 = new THREE.Mesh( geometry2, material2 );
    veza2.position.set(0, -0.34, -0.002);
    scene.add( veza2 );

    var geometry3 = new THREE.PlaneGeometry( -0.28, 0.08,4 , 4 );
    var planeT3 = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material3 = new THREE.MeshBasicMaterial( { color: 'rgb(166,167,171)', side: THREE.DoubleSide, map:planeT3 } );
    var veza3 = new THREE.Mesh( geometry3, material3 );
    veza3.position.set(0, 0.34, -0.002);
    scene.add( veza3 );

    var geometryPlaneeeee = new THREE.PlaneGeometry( 0.2,0.1,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    cube4= new THREE.Mesh( geometryPlaneeeee, materialPlaneeeee );
    cube4.position.set(0, 0, 0);
    scene.add( cube4 );

    var geometryPlaneeeeee = new THREE.PlaneGeometry( 0.16,1,4 , 4 );
    var planeTeturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(129,187,129)', side: THREE.DoubleSide, map:planeTeturee} );
    kanon= new THREE.Mesh( geometryPlaneeeeee, materialPlaneeeeee );
    kanon.position.set(0, -0.6, -0.001);
    scene.add( kanon );

    var geometryPlaneeeeeee = new THREE.PlaneGeometry( 0.21,0.15,4 , 4 );
    var planeTturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(1,42,1)', side: THREE.DoubleSide,map:planeTturee} );
    koncovkakanona= new THREE.Mesh( geometryPlaneeeeeee, materialPlaneeeeeee );
    koncovkakanona.position.set(0, -0.98, -0.001);
    scene.add( koncovkakanona );

    var geometryodpall = new THREE.PlaneGeometry( 0.09,0.09,4 , 4 );
    var materialodpall = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
    odpall= new THREE.Mesh( geometryodpall, materialodpall );

    var geometrya = new THREE.CircleGeometry( 0.07, 50);
    var materiala = new THREE.MeshBasicMaterial( { color: 'rgb(248,245,245)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop1 = new THREE.Mesh( geometrya, materiala );
    poklop1.position.set(0.1, 0, -0.003);

    scene.add( poklop1 );

    var geometryaa = new THREE.CircleGeometry( 0.09, 50);
    var materialaa = new THREE.MeshBasicMaterial( { color: 'rgb(241,246,241)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop2 = new THREE.Mesh( geometryaa, materialaa );
    poklop2.position.set(-0.15, 0, -0.003);

    scene.add( poklop2 );

    cube4.add(veza,veza2,veza3,kanon,koncovkakanona,poklop1,poklop2)
    cube1.add(pas1,pas2,mriezka1,mriezka2,periskop,gulomet,gulometgula,cube4);

}
function tPovodny2(){
    scene.remove(cube1);

    var pokloptextura = new THREE.ImageUtils.loadTexture('texture/iron3.jpg')
    var geometryPlanee = new THREE.PlaneGeometry( 0.8, 1.2, 4, 4 );
    var planeTexture = new THREE.ImageUtils.loadTexture('texture/maskace.jpg')
    var materialPlanee = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide, map:planeTexture} );
    cube1= new THREE.Mesh( geometryPlanee, materialPlanee );
    cube1.position.set(0.1, 0.49, 0);
    cube1.rotation.x = Math.PI / 2;
    scene.add( cube1 );

    cube1.position.x=-4
    cube1.rotation.z=-4.71
    cube1.scale.set(0.7,0.7,0.7);

    var geometryPlaneee = new THREE.PlaneGeometry( 0.06, 1.16,4 , 4 );
    var materialPlaneee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas1= new THREE.Mesh( geometryPlaneee, materialPlaneee );
    pas1.position.set(-0.4, 0, 0);
    scene.add( pas1 );

    var geometryPlaneeee = new THREE.PlaneGeometry( -0.06, 1.16,4 , 4 );
    var materialPlaneeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    pas2= new THREE.Mesh( geometryPlaneeee, materialPlaneeee );
    pas2.position.set(0.4, 0, 0);
    scene.add( pas2 );

    var geometryPlaneeeea = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeea = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka1= new THREE.Mesh( geometryPlaneeeea, materialPlaneeeea );
    mriezka1.position.set(0.2, 0.3, -0.001);
    scene.add( mriezka1 );

    var geometryPlaneeeeaa = new THREE.PlaneGeometry( -0.1, 0.26,4 , 4 );
    var materialPlaneeeeaa = new THREE.MeshBasicMaterial( {color: 'rgb(63,52,37)', side: THREE.DoubleSide,map:pokloptextura} );
    mriezka2= new THREE.Mesh( geometryPlaneeeeaa, materialPlaneeeeaa );
    mriezka2.position.set(-0.2, 0.3, -0.001);
    scene.add( mriezka2 );

    var geometryPlaneeeeas = new THREE.PlaneGeometry( -0.12, 0.029,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeas = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    periskop= new THREE.Mesh( geometryPlaneeeeas, materialPlaneeeeas );
    periskop.position.set(-0.27, -0.55, -0.0001);
    scene.add( periskop );

    var geometryPlaneeeeaass = new THREE.PlaneGeometry( -0.02, 0.26,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeeaass = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    gulomet= new THREE.Mesh( geometryPlaneeeeaass, materialPlaneeeeaass );
    gulomet.position.set(0.27, -0.55, 0);
    scene.add( gulomet );

    var geometryaas = new THREE.CircleGeometry( 0.09, 50);
    var materialaas = new THREE.MeshBasicMaterial( { color: 'rgb(30,29,29)', side: THREE.DoubleSide } );
    var gulometgula = new THREE.Mesh( geometryaas, materialaas );
    gulometgula.position.set(0.27, -0.55, 0);
    scene.add( gulometgula );

    var geometry = new THREE.CircleGeometry( 0.3,50);
    var planeT = new THREE.ImageUtils.loadTexture('texture/maskace2.jpg')
    var material = new THREE.MeshBasicMaterial( { color: 'rgb(248,115,22)', side: THREE.DoubleSide, map:planeT } );
    var veza = new THREE.Mesh( geometry, material );
    veza.position.set(0, 0, -0.002);
    scene.add( veza );

    var geometryPlaneeeee = new THREE.PlaneGeometry( 0.2,0.1,4 , 4 );
    //var planeTexturee = new THREE.ImageUtils.loadTexture('texture/carbon.png')
    var materialPlaneeeee = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
    cube4= new THREE.Mesh( geometryPlaneeeee, materialPlaneeeee );
    cube4.position.set(0, 0, 0);
    scene.add( cube4 );

    var geometryPlaneeeeee = new THREE.PlaneGeometry( 0.13,1,4 , 4 );
    var planeTeturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(229,234,229)', side: THREE.DoubleSide, map:planeTeturee} );
    kanon= new THREE.Mesh( geometryPlaneeeeee, materialPlaneeeeee );
    kanon.position.set(0, -0.6, -0.001);
    scene.add( kanon );

    var geometryPlaneeeeeee = new THREE.PlaneGeometry( 0.15,0.15,4 , 4 );
    var planeTturee = new THREE.ImageUtils.loadTexture('texture/iron2.jpg')
    var materialPlaneeeeeee = new THREE.MeshBasicMaterial( {color: 'rgb(101,74,48)', side: THREE.DoubleSide,map:planeTturee} );
    koncovkakanona= new THREE.Mesh( geometryPlaneeeeeee, materialPlaneeeeeee );
    koncovkakanona.position.set(0, -0.98, -0.001);
    scene.add( koncovkakanona );

    var geometryodpall = new THREE.PlaneGeometry( 0.07,0.07,4 , 4 );
    var materialodpall = new THREE.MeshBasicMaterial( {color: 'rgb(0,0,0)', side: THREE.DoubleSide} );
    odpall= new THREE.Mesh( geometryodpall, materialodpall );

    var geometrya = new THREE.CircleGeometry( 0.07, 50);
    var materiala = new THREE.MeshBasicMaterial( { color: 'rgb(248,245,245)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop1 = new THREE.Mesh( geometrya, materiala );
    poklop1.position.set(0.1, 0, -0.003);

    scene.add( poklop1 );

    var geometryaa = new THREE.CircleGeometry( 0.09, 50);
    var materialaa = new THREE.MeshBasicMaterial( { color: 'rgb(241,246,241)', side: THREE.DoubleSide,map:planeTturee } );
    var poklop2 = new THREE.Mesh( geometryaa, materialaa );
    poklop2.position.set(-0.15, 0, -0.003);

    scene.add( poklop2 );

    cube4.add(veza,kanon,koncovkakanona,poklop1,poklop2)
    cube1.add(pas1,pas2,mriezka1,mriezka2,periskop,gulomet,gulometgula,cube4);
}


/////////////////////////////////////////////////////
