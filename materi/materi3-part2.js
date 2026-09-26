console.log('===================================');
console.log(' MATERI 3 PART 2 - DATA PROCECING ');
console.log('===================================');
// ARRAY INI CONTOHYA ADA []
const skills = ['HTML', 'CSS', 'JavaSript','Python'];
console.log(skills);
// Push = nambah di item terakhir /  di belakang
// unshift = nambah di item pertama / di awal
skills.push('TailwindCSS');
skills.unshift('GitHub');
console.log(skills);
// pop = menghapus item terakhir
// shift = menghapus di item pertama / di awal
skills.pop(); // awal
skills.shift(); // akhir
console.log(skills);
// inclaudes = cek apakah item ada di ARRAY atau tidak 
const cekJs = skills.includes('JavaScript');
const cekReactJs = skills.includes('ReactJs');
console.log({cekJs,cekReactJs});
// .............
// mapping data dengan .map()
const dompetDigital = [1000000,750000,250000,5000000];
console.log(dompetDigital);
const kursUSD = 17672;
const dompetDollar = dompetDigital.map(
    duitRupiah => {
        const nilaiUSD = (duitRupiah / kursUSD).toFixed(2); 
        return `$ ${nilaiUSD}`;
    }
)
console.log(dompetDollar);

// masih salah harus di perbaiki
// filter 
// filter data dengan .filter()
const filterDuit = dompetDigital.filter(
    duitRupiah => duitRupiah > 1000000
);
console.log(filterDuit);

//Method Chaining di array = menggabungkan method-method yg sejenis 
const totalMurahUSD = dompetDigital.map(rupiah => rupiah / kursUSD)
.filter(usd => usd < 100)
.reduce((sum, usd) => sum + usd, 0 );
const totalBawah100Dollar = `$ ${totalMurahUSD.toFixed(2)}`;
console.log({totalBawah100Dollar});
