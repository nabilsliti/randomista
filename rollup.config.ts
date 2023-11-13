import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

function onwarn(warning) {
    if (warning.code !== 'CIRCULAR_DEPENDENCY') {
        console.error(`(!) ${ warning.message }`);
    }
}

const config = {
    input: 'dist/esm/index.js',
    output: {
        file: 'dist/browser/randomista.js',
        format: 'esm',
        name: 'randomista',
    },
    context: 'window',
    plugins: [ json(), nodeResolve(), terser(), commonjs() ],
    onwarn,
};
export default config;
