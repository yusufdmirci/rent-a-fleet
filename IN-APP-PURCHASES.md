# Uygulama içi satın alma durumu

## Şu an
Oyunda demo mağazası bulunur. Ürünler yalnızca oyun içi sanal bakiye ile alınır. Gerçek para tahsilatı yapılmaz ve ödeme SDK'sı çağrılmaz.

## Gerçek IAP için yapılması gerekenler
- Google Play Billing ve Apple StoreKit'i destekleyen, güncel ve bakımı sürdürülen Capacitor eklentisi seçip native projeye eklemek.
- Google Play Console ve App Store Connect'te ürün kimliklerini ve fiyatları tanımlamak.
- Satın alma ve geri yükleme akışları; iptal, iade, hata ve tekrar deneme durumlarını uygulamak.
- Dijital ürün satın alımlarını ilgili mağazanın ödeme sisteminden geçirmek.
- Makbuz/işlem doğrulaması, test hesapları, sandbox ve mağaza politika uyumunu tamamlamak.
- Gizlilik politikası, Google Play Data safety ve Apple App Privacy beyanlarını gerçek SDK davranışına göre güncellemek.

Bu depo için mağaza kimlik bilgileri veya imzalama anahtarları yoktur. Bu nedenle gerçek satın alma entegrasyonu ve tahsilat etkinleştirilmemiştir.
