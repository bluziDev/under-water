import { curs_char
        ,animate_typing
        ,state} from "./main.js";

export function typing(elements,output_buffer){
    let input = elements.input;
    let history = elements.history;
    let input_display = elements.input_display;
    if (output_buffer.length > 0){
        let output = output_buffer[0];
        let text = output.text;
        let delay = output.delay;
        let use_delay = delay;
        let wait = false;
        if (text.length > 0){
            //check for command
            let command = "";
            let check_at = 1;
            if (text.slice(0,1) == "["){
                while (text.slice(check_at,check_at + 1) != "]"){
                    command += text.slice(check_at,check_at + 1);
                    check_at ++;
                }
                check_at ++;
            }
            if (command == "wait"){
                wait = true;
                output_buffer[0] = {text: text.slice(check_at), delay: delay};
                history.value += "Continue ↵";
            }
            else if (command == "clear"){
                if (history.value.length > 0){
                    use_delay = 1;
                    let hist = history.value;
                    history.value = hist.slice(0,state.checkpoint) + hist.slice(state.checkpoint + 2);
                }
                else{
                    output_buffer[0] = {text: text.slice(check_at), delay: delay};
                }
            }
            else if (command == "checkpoint"){
                state.checkpoint = history.value.length;
                output_buffer[0] = {text: text.slice(check_at), delay: delay};
            }
            else{
                if (!input.disabled){
                    input.disabled = true;
                }
                let remaining = text;
                if (remaining.slice(0,1) == " "){
                    use_delay = 0;
                }
                else if (remaining.slice(0,1) == ","){
                    use_delay = 400;
                }
                history.value += remaining.slice(0,1);
                remaining = remaining.slice(1);
                output_buffer[0] = {text: remaining, delay: delay};
            }
            history.style.height = "auto";
            history.style.height = history.scrollHeight + "px";
            window.scrollTo(0, document.body.scrollHeight);
        }
        else{
            output_buffer.shift();
        }
        if (!wait){
            if (output_buffer.length > 0){
                if (animate_typing){
                    setTimeout(typing,use_delay,elements,output_buffer);
                }
                else{
                    typing(elements,output_buffer);
                }
            }
            else{
                input.disabled = false;
                input_display.value = "> " + curs_char;
                input.focus();
            }
        }
    }
    else{
        input.disabled = false;
        input_display.value = "> " + curs_char;
        input.focus();
    }
}
export function new_prompt(output_buffer,prompt){
    if (prompt){
        let prompt_text = prompt.text + " [";
        prompt.commands.forEach((pair,index) => {
            if (index > 0){
                prompt_text += "/";
            }
            prompt_text += pair.command;
        });
        prompt_text += "]";
        output_buffer.push({text: prompt_text, delay: 50});
    }
    return prompt;
}