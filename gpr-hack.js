// More info about this file: https://github.com/actions/setup-node/issues/269

const { writeFileSync, readFileSync } = require("fs");

const file = readFileSync("./package.json", {
    encoding: "utf-8",
});

const json = JSON.parse(file);

json.name = "@rasimandiran/react-file-trap";

writeFileSync("./package.json", JSON.stringify(json, undefined, 2));