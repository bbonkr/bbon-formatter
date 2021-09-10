import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['react', 'react-dom', 'dayjs'];

process.env.BABEL_ENV = 'production';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve({ extensions }),
        babel({
            exclude: /node_modules/,
            babelHelpers: 'runtime',
        }),
        commonjs({
            include: /node_modules/,
        }),
        typescript({
            tsconfig: 'tsconfig.json',
            useTsconfigDeclarationDir: false,
            declarationDir: 'dist',
            clean: true,
            // verbosity: 3,
        }),
        peerDepsExternal(),
    ],
    external,
};

export default config;
