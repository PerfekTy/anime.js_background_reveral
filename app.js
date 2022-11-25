const wrapper = document.getElementById("tiles");
let columns = 0,
  rows = 0;

const colors = [
  "rgb(229, 57, 53)",
  "rgb(253, 216, 53)",
  "rgb(244, 81, 30)",
  "rgb(76,175,80)",
  "rgb(33,150,243)",
  "rgb(156,39,176)",
  "rgb(13, 78, 94)",
];

// let count = -1;
let toggle = false;

const handleOnClick = index => {
  //   count += 1;
  toggle = !toggle;
  anime({
    targets: ".tile",
    // backgroundColor: colors[count % (colors.length - 1)],
    opacity: toggle ? 0 : 1,
    delay: anime.stagger(40, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

const createTile = index => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.onclick = e => handleOnClick(index);
  return tile;
};

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

const createGrid = () => {
  wrapper.innerHTML = "";
  columns = Math.floor(document.body.clientWidth / 50);
  rows = Math.floor(document.body.clientHeight / 50);
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};

window.onpageshow = () => createGrid();
window.onresize = () => createGrid();
