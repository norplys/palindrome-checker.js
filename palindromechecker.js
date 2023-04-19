function palindrome(str) {
    let filter = str.replace(/[^a-zA-Z0-9/]/gi,"");
    console.log(filter);
    return filter.toLowerCase().split("").reverse()
    .join("") === filter.toLowerCase();
 
 }
 
 console.log(palindrome("0_0 (: /-\ :) 0-0"));