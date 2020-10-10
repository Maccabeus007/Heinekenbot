var webdriver = require('selenium-webdriver');
var By = webdriver.By;
exports.run = (client, message, args) => {
message.channel.send(`<@${author.id}> seguinte,não irei explicar bem...\npara usar este comando você ja tem que saber utilizar a plataforma Cajuí, ou seja, **ser aluno do IF**`)
//pergunta oq desejas....
    message.channel.send(`Olá <@${author.id}>, envie as iniciis do seu nome (em caixa baixa). \n **Exemplo:** Maria Antônia Lacerda = mal.`);
    var uwt = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    uwt.on('collect', r=> {
    let nome = r.content;

    message.channel.send(`Bem!!! Agora envie seu CPF. Sem os pontos e o hífen. \n **Exemplo:** 105.876.476-70 ficará **10587647670**.`);
    var uwa = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 3000000, max: 1 });
    uwa.on('collect', r=> {
        let cpf = r.content;


var driver = new webdriver.Builder().forBrowser('Chrome').build();

driver.get('https://cajui.ifnmg.edu.br/cajui/login');

driver.findElement(By.name('LoginForm[username]')).sendKeys(`${nome}`);
driver.findElement(By.name('LoginForm[password]')).sendKeys(`${cpf}`);
driver.findElement(By.tagName('login-button')).click();


})
})
}