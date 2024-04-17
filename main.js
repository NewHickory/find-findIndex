// Use a do...while loop to console.log the numbers from 1 to 1000.

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 1000);


// Create an object (with keys and values) called person with the provided data.

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
}

console.log(person)

// Create a function that logs out the keys of the object using Object.keys().

const logKeys = (obj) => {
  const keys = Object.keys(obj);
  keys.forEach(key => {
      console.log(key);
  });
}

logKeys(person);

// Create a function that logs out the keys and values of the object using Object.entries().

const logKeysValues = (obj) => {
  const keysValues = Object.entries(obj);
  keysValues.forEach(keyValue => {
      console.log(keyValue);
  });
}

logKeysValues(person);


const arrayOfPersons = [
  {
      firstName: 'Jane',
      lastName: 'Doe',
      birthDate: 'Jan 5, 1925',
      gender: 'female'
  },
  {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: 'Feb 15, 1945',
      gender: 'male'
  },
  {
      firstName: 'Jill',
      lastName: 'Davis',
      birthDate: 'Oct 4, 2012',
      gender: 'female'
  },
  {
      firstName: 'Jack',
      lastName: 'Davis',
      birthDate: 'Jan 5, 1997',
      gender: 'male'
  }
]

console.log(arrayOfPersons)

// Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.

const oddBirthDate = (array) => {
  for (const person of array) {
    const birthYear = person.birthDate.split(',');
    if (birthYear[1] % 2 !== 0) {
      console.log(birthYear[1]);
    }
  }
}

oddBirthDate(arrayOfPersons);

// Use .map() to map over the arrayOfPersons and console.log() their information.

const mapPersons = (array) => { array.map(person => {
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.birthDate);
    console.log(person.gender);
  });
}

mapPersons(arrayOfPersons);

// Use .filter() to filter the persons array and console.log only males in the array.

const malePersons = arrayOfPersons.filter((array) => {
  return array.gender == 'male';
});

console.log(malePersons)

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const beforeJan1 = (array) => {
  return array.filter(person => {
    const birthYear = person.birthDate.split(',');
    if (birthYear[1] < 1990) {
      return true;
    }
  });
}

console.log(beforeJan1(arrayOfPersons));

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
// BONUS - .filter() out the people in the array who are younger than 21.

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const below21 = (array) => {
  return array.filter(person => {
    const birthYear = person.birthDate.split(',');
    if (currentYear - birthYear[1] < 21) {
      return true;
    }
  });
}

console.log(below21(arrayOfPersons))