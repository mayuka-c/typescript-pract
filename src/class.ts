class Coder {

    secondLang!: string // assertions

    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `My age: ${this.age}`
    }
}

class GoDev extends Coder {
    constructor(
        public computer: string, 
        name: string,
        music: string, 
        age: number, 
    ) {
        super(name, music, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}`
    }
}

const obj1 = new Coder('Potter', 'Rock', 42, 'Eng')
console.log(obj1.getAge()) // My age: 42

const goDev1 = new GoDev('Mac', 'Alex', 'Hip', 32)
console.log(goDev1.getLang()) // I write Typescript

/////////////////////////////////////////////
interface Musician {
    name: string
    instrument: string
    play(action: string): string
}

// Implements interface Musician
class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('drums')) // Jimmy drums the guitar

/////////////////////////////////////////////
class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const Alec = new Peeps('Alec')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count) // 3
console.log(Steve.id) // 2

/////////////////////////////////////
// Getters/Setters

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
        } else {
            throw new Error('Param is not an array of strings')
        }
    }
}

const myBands = new Bands()
myBands.data = ['Neil Young', 'Led Zep']
console.log(myBands.data) // (2) ['Neil Young', 'Led Zep']

myBands.data = [...myBands.data, 'ZZ Top']
console.log(myBands.data) // (3) ['Neil Young', 'Led Zep', 'ZZ Top']