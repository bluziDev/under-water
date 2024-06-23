export function title_screen(output_buffer,credits,greeting){

    output_buffer.push({text: credits, delay: 100});
    //output_buffer.push({text: "\n", delay: 0});
    output_buffer.push({text: "", delay: 1000});
    output_buffer.push({text: greeting, delay: 10});
    output_buffer.push({text: "\n\n", delay: 0});
    output_buffer.push({text: "", delay: 1000});
    output_buffer.push({text: "             a game for mini jam 161", delay: 50});
    output_buffer.push({text: "\n\n\n", delay: 0});
    output_buffer.push({text: "", delay: 1000});
}
export function opening_dialogue(output_buffer){
    output_buffer.push({text: "\nopening dialogue test\n", delay: 50});
    return null;
}