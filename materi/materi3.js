console.log("==================================");
console.log("MATERI 3 PEKAN KE 2 JAVA SCRIPT");
console.log("==================================");

// string manipulation
const namaSultan = 'Sri Sultan Hamengku Buwono X';
const namaKecil = namaSultan.toLowerCase();
const namaBesar = namaSultan.toLowerCase();
console.log({namaSultan});
console.log({namaKecil, namaBesar});

const gelar = namaSultan.slice(11, 19);     //  (index awal , index akhir)
console.log({ gelar });

const nomorGelar = namaSultan.replace("X", "XII"); // target, timpaan
console.log({gelar, nomorGelar}); 

const cekSultan = namaSultan.includes('sultan');
if (cekSultan) {
    console.log('>> Nama sultan valid')
} else {
    console.log('>> Tidak di temukan nama sultan')
}

// number manipulation 
const hartaSultan = '350000'
const konversiHarta = Number(hartaSultan);
console.log({hartaSultan, konversiHarta});
const utangSultan = '25000.00' ;   // string desimal
const konversiUtang = Number(utangSultan);
const konversiUtangDuaKoma = konversiUtang.toFixed(2); // jadi string
console.log({konversiUtang, konversiUtangDuaKoma});
// math function untuk perhitungan angka
// round(), floor(), ceil()
const konversiUtangPembulatan = Math.round(konversiUtang);
console.log({konversiUtangPembulatan});
// data manipulation 
const saiki = new Date();
console.log({ saiki });
const tahunIni = saiki.getFullYear();
const bulanIni = saiki.getMonth();
const tanggalIni = saiki.getDate();
const hariIni = saiki.getDay();
console.log({ hariIni, tanggalIni, bulanIni,tahunIni});
const namaHariIndo = ['ahad', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
const hariIndo = namaHariIndo[hariIni];
console.log({ hariIndo });
