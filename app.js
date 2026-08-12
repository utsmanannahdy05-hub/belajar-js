console.log("bismillah, belajar java script")
console.log(" ")
console.log("-------------------------------")
//membuat komentar
// setiap deklarasi wajib pake titik koma ;

let namaStasiun ="st.kutoarjo";    // string 
let nomorGerbong = 4;              //integer atau number
let nomorKeberangkatan = false;    // boolean

console.log(namaStasiun); // print valus nya     //debug variable nya jdi object
console.log({ nomorGerbong, nomorKeberangkatan });

// var => mutable = boleh di ubah - versi jadul
// let => mutable = boleh di ubah
// const => immutable = gk boleh di ubah


// perbedaan const dan let 
const jumlahKursi = 100;
nomorGerbong = 6; // nomor gerbang nya di ganti
console.log({nomorGerbong, jumlahKursi});

// TEMPLATE LITERAL = cara ngeformat string , ini yg ribet pake (plus +)
const infoKereta = 'stasiun'+' ' + namaStasiun + ' '  + nomorGerbong;
console.log(infoKereta);


// versi lebih clean pake beacktick $ `
`const infoKereta =
       stasiun: ${namaStasiun}
       nomor gerbang:${nomorGerbong}
       `
;
console.log(infoKereta);

let nilaiA =10;
let nilaiB =5;
const formulaX =nilaiA + nilaiB; // "10" + 5 = 15
console.log =({nilaiA, nilaiB, formulaX})
nilaiA = "15" // string
const formulaZ = nilaiB 






// typeof = pengecekan type data
const checkNilai = typeof nilaiA;
console.log({checkNilai});
if (checkNilai === 'number'){
       console.log({ checkNilai })

}