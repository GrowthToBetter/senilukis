export type MateriItem = {
  cover: string;
  judul: string;
  id: number;
  isi?: string;
  child?: { judul: string; isi: string }[];
};

export type Question = {
  id: string;
  question: string;
  img?: string;
  choices: { id: string; text: string }[];
  correctAnswerId: string;
};

export const Question: Question[] = [
  {
    id: "1",
    question: "lukisan siapakah ini ?",
    choices: [
      {
        id: "A",
        text: "Pablo Picasso",
      },
      {
        id: "B",
        text: "Vincent van Gogh",
      },
      {
        id: "C",
        text: "Leonardo da Vinci",
      },
      {
        id: "D",
        text: "Claude Monet",
      },
    ],
    correctAnswerId: "C",
    img: "/lukisan.png",
  },
  {
    id: "2",
    question: "apa yang dimaksud dengan seni rupa 2 dimensi ?",
    choices: [
      {
        id: "A",
        text: "Karya seni yang memiliki panjang, lebar, dan volume",
      },
      {
        id: "B",
        text: "Karya seni yang hanya memiliki panjang dan lebar",
      },
      {
        id: "C",
        text: " Karya seni yang hanya menggunakan warna hitam dan putih",
      },
      {
        id: "D",
        text: "Karya seni yang dibuat dengan bahan-bahan alami",
      },
    ],
    correctAnswerId: "B",
  },
  {
    id: "3",
    question: "Apa fungsi utama dari garis dalam seni rupa?",
    choices: [
      {
        id: "A",
        text: "Untuk menciptakan tekstur",
      },
      {
        id: "B",
        text: "Untuk menentukan bentuk dan arah",
      },
      {
        id: "C",
        text: "Untuk memberikan efek bayangan",
      },
      {
        id: "D",
        text: " Untuk membuat karya terlihat realistis",
      },
    ],
    correctAnswerId: "B",
  },
  {
    id: "4",
    question: "Apa yang dimaksud dengan seni rupa terapan?",
    choices: [
      {
        id: "A",
        text: "Seni yang berfungsi sebagai ekspresi pribadi",
      },
      {
        id: "B",
        text: "Seni yang dibuat untuk tujuan estetika saja",
      },
      {
        id: "C",
        text: "Seni yang memiliki fungsi praktis dalam kehidupan sehari-hari",
      },
      {
        id: "D",
        text: "Seni yang hanya menggunakan bahan daur ulang",
      },
    ],
    correctAnswerId: "C",
  },
  {
    id: "5",
    question: "Teknik melukis yang menggunakan sapuan kuas tebal dan tekstur khas dikenal dengan nama apa?",
    choices: [
      {
        id: "A",
        text: " Teknik pointillism",
      },
      {
        id: "B",
        text: " Teknik Impasta",
      },
      {
        id: "C",
        text: " Teknik Gradasi",
      },
      {
        id: "D",
        text: " Teknik Aquarel",
      },
    ],
    correctAnswerId: "B",
  },
];
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
        isi: "“Aliran yang bertujuan untuk merepresentasikan alam sesuai dengan keadaannya yang sebenarnya”",
      },
      {
        judul: "Surealisme",
        isi: "“Aliran yang berkaitan erat dengan dunia fantasi sehingga seolah-olah pelukis sedang melukis dalam mimpi”",
      },
      {
        judul: "Pointilisme",
        isi: "“Aliran yang memanipulasi ketidaksensitifan mata dalam meneliti detail kumpulan titik”",
      },
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
