// === 1. Object literal en JavaScript ===

const person = {
  name: "Ryan",
  lastname: "Ray",
  age: 22,
  nickname: "ryan123",
  hobbies: ["sing", "read", "run"],
  address: {
    street: "liberty avenue",
    city: "london",
  },
  married: false,
};

console.log(person.name);
console.log(person.lastname);
console.log(person.age);

// === 2. Convertir un objeto a string JSON ===

console.log(JSON.stringify(person, null, 2));

// === 3. Leer un archivo JSON local con .then() (estilo clásico) ===

fetch("/people.json")
  .then((response) => response.json())
  .then((data) => {
    let output = "";
    for (const friend of data.people) {
      output += `<li>${friend.name} — su nickname es ${friend.nickname}</li>`;
    }
    document.getElementById("friends").innerHTML = output;
  })
  .catch((err) => console.error("Error cargando people.json:", err));

// === 4. Consumir una API REST con async / await (estilo moderno) ===

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const items = users
      .map((u) => `<li>${u.name} — su nickname es ${u.username}</li>`)
      .join("");

    document.getElementById("users").innerHTML = items;
  } catch (err) {
    console.error("Error cargando users:", err);
  }
}

loadUsers();
