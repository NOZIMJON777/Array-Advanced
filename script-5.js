let users = [
    { id: 1, year: 1998, engine: 1, name: "Tico" },
    { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
    { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
    { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
    { id: 5, year: 2012, engine: 2, name: "Malibu" },
    { id: 6, year: 2000, engine: 1.2, name: "Damas" },
    { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
]

// for (let i = 0; i < users.length; i++) {
//     // if (users[i].year < 2000) {
//     //     console.log(users[i]);
//     // }

//     // if (users[i].year > 2010) {
//     //     console.log(users[i]);
//     // }

// }


// let sorted = users.sort((a, b) => a.engine - b.engine)
// let sorted = users.sort((a, b) => a.year - b.year)
// let sorted = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sorted);

let newName = users.map((value) => {
    if (value.year <= 2000) {
        console.log({ ...value, status: 'old cars' });
    } else if (value.year >= 2000 && value.year <= 2010) {
        console.log({ ...value, status: 'cars are not so old' });
    } else if (value.year >= 2010 && value.year <= 2022) {
        console.log({ ...value, status: 'cars are new' });
    }

})



