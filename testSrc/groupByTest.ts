import { expect } from "chai";
import { groupBy, values } from "../src";

describe("GroupBy", function (): void {
  it("should return grouped entities", async function (): Promise<void> {
    // arrange
    const src = [
      { f1: 1, f2: 2, f3: 1 },
      { f1: 2, f2: 1, f3: 2 },
      { f1: 1, f2: 2, f3: 3 },
      { f1: 2, f2: 1, f3: 4 },
      { f1: 1, f2: 2, f3: 5 },
    ];

    // act
    const group = groupBy(src, item => item.f1, item => item.f2);

    // assert
    const val = values(group);
    expect(val.length).equals(2);
    expect(val[0]).deep.equals([src[0], src[2], src[4]]);
    expect(val[1]).deep.equals([src[1], src[3]]);
  });

  it("should return grouped entities by singular selector", async function (): Promise<void> {
    // arrange
    const src = [
      { f1: 1, f2: 2, f3: 1 },
      { f1: 2, f2: 1, f3: 2 },
      { f1: 1, f2: 2, f3: 3 },
      { f1: 2, f2: 1, f3: 4 },
      { f1: 1, f2: 2, f3: 5 },
    ];

    // act
    const group = groupBy(src, item => ({ f1: item.f1, f2: item.f2 }));

    // assert
    const val = values(group);
    expect(val.length).equals(2);
    expect(val[0]).deep.equals([src[0], src[2], src[4]]);
    expect(val[1]).deep.equals([src[1], src[3]]);
  });
});
