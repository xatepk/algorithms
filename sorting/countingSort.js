function countingSort(arr) { //O(n + m)
    let min = arr[0];
    let max = arr[0];
    let busket = [];
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        } 
    }

    for (let i = 0; i <= max - min + 1; i++) {
        busket[i] = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        busket[arr[i] - min] += 1 ;
    }

    for (let i = 0; i < busket.length; i++) {
        let count = busket[i];
        while (count > 0) {
            arr[j++] = i + min;
            count--;
        }
    }

    console.log(arr);
}


function main() {
    const arr = [];
    const n = Math.floor(Math.random() * 8) + 1;

    for (let i = 0; i <= n; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }

    console.log(arr)
    countingSort(arr);
}

main();