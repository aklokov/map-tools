import { expect } from "chai";
import { toMap, addToMap } from "../src";

describe("Map/toMap", function (): void {
  it("should return map with needed values", async function (): Promise<void> {
    // arrange
    const src = [{ id: 1 }, { id: 2 }];

    // act
    const result = toMap(src, item => item.id);

    // assert
    expect(result.get(1)).to.be.equal(src[0]);
    expect(result.get(2)).to.be.equal(src[1]);
    expect(result.has(3)).to.be.equal(false);
  });

  it("should not throw for null", async function (): Promise<void> {
    // act
    toMap<string, string>(null, item => item);
  });

  it("should return dictionary with flags", async function (): Promise<void> {
    // arrange
    const src = ["a", "b"];

    // act
    const result = toMap(src, s => s, s => true);

    // assert
    expect(result.get("a")).to.be.equal(true);
    expect(result.get("b")).to.be.equal(true);
    expect(result.has("c")).to.be.equal(false);
  });
});

describe("Map/addToMap", function (): void {
  it("should return new instance of map", async function (): Promise<void> {
    // arrange
    const src = [{ id: 1 }, { id: 2 }];
    const srcMap = new Map([[3, 3]]);
    // act
    const result = addToMap(srcMap, src, item => item.id, item => item.id);

    // assert
    expect(result.get(1)).to.be.equal(1);
    expect(result.get(2)).to.be.equal(2);
    expect(result.get(3)).to.be.equal(3);
    expect(result.has(5)).to.be.equal(false);
  });
});
