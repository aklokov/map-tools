import { expect } from "chai";
import { keys, values } from "../src/objectMap";

describe("objectMap/keys-values", function (): void {
  it("should return list of keys", async function (): Promise<void> {
    // arrange
    const src = { "1": 2, "2": 3 };
    const expected = ["1", "2"];

    // act
    const result = keys(src);

    // assert
    expect(result).to.be.deep.equal(expected);
  });

  it("should list of values", async function (): Promise<void> {
    // arrange
    const src = { "1": 2, "2": 3 };
    const expected = [2, 3];

    // act
    const result = values(src);

    // assert
    expect(result).to.be.deep.equal(expected);
  });
});
