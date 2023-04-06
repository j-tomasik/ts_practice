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
//use return type /void for functions that dont return a value
function pow(x:number, y:number):string {
    return Math.pow(x, y).toString();
}

const arr1: number[] = []

arr1.push(1)

//tuples
//fixed length arr where each item has its own type
//ts will expect the tuple to be initalized with these vals inside, avoid this
//error message by making them optional in the decloration with ?
type MyList = [number?, string?, boolean?]

const arr2: MyList = []

arr2.push(1)
arr2.push('23')
arr2.push(false)