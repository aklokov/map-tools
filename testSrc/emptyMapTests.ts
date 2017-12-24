import { expect } from 'chai';
import { map, create, IMap } from '../src/objectMap';
import { noValue } from './noValue';
import { constructor } from './constructorName';

describe('objectMap/create', function (): void {
  it('should return no value for prototype property', async function (): Promise<void> {
    // arrange
    const result = create<IMap<string>>();

    // act
    const ctor = result[constructor];

    // assert
    expect(noValue(ctor)).to.be.equal(true);
  });

  it('should return previously put value', async function (): Promise<void> {
    // arrange
    const result = create<IMap<string>>();
    result['123'] = '234';

    // act
    const val = result['123'];

    // assert
    expect(val).to.be.equal('234');
  });

});
