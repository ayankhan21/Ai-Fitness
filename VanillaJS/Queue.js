class queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    front(){
        return this.items[0]
    }

    back(){
        return this.items[this.items.length-1]
    }

    allItems(){
        return this.items
    }
}

const newQueue = new queue()
newQueue.enqueue(32)
newQueue.enqueue(34)
newQueue.enqueue(36)
newQueue.dequeue()
console.log(newQueue.allItems())
