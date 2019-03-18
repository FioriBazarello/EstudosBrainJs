const { NeuralNetwork } = require('brain.js');

const net = new NeuralNetwork({
    hiddenLayers: [3],
});

const data = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];

net.train(data, {
    log: (err) => console.log(err),
    logPeriod: 1000,
});

console.log(net.run([0, 0]));