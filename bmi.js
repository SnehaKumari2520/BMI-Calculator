const forms = document.querySelector('form')

forms.addEventListener ('submit', function(e){
  e.preventDefault()

  const heightValue = document.querySelector('#height').value;
  const weightValue = document.querySelector('#weight').value;
  const height = parseInt(heightValue);
  const weight = parseInt(weightValue);
  const results = document.querySelector('#results');

  if(heightValue === '' || height <= 0 || isNaN(height)){
    results.innerHTML = `please give a valid height`;
  }
  else if(weightValue === '' || weight <= 0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight`;
  } 
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

     let message = "";

    if (bmi < 18.6) {
      message = "<br>Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = "<br>Normal Range";
    } else {
      message = "<br>Overweight";
    }

    results.innerHTML = `<span style="font-weight:bold; display:block; text-align:center;">   ${bmi} ${message} </span>`;

  }
});