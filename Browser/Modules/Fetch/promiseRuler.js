const allRulers = ['Cersei Lannister', 'Danny', 'Jon Snow', 'Euron Greyjoy', 'Jaimie Lannister', 'nightsKing'];

const times = [7000, 5000, 3000, 1000, 1000, 4000];

let index = 0;
let currentRuler;

const changeRuler = (rulersName, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(rulersName);
    }, time)
  })
}


changeRuler(allRulers[index], times[index])

    .then(name => {
      currentRuler = name;
      console.log(currentRuler);
      index++;
      return changeRuler(allRulers[index], times[index]);
    })

    .then(name => {
      currentRuler = name;
      console.log(currentRuler);
      index++;
      return changeRuler(allRulers[index], times[index]);
    })

    .then(name => {
      currentRuler = name;
      console.log(currentRuler);
      index++
      return changeRuler(allRulers[index], times[index]);
    })

    .then(name => {
      currentRuler = name;
      console.log(currentRuler);
      index++;
      return changeRuler(allRulers[index], times[index]);
    })

    .then(name => {
      currentRuler = name;
      console.log(currentRuler);
      index++;
      return changeRuler(allRulers[index], times[index]);
    })

    .then(name => {
      currentRuler = name;
      console.log(currentRuler);
      index++;
      return changeRuler(allRulers[index], times[index]);
    })