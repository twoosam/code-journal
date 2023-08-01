const $photoInput = document.querySelector('.photo-input');
function updateValue() {
  document.getElementById('img').setAttribute('src', $photoInput.value);
}
$photoInput.addEventListener('input', updateValue);

const $submit = document.querySelector('#form');
function submitForm(event) {
  event.preventDefault();
  const title = $submit.elements.title.value;
  const photoURL = $submit.elements.photoURL.value;
  const notes = $submit.elements.notes.value;
  const formObject = {
    title,
    photoURL,
    notes,
  };
  formObject.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(formObject);
  document
    .getElementById('img')
    .setAttribute('src', 'images/placeholder-image-square.jpg');
  $submit.reset();
}
$submit.addEventListener('submit', submitForm);
