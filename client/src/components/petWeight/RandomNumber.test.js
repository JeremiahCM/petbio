const RandomNumber = require("./RandomNumber");

for (var i = 0; i <= 100; i++) {
  test("Must return a number between 10 and 20", () => {
    expect(RandomNumber()).not.toContain(9 && 21);
  });
}
