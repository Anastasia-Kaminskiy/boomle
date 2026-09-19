import * as esbuild from 'esbuild';

const logRebuildPlugin = {
  name: 'log-rebuild',
  setup(build) {
    build.onEnd((result) => {
      if (result.errors.length > 0) {
        console.log(`❌ Build failed with ${result.errors.length} errors.`);
      } else {
        console.clear();
        console.log(`⚡  Files updated. Build successful!`);
      }
    });
  },
};

const ctx = await esbuild.context({
  entryPoints: ['src/popup.jsx'],
  
  bundle: true,
  
  outdir: 'dist', 
//   minify: true,
  
  platform: 'browser',
  plugins: [logRebuildPlugin],
});

await ctx.watch();
console.log('👀 started stalking your repo...');