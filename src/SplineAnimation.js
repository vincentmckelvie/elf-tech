import {
    ConeGeometry,
    MeshBasicMaterial,
    MeshStandardMaterial,
    Euler,
    Mesh,
    MeshPhysicalMaterial,
    TubeGeometry,
    BoxGeometry,
    Vector3
} from './build/three.module.js';

class SplineAnimation {

    constructor(OBJ){
        
        this.tubeGeometry = new TubeGeometry( OBJ.spline, 200, .01, 8, false );

        const mat = new MeshBasicMaterial( { color: 0xff8000, wireframe: false } );

        const mesh = new Mesh( this.tubeGeometry, mat );
        OBJ.scene.add(mesh);

        this.direction = new Vector3();
        this.binormal = new Vector3();
        this.normal = new Vector3();
        this.position = new Vector3();
        this.lookAt = new Vector3();
        
        
        const geometry = new BoxGeometry( .1, .1, .1 );
        const material = new MeshStandardMaterial( { } );

        this.meshes = [];

        for( let i = 0; i<200; i++){
            const m = new Mesh( geometry, material );
            this.meshes.push(m);
            OBJ.scene.add( m );
        }
        this.inc = 0.0;
    }   

    update(OBJ){
        this.inc += OBJ.delta * .095;
            
        for(let i = 0; i<this.meshes.length; i++){
            
            //const time = Date.now();
            //const looptime = 2 * 1000;
            //const t = ( (time+(i*60.2)) % looptime ) / looptime;
            //const tt= ( ( time) % looptime ) / looptime;
            //console.log(tt);
            const frac = i / (this.meshes.length);
            const t = (this.inc + (i * frac) ) % 1.0; 

            this.tubeGeometry.parameters.path.getPointAt( t, this.position );
            this.position.multiplyScalar( 1 );
            
            const segments = this.tubeGeometry.tangents.length;
            
            //const pickt = (t + (i*frac)) * segments;
            const pickt = (t) * segments;
            const pick = Math.floor( pickt );
            const pickNext = ( pick + 1 ) % segments;
    
            this.binormal.subVectors( this.tubeGeometry.binormals[ pickNext ], this.tubeGeometry.binormals[ pick ] );
            this.binormal.multiplyScalar( pickt - pick ).add( this.tubeGeometry.binormals[ pick ] );
    
            this.tubeGeometry.parameters.path.getTangentAt( t, this.direction );
            const offset = 0;
    
            this.normal.copy( this.binormal ).cross( this.direction );
    
            // we move on a offset on its binormal
    
            this.position.add( this.normal.clone().multiplyScalar( offset ) );
    
            this.meshes[i].position.copy( this.position );
            //cameraEye.position.copy( position );
    
            // using arclength for stablization in look ahead
    
            this.tubeGeometry.parameters.path.getPointAt( ( t + 30 / this.tubeGeometry.parameters.path.getLength() ) % 1, this.lookAt );
            this.lookAt.multiplyScalar( 1 );
    
            // camera orientation 2 - up orientation via normal
    
            this.lookAt.copy( this.position ).add( this.direction );
            
            this.meshes[i].matrix.lookAt( this.meshes[i].position, this.lookAt, this.normal );
            this.meshes[i].quaternion.setFromRotationMatrix( this.meshes[i].matrix );
        }
    }

}
export { SplineAnimation };
