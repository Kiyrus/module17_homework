import { revertString } from "../revertString.js";

describe("tests for revertString function", () => {
    it("should reverse string", () => expect(revertString("abc")).toBe("cba"));

    it("should reverse string", () => expect(revertString("")).toBe("Enter the word!"));

    it("should reverse string", () => expect(revertString("a")).toBe("Enter the word!"));
});
