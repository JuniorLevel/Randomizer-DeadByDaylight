const chooseSurvivorBtn = document.querySelector(".survivor");
const chooseKillerBtn = document.querySelector(".killer");
const previewContainer = document.querySelector(".preview-container");
const p = document.querySelector(".paragraph");
let getRandomBtn = null;

const createHTML = (role, nameId) => {
  return `<h1>Кто ${role} ?</h1>
             <p class="paragraph"></p>
             <button id="${nameId}" class="b-1">Узнать</button>`;
};

function getBtn(role, nameId) {
  previewContainer.insertAdjacentHTML("afterend", createHTML(role, nameId));
  previewContainer.style.display = "none";
  return (getRandomBtn = document.getElementById(nameId));
}

function getRandomCharacter(listOfCharacters) {
  const randomCharacterIndex = Math.floor(
    Math.random() * (listOfCharacters.length - 1)
  );
  const CharacterValue = listOfCharacters[randomCharacterIndex];
  return CharacterValue;
}

function changeBtnStyles() {
  getRandomBtn.textContent = "Выбор сделан";
  getRandomBtn.style.opacity = "0.4";
  getRandomBtn.style.cursor = "default";
  getRandomBtn.setAttribute("disabled", "true");
}

if (!localStorage.getItem("ListOfSurvivors")) {
  chooseSurvivorBtn.style.backgroundColor = "red";
  chooseSurvivorBtn.style.opacity = "0.5";
}
if (!localStorage.getItem("ListOfKillers")) {
  chooseKillerBtn.style.backgroundColor = "red";
  chooseKillerBtn.style.opacity = "0.5";
}

chooseSurvivorBtn.addEventListener("click", () => {
  getBtn("выживший", "b-survivor");
  if (!localStorage.getItem("ListOfSurvivors")) {
    localStorage.setItem(
      "ListOfSurvivors",
      JSON.stringify([
        "Дуйат Фэйрфилд",
        "Мэг Томас",
        "Клодетт Морель",
        "Джейк Парк",
        "Нея Карлсон",
        "Лори Строуд",
        "Эйс Висконти",
        "Уильям 'Билл' Овербек",
        "Фенг Мин",
        "Дэвид Кинг",
        "Квентин Смит",
        "Детектив Тэпп",
        "Кейт Денсон",
        "Адам Фрэнсис",
        "Джефф Йохансен",
        "Джейн Ромеро",
        "Эшли Джей Уильянс",
        "Стив Харрингтон",
        "Нэнси Уиллер",
        "Юи Кимура",
        "Зарина Кассир",
        "Шерил Мейсон",
        "Феликс Рихтер",
        "Элоди Ракото",
        "Ли Юнчик",
        "Джилл Валентайн",
        "Леон С. Кеннеди",
        "Микаэла Рид",
        "Хонас Васкес",
        "Витторио Тоскано",
      ])
    );
  }
  getRandomBtn.onclick = () => {
    const p = document.querySelector(".paragraph");
    if (JSON.parse(localStorage.getItem("ListOfSurvivors")).length === 0) {
      p.textContent = "Сурвы закончились, иди спать!";
      localStorage.removeItem("ListOfSurvivors");
      getRandomBtn.style.display = "none";
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
    const valueCharacter = getRandomCharacter(
      JSON.parse(localStorage.getItem("ListOfSurvivors"))
    );
    p.textContent = valueCharacter;
    let updatedList = JSON.parse(
      localStorage.getItem("ListOfSurvivors")
    ).filter((value) => {
      return value !== valueCharacter;
    });
    localStorage.setItem("ListOfSurvivors", JSON.stringify(updatedList));

    setTimeout(() => {
      p.textContent = "Удачной игры!";
    }, 2000);
    changeBtnStyles();

    setTimeout(() => {
      location.reload();
    }, 3000);
  };
});

chooseKillerBtn.addEventListener("click", () => {
  getBtn("маньяк", "b-killer");
  if (!localStorage.getItem("ListOfKillers")) {
    localStorage.setItem(
      "ListOfKillers",
      JSON.stringify([
        "Коля",
        "ХиллБилли",
        "Нюрса",
        "Охотница",
        "Бубба",
        "Клоун",
        "Доктор",
        "Рыгальщица",
        "Демогоргон",
        "Палач",
        "Мор",
        "Аниме",
        "Немезис",
        "Пинхед",
        "Рыцарь",
      ])
    );
  }
  getRandomBtn.onclick = () => {
    const p = document.querySelector(".paragraph");
    if (JSON.parse(localStorage.getItem("ListOfKillers")).length === 0) {
      p.textContent = "Маны закончились, иди спать!";
      localStorage.removeItem("ListOfKillers");
      getRandomBtn.style.display = "none";
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
    const valueCharacter = getRandomCharacter(
      JSON.parse(localStorage.getItem("ListOfKillers"))
    );
    p.textContent = valueCharacter;
    let updatedList = JSON.parse(localStorage.getItem("ListOfKillers")).filter(
      (value) => {
        return value !== valueCharacter;
      }
    );
    localStorage.setItem("ListOfKillers", JSON.stringify(updatedList));

    setTimeout(() => {
      p.textContent = "Удачной игры!";
    }, 2000);

    changeBtnStyles();

    setTimeout(() => {
      location.reload();
    }, 3000);
  };
});

//TODO: Упростить код в событиях chooseKillerBtn и chooseKillerBtn (вынести код в одну функцию)
