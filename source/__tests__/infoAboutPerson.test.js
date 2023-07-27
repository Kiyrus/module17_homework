import { getAgeInfoFromList } from "../getAgeInfoFromList.js";

describe("tests for infoAboutPerson", () => {
    let personsList = [
        { name: "Walter", age: 45 },
        { name: "Skyler", age: 40 },
        { name: "Jesse", age: 37 },
        { name: "Hank", age: 43 },
        { name: "Marie", age: 39 },
        { name: "Saul", age: 46 },
        { name: "Mike", age: 34 },
        { name: "Tuco", age: 55 },
        { name: "Lydia", age: 30 },
        { name: "Todd", age: 31 },
        { name: "Kim", age: 33 },
        { name: "Gustavo", age: 29 },
        { name: "Howard", age: 36 },
    ];

    let listOfMike = [
        { name: "Walter", age: 45 },
        { name: "Skyler", age: 40 },
        { name: "Jesse", age: 37 },
        { name: "Hank", age: 43 },
        { name: "Marie", age: 39 },
        { name: "Saul", age: 46 },
        { name: "Mike1", age: 55 },
        { name: "Mike2", age: 55 },
        { name: "Mike3", age: 55 },
        { name: "Mike4", age: 55 },
        { name: "Nacho", age: 34 },
        { name: "Lydia", age: 30 },
        { name: "Todd", age: 31 },
        { name: "Kim", age: 33 },
        { name: "Gustavo", age: 29 },
        { name: "Howard", age: 36 },
    ];

    it("should return name of oldest person and middle age of all persons in list", () => {
        expect(getAgeInfoFromList(personsList)).toBe("Oldest person(s): Tuco / Middle age: 38.3");
    }),
        it("should return list with all Mikes and middle age of all persons in list", () => {
            expect(getAgeInfoFromList(listOfMike)).toBe(
                "Oldest person(s): Mike1, Mike2, Mike3, Mike4 / Middle age: 41.4"
            );
        });
});
