import {typing
       ,new_prompt} from "./output.js";
import { handle_input } from "./input.js";
import { get_elements } from "./init.js";
import {init_elements} from "./init.js";
import { update_input } from "./input.js";
import { title_screen 
        ,opening_dialogue } from "./sequences.js";

export const curs_char = "█";

//initialize elements
let {input,history,input_display} = get_elements();
let elements = {input,history,input_display};
init_elements(input,history,input_display);

//type a greeting for the user
let greeting = document.getElementById("title").innerHTML;
let credits = document.getElementById("opening_credits").innerHTML;
let output_buffer = [];
//title_screen(output_buffer,credits,greeting);

let prompt = null;
let start_prompt = {text: "start?",commands: [{command: "y", sequence: opening_dialogue}]};
prompt = new_prompt(output_buffer,start_prompt);

//start typing the greeting followed by the start prompt
typing(elements,output_buffer);

//handle input from user
input.addEventListener("keydown",function (event){
    prompt = handle_input(event,history,input_display,output_buffer,prompt);
});

//continuing sequence
window.addEventListener("keydown",function(event){
    if (event.key == "Enter" && input.disabled){
        let hist = history.value;
        if (hist.slice(hist.length - 10,hist.length) == "Continue ↵"){
            history.value = hist.slice(0,hist.length - 10);
            typing(elements,output_buffer);
        }
    }
});

//move fake cursor and adjust textarea height
input.addEventListener("input",function(){
    update_input(input,input_display);
    console.log("got input");
});
input.addEventListener("selectionchange",function(){
    update_input(input,input_display);
});

//lock focus to input
window.addEventListener("mousemove", function(){
    input.focus();
});
//lock scroll to bottom of page
window.onscroll = function(){
    window.scrollTo(0, document.body.scrollHeight);
}