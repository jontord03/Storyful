const generateButton = document.getElementById("generator");
const userTextInput = document.getElementById("nameField"); 
paragraphArea = document.createElement("p"); 
document.body.append(paragraphArea);

const adjectives = ["hairy", "silly", "icky", "sticky", "lazy", "hazy", "crazy", 
            "weird", "hot", "cold", "sweaty", "stupid", "smart", "slimy", "gross", "sketchy"]; 
const verbs = ["walked", "talked", "ate", "drove", "read", "slept", "punched",
            "slapped", "kissed", "helped", "sat", "saw", "farted", "spat", "pooped", "scared", "dressed-up"]; 
const nouns = ["toad", "frog", "castle", "princess", "mario", "couch", "kitchen", 
            "fish", "slime", "worm", "whale", "alien", "pig", "dog", "cat", "store", "library", "Berkeley", "Stanford",
            "San Francisco", "Los Angeles", "New York", "Hawaii", "dolphin", "luigi", "wario", "daisy"]; 

const stories = [
    "One day userName walked down the street and saw a adjective noun eating a noun and userName verb and verb", 
    "Hello userName said a adjective noun that verb and verb in a adjective way so userName verb", 
    "userName verb in a adjective way to the noun and verb before the noun verb"
]

// Change to generate word for each array
function generateNoun() {
    let genNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return genNoun; 
}

function generateAdj() {
    let genAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    return genAdj;
}

function generateVerb() {
    let genVerb = verbs[Math.floor(Math.random() * verbs.length)];
    return genVerb;
}

function generateStory() {
    let genStory = stories[Math.floor(Math.random() * stories.length)];
    return genStory;
}

function submitAction() {
    paragraphArea.textContent = ""; 
    if (userTextInput.value !== "") {
        let userName = userTextInput.value; 
        randStory = generateStory(); 
        storyArray = randStory.split(" "); 
        for (word in storyArray) {
            if (storyArray[word] == "noun") {
                let randNoun = generateNoun(); 
                let currentIndex = word;  
                storyArray.splice(currentIndex, 1, randNoun); 
            }
            else if (storyArray[word] == "adjective") {
                let randAdj = generateAdj(); 
                let currentIndex = word;  
                storyArray.splice(currentIndex, 1, randAdj); 
            }
            else if (storyArray[word] == "verb") {
                let randVerb = generateVerb(); 
                let currentIndex = word; 
                storyArray.splice(currentIndex, 1, randVerb); 
            }
            else if (storyArray[word] == "userName") {
                let currentIndex = word;  
                storyArray.splice(currentIndex, 1, userName); 
            } else { 
                let currentIndex = word;
                storyArray.splice(currentIndex, 1, storyArray[word]);
            }
        }
        storyString = storyArray.join(" "); 
        paragraphArea.textContent = storyString;
    }
    else {
        paragraphArea.textContent = "Please input your name"
    }
    paragraphArea.style.textAlign = "center"; 
    paragraphArea.style.margin = "calc(2rem + 2vw)"; 
}

generateButton.addEventListener("click", submitAction);

/*
TODO

1. Loop through multiple times and generate more stories
2. Specify between person, place, thing

*/