import operate from "../logic/operate";

describe('Operations should be as below', () => {
  it('should subtract two numbers', () => {
    const result = operate('15.5', '5.5', '-');
    expect(result).toBe('10');
  });

});