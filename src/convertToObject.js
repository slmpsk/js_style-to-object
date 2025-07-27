'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let result = sourceString.split(';');

  result = result.map((item) => item.split(':'));

  const newArray = result.filter((item) => item.length === 2);
  const resultArray = {};

  for (const elem of newArray) {
    if (elem[0] !== '' && elem[1] !== '') {
      const key = elem[0].trim();
      const value = elem[1].trim();

      resultArray[key] = value;
    }
  }

  return resultArray;
}

module.exports = convertToObject;
