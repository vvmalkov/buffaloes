const randomProfile = require('random-profile-generator');

const getRandomNames = (count) => {
  const names = [];
  for (let i = 0; i < count; i++) {
    names.push(randomProfile.name());
  }
  return names;
};

const getRandomAddress = (count) => {
  const addresses = [];
  for (let i = 0; i < count; i++) {
    addresses.push(randomProfile.address());
  }
  return addresses;
};

module.exports = { getRandomNames, getRandomAddress };
