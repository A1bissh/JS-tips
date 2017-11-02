/*function isInteger(num) {
    if ((num ^ 0) == num) {
        return true;
    } else {
        return false;
    }
}*/

function isStupid() {
    var stupidCheck = prompt("Докажи, что не тупой! Введи то, что я хочу: ", "ебни свой высер");
    if (stupidCheck >= 120) {

        alert("ok, доказал");
        console.log("все равно тупой бля");

        if (!confirm("Доволен?")) {
            var satisfaction = prompt("Что не так?", "че доебался?");

            if ((satisfaction == "консоль") || (satisfaction == "Консоль") || (satisfaction == "КОНСОЛЬ") || (satisfaction == "console") || (satisfaction == "Console") || (satisfaction == "CONSOLE")) {
                alert("go to nahui(");
            } else {
                alert("Блин, ты даун, но был близок)");
                isStupid();
            }
        } else {
            alert("Блин, ты даун");
            isStupid();
        }

    } else if (stupidCheck <= 50) {
        alert("omg, stupid boy!");
        isStupid();
    } else {
        alert("not so stupid, as u can(");
        isStupid();
    }
}

isStupid();