let tableEl = null

function onLoadDocument() {
  tableEl = document.getElementById("table")
}

window.addEventListener("load", onLoadDocument);


function applyTableVersion(version) {
  removeCurrTableVersion()
  const tableVersion = getTableVersionClass(version)
  tableEl.classList.add(tableVersion)
}

function removeCurrTableVersion() {
  const prefix = getTableVersionClass("");
  const classes = tableEl.className.split(" ").filter(c => !c.startsWith(prefix));
  tableEl.className = classes.join(" ").trim();
}


function getTableVersionClass(detail) {
  return `table-version-${detail}`
}


setTimeout(() => {
  applyTableVersion("1")
}, 2000) 

setTimeout(() => {
  applyTableVersion("2")
}, 3000) 



setTimeout(() => {
  applyTableVersion("3")
}, 4000) 
