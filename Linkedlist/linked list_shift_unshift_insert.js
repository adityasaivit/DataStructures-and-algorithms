class node{
    constructor(val)
    {
        this.val=val;
        this.next=null;
    }
}


class singleLinked
{
    constructor()
    {
        this.head=null;
        this.tail=null;
    }

    push(n){
        if(!this.head) {this.head=new node(n);this.tail=this.head}
        else{ this.tail.next=new node(n);this.tail=this.tail.next}
    }

    pop(){
        if(!this.head){return undefined}
        else{
            let temp=this.head;
            let newtail=temp
            while(temp.next)
            {
                newtail=temp
                temp=temp.next;

            }
            console.log(`popped ${temp.val}`)
            newtail.next=null;
            
        }
    }

    traverse(){let curr=this.head;while(curr){console.log(curr.val);curr=curr.next;}}

    shift(){
        console.log(`shift value ${this.head.val}`);this.head=this.head.next;
    }
    
    unshift(n){let newnode=new node(n);newnode.next=this.head;this.head=newnode;}

    insert(p,v){let newnode=new node(v);let curr=this.head; for(let i=1;i<=p-2;i++){curr=curr.next;} newnode.next=curr.next;curr.next=newnode;}

   


}

lis=new singleLinked()

lis.push(1)
lis.push(2)
lis.push(3)
lis.push(4)
lis.push(5)
lis.push(6)
lis.traverse();
lis.pop()
lis.traverse();

lis.shift()
lis.traverse();
console.log("unshifting in libkedlist:")
lis.unshift(1)
lis.traverse()
console.log("insertion")

lis.insert(3,9)
lis.traverse()




// console.log(lis.tail.val)
