// fsh_blue.glsl.ts
// Fragment shader program 
// fsh_default - texture map
const blue_uniforms = {
    tDiffuse: { type: 't', value: null },
    uTime: { type: 'f', value: 0.0 },
    uAspect: { type: 'f', value: 1.0 },
    uResolution: { type: 'v2', value: null }
};
const blue_fsh = `
      #ifdef GL_ES
      precision mediump float;
      #endif
      uniform sampler2D tDiffuse; 
      uniform float uTime; 
      uniform float uAspect; 
      uniform vec2 uResolution;
      varying vec2 vuv;
      int i = 0;

      void main() {

        // paint
        //gl_FragColor = texture2D(tDiffuse, vuv); 
        gl_FragColor = vec4(0.0,0.0,1.0,1.0); 
      }`;
export { blue_fsh, blue_uniforms };
//# sourceMappingURL=fsh_blue.glsl.js.map