import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'
import pkg from './package.json'

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    }
  ],
  plugins: [
    external(),
    terser(),
    babel({
      exclude: ['node_modules/**'],
      babelHelpers: 'bundled'
    }),
    typescript({
      tsconfig: './tsconfig.json'
    })
  ],
  external: ['styled-components']
}
