import * as math from './math';
import { addToDom as atd } from './helpers';


console.log('Math', math);

atd('h1',`23 + 67 = ${math.add(23,67)}`);

atd('h1', `56-14 = ${math.subtract(56,14)}`);

atd('h1', `56 x 14 = ${math.multiply(56,14)}`);

atd('h1', `56/14 = ${math.divide(56,14)}`);

export default "this is just a string";