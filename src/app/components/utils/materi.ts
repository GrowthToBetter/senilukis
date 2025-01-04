export type MateriItem = {
    cover: string;
    judul: string;
    id: number;
    isi?: string;
    child?: { judul: string; isi: string }[];
  };
export const MateriData: MateriItem[] = [
    {
      cover: "/bg4.png",
      judul: "Apa Itu Seni Lukis ?",
      id: 1,
      isi: '"Seni lukis adalah cabang seni rupa yang menggunakan medium dua dimensi untuk menciptakan karya. Lukisan dapat menjadi alat untuk menyampaikan perasaan, ide, atau keindahan."',
    },
    {
      cover: "/bg5.png",
      judul: "Teknik Melukis",
      id: 4,
      child: [
        {
          judul: "Teknik Aquarel",
          isi: '"Teknik melukis menggunakan cat air dengan sapuan warna yang tipis dan transparan sehingga hasilnya tembus pandang"',
        },
        {
          judul: "Teknik plakat",
          isi: '"Teknik melukis menggunakan cat akrilik, cat air, dan cat minyak dengan sapuan warna yang tebal atau kental sehingga hasilnya tampak gelap atau menutupi"',
        },
        {
          judul: "Teknik tempera",
          isi: '"Teknik melukis dengan mencampur kuning telur dalam cat sebagai bahan perekat. Teknik ini biasanya diterapkan pada media kanvas, kayu, dan tembok"',
        },
        {
          judul: "Teknik pointilis",
          isi: '"Teknik melukis yang menerapkan titik-titik berbeda dalam suatu pola untuk membentuk suatu gambar"',
        },
        {
          judul: "Teknik goresan ekspresif",
          isi: '"Teknik melukis yang terkesan bebas karena pembuatannya bisa menggunakan alat berupa jari, tangan, kuas, ataupun objek lain"',
        },
        {
          judul: "Teknik mozaik",
          isi: '"Teknik melukis yang menggunakan material atau bahan dari kepingan-kepingan yang sengaja dibuat dengan cara dipotong-potong"',
        },
        {
          judul: "Teknik batik",
          isi: '"Teknik melukis yang hampir sama dengan tata cara membatik, yaitu dengan menutupi permukaan kain dengan lilin atau malam batik"',
        },
        {
          judul: "Teknik mural",
          isi: '"Teknik melukis di tembok yang seringkali digunakan sebagai penghias eksterior"',
        },
        {
            judul: "Realisme",
            isi:'“Aliran yang bertujuan untuk merepresentasikan alam sesuai dengan keadaannya yang sebenarnya”'
        },
        {
            judul: "Surealisme",
            isi:'“Aliran yang berkaitan erat dengan dunia fantasi sehingga seolah-olah pelukis sedang melukis dalam mimpi”'
        },
        {
            judul: "Pointilisme",
            isi:'“Aliran yang memanipulasi ketidaksensitifan mata dalam meneliti detail kumpulan titik”'
        }
      ],
    },
    {
      cover: "/bg6.png",
      judul: "Genre Dalam Melukis",
      id: 2,
      isi: '"Seni lukis memiliki berbagai genre, seperti potret, pemandangan, still life, dan abstrak. Setiap genre memberikan pengalaman visual yang berbeda."',
    },
    {
      cover: "/bg6.png",
      id: 3,
      judul: "pelukis Terkenal",
      isi: '"Beberapa pelukis terkenal yang mendunia antara lain Leonardo da Vinci dengan Mona Lisa, Vincent van Gogh dengan Starry Night, dan Affandi dengan gaya ekspresifnya."',
    },
  ] as const;