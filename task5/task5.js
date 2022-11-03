/*начало программы*/
document.addEventListener("DOMContentLoaded", pageLoaded);

/************************************************************************/
/*фцнкция на загрузку страницы*/
function pageLoaded(){
    const btn = document.querySelector('.button');
    
    btn.addEventListener('click', ()=>{
        const number = document.querySelector('.input');
        /*Настраиваем наш запрос*/
        const options = {
           method: 'GET', 
           headers:{
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        fetch(`https://jsonplaceholder.typicode.com/users/${number.value}/todos`, options)
        .then(response => response.json())
        .then((json) => {
            showList(json, number)
            })
    });    
}

/************************************************************************/
/*выводим список задач*/
function showList(json, number){
    removeElements();

    if (Object.keys(json).length == 0)
    {
        let p = document.createElement('p');
        p.textContent = `Пользователь с указанным id ${number.value} не найден`; 
        p.className = 'text';
        document.body.append(p);
        return;   
    }   
    let p = document.createElement('p');
    p.textContent = `Список задач для userId = ${number.value}`;
    p.className = 'text';
    document.body.append(p);

    let ul = document.createElement('ul');
    document.body.append(ul);
    json.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element.title;
        if (element.completed === true)
            li.className = 'ready';
        else
            li.className = 'not_ready';
        ul.append(li);
 });
}

/************************************************************************/
/*удаляем элементы*/
function removeElements(){
    
    let elemsP = document.querySelectorAll('p');
    let i = 0;
    for (let elem of elemsP) {
           if (i!==0)
             elem.remove();   
            i++;
    }

    let elemsUL = document.querySelectorAll('ul');
    for (let elem of elemsUL) {
           elem.remove();    
    }
}