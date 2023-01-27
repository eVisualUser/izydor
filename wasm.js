// Load the .wasm file
WebAssembly.instantiateStreaming(fetch('client.wasm'))
  .then(obj => {
    // Call the main function from the .wasm module
    obj.instance.exports.main();
});
