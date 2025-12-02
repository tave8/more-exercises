let tableEl = null;

function onLoadDocument() {
  tableEl = document.getElementById("table");
  startTableVersionChain()
}

window.addEventListener("load", onLoadDocument);

function startTableVersionChain() {
  const versionList = [1, 2, 3, 4, 5];
  const repeatTimes = 1;
  let lastTime = 0;
  let increaseMs = 1000;

  function inner() { 
    for (let i = 0; i < versionList.length; i++) {
      setTimeout(() => {
        applyTableVersion(i);
      }, lastTime);
      lastTime = lastTime + increaseMs;
    }
  }

  for (let n = 0; n < repeatTimes; n++) {
    inner();
  }

  // when you're done with table versions, remove table version
  setTimeout(() => {
    removeCurrTableVersion();
  }, lastTime);
}

function applyTableVersion(version) {
  removeCurrTableVersion();
  const tableVersion = getTableVersionClass(version);
  tableEl.classList.add(tableVersion);
}

function removeCurrTableVersion() {
  const prefix = getTableVersionClass("");
  const classes = tableEl.className.split(" ").filter((c) => !c.startsWith(prefix));
  tableEl.className = classes.join(" ").trim();
}

function getTableVersionClass(detail) {
  return `table${detail}`;
}


// ITALIA

const mappaRegioniItalia = [
  []
]