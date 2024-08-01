function TSButton() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("ts-example").innerHTML = `Your number is ${randomNumber}`;
}