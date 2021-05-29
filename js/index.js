(function () {
  var a = (b = 5);
})();
console.log(b);

(function () {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  Promise.resolve(true).then(() => console.log(4));
  console.log(5);
})();

try {
  setTimeout(function () {
    throw new Error();
  }, 1000);
} catch (e) {
  console.log(e);
}
