class User {
  #firstName;
  #secondName;
  #age;

  constructor(newFirstName, newSecondName, newAge) {
    // if (newFirstName === undefined || newSecondName === undefined || newAge === undefined) {
    //   throw new Error('Empty data');
    // }

    this.#typeTest(newFirstName, 'string');
    this.#typeTest(newSecondName, 'string');
    this.#typeTest(newAge, 'number');

    this.#firstName = newFirstName;
    this.#secondName = newSecondName;
    this.#age = newAge;
  }

  set firstName(newFirstName) {
    this.#typeTest(newFirstName, 'string');
    this.#firstName = newFirstName;
  }
  set secondName(newSecondName) {
    this.#typeTest(newSecondName, 'string');
    this.#secondName = newSecondName;
  }
  set age(newAge) {
    this.#typeTest(newAge, 'number');
    this.#age = newAge;
  }

  get firstName() {
    return this.#firstName;
  }
  get secondName() {
    return this.#secondName;
  }
  get age() {
    return this.#age;
  }
  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }

  #typeTest(value, type) {
    if (typeof value !== type) {
      throw new Error(`Wrong value type - should be "${type}"`);
    }
  }

  static fromObject(obj) {
    return new User(obj.firstName, obj.secondName, obj.age);
  }

  introduce() {
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
    this.#age += 1;
    return this;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function createUser(firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function createUsers(data) {
  return data.reduce((acc, el) => acc.concat(User.fromObject(el)), []);
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function filterAged(users, age) {
  return users.filter(el => el.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function sortUsersByComparator(users) {
    return users.sort(TestUtils.sortComparatorByAge);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  const u = users.map((el, idx) => (idx % 2 === 0 ? el.celebrateBirthday() : el));
  return u;
};
