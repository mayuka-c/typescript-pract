"use strict";
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `My age: ${this.age}`;
    }
}
class GoDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const obj1 = new Coder('Potter', 'Rock', 42, 'Eng');
console.log(obj1.getAge()); // My age: 42
const goDev1 = new GoDev('Mac', 'Alex', 'Hip', 32);
console.log(goDev1.getLang()); // I write Typescript
// Implements interface Musician
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('drums')); // Jimmy drums the guitar
/////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Alec = new Peeps('Alec');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count); // 3
console.log(Steve.id); // 2
/////////////////////////////////////
// Getters/Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Neil Young', 'Led Zep'];
console.log(myBands.data); // (2) ['Neil Young', 'Led Zep']
myBands.data = [...myBands.data, 'ZZ Top'];
console.log(myBands.data); // (3) ['Neil Young', 'Led Zep', 'ZZ Top']
