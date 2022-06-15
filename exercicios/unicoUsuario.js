const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from 

    if( from.id === 123){
        ctx.reply(`Ao seu dispor, mestre!`)
    } else {
        ctx.reply('Sinto muito, mas só falo com meu mestre.')
    }
})

bot.startPolling()