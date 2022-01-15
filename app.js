const {Client, Intents, Interaction} = require('discord.js');
const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on('ready', () => {
    console.log('Bot is ready');
});

client.on("messageCreate", async message => {
    if (message.author.bot == false) {
        let lowerString = message.content.toLowerCase();
        let string = message.content;
        let erorCount = 0;
        let erorLocations = [];
        let index = 0;
        while (lowerString != "") {
            if (lowerString.length > 1) {
                if (lowerString.startsWith("er") 
                    || lowerString.startsWith("or")) {
                    erorCount++;
                    lowerString = lowerString.substring(1);
                }
            } else {
                break;
            }
        }
        lowerString = message.content.toLowerCase();
        while (erorCount != 0) {
            if ((lowerString.charAt(index) == 'e' 
                || lowerString.charAt(index) == 'o') 
                && lowerString.charAt(index + 1) == 'r') {
                if (index != 0) {
                    if (lowerString.charAt(index - 1) != ' ') {
                        if (index <= lowerString.length - 3) {
                            if (lowerString.charAt(index + 2) == ' ') {
                                erorLocations.push(index);
                                erorCount--;
                            }
                        } else {
                            erorLocations.push(index);
                            erorCount--;
                        }
                    }
                }
            }
            index++;
        }
        let outstring = "";
        while (erorLocations.length > 0) {
            let location = erorLocations.pop();
            let spaceIndex = location;
            while (string[spaceIndex != ' ']) {
                spaceIndex--;
            }
            outstring += string.substring(spaceIndex + 1, location + 2) + "? I barely know her!\n";
        }
        outstring = outstring.substring(0, outstring.length - 1);
        message.reply(outstring);
        string = message.content;
        console.log(message.author.username + ": " + string);
        index = 0;
        while (string.length > 1) {
            let lowerString = string.toLowerCase();
            if (lowerString.startsWith("i'm")
                || lowerString.startsWith("im") 
                || lowerString.startsWith("i am")) {
                    if (lowerString.startsWith("im")) {
                        if (string.length > 2) {
                            if (string.charAt(2) == " ") {
                                let match = false;
                                if (index != 0) {
                                    let letter = message.content.charAt(index - 1).toLowerCase();
                                    if (letter.charCodeAt(0) >= 97 
                                        && letter.charCodeAt(0) <= 122) {
                                            string = string.substring(1);
                                            index++;
                                    } else {
                                        match = true;
                                    }
                                } else {
                                    match = true;
                                }
                                if (match == true) {
                                    let outString = "";
                                    string  = string.substring(2);
                                    while (string.charAt(0) != '.' 
                                        && string.charAt(0) != ',' 
                                        && string.charAt(0) != '?' 
                                        && string.charAt(0) != "!" 
                                        && string != "") {
                                        outString += string.charAt(0);
                                        if (string.length != 1) {
                                            string = string.substring(1);
                                        } else {
                                            break;
                                        }
                                    }
                                    message.reply("Hi" + outString + "! I'm Dad Bot!");
                                    return;
                                }
                            } else {
                                string = string.substring(1);
                                index++;
                            }
                        } else {
                            let match = false;
                            let letter = message.content.charAt(index - 1).toLowerCase();
                            console.log(letter);
                            if (letter.charCodeAt(0) >= 97 
                                && letter.charCodeAt(0) <= 122) {
                                    string = string.substring(1);
                                    index++;
                            } else {
                                match = true;
                            }
                            if (match == true) {
                                message.reply("Hi ! I'm Dad Bot!");
                                return;
                            } else {
                                string = string.substring(1);
                                index++;
                            }
                        }
                    } else {
                        if (string.charAt(2) == 'm' 
                        || string.charAt(2) == 'M') {
                            if (string.length == 3) {
                                message.reply("Hi ! I'm Dad Bot!");
                                return;
                            }
                            string = string.substring(3);
                        } else {
                            if (string.length == 4) {
                                message.reply("Hi ! I'm Dad Bot!");
                                return;
                            }
                            string = string.substring(4);
                        }
                        let outString = "";
                        while (string.charAt(0) != '.' 
                            && string.charAt(0) != ',' 
                            && string.charAt(0) != '?' 
                            && string.charAt(0) != "!" 
                            && string != "") {
                            outString += string.charAt(0);
                            if (string.length != 1) {
                                string = string.substring(1);
                            } else {
                                break;
                            }
                        }
                        message.reply("Hi" + outString + "! I'm Dad Bot!");
                        return;
                    }
            } else {
                string = string.substring(1);
                index++;
            }
        }
        
    }
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) {
        return;
    }

    if (interaction.commandName === 'test') {
        interaction.reply("test");

    }
});

client.login(process.env.token);