//classes

// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }


  }
  //when they ask for object I think they mean instant class??
  const blackCoffee = new Coffee("black", 0, 0); //if you dont need extra arguments. put zero
  console.log(blackCoffee.coffeeProfile())

  //question three
  const creamAndSugarCoffee = new Coffee('regular', '1', '2');//this is coming from creams and sugars method
  console.log(creamAndSugarCoffee.coffeeProfile());


class Latte {
    constructor(flavor, milkType, number, shots) {
        this.flavor = flavor;
        this.milkType = milkType;
        this.number = number;
        this.shots = shots;
    }

    latteProfile () {
        return `My latte is ${this.flavor} with ${this.milkType} and ${this.number} of ${this.shots}'s.`
    }


}

const myLatte = new Latte("regular", "skid", "single", "shot");
console.log(myLatte.latteProfile());






// class Squirrel {
//     constructor() {
//       this.nutCount = 2
//     }
  
//     storeNut() {
//       this.nutCount += 1 // these add the value of the constructor./
//     }
  
//     eatNut() {
//       this.nutCount -= 1
//     }
//   }
  
//   //instant class
//   const rocky = new Squirrel()
//   const alvin = new Squirrel()
//   const adrian = new Squirrel()
  
//   alvin.storeNut()//this iterates because storeNut += 1.
//   alvin.storeNut()
//   alvin.storeNut()

//   console.log(alvin.nutCount)
  
//   console.log("Rocky has ", rocky.nutCount)
//   // output: "Rocky has 0"
  
//   console.log("Alvin has ", alvin.nutCount)
//   // output: "Alvin has 2"