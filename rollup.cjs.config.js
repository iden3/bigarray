import fs from "fs";
import { builtinModules as builtin } from "module";

const pkg = JSON.parse(fs.readFileSync("./package.json"));

export default {
    input: "./src/bigarray.js",
    output: {
        file: "build/main.cjs",
        format: "cjs",
        exports: "default",
    },
    external: [
        ...Object.keys(pkg.dependencies),
        ...builtin,
    ]
};
