const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", ChangeYourAttitude);

function ChangeYourAttitude() {
    const choice = select.value;

    if (choice === "Eat") {
        para.textContent = "Why would you do this.";
    } else if (choice === "Drink") {
        para.textContent = "Yum";
    } else if (choice === "Why") {
        para.textContent = "Genuinely why?";
    } else {
        para.textContent = "";
    }
}