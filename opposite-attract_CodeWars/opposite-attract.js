function lovefunc(flower1, flower2) {
    /* 1st approach
    if((flower1%2===0&&flower2%2!==0)||(flower2%2===0&&flower1%2!==0)){
    return true
    }
    return false
    
    //2nd approach
    return ((flower1%2===0&&flower2%2!==0)||(flower2%2===0&&flower1%2!==0)) */

    //more optimised
    return (flower1 % 2) !== (flower2 % 2);

}