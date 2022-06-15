let flipVowels = (word)=> {
    let newWord;
    let vowels = 'aeiou'
    let pt1 = 0;
    let pt2 = word.length - 1;
    while(pt1 <= pt2){
        if(vowels.includes(word[pt1]) && vowels.includes(word[pt2])){
            let temp = word[pt1];
            word[pt1] = word[pt2];
            word[pt2] = temp;
        }
        pt1++;
        pt2--;
    }
    return newWord
}

console.log(flipVowels("hello"))