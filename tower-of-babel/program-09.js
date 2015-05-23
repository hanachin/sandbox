const max = process.argv[2];

let FizzBuzz = function*() {
    let num = 1;
    while (num <= max) {
        if (num % 15 == 0) yield "FizzBuzz";
        else if (num % 3 == 0) yield "Fizz";
        else if (num % 5 == 0) yield "Buzz";
        else yield num;
        num++;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}
