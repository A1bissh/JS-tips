"use strict" //для использования EcmaScript5

/* Для вставки скриптов на страницу есть 2 способа:
   - писать сразу в html-файле внутри тэга <script>...</script>(Смотри testhtml.html)
   - добавить внужном месте пустой тэг <script></script> с 
        атрибутом src(указание на путь к отдельному js файлу)
*/

for (i = 0; i <= 10; i++) {
    if (i == 10) {
        console.log('Ты тупая скотина! Иди к черту!');
    } else {
        alert(i + 1);
    }
}

/* При вызове ссылки на отдельный файл для того, чтобы скрипт не 
   блокировал загрузку страницы, а запускался после загрузки себя, 
   не останавливая page-loading существуют 2 атрибута
*/
// <script defer src = "first.js" > < /script>/ / defer 
// <script async src = "first.js" > < /script>/ / async

/* Разница между ними лишь в том, что при "async" скрипты будут 
   загружаться сразу, как только загрузятся, а при "defer" они 
   будут выполнятся в том порядке, в котором подключены => ждать
   друг друга
*/
//при их одновременном использовании будет воспринят только "async"