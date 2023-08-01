const $photoInput = document.querySelector('.photo-input');
function updateValue() {
  document.getElementById('img').setAttribute('src', $photoInput.value);
}
$photoInput.addEventListener('input', updateValue);
