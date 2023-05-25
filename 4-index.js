function show() {
  // Obter um elemento único a partir do seu id
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  //obter elementos a partir da TAG
  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  //obter elementos a partir da Classe
  const contactInput = document.getElementsByClassName("contact-input");
  console.log(contactInput);

  //retorna uma nodelist
  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);

  //retorna uma nodelist
  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);

  // como não foi utilizado o ALL, ele para no primeiro elemento encontrado pelo Query Selector
  const firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact);
}
