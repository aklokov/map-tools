import { expect } from "chai";
import { merge, extend } from "../src";
import { noValue } from "./noValue";

describe("Map/merge", function (): void {
  it("should return map with both values", async function (): Promise<void> {
    // arrange
    const first = new Map<number, boolean>();
    first.set(1, true);
    const second = new Map<number, boolean>();
    first.set(2, true);

    // act
    const map = merge(first, second);

    // assert
    expect(map.get(1)).to.be.equal(true);
    expect(map.get(2)).to.be.equal(true);
    expect(noValue(map.get(3))).to.be.equal(true);
  });

  it("should not throw if values intersect", async function (): Promise<void> {
    // arrange
    const first = new Map<number, string>();
    first.set(1, "1");
    first.set(2, "1");
    const second = new Map<number, string>();
    first.set(1, "2");

    // act
    const map = merge(first, second);

    // assert
    expect(map.get(1)).to.be.equal("2");
    expect(map.get(2)).to.be.equal("1");
    expect(noValue(map.get(3))).to.be.equal(true);
  });

  it("should return new map ", async function (): Promise<void> {
    // arrange
    const first = new Map<number, boolean>();
    first.set(1, true);

    // act
    const map = extend(first);

    // assert
    expect(map.get(1)).to.be.equal(true);
    expect(noValue(map.get(3))).to.be.equal(true);
    expect(map).to.be.not.equal(first);
  });
});
