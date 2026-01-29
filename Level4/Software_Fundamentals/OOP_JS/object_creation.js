const user = Object.create(null);

user.name = "Carl";
user.score = 9;
user.increment = function () {
  user.score++;
};

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user1 = userCreator("Bob", 2);
