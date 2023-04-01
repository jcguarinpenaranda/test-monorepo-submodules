import { extra, testExtra } from './extra';

describe('extra', () => {
  it('should work', () => {
    expect(extra()).toEqual('extra');
  });

  it('should import core correctly', () => {
    expect(testExtra()).toEqual('core');
  });
});
