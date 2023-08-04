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
  document.getElementById('ul').prepend(renderEntry(formObject));
  viewSwap('entries');
  toggleNoEntries();
}
$submit.addEventListener('submit', submitForm);

function renderEntry(entry) {
  const $li = document.createElement('li');

  const $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  $li.appendChild($divRow);

  const $divCol = document.createElement('div');
  $divCol.setAttribute('class', 'column-full column-half');
  $divRow.appendChild($divCol);

  const $imgView = document.createElement('img');
  $imgView.setAttribute('class', 'img-view-entry');
  $imgView.setAttribute('src', entry.photoURL);
  $divCol.appendChild($imgView);

  const $divColLower = document.createElement('div');
  $divColLower.setAttribute('class', 'column-full column-half');
  $divRow.appendChild($divColLower);

  const $h2 = document.createElement('h2');
  $h2.textContent = entry.title;
  $divColLower.appendChild($h2);

  const $p = document.createElement('p');
  $p.textContent = entry.notes;
  $divColLower.appendChild($p);

  return $li;
}

function appendEntry() {
  for (let i = 0; i < data.entries.length; i++) {
    document.getElementById('ul').appendChild(renderEntry(data.entries[i]));
  }
  viewSwap(data.view);
  toggleNoEntries();
}
document.addEventListener('DOMContentLoaded', appendEntry);

const $noEntries = document.querySelector('.no-entries');
function toggleNoEntries() {
  if (data.entries.length === 0) {
    $noEntries.setAttribute('class', 'column-full no-entries');
  } else {
    $noEntries.setAttribute('class', 'hidden');
  }
}

const $entryForm = document.querySelector('.entry-form');
const $entries = document.querySelector('.entries');
function viewSwap(string) {
  if (string === 'entry-form') {
    $entryForm.setAttribute('class', 'entry-form');
    $entries.setAttribute('class', 'hidden');
    data.view = 'entry-form';
  } else {
    $entryForm.setAttribute('class', 'hidden');
    $entries.setAttribute('class', 'entries');
    data.view = 'entries';
  }
}

const $anchorNav = document.querySelector('.entries-anchor');
function eventHandlerNav() {
  viewSwap('entries');
}
$anchorNav.addEventListener('click', eventHandlerNav);

const $anchorNew = document.querySelector('.form-anchor');
function eventHandlerNew() {
  viewSwap('entry-form');
}
$anchorNew.addEventListener('click', eventHandlerNew);
