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
