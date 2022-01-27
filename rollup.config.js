import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
// import dts from "rollup-plugin-dts";
// import {terser} from 'rollup-plugin-terser';
// import autoprefixer from 'autoprefixer';
import peerDepsExternal from "rollup-plugin-peer-deps-external";

// const packageJson = require("./package.json");

// export default [
//   {
//     // preserveModules: true,
//     input: "src/index.ts",
//     output: [
//       {
//         file: packageJson.main,
//         format: "cjs",
//         sourcemap: true,
//       },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: "./tsconfig.json" }),
//       postcss({
//         extract: false,
//         modules: true,
//         plugins: [autoprefixer()],
//       }),
//       terser()
//     ],
//   },
//   {
//     input: "dist/esm/types/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//     external: [/\.(css)$/],
//   },
// ];

// rollup.config.js
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
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],

  external: ['react', 'react-dom'],
};