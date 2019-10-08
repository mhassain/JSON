const petsData = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2018,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];


function age(birthYear){
  let calculatedAge = new Date().getFullYear() - birthYear;
  if(calculatedAge == 0){
    return 'Baby'
  } else if (calculatedAge == 1){
    return '1 year old'
  } else {
    return `${calculatedAge} years old`
  }
}

function petTemplate(pet){
  return `
    <div class="animal">
        <img class="pet-photo" src="${pet.photo}">
        <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span> </h2>
        <p><strong>Age:</strong> ${age(pet.birthYear)} </p>
    </div>
  `;
}

document.getElementById("app").innerHTML = `
  <h2 class="app-title">My Pets: ${petsData.length}</h2>
  ${petsData.map(petTemplate).join(' ')}
`