import path from 'path'
import buble from 'rollup-plugin-buble'
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import replace from 'rollup-plugin-replace'
import flow from'rollup-plugin-flow-no-whitespace'
import vue from 'rollup-plugin-vue2'
import { nodeResolve } from '@rollup/plugin-node-resolve';

const aliaResolve = p => path.resolve(__dirname, './', p)

const aliases = {
  vue: aliaResolve('src/platforms/web/entry-runtime-with-compiler'),
  he: aliaResolve('src/compiler/parser/entity-decoder'),
  compiler: aliaResolve('src/compiler'),
  core: aliaResolve('src/core'),
  shared: aliaResolve('src/shared'),
  web: aliaResolve('src/platforms/web'),
  server: aliaResolve('src/server'),
  entries: aliaResolve('src/entries'),
  sfc: aliaResolve('src/sfc')
}

// process.env.NODE_ENV = 'development';

const PORT = 8888;
const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.join('public', 'index.html');
const devUrl = `${devSite}/${devPath}`;

const resolveFile = function(filePath) {
  return path.join(__dirname, '.', filePath)
}

const babelOptions = {
  "presets": [
    "@babel/preset-flow"
  ],
  "plugins": ["@babel/plugin-syntax-jsx", "syntax-dynamic-import"]
}

setTimeout(()=>{
  console.log(`[dev]: ${devUrl}`)
}, 1000);

/* es 以mjs 方式引入，热更新未生效 */
export default {
  input: resolveFile('examples/main.js'),
  output: {
    format: 'umd',
    file: resolveFile('public/main.js'),
    name: 'APP'
  },
  plugins: [
    vue(),
    flow(),
    commonjs(),
    alias({
      entries: aliases,
    }),
    nodeResolve(),
    
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' ),
      __WEEX__: false,
      __WEEX_VERSION__: 'weexVersion',
      __VERSION__: 'version'
    }),
    buble(),
    babel(babelOptions),
    livereload(),
    serve({
      open: true,
      port: PORT,
      openPage: '/public/index.html',
      contentBase: ''
    })
  ]
};