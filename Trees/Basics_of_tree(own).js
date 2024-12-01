// this file consost of the basic application of the tree datastructure 

// it also contains the basic tree traversals like preorder,inorder,postorder

// search method

class node{
    constructor(val)
    {
        this.val=val
        this.left=null
        this.right=null
    }
}

class Tree{
    constructor()
    {
        this.root=null
    }

    addnode(val)
    {

        let temp=this.root
        if(!this.root)
        {
            this.root=new node(val)
            return;
        }
        else{
            while(true)
            {
                
                if(val<temp.val)
                {
                    if(temp.left==null)
                    {
                        temp.left=new node(val)
                        break;
                    }
                    else{
                        temp=temp.left;
                    }
                }
                else{
                    if(!temp.right)
                    {
                        temp.right=new node(val)
                        break
                    }
                    else{
                        temp=temp.right
                    }
                }


            }
        } 
    }

    

   
}


function preorder(root)
{
    if(root)
    {
        preorder(root.left)
        
        preorder(root.right)
        console.log(root.val)
    }
}


function inorder(root)
{
    if(root)
    {
        inorder(root.left)
        console.log(root.val)
        inorder(root.right)

    }

}

function postorder(root)
{
    if(root)
    {
        console.log(root.val)
        postorder(root.left)
        postorder(root.right)

    }
}

function search(root,val)
{
    if(root)
    {
        if(root.val=val)
        {
            console.log("found")
            return;
        }
        search(root.left)
        search(root.right)

    }
}



tr=new Tree()
tr.addnode(5)
tr.addnode(4)
tr.addnode(6)
preorder(tr.root)
console.log("\n\ninorder:")
inorder(tr.root)
console.log("\n\npostorder:")
postorder(tr.root)

console.log("\n\n search for 6:")
search(tr.root,6)
