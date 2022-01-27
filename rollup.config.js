import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import {terser} from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");
import babel from 'rollup-plugin-babel';

export default {
  input: "src/index.ts",

  output: [
    {
      name: 'comlib',
      sourcemap: true,
      file: './dist/index.js',
      format: 'umd',
      globals: { react: 'React' },
    },
  ],

  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [autoprefixer()],
      extract: false,
      modules: true,
    }),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser()
  ],

  external: ['react', 'react-dom'],
};