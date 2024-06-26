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
                      ,{command: "2", sequence: phone_andrea}
                      ,{command: "3", sequence: phone_sinister}]};
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
    state.pipe_fixed =  false;
    state.publisher = "";
    state.programmer = "";
    state.called_sinister = false;
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
    return no_funding(output_buffer);
}
function phone_andrea(output_buffer){
    output_buffer.push({text: "You pick up the phone and dial Andrea...\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "    *ringing*",delay:0});
    output_buffer.push({text: " ",delay:500});
    output_buffer.push({text: "    *ringing*",delay:0});
    output_buffer.push({text: " ",delay:500});
    output_buffer.push({text: "\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "\"You've reached the voicemail box of Andrea Hartford\"\n\n",delay:10});
    return {text: "Leave a message?"
           ,commands: [{command: "y", sequence: message_andrea}
                      ,{command: "n", sequence: no_funding}]};
}
function phone_sinister(output_buffer){
    output_buffer.push({text: "You pick up the phone and dial Sinister Digital Inc.s' headquarters...\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    if (!state.called_sinister){
        output_buffer.push({text: "The call is answered immediately\n\n",delay:50});
        output_buffer.push({text: " ",delay:500});
        output_buffer.push({text: "\"Yeeesssss?\"\n",delay:100});
        output_buffer.push({text: " ",delay:250});
        output_buffer.push({text: "\"You've reached The Devi- I mean, Sinister Digital...\"\n",delay:50});
        output_buffer.push({text: " ",delay:250});
        output_buffer.push({text: "\"How may I direct your caaallll?\"\n\n",delay:50});
        output_buffer.push({text: "[wait]",delay:0});
        output_buffer.push({text: "You: ...erm, publishing?\n\n",delay:10});
        output_buffer.push({text: " ",delay:500});
        output_buffer.push({text: "\"So, you want your game published, eh?"
                                + " That's easy. I will make your game wildly successful!"
                                + " All it will cost you is its sooouuulll. \"\n\n",delay:50});
        output_buffer.push({text: "[wait]",delay:0});
        output_buffer.push({text: "You: It's soul?\n\n",delay:10});
        output_buffer.push({text: " ",delay:500});
        output_buffer.push({text: "\"That's its*, no apostrophe, and yeeeesssss."
                                + " Your game will be renowned globally, but, in exchange,"
                                + " it will become the most widely marketable version of itself, "
                                + "stripped of everything that makes it unique. So, whatd'you say?\"\n\n",delay:50});
        state.called_sinister = true;
    }
    else{
        output_buffer.push({text: "\"Called to eh, reconsider my offer have you?\n\n",delay:50});
    }
    return {text: "Do we have a deal?"
           ,commands: [{command: "y", sequence: deal}
                      ,{command: "n", sequence: no_deal}]};
}
function deal(output_buffer){
    output_buffer.push({text: "\"Wonderful! *magical whooshing* I can't wait to see"
                            + " your hard work get flushed down the toil- er.."
                            + "recognized by millions!\"\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    state.publisher = "sinister";
    return funding_secured(output_buffer);
}
function no_deal(output_buffer){
    output_buffer.push({text: "\"It's a shame really, all that hard work going unnoticed...\"\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    return no_funding(output_buffer);
}
function no_funding(output_buffer){
    output_buffer.push({text: "Funding not secured.\n",delay:10});
    return {text: "Try another publisher?"
           ,commands: [{command: "y", sequence: find_publisher}
                      ,{command: "n", sequence: ending_bad}]};
}
function message_andrea(output_buffer){
    output_buffer.push({text: "You: Uh, Hi Andrea this is Mr. Blazier's new employee.\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "The thing is, Wild Wackazoo Civilian Destroyer 3050 needs a new publisher and...\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "well, I was wondering if you could set aside Mr. Blazier's and your differences"
                            + " and help us out. It would mean a lot.\n\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    return andrea_called(output_buffer);
}
function andrea_called(output_buffer){
    output_buffer.push({text: "Mr. Blazier returns from his lunch break.\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "Mr. Blazier: You won't believe it. Andrea called me back! "
                            + "Whatever you said to her did the trick. She agreed to be our publisher!\n\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "Mr. Blazier: Thank you. I knew you wouldn't let me down.\n\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    state.publisher = "andrea";
    return funding_secured(output_buffer);
}
function funding_secured(output_buffer){
    output_buffer.push({text: "[clear]",delay:0});
    output_buffer.push({text: "Funding Secured\n\n",delay:50});
    output_buffer.push({text: "Andrew: Great! All we need now is a programmer. Boy this water is getting really high.\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    return find_programmer(output_buffer);
}
function find_programmer(output_buffer){    
    output_buffer.push({text: "[clear]",delay: 0});
    output_buffer.push({text: "NEW OBJECTIVE:",delay:10});
    output_buffer.push({text: " ",delay:250});
    output_buffer.push({text: "Find Programmer\n\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    if (state.pipe_fixed){
        output_buffer.push({text: "Possible Candidates: \n\n"
                                + "    (1)Alien\n"
                                + "    (2)Stean Jogs\n\n",delay:10});
        return {text: "Which programmer will you interview?"
            ,commands: [{command: "1", sequence: interview_alien}
                        ,{command: "2", sequence: interview_stean}]};
    }
    else{
        output_buffer.push({text: "Possible Candidates: \n\n"
                                + "    (1)Plumber\n"
                                + "    (2)Alien\n"
                                + "    (3)Stean Jogs\n\n",delay:10});
        return {text: "Which programmer will you interview?"
            ,commands: [{command: "1", sequence: interview_plumber}
                        ,{command: "2", sequence: interview_alien}
                        ,{command: "3", sequence: interview_stean}]};
    }
}
function interview_plumber(output_buffer){
    output_buffer.push({text: "[clear]",delay: 0});
    output_buffer.push({text: "RESUME\n\n",delay: 50});
    output_buffer.push({text: "    Name: Hugh Bender\n",delay: 10});
    output_buffer.push({text: "    Experience: 30 years fixing pipes\n\n",delay: 10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "You: So, Mr. Bender, why do you want to work for Blazier Games?\n\n",delay:10});
    output_buffer.push({text: " ",delay: 500});
    output_buffer.push({text: "Plumber: I got a call about a leaky pipe *smoker's cough*\n\n",delay: 10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "You: Oh, right. It's right over there.\n\n",delay:10});
    output_buffer.push({text: "You point to the pipe protruding from the wall.\n",delay:50});
    output_buffer.push({text: " ",delay: 250});
    output_buffer.push({text: "The plumber spits the same color as the liquid "
                            + "flooding the room and wades over to the source.\n\n",delay:50});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "PIPE FIXED\n\n",delay: 50});
    state.pipe_fixed = true;
    output_buffer.push({text: "[wait]",delay:0});
    return find_programmer(output_buffer);
}
function interview_alien(output_buffer){
    output_buffer.push({text: "[clear]",delay: 0});
    output_buffer.push({text: "RESUME\n\n",delay: 50});
    output_buffer.push({text: "    Name: Alien\n",delay: 10});
    output_buffer.push({text: "    Experience: unknown\n\n",delay: 10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "You: So, why do you want to work for Blazier Games?\n\n",delay:10});
    output_buffer.push({text: " ",delay: 500});
    output_buffer.push({text: "*alien sounds*\n\n",delay: 10});
    output_buffer.push({text: " ",delay:500});
    output_buffer.push({text: "You: ...\n\n",delay:10});
    output_buffer.push({text: "[wait]",delay:0});
    //state.interviewed_alien = true;
    return {text: "Interview another programmer?", commands: [{command: "y", sequence: find_programmer}
                                                             ,{command: "n", sequence: done_interviewing}]};
}
function interview_stean(output_buffer){
    output_buffer.push({text: "[clear]",delay: 0});
    output_buffer.push({text: "RESUME\n\n",delay: 50});
    output_buffer.push({text: "    Name: Stean Jogs\n",delay: 10});
    output_buffer.push({text: "    Experience: Mostly jogging, some programming\n\n",delay: 10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "You: So, Mr. Jogs, why do you want to work for Blazier Games?\n\n",delay:10});
    output_buffer.push({text: " ",delay: 500});
    output_buffer.push({text: "Stean, who has not stopped jogging around the conference room "
                            + "since he arrived: ",delay: 50});
    output_buffer.push({text: "I have a feeling this will be kind of like running a marathon, and I love running!\n\n",delay: 10});
    output_buffer.push({text: "[wait]",delay:0});
    output_buffer.push({text: "You: I love your enthusiasm!\n\n",delay: 10});
    output_buffer.push({text: " ",delay:500});
    output_buffer.push({text: "Stean gives a nod as he squeezes another energy gel into his mouth.\n\n",delay: 50});
    //state.interviewed_stean = true;
    return {text: "Interview another programmer?", commands: [{command: "y", sequence: find_programmer}
                                                             ,{command: "n", sequence: done_interviewing}]};
}
function done_interviewing(output_buffer){
    output_buffer.push({text: "Applicants:\n\n"
                            + "   (1)Alien\n"
                            + "   (2)Stean\n"
                            + "   (3)Back to interviewing\n\n",delay: 10});
    return {text: "Which programmer will you hire?"
        ,commands: [{command: "1", sequence: hired_alien}
                    ,{command: "2", sequence: hired_stean}
                    ,{command: "3", sequence: find_programmer}]};
}
function hired_alien(output_buffer){
    state.programmer = "alien";
    return programmer_secured(output_buffer);
}
function hired_stean(output_buffer){
    state.programmer = "stean";
    return programmer_secured(output_buffer);
}
function programmer_secured(output_buffer){
    output_buffer.push({text: "[clear]",delay: 0});
    output_buffer.push({text: "PROGRAMMER SECURED\n\n",delay: 50});
    output_buffer.push({text: "[wait]",delay: 0});
    output_buffer.push({text: "Mr. Blazier returns from his second lunch break.\n\n",delay: 50});
    output_buffer.push({text: "\"So, how did the interviewing go?\"\n\n",delay: 10});
    output_buffer.push({text: "[wait]",delay: 0});
    output_buffer.push({text: "You: Great! I think our new employee is up to the task!\n\n",delay: 10});
    output_buffer.push({text: " ",delay: 500});
    output_buffer.push({text: "Mr. Blazier: Wonderful! Looks like we have everything we need.\n\n",delay: 10});
    output_buffer.push({text: "[wait]",delay: 0});
    return month_later(output_buffer);
}
function month_later(output_buffer){
    output_buffer.push({text: "[clear]",delay: 0});
    output_buffer.push({text: "1 MONTH LATER\n\n",delay: 50});
    output_buffer.push({text: "[wait]",delay: 0});
    if (state.programmer == "alien"){
        output_buffer.push({text: "Andy was abducted by the alien.\n\n",delay: 50});
        output_buffer.push({text: "[wait]",delay: 0});   
        if (state.publisher == "andrea"){
            output_buffer.push({text: "The game was never finished. ",delay: 50});
            output_buffer.push({text: "Andrea went on to marry Stean Jogs and was never heard from again.\n\n",delay: 50});
            output_buffer.push({text: "[wait]",delay: 0});           
        }
        else if (state.publisher == "sinister"){
            output_buffer.push({text: "The game, despite not being finished, and due to some magical power, "
                                    + "went on to become one of the most successful releases in history. "
                                    + "Everyone knew about, bought, recommended, and sunk thousands of hours into "
                                    + "Wild Wackazoo Citizen Destroyer 3050, a game that didn't exist.\n\n",delay: 50});
            output_buffer.push({text: "[wait]",delay: 0});   
        }
    }
    else if (state.pipe_fixed){
        if (state.publisher == "andrea"){
            output_buffer.push({text: "Andrew: Wild Wackazoo Citizen Destroyer 3050 is a hit! You've saved our studio. Thank you for all your help.\n\n",delay: 10});  
            output_buffer.push({text: " ",delay: 500});  
            output_buffer.push({text: "Andrew and Andrea got back together. Stean reignited Andrew's love for jogging.\n\n",delay: 50});  
            output_buffer.push({text: "[wait]",delay: 0});  
        }
        else if (state.publisher == "sinister"){
            output_buffer.push({text: "Andrew: Wild Wackazoo Citizen Destroyer 3050 is a hit! You've saved our studio. Thank you for all your help.\n\n",delay: 10});
            output_buffer.push({text: "[wait]",delay: 0});  
            output_buffer.push({text: "Andrew: Although, with all the changes the publisher requested, the game doesn't really "
                                    + "feel like ours anymore...\n\n",delay: 10});
            output_buffer.push({text: " ",delay: 500});  
            output_buffer.push({text: "Andrea went on to marry the plumber and was never heard from again."
                                    + " Andrew fell into a deep depression and became a muttering hobo. "
                                    + "Stean Jogs won the olympic gold medal for jogging.\n\n",delay: 50});  
            output_buffer.push({text: "[wait]",delay: 0});  
        }
    }
    else {
        output_buffer.push({text: "The pipe was never fixed and everyone inside the building drowned "
                                + "in the murky water. The game was never finished and the bodies of Andrew and Stean "
                                + "were buried under the rubble of the building formerly known as Blazier Games Inc.'s headquarters.\n\n",delay: 50});
        output_buffer.push({text: "[wait]",delay: 0});           
        if (state.publisher == "andrea"){
            output_buffer.push({text: "Andrea went on to marry the Alien and was never heard from again.\n\n",delay: 50});
            output_buffer.push({text: "[wait]",delay: 0});           
        }
        else if (state.publisher == "sinister"){
            output_buffer.push({text: "The game however, despite not being finished, and due to some magical power, "
                                    + "went on to become one of the most successful releases in history. "
                                    + "Everyone knew about, bought, recommended, and sunk thousands of hours into "
                                    + "Wild Wackazoo Citizen Destroyer 3050, a game that didn't exist.\n\n",delay: 50});
            output_buffer.push({text: "[wait]",delay: 0});   
        }
    }
    return {text: "Try for a different ending?",commands: [{command: "y", sequence: proposition}
                                         ,{command: "n", sequence: title_screen}]};
}