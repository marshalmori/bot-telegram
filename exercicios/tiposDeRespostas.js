const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}! 😂`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b> 
            <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
            <a href="http://www.google.com">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
                + '_de varias_ `formas` ```possíveis```'
                + '[Google](http://www.google.com)')
    await ctx.replyWithPhoto({source: `${__dirname}/dog.jpg`})
    await ctx.replyWithPhoto('https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?cs=srgb&dl=pexels-pixabay-39317.jpg&fm=jpg', 
                            {caption: 'Muito fofis'})
    await ctx.replyWithPhoto({ url: 'https://images.pexels.com/photos/35638/labrador-breed-dogs-animal.jpg?cs=srgb&dl=pexels-pixabay-35638.jpg&fm=jpg'})
    await ctx.replyWithLocation(-15.745068, -47.891926)
    await ctx.replyWithVideo('seu-video aqui')
})

bot.startPolling()