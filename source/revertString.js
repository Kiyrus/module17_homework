export function revertString(str) {
    if (str.length <= 1) {
        return "Enter the word!";
    } else {
        return str.split("").reverse().join("");
    }
}