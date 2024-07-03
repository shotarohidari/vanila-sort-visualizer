import { shuffle } from "../src/util";

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2)
})

describe("shuffle",() => {
  test("0個の場合はそのまま返す",() => {
    const ary = [];
    const newAry = shuffle(ary);
    expect(ary).toEqual(newAry);
  });
  test("1個の場合は同じ",() => {
    const ary = [0];
    const newAry = shuffle(ary);
    expect(ary).toEqual(newAry);
  });
  test("3個の場合はシャッフル",() => {
    const ary = [0,1,2];
    const newAry = shuffle(ary);
    expect(ary).containSubset(newAry);
  });
  test("20個の場合はシャッフル",() => {
    const ary = Array.from({length:20},(_,idx) => idx);
    const newAry = shuffle(ary);
    expect(ary).containSubset(newAry);
  });
})