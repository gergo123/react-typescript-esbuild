const autoprefixer = require("autoprefixer");
const tailwind = require('tailwindcss')
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");
const glob = require('tiny-glob');

const isInWatchMode = process.argv.includes("--watch");
const watch = isInWatchMode && {
    onRebuild(error, result) {
        if (error) console.error('watch build failed:', error)
        else console.log('watch build succeeded:', result)
    },
};

(async () => {
    try {
        let files = await glob('src/components/*.tsx');

        await require("esbuild")
            .build({
                entryPoints: files,
                nodePaths: ['src'],
                bundle: true,
                outdir: 'bundles/',
                watch: watch,
                minify: !isInWatchMode,
                plugins: [
                    postCssPlugin({
                        plugins: [autoprefixer, tailwind],
                    }),
                ],
            });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();