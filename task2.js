function oddExpo(value)
{
    let result = 1;
    for(let i = 1; i<=value; i+=2) {
        result *= i;
    }
    return result;
}

function twoNPlusOne(n){
    return 2*n+1;
}

let sizeOfWord = 65535;

let stop = true;
let n = 0;

do{
    if (oddExpo(twoNPlusOne(n+1)) <= sizeOfWord){
        n++
    }else{
        stop = false;
    }
}while(stop);

console.info("result: " + n);