export const collections = [
  {
    handle: "tum-urunler",
    title: "Tüm Ürünler",
    description:
      "Hayırlı Hediyeler koleksiyonundaki tüm anlamlı ve zarif ürünleri keşfedin.",
  },
  {
    handle: "ev-dekorasyonu",
    title: "Ev Dekorasyonu",
    description:
      "Mekanlara huzur katan hat sanatları, tablolar ve dekoratif objeler.",
  },
  {
    handle: "tesbih-ve-aksesuarlari",
    title: "Tesbih & Aksesuarlar",
    description:
      "Eli işi tesbihler ve günlük kullanıma uygun şık aksesuarlar.",
  },
  {
    handle: "hediye-setleri",
    title: "Hediye Setleri",
    description:
      "Sevdikleriniz için özenle hazırlanmış, anlamlı hediye kutuları.",
  },
];

export const products = [
  {
    id: "velvet-prayer-mat",
    handle: "kadife-seccade-zumrut",
    name: "Kadife Seccade - Zümrüt",
    price: 1290,
    currency: "TRY",
    category: "ev-dekorasyonu",
    collection: "ev-dekorasyonu",
    availability: "in_stock",
    rating: 4.9,
    reviews: 32,
    shortDescription:
      "Pamuksu dokulu, altın yaldızlı motiflere sahip zarif seccade.",
    description:
      "Zümrüt yeşili kadife yüzeye sahip bu seccade, el işçiliği altın şeritler ve ipek püsküllerle tamamlanmıştır. Yumuşak dokusu ve kaymaz tabanı ile hem şıklık hem de konfor sunar.",
    images: [
      "https://images.unsplash.com/photo-1617032213039-7b5c78bbd76a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["yeniler", "kadife", "hediye"],
  },
  {
    id: "incense-set",
    handle: "misk-odas-incense-kiti",
    name: "Misk & Odaş Buhur Seti",
    price: 890,
    currency: "TRY",
    category: "hediye-setleri",
    collection: "hediye-setleri",
    availability: "in_stock",
    rating: 4.7,
    reviews: 18,
    shortDescription:
      "El yapımı bakır buhurdan ve seçkin kokulardan oluşan hediye seti.",
    description:
      "Bakır detaylı buhurdan, doğal misk taşları ve hatıra kartı ile birlikte zarif kadife kutuda sunulur. Misafirlerinizi hoş kokularla karşılamak için ideal bir set.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1612158734458-de2c4b094d4d?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["hediye", "populer"],
  },
  {
    id: "calligraphy-frame",
    handle: "hat-sanati-bismillah-cerceve",
    name: "Hat Sanatı Bismillah Çerçeve",
    price: 1590,
    currency: "TRY",
    category: "ev-dekorasyonu",
    collection: "ev-dekorasyonu",
    availability: "limited",
    rating: 5,
    reviews: 21,
    shortDescription:
      "Altın varak detaylı, el yazması hat sanatı çalışması duvar çerçevesi.",
    description:
      "Geleneksel hat sanatının modern yorumuyla hazırlanan bu eser, el yapımı ahşap çerçeve ve altın varak bezemeleriyle salona şıklık katar. Her biri sınırlı sayıda üretilmiştir.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["sanat", "onerilen"],
  },
  {
    id: "tasbih-olivewood",
    handle: "zeytin-agaci-tesbih",
    name: "Zeytin Ağacı Tesbih",
    price: 490,
    currency: "TRY",
    category: "tesbih-ve-aksesuarlari",
    collection: "tesbih-ve-aksesuarlari",
    availability: "in_stock",
    rating: 4.6,
    reviews: 12,
    shortDescription:
      "Doğal zeytin ağacı tanelerden yapılmış, püsküllü tesbih.",
    description:
      "Her tane özenle işlenmiş, el yapımı zeytin ağacı tesbih. Kadife kesesi ile birlikte gönderilir, günlük kullanıma ve hediyelik sunuma uygundur.",
    images: [
      "https://images.unsplash.com/photo-1515443965091-0b7c5217c07d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["aksesuar", "tesbih"],
  },
  {
    id: "ramadan-lantern",
    handle: "ramazan-feneri-altin",
    name: "Ramazan Feneri - Altın",
    price: 690,
    currency: "TRY",
    category: "ev-dekorasyonu",
    collection: "ev-dekorasyonu",
    availability: "preorder",
    rating: 4.8,
    reviews: 14,
    shortDescription:
      "Cam gövde ve metal işlemeli, LED ışıklı dekoratif ramazan feneri.",
    description:
      "Oriental desenlere sahip cam panelli bu fener, sıcak beyaz LED ışığı ile ortama huzurlu bir ambians katar. USB şarjlıdır ve masa üstü kullanıma uygundur.",
    images: [
      "https://images.unsplash.com/photo-1521600636000-7eed798b1b8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["ramazan", "dekor"],
  },
  {
    id: "aromatic-candle",
    handle: "amber-ve-oud-kandil",
    name: "Amber & Oud Mum",
    price: 320,
    currency: "TRY",
    category: "hediye-setleri",
    collection: "hediye-setleri",
    availability: "in_stock",
    rating: 4.4,
    reviews: 9,
    shortDescription:
      "Uzun süreli yanış sunan amber ve oud aromalı soya mum.",
    description:
      "Cam kavanozu ve bakır kapak detayıyla öne çıkan amber & oud mum, 45 saate kadar yanış süresi sunar. Saf soya mumu ile üretilmiştir.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["mum", "aromaterapi"],
  },
  {
    id: "suhur-set",
    handle: "sahur-keyfi-serisi",
    name: "Sahur Keyfi Serisi",
    price: 1140,
    currency: "TRY",
    category: "hediye-setleri",
    collection: "hediye-setleri",
    availability: "in_stock",
    rating: 4.5,
    reviews: 11,
    shortDescription:
      "Özel harman kahve, lokum ve porselen fincan seti bir arada.",
    description:
      "Sahur sofralarına zariflik katan bu set; bakır detaylı iki porselen fincan, Türk kahvesi ve hurma-lokum seçkisiyle tamamlanmıştır.",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["sahur", "set"],
  },
  {
    id: "rosewater-mist",
    handle: "gulsuyu-yuz-sis",
    name: "Gülsuyu Yüz Şişesi",
    price: 210,
    currency: "TRY",
    category: "tesbih-ve-aksesuarlari",
    collection: "tesbih-ve-aksesuarlari",
    availability: "out_of_stock",
    rating: 4.2,
    reviews: 7,
    shortDescription:
      "Saf gül yapraklarından elde edilmiş ferahlatıcı yüz misti.",
    description:
      "Sabah ve akşam kullanıma uygun, saf gül suyu içeriğiyle cildi tazeler ve canlandırır. Cam şişede sunulur. Şu an ön siparişle alınabilir.",
    images: [
      "https://images.unsplash.com/photo-1612810806695-30ba0a14227b?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["bakim", "outlet"],
  },
];

export function getProductByHandle(handle) {
  return products.find((product) => product.handle === handle);
}

export function getCollectionByHandle(handle) {
  if (handle === "all-products" || handle === "tum-urunler") {
    return collections[0];
  }
  return collections.find((collection) => collection.handle === handle);
}

export function getProductsByCollection(handle) {
  if (handle === "all-products" || handle === "tum-urunler") {
    return products;
  }
  return products.filter((product) => product.collection === handle);
}
