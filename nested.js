const college = {
    name : 'vnc',
    class : ['10','14','48'],
    events: ['science fair','bijoy dibos','spcial day'],
    unique: {
        color: 'black',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
// console.log(college.unique)
console.log(college.unique.result.merit)  // ektar vitor aro onk ache tai segulo dekhaite majhkhane . diye seta likhte hoy


//jodi man change korte hoy
college.events[1] = '16 December';
console.log(college.events[1])


// delete korte caile
delete college.class;
console.log(college)