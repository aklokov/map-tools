import { expect } from "chai";
import { lookup } from "../src/objectMap";
import { noValue } from "./noValue";
import { constructor } from "./constructorName";

describe("objectMap/lookup", function (): void {
  it("should return lookup with needed arrays", async function (): Promise<void> {
    // arrange
    const src = [{ type: "list" }, { type: "list" }, { type: "item" }];

    // act
    const map = lookup(src, item => item.type, item => item);

    // assert
    expect(map["list"]).to.be.deep.equal([src[0], src[1]]);
    expect(map["item"]).to.be.deep.equal([src[2]]);
    expect(noValue(map[constructor])).to.be.equal(true);
  });

  it("should with default selector", async function (): Promise<void> {
    // arrange
    const src = [{ type: "list" }, { type: "list" }, { type: "item" }];

    // act
    const map = lookup(src, item => item.type);

    // assert
    expect(map["list"]).to.be.deep.equal([src[0], src[1]]);
    expect(map["item"]).to.be.deep.equal([src[2]]);
    expect(noValue(map[constructor])).to.be.equal(true);
  });

});
