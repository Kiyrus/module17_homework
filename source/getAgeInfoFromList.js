export function getAgeInfoFromList(persons) {
    let oldestPersons = [];
    let maxAge = 0;
    let ageSum = null;
    let middleAge = null;

    if (persons.length <= 1) {
        return "Not valid list!";
    } else {
        for (let index = 0; index < persons.length; index++) {
            ageSum += persons[index].age;
            middleAge = (ageSum / persons.length).toFixed(1);

            if (persons[index].age > maxAge) {
                maxAge = persons[index].age;
                oldestPersons = [persons[index].name];
            } else if (persons[index].age === maxAge) {
                oldestPersons.push(persons[index].name);
            }
        }

        return (
            "Oldest person(s): " +
            oldestPersons.join(", ") +
            " / " +
            "Middle age: " +
            middleAge
        );
    }
}
