class stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    length(){
        return this.items.length
    }

    allItems(){
        return this.items
    }
}

const newStack = new stack()
newStack.push(100)
newStack.push(900)
newStack.push(800)
newStack.push(700)
newStack.push(600)
newStack.pop()
// newStack.pop()
console.log(newStack.peek()) 
console.log(newStack.items)
// console.log(newStack.items())

