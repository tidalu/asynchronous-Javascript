// async code is a code like start now finsih later

console.log(1)
console.log(2)
setTimeout(() => {
    console.log("callback is fired")
}, 2000)
console.log(3)
console.log(4)
const getTodos = (resource  , callback) => {
    const request = new XMLHttpRequest();

    // Event listener to track the state changes of the request
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const data = JSON.parse(request.responseText);
                callback(undefined, data);
            } else {
                callback("Error: " + request.status, undefined);
            }
        }
    });

    // Opening a GET request to 'todos.json'
    request.open('GET', resource);
    request.send();
}

// Invoking the asynchronous function with a callback
getTodos('todos/a.json', (err, data) => {
    console.log(data);
    getTodos('todos/b.json', (err, data) => {
        console.log(data);
        getTodos('todos/c.json', (err, data) => {
            console.log(data)
        })
    })
})



// var data = fetch('https://jsonplaceholder.typicode.com/todos/23')
//              .then(response => response.json())
//              .then(json => console.log(json))


// callback hell