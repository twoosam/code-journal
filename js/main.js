const $photoInput = document.querySelector('.photo-input');
const $img = document.getElementById('img');
function updateValue() {
  $img.setAttribute('src', $photoInput.value);
}
$photoInput.addEventListener('input', updateValue);

const $submit = document.querySelector('#form');
function submitForm(event) {
  event.preventDefault();
  const title = $submit.elements.title.value;
  const photoURL = $submit.elements['photo-url'].value;
  const notes = $submit.elements.notes.value;
  const formObject = {
    title,
    photoURL,
    notes,
  };
  formObject.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(formObject);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $submit.reset();
}
$submit.addEventListener('submit', submitForm);

function renderEntry(entry) {
  const $divDataView = document.createElement('div');
  $divDataView.setAttribute('data-view', 'entries');

  const $ul = document.createElement('ul');
  $divDataView.appendChild($ul);

  const $li = document.createElement('li');
  $ul.appendChild($li);

  const $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  $li.appendChild($divRow);

  const $divCol = document.createElement('div');
  $divCol.setAttribute('class', 'column-full');
  $divCol.setAttribute('class', 'column-half');
  $divRow.appendChild($divCol);

  const $imgView = document.createElement('img');
  $imgView.setAttribute('class', 'img-view-entry');
  $imgView.setAttribute(
    'src',
    'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&resize=800,534'
  );
  $imgView.setAttribute('alt', 'yoda');
  $divCol.appendChild($imgView);

  const $divColLower = document.createElement('div');
  $divColLower.setAttribute('class', 'column-full');
  $divColLower.setAttribute('class', 'column-half');
  $divRow.appendChild($divColLower);

  const $h2 = document.createElement('h2');
  $h2.textContent = 'A newer image';
  $divColLower.appendChild($h2);

  const $p = document.createElement('p');
  $p.textContent = 'An old and powerful jedi.';
  $divColLower.appendChild($p);

  return $divDataView;
}
renderEntry();
