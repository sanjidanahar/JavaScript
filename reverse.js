//reverse hocche ulo kora

const sentence = 'I am learning web development.'



let reverse = ''
for(const leter of sentence){
    // console.log(leter);
    reverse = leter + reverse;
}
// console.log(reverse);


//length hocche koto ta letter ache space soho count kore
let rev = ''
for(let i=0; i<sentence.length; i++){
    // console.log(i);  //prutita letter er por number count korbe
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}

console.log(rev);

//shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);


