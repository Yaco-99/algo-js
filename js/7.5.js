let arr=[4,6,10,1,2,13];
let stop = false;
do{
    stop=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            stop=true;
        }
    }
}while(stop);
console.log(arr);