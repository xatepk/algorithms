function search(arr, x) { //O(n)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }

    return -1;
}

function swap () { //O(1)
    let arr = [a, b];
    let t = arr[0];
    arr[0] = arr[1];
    arr[1] = t;
}

function cycle_1() { //O(1)
    let c = 4;
    for (let i = 0; i < c; i++) {
        console.log(i);
    }
}

function cycle_n(n) { //O(n)
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function cycle_nm1(n, m) { //O(max(n,m)) = O(n + m)
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    for (let i = 0; i < m; i++) {
        console.log(i);
    }
}

function cycle_nm2(n, m) { //O(n * m)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            console.log(i + j);
        }
    }
}

function cycle_n2(n) { //O(n^2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i + j);
        }
    }
}

function cycle_n3(n) { //O(n^3)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i + j + k);
            }
        }
    }
}

function cycle_ij(n) { //O(n^2)
    for (let i = 0; i < n; i++) {
        for (let j = n; j < n; j++) {
            console.log(i + j);
        }
    }
    //n + (n-1) + (n-2) + (n-3) + ... + 1 = n*(n+1)/2
    //n*(n+1)/2 = 1/2(n*n + n) = O(n^2)
}

function cycle_n123(n) { //O(n^3)
    for (let i = 0; i < n; i++) {
        console.log(i); //O(n)
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i + j); //O(n^2)
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i + j + k); //O(n^3)
            }
        }
    }
}

function cycle_abc123(a, b, c) { //O(a + b^2 + c^3)
    for (let i = 0; i < a; i++) { //a === 1000000000
        console.log(i); //O(a)
    }

    for (let i = 0; i < b; i++) { //b === 100
        for (let j = 0; j < b; j++) {
            console.log(i + j); //O(b^2)
        }
    }

    for (let i = 0; i < c; i++) { //c === 10
        for (let j = 0; j < c; j++) {
            for (let k = 0; k < c; k++) {
                console.log(i + j + k); //O(n^3)
            }
        }
    }
}


function cycle_log1(a) { //O(log(a))
    let sum = 0;
    while (a != 0) { //log10(a)
        sum += a % 10;
        a =  Math.floor(a / 10);
    }
    return sum;
}

function cycle_log2(n) { //O(n*log(n))
    let sum = 0;

    for (let i = 0; i < n; i++) {//O(n)
        let a = i;
        while (a != 0) { //log10(a)
            sum += a % 10;
            a =  Math.floor(a / 10);
        }
    }

    return sum;
}

function cycle_sqrt(n) { //O(sqrt(n))
    for (let i = 0; i*i < n; i++) {
        console.log(i);
    }
}

function cycle_n_plus_2(n) { //O(n)
    for (let i = 0; i*i < n; i += 2) { //n/2 = 1/2 * n
        console.log(i);
    }
}

//O(2^n), O(3^n), O(n!)
//10^9 в сек