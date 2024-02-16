const apiUrl = "https://pgm.cmsdevelopment.be/api";

const initApp = async () => {
    // 1. fetch data
    const data = await fetchDataForType("superhero");
    // 2. Render the data
    renderData(data);
};

/**
 * fetch the students
 * @param type The type of data to fetch (student or superhero)
 */
const fetchDataForType = async (type) => {
    // Validate the incoming type
    if (type !== "student" && type !== "superhero") return [];
    const data = await fetch(`${apiUrl}/${type}`);

    const json = await data.json();

    if (type === "superhero") return json.superheroes;
    else return json.student;
};

const postStudents = async () => {
    const student = {
        firstname: "Harmen",
        lastname: "Hoekstra",
        nickname: "joow",
        classname: "PGM-C",
        email: "harmenhoekstra18@gmail.com",
        age: 21,
        avatar: "undefined",
        hobbies: ["cycling", "running"],
        motto: "joooooow",
        about: "blablabla"
    };

    // Hier zou je de studentgegevens kunnen posten naar de server met een fetch POST-verzoek
};

/**
 * Render out data to the DOM
 */
const renderData = (data) => {
    console.log(data)
    const cards = data.map((dataItem) => {
        const card = `
            <article
                class="student"
                style="background-image: url('${dataItem.avatar}')"
              >
                <h2 class="student__name">${dataItem.firstname} ${dataItem.lastname}</h2>
                <div class="student__info">
                  <h3>${dataItem.nickname}</h3>
                  <em class="caption">${dataItem.classname}</em>
                  <p>${dataItem.about}</p>
                  <h4>Levensmotto</h4>
                  <blockquote>${dataItem.motto}</blockquote>
                </div>
              </article>
        `;
        return card
    });

    // Hier moet je de 'cards' in de DOM invoegen, bijvoorbeeld door deze aan een container-element toe te voegen
    const studentsContainer = document.querySelector('.students');
    studentsContainer.innerHTML = cards.join('');
};

initApp("superhero"); // initialize the application
