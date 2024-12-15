
function merge(first,second)
{
	let res=[]
	while(first.length && second.length)
	{
		if(first[0]<second[0])
		{
			res.push(first[0]);
			first.shift();
		}
		else{
			res.push(second[0])
			second.shift();
		}
	}

	return res.concat(first,second);	
}
function mergesort(arr)
{
	let l=arr.length;
	let mid=Math.floor(l/2);
	if(l<2)
	{
		return arr
	}
	let first=mergesort(arr.slice(0,mid));
	let second=mergesort(arr.slice(mid));

	return merge(first,second);
}

arr=[4,5,2,1,9,6]

console.log(mergesort(arr))
