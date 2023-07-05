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
      interop: 'compat'
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
      interop: 'compat'
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
