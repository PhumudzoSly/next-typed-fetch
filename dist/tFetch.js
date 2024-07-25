"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Check if we are in a Node.js environment
const isNode = typeof window === "undefined";
// Conditionally import `node-fetch` in a Node.js environment
let fetchFunction;
if (isNode) {
    fetchFunction = require("node-fetch");
}
else {
    fetchFunction = fetch;
}
function tFetch(input, init) {
    return fetchFunction(input, init);
}
exports.default = tFetch;
