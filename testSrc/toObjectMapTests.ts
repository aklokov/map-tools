import { expect } from "chai";
import { map, toObjectMap } from "../src";
import { noValue } from "./noValue";
import { constructor } from "./constructorName";

describe("Map/toObjectMap", function (): void {
  it("should convert map to objectMap", async function (): Promise<void> {
    // arrange
    const src = [{ id: "1" }, { id: "2" }];
    const srcMap = map(src, item => item.id);

    // act
    const result = toObjectMap(srcMap);

    // assert
    expect(result["1"]).to.be.equal(src[0]);
    expect(result["2"]).to.be.equal(src[1]);
    expect(noValue(result["3"])).to.be.equal(true);
    expect(noValue(result[constructor])).to.be.equal(true);
  });

});
