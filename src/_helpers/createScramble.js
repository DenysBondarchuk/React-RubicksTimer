export const createScramble = () => {
  const arrR = 'R';
  const arrL = 'L';
  const arrU = 'U';
  const arrD = 'D';
  const arrF = 'F';
  const arrB = 'B';

  let mainArr = [arrR, arrL, arrU, arrD, arrF, arrB];

  const newArr = [];

  while (newArr.length < 25) {
    const rnd = Math.floor(Math.random() * mainArr.length);

    const rndChar = mainArr[rnd];

    const last = newArr[newArr.length - 1];
    const last2 = newArr[newArr.length - 2];

    if ((last === arrR && last2 === arrL) || (last === arrL && last2 === arrR)) {
      mainArr = [arrU, arrD, arrF, arrB];
    } else if ((last === arrU && last2 === arrD) || (last === arrD && last2 === arrU)) {
      mainArr = [arrR, arrL, arrF, arrB];
    } else if ((last === arrF && last2 === arrB) || (last === arrB && last2 === arrF)) {
      mainArr = [arrR, arrL, arrU, arrD];
    } else {
      mainArr = [arrR, arrL, arrU, arrD, arrF, arrB];
    }

    if (rndChar !== last) {
      newArr.push(rndChar);
    }
  }

  for (let i = 0; i < newArr.length; i += 1) {
    const rndAdd = Math.floor(Math.random() * (4 - 1)) + 1;

    if (rndAdd === 1) {
      newArr[i] = `${newArr[i]}`;
    } else if (rndAdd === 2) {
      newArr[i] = `${newArr[i]}'`;
    } else {
      newArr[i] = `${newArr[i]}2`;
    }
  }

  const lastArr = newArr.join(' ');

  return lastArr;
};

export default createScramble;
