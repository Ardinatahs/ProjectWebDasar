const data = [
  {
    judul: 'Expresso',
    gambar: 'https://cdn.idntimes.com/content-images/post/20181001/b220d7fc057182d0cf147dadfa777323.jpg',
    deskripsi:
      'Minuman kopi paling dasar ini biasanya disajikan dalam demitasse alias cangkir khusus espresso berukuran 30 mililiter (satu shot) sampai 118 mililiter. Espresso bertekstur pekat dan pahit, dengan buih putih alias crema di atasnya yang terbentuk dari tekanan minyak dalam bijih kopi.',
  },
  {
    judul: 'Americano',
    gambar: 'https://cdn.idntimes.com/content-images/post/20181001/202aa05b6abb26b41f7688069299fad3.jpg',
    deskripsi:
      'Americano terdiri dari satu shot espresso yang dituangkan dalam cangkir berukuran 178 mililiter yang dicampur dengan air panas hingga memenuhi gelas. Jenis lainnya adalah doppio, yakni segelas Americano dengan dua shot espresso. Minuman ini kerap disajikan dalam panas maupun dingin yang disebut iced Americano.',
  },
  {
    judul: 'Cappuccino',
    gambar: 'https://cdn.idntimes.com/content-images/post/20181001/01ef8959842699f9596966b1df5efe98.jpg',
    deskripsi:
      'Kamu pasti selalu menemukan cappuccino dalam buku menu tiap kali pergi ke kedai kopi, atau bahkan kafe-kafe biasa. Cappuccino adalah olahan espresso yang paling banyak digemari, terutama bagi penikmat kopi dengan rasa lebih mild. Minuman ini terdiri dari espresso dan steamed milk dengan rasio 1:1. Namun, ada juga yang memakai perbandingan 1/3 espresso, 1/3 steamed milk, dan 1/3 susu foam. Biasanya disajikan dalam cangkir berkapasitas 88 mililiter hingga 177 mililiter.',
  },
];

const container = document.querySelector('#content');
let HTMLcontainer = '';
data.forEach((kopi) => {
  HTMLcontainer += `
    <article id="macam-kopi" class="card">
          <h2>${kopi.judul}</h2>
          <img src="${kopi.gambar}" class="featured-image" alt="${kopi.judul}-gambar" />
          <p>
            ${kopi.deskripsi}
          </p>
        </article>`;
  return HTMLcontainer;
});

container.innerHTML = HTMLcontainer;
