import UI from '/js/UserInterface.js'
import ExpressionFinder from '/js/AL-ExpressionFinder.js'
const ui = new UI()
const expressionfinder = new ExpressionFinder()

export default class AnalizadorLexico{
    constructor(){
        //initialazing variables
        this.tokenTable = []
        this.tokenObject = {}
        this.btnCompilar  =  document.getElementById('BtnCompilar')
        this.Codigo = document.getElementById('TxtCodigo')
        this.tokens = ""  
    }
    Compile(){
        this.btnCompilar.onclick = ()=>{
            //cleaning the table from UserInterface File
            ui.CleanTable(this.tokenTable) 
            this.SplitEntry()   
        }
    }
    SplitEntry(){
        this.tokens = this.Codigo.value.split(/[\s\n]+/)   
        for(let i = 0; i < this.tokens.length; i++){
                this.tokenObject = {
                    index: i+1,
                    token: this.tokens[i],
                    description: expressionfinder.FindExpresion(this.tokens[i])
                }
                this.tokenTable.push(this.tokenObject) 
            }  
            //rendering the token table from UserInterface file
            ui.RenderTokenTable(this.tokenTable) 
    }
}