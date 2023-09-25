const textPara = document.querySelector("#textPara");
const warpBtn = document.querySelector("#warpBtn");
const text =
  "Etiam ac nibh eros. Pellentesque blandit sodales tellus ut porttitor.  Nam quis tincidunt nulla, vitae tempus nunc. Curabitur nec tortor quis nulla mollis placerat sit amet volutpat arcu. Aliquam gravida mollis justo ut tempor. Etiam congue ligula risus, et dictum ipsum iaculis a. Suspendisse egestas ligula vitae ex ultricies, nec venenatis nisl vestibulum. Donec volutpat pharetra finibus. Ut porta at neque sit amet scelerisque.  Mauris pellentesque fermentum elit.  Aenean tristique nisi velit, sed blandit tortor vehicula id. Suspendisse in turpis sed lorem condimentum eleifend vitae a velit.  Phasellus et enim lobortis, condimentum elit.\n \n Sed in urna erat.  Quisque sit amet lectus  maximus auctor eu arcu.  Etiam imperdiet, diam tempor mattis sodales, nisi est bibendum lacus, porta bibendum purus purus a sem.  Aliquam eu dui id augue lacinia faucibus. In hac habitasse platea dictumst.  Vivamus tempus luctus ante, et posuere elit ultricies id.  Praesent lectus purus, lobortis et elit quis, ultricies volutpat nunc. Aliquam convallis diam nec felis vestibulum, ultricies egestas leo venenatis.  Sed scelerisque congue dapibus.  Praesent ex risus, egestas ut libero vitae, feugiat imperdiet turpis. Cras scelerisque tortor vitae libero pellentesque, eget tristique massa venenatis. Donec nec porta ex.  Aliquam eu leo suscipit nibh pharetra posuere sit amet at risus. Sed ac enim sem. Donec eu rhoncus eros, non ullamcorper felis. ";

const textEls = text.split("").map((char) => {
  const el = document.createElement("span");
  el.innerText = char;
  return el;
});
textEls.forEach((el) => textPara.appendChild(el));

const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
};
let k = 0;
const warpText = () => {
  console.log(k % 1);
  textEls.forEach((char, i) => {
    const textColor = randomColor();
    char.style.color = textColor;
    const textSize = Math.sin(i / 10 + k) + 1.5;

    char.style.fontSize = `${textSize * 0.5}rem`;
  });
  if (k < 360) {
    k += 0.01;
  } else {
    k = 0;
  }
};

const startWarp = () => {
  warpText();
  setInterval(warpText, 100);
};
warpBtn.addEventListener("click", startWarp);
