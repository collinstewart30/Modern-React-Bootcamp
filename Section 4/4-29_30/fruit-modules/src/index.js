import {choice, remove } from './helpers';
import foods from './food';

let fruit = choice(foods);
let remaining = remove(foods, fruit);

console.log('I would like one ' + fruit + ', please.');

console.log('Here you go: ' + fruit);

console.log('I am sorry we are all out. We have these foods left: ' + remaining);