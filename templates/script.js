const getDataButton = document.getElementById("getDataButton");
const table = document.querySelector("table");

getDataButton.addEventListener("click", async function () {
  const response = await fetch("http://127.0.0.1:5000");
  const data = await response.json();
  const rowCount = table.rows.length;

  let cell;
  data.forEach((arr) => {
    let newRow = table.insertRow(rowCount);
    cell = newRow.insertCell(0);
    cell.innerHTML = `${arr[5]}`;
    cell = newRow.insertCell(0);
    cell.innerHTML = `${arr[4]}`;
    cell = newRow.insertCell(0);
    cell.innerHTML = `${arr[3]}`;
    cell = newRow.insertCell(0);
    cell.innerHTML = `${arr[2]}`;
    cell = newRow.insertCell(0);
    cell.innerHTML = `${arr[0]}`;
    cell = newRow.insertCell(0);
    cell.innerHTML = `${arr[1]}`;
  });
});
