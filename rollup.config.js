import path from "path";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import alias from "rollup-plugin-alias";
import commonjs from "rollup-plugin-commonjs";

const aliases = {
  entries: {
    find: "helpers",
    replacement: path.resolve(__dirname, "helpers"),
  },
};

const postcssOptions = () => ({
  extensions: [".scss", ".sass"],
  extract: false,
  minimize: true,
  use: [
    [
      "sass",
      {
        includePaths: ["./node_modules"],
      },
    ],
  ],
});

export default {
  input: path.resolve(__dirname, "packages/index.js"),
  output: [
    {
      file: path.resolve(__dirname, "dist/index.js"),
      format: "esm",
      name: "mdtest",
      sourcemap: "inline",
    },
  ],
  plugins: [
    alias(aliases),
    svelte({
      hydratable: true,
    }),
    resolve(),
    commonjs(),
    postcss(postcssOptions()),
  ],
};
