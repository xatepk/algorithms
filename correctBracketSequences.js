function isBalanced(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        if (isOpen(str[i])) {
            arr.push(str[i]);
        } else {
            if (!(arr.length === 0) && isPair(arr[arr.length - 1], str[i])) {
            arr.pop();
            } else {
            return false;
            }
        }
    }

    return arr.length === 0 ? true : false;
}

function isOpen(ch) {
    return ch === '(' || ch === '{' || ch === '[';
}

function isPair(open, close) {
    return open === '(' && close === ')' ||
            open === '{' && close === '}' ||
            open === '[' && close === ']'
}

console.log(isBalanced('()({[]})()'));