import SuperPerson from './person';

const Stanley = new SuperPerson('Stanley', 'Invicibility');
const Brooke = new SuperPerson('Brooke', 'Reading Minds');


Stanley.greet;
Brooke.greet;
// Stanley.talk(`Shoots bro`);
// Brooke.talk(`It's Aloha Friday`);

Stanley.saySuperPower();
Brooke.saySuperPower();