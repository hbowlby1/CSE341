// most of this section was review but I watched it anyway.

//aero functions
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + userName + ', age is ' + userAge + " and the hobbies include " + userHasHobby
    );
}

console.log(summarizeUser("test", 27, "test2"));

//spread and rest

const hobbies = ['Sports', 'Cooking'];

const copiedArray = [...hobbies];
console.log(copiedArray);

//rest
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));

//destructuring
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name)
}

printName(person);

const { name, age } = person;
console.log(name, age);


//Async

const fetchData = () => {
    //start of promises
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            callback('Done');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
    });
}, 2000);

console.log("This will run first before the ");

