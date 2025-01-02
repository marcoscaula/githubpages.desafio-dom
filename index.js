const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const lista = document.querySelector(".lista");
  console.log(lista);
  while(lista.firstChild){
    lista.removeChild(lista.firstChild);
  }

  cosasQueAprendimos.forEach((item) => {
    const nuevoli = document.createElement("li");
    nuevoli.textContent = item.tema;

    // nuevoli.classList.add(item.clase);
    lista.appendChild(nuevoli);
  })
  
}

main();
