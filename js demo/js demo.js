//quiz 1
var result1 = [];
for (let i = 0; i < 100; i++) {
    if (i % 4 === 0) {
        if (i % 5 !== 0) {

            result1.push(i);

            if (result1.length === 10) {
                break;
            }
        }
        else continue;
    }
    else continue;

}

console.log(result1);



//quiz 2
var anArray = [1, 3, 4, 6, 7, 8, 10, 14, 15];
var target = 14;
var result2 = [];
var transResult = [];

for (let i = 0; i < anArray.length; i++) {
    let x = 0;
    let y = 0;
    x = anArray[i];
    y = target - x;
    for (let z = 0; z < anArray.length; z++) {
        if (y === anArray[z]) {
            if (i < z) {
                transResult.push(i);
                transResult.push(z);
            }
        }

    }

}
for (let k = 0; k < transResult.length; k += 2) {
    result2.push(transResult.slice(k, k + 2));
}

console.log(result2);