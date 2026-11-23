# Yayına hazırlık kontrol listesi

## Geliştirme ortamı
- Node.js LTS ve npm
- Android için Android Studio, Android SDK ve imzalama anahtarı
- iOS için macOS, Xcode ve Apple Developer hesabı

## Yerel web prototipi
```bash
npm install
npm run prepare:web
```
`www/` klasörü Capacitor web build'idir.

## Android/iOS native projelerini oluşturma (ilk kez)
```bash
npx cap add android
npx cap add ios
```
Bu komutlar Android için Android Studio, iOS için macOS/Xcode gerektirir. Sonraki web değişikliklerinden sonra:
```bash
npm run android:sync
npm run ios:sync
```
Native projeleri Android Studio/Xcode'da açıp cihaz/emülatörde test et. Android'de imzalı AAB, iOS'ta arşiv/IPA oluşturma ve mağazaya yükleme geliştirici hesapları ve yerel araçlarla yapılır.

## Mağaza yayını öncesi zorunlu doğrulamalar
- [ ] `PRIVACY-POLICY.md` içindeki yayıncı ve e-posta alanlarını gerçek bilgilerle doldur; herkese açık HTTPS URL'sinde yayımla.
- [ ] Google Play Data safety ve Apple App Privacy formlarını gerçek SDK, ağ ve izin davranışına göre doldur.
- [ ] Yaş derecelendirmesi, hedef kitle ve reklam beyanlarını doğru cevapla.
- [ ] Android/iOS izinlerini incele; gereksiz izin ekleme.
- [ ] Cihazlarda test et; erişilebilirlik, çevrimdışı çalışma, ekran oranları ve uygulama yaşam döngüsünü doğrula.
- [ ] Uygulama simgesi, gerçek ekran görüntüleri ve mağaza görsellerini üret.
- [ ] Uygulama adı ve bundle/package kimliğinin mağazalarda kullanılabilirliğini kontrol et.
- [ ] Sürüm numarası, imzalama, içerik derecelendirmesi, destek URL'si ve mağaza açıklamalarını tamamla.
- [ ] Test kanalı/TestFlight üzerinden deneme ve mağaza incelemesi yap.

Bu depo bir prototip ve yayın hazırlık iskeletidir; AAB/IPA üretildiği, yasal incelemenin tamamlandığı veya mağazaların onay verdiği anlamına gelmez.
