var a = tags["actions"];
var s = tags["subjects"];


// #region Switch Statement (Intial Room Dialogue, plays when room is loaded)
function switchState() {
  switch(room) {
    case "coward":
      room = "";
      repeat(coward);
      break;
    case "startOffice":
      write("\"All of his co-workers were gone. What could it mean? Stanley decided to go to the meeting room, perhaps he had simply missed a memo.\"", 70);
      break;
    case "firstChoice":
      counter = 0;
      repeat(firstChoice);
      break;
    case "meetingRoom":
      repeat(meetingRoom);
      break;
    case "staircase":
      write("\"Coming to a staircase, Stanley walked upstairs to his boss's office.\"");
      break;
    case "bossOffice":
     repeat(bossOffice);
      break;
    case "secretElevator":
      write("Stanley is now in a secret lift hidden behind the boss's fireplace. You may only go down from here.");
      break;
    case "escapeMindHall":
      if (counter == 0) {
        repeat(escapeMindHall);
      } else if (counter >= 1) {
        repeat(escapeMindHallBack);
        counter = 8;
      }
      break;
    case "mindLights":
      write("Stanley walked forward into the Mind Control Facility. He enters a dark abyss as he walks along the catwalk and onto a platform. The platform has a desk with a button on it. The button has a light bulb symbol. You may push the button.");
      counter = 0
      break;
    case "mindCameras":
      write("Stanley walked along the newly revealed catwalk and platform. This new platform had another button on it. But this time, the button had a security camera symbol.");
      break;
    case "mindLift":
      write("Stanley walked along the newly revealed catwalk and platform. This new platform had another button on it. But this time, the button had an elevator symbol going up.");
      break;
    case "mindControlFacility":
      repeat(mindControlFacility);
      break;
    case "mindControlChoice":
      repeat(mindControlChoice);
      break;
    case "freedom":
      repeat(freedom);
      break;
    case "mariellaParking":
      if (counter == 0) {
        repeat(mariellaParking);
        counter++;
      } else if (counter == 4) {
        repeat(mariellaFour);
        counter++;
      } else if (counter == 8) {
        repeat(mariellaEight);
        counter++;
      } else if (counter == 12) {
        repeat(mariellaTwelve);
        counter++;
      }
      break;
    case "mariellaHall":
      if (counter == 1) {
        repeat(mariellaOne);
        counter++;
      } else if (counter == 5) {
        repeat(mariellaFive);
        counter++;
      } else if (counter == 9) {
        repeat(mariellaNine);
        counter++;
      } else if (counter == 13) {
        repeat(mariellaThirteen);
        counter = 0;
      }
      break;
    case "mariellaClocks":
      if (counter == 2) {
        repeat(mariellaTwo);
        counter++;
      } else if (counter == 6) {
        repeat(mariellaSix);
        counter++;
      } else if (counter == 10) {
        repeat(mariellaTen);
        counter++;
      }
      break;
    case "mariellaStorage":
      if (counter == 3) {
        repeat(mariellaThree);
        counter++;
      } else if (counter == 7) {
        repeat(mariellaSeven);
        counter++;
      } else if (counter == 11) {
        repeat(mariellaEleven);
        counter++;
      }
      break;
    case "facilityPowerBomb":
      repeat(facilityPowerBomb);
      counter = 0;
      break;
    case "countdown":
      if (counter == 0) {
        repeat(countdown);
        counter++;
      } else if (counter == 1) {
        repeat(countdownOne);
        counter++;
      } else if (counter == 2) {
        repeat(countdownTwo);
        counter++;
      } else if (counter == 3) {
        repeat(countdownThree);
        counter++;
      } else if (counter == 4) {
        repeat(countdownFour);
        counter++;
      } else if (counter == 5) {
        repeat(countdownFive);
        counter++;
      } else if (counter == 6) {
        repeat(countdownSix);
        counter = 0;
      }
      break;
    case "escapeHall": 
      if (counter == 0) {
        repeat(escapeHall);
        counter++;
      } else if (counter == 1) {
        repeat(escapeHallTwo);
        counter++;
      } else if (counter == 8) {
        repeat(escapeHallOne);
        counter = 0;
      }
      break;
    case "metalJaws":
      repeat(metalJaws);
      counter = 0;
      break;
    case "museumExit":
      repeat(museumExit);
      break;
    case "metalJawsTwo":
      repeat(metalJawsTwo);
      break;
    case "employeeLounge":
      repeat(employeeLounge);
      break;
    case "straightMainHall":
      counter = 0;
      repeat(straightMainHall);
      break;
    case "warehouse": 
      repeat(warehouse);
      break;
    case "cargoLift": 
      repeat(cargoLift);
      break;
    case "warehouseStuck": 
      repeat(warehouseStuck);
      break;
    case "catwalk":
      repeat(catwalk);
      break;
    case "warehouseBigRoom":
      repeat(warehouseBigRoom);
      counter = 0;
      break;
    case "redBlueChoice": 
      if (counter == 0) {
        repeat(redBlueChoice);
      } else if (counter == 1) {
        repeat(redBlueChoiceOne);
      } else if (counter == 2) {
        repeat(redBlueChoiceTwo);
      }
      break;
    case "unfinishedRoom":
      counter = 0;
      repeat(unfinishedRoom);
      break;
    case "voting":
      if (counter == 0) {
        repeat(voting);
      } else if (counter == 8) {
        repeat(votingLB);
      }
      break;
    case "leaderboard":
      counter = 8;
      
      break;
    case "babyGame":
      counter = 0;
      break;
  }
}
// #endregion

// #region Monologues (Scripts with multiple consecutive lines)
  //#region end is never the
  var theEndIsNever = {
    "lines": [
      "THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER","THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END","IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER THE END IS NEVER"
    ],
    speed: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
  }
  //#endregion
  //#region Intro Dialogue
  var greetings = {
    "lines":[
      "This version of the game was in development from 2019 to 2021.        ",
      "It is currently unfinished, buggy, unoptimized, and confusing (just take a look at the code).               ",
      "Although this game has been cancelled,     ",
      "I have begun work on a completely new version, using a more modular and flexible Text Adventure system.          ",
      "There's tons of work to do, as I'm creating my own Text Adventure engine, but it'll be worth it in the end.        ",
      "Maybe I'll put my Text Adventure engine out into the public for others to use!        ",
      "In the meantime, you may play what I have in this version of the game so far!                                     "
    ],
    speed: [50,35,45,50,40,35,40,60]
  }
  var intro = {
    "lines":[
      "\"This is the story of a man named Stanley.\"    ",
      "\"Stanley worked for a company in a big building where he was Employee #427.\"       ",
      "\"Employee #427's job was simple: he sat at his desk in room 427 and he pushed buttons on a keyboard.\"       ",
      "\"Orders came to him through a monitor on his desk, telling him what buttons to push, how long to push them, and in what order.\"       ",
      "\"This is what Employee #427 did every day of every month of every year, and although others might have considered it soul rending,\"       ",
      "\"Stanley relished every moment the orders came in, as though he had been made exactly for this job.\"       ",
      "\"And Stanley was happy.\"                       ",
      "\"And then one day, something very peculiar happened.\"         ",
      "\"Something that would forever change Stanley;\"       ",
      "\"something he would never quite forget.\"             ",
      "\"He had been at his desk for nearly an hour when he realized that not one single order had arrived on the monitor for him to follow.\"          ",
      "\"No one had shown up to give him instructions, call a meeting, or even say 'hi.' Never in all his years at the company had this happened, this complete isolation.\"          ",
      "\"Something was very clearly wrong. Shocked, frozen solid, Stanley found himself unable to move for the longest time.\"          ",
      "\"But as he came to his wits and regained his senses, he got up from his desk and stepped out of his office.\"       "
    ],
    "speed": [50,60,55,65,70,60,140,65,65,60,55,60,70,50]
  };
  // #endregion
  //#region first choice
  var firstChoice = {
    "lines": [
      "Stanley entered a room with a door on the left and a door on the right.      ",
      "\"When Stanley came to a set of two open doors, he entered the door on his left.\"      "
    ],
    speed: [50,57]
  }
  //#endregion
  //#region Coward Dialogue
  var coward = {
    "lines": [
      "\"But Stanley simply couldn't handle the pressure.\"       ",
      "\"What if he had to make a decision?\"     ",
      "\"What if a crucial outcome fell under his responsibility?\"     ",
      "\"He had never been trained for that!\"     ",
      "\"No, this couldn't go any way except badly.\"       ",
      "\"The right thing to do now, Stanley thought to himself, is to wait.\"    ",
      "\"Nothing will hurt me. Nothing will break me. In here, I can be happy, forever. I will be happy.\"    ",
      "\"Stanley waited.\"                                     ",
      "\"Hours passed.\"                                                        ",
      "\"Then days.\"                                                ",
      "\"Had years gone by?\"                            ",
      "\"He no longer had the ability to tell. But the one thing he knew, for sure, beyond any doubt, was that if he waited long enough, the answers would come.\"     ",
      "\"Eventually, some day, they would arrive. Soon, Very soon now, this will end.\"       ",
      "\"He will be spoken to. He will be told what to do.\"    ",
      "\"Now it's just a little bit closer.\"      ",
      "\"Now it's even closer.\"            ",
      "\"Here it comes...\"                 "
    ],
    "speed": [60, 60, 70, 60, 70, 65, 70, 50, 50, 50, 50, 70, 65, 60, 60, 60, 140]
  }
  //  #endregion
  //#region meeting room
  var meetingRoom = {
    "lines": [
      "Stanley made his way through the left door and into the meeting room.         ",
      "\"Yet there was not a single person here either.\"          ",
      "\"Feeling a wave of disbelief, Stanley decided to go up to his boss's office, hoping he might find an answer there.\""
    ],
    "speed": [50, 60, 75]
  }
  //#endregion
  //#region boss office
  var bossOffice = {
    "lines": [
      "\"Stepping into his manager's office, Stanley was once again stunned to discover not an indication of any human life.\"            ",
      "\"Shocked, unraveled, Stanley wondered in disbelief who orchestrated this, what dark secret was being held from him!\"         ",
      "\"What he could not have known was that the keypad behind the boss's desk guarded the terrible truth that his boss had been keeping from him.\"       ",
      "\"And so the boss had assigned it an extra secret PIN number.\"              ",
      "\"2 - 8 - 4 - 5.\"                 ",
      "\"But of course, Stanley couldn't possibly have known this.\"",
    ],
    speed: [70, 79, 75, 60, 140, 50]
  }
  var bossOfficeOpened = {
    "lines": [
      "\"Yet incredibly, by simply pushing random buttons on the keypad, Stanley happened to input the correct code by sheer luck.\"      ",
      "\"Amazing.\"        ",
      "\"He stepped into the newly opened passageway.\""
    ],
    speed: [60, 70, 50]
  }
  var bossOfficeForceOpen = {
    "lines": [
      "\"For god's- but it turns out that the panel's emergency override kicked in, and the door just opened all by itself, and Stanley just got the hell along with the story. Well whoop-dee-doo.\"                 ",
      "\"He stepped into the newly opened passageway.\""
    ],
    speed: [60, 70]
  }
  //#endregion
  //#region Hallway with Escape route and Mind Control
  var escapeMindHall = {
    "lines": [
      "\"Descending deeper into the building, Stanley realized he felt a bit peculiar.\"         ",
      "\"It was a stirring of emotion in his chest, as though he felt more free to think for himself, to question the nature of his job.\"         ",
      "\"Why did he feel this now, when for years it had never occurred to him?\"       ",
      "\"This question would not go unanswered for long.\"                                     ",
      "\"Stanley walked straight ahead through the large door that read Mind Control Facility.\"        ",
      "Stanley is in a hallway with a passageway to his left labeled 'Escape', and a door in front of him labeled 'Mind Control Facility'."
    ],
    speed: [50, 55, 60, 40, 65, 50]
  }
  //#endregion
  //#region mind control facility
  var mindLights = {
    "lines": [
      "Stanley pushed the button with the light bulb symbol on it.",
      "\"The lights rose on an enormous room packed with television screens.\"",
      "\"What horrible secret did this place hold, Stanley thought to himself. Did he have the strength to find out?\""
    ],
    speed: [50, 55, 60]
  }
  var mindCameras = {
    "lines": [
      "\"Now the monitors jumped to life, their true nature revealed.\"             ",
      "\"Each bore the numbers of an employee in the building: Stanley's co-workers.\"               ",
      "\"The lives of so many individuals reduced to images on a screen. And Stanley, one of them, eternally monitored in this place where freedom meant nothing.\""
    ],
    speed: [55, 60, 70]
  }
  var mindLift = {
    "lines": [
      "\"This mind control facility... It was too horrible to believe; it couldn't be true.\"             ",
      "\"Had Stanley really been in someone's control all this time? Was this the only reason he was happy with his boring job?\"            ",
      "\"That his emotions had been manipulated to accept it blindly?\"                          ",
      "Stanley got on to the elevator that had just arrived. You can only go up from here."
    ],
    speed: [65, 60, 55, 50]
  }
  var mindControlFacility = {
    "lines": [
      "\"No! He refused to believe it. He couldn't accept it; his own life in someone else's control? Never!\"            ",
      "\"It was unthinkable, Wasn't it? Was it even possible?\"          ",
      "\"Had he truly spent his entire life utterly blind to the world?\"                        ",
      "Stanley stepped off of the lift and into the Mind Control Facility filled with computers and lots of buttons. Lots and lots of buttons.                           ",
      "\"But here was the proof. The heart of the operation. Controls labeled with emotions: 'happy' or 'sad' or 'content'.\"     ",
      "\"Walking, eating, working... all of it monitored and commanded from this very place.\"      ",
    ],
    speed: [60, 50, 55, 60, 75, 70]
  }
  var mindControlChoice = {
    "lines": [
      "\"And as the cold reality of his past began to sink in, Stanley decided that this machinery would never again exert its terrible power over another human life.\"       ",
      "\"For he would dismantle the controls once and for all.\"                          ",
      "\"And when at last he found the source of the room's power, he knew it was his duty, his obligation, to put an end to this horrible place and to everything it stood for.\"               ",
      "Stanley entered the 'Facility Power' room. In it, he found a giant screen with the words 'Mind Controls Idle; Awaiting Input...,' and in front of Stanley are two buttons. One button says 'Off' and the other says 'On'. You may either turn off or turn on facility power."
    ],
    speed: [65, 50, 60, 50]
  }
  //#endregion
  //#region freedom ending
  var freedom = {
    "lines": [
      ".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",".   ",
      "\"Blackness... and a rising chill of uncertainty... was it over?\"         ",
      "\"Yes! He had won. He had defeated the machine, unshackled himself from someone else's command. Freedom was mere moments away.\"       ",
      "\"And, yet, even as the immense door slowly opened, Stanley reflected on how many puzzles still lay unsolved. Where had his co-workers gone? How had he been freed from the machine's grasp? What other mysteries did this strange building hold?\"       ",
      "\"But as sunlight streamed into the chamber, he realized none of this mattered to him. For it was not knowledge, or even power, that he had been seeking, but happiness.\"       ",
      "\"Perhaps his goal had not been to understand, but to let go.\"          ",
      "\"No longer would anyone tell him where to go, what to do, or how to feel. Whatever life he lives, it will be his.\"      ",
      "\"And that was all he needed to know. It was, perhaps, the only thing worth knowing.\"       ",
      "\"Stanley stepped through the open door.\"                 "
    ],
    speed: [60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,80,60,50,55,60,65,50,55]
  }
  var freedomOutro = {
    "lines": [
      "\"Stanley felt the cool breeze upon his skin, the feeling of liberation, the immense possibility of the new path before him.\"        ",
      "\"This was exactly the way, right now, that things were meant to happen.\"               ",
      "\"And Stanley was happy.\"                   "
    ],
    speed: [50, 60, 140]
  }
  //#endregion
  //#region Mariella Ending (going downstairs)
  var mariellaParking = {
    "lines": [
      "\"But Stanley just couldn't do it.\"       ",
      "\"He considered the possibility of facing his boss, admitting he had left his post during work hours, he might be fired for that. And in such a competitive economy, why had he taken that risk?\"       ",
      "Stanley is now in a parking lot area. There is a doorway to the right of him."
    ],
    speed: [80, 50, 50]
  }
  var mariellaOne = {
    "lines": [
      "\"All because he believed everyone had vanished? His boss would think he was crazy.\"        ",
      "\"And then something occurred to Stanley: Maybe, he thought to himself, maybe I am crazy. All of my coworkers blinking mysteriously out of existence in a single moment for no reason at all?\"        ",
      "Stanley is in a blank hallway. Just a copy machine, filing cabinets, and extra chairs. There is a door straight ahead of him."
    ],
    speed: [55, 60, 50]
  }
  var mariellaTwo = {
    "lines": [
      "\"None of it made any logical sense. And as Stanley pondered this he began to make other strange observations.\"      ",
      "Stanley is in a room with clocks and chairs. The four clocks on the wall are labeled '1', '2', 'B', and '4'. There is a door to the left of Stanley."
    ],
    speed: [55, 50]
  }
  var mariellaThree = {
    "lines": [
      "\"For example, why couldn't he see his feet when he looked down?\"       ",
      "Stanley is in a room with a vending machine, scraps of wood, and more filing cabinets. There is a door straight ahead."
    ],
    speed: [50, 50]
  }
  var mariellaFour = {
    "lines": [
      "\"Why did doors close automatically behind him wherever he went?\"       ",
      "Stanley is now in a parking lot area. There is a doorway to the right of him."
    ],
    speed: [50, 50]
  }
  var mariellaFive = {
    "lines": [
      "\"And for that matter, these rooms were starting to look pretty familiar, were they simply repeating?\"       ",
      "Stanley is in a blank hallway. Just a copy machine, filing cabinets, and extra chairs. There is a door straight ahead of him."
    ],
    speed: [60, 50]
  }
  var mariellaSix = {
    "lines": [
      "\"No, Stanley said to himself, this is all too strange, this can't be real, and at last he came to the conclusion that had been on the tip of his tongue, he just hadn't found the words for it.\"       ",
      "\"I'm dreaming! he yelled, This is all a dream!\"     ",
      "Stanley is in a room with clocks and chairs. The four clocks on the wall are labeled '1', '2', 'B', and '4'. There is a door to the left of Stanley."
    ],
    speed: [60, 55, 50]
  }
  var mariellaSeven = {
    "lines": [
      "\"What a relief Stanley felt to have finally found an answer, an explanation. His coworkers weren't actually gone, he wasn't going to lose his job, he wasn't crazy after all!\"        ",
      "\"And he thought to himself, I suppose I'll wake up soon, I'll have to go back to my boring real life job pushing buttons, I may as well enjoy this while I'm still lucid.\"       ",
      "\"So he imagined himself flying, and began to gently float above the ground.\"          ",
      "Stanley is in a room with a vending machine, scraps of wood, and more filing cabinets. There is a door straight ahead."
    ],
    speed: [60, 55, 50, 50]
  }
  var mariellaEight = {
    "lines": [
      "\"Then he imagined himself soaring through space on a magical star field, and it too appeared!\"       ",
      "\"It was so much fun, and Stanley marveled that he had still not woken up. How was he remaining so lucid?\"       ",
      "Stanley is now in a parking lot area. There is a doorway to the right of him."
    ],
    speed: [55, 60, 50]
  }
  var mariellaNine = {
    "lines": [
      "\"And then perhaps the strangest question of them all entered Stanley's head, one he was amazed he hadn't asked himself sooner:\"        ",
      "\"Why is there a voice in my head, dictating everything that I'm doing and thinking?\"        ",
      "\"Now the voice was describing itself being considered by Stanley, who found it particularly strange. I'm dreaming about a voice describing me thinking about how it's describing my thoughts, he thought!\"       ",
      "Stanley is in a blank hallway. Just a copy machine, filing cabinets, and extra chairs. There is a door straight ahead of him."
    ],
    speed: [65, 55, 59, 50]
  }
  var mariellaTen = {
    "lines": [
      "\"And while he thought it all very odd and wondered if this voice spoke to all people in their dreams, the truth was that of course this was not a dream. How could it be?\"        ",
      "\"Was Stanley simply deceiving himself? Believing that if he's asleep he doesn't have to take responsibility for himself?\"          ",
      "Stanley is in a room with clocks and chairs. The four clocks on the wall are labeled '1', '2', 'B', and '4'. There is a door to the left of Stanley."
    ],
    speed: [60, 55, 50]
  }
  var mariellaEleven = {
    "lines": [
      "\"Stanley is as awake right now as he's ever been in his life.\"        ",
      "\"Now hearing the voice speak these words was quite a shock to Stanley. After all, he knew for certain beyond a doubt that this was, in fact, a dream!\"       ",
      "Stanley is in a room with a vending machine, scraps of wood, and more filing cabinets. There is a door straight ahead."
    ],
    speed: [65, 55, 50]
  }
  var mariellaTwelve = {
    "lines": [
      "\"Did the voice not see him float and make the magical stars just a moment ago? How else would the voice explain all that?\"        ",
      "\"This voice was a part of himself too, surely, surely if he could just....\"       ",
      "\"He would prove it. He would prove that he was in control, that this was a dream.\"        ",
      "Stanley is now in a parking lot area. There is a doorway to the right of him."
    ],
    speed: [65, 55, 55, 50]
  }
  var mariellaThirteen = {
    "lines": [
      "\"So he closed his eyes gently, and he invited himself to wake up.\"          ",
      "\"He felt the cool weight of the blanket on his skin, the press of the mattress on his back,\"            ",
      "\"the fresh air of a world outside this one. Let me wake up, he thought to himself.\"      ",
      "\"I'm through with this dream, I wish it to be over. Let me go back to my job, let me continue pushing the buttons, please, it's all I want.\"          ",
      "\"I want my apartment, and my wife, and my job. All I want is my life exactly the way it's always been.\"       ",
      "\"My life is normal, I am normal. Everything will be fine.\"           ",
      "\"I am okay.\"        ",
      "Stanley opens his eyes.              ",
      "\"Stanley began screaming. Please someone wake me up! My name is Stanley! I have a boss! I have an office! I am real!\"       ",
      "\"Please just someone tell me I'm real! I must be real! I must be! Can anyone hear my voice?! Who am I? Who am I?!\"              ",
      "\"And everything went black.\"                                               ",
      ".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".     ",
      "\"This is the story of a woman named Mariella.\"          ",
      "\"Mariella woke up on a day like any other. She arose, got dressed, gathered her belongings, and walked to her place of work.\"           ",
      "\"And although she would soon turn to go call for an ambulance, for just a few, brief moments, she considered the strange man.\"       ",
      "\"He was obviously crazy; this much she knew. Everyone knows what crazy people look like.\"       ",
      "\"And in that moment, she thought to herself how lucky she was to be normal.\"        ",
      "\"I am sane. I am in control of my mind. I know what is real, and what isn't.\"        ",
      "\"It was comforting to think this, and in a certain way, seeing this man made her feel better. But then she remembered the meeting she had scheduled for that day,\"       ",
      "\"the very important people whose impressions of her would affect her career, and, by extension, the rest of her life.\"        ",
      "\"She had no time for this, so it was only a moment that she stood there, staring down at the body.\"        ",
      "\"And then she turned and ran.\"                                             "
    ],
    speed: [55, 60, 65, 70, 70, 80, 90, 90, 50, 47, 60, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,100, 60, 65, 55, 50, 50, 55, 60, 65, 70, 40]
  }
  //#endregion
  //#region Countdown/Bomb ending
  var facilityPowerBomb = {
    "lines": [
      "\"Oh Stanley, you didn't just activate the controls, did you?\"        ",
      "\"After they kept you enslaved all these years you go and you try to take control of the machine for yourself, is that want you wanted? Control?\"       ",
      "\"Oh...Stanley. *sigh* I applaud your effort, I really do, but you need to understand; there's only so much that machine can do.\"       ",
      "\"You were supposed to let it go, turn the controls off, and leave.\"         ",
      "\"If you want to throw my story off track, you're going to have to do much better than that. I'm afraid you don't have nearly the power you think you do; for example, and I believe you'll find this pertinent:\"        ",
      "\"Stanley suddenly realized that he had just initiated the network's emergency detonation system. In the event that this machine is activated without proper DNA identification, nuclear detonators are set to explode, eliminating the entire complex.\"      ",
      "\"How long until detonation, then? Hmm...let's say, um...two minutes.\"                  ",
      "The enormous screen in front of Stanley displays a timer counting down from 2:00. The doors are open behind Stanley. You may go back to the Mind Control Facility to fiddle with controls and attempt to defuse the bomb."
    ],
    speed: [80, 60, 50, 45, 50, 55, 70, 50]
  }
  var countdown = {
    "lines": [
      "\"Ah, now this is making things a little more fun, isn't it, Stanley? It's your time to shine! You are the star! It's your story now; shape it to your heart's desires.\"      ",
      "\"Ooh, this is much better than what I had in mind! What a shame we have so little time left to enjoy it.\"         ",
      "\"Mere moments until the bomb goes off, but what precious moments each one of them is! More time to talk about you, about me, where we're going, what this all means...I barely know where to start!\"         ",
      "\"What's that? You'd like to know where your co-workers are? A moment of solace before you're obliterated?\"        "
    ],
    speed: [55, 50, 55, 60]
  }
  var countdownOne = {
    "lines": [
      "\"Alright. I'm in a good mood, and you're going to die anyway. I'll tell you exactly what happened to them: I erased them. I turned off the machine; I set you free.\"       ",
      "\"Of course, that was merely in this instance of the story. Sometimes when I tell it, I simply let you sit there in your office forever, pushing buttons endlessly and then dying alone. Other times, I let the office sink into the ground, swallowing everyone inside; or I let it burn to a crisp.\"        "
    ],
    speed: [60, 50]
  }
  var countdownTwo = {
    "lines": [
      "\"I have to say this, though, this version of events has been rather amusing. Watching you try to make sense of everything and take back the control wrested away from you...it's quite rich. I almost hate to see it go!\"        "
    ],
    speed: [50]
  }
  var countdownThree = {
    "lines": [
      "\"But I'm sure whatever I come up with on the next go around will be even better. My goodness! Only 34 seconds left...but I'm enjoying this so much! You know what? To hell with it. I'm going to put some extra time on the clock; why not!\"        ",
      "\"These are precious additional seconds, Stanley. Time doesn't grow on trees!\"      "
    ],
    speed: [55,50]
  }
  var countdownFour = {
    "lines": [
      "\"Oh, dear me, what's the matter, Stanley? Is it that you have no idea where you are going or what you're supposed to be doing right now? Or did you just assume when you saw that timer that something in this room is capable of turning it off?\"        ",
      "\"I mean, look at you, running from button to button, screen to screen, clicking on every little thing in this room! These numbered buttons! No! These colored ones! Or maybe this big, red button! Or this door! Everything! Anything! Something here will save me!\"       ",
      "\"Why would you think that, Stanley? That this video game can be beaten, won, solved? Do you have any idea what your purpose in this place is?\"           ",
      "\"Hahaha, heh, Stanley...you're in for quite a disappointment.\"      ",
      "\"But here's a spoiler for you: that timer isn't a catalyst to keep the action moving along. It's just seconds ticking away to your death.\"       "
    ],
    speed: [60, 50, 65, 50, 70]
  }
  var countdownFive = {
    "lines": [
      "\"You're only still playing instead of watching a cutscene because I want to watch you for every moment that you're powerless, to see you made humble.\"      ",
      "\"This is not a challenge. It's a tragedy. You wanted to control this world; that's fine. But I'm going to destroy it first, so you can't.\"       ",
      "\"Take a look at the clock, Stanley. That's 30 seconds you have left to struggle.\"     ",
      "\"Thirty seconds until a big boom, and then nothing. No ending here, just you being blown to pieces.\"     ",
      "\"Will you cling desperately to your frail life, or will you let it go peacefully?\"         "
    ],
    speed: [50, 45, 40, 35, 50]
  }
  var countdownSix = {
    "lines": [
      "\"Another choice! Make it count. Or don't. It's all the same to me. All a part of the joke. And believe me, I will be laughing at every second of your inevitable life, from the moment we fade in until the moment I say: Happily Ever-\"         "
    ],
    speed: [70]
  }
  //#endregion
  //#region Museum Ending
  var escapeHall = {
    "lines": [
      "\"Although this passageway had the word 'Escape' written on it, the truth was, that at the end of this hall, Stanley would meet his violent death.\"      ",
      "\"The door behind him was not shut. Stanley still had every opportunity to turn around and get back on track.\"       ",
      "Stanley is in a dimly lit hallway. The door behind him is still open. You may go forward to continue down the hall or go backward to get out of the hall."
    ],
    speed: [60, 55, 50]
  }
  var escapeHallOne = {
    "lines": [
      "\"Nope! Still on board with death.\"        ",
      "Stanley is in a dimly lit hallway. The door behind him is still open. You may go forward to continue down the hall or go backward to get out of the hall."
    ],
    speed: [60, 50]
  }
   var escapeHallTwo = {
    "lines": [
      "\"At this point, Stanley was making a conscious, concerted effort to walk forward, and willingly confront his death.\"              "
    ],
    speed: [60]
  }
  var escapeMindHallBack = {
    "lines": [
      "\"But of course, Stanley thought better of it, and realized he simply had too much to live for.\"           ",
      "Stanley is back in the hallway with the choice enter the Mind Control Facility or the hallway labeled Escape."
    ],
    speed: [55, 50]
  }
  var metalJaws = {
    "lines": [
      "Stanley walked forward and fell into a dark abyss.           ",
      "He fell into a contraption, a sort of carriage, that slowly approached large and lethal metal jaws.        ",
      "The carriages in front of him were crushed to be paper-thin. This would happen to Stanley as well.       ",
      "\"As the machine whirled into motion, and Stanley was inched closer and closer to his demise, he reflected that his life had been of no consequence whatsoever.\"         ",
      "\"Stanley can't see the bigger picture. He doesn't know the real story. Trapped forever in his narrow vision of what this world is.\"       ",
      "\"Perhaps his death was of no great loss, like plucking the eyeballs from a blind man.\"       ",
      "\"And so he resigned, and willingly accepted this violent end to his brief and shallow life. Farewell, Stanley.\"             ",
      "The jaws begin to close in on Stanley...                      ",
      "They stop right before it touches him.         ",
      "'\"Farewell Stanley\" cried the Narrator, as Stanley was led helplessly into the enormous metal jaws.'             ",
      "'In a single visceral instant, Stanley was obliterated, as the machine crushed every bone in his body, killing him instantly.'          ",
      "'And yet it would be just a few minutes before Stanley would restart the game, back in his office, as alive as ever.'          ",
      "'What exactly did the Narrator think he was going to accomplish?'          ",
      "'When every path you can walk has been created for you long in advance, death becomes meaningless, making life the same.'         ",
      "'Do you see now? Do you see that Stanley was already dead from the moment he hit start?'         ",
      "Stanley fell out of the carriage, into a museum. There is a door with an exit sign. He may go to the door to exit this room."
    ],
    speed: [50, 50, 50, 60, 55, 55, 65, 50, 50, 70, 60, 55, 50, 65, 60, 50]
  }
  var museumExit = {
    "lines": [
      "'*laugh* Oh, look at these two.'       ",
      "'How they wish to destroy one another. How they wish to control one another.'        ",
      "'How they both wish to be free.'        ",
      "Stanley is now in a completely dark room with the words 'THE STANLEY PARABLE' in white text to be extremely visible. There is a switch under the title, currently flicked to 'On'. Stanley may flip the switch to 'Off'."
    ],
    speed: [60, 55, 70, 50]
  }
  var metalJawsTwo = {
    "lines": [
      "Stanley flipped the switch to the 'Off' position.        ",
      "'Can you see? Can you see how much they need one another?'         ",
      "'No, perhaps not. Sometimes these things cannot be seen.'       ",
      "Stanley is back at the enormous metal jaws, his impending death.         ",
      "'But listen to me, You can still save these two. You can stop the program before they both fail.'         ",
      "'Press \"control,\" and press \"w.\" There's no other way to beat this game.'           ",
      "'As long as you move forward, you'll be walking someone else's path. Stop now, and it'll be your only true choice.'           ",
      "'Whatever you do, choose it! Don't let time choose for you! Don't let time c"
    ],
    speed: [50, 60, 65, 50, 50, 50, 40, 45]
  }
  //#endregion
  //#region Employee Lounge (right door)
  var employeeLounge = {
    "lines": [
      "Stanley made his way through the right door and into the employee lounge.           ",
      "\"This was not the correct way to the meeting room, and Stanley knew it perfectly well. Perhaps he wanted to stop by the employee lounge first, just to admire it.\"           ",
      "\"Ah, yes, truly a room worth admiring.\"     ",
      "\"It had really been worth the detour after all, just to spend a few moments here in this immaculate, beautifully constructed room.\"      ",
      "\"Stanley simply stood here, drinking it all in.\"     "
    ],
    speed: [50, 55, 55, 50, 50]
  }
  var employeeLoungeOne = {
    "lines": [
      "\"Yeeesss, really, really worth it being here in the room.\"      ",
      "\"A room so utterly captivating that even though all your co-workers have mysteriously vanished, here you sit looking at these chairs and some paintings.\"       ",
      "\"Really worth it.\""
    ],
    speed: [45, 50, 60]
  }
  var employeeLoungeTwo = {
    "lines": [
      "\"At this point, Stanley's obsession with this room bordered on creepy, and reflected poorly on his overall personality.\"       ",
      "\"It's possible that this is why everyone left.\"     "
    ],
    speed: [55, 50]
  }
  var employeeLoungeThree = {
    "lines": [
      "\"Stanley sat around waiting for more dialogue, but when a long time had passed and there was no more, he decided that the game was trying to send him a message.\""
    ],
    speed: [50]
  }
  //#endregion
  //#region Straight Ahead and Maintenance Hallway
  var straightMainHall = {
    "lines": [
      "Stanley is now in a hallway with a door to his left and a door straight ahead of him.",
      "\"But eager to get back to business, Stanley took the first open door on his left.\"        "
    ],
    speed: [50,57]
  }
  //#endregion
  //#region warehouse dialogue 
  var warehouse = {
    "lines": [
      "\"Stanley was so bad at following directions it's incredible he wasn't fired years ago.\"       ",
      "Stanley is now in the warehouse area of the office building. There is a lift in front of Stanley."
    ],
    speed: [55, 50]
  }
  var cargoLift = {
    "lines": [
      "Stanley got on the cargo lift. It travels above a catwalk that can be jumped onto from the right.         ",
      "\"Look Stanley, I think perhaps we've gotten off on the wrong foot here.\"         ",
      "\"I'm not your enemy, really, I'm not. I realize that investing your trust in someone else can be difficult, but the fact is that the story has been about nothing but you, all this time.\"          ",
      "At this point, Stanley may keep going forward on the cargo lift, jump off and die, jump to the right and onto the catwalk, or go back."
    ],
    speed: [50, 60, 55, 50]
  }
  var powerfulEnd = {
    "lines": [
      "\"But in his eagerness to prove that he was in control of the story and no one gets to tell him what to do, Stanley leapt from the platform and plunged to his death.\"            ",
      "\"Good job Stanley, everyone thinks you are very powerful.\"                  "
    ],
    speed: [55, 60]
  }
  var warehouseStuck = {
    "lines": [
      "\"Oh, well, look who's got cold feet. Sorry to break it to you, Stanley, but that lift isn't coming back. You best either get comfortable right here on this Platform, or test your luck by jumping to the floor below.\"        ",
      "\"You know what, looking at it now, it's not that far to the bottom floor. I bet you can make it.\"       ",
      "\"Come on, I'm sure you'll survive the jump. Don't tell me you're scared, that's not the Stanley I know, do it!\"        ",
      "\"Do it.\"      ",
      "\"Do it.\"           ",
      "\"Do it do it do it do it.\"      "
    ],
    speed: [55, 59, 58, 56, 50, 40]
  }
  var coldFeetEnd = {
    "lines": [
      "\"Oops, looks like I was wrong. How clumsy of me.\"                    "
    ],
    speed: [70]
  }
  var catwalk = {
    "lines": [
      "\"What-really?\"     ",
      "\"I was in the middle of something; do you have zero consideration for others?\"        ",
      "\"Are you that convinced that I want something bad to happen to you?\"       ",
      "\"Why, I don't know how to convince you of this, but I really do want to help you, to show you something beautiful. Look, let me prove it.\"      ",
      "\"Let me prove that I am on your side. Give me a chance.\"         ",
      "Stanley is now on the catwalk. He may continue going forward."
    ],
    speed: [40, 45, 47, 50, 65, 50]
  }
  var warehouseBigRoom = {
    "lines": [
      "\"There's been someone you've been neglecting, Stanley, someone you've forgotten about. Please, stop trying to make every decision by yourself.\"         ",
      "\"Now, I'm not asking for me, I'm asking for her.\"              ",
      "\"Stanley is in a big storage room for the warehouse. He may go left into a door leading into a dark void.\""
    ],
    speed: [50, 65, 50]
  }
  //#endregion
  //#region Red and Blue doors
  var redBlueChoice = {
    "lines": [
      "Stanley walked into a room with a red and a blue door in front of him.          ",
      "\"Now, listen carefully, this is important. Stanley walked, through the red door.\""
    ],
    speed: [50, 60]
  }
  var redBlueChoiceOne = {
    "lines": [
      "\"Aha, Perhaps you misunderstood. Stanley walked through the red door.\"        ",
      "Stanley is in a room with a red and a blue door in front of him."
    ],
    speed: [45, 50]
  }
  var redBlueChoiceTwo = {
    "lines": [
      "\"I still don't think we're communicating properly. Stanley walked through the RED door.\"          ",
      "Stanley is in a room with a red door in front of him."
    ],
    speed: [55, 50]
  }
  //#endregion
  //#region games ending
  var unfinishedRoom = {
    "lines": [
      "\"Alright, fine, go ahead, Stanley! You want to know so badly what's out there: you want to find out what lies at the end of this road you've chosen? Well, don't let me stop you.\"          ",
      "Stanley walks out into a vast and empty room.           ",
      "\"You see? There's nothing here.\"         ",
      "\"I haven't even finished building this section of the map, because you were never supposed to be here in the first place. Broken rooms, exposed developer textures... is this what you had wanted?\"         ",
      "\"Was it worth ruining the entire story I had written out specifically for you? Do you not think I put a lot of time into that? Because I did.\"        ",
      "\"And in the end it was all for nothing, because this is what you wanted to see.\"        ",
      "\"Help me here, Stanley, help me elucidate these strange and unknowable desires of yours.\"      ",
      "\"What would have made this game better? What did you want to see?\"       ",
      "\"Vehicles? Skill trees? Work with me; you've given me absolutely nothing so far.\"       ",
      "\"Tell you what, let me take a stab in the dark at a new design, and you can give me some feedback.\"                              ",
      "The narrator loads up the room with the set of two open doors, but with added changes.        ",
      "\"There we go! A third option! This already feels leaps ahead of where we were before. Go ahead Stanley. Take it for a spin.\"        ",
      "There are three open doors in front of you. One on the left, one in the middle, and one on the right."
    ],
    speed: [45, 50, 65, 55, 65, 50, 45, 56, 45, 65, 50, 53, 50]
  }
  var voting = {
    "lines": [
      "\"Okay, I'm going to stop you there.\"      ",
      "\"Now, tell me about your experience with this new version.\"      ",
      "\"Would you say that the game benefited from allowing you more choices?\"       ",
      "\"Feel free to be honest - I'm looking for some real, critical feedback here.\"       ",
      "You are now in a room with buttons labeled 1 through 5. Please choose a rating between 1 and 5."
    ],
    speed: [67, 45, 56, 48, 50]
  }
  var votingLB = {
    "lines": [
      "\"Now, would you say that competitive leaderboard helped you feel motivated to keep walking through doors? Again, honest answers, please.\"",
      "You are now in a room with buttons labeled 1 through 5. Please choose a rating between 1 and 5."
    ],
    speed: [55, 50]
  }
  var voteOne = {
    "lines": [
      "\"A one?!?\"     ",
      "\"I mean, I can understand if you had reservations, you saw ways the game could be improved to more fully express itself mechanically and artistically, but a one!?!\"         ",
      "\"That's not even helpful! What am I supposed to do with that?\"       ",
      "\"Oh, but I guess it isn't my place to judge.\"       "
    ],
    speed: [40, 50, 65]
  }
  var voteTwo = {
    "lines": [
      "\"Oh, well, now this is useful. You didn't like it, but you didn't totally hate it either.\"        ",
      "\"You endeared it, perhaps, is the correct term.\"      ",
      "\"It didn't cause you excruciating pain.\"      ",
      "\"Big steps we've made here today, Stanley.\"        "
    ],
    speed: [65, 50, 45, 50]
  }
  var voteThree = {
    "lines": [
      "\"Oh, of course. A three.\"      ",
      "\"Really.\"                ",
      "\"Maybe next time we can get you to form an actual opinion?\"       ",
      "\"You know... any level of critical thinking or engagement with your surroundings?\"       ",
      "\"Does that sound good? Think we can do that?\"         ",
      "\"Yes?\"       ",
      "\"Hmmmmm? Wonderful?\"          "
    ],
    speed: [67, 50, 55, 60, 45, 47, 50]
  }
  var voteFour = {
    "lines": [
      "\"Okay, so we're getting somewhere.\"        ",
      "\"Clearly, there's something here that speaks to you.\"          ",
      "\"If I can be honest here, I really don't have any idea where I'm going with this.\"        ",
      "\"This whole third door thing was just a stab in the dark, but I guess you're into it, so let's keep this party train rolling.\"           "
    ],
    speed: [60, 45, 50, 50]
  }
  var voteFive = {
    "lines": [
      "\"Aha! You see? I knew I was onto something!\"          ",
      "\"Where do these flashes of inspiration come from? How did I know the game needed a third door?\"       ",
      "\"Well, it's instinct mostly... a calling in your gut.\"       ",
      "\"I really couldn't say where the idea came from, except that I... I felt it in my soul.\"           ",
      "\"You can't teach that, Stanley, don't even try.\"        "
    ],
    speed: [45, 50, 65, 60, 50]
  }
  var leaderboard = {
    "lines": [
      "\"Here, based on the data from your previous playthrough, I've compiled a new version.\"       ",
      "\"And to be perfectly candid, I think I've knocked it out of the park with this one.\"         ",
      "\"Let's take a look.\"       ",
      "Stanley is back in a room with three open doors. There is a large digital screen on the left wall. It reads:         ",
      "Your username is... Stanley[427]          ",
      "Your position is... 9238th out of 9238 players       ",
      "Did you know that...      ",
      "* 21.3% of players skipped the intro sequence         ",
      "* Only the worst 3% of players chose the blue door?      ",
      "* 98.9% of players are more attractive than Stanley?        "
    ],
    speed:[50, 60, 45, 50, 50, 50, 50, 50, 50, 50]
  }
  var voteLB = {
    "lines": [
      "\"Oh, I nearly forgot!\"         ",
      "\"I've got a prototype of a new game I've been working on, and now would be a lovely opportunity to give it some play testing.\"        ",
      "\" You wouldn't mind taking a look at it, would you?\"                      ",
      "\"Perfect, let me boot it up.\"      "
    ],
    speed: [45, 50, 55, 48]
  }
  //#region Baby game
  var babyGame = {
    "lines": [
      "\"In this game, the baby crawls left toward danger.\"         ",
      "\"You click the button to move him back to the right, and if he reaches the fire, you fail.\"       ",
      "\"It's a very meaningful game - all about the desperation and tedium of endlessly confronting the demand of family life.\"        ",
      "\"I think the art world will really take notice. But of course, the message of the game only becomes clear once you've been playing it for about four hours.\"         ",
      "\"So why don't you give it four hours of play to make sure it's effective. Be sure to keep notes on your experience.\"         ",
      "\"You are now in a room with a baby on the right, fire on the left, and a button in front of you. Do you want to push the button?\""
    ],
    speed: [65, 55, 60, 50, 45, 50]
  }
  var babyFail = {
    "lines": [
      "\"You heartless bastard.\"        ",
      "\"\""
    ],
    speed: [50]
  }
  //#endregion

  //#endregion
// #endregion

// #region Check Script
function check() {
  if (room === "countdown") {
    room = "countdown";
    return;
  } else if (room === "voting") {
    if (counter == 8) {
      repeat(voteLB);
    } else if (counter == 0) {
      if ($("#user-input").val().includes("one") || $("#user-input").val().includes("1")) {
        repeat(voteOne);
      } else if ($("#user-input").val().includes("two") || $("#user-input").val().includes("2")) {
        repeat(voteTwo);
      } else if ($("#user-input").val().includes("three") || $("#user-input").val().includes("3")) {
        repeat(voteThree);
      } else if ($("#user-input").val().includes("four") || $("#user-input").val().includes("4")) {
        repeat(voteFour);
      } else if ($("#user-input").val().includes("five") || $("#user-input").val().includes("5")) {
        repeat(voteFive);
      }
    }
  } else if (room === "babyGame") {
    if (($("#user-input").val().includes("don't") || $("#user-input").val().includes("no") || $("#user-input").val().includes("dont")) && tags["actions"]["push"].Tag) {

    } else {

    }
  }

  if (tags["actions"]["look"].Tag) {
    if (tags["subjects"]["left"].Tag) {
      if (room === "firstChoice") {
        write("Stanley looked at the left door. It leads the the meeting room.");
      } else if (room === "escapeMindHall") {
        write("Stanley looked towards the passageway with the words 'Escape.' The arrow is pointing inwards, suggesting to go down the hallway to escape.");
      } else if (room === "straightMainHall") {
        write("Stanley looked at the door to his left. It leads to the Maintenance Section which leads back to the meeting room.");
      } else if (room === "unfinishedRoom" || room === "leaderboard") {
        write("The door is a door.");
      } else if (room === "babyGame") {
        write("Fire.");
      } else {
        write("You can't look at that here.", 50);
      }
    } else if (tags["subjects"]["right"].Tag) {
      if (room === "firstChoice") {
        write("Stanley looked at the right door. Unlike the left door which leads to the meeting room, the right door leads to the unknown. I don't think the narrator wants you to go there.");
      } else if (room === "unfinishedRoom" || room === "leaderboard") {
        write("The door is a door.");
      } else if (room === "babyGame") {
        write("Baby.");
      } else {
        write("You can't look at that here.", 50);
      }
    } else if (tags["subjects"]["forward"].Tag) {
      if (room === "escapeMindHall") {
        write("Stanley looked straight ahead. A large door was in front of him, and above that door read 'Mind Control Facility.'");
      } else if (room === "straightMainHall") {
        write("Stanley looked straight ahead. There is a door that leads to the warehouse.");
      } else if (room === "unfinishedRoom" || room === "leaderboard") {
        write("The door is a door.");
      } else if (room === "babyGame") {
        write("Button.");
      } else {
        write("You can't look at that here.", 50);
      }
    } else if (tags["subjects"]["backward"].Tag) {
      if (null) {
      } else {
        write("You can't look at that here.", 50);
      }
    } else if (tags["subjects"]["door"].Tag) {
      if (room === "start") {
        write("Stanley looked at and beyond the door. The door led to the rest of the office building.");
      } else if (room === "firstChoice") {
        write("Stanley looked at the doors. The left door leads to the meeting room. The right door leads to the unknown.");
      } else if (room === "meetingRoom") {
        write("Stanley looked at the door. It leads to the hallway with the broom closet and a staircase.");
      } else if (room === "escapeMindHall") {
        write("Above the doors read 'Mind Control Facility.'");
      } else if (room === "mindControlFacility") {
        write("The door across the room reads 'FACILITY POWER.'");
      } else if (room === "mariellaParking" || room === "mariellaHall" || room === "mariellaClocks" || room === "mariellaStorage") {
        write("The door is a door.");
      } else if (room === "facilityPowerBomb") {
        write("The open doors lead to the Mind Control Facility filled with controls and buttons.");
      } else if (room === "metalJaws") {
        write("There is an exit sign above the door.")
      } else if (room === "employeeLounge") {
        write("The door is a door.");
      } else if (room === "redBlueChoice" || room === "unfinishedRoom") {
        write("Please specify which door to look at.");
      } else {
        write("You can't look at that here.", 50);
      }
    } else if (tags["subjects"]["red"].Tag) {
      if (room === "redBlueChoice") {
        write("Stanley looked at the red door. He doesn't know where it leads.")
      } else {
        write("You can't look at that here.", 50);
      }
    } else if (tags["subjects"]["blue"].Tag) {
      if (room === "redBlueChoice") {
        write("Stanley looked at the blue door. He doesn't know where it leads.")
      } else {
        write("You can't look at that here.", 50);
      }
    } else if (tags["subjects"]["around"].Tag) {
      if (room === "start") {
        write("Stanley looked around. There is a computer with no orders, a telephone next to it, and a few filing cabinets. On the walls are a clock and a painting. There is also an open door right in front of Stanley.", 50);
      } else if (room === "startOffice") {
        write("Stanley looked around. These are all the cubicles and offices of Employees 415 to 437. Not a single person in sight. You can keep going forward to continue down the hallways.");
      } else if (room === "firstChoice") {
        write("Stanley looked around. You are in a room with a set of two open doors; one on the left and one on the right.");
      } else if (room === "meetingRoom") {
        write("You are in the meeting room. There are whiteboards with schedules and plans. A projector looping through a slideshow. And a large table with empty office chairs surrounding it. You may keep going forward to leave the meeting room.");
      } else if (room === "staircase") {
        write("Stanley looked around. You are in a hallway with a broom closet and staircase that leads up to the boss's office and leads down into the unknown.");
      } else if (room === "bossOffice") {
        if (bossDoor === "open") {
          write("A luxurious and large room made only for Stanley's boss. The windows are now shut with large secure and industrial panels, and the fireplace has now been opened up to reveal a passageway. You may go forward into the secret passageway.");
        } else {
          write("Stanley's boss's office was cozy and had a premium feeling. The walls are lined with red wallpaper, two large windows behind the desk, a large fireplace, and bookshelves filled with books scattered along the walls. There is a keypad behind the boss's desk.");
        }
      } else if (room === "secretElevator") {
        write("Stanley looked around. You are in the elevator behind the Boss's fireplace. Your only option is to go down.");
      } else if (room === "escapeMindHall") {
        write("Stanley looked around. He is in the dark depths of the office building. There is a passageway to his left that has words and an arrow painted on the wall near the entrance of the passageway. It reads 'Escape.' There is also a large door in front of Stanley. Large letters above the door reads 'Mind Control Facility.' You can either go left towards 'Escape,' or forward towards 'Mind Control Facility.'");
      } else if (room === "mindLights") {
        if (gate !== "open") {
          write("Everything is dark. You can't see anything except the closed doors at the entrance, the catwalk, and the platform that you are currently on. There is a button in front of you with a light bulb symbol. You may push the button.");
        } else {
          write("The entire room has now been lit up. There are television screens spanning the walls. The gate in front of you has been opened. You may walk forward onto the new platform.");
        }
      } else if (room === "mindCameras") {
        if (gate !== "open") {
          write("Stanley looked around. There are television screens spanning the walls. There is a button in front of you with a security camera symbol on it. You may press the button.");
        } else {
          write("The television screens around you cycle between employee numbers and their camera feed. The gate in front of you has been opened. You may go forward.");
        }
      } else if (room === "mindLift") {
        if (gate !== "open") {
          write("Stanley looked around. The television screens around you cycle between employee numbers and their camera feed. There is a button in front of you with an elevator symbol going up.");
        } else {
          write("Stanley looked around. You are in a lift. Your only option is to go up.");
        }
      } else if (room === "mindControlFacility") {
        write("Stanley looked around. There are computers with buttons and controls. All very tempting to push. The buttons control activities and moods of co-workers, even you. There is a large door across the room with the words 'FACILITY POWER' above it. You may keep going forward to get to the door.");
      } else if (room === "freedom") {
        write("Stanley is in a large dark chamber, but with the wall in front of him slowly starting to open. You may go forward into the beautiful outside. A blue, but clouded sky. Some gentle, green hills. Trees scattered here and there. This is what Stanley had been waiting for. Freedom at last.", 60);
      } else if (room === "mariellaParking") {
        write("Stanley looked around. He seems to be in a parking lot area. There is one parked car. There is a door to the right. You may go to the right to continue.");
      } else if (room === "mariellaHall") {
        write("Stanley looked around. He is in a very plain and dull hallway. There is a copy machine, a few filinf cabinets, and some office chairs. You may walk forward to the door straight ahead.");
      } else if (room === "mariellaClocks") {
        write("Stanley looked around. Stanley is in a room with clocks and chairs. The four clocks on the wall are labeled '1', '2', 'B', and '4'. You may go left to the door.");
      } else if (room === "mariellaStorage") {
        write("Stanley looked around. Stanley is in a room with a vending machine, scraps of wood, and more filing cabinets. You may go to the door straight ahead.");
      } else if (room === "facilityPowerBomb") {
        write("The enormous screen in front of Stanley displays a timer counting down from 2:00. The doors are open behind Stanley. You may go back to the Mind Control Facility to fiddle with controls and attempt to defuse the bomb.");
      } else if (room === "escapeHall") {
        write("Stanley looked around. He's in a dark hallway, no possibility of knowing what's at the end of it.");
      } else if (room === "metalJaws") {
        write("Stanley looked around. Above him was the lethal contraption that he was just let out of. He is now in a museum. There is a door with an exit sign above it. He may go forward to leave this room.")
      } else if (room === "museumExit") {
        write("Stanley is in a dark void with only the text 'THE STANLEY PARABLE' visible, and a switch under the title. Stanley may flip the switch to the 'Off' position.")
      } else if (room === "employeeLounge") {
        write("Stanley looked around. He is in the employee lounge. It has blue sofas, a blue carpeted floor, a vending machine, coffee table, etc. Really everything one needs in order to relax. There is a door across the room. Stanley may walk forward to the door to leave the room.");
      } else if (room === "straightMainHall") {
        write("Stanley looked around. He is in a hallway with a door straight ahead and a door to the left going back to the meeting room. Stanley may go either left to the meeting room or forward to the unknown.");
      } else if (room === "warehouse") {
        write("Stanley is in the warehouse area of the office building. Below him are freight trucks, boxes, and shelves filled with boxes. In front of him is a cargo lift. You may go forward onto the cargo lift.");
      } else if (room === "cargoLift") {
        write("Stanley is on a cargo lift. It is currently above a catwalk. Stanley can keep going forward on the cargo lift, jump off the platform and to death, jump to the right and onto the catwalk, or go back.");
      } else if (room === "warehouseStuck") {
        write("Stanley is back on the ledge. The cargo lift is long gone. His only option is to jump off.");
      } else if (room === "catwalk") {
        write("Stanley is on the catwalk that was under the cargo lift. He may keep going forward to the door.");
      } else if (room === "redBlueChoice") {
        if (counter == 0) {
          write("Stanley is in a room with two doors, a red and a blue one. He may go to the red door or go to the blue door.");
        } else if (counter == 1) {
          write("Stanley is in a room with two doors, a red and a blue one. He may go to the red door or go to the blue door.")
        } else if (counter == 2) {
          write("Stanley is in a room with a red door in front of him. But there is a blue door behind him as well. Stanley may go forward into the red door or backwards into the blue door.")
        }
      } else if (room === "unfinishedRoom") {
        write("Stanley looked around. He is in a room with three open doors in front of him. He may go to the left door, go forward into the middle door, or go to the right door.");
      } else if (room === "voting") {
        write("Stanley is in a room with mostly developer textures. A large sign in front of him reads 'Please rate your experience.' There are buttons in front of him labeled one through five. Please choose a rating between one through five.");
      } else if (room === "leaderboard") {
        write("There is a large digital screen on the left wall. It displays a leaderboard with you, Stanley[427], in the 9238th place out of 9238 players. There are three open doors in front of you; one on the left, one in the middle, and one on the right. You may go left, forward, or right.");
      } else {
        write("You can't look at that here.", 50);
      }
    } else if (tags["subjects"]["button"].Tag) {
      if (room === "mindLights") {
        write("Stanley looked at the button in front of him. It has a symbol of a light bulb on it.");
      } else if (room === "mindCameras") {
        write("Stanley looked at the button in front of him. It has a symbol of a security camera on it.");
      } else if (room === "mindLift") {
        write("Stanley looked at the button in front of him. It has a symbol of an elevator going up.");
      } else if (room === "mindControlChoice" || room === "facilityPowerBomb") {
        write("Stanley looked at the buttons in front of him. One says 'Off,' and the other says 'On.'");
      } else if (room === "voting") {
        write("The buttons are labeled 1 through 5.");
      } else if (room === "babyGame") {
        write("Button.");
      } else {
        write("You can't look at that here.", 50);
      }
    } else {
      write("I do not understand what you are looking at.", 50);
    }
  } else if (tags["actions"]["go"].Tag) {
    if (tags["subjects"]["left"].Tag) {
      if (room === "firstChoice") {
        room = "meetingRoom";
      } else if (room === "mariellaClocks") {
        room = "mariellaStorage";
      } else if (room === "escapeMindHall") {
        room = "escapeHall";
      } else if (room === "unfinishedRoom" || room === "leaderboard") {
        room = "voting";
      } else {
        write("You can't go there right now.");
      }
    } else if (tags["subjects"]["right"].Tag) {
      if (room === "firstChoice") {
        room = "employeeLounge";
      } else if (room === "mariellaParking") {
        room = "mariellaHall";
      } else if (room === "cargoLift") {
        room = "catwalk";
      } else if (room === "unfinishedRoom" || room === "leaderboard") {
        room = "voting";
      } else {
        write("You can't go there right now.");
      }
    } else if (tags["subjects"]["forward"].Tag) {
      if (room === "start") {
        room = "startOffice";
      } else if (room == "startOffice") {
        room = "firstChoice";
      } else if (room === "firstChoice") {
        write("Please specifiy which door you would like to go through.");
      } else if (room === "meetingRoom") {
        room = "staircase";
      } else if (room === "bossOffice" && bossDoor === "open") {
        room = "secretElevator";
      } else if (room === "escapeMindHall") {
        room = "mindLights";
      } else if (room === "mindLights" && gate === "open") {
        gate = "closed";
        room = "mindCameras";
      } else if (room === "mindCameras" && gate === "open") {
        gate = "closed";
        room = "mindLift";
      } else if (room === "mindControlFacility") {
        room = "mindControlChoice";
      } else if (room === "freedom") {
        repeat(freedomOutro);
        room = "";
      } else if (room === "mariellaHall") {
        room = "mariellaClocks";
      } else if (room === "mariellaStorage") {
        room = "mariellaParking";
      } else if (room === "escapeHall") {
        if (counter == 2) {
          room = "metalJaws"
        } else {
          room = "escapeHall"
        }
      } else if (room === "metalJaws") {
        room = "museumExit";
      } else if (room === "employeeLounge") {
        room = "straightMainHall";
      } else if (room === "straightMainHall") {
        room = "warehouse";
      } else if (room === "warehouse") {
        room = "cargoLift";
      } else if (room === "warehouseStuck") {
        repeat(coldFeetEnd);
      } else if (room === "cargoLift") {
        room = "warehouseBigRoom";
      } else if (room === "catwalk") {
        room = "redBlueChoice";
      } else if (room === "unfinishedRoom" || room === "leaderboard") {
        room = "voting";
      } else {
        write("You can't go there right now.");
      }
    } else if (tags["subjects"]["backward"].Tag) {
      if (room === "facilityPowerBomb") {
        room = "countdown";
      } else if (room === "escapeHall") {
        room = "escapeMindHall";
      } else if (room === "cargoLift") {
        room = "warehouseStuck";
      } else if (room === "redBlueChoice" && counter == 2) {
        room = "unfinishedRoom";
        counter = 0;
      } else {
        write("You can't go there right now.");
      }      
    } else if (tags["subjects"]["up"].Tag) {
      if (room === "staircase") {
        room = "bossOffice";
      } else if (room === "mindLift" && gate === "open") {
        gate = "closed";
        room = "mindControlFacility";
      } else {
        write("You can't go there right now.");
      }
    } else if (tags["subjects"]["down"].Tag) {
      if (room === "staircase") {
        room = "mariellaParking"
      } else if (room === "secretElevator") {
        room = "escapeMindHall";
      } else if (room === "warehouseStuck") {
        repeat(coldFeetEnd);
      } else {
        write("You can't go there right now.");
      }   
    } else if (tags["subjects"]["door"].Tag) {
      if (room === "start") {
        room = "startOffice";
      } else if (room === "firstChoice" || room === "redBlueChoice") {
        write("Please specifiy which door you would like to go through.");
      } else if (room === "meetingRoom") {
        room = "staircase";
      } else if (room === "bossOffice" && bossDoor === "open") {
        room = "secretElevator";
      } else if (room === "escapeMindHall") {
        room = "mindLights";
      } else if (room === "mindControlFacility") {
        room = "mindControlChoice";
      } else if (room === "mariellaParking") {
        room = "mariellaHall";
      } else if (room === "mariellaHall") {
        room = "mariellaClocks";
      } else if (room === "mariellaClocks") {
        room = "mariellaStorage";
      } else if (room === "mariellaStorage") {
        room = "mariellaParking";
      } else if (room === "freedom") {
        repeat(freedomOutro);
        room = "";
      } else if (room === "facilityPowerBomb") {
        room = "countdown";
      } else if (room === "metalJaws") {
        room = "museumExit";
      } else if (room === "employeeLounge") {
        room = "straightMainHall";
      } else if (room === "catwalk") {
        room = "redBlueChoice";
      } else {
        write("You can't go there right now.");
      }
    } else if (tags["subjects"]["red"].Tag) {
      if (null) {
      } else {
        write("You can't go there right now.");
      }
    } else if (tags["subjects"]["blue"].Tag) {
      if (room === "redBlueChoice") {
        if (counter == 0) {
          room = "redBlueChoice";
          counter++;
        } else if (counter == 1) {
          room = "redBlueChoice";
          counter++;
        } else {
          write("You can't go there right now.");
        }
      } else {
        write("You can't go there right now.");
      }
    } else if (tags["subjects"]["off"].Tag) {
      if (room === "cargoLift") {
        repeat(powerfulEnd);
      } else if (room === "warehouseStuck") {
        repeat(coldFeetEnd);
      } else {
        write("You can't go there right now.");
      }
    } else if (tags["subjects"]["on"].Tag) {
      if (null) {
      } else {
        write("You can't go there right now.");
      }
    } else {
      write("I do not understand where you want to go.", 50);
    }
  } else if (tags["actions"]["interact"].Tag) {
    if (tags["subjects"]["left"].Tag) {
      if (null) {
      } else {
        write("You can't interact with that right now.");
      }
    } else if (tags["subjects"]["right"].Tag) {
      if (null) {
      } else {
        write("You can't interact with that right now.");
      }
    } else if (tags["subjects"]["forward"].Tag) {
      if (null) {
      } else {
        write("You can't interact with that right now.");
      }
    } else if (tags["subjects"]["backward"].Tag) {
      if (null) {
      } else {
        write("You can't interact with that right now.");
      }
    } else if (tags["subjects"]["door"].Tag) {
      if (null) {
      } else {
        write("You can't interact with that right now.");
      }
    } else if (tags["subjects"]["red"].Tag) {
      if (null) {
      } else {
        write("You can't interact with that right now.");
      }
    } else if (tags["subjects"]["blue"].Tag) {
      if (null) {
      } else {
        write("You can't interact with that right now.");
      }      
    } else if (tags["subjects"]["off"].Tag) {
      if (room === "mindControlChoice") {
        room = "freedom";
      } else if (room === "museumExit") {
        room = "metalJawsTwo";
      } else {
        write("You can't interact with that right now.");
      } 
    } else if (tags["subjects"]["on"].Tag) {
      if (room === "mindControlChoice") {
        room = "facilityPowerBomb";
      } else {
        write("You can't interact with that right now.");
      } 
    } else if (tags["subjects"]["button"].Tag) {
      if (room === "mindLights") {
        gate = "open";
        repeat(mindLights);
      } else if (room === "mindCameras") {
        gate = "open";
        repeat(mindCameras);
      } else if (room === "mindLift") {
        gate = "open";
        repeat(mindLift);
      } else {
        write("You can't interact with that right now...");
      }
    } else {
      write("I do not understand what you want to interact with.", 50);
    }
  } else if (tags["actions"]["open"].Tag) {
    if (tags["subjects"]["left"].Tag) {
      if (null) {
      } else {
        write("You can't open that right now.");
      }
    } else if (tags["subjects"]["right"].Tag) {
      if (null) {
      } else {
        write("You can't open that right now.");
      }
    } else if (tags["subjects"]["forward"].Tag) {
      if (null) {
      } else {
        write("You can't open that right now.");
      }
    } else if (tags["subjects"]["backward"].Tag) {
      if (null) {
      } else {
        write("You can't open that right now.");
      }
    } else if (tags["subjects"]["door"].Tag) {
      if (room === "start") {
        write("The door is already open.");
      } else {
        write("You can't open that right now.");
      }
    } else if (tags["subjects"]["red"].Tag) {
      if (null) {
      } else {
        write("You can't open right now.");
      }
    } else if (tags["subjects"]["blue"].Tag) {
      if (null) {
      } else {
        write("You can't open that right now.");
      }      
    } else {
      write("I do not understand what you want to open.", 50);
    }
  } else if (tags["actions"]["close"].Tag) {
    if (tags["subjects"]["left"].Tag) {
      if (null) {
      } else {
        write("You can't close that right now.");
      }
    } else if (tags["subjects"]["right"].Tag) {
      if (null) {
      } else {
        write("You can't close that right now.");
      }
    } else if (tags["subjects"]["forward"].Tag) {
      if (null) {
      } else {
        write("You can't close that right now.");
      }
    } else if (tags["subjects"]["backward"].Tag) {
      if (null) {
      } else {
        write("You can't close that right now.");
      }
    } else if (tags["subjects"]["door"].Tag) {
      if (room == "start") {
        room = "coward";
      } else {
        write("You can't close that right now.");
      }
    } else if (tags["subjects"]["red"].Tag) {
      if (null) {
      } else {
        write("You can't close that right now.");
      }
    } else if (tags["subjects"]["blue"].Tag) {
      if (null) {
      } else {
        write("You can't close that right now.");
      }      
    } else {
      write("I do not understand what you want to close.", 50);
    }
  } else if (room === "bossOffice") {
    if ($("#user-input").val().includes("2845") || $("#user-input").val().includes("2-8-4-5") || $("#user-input").val().includes("2 - 8 - 4 - 5")) {
      bossDoor = "open";
      repeat(bossOfficeOpened);
      bossAttempts = 0;
    } else if (bossDoor !== "open") {
      if (bossAttempts == 0) {
        write("\"Stanley began entering random codes into the keypad, knowing full well the sheer statistical unlikelihood that this would ever result in a correct combination. If he knew that the combo was 2-8-4-5, it would be another story entirely. But no. No, this is what he was going to do instead.\"");
      } else if (bossAttempts == 1) {
        write("\"Stanley just sat around twiddling his thumbs. Trying to input anything on the device was useless, since he could never possibly know that the combination was 2-8-4-5.\"")
      } else if (bossAttempts == 2) {
        write("\"2 - 8 - 4 - 5.\"", 170);
      } else if (bossAttempts == 3) {
        write("\"2 - 8 - 4 - 5.\"", 170);
      } else if (bossAttempts == 4) {
        bossDoor = "open";
        repeat(bossOfficeForceOpen);
        bossAttempts = 0;
      }
      bossAttempts++;
    }
  } else if (room === "employeeLounge") {
    if (counter == 0) {
      repeat(employeeLoungeOne);
      counter++;
    } else if (counter == 1) {
      repeat(employeeLoungeTwo);
      counter++;
    } else if (counter == 2) {
      repeat(employeeLoungeThree);
    }
  } else {
    var no = ["No.", "Stanley would never do that.", "Impossible.", "You should try looking around once in a while.", "The Narrator doesn't approve.", "I do not understand.", "Maybe try doing something else?", "Stanley would not do that.", "Did you spell something incorrectly?", "He wouldn't dare.", "That's not possible."];

    write(no[Math.floor(Math.random() * no.length)]);
  }
}
// #endregion