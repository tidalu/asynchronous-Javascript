// promise example

const getSomething  = () => {

return new Promise((resolve, reject) => {
    // fetch smth 
    // resolve('somedaat')
    reject('some err')

})

}

getSomething()
    .then(data => {
        console.log(data);
    })
    .catch(errr => {
        console.log(errr);
    })