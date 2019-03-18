const { NeuralNetwork } = require('brain.js');

const net = new NeuralNetwork({
    hiddenLayers: [3],
});

const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Railway": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

const data = [];

for (let restaurant in restaurants) {
    const day = restaurants[restaurant];
    data.push({
        input: { [day]: 1 },
        output: { [restaurant]: 1 },
    });
}

const stats = net.train(data);

// console.info(stats);
restaurantByDay('Friday');
restaurantByDay('Wednesday');
restaurantByDay('Sunday');

function restaurantByDay(day) {
    const result = net.run({ [day]: 1 });
    const sorted = Object.keys(result)
    .map((item, key) => ({ name: item, value: result[item] }))
    .sort((a, b) => (a.value >= b.value ? -1 : 1));
    console.log(sorted[0].name);
}