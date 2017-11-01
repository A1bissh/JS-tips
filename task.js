function isInteger(num) {
    if ((num ^ 0) == num) {
        return true;
    } else {
        return false;
    }
}