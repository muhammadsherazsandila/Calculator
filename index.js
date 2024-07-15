function appendToResult(value){
    if(document.getElementById('input').value === "Enter your data"){
        document.getElementById("input").value = ""
    }
    else{
        document.getElementById('input').value +=value
    }
}
function clear_result(){
    document.getElementById('input').value = ""
}

function evaluate_result(){
    if(document.getElementById("input").value ===""){
        document.getElementById("input").value = "Enter your data"
    }
    else{
        try{
            let result = eval(document.getElementById('input').value)
            document.getElementById('input').value = result
        }catch{
            document.getElementById('input').value = "Syntax Error"
        }
    }
}