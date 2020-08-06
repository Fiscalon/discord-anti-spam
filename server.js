const Discord = require("discord.js");
const antispam = require("better-discord-antispam");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Im Online");

  antispam(client, {
    limitUntilWarn: 3, //Gets warned at 3 messages
    limitUntilMuted: 5, //Gets muted at 5 messages
    interval: 3000, // if he sends 3 messages in 3 seconds it will count as spam
    warningMessage: "Stop now or you will get muted kiddo!", //Warn message
    muteMessage: "the spamming kid was muted, no problem :3!", //Mute Message
    maxDuplicatesWarning: 5, //5 messages of the same until warn
    maxDuplicatesMute: 7, //7 messages of the same until mute
    ignoredRoles: ["Role1", "Role2"], //imune roles
    mutedRole: "Muted", //muted role name
    timeMuted: 1000 * 600, //Time for him to be muted (This is 10mins)
    logChannel: "logchannel_name" //Name of the log channel
  });
});

client.on("message", msg => {
  client.emit("checkMessage", msg);
});

client.login("BOT_TOKEN");
