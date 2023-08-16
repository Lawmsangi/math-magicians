import calculate from "../logic/calculate";


describe("calculate()", () => {
  it("should return an object with the total, next, and operation properties", () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, '1');

    expect(result).toEqual({
      total: null,
      next: '1',
    });
  });

  it("should update the next property when a number is entered", () => {
    const obj = {
      total: '5',
      next: null,
      operation: '+',
    };

    const result = calculate(obj, "4");

    expect(result).toEqual({
      total: '5',
      next: "4",
      operation: '+',
    });
  });

  it("should update the total property when an operation is entered", () => {
    const obj = {
      total: 5,
      next: 4,
      operation: '+',
    };

    const result = calculate(obj, "=");

    expect(result).toEqual({
      total: '9',
      next: null,
      operation: null,
    });
  });

  it("should clear the total property when the AC button is pressed", () => {
    const obj = {
      total: '7',
      next: null,
      operation: null,
    };

    const result = calculate(obj, "AC");

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});