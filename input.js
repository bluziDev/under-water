import {typing} from "./output.js";
import { curs_char } from "./main.js";

export function handle_input(event,history,input_display,output_buffer,prompt){
    let _prompt = prompt;
    if (event.key == "Enter"){
        let input = event.target;
        let val = input.value;
        input.value = "";
        history.value = history.value + "\n";
        history.style.height = "auto";
        history.style.height = history.scrollHeight + "px";
        input.disabled=true;
        input_display.value = "> " + input.value;
        let elements = {input,history,input_display};
        input_display.style.height = "auto";
        input_display.style.height = input_display.scrollHeight + "px";
        if (_prompt){
            let user_command = val;
            let sequence;
            for (const pair of _prompt.commands){
                if (is_like_command(user_command,pair.command)){
                    sequence = pair.sequence;
                    break;
                }
            }
            if (sequence){
                _prompt = sequence(output_buffer);
            }
            else{
                output_buffer.push({text: "command not found: " + user_command, delay: 25});
            }
            typing(elements,output_buffer);
        }
        else{
            let output = val;
            output_buffer.push({text: output, delay: 50});
            typing(elements,output_buffer);
            //console.log(input.value);
        }
    }
    return _prompt;
}
export function update_input(input,input_display){
    let with_cursor = input.value.slice(0,input.selectionStart) + curs_char + input.value.slice(input.selectionStart);
    input_display.value = "> " + with_cursor;
    input_display.style.height = "auto";
    input_display.style.height = input_display.scrollHeight + "px";
}
function is_like_command(user_command,command){
    let _uc = user_command.toLowerCase();
    if (_uc == command){
        return true;
    }
    if (command == "y"){
        if (_uc == "yes"){
            return true;
        }
    }
    return false;
}