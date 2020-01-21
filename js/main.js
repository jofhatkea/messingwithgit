//alert("hello");
window.addEventListener("load", () => {
  const all = [...document.querySelectorAll("body *")];
  setInterval(() => {
    all.forEach(el => {
      el.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
    })
  }, 1000)
})

document.querySelector('#btn-1').addEventListener('click', function () {
  alert("hello");
});
