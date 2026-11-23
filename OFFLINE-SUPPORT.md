# Çevrimdışı Paketleme Notları

Uygulama PWA olarak kurulabilir hale getirilmiştir. Tarayıcı servis çalışanı ilk ziyaret sonrası oyun dosyalarını ve manifesti önbelleğe alır.

## Kullanım
- İlk kez internet bağlantısıyla açın.
- Tarayıcının uygulamayı ekrana kurmasına izin verin.
- Sonraki açılışlarda dosyalar önbellekten kullanılabilir.
- Oyun ilerlemesi tarayıcının `localStorage` alanında saklanır.

## Sınırlar
- Tarayıcı önbelleğini veya uygulama verisini silmek ilerlemeyi silebilir.
- Farklı tarayıcılar veya cihazlar arasında kayıt senkronizasyonu yapılmaz.
- Gerçek çok kullanıcılı çevrimdışı depolama veya bulut kaydı yoktur.
- iOS Safari kurulumu cihaz sürümüne ve tarayıcı desteğine göre değişebilir.
