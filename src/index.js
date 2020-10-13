module.exports = function toReadable (number) {
  let numUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',];
  let numDozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number <= 20) {
      return numUnits[number];
  }

  if (number <= 99) {
      let numStr = String(number);
      let result = numDozens[+numStr[0]]

      if (numStr[1] !== '0') {
          result += ` ${numUnits[+numStr[1]]}`;
      }
      return result;
  }

  if (number <= 999) {
      let numStr = String(number);
      let result = `${numUnits[+numStr[0]]} hundred`

      let den = + `${numStr[1]}${numStr[2]}`

      if (den !== 0) {
          if (den <= 20) {
              result += ` ${numUnits[den]}`;
          } else {
              let numStr = String(den);
              result += ` ${numDozens[+numStr[0]]}`;

              if (numStr[1] !== '0') {
                  result += ` ${numUnits[+numStr[1]]}`;
              }
          }
      }
      return result;
  }
}