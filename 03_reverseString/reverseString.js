const reverseString = function(word) {
    let real=word.split("");
    let reverse=[];
    for(i=1;i<=word.length;i++){
        reverse[i-1]=real[word.length-i];
    }
    result=reverse.join("");
    return result
};

// Do not edit below this line
module.exports = reverseString;
