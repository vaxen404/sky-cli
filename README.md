# 🌤️ SKY-CLI HAVA DURUMU
Hava durumunu terminal üzerinden anlık ve renkli bir şekilde takip etmenizi sağlayan hızlı ve profesyonel bir CLI aracı.

## 🚀 Özellikler
Anlık Veri: OpenWeatherMap API üzerinden güncel hava durumu bilgilerini çeker.

Detaylı Bilgi: Sıcaklık, nem oranı, rüzgar hızı ve gökyüzü durumunu gösterir.

Akıllı Renklendirme: Sıcaklığa göre dinamik renk değişimi (Sıcaksa kırmızı ☀️, soğuksa mavi ❄️).

Etkileşimli: Şehir ve ilçe bazlı kolay sorgulama ve döngüsel kullanım imkanı.

## 🛠️ Kurulum ve Yapılandırma
1. Depoyu klonlayın:
- git clone https://github.com/vaxen404/sky-cli.git
- cd sky-cli

2. Bağımlılıkları yükleyin:
- npm install

3. API Anahtarını Ayarlayın (Kritik Adım):
- Projenin çalışması için bir OpenWeatherMap API anahtarına ihtiyacınız vardır.

- Ana dizindeki .env.example dosyasının adını .env olarak değiştirin:

- Linux/Termux: cp .env.example .env

- Windows (CMD): copy .env.example .env

- .env dosyasını bir metin editörüyle açın ve API_KEY= kısmına kendi anahtarınızı yapıştırın.

4. Uygulamayı başlatın:
- npx tsx src/app.ts

## 📦 Teknolojiler
TypeScript: Güvenli ve ölçeklenebilir kod yapısı.

Dotenv: API anahtarı güvenliği ve çevre değişkeni yönetimi.

Chalk: Terminal çıktılarını profesyonelce renklendirme.

Readline (Node.js): Etkileşimli terminal girişleri.

## 📄 Lisans
MIT
