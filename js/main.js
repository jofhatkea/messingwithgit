//alert("hello");
//tjek "three dots" https://dev.to/sagar/three-dots---in-javascript-26ci
window.addEventListener("load", () => {
  /*const all = [...document.querySelectorAll("body *")];
  console.log('all');
  console.log(all);*/
  const all2 = [window.document.querySelectorAll("body *")];
  console.log('all2');
  console.log(all2);
  //  setInterval(() => {
  //    all.forEach(el => {
  //      el.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
  //    })
  //  }, 1000)
  setInterval(() => {
    all2[0].forEach(el => {
      el.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
    })
  }, 1000)
})

document.querySelector('#btn-1').addEventListener('click', function () {
  alert("hello");
});
