//Условные операторы

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//if
/*Оператор if («если») получает условие.Он вычисляет его, 
и если результат – true, то выполняет команду.
Если нужно выполнить более одной команды – они 
оформляются блоком кода в фигурных скобках
Необязательный блок else («иначе») выполняется, если условие неверно
Бывает нужно проверить несколько вариантов условия. Для этого используется блок else if .... Например
*/
var check = prompt("enter ur num: ", 01);
if (check > 100) {
    alert("too much");
} else if (check < 10) {
    alert("it is like ur dick");
} else {
    alert("good boy");
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Оператор вопросительный знак „?“
//Иногда нужно в зависимости от условия присвоить переменную. Например:
var access;
var age = prompt('Сколько вам лет?', '');

if (age > 14) {
    access = true;
} else {
    access = false;
}

alert(access);

/* Оператор вопросительный знак '?' позволяет делать это короче и проще.
Он состоит из трех частей:
условие ? значение1 : значение2
Проверяется условие, затем если оно верно – возвращается значение1, если неверно – значение2, например:
*/
access = (age > 14) ? true : false;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Несколько операторов „?“
//Последовательность операторов '?' позволяет вернуть значение в зависимости не от одного условия, а от нескольких.
//Например:

var age = prompt('возраст?', 18);

var message = (age < 3) ? 'Здравствуй, малыш!' :
    (age < 18) ? 'Привет!' :
    (age < 100) ? 'Здравствуйте!' :
    'Какой необычный возраст!';

alert(message);