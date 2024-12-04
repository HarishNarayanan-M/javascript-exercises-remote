const removeFromArray = function(array,...values) {
    for(i=0;i<array.length;i++){
        for(j=0;j<values.length;j++){
            if(array[i]===values[j]){
                array.splice(i,1);
                i=0;
                j=0;
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
