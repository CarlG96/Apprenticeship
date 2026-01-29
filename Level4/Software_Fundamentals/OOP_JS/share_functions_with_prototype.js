function UserCreator(name, score) {
  // Uppercase the first letter for functions that need new
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  // Adds to the userCreator function object's prototype object
  this.score++;
};

UserCreator.prototype.login = function () {
  console.log("Yar");
};

const user1 = new UserCreator("Carl", 28); // This avoids having to create the object by hand in the current
// context

user1.login();

// __proto__ is on the object, whilst prototype is what is set on the function/ object combo
// __proto__ creates references to the function/ object combo under the hood

// new keyword creates a this object
// Then it creates the __proto__ bonds to functions on that this object
// then it returns the object

// The this keyword, called after dot notation, will always refer to the object
// to the left hand side of the dot in the execution context
