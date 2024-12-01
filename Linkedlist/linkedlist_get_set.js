class node{
    constructor(val)
    {
        this.val=val
        this.next=null
    }
}

class linkedlist{
    constructor()
    {
        this.head=null
        this.tail=null
        this.length=0;
    }

    push(v)
    {
        if(!this.head)
        {
            this.head=new node(v)
            this.tail=this.head
        }
        else{
            this.tail.next=new node(v)
            this.tail=this.tail.next
            
        }
        this.length=this.length+1


    }

    pop()
    {
        if(!this.head)
        {
            return undefined
        }
        else{
            let temp=this.head
            while(temp.next.next!=null)
            {
                temp=temp.next
            }
            temp.next=null
            this.tail=temp
            this.length=this.length-1
            if(this.length==0)
                {
                    this.head=null
                    this.tail=null
                }

        }


    }

    shift()
    {
        if(!this.head)
        {
            return undefined

        }
        else{
            this.head=this.head.next;
        }

        this.length=this.length-1
        if(this.length==0)
        {
            this.head=null
            this.tail=null
        }
    }

    unshift(n)
    {
        let newnode=new node(n)
        if(!this.head)
        {
            this.head=new node(n)
            this.tail=this.head
        }
        else{
            newnode.next=this.head;
            this.head=newnode
        }

        this.length=this.length+1

    }

    traverse()
    {
       let temp=this.head

       while(temp)
       {
            console.log(temp.val)
            temp=temp.next
       }
        
    }

    get(i)
    {
        if(!this.head || i<0 || i>=this.length)
        {
            return undefined
        }
        
        let first=0
        let temp=this.head
        while(first!=i)
        {
            temp=temp.next
            first=first+1
        }
        console.log("get value is ")
        console.log(temp.val)
        return temp
    }

    set(i,val)
    {
        let temp=this.get(i)
        if(temp==undefined)
        {
            return undefined
        }
        else{
            temp.val=val;
        }
    }

    insertion(index,val)
    {
        if(index==0)
        {
            this.unshift(val)
            return true;
        }
        else if(index>this.length && index <0)
        {
            return false;
        }
        else{
            if(index==this.length)
            {
                this.push(val)
            }
            else{
                let temp=this.get(index-1)
                let curr=new node(val)
                curr.next=temp.next;
                temp.next=curr

                

            }
            return true;
        }
    }

    


}



lis=new linkedlist()
lis.push(1)
lis.push(2)
lis.push(3)
lis.push(4)



lis.traverse()

lis.get(3)

lis.set(3,5)

console.log("\n")
lis.traverse();

// it is the new perspective or method for inserting in the linked list

lis.insertion(2,10)

lis.traverse()
