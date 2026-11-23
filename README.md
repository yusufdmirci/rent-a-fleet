# Rent a Car Simülasyon

Türkçe, mobil uyumlu ve tarayıcıda oynanabilir araç kiralama işletme simülasyonu.

## Oynanış
- Binek otomobil, kamyonet, kamyon, otobüs, ekskavatör ve kule vinç kiralama
- Teklif kabul etme ve gün sayısına bağlı sözleşme/tahsilat
- Araç bakımı, durum ve müsaitlik
- Araç satın alma ve filo büyütme
- Usta, yönetici ve teslimat şoförü işe alma; maaş/bonus yönetimi
- Görevler, başarımlar, seviye ve deneyim
- Otomatik yerel kayıt (`localStorage`)
- Demo mağazası (yalnızca oyun içi bakiye; gerçek ödeme almaz)

## Hemen oyna
`index.html` dosyasını tarayıcıda aç. Alternatif olarak kök dizinde `python3 -m http.server 8080` komutunu çalıştırıp `http://localhost:8080` adresine git.

## Mobil paketleme
Capacitor ayarları `capacitor.config.json` içinde. `npm install` ve `npm run prepare:web` sonrası native projeleri kendi geliştirme makinenizde ilk kez `npx cap add android` / `npx cap add ios` ile oluşturun. iOS için macOS ve Xcode gerekir. Ayrıntı için `RELEASE-CHECKLIST.md`.

## Sınırlar
Bu depo prototiptir; şu an mağaza imzalı AAB/IPA üretmez. Gerçek ödeme/billing SDK'sı entegre değildir. Mağaza ürünü satın alma, iade, geri yükleme ve doğrulama akışları olmadan gerçek para tahsil etmeyin. Gerçek IAP için Google Play Billing ve Apple StoreKit/Capacitor uyumlu bir eklenti, mağaza ürün tanımları ve cihaz testleri gerekir. Gizlilik politikasını ve mağaza veri bildirimlerini gerçek son uygulamaya göre tamamlayın.
