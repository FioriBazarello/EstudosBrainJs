const { recurrent } = require('brain.js');

const data = [
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1]
];

const net = new recurrent.LSTMTimeStep();

net.train(data, {
    log: err => console.log(err),
});

console.log(net.run([1, 2, 3, 4]));
console.log(net.run([5, 4, 3, 2]));