const users = [
    { id: 1, name: 'abul', job: 'doctor' }
];

// console.log(users[0].name);

const data = {
    count: 500,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'leader' },
        { id: 3, name: 'cabul', job: 'leader' }
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'ritht side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
};
const userFloor = user?.address?.stret?.second;
console.log(userFloor);