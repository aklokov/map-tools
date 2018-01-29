import { expect } from "chai";
import { sanitize, parse } from "../src/objectMap";
import { noValue } from "./noValue";
import { constructor } from "./constructorName";

describe("objectMap/sanitize", function (): void {
  it("should return sanitized object structure", async function (): Promise<void> {
    // arrange
    const array = [{ id: "1" }, { id: "2" }];
    const src = {
      array,
      map: {
        1: true,
        2: true
      }
    };

    // act
    const result = sanitize(src);

    // assert
    expect(result.array).to.be.deep.equal(array);
    expect(result.map[1]).to.be.equal(true);
    expect(noValue(result.map[3])).to.be.equal(true);

    expect(noValue(result[constructor])).to.be.equal(true);
    expect(noValue(result.map[constructor])).to.be.equal(true);
    expect(noValue(result.array[0][constructor])).to.be.equal(true);
  });

  it("should parse then sanitize", async function (): Promise<void> {
    // arrange
    const array = [{ id: "1" }, { id: "2" }];
    const src = {
      array,
      map: {
        1: true,
        2: true
      }
    };

    const srcString = JSON.stringify(src);

    // act
    const result = parse<any>(srcString);

    // assert
    expect(result.array).to.be.deep.equal(array);
    expect(result.map[1]).to.be.equal(true);
    expect(noValue(result.map[3])).to.be.equal(true);

    expect(noValue(result[constructor])).to.be.equal(true);
    expect(noValue(result.map[constructor])).to.be.equal(true);
    expect(noValue(result.array[0][constructor])).to.be.equal(true);
  });

});
