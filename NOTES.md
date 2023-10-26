Referensi Frontend

Pada dasarnya setiap Browser, Device, Os memiliki tampilan dan elemen awal yang berbeda
Maka dari itu ditemukannya lah Normalize.css dan Reset CSS 

Normalisasikan CSS
Normalisasikan . css adalah file CSS kecil yang memberikan konsistensi lintas-browser dalam gaya default elemen HTML.

Artinya, jika kita melihat standar W3C dari gaya yang diterapkan oleh browser, dan terdapat ketidakkonsistenan pada salah satu browser, maka gaya tersebut normalize.cssakan memperbaiki gaya browser yang memiliki perbedaan.

Namun dalam beberapa kasus kami tidak dapat memperbaiki browser yang rusak sesuai standar, biasanya karena IE atau EDGE. Dalam kasus ini, perbaikan pada Normalisasi akan menerapkan gaya IE atau EDGE ke browser lainnya.

Berikut contoh nyatanya : Chrome, Safari, dan Firefox merender <h1>tag yang berada di dalam tag <article>/ <aside>/ <nav>/ <section>dengan ukuran font yang lebih kecil dari <h1>tag independen, dan dengan ukuran margin berbeda. Ini adalah gaya agen pengguna di Chrome, Safari, dan Firefox jika ada <h1>tag di dalam tag <article>/ <aside>/ <nav>/ <section>:

:-webkit-any(artikel,selain,nav,bagian) h1 {
    ukuran font: 1,5em; 
   margin-blok-mulai: 0,83em; 
   margin-blok-akhir: 0,83em; 
}
Browser Internet Explorer dan EDGE termasuk dalam minoritas dengan gaya yang mereka terapkan dalam kasus ini, dan secara teoritis, masuk akal jika gaya yang ditentukan normalize.cssakan menargetkan IE / EDGE. Namun, tidak mungkin menargetkan IE / EDGE karena browser tersebut tidak memiliki pemilih “apa pun” . Oleh karena itu, agar normalisasi untuk menyetel ulang <h1>gaya berfungsi sama untuk semua browser, Normalisasi CSS mendefinisikan gaya IE / EDGE untuk diterapkan oleh semua browser.

Contoh:

/* 
  Perbaiki ukuran font dan margin pada elemen `h1` dalam konteks `bagian` dan `artikel` di Chrome, Firefox, dan Safari. 
*/ 
h1 { ukuran font: 2em; margin: 0,67em 0;}
Normalize.css adalah proyek open source yang terus diperbarui di Github, dibuat oleh Nicolas Gallagher .

necolas/normalisasi.css
Alternatif modern untuk penyetelan ulang CSS. Berkontribusi pada pengembangan necolas/normalize.css dengan membuat akun di GitHub.
github.com

Setel ulang CSS
Reset CSS mengambil pendekatan berbeda dan mengatakan bahwa kita tidak memerlukan gaya default browser sama sekali. Apapun gaya yang kita perlukan, kita akan tentukan dalam proyek sesuai dengan kebutuhan kita. Jadi “CSS Reset” mengatur ulang semua gaya yang disertakan dengan agen pengguna browser.

Pendekatan ini bekerja dengan baik pada contoh di atas, dengan <h1>gaya <h6>default: sering kali kita tidak menginginkan default browser font-sizemaupun default browser margin.

Ada beberapa jenis Reset CSS di web. Berikut ini contoh tampilan sebagian kecil dari Reset CSS (dari Reset CSS Eric Meyer ):

html, body, div, span, applet, obyek, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pra, a, abbr, akronim, alamat, besar, mengutip, kode, del, dfn, em, img, ins, kbd, q, s, samp, kecil, menyerang, kuat, sub, sup, tt, var, b, u, i, tengah, dl, dt, dd, ol, ul, li, fieldset, bentuk, label, legenda, meja, caption, tbody, tfoot, thead, tr, th, td, artikel, samping, kanvas, rincian, semat, angka, figcaption, footer, Header, hgroup, menu, nav, keluaran, rubi, bagian, ringkasan, waktu, tandai, audio, video {   
   margin: 0;  
   bantalan: 0;  
   batas: 0;  
   ukuran font: 100%;  
   font: mewarisi;  
   perataan vertikal: garis dasar; 
}
Dengan cara Reset CSS, kami mendefinisikan semua tag HTML tidak memiliki padding, tanpa margin, tanpa batas, ukuran font yang sama, dan perataan yang sama.

Masalah dengan Penyetelan Ulang CSS adalah bahwa penyetelan ulang tersebut jelek: penyeleksinya sangat banyak, dan banyak penggantian yang tidak diperlukan. Dan yang lebih buruk lagi, mereka tidak dapat dibaca saat melakukan debug.


Penyetelan ulang CSS — rangkaian penyeleksi CSS yang jelek
Namun masih ada gaya yang ingin kami atur ulang seperti <h1>to <h6>, <ul>, <li>dan lain-lain.

Cara bekerja sama secara damai, baik dengan Normalisasi CSS & Reset CSS
Saran saya kepada Anda adalah menggunakan Normalisasi CSS dengan sedikit Reset CSS. Gunakan keduanya, tapi dengan bijak!

Dalam proyek saya, saya memasukkan manfaat dari masing-masing metode. Di satu sisi, saya menginginkan manfaat dari Normalize CSS , sementara di sisi lain saya menginginkan manfaat dari Reset CSS tanpa rangkaian besar penyeleksi CSS yang jelek itu.

Membuat Reset CSS Anda Sendiri
Dalam pengalaman saya selama 13 tahun, saya belajar bahwa ada tag HTML yang selalu ingin Anda atur ulang. Misalnya warna tautan, gaya default tombol, default daftar, dll.

disampingnormalize.cssyang saya gunakan, saya tambahkan areset.local.cssdengan semua gaya yang ingin saya timpa. Berbeda dengan biasanyapenyetelan ulang CSS, Saya hanya menargetkan gaya tag HTML tertentu daripada membuat daftar tag yang banyak.

Berikut contoh cara membuat Reset CSS sendiri :

Reset CSS Saya— reset.local.css

/****** Elad Shechter's RESET *******/ 
/*** ukuran kotak kotak batas untuk semua elemen ***/ 
*, 
*::sebelum, 
*::setelah{ ukuran kotak: kotak perbatasan; }
a {dekorasi teks: tidak ada; warna:mewarisi; kursor:penunjuk;} 
tombol {warna latar:transparan; warna:mewarisi; lebar batas:0; bantalan:0; kursor:pointer;} 
gambar {margin:0;} 
input::-moz-focus-inner {border:0; bantalan:0; margin:0;} 
ul, ol, hh {margin:0; bantalan:0; gaya daftar:tidak ada;} 
h1, h2, h3, h4, h5, h6 {margin:0; ukuran font:mewarisi; font-weight:inherit;} 
p {margin:0;} 
cite {font-style:normal;} 
fieldset {border-width:0; bantalan:0; margin:0;}
Dengan cara ini pengaturan ulang CSS menjadi tidak terlalu agresif dan lebih mudah dibaca dalam segala hal.

Tipografi Dasar
Selain normalize.cssdan local.reset.cssyang saya miliki di semua proyek saya, saya menambahkan file lain untuk tipografi dasar. File ini bukan bagian dari normalisasi CSS atau reset CSS , ini adalah lembar gaya dasar dengan tipografi situs web, berisi properti seperti direction,,,, warna font.font-familyfont-sizeline-height

tipografi.css
html{ 
   ukuran font: 1px;/*untuk menggunakan unit REM*/ 
}
body{ 
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
   ukuran font: 16rem; 
   berat font: 400; 
   tinggi garis: 1,3; 
   warna: #222; 
}
Menyatukan Semuanya
Memanfaatkan manfaat pra-prosesor SASS, saya memiliki _reset.scssfile yang mencakup semua bagian ini:

Normalize.css — versi terbaru CSS Normalisasi dari GitHub .
Reset CSS saya sendiri
File Tipografi Dasar
Contoh (file _resets.scss):

@import "reset/normalisasi.scss"; 
@import "reset/reset.local.scss"; 
@import "reset/typography.scss";





Sumber informasi :
https://youtu.be/UIeQaKh_JdA?si=Fsd731YBKkOVru9-
https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css
https://elad.medium.com/normalize-css-or-css-reset-9d75175c5d1e