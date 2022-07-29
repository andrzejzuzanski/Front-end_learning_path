const load = new Promise((resolve, reject) => {
  if (dataIsOk) {
    resolve(data);
  } else {
    reject("error");
  }
});

load
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

function loadNew(num) {
  return new Promise((resolve, reject) => {
    if (num >= 29) {
      resolve(`your age is less than ${num}`);
    } else {
      reject(`you are old`);
    }
  });
}
