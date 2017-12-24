import { expect } from 'chai';
import { map, toMap } from '../src/objectMap';
import { noValue } from './noValue';
import { constructor } from './constructorName';

describe('objectMap/toMap', function (): void {
  it('should convert objectMap to Map', async function (): Promise<void> {
    // arrange
    const src = {
      '1': '2',
      '2': '3'
    };

    // act
    const result = toMap(src);

    // assert
    expect(result.get('1')).to.be.equal('2');
    expect(result.get('2')).to.be.equal('3');
    expect(result.has('3')).to.be.equal(false);
  });
});
