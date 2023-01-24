const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 4000;

const s = `Women's Tennis`;

const app = express();
axios.get('https://vucommodores.com/sports/wten/schedule/')
    .then(res => {
        const $ = cheerio.load(res.data)
        const games = [];
        $('.schedule__row').each((index, element) => {
            const game = { sport: s, date: "", time: "", isHomeGame: false, opponent: "" };
            game.date = $(element).find('time').first().text()
            game.time = $(element).find('time:nth-child(2)').text()
            game.isHomeGame = ($(element).find('p').text() == "Nashville, Tenn.");
            game.opponent = $(element).find('span').first().text().replace(/\s\s+/g, '').substr(2)
            console.log(game)
            games.push(game);
        });
        fs.appendFile("games.json", JSON.stringify(games, null, 4), (err) => {
            console.log(err)
        })
    }).catch(err => console.error(err))

//Listen to server
app.listen(port, () => {
    console.log(`Server established and running on port ${port}`)
})
