function addInput() {
  const ul = document.getElementById("inputs");

  //cria a tag do novo elemento - li
  const newLi = document.createElement("li");

  //atributos dessa tag <li> criada
  newLi.className = "list-item";
  newLi.innerText = "Novo input: ";

  //criando tag do tipo input
  const newInput = document.createElement("input");

  //atriubutos da tag <input>
  newInput.type = "text";
  newInput.name = "input";

  //newInput está dentro da newLi
  newLi.appendChild(newInput);

  //newLi está dentro da ul
  ul.appendChild(newLi);
}
