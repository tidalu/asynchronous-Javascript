// async await 

const  getTodos = async () => {

    const response = await  fetch('todos/a.json')

    if(response.status !== 200) {
        throw new Error("error happened in fetching")
    }
    const data = await response.json()
    return data

}


const data = getTodos()
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err.message);
})