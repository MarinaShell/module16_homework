/*****************************************************************************/
/*функция, которая принимает в качестве аргументов строку и объект, а затем 
проверяет, есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/
function isPropertyInObj(obj, str){
    for (let key in obj)
    {
        if (obj.hasOwnProperty(key))
        {
            if (key == str)
                return true;
        }
    }
    return false;
}

/*for testing
const obj = {a:1, b:2, c:3};
const str = "c";
console.log(isPropertyInObj(obj, str));
*/