import faker from "faker";

let cartText = `<div> you have ${faker.random.number()} items in you cart`;

document.querySelector("#dev-cart").innerHTML = cartText;
