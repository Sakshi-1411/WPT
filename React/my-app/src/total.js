//here props are DEstructed

function total({nums})
{
    let addition = 0;

    //let num=props.nums
    for(let i=0;i<nums.length;i++)
    {
        addition+=nums[i]
    }

    return(
        <p>Total = {addition}</p>
    )
}

export default total