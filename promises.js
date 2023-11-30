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

    const getTodos = (resource) => {

        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
        
            // Event listener to track the state changes of the request
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        const data = JSON.parse(request.responseText);
                        resolve(data)
                    } else {
                        reject("error getting resource");
                    }
                }
            });
        
            // Opening a GET request to 'todos.json'
            request.open('GET', resource);
            request.send();
        })
    }
    
    // Invoking the asynchronous function with a callback
    getTodos('./todos/a.json')
            .then(data => {
                console.log("promise resolved: ", data);
            })
            .catch(err => {
                console.log("promise rejected: ", err);
            })