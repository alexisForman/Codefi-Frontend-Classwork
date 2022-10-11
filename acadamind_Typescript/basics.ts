// Video notes: Base Types and Primitives

// //Primitives: number, string, boolean
// //More complex types: arrays, objects
// //Function types, parameters

// //Primitives

// let age: number;

// age = 12;

// let userName = 'Max';

// let isInstructor = true;

// let hobbies: null;  //we cant ever add anything to this in TS, well go over a different way to use null

//-------------------------------------------------------------------------------------------------------
// Video Notes: Array and Object Types
// let hobbies: strings[]
//     hobbies = ['sports', 'cooking']

// let person = any; This is the default but its the same as JS and defeats the purpose of using TS
// let person: {
//     name: 'string';
//     age: number;
//     }; This is how we tell TS what to accept into this object.
//     person = {
//         name: 'Max'
//         age: 32;
//     } This is an example of something that will not give an error and be accepted as the object.   

//     person = {
//         isEmployee: true
//     }  This will give an error because we didnt define a boolean as a possibility in our object.
        // let people: {
        //     name: string;
        //     age: number;
        // }[]; This works too; different typescript features can m=be combined together

//--------------------------------------------------------------------------------------------------------
// Video Notes: Type Inference

// let course = 'React - The Complete Guide';
//     course = 12341; This gives an error because when we first initialize the variable course, we used a string.
//                     so Because of type inference, TS is going to require that any new data given to that 
//                     variable be the same data type. Type Inference is considered a good thing. 

//-------------------------------------------------------------------------------------------------------------
// Video Notes: Working with Union Types 

// Sometimes youll want to allow more than one type of data into a single variable. That is called a union type. 

// let course = string | number | boolean | null 

//-------------------------------------------------------------------------------------------------------------
// Video Notes: Assigning Type Aliases

// When writing a lot of code its likely that we will start to repeat our code.  
// TS has a type keyword. JS does not have the type keyword.

// type person

//----------------------------------------------------------------------------------------------------------------
// Video Notes: Functions and Function Types

// function add(a: number, b: number)  {
//     return a + b;
// } The return value is going to be a number because of type inference. The return type can 
// be explicitly set but that is often redundant and unnecessary

// function add(a: number, b: number): number  {

// };

// *DO NOT NAME YOUR FUNCTIONS AND VARIBALES THE SAME NAMES AS BUILT IN TYPES IN JS AND TS*

//----------------------------------------------------------------------------------------------------------
// Video Notes: Understanding Generics

// function insertAtBeginning(array: any[], value: any)    {
//     const newArray = [value, ...array];
//     return newArray;
// }

// const demoArray = [1, 2, 3];

// const updatedArray = insertAtBeginning(demoArray, -1); So I end up with [-1, 1, 2, 3]

// When using the keyword any, we can pass in any kind of data type, but that takes away the safe
// guards of TS. 

// function insertAtBeginning<t>(array: T[], value: T)    {
//     const newArray = [value, ...array];
//     return newArray;
// }

// To make it easier for TS to infer data types, especially of the return information, add the T Syntax. 
// That locks in the data type once it is used. 

//------------------------------------------------------------------------------------------------------
// Video Notes: Classes and Typesscript

// class student   {
//     firstName: string;
//     lastName: string;
//     age: number;
//     courses : string[];

//     constructor(first:string, last:string, age:number, courses:string[])    {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.courses = courses;
//     }
//     enroll(courseName:string)   {
//         this.courses.push(courseName)
//     }
// }

// By default properties and methods are public, meaning they can be accessed globally, 
// but we can make them private by adding keyword private to the key, then it can 
// only be accessed locally. 

//-------------------------------------------------------------------------------------------------------
// Video Notes: Interfaces

// Interfaces do not exist in regular javascript so they will not be compiled down to javascript

// interface Human {
//     firstName: string;
//     age: number;
//     greet: () => void;
// }

// let max: Human;

// The interface sets a pattern for what is to be expected in the object. So, since Max is 
// being assigned to the Human interface, his name has to be a string. His age has to be a number, 
// he has to be able to greet.

// Interfaces are useful when collaborating with other developers. 

// class instructor implements Human   {
//     firstName: string;
//     age: number;
//     greet() {
//         console.log('hello')
//     }
// }

// This class will have an error unless we follow the human interface and add what it requires
