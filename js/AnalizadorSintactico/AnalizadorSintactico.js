export default class AnalizadorSintactico {
    constructor(ui) {
        this.ui = ui
    }
    ErrorFinder(tokenArray) {
        let response = ""
        for (let i = 0; i < tokenArray.length; i++) {
            if (this.AssignAnalizer(tokenArray).includes('Error')) {
                response = this.AssignAnalizer(tokenArray)
                //we break the loop 'cause if there is an error, the program will not bother in still checking another errors
                break
            }
            if (this.SpinAnalizer(tokenArray).includes('Error')) {
                response = this.SpinAnalizer(tokenArray)  
                break
            }
            if (this.ConditionAnalizer(tokenArray).includes('Error')) {
                response = this.ConditionAnalizer(tokenArray)
                break  
            }
            if(this.VelocityAnalizer(tokenArray).includes('Error')){
                response = this.VelocityAnalizer(tokenArray)
                break
            }
            if(this.Condition_DelimiterOpenAnalizer(tokenArray).includes('Error')){
                response = this.Condition_DelimiterOpenAnalizer(tokenArray)
                break
            }
            if(this.Condition_DelimiterCloseAnalizer(tokenArray).includes('Error')){
                response = this.Condition_DelimiterCloseAnalizer(tokenArray)
                break
            }
        }
        this.ui.AlertHandler(response)
    }
    AssignAnalizer(tokenArray) {
        let error = ""
        for (let i = 0; i < tokenArray.length; i++) {
            if (tokenArray[i].token == "int") {
                if(tokenArray[i+1]){
                    if (tokenArray[i + 1].description.includes("Expresion de asignacion")) {
                        error = ""
                    }
                    else {
                        error = "Error, se esperaba una expresion de asignacion"
                    }
                }else{
                    error = "Error, se esperaba una expresion de asignacion"
                } 
            }
        }
        return error
    }
    SpinAnalizer(tokenArray) {
        let error = ""
        for (let i = 0; i < tokenArray.length; i++) {
            if(tokenArray[i+1]){
                if (tokenArray[i].token == "Giro.Derecha" || tokenArray[i].token == "Giro.Izquierda") {
                if (tokenArray[i + 1].description.includes("Parametros direccion de giro")) {
                    error = ""
                }
                else {
                    error = "Error, se esperaban parametros de giro"
                }
            }
            }
            
        }
        return error
    }
    ConditionAnalizer(tokenArray){
        let error = ""
        for (let i = 0; i < tokenArray.length; i++) {
            if (tokenArray[i].token == 'si') {
                if (tokenArray[i + 1].description.includes("Expresion de condicion")) {
                    error = ""
                }
                else {
                    error = "Error, se esperaban parametros de condicion"
                }
            }
        }
        return error
    }
    VelocityAnalizer(tokenArray) {
        let error = ""
        for (let i = 0; i < tokenArray.length; i++) {
            if (tokenArray[i].token == "Velocidad") {
                if (tokenArray[i + 1].description.includes("Parametros de Velocidad")) {
                    error = ""
                }
                else {
                    error = "Error, se esperaban parametros de velocidad"
                }
            }
        }
        return error
    }
    Condition_DelimiterOpenAnalizer(tokenArray){
        let error = ""
        let DelimiterCounter = 0
        let InstructionCounter = 0
        let condition = ""
        for (let i = 0; i < tokenArray.length; i++) {
            if (tokenArray[i].token == "si" && tokenArray[i+1].description == "Expresion de condicion" ) {
                condition = tokenArray[i+1].token
                InstructionCounter++
            }
            if(tokenArray[i].description == "Delimitador de apertura"){
                DelimiterCounter++

            }if(DelimiterCounter == InstructionCounter){
                error = ""
            }
            if(DelimiterCounter < InstructionCounter){
                error ="Error, se esperaba un delimitador de apertura para la condicion: "+condition
            }
            if(DelimiterCounter > InstructionCounter){
                error =`Error, se encontraron ${DelimiterCounter-1} delimitadores de apertura sobrantes`          
            }      
        }
        return error
    }
    Condition_DelimiterCloseAnalizer(tokenArray){
        let error = ""
        let DelimiterCounter = 0
        let InstructionCounter = 0
        let condition = ""
        for (let i = 0; i < tokenArray.length; i++) {
            if (tokenArray[i].token == "si" && tokenArray[i+1].description == "Expresion de condicion" ) {
                condition = tokenArray[i+1].token
                InstructionCounter++
            }
            if(tokenArray[i].description == "Delimitador de cierre"){
                DelimiterCounter++

            }if(DelimiterCounter == InstructionCounter){
                error = ""
            }
            if(DelimiterCounter < InstructionCounter){
                error ="Error, se esperaba un delimitador de cierre para la condicion: "+condition
            }
            if(DelimiterCounter > InstructionCounter){     
                    error =`Error, se encontraron ${DelimiterCounter-1} delimitadores de cierre sobrantes`
            }  
        }
        return error
    }
}