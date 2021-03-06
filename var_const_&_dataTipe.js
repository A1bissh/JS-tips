/* Переменная- ссылка на ячейку памяти для хранения информации*/
//Для объявления переменной используется ключевое слово "var"
var message;
message = 'Hello, world!'; //помещаем в переменную строку
//Предыдущие строки эквивалентны
var message1 = 'Hello, world!';
//несколько переменных обявляются через запятую
var user = 'John',
    age = 25,
    message = 'Hello';
//присваивать можно и другие переменные(тупо одна переменная копируется в дугую)
var ww1 = 1914;
var ww2 = ww1 + 25;
//Имя переменной может состоять из: букв, цифр, символов $ и _
//Первый символ не должен быть цифрой.


/* Константа – это переменная, которая никогда не меняется. 
Как правило, их называют большими буквами, через подчёркивание. */

var COLOR_RED = "#F00";
var COLOR_GREEN = "#0F0";
var COLOR_BLUE = "#00F";
var COLOR_ORANGE = "#FF7F00";

var color = COLOR_ORANGE;
alert(color); // #FF7F00
//Технически, константа является обычной переменной, то есть её можно изменить. Но мы договариваемся этого не делать.


//ПРАВИЛА НАИМЕНОВАНИЯ ПЕРМЕННЫХ
//1) Никакого транслита! Только английский
//2) Использовать короткие имена только для переменных «местного значения».
//3) Переменные из нескольких слов пишутся justLikeThat
//4) Имя переменной должно максимально чётко соответствовать хранимым в ней данным.(из названия понятно что она делает)

// В JavaScript СЩЕСТВУЕТ 6 ТИПОВ ДАННЫХ

//1) Число(number)
var n = 123;
n = 12.345;
//Единый тип число используется как для целых, так и для дробных чисел.
//Существуют специальные числовые значения Infinity (бесконечность) и NaN (ошибка вычислений).
//Например, бесконечность Infinity получается при делении на ноль
//Ошибка вычислений NaN будет результатом некорректной математической операции(_alert( "нечисло" * 2 );_)

//2) Строки(string)
var str = "Мама мыла раму";
str = 'Одинарные кавычки тоже подойдут';
//Тип символ не существует, есть только строка.

//3) Булевый/логический тип(boolean)
//У него всего два значения: true (истина) и false (ложь).
var checked = true; // поле формы помечено галочкой
checked = false; // поле формы не содержит галочки

//4) Cпециальное значение «null»
var age = null;
//Это просто специальное значение, которое имеет смысл «ничего» или «значение неизвестно».
//В частности, код выше говорит о том, что возраст age неизвестен.

//5) Специальное значение «undefined»
// Оно имеет смысл «значение не присвоено».
//Если переменная объявлена, но в неё ничего не записано, то её значение как раз и есть undefined
var x;
alert(x); // выведет "undefined"


//6) Объекты(object)
//Он используется для коллекций данных и для объявления более сложных сущностей.
//Объявляются объекты при помощи фигурных скобок {...}, например:
var user = { name: "Вася" };

//ОПЕРАТОР tupeof
/* Оператор typeof возвращает тип аргумента.
   У него есть два синтаксиса: со скобками и без:
   Синтаксис оператора: typeof x.
   Синтаксис функции: typeof(x).
   Работают они одинаково, но первый синтаксис короче.
   Результатом typeof является строка, содержащая тип: */

typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof {} // "object"
typeof null // "object"  (1)
typeof(function() {}) // "function"  (2)

/* Последние две строки помечены, потому что typeof ведет себя в них по-особому.
Результат typeof null == "object" – это официально признанная ошибка в языке, которая 
сохраняется для совместимости. На самом деле null – это не объект, а отдельный тип данных.
Функции мы пройдём чуть позже. Пока лишь заметим, что функции не являются отдельным 
базовым типом в JavaScript, а подвидом объектов. Но typeof выделяет функции отдельно, 
возвращая для них "function". На практике это весьма удобно, так как позволяет легко определить функцию.
К работе с типами мы также вернёмся более подробно в будущем, после изучения основных структур данных.
*/