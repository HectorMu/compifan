import ExpressionFinder from '/js/AL-ExpressionFinder.js'
const expressionfinder = new ExpressionFinder()
export default class AnalizadorLexico{
    constructor(ui){
        //initialazing variables
        this.ui = ui
        this.tokenTable = []
        this.tokenObject = {}
        this.btnCompilar  =  document.getElementById('BtnCompilar')
        this.Codigo = document.getElementById('TxtCodigo')
    }
    Compile(){
            //cleaning the table from UserInterface File
            this.ui.CleanTable(this.tokenTable)
            this.SaveTokens(this.SplitEntry(this.Codigo))
            //analizadorsintactico.ErrorFinder(this.GetTokenArray())
    }
    GetTokenArray(){
        let tokenArray = this.tokenTable
        return tokenArray
    }
    SplitEntry(codigo){
        let tokens = codigo.value.split(/[\s\n]+/)
        return tokens
    }
    SaveTokens(tokens){
        for(let i = 0; i < tokens.length; i++){
            this.tokenObject = {
                index: i+1,
                token: tokens[i],
                description: expressionfinder.FindExpresion(tokens[i])
            }
            this.tokenTable.push(this.tokenObject)
        }
        //rendering the token table from UserInterface file
        this.ui.RenderTokenTable(this.tokenTable)
    }
}