// rmkeymap.ts - dolly x,y,z; rotate-examine via keys
// singleton closure-instance variable
let rmkeymap, eye, //current rmquad fsh eye = vec3(uEyeX,uEyeY,uEyeZ)
eyeX, //link to rmquad.material.uniforms.uEyeX
eyeY, //link to rmquad.material.uniforms.uEyeY
eyeZ, //link to rmquad.material.uniforms.uEyeZ
initialEye, rmquad, linked = false;
class Rmkeymap {
    constructor() {
    }
    static create() {
        if (rmkeymap === undefined) {
            rmkeymap = new Rmkeymap();
        }
    }
    // start key-listening and identify controlTarget and optional dolly spped
    // typically controlTarget is rmscene, but can be individual actor for exp.
    start(narrative, speed = 0.01) {
        speed = 0.1;
        eye = new THREE.Vector3();
        console.log(`\n\nrmkeymap.start !!!! speed = ${speed}`);
        //keymap
        document.addEventListener('keydown', (e) => {
            //console.log(`key pressed is ${e.key}`); 
            //initialy linked is false
            //if rmquad and rmquad.mat.unif.uEyeZ exist - set linked=true
            //linked=true enables rmkeymap to act on uEye via keyboard
            if (linked === false) {
                console.log(`linked = ${linked}`);
                rmquad = narrative.findActor('rmquad');
                //linked? true => set initialEye and currentEye
                if (rmquad && rmquad.material.uniforms.uEyeZ) {
                    linked = true;
                    console.log(`linked = true !!!!!!!!!!!!!!!`);
                    //rmquad.material.uniforms.uEye = uEye;
                    eyeX = rmquad.material.uniforms.uEyeX;
                    eyeY = rmquad.material.uniforms.uEyeY;
                    eyeZ = rmquad.material.uniforms.uEyeZ;
                    //eye.x = rmquad.material.uniforms.uEyeX.value;
                    //eye.y = rmquad.material.uniforms.uEyeY.value;
                    //eye.z = rmquad.material.uniforms.uEyeZ.value;
                    eye = new THREE.Vector3(eyeX.value, eyeY.value, eyeZ.value);
                    initialEye = eye;
                    console.log(`current eyeX = ${eyeX.value}`); //Object.value
                    console.dir(eyeX);
                    console.log(`current eyeY = ${eyeY.value}`);
                    console.dir(eyeY);
                    console.log(`current eyeZ = ${eyeZ.value}`);
                    console.dir(eyeZ);
                    console.log(`initialEye.x = ${initialEye.x}`);
                    console.log(`initialEye.y = ${initialEye.y}`);
                    console.log(`initialEye.z = ${initialEye.z}`);
                    console.log(`+++ rmkeymap LINKED to fsh: speed = ${speed}:`);
                }
                else {
                    console.log(`rmkeymap NOT LINKED to fragment shader - no rmquad, or normquad.material.uniforms.uEye !!`);
                }
            }
            if (linked) {
                console.log(`key pressed is space ${e.key}`);
                switch (e.keyCode) {
                    // HOME = SPACEBAR - DOERSN'T WORK ?!!!!!!!!
                    //                case 32:
                    //                  //SHIFT => restore currentEye.xy ONLY
                    //                  if (e.shiftKey) { 
                    //                    eyeX = 0.0;  
                    //                    eyeY = 0.0;  
                    //                  }else { 
                    //                    eyeX = 0.0;  
                    //                    eyeY = 0.0;  
                    //                    eyeZ = 1000.;  
                    //                  }
                    //                  break;
                    // move fwd/backward i.e. negZ/posZ
                    case 90:
                        console.log(`key pressed is ${e.key} z/Z`);
                        if (e.shiftKey) {
                            eye.z += speed; //BACK +Z
                        }
                        else {
                            eye.z -= speed; //FWD -Z
                        }
                        eyeZ.value = eye.z;
                        break;
                    // DOLLY-X - L/R arrows
                    // left arrow - LEFT X-         
                    case 37:
                        //console.log(`key pressed is ${e.key} LEFT-ARROW`);  
                        if (e.shiftKey) {
                            eye.x -= speed * 10.; //LEFT -X FAST
                        }
                        else {
                            eye.x -= speed; //LEFT -X
                        }
                        eyeX.value = eye.x;
                        break;
                    // right arrow - RIGHT X+
                    case 39:
                        //console.log(`key pressed is ${e.key} RIGHT-ARROW`);  
                        if (e.shiftKey) {
                            eye.x += speed * 10.; //RIGHT +X FAST
                        }
                        else {
                            eye.x += speed; //RIGHT -X
                        }
                        eyeX.value = eye.x;
                        break;
                    // DOLLY-Y - up/down arrows
                    // down arrow - -Y          
                    case 38:
                        //console.log(`key pressed is ${e.key} UP-ARROW`); 
                        if (e.shiftKey) {
                            eye.y -= speed * 10.; //DOWN -Y FAST
                        }
                        else {
                            eye.y -= speed; //DOWN -Y
                        }
                        eyeY.value = eye.y;
                        break;
                    // up arrow - UP Y+          
                    case 40:
                        //console.log(`key pressed is ${e.key} DOWN-ARROW`); 
                        if (e.shiftKey) {
                            eye.y += speed * 10.; //UP +Y FAST
                        }
                        else {
                            eye.y += speed; //UP +Y
                        }
                        eyeY.value = eye.y;
                        break;
                    default:
                        console.log(`key '${e.keyCode}' not associated with //c3d function`);
                }
            } //if-linked
        }); //keydown
    } //start
}
//enforce singleton
Rmkeymap.create();
export { rmkeymap };
//# sourceMappingURL=rmkeymap.js.map
//# sourceMappingURL=rmkeymap-basic.js.map