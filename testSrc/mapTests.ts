import { expect } from 'chai';
import { map } from '../src';
import { noValue } from './noValue';

describe('Map/map', function (): void {
  it('should return map with needed values', async function (): Promise<void> {
    // arrange
    const src = [{ id: 1 }, { id: 2 }];

    // act
    const result = map(src, item => item.id);

    // assert
    expect(result.get(1)).to.be.equal(src[0]);
    expect(result.get(2)).to.be.equal(src[1]);
    expect(noValue(result.get(3))).to.be.equal(true);
  });

  it('should not throw for null', async function (): Promise<void> {
    // act
    const result = map<string, string>(null, item => item);
  });

  it('should return dictionary with flags', async function (): Promise<void> {
    // arrange
    const src = ['a', 'b'];

    // act
    const result = map(src, s => s, s => true);

    // assert
    expect(result.get('a')).to.be.equal(true);
    expect(result.get('b')).to.be.equal(true);
    expect(noValue(result.get('c'))).to.be.equal(true);
  });
});
