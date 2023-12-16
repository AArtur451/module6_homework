function sum(a,b){
    let current = a;
    const intervalId = setInterval(function(){
        console.log(current);
        if(current === b){
            clearInterval(intervalId);
        }
        current++;
    },1000);
}

sum(5,15);