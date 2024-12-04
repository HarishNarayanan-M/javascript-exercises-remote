const sumAll = function(first,last) {
    let sum=0;
    if(first<0||last<0||!Number.isInteger(first)||!Number.isInteger(last)){
        sum="ERROR"
    }
    else if(first<last){
    for(i=first;i<=last;i++){
        sum+=i;
    }
    }
    else{
    for(i=last;i<=first;i++){
        sum+=i;
    }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
