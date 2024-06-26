// fsh_violet.glsl.ts
// Fragment shader program 
// fsh_default - texture map
const violet_uniforms = {
    tDiffuse: { type: 't', value: null },
    uTime: { type: 'f', value: 0.0 },
    uAspect: { type: 'f', value: 1.0 },
    uResolution: { type: 'v2', value: null }
};
const violet_fsh = `
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
        gl_FragColor = vec4(1.0,0.0,1.0,1.0); 
      }`;
export { violet_fsh, violet_uniforms };
//# sourceMappingURL=fsh_violet.glsl.js.map