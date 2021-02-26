import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
import styles from 'rollup-plugin-styles'
import pkg from './package.json'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      modulesOnly: true,
      extensions: ['.mjs', '.js', '.jsx', '.json', '.scss'],
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    scss({ output: 'lib/styles.css' }),
    postcss({
      extract: true,
      modules: true,
      use: ['sass'],
    }),
    terser(),
    // copy({
    //   targets: [
    //     {
    //       src: './src/styles/index.scss',
    //       dest: 'lib',
    //       rename: 'styles.scss',
    //     },
    //   ],
    // }),
  ],
}
