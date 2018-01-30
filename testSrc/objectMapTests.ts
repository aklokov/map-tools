import { expect } from "chai";
import { map, addMap } from "../src/objectMap";
import { noValue } from "./noValue";
import { constructor } from "./constructorName";

describe("objectMap/map", function (): void {
  it("should return map with needed values", async function (): Promise<void> {
    // arrange
    const src = [{ id: 1 }, { id: 2 }];

    // act
    const result = map(src, item => item.id);

    // assert
    expect(result[1]).to.be.equal(src[0]);
    expect(result[2]).to.be.equal(src[1]);
    expect(noValue(result[3])).to.be.equal(true);
  });

  it("should not throw for null", async function (): Promise<void> {
    // act
    map<number>(null, item => item);
  });

  it("should return dictionary with flags", async function (): Promise<void> {
    // arrange
    const src = ["a", "b"];

    // act
    const result = map(src, s => s, s => true);

    // assert
    expect(result["a"]).to.be.equal(true);
    expect(result["b"]).to.be.equal(true);
    expect(noValue(result["c"])).to.be.equal(true);
    expect(noValue(result[constructor])).to.be.equal(true);
  });
});

describe("objectMap/addMap", function (): void {
  it("should return new instance of map", async function (): Promise<void> {
    // arrange
    const src = [{ id: 1 }, { id: 2 }];
    const srcMap = { 3: 3 };
    // act
    const result = addMap(srcMap, src, item => item.id, item => item.id);

    // assert
    expect(result[1]).to.be.equal(1);
    expect(result[2]).to.be.equal(2);
    expect(result[3]).to.be.equal(3);
    expect(result).to.be.not.equal(srcMap);
    expect(noValue(result[4])).to.be.equal(true);
    expect(noValue(result[constructor])).to.be.equal(true);
  });
});
