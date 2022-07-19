require("esbuild").build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: "node",
  format: "esm",
  target: "esnext",
  outfile: "dist/bundle.js",
  tsconfig: "tsconfig.json",
});
