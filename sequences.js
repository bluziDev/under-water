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
    output_buffer.push({text: "[clear]",delay:0});
    output_buffer.push({text: "\nA phone rings in Denver, Colorado\n\n", delay: 50});
    output_buffer.push({text: "", delay: 500});
    output_buffer.push({text: "    *ring* ", delay: 0});
    output_buffer.push({text: "", delay: 500});
    output_buffer.push({text: "*ring*\n\n", delay: 0});
    output_buffer.push({text: "", delay: 500});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "In the private office of a delapidated,\n"
                            + "one story building in the middle\n"
                            + "of the Metro Area, the CEO of Blazier Games Inc.\n"
                            + "answers the phone with a shaky hand.\n\n",delay:50});
    output_buffer.push({text: "", delay: 500});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "[clear]",delay:0});
    return null;
}