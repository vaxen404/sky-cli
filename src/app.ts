import "dotenv/config"
import chalk from "chalk"
import * as readline from "node:readline/promises"

const rl = readline.createInterface({input: process.stdin, output: process.stdout})

const API_KEY = process.env.API_KEY;

async function havaDurumu() {
    console.clear();
    console.log(chalk.cyan.bold("\n====================================="));
    console.log(chalk.white.bold("      🌤️  SKY-CLI HAVA DURUMU 🌧️"));
    console.log(chalk.cyan.bold("=====================================\n"));

    try{
        const sehir = await rl.question(chalk.yellow("Hangi şehri arıyorsunuz (örn: Istanbul): "))
        const ilce = await rl.question(chalk.yellow("Hangi ilçeyi merak ediyorsunuz (opsiyonel): "))
    
        if(!sehir) throw new Error("Şehir boş bırakılamaz!")

        const sorgu = ilce ? `${ilce},${sehir}` : sehir

        console.log(chalk.gray(`\n${sorgu} için veriler getiriliyor...`));

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(sorgu)}&appid=${API_KEY}&units=metric&lang=tr`;

        const response = await fetch(url)
        const data = await response.json()

        if(data.cod !== 200){
            throw new Error(data.message || "konum bulunamadı!")
        }

        const derece = data.main.temp
        const durum = data.weather[0].description.toUpperCase()
        const nem = data.main.humidity
        const ruzgar =  data.wind.speed

        let renkliDurum = chalk.green(durum)
        if(derece > 25) renkliDurum = chalk.red(durum + " ☀️")
        if(derece < 10) renkliDurum = chalk.blue(durum + " ❄️")

        console.log(chalk.white.bold(`\n📍 Konum: ${data.name}, ${data.sys.country}`));
        console.log(`${chalk.yellow("🌡️  Sıcaklık:")} ${chalk.bold(derece)}°C`);
        console.log(`${chalk.yellow("☁️  Durum:")} ${renkliDurum}`);
        console.log(`${chalk.yellow("💧 Nem:")} %${nem}`);
        console.log(`${chalk.yellow("💨 Rüzgar:")} ${ruzgar} m/s`);
    }catch(err: any) {
        console.log(chalk.red(`Hata: ${err.message}`));
    }finally {
        const cevap = (await rl.question(chalk.blue("\nBaşka yerlere bakmak ister misin? (e/h): ")))
        cevap.toLowerCase() === "e" ? havaDurumu() : (console.log("sistem kapatıldı!"), rl.close(), process.exit())
    }
}

havaDurumu()