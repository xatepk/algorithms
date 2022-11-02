function bubleSort(arr) { //O(n^2)
    for (let j = 0; j < arr.length; j++) {
        let isSorted = true;

        for (let i = 1; i < arr.length - j; i++) {
            if (arr[i] < arr[i - 1]) {
                isSorted = false;
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            }
        }

       if (isSorted) {
        break;
       }
    }
    console.log(arr);
}


function main() {
    const arr = [];
    const n = Math.floor(Math.random() * 50) + 1;

    for (let i = 0; i <= n; i++) {
        arr.push(Math.floor(Math.random() * 200));
    }

    console.log(arr)
    bubleSort(arr);
}

main();