//РАЗНЫЕ СПОСОБЫ ВЗЯИМОДЕЙСТВИЯ С ПОЛЬЗОВАТЕЛЕМ

//promt
/* Если "alert"- это просто модальное
(приостанавливает выполнение скрипта+ не позволяет 
работать со страницей дальше, пока не разберешься с окном )
окно уведомления, то "prompt"- это модальный ввод информации.
"prompt" возвращает то, что ввёл посетитель – строку или 
специальное значение null, если ввод отменён.
Она выводит модальное окно с заголовком title, 
полем для ввода текста, заполненным строкой по 
умолчанию default и кнопками OK/CANCEL.
*/
var check = prompt('Checking', 12);
alert("allright " + check);

//confirm
/* "confirm" выводит окно с вопросом question с двумя кнопками: OK и CANCEL.
Результатом будет true при нажатии OK и false – при CANCEL(Esc). 
*/
var result = confirm("Все хорошо?");
if (result == true) {
    alert("Заебись!")
}