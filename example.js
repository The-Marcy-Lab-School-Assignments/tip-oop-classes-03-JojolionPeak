//
class Door {
    constructor(material, size, num){
        this.material = material
        this.size = size
        this.num = num
    }

    open(){
        return `The door swings open`
    }

    getSize(){
        return `The door is ${this.size} tall.`
    }
}

class WoodenDoor extends Door {
    constructor(size, num){
        super(size, num)
        this.material = `wood`
    }

    open(){
        return `${super.open()} with a creak`
    }

    knock(number){
        return `Knocked on the door, ${number} time(s)`
    }
}

class GlassDoor extends Door {
    constructor(size, num){
        super(size, num)
        this.material = `glass`
        this.isSeeThrough = true
    }

    open(){
        return `Carefully opened the door(s)`
    }

    peekThrough(){
        return `Looking through the glass`
    }

    knock(){
        return `Please don't do that.`
    }
}

const door1 = new Door(`stone`, `7 feet`, 2)
console.log(door1.open())
console.log(door1.getSize())
const door2 = new WoodenDoor(`7 feet`, 2)
console.log(door2.open())
console.log(door2.knock(5))
console.log(door2.getSize())
const door3 = new GlassDoor(`7 feet`, 1)
console.log(door3.open())
console.log(door3.knock())
console.log(door3.peekThrough())
console.log(door3.getSize())
