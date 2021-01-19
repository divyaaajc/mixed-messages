const animals = ['Panda', 'Cat', 'Shark', 'Koala', 'Tiger', 'Polar Bear', 'Penguin', 'Duck', 'Turtle'];

const randNum = Math.floor(Math.random()*animals.length);  

const randAnimal = animals[randNum];

let fact = '';

switch (randAnimal) {
    case 'Panda':
        fact = 'pandas have five fingers and an opposable pseudo-thumb (actually an enlarged wrist bone), used to hold bamboo while eating!';
        break;
    case 'Cat':
        fact = 'the richest cat in the world was called Blackie. His owner passed away and left $7million pounds for him to enjoy!';
        break;
    case 'Shark':
        fact = 'accrording to fossil scales in the US and Australia, the first sharks appeared in the ocean at around 455 million years ago!!';
        break;
    case 'Koala':
        fact = 'koalas sleep up to 17 hours a day! This is because eucalyptus leaves are low in nutrients and they need to conserve their energy.';
        break;
    case 'Tiger':
        fact = 'no two tigers have the exact same stripes on their coat. They are all unique!';
        break;
    case 'Polar Bear':
        fact = 'polar bear skin is actually black! Their fur is translucent and so appears white because if reflects light.';
        break;
    case 'Penguin':
        fact = 'penguins are super swimmers and impressive divers. They can reach depths of over 500m and stay under water for up to 22 minutes!';
        break;
    case 'Duck':
        fact = 'ducks have highly waterproof feathers. Even when they dive underwater, even their downy underlayer of feathers next to their skin remain dry.';
        break;
    case 'Turtle':
        fact = 'the oldest turtle that has ever lived was called Tu"i Malila, who passed away at 188!';
        break;
};

console.log(`Your animal is ${randAnimal}. Did you know ${fact}.`)
