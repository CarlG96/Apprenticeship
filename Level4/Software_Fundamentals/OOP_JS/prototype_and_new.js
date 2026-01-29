function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore); // Adds prototype of functionStore object
  // this means there is only ever one reference in memory to the function instead
  // of on every object
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

// Object.create returns an empty object, however, it has a hidden property
// __proto__ which is a reference to the prototype of the object in memory.
// The Object.create() static method creates a new object, using an existing object as the
// prototype of the newly created object.
// This reduces the amount of memory used for functions
// When javascript can't find the property on the object, it looks in the
//__proto__ property to look it up

const functionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("You're logged in");
  },
};

const user1 = new userCreator("Phil", 4); // new does all the Object.create() behind the scenes

// Functions are function-object combos in javascript

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5; // This adds the property stored to the function multiplyBy2
console.log(multiplyBy2(3)); // This will return 6, becuase the functionality has not been overwritten

console.log(multiplyBy2.stored); // Will still output 5
console.log(multiplyBy2.prototype); // Will output {}, as prototype is a default property on all functions
