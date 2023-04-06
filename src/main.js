import * as THREE from './build/three.module.js';
import { GLTFLoader } from './scripts/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from './scripts/jsm/loaders/KTX2Loader.js';
import { MeshoptDecoder } from './scripts/jsm/libs/meshopt_decoder.module.js';
// import { GLTFExporter } from './scripts/jsm/exporters/GLTFExporter.js';
import { RoomEnvironment } from './scripts/jsm/environments/RoomEnvironment.js';
import { OrbitControls } from './scripts/jsm/controls/OrbitControls.js';
import { SplineAnimation } from './SplineAnimation.js';

import { spline1 } from './extras/spline1.js';
import { spline2 } from './extras/spline2.js';
import { spline3 } from './extras/spline3.js';
import { spline4 } from './extras/spline4.js';
import { spline5 } from './extras/spline5.js';

import { splineWhite1 } from './extras/splineWhite1.js';
import { splineWhite2 } from './extras/splineWhite2.js';
import { splineWhite3 } from './extras/splineWhite3.js';
import { splineWhite4 } from './extras/splineWhite4.js';
import { splineWhite5 } from './extras/splineWhite5.js';
import { splineWhite6 } from './extras/splineWhite6.js';



import { splineNormal1 } from './extras/splineNormal1.js';
import { splineNormal2 } from './extras/splineNormal2.js';
import { splineNormal3 } from './extras/splineNormal3.js';
import { splineNormal4 } from './extras/splineNormal4.js';
import { splineNormal5 } from './extras/splineNormal5.js';
import { splineNormal6 } from './extras/splineNormal6.js';
// import { RoomEnvironment } from './scripts/jsm/environments/RoomEnvironment.js';
// import { TransformControls } from './scripts/jsm/controls/TransformControls.js';
//import { TWEEN } from './scripts/jsm/libs/tween.module.min.js';

let camera, scene, renderer, clock, ktx2Loader, controls, loader, mainModel;
const oracleCurves = [spline1, spline2, spline3, spline4, spline5];
const whiteCurves = [splineWhite1, splineWhite2, splineWhite3, splineWhite4, splineWhite5, splineWhite6];
const normalCurves = [splineNormal1, splineNormal2, splineNormal3, splineNormal4, splineNormal5, splineNormal6];

const splineAnis=[];

const oracleLoadObjects = [
    {loaded:false, group:null, url:"oracle-2.glb", isMainModel:true, name:"oracle", animated:false, model:null},
    {loaded:false, group:null, url:"orchid.glb", isMainModel:false, name:"orchid", animated:false, model:null},
    {loaded:false, group:null, url:"hibiscus.glb", isMainModel:false, name:"hibiscus", animated:false, model:null},
    {loaded:false, group:null, url:"siam.glb", isMainModel:false, name:"siam", animated:false, model:null},
    {loaded:false, group:null, url:"moth-orchid.glb", isMainModel:false, name:"moth orchid", animated:false, model:null},
    {loaded:false, group:null, url:"butterfly.glb", isMainModel:false, name:"butterfly", animated:true, model:null},
]
const whiteLoadObjects = [
    {loaded:false, group:null, url:"white-fairy.glb", isMainModel:true, name:"white-fairy", animated:false, model:null},
    {loaded:false, group:null, url:"orchid.glb", isMainModel:false, name:"orchid", animated:false, model:null},
    {loaded:false, group:null, url:"hibiscus.glb", isMainModel:false, name:"hibiscus", animated:false, model:null},
    {loaded:false, group:null, url:"siam.glb", isMainModel:false, name:"siam", animated:false, model:null},
    {loaded:false, group:null, url:"moth-orchid.glb", isMainModel:false, name:"moth orchid", animated:false, model:null},
    {loaded:false, group:null, url:"butterfly.glb", isMainModel:false, name:"butterfly", animated:true, model:null},
]

const normalLoadObjects = [
    {loaded:false, group:null, url:"normal-fairy.glb", isMainModel:true, name:"normal-fairy", animated:false, model:null},
    {loaded:false, group:null, url:"orchid.glb", isMainModel:false, name:"orchid", animated:false, model:null},
    {loaded:false, group:null, url:"hibiscus.glb", isMainModel:false, name:"hibiscus", animated:false, model:null},
    {loaded:false, group:null, url:"siam.glb", isMainModel:false, name:"siam", animated:false, model:null},
    {loaded:false, group:null, url:"moth-orchid.glb", isMainModel:false, name:"moth orchid", animated:false, model:null},
    {loaded:false, group:null, url:"butterfly.glb", isMainModel:false, name:"butterfly", animated:true, model:null},
]

const fairyObjects = [
    {name:"oracle", load:oracleLoadObjects, curves:oracleCurves},
    {name:"white fairy",load:whiteLoadObjects, curves:whiteCurves},
    {name:"normal fairy",load:normalLoadObjects, curves:normalCurves},
]

//const loadsArr = [oracle, white];
//const curvesArr = [oracleCurves, whiteCurves]

const fairyIndex = Math.floor(Math.random()*fairyObjects.length);

const loadObjs = fairyObjects[fairyIndex].load;
const curves = fairyObjects[fairyIndex].curves;

init();
//animate();

function init() {
    
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, .1, 200 );
    camera.position.z = 2;
    camera.position.y = 1;

    scene = new THREE.Scene();
    
    const dirLight1 = new THREE.DirectionalLight( 0xffffff );
    dirLight1.position.set( 1, 1, 1 );
    scene.add( dirLight1 );

    const dirLight2 = new THREE.DirectionalLight( 0x002288 );
    dirLight2.position.set( - 1, - 1, - 1 );
    scene.add( dirLight2 );

    const ambientLight = new THREE.AmbientLight( 0x222222 );
    scene.add( ambientLight );

    //const texture = new THREE.TextureLoader().load( 'textures/crate.gif' );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.CineonToneMapping;
    renderer.toneMappingExposure = .6;
    document.body.appendChild( renderer.domElement );

    const pmremGenerator = new THREE.PMREMGenerator( renderer );
    scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), .1 ).texture;

    controls = new OrbitControls( camera, renderer.domElement );
    controls.listenToKeyEvents( window ); // optional

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.1;
    controls.target.set(0,1,0);
    controls.update();
    //controls.screenSpacePanning = false;

    //controls.minDistance = 100;
    //controls.maxDistance = 500;

    //controls.maxPolarAngle = Math.PI / 2;

    ktx2Loader = new KTX2Loader()
        .setTranscoderPath( 'scripts/jsm/libs/basis/' )
        .detectSupport( renderer );

    loader = new GLTFLoader().setPath( './extras/' );
    loader.setKTX2Loader( ktx2Loader );
    loader.setMeshoptDecoder( MeshoptDecoder );
    for(let i = 0; i<loadObjs.length; i++){
        loadHelper(loadObjs[i]);    
    }
    
    clock = new THREE.Clock();

    window.addEventListener( 'resize', onWindowResize );

}

function loadHelper(OBJ){
    
    loader.load( OBJ.url, function ( gltf ) {

        // coffeemat.glb was produced from the source scene using gltfpack:
        // gltfpack -i coffeemat/scene.gltf -o coffeemat.glb -cc -tc
        // The resulting model uses EXT_meshopt_compression (for geometry) and KHR_texture_basisu (for texture compression using ETC1S/BasisLZ)
        //gltf.scene.position.y = -1;
        
        if(OBJ.isMainModel){
            mainModel = gltf.scene;
            scene.add( mainModel );
            gltf.scene.traverse(function(obj){
                if(obj.isMesh){
                    obj.material.envMapIntensity = .2;
                }
            })
        }else{

            gltf.scene.traverse(function(obj){
                if(obj.isMesh){

                    let h1; //= (-.1+Math.random()*.2)%1.0;
                    let h2; //= (-.1+Math.random()*.2)%1.0;
                    let sat;
                    let brt = .5;
                    switch(fairyIndex){
                        case 0:  
                            h1 = (-.1+Math.random()*.2)%1.0;
                            h2 = (-.1+Math.random()*.2)%1.0;
                            sat = 2.5;
                        break;
                        case 1:  
                            h1 = (-.1+Math.random()*.2)%1.0;
                            h2 = (-.1+Math.random()*.2)%1.0;
                            sat = .2
                        break;

                        case 2:  
                            h1 = (.2+Math.random()*.2)%1.0;
                            h2 = (.2+Math.random()*.2)%1.0;
                            sat = .7;
                            brt = .7;
                        break;
                    }
                    obj.material.color = new THREE.Color().setHSL(h1, sat, brt);
                    obj.material.emissive = new THREE.Color().setHSL(h2, sat, brt);
                    obj.material.emissiveIntensity = 4;
                    obj.material.envMapIntensity = 2.2;
                    
                    if(OBJ.name=="butterfly"){
                        obj.material.transparent=true;
                    }
                }
            })
            
        }

        OBJ.loaded = true;
        OBJ.model = gltf.scene;
        OBJ.group = gltf;
        //console.log(isAllLoaded())
        if(isAllLoaded()){
            initCurves()
            animate();
        }
        
    });
}

function getRandomDecorativeMesh(){
    const arr = [];
    for(let i = 0;i<loadObjs.length;i++){
        if(!loadObjs[i].isMainModel)
            arr.push(loadObjs[i]);
    }
    const index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

function initCurves(){
    for(let i = 0; i<curves.length; i++){
        splineAnis.push( new SplineAnimation( {scene:scene, spline:curves[i], mesh:getRandomDecorativeMesh()} ) );
    }
}

function isAllLoaded(){
    for(let i = 0; i<loadObjs.length; i++){
        if(!loadObjs[i].loaded)
            return false;
    }
    return true;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {

    requestAnimationFrame( animate );
    controls.update();
    // mesh.rotation.x += 0.005;
    // mesh.rotation.y += 0.01;
    const d = clock.getDelta();
    //const delta = d*globalAnimationSpeed*selectMult ;
    for(let i = 0; i<splineAnis.length; i++){
        splineAnis[i].update({delta:d});

    }
    
    //cameraHelper.update();
    //renderer.render( scene, params.animationView === true ? splineCamera : camera );

    renderer.render( scene, camera );

}
