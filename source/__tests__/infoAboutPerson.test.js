import { getAgeInfoFromList } from "../getAgeInfoFromList.js";

describe("tests for infoAboutPerson", () => {
    let personsList = [
        {
            name: "Alberto Véga",
            age: 40,
            gender: "male",
        },
        {
            name: "Bob Odenkirk",
            age: 50,
            gender: "male",
        },
        {
            name: "Govard Muldoon",
            age: 60,
            gender: "male",
        },
        {
            name: "Jesse Pinkman",
            age: 30,
            gender: "male",
        },
        {
            name: "Hank Moody",
            age: 35,
            gender: "male",
        },
        {
            name: "Marisol Tomei",
            age: 45,
            gender: "female",
        },
        {
            name: "Raymond Chandler",
            age: 65,
            gender: "male",
        },
        {
            name: "Walt Warren",
            age: 60,
            gender: "male",
        },
        {
            name: "José Guadalupe Posada Carrillo",
            age: 70,
            gender: "male",
        },
        {
            name: "Jack Bauer",
            age: 30,
            gender: "male",
        },
        {
            name: "Aaron Paul",
            age: 40,
            gender: "male",
        },
        {
            name: "Mia Farrow",
            age: 45,
            gender: "female",
        },
        {
            name: "Lucas Hedges",
            age: 60,
            gender: "male",
        },
        {
            name: "Joanne Whalen",
            age: 65,
            gender: "female",
        },
        {
            name: "Walter White",
            age: 55,
            gender: "male",
        },
        {
            name: "Oscar-winning actor Walter White",
            age: 55,
            gender: "male",
        },
        {
            name: "Susan Banks",
            age: 45,
            gender: "female",
        },
        {
            name: "Tom Wolfe",
            age: 65,
            gender: "male",
        },
        {
            name: "Jane Banks",
            age: 60,
            gender: "female",
        },
        {
            name: "Renee Montoya",
            age: 45,
            gender: "female",
        },
        {
            name: "Aaron Ross",
            age: 40,
            gender: "male",
        },
        {
            name: "Jack McBrayer",
            age: 50,
            gender: "male",
        },
        {
            name: "Laurence Fishburne",
            age: 60,
            gender: "male",
        },
        {
            name: "Melinda McGraw",
            age: 45,
            gender: "female",
        },
        {
            name: "Betty White",
            age: 60,
            gender: "female",
        },
        {
            name: "Jimmy McGill",
            age: 40,
            gender: "male",
        },
    ];

    let listOfCarrillo = [
        {
            name: "Alberto Véga",
            age: 40,
            gender: "male",
        },
        {
            name: "Bob Odenkirk",
            age: 50,
            gender: "male",
        },
        {
            name: "Govard Muldoon",
            age: 60,
            gender: "male",
        },
        {
            name: "Jesse Pinkman",
            age: 30,
            gender: "male",
        },
        {
            name: "Hank Moody",
            age: 35,
            gender: "male",
        },
        {
            name: "Marisol Tomei",
            age: 45,
            gender: "female",
        },
        {
            name: "Raymond Chandler",
            age: 65,
            gender: "male",
        },
        {
            name: "Walt Warren",
            age: 60,
            gender: "male",
        },
        {
            name: "José Guadalupe Posada Carrillo1",
            age: 70,
            gender: "male",
        },
        {
            name: "José Guadalupe Posada Carrillo2",
            age: 70,
            gender: "male",
        },
        {
            name: "José Guadalupe Posada Carrillo3",
            age: 70,
            gender: "male",
        },
        {
            name: "José Guadalupe Posada Carrillo4",
            age: 70,
            gender: "male",
        },
        {
            name: "Jack Bauer",
            age: 30,
            gender: "male",
        },
        {
            name: "Aaron Paul",
            age: 40,
            gender: "male",
        },
        {
            name: "Mia Farrow",
            age: 45,
            gender: "female",
        },
        {
            name: "Lucas Hedges",
            age: 60,
            gender: "male",
        },
        {
            name: "Joanne Whalen",
            age: 65,
            gender: "female",
        },
        {
            name: "Walter White",
            age: 55,
            gender: "male",
        },
        {
            name: "Oscar-winning actor Walter White",
            age: 55,
            gender: "male",
        },
        {
            name: "Susan Banks",
            age: 45,
            gender: "female",
        },
        {
            name: "Tom Wolfe",
            age: 65,
            gender: "male",
        },
        {
            name: "Jane Banks",
            age: 60,
            gender: "female",
        },
        {
            name: "Renee Montoya",
            age: 45,
            gender: "female",
        },
        {
            name: "Aaron Ross",
            age: 40,
            gender: "male",
        },
        {
            name: "Jack McBrayer",
            age: 50,
            gender: "male",
        },
        {
            name: "Laurence Fishburne",
            age: 60,
            gender: "male",
        },
        {
            name: "Melinda McGraw",
            age: 45,
            gender: "female",
        },
        {
            name: "Betty White",
            age: 60,
            gender: "female",
        },
        {
            name: "Jimmy McGill",
            age: 40,
            gender: "male",
        },
    ];

    let listWithOnePerson = [
        {
            name: "Walter White",
            age: 55,
            gender: "male",
        }
    ];

    let listWithNoOnePersons = [];

    it("should return name of oldest person and middle age of all persons in list", () => {
        expect(getAgeInfoFromList(personsList)).toBe(
            "Oldest person(s): José Guadalupe Posada Carrillo / Middle age: 50.6"
        );
    });

    it("should return list with all José Guadalupe Posada Carrillo and middle age of all persons in list", () => {
        expect(getAgeInfoFromList(listOfCarrillo)).toBe(
            "Oldest person(s): José Guadalupe Posada Carrillo1, José Guadalupe Posada Carrillo2, José Guadalupe Posada Carrillo3, José Guadalupe Posada Carrillo4 / Middle age: 52.6"
        );
    });

    it("should return 'Not valid list!'", () => {
        expect(getAgeInfoFromList(listWithOnePerson)).toBe("Not valid list!");
    });

    it("should return 'Not valid list!'", () => {
        expect(getAgeInfoFromList(listWithNoOnePersons)).toBe("Not valid list!");
    });
});
