import { expect } from "chai";
import { toMap, extend } from "../src/objectMap";
import { noValue } from "./noValue";
import { constructor } from "./constructorName";

describe("objectMap/extend", function (): void {
  it("should extend the map with object", async function (): Promise<void> {
    // arrange
    const src = ["a", "b"];
    const srcMap = toMap(src, item => item, item => true);
    // act

    const result = extend(srcMap, { "c": true });

    // assert
    expect(result["a"]).to.be.equal(true);
    expect(result["b"]).to.be.equal(true);
    expect(result["c"]).to.be.equal(true);
    expect(noValue(result["d"])).to.be.equal(true);
    expect(noValue(result[constructor])).to.be.equal(true);
  });

  it("should put object onto the null-prototype object", async function (): Promise<void> {
    // arrange
    const src = ["a", "b"];
    const srcMap = toMap(src, item => item, item => true);
    // act

    const result = extend({ ...srcMap, "c": true });

    // assert
    expect(result["a"]).to.be.equal(true);
    expect(result["b"]).to.be.equal(true);
    expect(result["c"]).to.be.equal(true);
    expect(noValue(result["d"])).to.be.equal(true);
    expect(noValue(result[constructor])).to.be.equal(true);
  });
});
