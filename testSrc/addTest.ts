import { expect } from "chai";
import { add } from "../src";

describe("Map/add", function (): void {
  it("should create new map with added item", async function (): Promise<void> {
    // arrange
    const srcMap = new Map([["a", 1]]);

    // act
    const result = add(srcMap, "c", 2);

    // assert
    expect(result.get("a")).to.be.equal(1);
    expect(result.get("c")).to.be.equal(2);
    expect(result.has("b")).to.be.equal(false);
    expect(result).to.be.not.equal(srcMap);
  });
});
