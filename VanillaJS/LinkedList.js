class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList{
    constructor(value){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    append(data){
        const node = new Node(data)

        if(this.head===null){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    prepend(data){ // adding node in the beginning of the LL
        const node = new Node(data)
        if(this.head===null){
            this.head = node
            this.tail = node
        }else{
            this.head.next = node;
            this.head = node;
        }
        this.size++
    }

    get(index){
        if(index < 0 || index >= this.size){
            return null;
        }else{
            let current = this.head;
            for(let i = 0;i<index;i++){
                current = current.next;
            }
            return current;
        }
    }

    remove(index){
        if(index < 0 || index >= this.size){
            return null;
        }
    }
}