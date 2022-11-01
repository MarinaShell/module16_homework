function showList(json){
    json.forEach(element => {
    
 });
}


function pageLoaded(){
    const btn = document.querySelector('.button');
    const ouput = document.querySelector('.output');
    
    btn.addEventListener('click', ()=>{
        const number = document.querySelector('.input');
        /*настраиваем наш запрос*/
        const options = {
           method: 'GET', 
           headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        fetch(`https://jsonplaceholder.typicode.com/users/${number.value}/todos`, options)
        .then(response => response.json())
        .then((json) => {
            showList(json)
            })
    });    
}

document.addEventListener("DOMContentLoaded", pageLoaded);