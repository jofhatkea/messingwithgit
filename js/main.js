//alert("hello");
window.addEventListener("load", ()=>{
  const all = [...document.querySelectorAll("body *")];
  setTimeout(()=>{
    all.forEach(el=>{
      el.style.transform=`translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
    })
  },1000)
})
