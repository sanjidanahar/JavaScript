const address = 'gaibandha';
const part = address.slice(2,6);   //slice hocche kata joto theke joto number dibe oi gulo show korbe bakigulo kete dibe
console.log(part);


//split hocche alada alada vag kora 
const sentence = 'i am Sanjida Nahar. I have no skill';
// console.log(sentence.split(' '));  //split hocche alada kora khondo khondo kore

console.log(sentence.split('d'));   //akhane split d deya hoice karon d jekhane jekhane ache segulo kete dibe 


const friendsStr = 'Rahim,Karim,Jolil,Arik,Alija';
const friends = friendsStr.split(',');   // sobgulo string er majhe koma diye gap diye prokas korbe
console.log(friends);

const realFriend = ['Rahim','karim','Arik','Alija','Aib'];
console.log(realFriend.join());      //amni array gulo join kore dibe

console.log(realFriend.join('|'))  // sob array er majhe | use korbe

console.log(realFriend.join('-'))   //sob array er majhe - use korbe



