// keydown (keys pressed) and event used in function

window.addEventListener("keydown", (e)=>{
    // queryselector targetting html classes
    const key = document.querySelector(".key h1");
    const keyCode = document.querySelector(".key-code h1");
    
    e.preventDefault();
    // event key = 
    key.textContent = e.key;
    keyCode.textContent = e.keyCode;
    console.log(e)
});