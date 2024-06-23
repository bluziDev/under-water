export function get_elements(){
    let input = document.getElementById("input");
    let history = document.getElementById("history");
    let input_display = document.getElementById("input_display");
    return {input,history,input_display};
}
export function init_elements(input,history,input_display){
    
    history.value = "";
    history.style.height = "0px";
    input_display.value = "> " + input.value;
    input_display.style.height = "auto";
    input_display.style.height = input_display.scrollHeight + "px";
    input.focus();
}