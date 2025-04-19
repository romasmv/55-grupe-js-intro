// 1. Count how many vowels are in a string
function countVowels(str) {
    const vowels = 'aeiouyEIAOUY';
    let count = 0;
    for(let char of str)
    {
        if(vowels.includes(char))
        {
            count++;
        }
    }
    return count
  }

  console.log(countVowels("Labas Vakaras"))
  
  // 2. Reverse a string
  function reverseString(str) {
//     const raides = str.split('')
//    // console.log(raides)
//     let atvirkstinis = '';
//     for (let i  = raides.length - 1; i>=0; i--)
//     {
//         atvirkstinis +=raides[i]
//     }
//     return atvirkstinis;

    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("Ananasas"))

  // 3. Capitalize the first letter of each word in a sentence
  function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  console.log(capitalizeWords("tu esi vienaragio fėja"))
  
  // 4. Check if a string is a palindrome
  function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    // if(cleaned === cleaned.split('').reverse().join(''))
    // {
    //     return 'zodis yra palindromas';
    // }
    // else 
    // {
    //     return 'zodis ne palindromas';
    // }
    return cleaned === cleaned.split('').reverse().join('')
  }

  console.log(isPalindrome('Eyes'))
  
  // 5. Replace all spaces in a string with underscores
  function replaceSpaces(str) {
   return str.replaceAll(' ', '_');//
  }

  console.log(replaceSpaces("didelis namas yra gražus ir aukštas"));
  
  // 6. Count how many times a specific character appears in a string
  function countChar(str, char) {
    let count = 0;
    for(let c of str)
    {
        if(c === char) 
        {
            count++;
        }
    }
    return count;
  }

  console.log(countChar("ravajava", 'a'))
  
  // 7. Remove all digits from a string
  function removeDigits(str) {
   return str.replace(/[0-9]/g, '');
  }

  console.log (removeDigits("viens1 du2 trys3!"))
  
  // 8. Extract only letters from a string
  function onlyLetters(str) {
    return str.replace(/[^a-zA-Z]/g,'');
  }
  
  console.log(onlyLetters("Apelsinas,1234!"))

  // 9. Find the longest word in a sentence
  function longestWord(sentence) {
    
    const zodziai = sentence.split(" ");
    let maxlen=0;
    let Zmax = '';

    for(zodis in zodziai)
    {
        zodziai[zodis] = zodziai[zodis].replace(/[^a-zA-Z]/g,'');
        if(zodziai[zodis].length>maxlen)
        {
            Zmax = zodziai[zodis];
            maxlen = zodziai[zodis].length
        }
    }
    return Zmax;
    //sentence.split(' ').reduce((a, b) => a.length >= b.length ? a : b);
  }

  console.log(longestWord("labas rytas Lietuva, as esu Gabija"))
  
//   // 10. Convert a string to title case
//   function toTitleCase(str) {
    
//   }
  
  // 11. Replace all vowels in a string with "*"
  function maskVowels(str) {
    return str.replace(/[aeiouyAEIOUY]/g, '*')
  }

  console.log(maskVowels("Apelsinas"));
  
  // 12. Trim whitespace from both sides of a string
  function trimString(str) {
    return str.trim();
  }

  console.log(trimString("           akla "))
  
  // 13. Convert a sentence to kebab-case
  function toKebabCase(str) {
    //return str.toLowerCase().replaceAll(" ", "-")
    return str.toLowerCase().replaceAll(/ /g, "-")
  }
  
   console.log(toKebabCase("vienas js nd darbas"))
//////////// 14. Convert a string to camelCase

//////////////// 15. Check if a string contains only numbers

  // 16. Count how many words are in a sentence
  function wordCount(sentence) {
    return sentence.trim().split(' ').length;
  }
  console.log(wordCount("labas vienas du"))

  // 17. Repeat a string n times
  function repeatString(str, n) {
    return str.repeat(n);
  }

  console.log(repeatString("abc", 3))
  
  // 18. Check if two strings are anagrams
  function areAnagrams(str1, str2) {
    
  }

  console.log(areAnagrams("avis", "savi"))
  
  // 19. Shorten a sentence to a max length and add "..."
  function truncate(str, maxLength) {
   
  }

  console.log(truncate("pomidoras", 4))
  
  // 20. Swap the case of every letter
  function swapCase(str) {

    //str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
  }

  console.log(swapCase("LabaDiena"))
  
  ////////// 21. Remove duplicate letters from a string

  // 22. Remove punctuation from a sentence
  function removePunctuation(str) {
    
  }
  
  // 23. Split a sentence into words
  function splitWords(str) {

  }
   console.log(splitWords(" vienas du penki septyni"))

  // 24. Count uppercase letters
  function countUppercase(str) {

  }