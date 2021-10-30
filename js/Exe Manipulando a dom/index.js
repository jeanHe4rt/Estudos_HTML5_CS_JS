let houseList = [];

function addNewHouse (){
  let numberHouse = document.querySelector("input[name='numberHouse']").value
  let city = document.querySelector("input[name='city']").value
  let address = document.querySelector("input[name='address']").value
  let areaHouse = document.querySelector("input[name='areaHouse']").value 

  let houseDiv = document.querySelector("ul.houseList")
  let newLi = document.createElement("li");
  newLi.innerText = `
    Casa N°: ${numberHouse}; - Bairro: ${address}; - Cidade: ${city}., Área da Casa: ${areaHouse};
    `;

    let removeButton  = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "Remover";
    removeButton.setAttribute("onclick", "removeHouse(this)");
    newLi.appendChild(removeButton);

    document.querySelector(".houseList").appendChild(newLi)
}

function removeHouse(button){
  let liToRemove = button.parentNode
  document.querySelector(".houseList").removeChild(liToRemove);
}