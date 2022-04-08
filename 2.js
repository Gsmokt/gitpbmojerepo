'use strict';
class CheckPalindrome{
   constructor(str){
      this.str = str;
   }
   longestPalindrome(str = this.str){
      if(str.length < 3) return;
      let palindrome = '';
      const b = [...str].reverse().join("");
      const longestPalindrome =  [...str].flatMap((_,ind,array) => array.map((_,i) => {
          if(i < str.length - (2+ind)){        
          const word = str.slice(i,i+ind+3);
          palindrome = b.includes(word) && array.slice(i,i+ind+3).reverse().join("") === word ? word : palindrome;
      }
          return palindrome;
      }))
      return longestPalindrome[longestPalindrome.length - 1];
   }
}

const check = new CheckPalindrome('karakis').longestPalindrome();
console.log(check);

'baerren'
'kajak'
'inni'
'sedes'
 






