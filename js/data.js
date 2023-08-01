/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

function serialize() {
  const dataModelJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataModelJSON);
}
window.addEventListener('beforeunload', serialize);

const isStoredJSON = localStorage.getItem('javascript-local-storage');
if (isStoredJSON !== null) {
  data = JSON.parse(isStoredJSON);
}
