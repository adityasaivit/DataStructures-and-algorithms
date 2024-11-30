// singly linked list

// compare with the objectives for the linkedlikst

// in array will have the indexes and we can retrive using the index

// but in linkedlist each element called node will be pointing to the next node

// we can figure out all the elements using head node 

// but linkedlist is very flexible dynamic size the addition and deletion is easy using linkedlist than in array

// singlylinkedlist will have only forword direction link but not in opposite direction

// only disadvantage with linkedlist it does not give you a random access of the elements

// if we add anything in array all the elements should be reindexed

// linkedlist is a collection of nodes


// it stores a data and reference to the next node


class node{
    constructor(val)
    {
        this.val=val;
        this.next=null;
    }
}


// var first=new node("hi")
// first.next=new node("aditya");
// first.next.next=new node("how are you")

// the above id not a good method of adding elements to the linkedlist


class singlyLinkedlist
{
    constructor()
    {
        this.length=0;
        this.tail=null;
        this.head=null;
    }

    push(n)
    {
        let temp=this.head

        if(!this.head)
        {
            this.head=new node(n)
            this.tail=this.head;
            this.length++;
            // this.tail=this.head;
        }
        else{
            this.tail.next=new node(n)
            this.tail=this.tail.next;
            this.length++;

        }
    }

    pop()
    {
        if(!this.head)
        {
            console.log("linked list is empty")
            return undefined;
        }

        let temp=this.head
        while(temp.next.next!=null)
        {
            temp=temp.next;
        }
        console.log("poppend is",temp.next.val)
        this.tail=temp
        this.tail.next=null

        this.length=this.length-1

        if(this.length==0)
        {
            this.head=null
            this.tail=null
        }
    }

    pop1()
    {
        if(!this.head) return undefined

        var curr=this.head;
        var newtail=curr

        while(current.next)
        {
            newtail=current
            current=current.next
        }

        this.tail=newtail
        this.tail.next=null

        this.length=this.length-1

        if(this.length)
        {
            this.head=null;
            this.tail=null;

        }

    }
    // here pop1 is more professional solution and pop() is my logic



    traverse()
    {
        let temp=this.head

        while(temp)
        {
            console.log(temp.val)
            temp=temp.next
        }
    }
}


function display(lis)
{
    let temp=lis.head

    while(temp!=null)
    {
        console.log(temp.val)
        temp=temp.next;
    }
    
}



let list=new singlyLinkedlist()

list.push("hi")
list.push("aditya")
list.push("how are you")

display(list)
// this is an external function 

console.log(list.length);

console.log("popping of element:")
list.pop()


console.log("display of the list:")
display(list)


console.log()

console.log("traverse of the list:")
list.traverse();
// this is an method inside the class

