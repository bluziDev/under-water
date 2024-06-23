import { curs_char} from "./main.js";

export function typing(elements,output_buffer){
    let input = elements.input;
    let history = elements.history;
    let input_display = elements.input_display;
    if (output_buffer.length > 0){
        let output = output_buffer[0];
        let text = output.text;
        let delay = output.delay;
        let use_delay = delay;
        if (text.length > 0){
            if (!input.disabled){
                input.disabled = true;
            }
            let remaining = text;
            if (remaining.slice(0,1) == " "){
                use_delay = 0;
            }
            history.value += remaining.slice(0,1);
            window.scrollTo(0, document.body.scrollHeight);
            remaining = remaining.slice(1);
            output_buffer[0] = {text: remaining, delay: delay};
            history.style.height = "auto";
            history.style.height = history.scrollHeight + "px";
        }
        else{
            output_buffer.shift();
        }
        if (output_buffer.length > 0){
            setTimeout(typing,use_delay,elements,output_buffer);
        }
        else{
            input.disabled = false;
            input_display.value = "> " + curs_char;
            input.focus();
        }
    }
    else{
        input.disabled = false;
        input_display.value = "> " + curs_char;
        input.focus();
    }
}
export function new_prompt(output_buffer,prompt){
    let prompt_text = prompt.text + " [";
    prompt.commands.forEach((pair,index) => {
        if (index > 0){
            prompt_text += "/";
        }
        prompt_text += pair.command;
    });
    prompt_text += "]";
    output_buffer.push({text: prompt_text, delay: 50});
    return prompt;
}