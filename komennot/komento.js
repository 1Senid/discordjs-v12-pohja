// Määrittele discord.js module:
const Discord = require('discord.js');
// Määrittele asetustiedosto:
const asetukset = require('../asetukset.json');

exports.run = async(bot, message, args) => {
  
  /*
  
  Komennon koodi tähän.

  Esimerkiksi:
  message.channel.send("Moi");
  
  */ 

  message.channel.send("Moi");
}

exports.komento = {
  nimi: 'testi',
  alias: ['testi2'],
}
