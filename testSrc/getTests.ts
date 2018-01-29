import { expect } from "chai";
import { map, get } from "../src/objectMap";
import { noValue } from "./noValue";
import { constructor } from "./constructorName";

describe("objectMap/get", function (): void {
  it("should return values from map", async function (): Promise<void> {
    // arrange
    const src = ["a", "b"];

    // act
    const result = map(src, item => item, item => true);

    // assert
    expect(get(result, "a")).to.be.equal(true);
    expect(result["b"]).to.be.equal(true);
    expect(noValue(get(result, "c"))).to.be.equal(true);
    expect(noValue(get(result, constructor))).to.be.equal(true);
  });
});
