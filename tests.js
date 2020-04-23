// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should never return "undefined" when called', function () {
        expect(sayHello()).not.toBe(undefined)
    });
    it('should return "Hello, World!" after passing true.', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" after passing false.', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" after passing null.', function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" after passing a number.', function () {
        expect(sayHello(2.3)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" after passing an empty string "".', function () {
        expect(sayHello("")).toBe("Hello, World!")
    });
    it('should return "Hello, World!" after passing a numeric string.', function () {
        expect(sayHello("5")).toBe("Hello, World!")
    });
});
describe('isFive', function () {
    it('should be defined as a function.', function () {
        expect(typeof isFive).toBe( "function")
    });
    it('should never return as "undefined" when called', function () {
        expect(isFive()).not.toBe(undefined)
    });
    it('should return a boolean value', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return true if passed 5.', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true if passed "5".', function () {
        expect(isFive("5")).toBe(true)
    });
    it('should return false if passed null.', function () {
        expect(isFive(null)).toBe(false)
    });
    it('should return false when passing and empty string "".', function () {
        expect(isFive("")).toBe(false)
    });
    it('should return false when passed "five".', function () {
        expect(isFive("five")).toBe(false)
    });
});

describe('isEven', function () {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe("function")
    });
    it('should never return as "undefined" when called.', function () {
        expect(isEven()).not.toBe(undefined)
    });
    it('should return a boolean value.', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should return true when passing 2.', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true if passed -4.', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when passed 3.', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when passed "banana".', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return true when passed "8".', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false when passed Infinity.', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when passed the boolean of true.', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should return false when passed the boolean of false.', function () {
        expect(isEven(false)).toBe(false)
    });
    it('should return false without passing an argument.', function () {
        expect(isEven()).toBe(false)
    });
});
