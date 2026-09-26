// DAY 2 MATERI : PERBANDINGAN, OBJECT DAN ARRAY. 


//  BELUM PAHAM HARUS BNYK BELAJAR LAGI !.... 
// PERBANDINGAN
const umurUjang = 19;      // number
const umurAsep = "20";     // string

const cekUmur = umurUjang == umurAsep;

console.log({ cekUmur });

if (cekUmur) {
    console.log('umur ujang dan umur asep samaan');
} else {
    console.log('umur nya beda');
}


// > : lebih dari, < : kurang, != : tidak sama dengan
const umurSumanto = 23; // integer
if (umurSumanto > umurUjang) {
    console.log('Sumanto tuaan yak..'); 
} else {
    console.log('Sumanto masih mudaan lur...'); 
}

// tidak sama dengan != dan !== berbeda
const umurCahyono = "23"; // string
if (umurSumanto !== umurCahyono) {
    console.log("Umur mereka beda...")
} else {
    console.log("Umur mereka samaan...")
}






// ARRAY ; list data dalam 1 variabel, di mulai dari 0 
const daftarKereta = ['bengawan', 'prameks', 'argo', 'fajar utama yk', 'logawa', 'sinkanen'];
console.log(daftarKereta); // menampilkan semua isi array
console.log(daftarKereta[0]);
console.log(daftarKereta[1]);
console.log(daftarKereta[2]);
console.log(daftarKereta[3]);
console.log(daftarKereta[4]);
console.log(daftarKereta[5]);
console.log('----------------------------------')

// looping atau perulangan => for ... 
for(let i = 0; i <=5; i++) {
    console.log( `hello manz lu keren ke-${i}`);
}

console.log('-------------di balik---------------------')

// di balik
for(let i = 5; i >=0; i--) {
    console.log( `gw keren ke-${i}`);
} 

// praktek 
for(let i = 0; i <=3; i++) {
    console.log( `paham ga!..${i}`);
}

console.log('----------------------------------')
// cek jumlah data dengan .`length` bawaan array

const jumlahKereta = daftarKereta.length;
console.log({ jumlahKereta });
for (let i = 0; i < jumlahKereta; i++) {
    const namaKereta = daftarKereta[i];
    console.log(`kereta ${namaKereta}`);
}

// OBJECT
const profilSantri = {
    nama : "utsman annahdyy",
    umur : 15,
    status : true,
    asrama:"ibnu qoyyim",
    tb: 170,
    bb: 58,
    alamat:{     // ini bisa di sambung juga (di jadiin tangga.)
        detail: "Blok Karang Dogolan, Gebang Ilir village, Cirebon Regency, West Java, Indonesia.",
    }
};

// Print: 
console.log(profilSantri);
console.log('INFO SANTRI:');
console.log('======================');
console.log(`Nama Lengakap: ${profilSantri.nama}`);
console.log(`Umur: ${profilSantri.umur}`);
console.log(`Status: ${profilSantri.status}`);
console.log(`asrama: ${profilSantri.asrama}`);
console.log(`Tinggi Badan: ${profilSantri.tb}`);
console.log(`Berat Badan: ${profilSantri.bb}`);
console.log(`Alamat: ${profilSantri.alamat.detail}`);


// DATE = fitur object pengelolaan waktu 
const tanggalBaru = new Date();
console.log({tanggalBaru});
console.log({tanggalBaru});
console.log({tanggalBaru});  // belum selesai 
