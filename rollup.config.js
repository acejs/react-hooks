import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'esm',
    },
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  external: ['react'],
  plugins: [
    typescript({ tsconfig: './scripts/tsconfig/tsconfig.prod.json' }),
    terser(),
  ],
}
