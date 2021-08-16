export default class UI {
    constructor() {
        this.tableView = document.getElementById('tableTknBody')
        this.Codigo = document.getElementById('TxtCodigo')
        this.alert = document.getElementById('alert')
    }
    //ui
    RenderTokenTable(tokenTable) {
        if (this.Codigo.value != "") {
            tokenTable.forEach(token => {
                this.tableView.innerHTML += `
                   <td>${token.index}</td>
                   <td>${token.token}</td>
                   <td>${token.description}</td>
                 `
            });
        } else {
            this.tableView.innerHTML = ""
        }
    }
    CleanTable(TableArray) {
        do{
            TableArray.pop()
        }
        while (TableArray.length > 0)
        this.tableView.innerHTML = ""
    }
    AlertHandler(message) {
        if (message.includes('Error')) {
            this.alert.classList.remove('d-none')
            this.alert.innerText = message
        } else {
            this.alert.classList.add('d-none')
        }
    }

}