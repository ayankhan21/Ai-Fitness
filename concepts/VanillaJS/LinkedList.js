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

    append(data){ // adding node in the end of LL
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

    add(index){
        if(index < 0 || index > this.size){
            return null;
        }else{
            const node = new Node()
            let current = this.head;

            if(this.head === null){
                this.head = node;
                this.tail = node;
            }            
            else{
                let prev = null;
                for(let i = 0;i<index;i++){
                    prev = current;
                    current = current.next;
                }
                prev.next = node;
                node.next = current;
            }
        }
        this.size++;
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
        let current = this.head;

        if(index === 0){ // beginning of the LL
            this.head = current.next;
            if(this.size === 1 ){
                this.tail = null;
            }
        }else{ // Anywhere in between
            let prev = null;
            for(let i = 0;i<index;i++){
                prev = current; // traversing 2 nodes at a time
                current = current.next;
            }
            prev.next = current.next; // connect prev to node ahead of current
        }

        if(index == this.size -1){ // Ending of the LL
            this.tail = null; // change tail to null
        } 

        this.size--;
        return current.data;
    }
}

const list1 = new linkedList(35);
list1.append(45)
list1.append(46)
list1.append(47)
list1.append(48)
console.log(list1.head,list1.tail)
list1.remove(2)
list1.append(55)
list1.append(55)
list1.append(55)
list1.append(55)
list1.append(55)
list1.append(55)
list1.append(55)
list1.prepend(67)
console.log(list1.size)

