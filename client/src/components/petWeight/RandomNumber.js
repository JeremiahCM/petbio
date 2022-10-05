function RandomNumber() {
  var RandomNumber = [...Array(12)].map(
    (e) => ~~(Math.random() * (9 - 21 + 1) + 21)
  );
  return RandomNumber;
}

module.exports = RandomNumber;
