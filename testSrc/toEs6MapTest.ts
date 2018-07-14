import { expect } from "chai";
import { toEs6Map } from "../src/objectMap";

describe("objectMap/toMap", function (): void {
  it("should convert objectMap to Es6 Map", async function (): Promise<void> {
    // arrange
    const src = {
      "1": "2",
      "2": "3"
    };

    // act
    const result = toEs6Map(src);

    // assert
    expect(result.get("1")).to.be.equal("2");
    expect(result.get("2")).to.be.equal("3");
    expect(result.has("3")).to.be.equal(false);
  });
});
