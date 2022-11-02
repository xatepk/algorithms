console.log(51 & 25);
console.log(51 | 25);
console.log(51 ^ 25);
console.log(~23);
console.log(12 << 2);
console.log(12 >> 2);

const n = 17;
console.log(n | (1 << 2));

function bitmasks (arr = [1,2,3,4]) {
    let n = arr.length;
    let res = '';
    for (let mask = 0; mask < (1 << n); mask ++) {
        let first = true;
        res += '{';
        for ( let i = 0; i < n; i++) {
            if(mask & (1 << i)) {
                if (!first) {
                    res += ', ';
                }
                first = false;
                res += arr[i];
            }
        }
        res +='}' + '\n';
    }
    console.log(res);
}

bitmasks();