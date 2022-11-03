/*****************************************************************************/
/*функция на загрузку станицы*/
document.addEventListener("DOMContentLoaded", pageLoaded);

/*****************************************************************************/
/*основная функция по загрузке страницы */
function pageLoaded(){
    const btn = document.querySelector('.button');
    /*проверяем number и limit*/
    const myJSON = localStorage.getItem('myJSON');
    /*если данные есть*/
    if (myJSON){
        
        let dataJson = JSON.parse(myJSON);
        const number = dataJson.number;
        const limit = dataJson.limit; 
        /*делаем запрос*/
        makeRequest(number, limit);
    }

    btn.addEventListener('click', ()=>{
        removeElements();
        const number = document.querySelector('#inputNumber');
        const limit = document.querySelector('#inputLimit');
  
        const isNotNumber = isNaN(number.value) || 
			    (number.value < 1 || number.value > 10);
        const isNotLimit = isNaN(limit.value) || 
			    (limit.value < 1 || limit.value > 10);
        
        if (isNotNumber || isNotLimit){
            var p = document.createElement('p');
            p.className = 'text';
        }
        if (isNotNumber && isNotLimit)
            p.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
        else if (isNotNumber)
            p.textContent = "Номер страницы вне диапазона от 1 до 10";
        else if (isNotLimit)
            p.textContent = "Номер лимита вне диапазона от 1 до 10";
        if (isNotNumber || isNotLimit){
            document.body.append(p);
            return;
        }

        /*делаем запрос*/
        makeRequest(number.value, limit.value);

        /*сохраняем number и limit*/
        let jsonPar = {
            number:number.value,
            limit:limit.value
          }
        localStorage.setItem('myJSON', JSON.stringify(jsonPar)); 

    });    
}

/************************************************************************/
/*удаляем элементы*/
function removeElements(){
    
    let elemsP = document.querySelectorAll('p');
    let i = 0;
    for (let elem of elemsP) {
           if (i!==0 && i!==1)
             elem.remove();   
            i++;
    }

    let elemsUL = document.querySelectorAll('ul');
    for (let elem of elemsUL) {
           elem.remove();    
    }
}

/*****************************************************************************/
/*делаем запрос*/
function makeRequest(number, limit){
    /*Настраиваем наш запрос*/
    const options = {
    method: 'GET', 
    headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    }
    let requestURL = formatURL(number, limit); 
    fetch(requestURL, options)
    .then(response => response.json())
    .then((json) => {
         showList(json)
         })
}

/*****************************************************************************/
/*формируем URL*/
function formatURL(number, limit){
    let url = new URL('https://picsum.photos/v2/list');
    url.searchParams.set("page", number);
    url.searchParams.set("limit", limit);
    return url;
}

/*****************************************************************************/
/*выводим список картинок*/
function showList(json){
    let p = document.createElement('p');
    p.textContent = `Список картинок:`;
    p.className = 'text';
    document.body.append(p);

    let ul = document.createElement('ul');
    document.body.append(ul);
    json.forEach(element => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.src = element.download_url;
        img.className = 'image';
        li.append(img);
        ul.append(li);
 });
}