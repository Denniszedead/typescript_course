// Person object
/*const person: {
    name: string;
    age: number;
    hobbies: string[]; // Array
    role: [number, string]; // Tuple
} = {
    name: 'Bob',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}*/

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Bob',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

if (person.role == Role.ADMIN) {
    console.log('Is admin')
}
