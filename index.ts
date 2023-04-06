import * as _ from 'lodash';

console.log('hello world')

const url = new URL('...')

async function hello(){
    return 'world'
}

type Style = 'bold' | 'italic' | 23;

let font: Style;

interface Person {
    fist: string;
    last: string;
    [key: string]: any;
}