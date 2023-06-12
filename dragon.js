let dragons = [
  { id: 1, name: 'Apalala', elemnt: 'fire' },
  { id: 2, name: 'Balaur', elemnt: 'water' },
  { id: 3, name: 'Bolla' },
  { id: 4, name: 'Drogon', elemnt: 'fire' },
  { id: 5, name: 'Katla' },
  { id: 6, name: 'Saphira' },
  { id: 7, name: 'Thorn', elemnt: 'water' },
  { id: 8, name: 'Tiamat', elemnt: 'water' },
  { id: 9, name: 'Viserion', elemnt: 'fire' },
  { id: 10, name: 'Y Ddraig Goch', elemnt: 'fire' },
  { id: 11, name: 'Yinglong', elemnt: 'water' },
  { id: 12, name: 'Zmey Gorynych', elemnt: 'fire' },
  { id: 13, name: 'Zirnitra', elemnt: 'water' },
  { id: 14, name: 'Zmey', elemnt: 'fire' },
  { id: 15, name: 'Zilant', elemnt: 'water' },
  { id: 16, name: 'Zmeu', elemnt: 'fire' },
  { id: 17, name: 'Wyvern', elemnt: 'water' },
  { id: 18, name: 'Vritra', elemnt: 'fire' },
  { id: 19, name: 'Vrtra', elemnt: 'water' },
  { id: 20, name: 'Vouivre', elemnt: 'fire' },
];

const relationships = [
  { id: 1, relations: [2, 3] },
  { id: 2, relations: [1] },
  { id: 3, relations: [1, 2, 7] },
  { id: 4, relations: [2, 6] },
  { id: 5, relations: [2, 3, 4, 5] },
  { id: 6, relations: [1, 2, 3, 17, 5, 6, 15] },
  { id: 7, relations: [1, 2, 3, 13, 14, 19, 17] },
];

const forces = [
  { id: 1, notes: [12, 13, 19, 11] },
  { id: 2, notes: [11, 15, 17, 9] },
  { id: 3, notes: [20, 11, 12, 7] },
  { id: 4, notes: [18, 12, 10, 17] },
  { id: 5, notes: [11, 11, 9, 5] },
  { id: 6, notes: [13, 10, 9, 15] },
  { id: 7, notes: [11, 10, 19, 15] },
  { id: 8, notes: [12, 13, 19, 11] },
  { id: 9, notes: [11, 15, 17, 9] },
  { id: 10, notes: [20, 11, 12, 7] },
  { id: 11, notes: [18, 12, 10, 17] },
  { id: 12, notes: [11, 11, 9, 5] },
  { id: 13, notes: [13, 10, 9, 15] },
  { id: 14, notes: [11, 10, 19, 15] },
  { id: 15, notes: [12, 13, 19, 11] },
  { id: 16, notes: [11, 15, 17, 9] },
  { id: 17, notes: [20, 11, 12, 7] },
  { id: 18, notes: [18, 12, 10, 17] },
  { id: 19, notes: [11, 11, 9, 5] },
  { id: 20, notes: [13, 10, 9, 15] },
];

let currentPage = 0;

function generateList(a) {
  let item = '';
  for (let i = currentPage; i < currentPage + 2; i++) {
    if (a[i] == null) {
      item;
    } else if (typeof a[i].elemnt !== 'undefined') {
      item += `<article>
    <h3>${a[i].name}</h3>
    <p>${a[i].elemnt}</p>
    <button>see relations</button>
    </article>`;
    } else if (typeof a[i].elemnt == 'undefined') {
      item += `<article>
    <h3>${a[i].name}</h3>
<p> No elements </p>
    <button>see relations</button>
    </article>`;
    }
  }
  return item;
}

function modifyDragon(a) {
  let dragonNames = '';
  for (let i = 0; i < dragons.length; i++) {
    dragonNames += `
    <option value="${dragons[i].name}" class="${dragons[i].name}" id="${dragons[i].id}"> 
    ${dragons[i].name}
    </option>
    `;
  }
  let e = document.getElementById('dragon-name');
  document.getElementById('name-modify').placeholder = dragons[0].name;
  return dragonNames;
}

document.querySelector('main').innerHTML = `
<div class="dragons">   
${generateList(dragons)}
</div>
`;

document.getElementById('dragon-name').innerHTML = modifyDragon(dragons);

function nextPage() {
  console.log(currentPage);
  currentPage += 2;
  generateList(dragons);
  document.querySelector('main').innerHTML = `
  <div class="dragons">
${generateList(dragons)}
</div>
`;
  if (currentPage + 2 === dragons.length) {
    currentPage -= dragons.length;
  } else if (currentPage + 3 === dragons.length) {
    generateList(dragons);
    document.querySelector('main').innerHTML = `
    <div class="dragons">  ${generateList(dragons)}
  </div>
  `;
  }
}

function previousPage() {
  console.log('-');
  if (currentPage >= 2) {
    currentPage -= 2;
    generateList(dragons);
    document.querySelector('main').innerHTML = `
<div class="dragons">${generateList(dragons)}
</div>
`;
  }
}

let form = document.getElementById('form-add');
function handleForm(e) {
  e.preventDefault();
}
form.addEventListener('submit', function (e) {
  let name = document.getElementById('name').value;
  console.log(name);
  let element = document.getElementById('element').value;
  console.log(element);
  dragons.push({ id: dragons.length + 1, name: name, elemnt: element });
  console.log(dragons);
  generateList(dragons);
  document.querySelector('main').innerHTML = `
<div class="dragons">
${generateList(dragons)}
</div>
`;
});

function changePlaceholder() {
  let e = document.getElementById('dragon-name');
  document.getElementById('name-modify').placeholder = e.value;
}

let formModify = document.getElementById('form-modify');
function handleForm(e) {
  e.preventDefault();
}

formModify.addEventListener('submit', function (e) {
  let newDragon = {
    id: 0,
    name: "",
    elemnt: ""
  };
  let z = document.getElementById("dragon-name");
  let value = z.value;
  let dragonId =+ document.getElementsByClassName(value)[0].id;
  newDragon.id = dragonId;
  if (document.getElementById('name-modify').value === "") {
    let dragonName = document.getElementById('name-modify').placeholder;
    newDragon.name = `${dragonName}`;
  } else {
    let dragonName = document.getElementById('name-modify').value;
    newDragon.name = dragonName;
  }
  let dragonElement = document.getElementById('element-modify').value;
  newDragon.elemnt = dragonElement;
  dragons[dragonId-1] = newDragon;
  generateList(dragons);
  modifyDragon(dragons);
});