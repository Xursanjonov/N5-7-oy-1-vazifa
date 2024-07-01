// 1-preoblem
function foo(n) {
  const s = n.toString();
  return s === s.split("").reverse().join("");
}

console.log(foo(1231)); // false
console.log(foo(12521)); // true
console.log(foo(3)); // true

// 2-problem
function foo(...args) {
  return args.reduce((a, b) => a + b, 0);
}

console.log(foo(1, 3)); // 4
console.log(foo(10, 20, 30, 40)); // 100

// 3-problem
function foo(obj) {
  return Object.values(obj).reduce((sum, val) => {
    return sum + (typeof val === "number" || !isNaN(val) ? Number(val) : 0);
  }, 0);
}

console.log(foo({ a: 5, b: 6 })); // 11
console.log(foo({ a: 5, b: "6", c: true })); // 11

// 4-problem
function foo(n) {
  const str = n.toString();
  return Number([...new Set(str)].join(""));
}

console.log(foo(1231)); // 123
console.log(foo(112233344444)); // 1234

// 5-masalaga men tushunganim shu belgilar bo`lsa ochirsin deb tushungandim 
function foo(s) {
  return s.replace(/\?+$/, "");
}

console.log(foo("salom??")); // "salom"
console.log(foo("sa?lom?")); // "sa?lom"