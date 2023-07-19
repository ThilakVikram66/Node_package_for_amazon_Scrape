

let arr = [1,2,3,4,5,6,7,8,9,10,11];
detail_test(arr,5);

function detail_test(arr,limit){
    let trun = Math.trunc(arr.length/limit);
    let act_lim = (arr.length/limit);
    let value = act_lim%trun==0?trun:trun+1;

    for(let i = 0;i<value;i++)
    {
        j=i*limit;
        jl= j+limit;
        for(j;j<jl&&j<arr.length;j++)
        {
            console.log(j);
        }
    }
}