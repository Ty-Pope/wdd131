var count = 1;
document.getElementById("add").addEventListener("click", participantTemplate);
const form = document.getElementById("form");
form.addEventListener("submit", submitForm);

function participantTemplate() {
 count++;
 const template = document.querySelector(".participant1");
 const clone = template.cloneNode(true);
 clone.className = `participant${count}`;
 clone.children[0].innerHTML = `Participant ${count}`;
 document.querySelector(`.section-flex`).insertAdjacentElement("beforeend", clone);
}

function submitForm(event) {
 event.preventDefault();
 document.getElementById("submitted-form").style.display = "block";
 document.querySelector(".testbox").style.display = "none";

 let fees = document.querySelectorAll("[id^=fee]");
 let feesArr = [...fees];
 let feeTotal = 0;
 feesArr.forEach((item) => {
  feeTotal += parseInt(item.value);
 });
 document.getElementById("adult-name").textContent = document.querySelector("[id^=adult_name]").value;
 document.getElementById("number").textContent = count;
 document.getElementById("total").textContent = feeTotal;
}
