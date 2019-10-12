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
    birthYear: 2010,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2014,
    photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
  }
];

function age(birthYear) {
  let calculateAge = new Date().getFullYear() - birthYear;
  if (calculateAge == 0) {
    return "Baby";
  } else if (calculateAge == 1) {
    return "1 year old";
  } else {
    return `${calculateAge} years old`;
  }
}

function foods(foods) {
  return `
    <h4>Favorite Foods:</h4>
    <ul class="foods-list">
      ${foods
        .map(function(food) {
          return `
          <li>${food}</li>
          `;
        })
        .join(" ")}
    </ul>
  `;
}

document.getElementById("app").innerHTML = `
  <h1 class="app-title">Pets: (${petsData.length})</h1>
  ${petsData
    .map(function(pet) {
      return `
        <div class="animal">
          <img class="pet-photo" src="${pet.photo}">
          <h2 class="pet-name">${
            pet.name
          }<span class="species">(${pet.species})</span></h2>
          <p><b>Age:</b> ${age(pet.birthYear)}</p>
          ${pet.favFoods ? foods(pet.favFoods) : " "}
        </div>
      `;
    })
    .join(" ")}
  <p class="footer">These ${petsData.length} pets were recently added.</p>
`;
