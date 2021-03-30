#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel').default;
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');

const currentWorkingPath = process.cwd();
// eslint-disable-next-line import/no-dynamic-require
const { src, name } = require(path.join(currentWorkingPath, 'package.json'));

const inputPath = path.join(currentWorkingPath, src);

// console.log('postcss', postcss);

// Little workaround to get package name without scope
const fileName = name.replace('@cddev/', '');

// see below for details on the options
const inputOptions = {
  input: inputPath,
  external: ['react'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      // Key configuration
      modules: true,
      sourceMap: true,
      extract: true,
      minimize: true,
      extensions: ['.css', '.less'],
    }),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
};

const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: 'cjs',
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: 'esm',
  },
];

async function build() {
  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
