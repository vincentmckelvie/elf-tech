import bpy
from bpy import context

obj = context.active_object

num = 1
st = "import * as THREE from '../build/three.module.js';"; 
st+= "const spline"+str(num)+" = new THREE.CatmullRomCurve3(["

#v = obj.data.vertices[0]
for i in range(0,len(obj.data.vertices)):
    v = obj.data.vertices[i]
    co = v.co
    st += "new THREE.Vector3("+str(co[0])+", "+str(co[2])+", "+str(co[1])+"),"

st += "]);"
st += "export {spline"+str(num)+"}"
text_file = open("E:\Sites\elf-tech\src\extras\spline"+str(num)+".js", "w")
text_file.write(st)
text_file.close()
    