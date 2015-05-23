const max = process.argv[2];

let FizzBuzz = {
    [Symbol.iterator]() {
        // ここに FizzBuzzの計算を書く
        // ヒント：
        // 計算を継続させたい時、つまり終了条件である繰り返し回数が max を超えていない時は
        // done: false のオブジェクトを返却する。
        // 逆に終了条件をみたすときには done: true のオブジェクトを返却する。
        let x = 1;
        return {
            next() {
                if (x > max) {
                    return {done: true};
                }
                if ([(x % 3) === 0, (x % 5) === 0] == [true, true]) {
                    return {done: false, value: "FizzBuzz"};
                }
                if ((x % 3) === 0) {
                    return {done: false, value: "Fizz"};
                }
                if ((x % 5) === 0) {
                    return {done: false, value: "Buzz"};
                }
                let value = x++;
                return {done: false, value: value};
            }
        };
    }
}

for (var n of FizzBuzz) {
    console.log(n);
}
