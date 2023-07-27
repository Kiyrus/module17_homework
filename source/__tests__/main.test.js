import { multiply } from "../main.js";

describe("test multiply", () => {
    it("multiply 1 * 0 to equal 0", () => {
        const result = multiply(1, 0);
        expect(result).toBe(0);
    }),
        xit("multiply 1 * 1 to equal 1", () => {
            const result = multiply(1, 1);
            expect(result).toBe(1);
        });
});
