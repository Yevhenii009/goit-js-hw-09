const newForm = document.querySelector('.form');
newForm.addEventListener('submit', onNewForm);

function onNewForm(elem){
  elem.preventDefault();
 
  let delay = Number(elem.currentTarget.delay.value);
  let step = Number(elem.currentTarget.step.value);
  let amount = Number(elem.currentTarget.amount.value);

for (let position = 1; position <= amount; position += 1) {
  createPromise(position, delay)
    .then(({ position, delay }) => {
    setTimeout(() => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }, delay)
  })
    .catch(({ position, delay }) => {
    setTimeout(() => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }, delay)
  });
delay += step;
}
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promiseValue = {position, delay};

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(promiseValue);
    }
      reject(promiseValue);
  })
}
