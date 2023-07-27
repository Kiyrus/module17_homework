import { definePrime } from "../definePrime";

xdescribe("tests for definePrime function", () => {
    const simpleNUmber = 17;
    const compositeNumber = 18;
    const toBigNumber = 1001;

    it("should operate correctly with simple number", () => {
        expect(definePrime(simpleNUmber)).toBe(`Number ${simpleNUmber} - prime number`);
    }),
        it("should operate correctly with simple number", () => {
            expect(definePrime(compositeNumber)).toBe(
                `Number ${compositeNumber} - composite number`
            );
        }),
        it("should operate correctly with simple number", () => {
            expect(definePrime(toBigNumber)).toBe("data is incorrect");
        });
});

describe("tests for definePrime function", () => {
    const simpleNUmber = 17;
    const compositeNumber = 18;
    const toBigNumber = 1001;

    it("should operate correctly with simple, composite and incorrect number", () => {
        expect(definePrime(simpleNUmber)).toBe(`Number ${simpleNUmber} - prime number`);
        expect(definePrime(compositeNumber)).toBe(`Number ${compositeNumber} - composite number`);
        expect(definePrime(toBigNumber)).toBe("data is incorrect");
    });
});
