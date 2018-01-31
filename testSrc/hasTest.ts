import { expect } from "chai";
import { has, extend } from "../src/objectMap";
import { constructor } from "./constructorName";

describe("objectMap/has", function (): void {
  it("should tell if field is present on regular object", async function (): Promise<void> {
    // arrange
    const src = { "a": "b" };

    // act

    // assert
    expect(has(src, "a")).to.be.equal(true);
    expect(has(src, "b")).to.be.equal(false);
    expect(has(src, constructor)).to.be.equal(false);
  });

  it("should tell if field is present on null object", async function (): Promise<void> {
    // arrange
    const src = extend({ "a": "b" });

    // act

    // assert
    expect(has(src, "a")).to.be.equal(true);
    expect(has(src, "b")).to.be.equal(false);
    expect(has(src, constructor)).to.be.equal(false);
  });

});
