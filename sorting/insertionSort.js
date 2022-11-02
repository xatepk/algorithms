function insertionSort(arr) { //O(n^2)
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > cur) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = cur;
        
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
    insertionSort(arr);
}

main();