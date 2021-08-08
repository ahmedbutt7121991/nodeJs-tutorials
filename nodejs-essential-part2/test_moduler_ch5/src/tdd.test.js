const countLetters = (char, str) => str.split("").filter(l => char === l).length;

describe("TDD example Count Letters", () => {
    it("count letters correctly", () => {
        const result = countLetters("p", "happy");
        expect(result).toEqual(2);
    });
});