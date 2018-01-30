import { expect } from "chai";
import { noValue } from "./noValue";
import { constructor } from "./constructorName";
import { add } from "../src/objectMap/add";

describe("objectMap/add", function (): void {
  it("should create new map with added item", async function (): Promise<void> {
    // arrange
    const srcMap = { "a": 1 };

    // act
    const result = add(srcMap, "c", 2);

    // assert
    expect(result["a"]).to.be.equal(1);
    expect(result["c"]).to.be.equal(2);
    expect(noValue(result["b"])).to.be.equal(true);
    expect(result).to.be.not.equal(srcMap);
    expect(noValue(result[constructor])).to.be.equal(true);
  });
});
