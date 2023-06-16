import bpy
from bpy import context

obj = context.active_object

num = 0
st = "import * as THREE from '../build/three.module.js';"; 
st+= "const splinePiano"+str(num)+" = new THREE.CatmullRomCurve3(["

#v = obj.data.vertices[0]
for i in range(0,len(obj.data.vertices)):
    v = obj.data.vertices[i]
    co = v.co
    st += "new THREE.Vector3("+str(co[0])+", "+ str(co[2])+", "+str(-co[1])+"),"

st += "]);"
st += "export {splineWhite"+str(num)+"}"
text_file = open("E:\Sites\elf-tech\src\extras\pianoSpline"+str(num)+".js", "w")
text_file.write(st)
text_file.close()
    