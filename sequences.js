import {templates
       ,state} from "./main.js";

export function title_screen(output_buffer){
    let greeting = templates.greeting;
    let credits = templates.credits;

    state.checkpoint = 0;
    output_buffer.push({text: "[clear]", delay: 0});
    output_buffer.push({text: credits, delay: 100});
    //output_buffer.push({text: "\n", delay: 0});
    output_buffer.push({text: "", delay: 1000});
    output_buffer.push({text: greeting, delay: 10});
    output_buffer.push({text: "\n\n", delay: 0});
    output_buffer.push({text: "", delay: 1000});
    output_buffer.push({text: "             a game for mini jam 161", delay: 50});
    output_buffer.push({text: "\n\n\n", delay: 0});
    output_buffer.push({text: "", delay: 1000});

    return {text: "start?",commands: [{command: "y", sequence: opening_dialogue}]};
}
export function opening_dialogue(output_buffer){
    output_buffer.push({text: "[clear]",delay:0});
    output_buffer.push({text: "\nA phone rings in Denver, Colorado\n\n", delay: 50});
    output_buffer.push({text: " ", delay: 500});
    output_buffer.push({text: "    *ring* ", delay: 0});
    output_buffer.push({text: " ", delay: 500});
    output_buffer.push({text: "*ring*\n\n", delay: 0});
    output_buffer.push({text: " ", delay: 500});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "In the private office of a delapidated,\n"
                            + "one-story building in the middle\n"
                            + "of the Metro Area, the CEO of Blazier Games Inc.\n"
                            + "answers the phone with a shaky hand.\n\n",delay:50});
    output_buffer.push({text: " ", delay: 500});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "[clear]",delay:0});
    output_buffer.push({text: "Mr. Blazier: Andre- *clears throat* Andrew Blazier speaking!\n\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "Mr. Blazier runs his palm over his greasy, thinning hair\n"
                            + "and glances through the unevenly drawn blinds of his office window\n"
                            + "at the men in reflective orange vests,\n"
                            + "standing in a half-circle and drinking gas station coffee.\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "\"Andrew!\" The voice says in a friendly voice. \"This is Buck at Tame Publishing.\"\n\n", delay: 10});
    output_buffer.push({text: " ", delay: 500});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "[clear]",delay:0});
    output_buffer.push({text: "Mr. Blazier: Mr. Beeler! What a pleasure. How are you doing this fine Tuesd-\n"
                             +"Mr. Beeler: Listen Andy, the reason I'm calling is to tell you "
                             +"we're pulling your funding for Wild eh... whatchamacallit.",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "We're on a tight budget here (¬ ͜  ͡¬) and for reasons completely "
                             +"unrelated to your product we just can't afford to keep you on our payroll. "
                             +"I'm sorry.\n\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "Andy: ...but, but, we're doing such great work on Wild Wackazoo "
                             +"Civilian Destroyer 3050!\n\n",delay: 10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "Mr. Beeler: ...yeah...\n",delay: 10});
    output_buffer.push({text: " ",delay: 500});
    output_buffer.push({text: "It's a real shame. Anyway I wish you the best. Have a good Tuesday Mr. Blazier\n\n",delay: 10});
    output_buffer.push({text: " ",delay: 500});
    output_buffer.push({text: "        *click*\n\n", delay: 0});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "[clear]",delay:0});
    output_buffer.push({text: "As Mr. Blazier reaches to put the handset back on the base, "
                             +"Another swing of the wrecking ball that is demolishing"
                             +"the foreclosed building which contains Blazier Games Inc.'s"
                             +" headquarters, hits. The impact causes a pipe inside the office wall to snap, "
                             +"and the pipe, since previously under tension due to the stress being "
                             +"placed on the building's structure, "
                             +"erupts through the wall and proceeds to use Andrew's office as a repository"
                             +"for an endless supply of alarmingly brown \"water?\".\n\n",delay: 50});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "Andy: Weird. I thought the city stopped our service months ago. "
                             +"Well, I guess we're now officially under water. ᕕ( ᐛ )ᕗ \n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    return proposition(output_buffer);
}
function help_studio(output_buffer){
    state.checkpoint = 0;
    output_buffer.push({text: "\nGreat! Welcome aboard! First I'll need you to find a publisher "
                            + "for Wild Wackazoo Citizen Destroyer 3050.\n\n",delay: 10});
    output_buffer.push({text: "[wait]",delay: 0});

    return find_publisher(output_buffer);
}
function find_publisher(output_buffer){
    output_buffer.push({text: "[clear]",delay: 0});
    output_buffer.push({text: "NEW OBJECTIVE:",delay:10});
    output_buffer.push({text: " ",delay:250});
    output_buffer.push({text: "Find Publisher\n\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "Possible publishers: \n\n"
                            + "    (1)Tame Publishing, Inc.\n"
                            + "    (2)Andrea (Andrew's ex-girlfriend)\n"
                            + "    (3)Sinister Digital, Inc.\n\n",delay:10});

    return {text: "Which publisher will you choose?"
           ,commands: [{command: "1", sequence: phone_tame}
                      ,{command: "2", sequence: phone_tame}
                      ,{command: "3", sequence: phone_tame}]};
}
function ending_bad(output_buffer){
    output_buffer.push({text: "\nAndy: Oh well, I'll find another wa-",delay: 10});
    output_buffer.push({text: " ",delay: 500});
    output_buffer.push({text: "*crash*",delay: 0});
    output_buffer.push({text: " ",delay: 500});
    output_buffer.push({text: "\n\nThe aformentioned wrecking ball delivers a devastating "
                            + "blow directly to Mr. Blazier's office.\n\n",delay: 50});
    output_buffer.push({text: "[wait]",delay: 0});
    return {text: "Try again?",commands: [{command: "y", sequence: proposition}
                                         ,{command: "n", sequence: title_screen}]};
    //return proposition(output_buffer);
}
export function proposition(output_buffer){
    output_buffer.push({text: "[clear]",delay:0});
    if (state.checkpoint == 0){
        output_buffer.push({text: "Andrew Blazier: Blazier Games has to bring something "
                                + "to market within 1 month, or else I'm out on the streets. "
                                + "Only problem is, we have no publisher, which means no money, "
                                + "and on top of that my last employee quit 2 weeks ago. "
                                + "...something about black mold in the HVAC, whatever that means."
                                + "Anyway! If I have any hope of getting this company back on "
                                + "its feet, I'll need your help. So, whatd'ya say?\n\n",delay: 10});
        
        output_buffer.push({text: "[checkpoint]",delay: 0});
    }
    return {text: "Help Mr. Blazier?",commands: [{command: "y", sequence: help_studio}
                                                ,{command: "n", sequence: ending_bad}]};
}
function phone_tame(output_buffer){
    output_buffer.push({text: "You pick up the phone and dial Tame Publishing, Inc.'s headquarters...\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "    *ringing*",delay:0});
    output_buffer.push({text: " ",delay:1000});
    output_buffer.push({text: "\n\nNo answer.\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "You: I don't know what I was expecting...\n\n",delay:10});
    output_buffer.push({text: "Funding not secured.\n",delay:10});
    return {text: "Try another publisher?"
           ,commands: [{command: "y", sequence: find_publisher}
                      ,{command: "n", sequence: ending_bad}]};
}