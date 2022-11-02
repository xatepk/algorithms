function selectionSort(arr) { //O(n^2)
    for (let j = 0; j < arr.length - 1; j++) {
        let minIdx = j;

        for (let i = j + 1; i < arr.length; i++) {
            if (arr[minIdx] > arr[i]) {
                minIdx = i;
            }
        }

        if (minIdx !== j) {
            [arr[j], arr[minIdx]] = [arr[minIdx], arr[j]];
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
    selectionSort(arr);
}

main();