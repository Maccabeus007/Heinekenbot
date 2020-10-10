const Discord = require("discord.js");
var  request = require('request');
var cheerio = require('cheerio');

request('https://cajui.ifnmg.edu.br/cajui/login', function(err, res, body) {
    if (err) Console.log('Erro: ' + err);

    var $ = cheerio.load(body);

    
});