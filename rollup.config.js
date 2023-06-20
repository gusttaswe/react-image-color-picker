import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const pkg = require('./package.json')

export default {
  input: 'src/index.tsx',
  external: ['styled-components'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    postcss({
      extract: true, // Extract CSS to a separate file
      minimize: true, // Minify the CSS
      modules: true,
      plugins: [autoprefixer()] // Add any additional PostCSS plugins
    })
  ]
}
