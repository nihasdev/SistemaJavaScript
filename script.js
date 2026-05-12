const modal = document.querySelector('.modal-container')
  loadItens()
}

function insertItem(item, index) {

  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>R$ ${item.salario}</td>

    <td class="acao">
      <button onclick="editItem(${index})">
        <i class='bx bx-edit'></i>
      </button>
    </td>

    <td class="acao">
      <button onclick="deleteItem(${index})">
        <i class='bx bx-trash'></i>
      </button>
    </td>
  `

  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {

  if (
    sNome.value == '' ||
    sFuncao.value == '' ||
    sSalario.value == ''
  ) {
    return
  }

  e.preventDefault()

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].funcao = sFuncao.value
    itens[id].salario = sSalario.value

  } else {
    itens.push({
      'nome': sNome.value,
      'funcao': sFuncao.value,
      'salario': sSalario.value
    })
  }

  setItensBD()

  modal.classList.remove('active')

  loadItens()

  id = undefined
}

function loadItens() {

  itens = getItensBD()

  tbody.innerHTML = ''

  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []

const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
