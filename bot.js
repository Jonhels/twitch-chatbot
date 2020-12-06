const tmi = require('tmi.js');
require('dotenv').config();

// Define configuration options
const opts = {
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: [process.env.CHANNEL_NAME]
};

// create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim();

    // If the command is known, let's execute it
    if (commandName === '!dice') {
        const num = rollDice();
        client.say(target, `you rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
    }

    if (commandName === '!clap') { 
        client.say(target, `AYAYA Clap AYAYA Clap AYAYA Clap AYAYA Clap`);
    }

    if (commandName === '!dance') {
        client.say(target, `PepePls catJAM PepePls catJAM `)
    }

    if (commandName === '!jam') {
        client.say(target, `catJAM catJAM catJAM catJAM`)
    }

    if (commandName === '!sadjam') {
        client.say(target, `PepePls PepePls PepePls PepePls`)
    }

    if (commandName === '!feed') {
        client.say(target, `FeelsAmazingMan FeelsAmazingMan FeelsAmazingMan FeelsAmazingMan`)
    }

    if (commandName === '!weird') {
        client.say(target, `weirdChamp weirdChamp weirdChamp weirdChamp`)
    }

    if (commandName === '!melt') {
        client.say(target, `pepeMeltdown pepeMeltdown pepeMeltdown pepeMeltdown`)
    }

    if (commandName === '!hyper') {
        client.say(target, `gachiHYPER gachiHYPER gachiHYPER gachiHYPER `)
    }

    if (commandName === '!pog') {
        client.say(target, `PagChomp PagChomp PagChomp PagChomp `)
    }
    
    if (commandName === '!commands') {
        client.say(target, `
        These are all the emote commands:
        !clap = 4x AYAYA Clap ,
        !dance = 2x PepePls catJAM ,
        !jam =  4x catJAM ,
        !sadjam = 4x PepePls ,
        !feed = 4x FeelsAmazingMan ,
        !weird = 4x weirdChamp ,
        !melt = 4x pepeMeltdown , 
        !hyper = 4x gachiHYPER ,
        !pog = 4x PagChomp
        `)
    }
    
    

}

// Function called when the "dice" command is issued
function rollDice () {
    const sides = 6;
    return Math.floor(Math.random() * sides) +1;
}

// Called every time the bot connects to  Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}