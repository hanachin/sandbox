var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

// ここに平均を取るavg関数を作る、作る際には
// RESTパラメータを利用すること。

let avg = (...ns) => {
    let sum = (a ,b) => a + b;
    return ns.reduce(sum) / ns.length;
}

console.log(avg(...args));
