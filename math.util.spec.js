const { add } = require("./math.util");
const fc = require("fast-check");

test("add test", () => {
  expect(add(1, 2)).toBe(3);
});

test("add 패스트체크 test", () => {
  fc.assert(
    fc.property(fc.integer(), fc.integer(), (a, b) => {
      console.log(a, b);
      expect(add(a, b)).toBe(a + b);
      expect(add(b, a)).toBe(b + a);
    })
  );
});
