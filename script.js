let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", () => {
    let height = document.getElementById("height").value;
    let wrapper = document.querySelector(".wrapper");
    let val = height;
    if (val > 120) {
        wrapper.innerHTML = `<div class="step__one">
         <h1>Enter your age</h1>
         <input id="age" type="number" min="1" max="100" />
         <div id="error__message"></div>
         <button onclick = "onClickHandle();" id="submit-btn" type="submit">Proceed</button>
     </div>`;
    } else {
        errorMessage = document.getElementById("error__message");
        errorMessage.style.color = "red";
        errorMessage.style.marginTop = "10px";
        errorMessage.style.fontWeight = "bold";
        errorMessage.innerHTML = "You should be at least 120cm to ride.";
    }
});

function onClickHandle() {
    let age;
    age = document.getElementById("age").value;
    let wrapper = document.querySelector(".wrapper");
    if (age <= 12) {
        wrapper.innerHTML = ` <div class="confirm">
      <span class="material-symbols-outlined">check_circle</span>
        <h3>You qualify for a R10 ticket</h3>
        <button onclick="window.location.reload();"id="confirm-btn">Done</button>
   
    </div>`;
    } else if (age <= 18) {
        wrapper.innerHTML = ` <div class="confirm">
      <span class="material-symbols-outlined">check_circle</span>
        <h3>You qualify for a R20 ticket</h3>
        <button onclick="window.location.reload();" id="confirm-btn">Done</button>
        
    </div>`;
    } else {
        wrapper.innerHTML = ` <div class="confirm">
      <span class="material-symbols-outlined">check_circle</span>
        <h3>You qualify for a R30 ticket</h3>
        <button onclick="window.location.reload();" id="confirm-btn">Done</button>
        
    </div>`;
    }
}
