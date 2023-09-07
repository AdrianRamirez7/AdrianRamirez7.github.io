//Object Challenges

//question 1
const person = {
    firstName: "Arthur",
    lastName: "Dent",
    location: function () {
        console.log(`${firstName} ${lastName} is from planet ${person.homePlanet}`)
    }
  }

//   Write the code that accesses the first name of the person object.
    let firstName = person.firstName;
//   Write the code that accesses the last name of the person object.
    let lastName = person.lastName;
//   Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
    person.homePlanet = "Earth";
//   Update the person object with a method that logs "Arthur Dent is from planet Earth".
        //side note: You can assign new methods to object literals outside of the object block:
    /*
        person.location = function() {
        console.log(`${firstName} ${lastName} `);
    };

    //REMEMBER, IF YOU USE THE METHOD SYNTAX ABOVE, YOU MUST CALL THE FUNCTION BELOW WITHOUT CONSOLE.LOG
    person.location();
*/
    person.location();

    //Question two
    const product = {
        name: "chair",
        price: 24.99
      }

const describeProduct = (obj) => {
    return `The product ${obj.name}. It costs $${obj.price}`;
};
console.log(describeProduct(product));

// const totalWithTax = (obj) => {
//     //let withTax = obj.price * 0.07;
//      let totalPrice = obj.price.toFixed(2);
//     return totalPrice; 
// };
function totalWithTax(product) {
    const taxRate = 0.07; // 7% sales tax
    const totalPrice = product.price * (1 + taxRate);
    return totalPrice.toFixed(2); // Round to two decimal places
  }


console.log(totalWithTax(product));


//question three
const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"],
    listIngrediants: function () {
      console.log(`The ingrediants for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}`)
    }
    
  };

//   Write the code that accesses the ingredients property.
    let grabIngrediants = lunch.ingredients;
// Write the code that access the third ingredient of the lunch object.
  let grabThirdIng = lunch.ingredients[2];
  console.log(grabThirdIng);
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
  const pbIngrediants = (object) => {
    let allIng = `${object.ingredients[0]}, ${object.ingredients[1]}, and ${object.ingredients[2]}`
    return `The ingrediants for a ${object.name} ${object.type} ${allIng}.`
  };

  console.log(pbIngrediants(lunch));
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.listIngrediants();

//question four
const animals = [
    { name: "Waffles", type: "dog", age: 7 },
    { name: "Fluffy", type: "cat", age: 14 },
    { name: "Spelunky", type: "dog", age: 4 },
    { name: "Hank", type: "cat", age: 11 }
  ]

//   Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const grabCats = animals.filter(animal => {
  if (animal.type === "cat") {
    return animal.type;
  }
})
console.log(grabCats)

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const animalNames = animals.map(animal => {
  
    return animal.name;
})
console.log(animalNames)
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const olderAnimals = animals.filter(animal => {
  if (animal.age > 10) {
    return animal;
  }
});
console.log(olderAnimals)
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}

// Write the code that destructures the author object so that the following code snippet will run successfully:

const { name, genre } = author;

console.log(`Author: ${name}`);
console.log(`Genre: ${genre}`);

//pokemon

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}

// Create a function called describePokemon that take an object 
// like the ones above and uses destructuring to return a description of the 
// Pokemon so that the following code snippet will run successfully:

const describePokemon = ({species, pokemon_type}) => {
  return `${species} is a ${pokemon_type} pokemon`
}
console.log(describePokemon(pokeOne));
console.log(describePokemon(pokeTwo));

//triangle dimensions
const triangleDimensions = {
  base: 2,
  height: 5
};

