let root = {};

if (ctx && ctx.data && ctx.data.root && ctx.data.root.input !== undefined) {
    root.source = ctx.data.root.input;
} else {
    console.error("Required data structure is missing or invalid.");
}

console.log(root.source); // Output: "some value" or error message
