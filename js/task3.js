/*****************************************************************************/
/*функция, которая создает пустой объект, но без прототипа.*/
function getEmptyObj(){
    return Object.create(null);
}

/*for testing
const obj = getEmptyObj();
console.log(obj);*/