const userArr = [{
        id: 1,
        name: "Mark Zuckerberg",
        age: 38,
        photo: 'img/photo-MarkZuckerberg.jpg',
        gender: 'male',
    },
    {
        id: 2,
        name: "Claire Boucher",
        age: 35,
        photo: 'img/photo-ClaireBoucher.webp',
        gender: 'female',
    },
    {
        id: 3,
        name: "Ty Simpkins",
        age: 21,
        photo: 'img/photo-TySimpkins.jpg',
        gender: 'male',
    },
    {
        id: 4,
        name: "Tom Holland",
        age: 26,
        photo: 'img/photo-TomHolland.webp',
        gender: 'male',
    },
    {
        id: 5,
        name: "Bill Gates",
        age: 67,
        photo: 'img/photo-BillGates.webp',
        gender: 'male',
    },
    {
        id: 6,
        name: "Elon Musk",
        age: 51,
        photo: 'img/photo-ElonMusk.webp',
        gender: 'male',
    },
    {
        id: 7,
        name: "Talulah Jane",
        age: 37,
        photo: 'img/photo-TalulahJane.webp',
        gender: 'female',
    },
    {
        id: 8,
        name: "Bernard Arnault",
        age: 74,
        photo: 'img/photo-BernardArnault.jpg',
        gender: 'male',
    },
    {
        id: 9,
        name: "Jeff Bezos",
        age: 59,
        photo: 'img/photo-JeffBezos.jpg',
        gender: 'male',
    },
    {
        id: 10,
        name: "Tosca Musk",
        age: 48,
        photo: 'img/photo-ToscaMusk.jpg',
        gender: 'female',
    },
    {
        id: 11,
        name: "Steve Jobs",
        age: 56,
        photo: 'img/photo-SteveJobs.webp', 
        gender: 'male',
    },
    {
        id: 12,
        name: "Amber Heard",
        age: 36,
        photo: 'img/photo-AmberHeard.jpg',
        gender: 'female',
    },
    {
        id: 13,
        name: "Laurene Powell",
        age: 59,
        photo: 'img/photo-LaurenePowell.jpg',
        gender: 'female',
    },
    {
        id: 14,
        name: "Eve Jobs",
        age: 24,
        photo: 'img/photo-EveJobs.jpg',
        gender: 'female',
    },
    {
        id: 15,
        name: "Chrisann Brennan",
        age: 68,
        photo: 'img/photo-ChrisannBrennan.webp', 
        gender: 'female',
    },
    {
        id: 16,
        name: "Cara Delevingne",
        age: 30,
        photo: 'img/photo-CaraDelevingne.webp',
        gender: 'female',
    },
    {
        id: 17,
        name: "Cam Gigandet",
        age: 40,
        photo: 'img/photo-CamGigandet.webp',
        gender: 'male',
    },
    {
        id: 18,
        name: "Sean Faris",
        age: 41,
        photo: 'img/photo-SeanFaris.webp',
        gender: 'male',
    },
    {
        id: 19,
        name: "Penn Badgley",
        age: 41,
        photo: 'img/photo-PennBadgley.webp',
        gender: 'male',
    },
    {
        id: 20,
        name: "Camille Vasquez",
        age: 38,
        photo: 'img/photo-CamilleVasquez.jpg',
        gender: 'female',
    },
    {
        id: 21,
        name: "Margot Robbie",
        age: 32, 
        photo: 'img/photo-MargotRobbie.jpeg',
        gender: 'female',
    },
    {
        id: 22,
        name: "Scarlett Johansson",
        age: 38,
        photo: 'img/photo-ScarlettJohansson.webp',
        gender: 'female',
    },
    {
        id: 23,
        name: "Angelina Jolie",
        age: 47,
        photo: 'img/photo-AngelinaJolie.jpg',
        gender: 'female',
    },
    {
        id: 24,
        name: "Gal Gadot",
        age: 37,
        photo: 'img/photo-GalGadot.jpg',
        gender: 'female',
    },
    {
        id: 25,
        name: "Vito Schnabel",
        age: 36,
        photo: 'img/photo-VitoSchnabel.jpg',
        gender: 'male',
    },
    {
        id: 26,
        name: "Dylan Minnette",
        age: 26,
        photo: 'img/photo-DylanMinnette.jpg',
        gender: 'male',
    },
    {
        id: 27,
        name: "Ansel Elgort",
        age: 29,
        photo: 'img/photo-AnselElgort.jpg',
        gender: 'male',
    },
    {
        id: 28,
        name: "Timothée Chalamet",
        age: 27,
        photo: 'img/photo-TimothéeChalame.webp',
        gender: 'male',
    },
    {
        id: 29,
        name: "Josh Hutcherson",
        age: 30,
        photo: 'img/photo-JoshHutcherson.jpg',
        gender: 'male',
    },
    {
        id: 30,
        name: "Aimee Wood",
        age: 29,
        photo: 'img/photo-AimeeWood.webp',
        gender: 'female',
    },
    {
        id: 31,
        name: "Chloë Moretz",
        age: 26,
        photo: 'img/photo-ChloëMoretz.webp',
        gender: 'female',
    },
    {
        id: 32,
        name: "Mimi Keene",
        age: 24,
        photo: 'img/photo-MimiKeene.jpg',
        gender: 'female',
    },
    {
        id: 33,
        name: "Elle Fanning",
        age: 25,
        photo: 'img/photo-ElleFanning.jpg',
        gender: 'female',
    },
    {
        id: 34,
        name: "Dakota Fanning",
        age: 29,
        photo: 'img/photo-DakotaFanning.jpg',
        gender: 'female',
    },
    {
        id: 35,
        name: "Justice Smith",
        age: 27,
        photo: 'img/photo-JusticeSmith.webp',
        gender: 'male',
    },
    {
        id: 36,
        name: "Isabella Sermon",
        age: 16,
        photo: 'img/photo-IsabellaSermon.jpg',
        gender: 'female',
    },
    {
        id: 37,
        name: "Omar Sy",
        age: 45,
        photo: 'img/photo-OmarSy.webp',
        gender: 'male',
    },
]
let userRenderArr = []


const pushArr = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
    }
}
pushArr(userArr, userRenderArr);
// console.table(userRenderArr);


const ageFilterInput = document.querySelector('#ageFilter');
const peopleContainer = document.querySelector('.users-container');
const genderFilterInputs = document.querySelectorAll('input[name="genderFilter"]');

function renderPeople(people) {
    const peopleHTML = people.map(person => `
    <div class="user">
        <div class="person-photo"><img src="${person.photo}" class="img-fluid" alt="${person.id}"></div>
        <div class="person-name">${person.name}</div>
        <div class="person-age">${person.age}</div>
        <div class="person-gender">${person.gender}</div>
    </div>`).join('');
    peopleContainer.innerHTML = peopleHTML;
}
renderPeople(userRenderArr);

ageFilterInput.addEventListener('input', () => {
    const ageFilterValue = parseInt(ageFilterInput.value);
    const filteredPeople = userRenderArr.filter(person => person.age <= ageFilterValue);
    renderPeople(filteredPeople);
});

genderFilterInputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value === "all") {
            renderPeople(userRenderArr);
        } else {
            const genderFilterValue = input.value;
            const filteredPeople = userRenderArr.filter((person) => person.gender === genderFilterValue);
            renderPeople(filteredPeople);
        }
    });
});

const inputSearch = document.querySelector('#name');
inputSearch.addEventListener('input', handleInput);

function handleInput() {
    const filterValue = inputSearch.value;
    const filteredPersons = userRenderArr.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()));
    console.table(filteredPersons);
    renderPeople(filteredPersons);
  }