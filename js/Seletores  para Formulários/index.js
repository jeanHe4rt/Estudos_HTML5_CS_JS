function showinfo() {
  let name = document.querySelector("input[name='name']").value
  let favoritColor = document.querySelector("select[name='color'] option:checked").text // pegando a opção selecionada
  let likePrograming = document.querySelector("input[name='like-programing']:checked").value //pegando o radio button usado
  let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")

  let optionsValue = []

  developerOptions.forEach(element => {
    optionsValue.push(element.value)
  })

  let optionsChecked = optionsValue.join(", ")
  alert(`Nome: ${name}
  \n Cor Primária ${favoritColor}
  \n Gosta de Programar: ${likePrograming}
  \n Conhecimentos em Programação Web ${optionsChecked}
  `)
}