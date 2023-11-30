const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            console.log('Ready state:', request.readyState);
            if (request.readyState === 4) {
                console.log('Status:', request.status);
                if (request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    console.log('Data:', data);
                    resolve(data);
                } else {
                    console.log('Error:', request.status);
                    reject("error getting resource");
                }
            }
        });

        request.open('GET', resource);
        request.send();
    })
}

getTodos('./todos/a.json')
    .then(data => {
        console.log("Promise resolved:", data);
        return getTodos('todos/b.json')
    })
    .then(data => {
        console.log("Promise 2 resolved:", data);
        return getTodos('todos/c.json')
    })
    .then(data => {
        console.log("Promise 3 resolved:", data);
    })
    .catch(err => {
        console.log("Promise rejected:", err);
    });
