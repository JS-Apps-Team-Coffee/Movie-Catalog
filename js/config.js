console.log("in config.js");
System.config({
    transpiler: "babel",
    babelOptions: {
        optional: [
            "runtime"
        ]
    },
    map: {
        babel: '../node_modules/babel-core/browser.min.js'
    }
});