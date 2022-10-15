//loop over 1-15
//if num is divisible by 3 log "fizz"
//if a num is divisible by 5 log "buzz"
//if divisible by both then log "fizzbuzz"
//else log "nope"

for(num=0; num<=15; num += 1){
    if(num % 3 === 0 && num % 5 === 0){
        console.log("fizzbuzz")

    }else if(num % 3 === 0 && num % 5 !== 0){
        console.log("fizz")

    }else if(num % 3 !== 0 && num % 5 === 0){
        console.log("buzz")
    
    }else{
        console.log("meh")
    }


}