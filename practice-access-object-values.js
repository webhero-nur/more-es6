/**
 * const student = {
 *      name: 'Fredie',
 *      age: 26,
 * }
 * 
 * 1. Console the value of age
 */

const student = {
    name: 'Fredie',
    age: 26,
}
console.log(student.age);

/*
let data = {
    location: [
        {
            latitude: '34.5, 37, 8',
            longiture: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
}

2. Console the value of city
*/

let data = {
    location: [
        {
            latitude: '34.5, 37, 8',
            longiture: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
}
const cityValue = data.location[0].city;
console.log(cityValue);

/*
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

3. Console the below mentioned values:
3-1. email (line 49)
3-2. address (line 50)
3-3. city (line 53)
3-4. lat (line 56)
3-5. company name (line 63)
*/
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

const userEmail = user.email;
const userAddress = user.address;
const userAddressCity = user.address.city;
const userAddressGeoLat = user.address.geo.lat;
const userCompanyName = user.company.name;
console.log(`${userEmail}`);
console.log(userAddress);
console.log(`${userAddressCity} \n${userAddressGeoLat} \n${userCompanyName}`);