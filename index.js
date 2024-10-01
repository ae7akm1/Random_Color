const newColourBtnElement = document.getElementById(
    "new-colour-button"
);

const currentColourElement = document.getElementById(
    "current-colour"
);

const hexValues = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",
];

function getREandomHexValue() {
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
const randomHexValue = hexValues[randomIndexPosition]
}


newColourBtnElement.addEventListener("click", function () {
    alert("ok");
});