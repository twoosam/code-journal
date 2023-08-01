/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

function serialize() {
  const dataModelJSON = JSON.stringify(data.entries);
  localStorage.setItem('javascript-local-storage', dataModelJSON);
}
window.addEventListener('beforeunload', serialize);
