// ========================================
// Student Data Processor
// Nama   : Ahmad Fauzan
// Kelas  : XI Rombel 1
// ========================================

const studentName = "  uSmAN nAhDyY  ";
const ageText = "15 tahun";
const scoreText = "85.555";
const registrationText = "21-08-2026";

// Cleaning nama: rapikan spasi dan ubah setiap kata menjadi Title Case.
const nameWords = studentName.trim().toLowerCase().split(" ");
const cleanName = nameWords
	.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
	.join(" ");
const username = cleanName.toLowerCase().split(" ").join(".");

// Analisis string nama.
const containsAhmad = cleanName.includes("Ahmad");
const firstFiveChars = cleanName.slice(0, 5);
const replacementName = cleanName.replace("Usman Nahdyy", "Budi Fauzan");

// Konversi umur dan hitung tahun lahir secara dinamis. 
const age = parseInt(ageText);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

// Konversi, format, dan pembulatan nilai.
const score = parseFloat(scoreText);
const formattedScore = score.toFixed(2);
const roundedScore = Math.round(score);
const flooredScore = Math.floor(score);
const ceiledScore = Math.ceil(score);

let grade;
if (score >= 90 && score <= 100) {
	grade = "A";
} else if (score >= 80) {
	grade = "B";
} else if (score >= 70) {
	grade = "C";
} else if (score >= 60) {
	grade = "D";
} else {
	grade = "E";
}

// Pecah tanggal registrasi lalu ubah setiap bagian menjadi Number.
const registrationParts = registrationText.split("-");
const registrationDate = {
	day: Number(registrationParts[0]),
	month: Number(registrationParts[1]),
	year: Number(registrationParts[2])
};

function formatDate(date) {
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = String(date.getFullYear());
	return `${day}/${month}/${year}`;
}

const now = new Date();
const currentDate = formatDate(now);
const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const currentDay = dayNames[now.getDay()];
const dice = Math.floor(Math.random() * 6) + 1;

let diceResult;
if (dice === 6) {
	diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
	diceResult = "💀 BAD LUCK!";
} else {
	diceResult = "😎 GOOD LUCK!";
}

const report = {
	name: cleanName,
	username,
	age,
	score,
	grade,
	registrationDate
};

console.log("===================== HASIL NYA ====================");


console.log("# STUDENT");
console.log("====================================");
console.log(`Original Name : "${studentName}"`);
console.log(`Clean Name    : ${report.name}`);
console.log(`Username      : ${report.username}`);

console.log("# NAME ANALYSIS");
console.log("=====================================");
console.log(`Contains Ahmad : ${containsAhmad}`);
console.log(`First 5 chars  : ${firstFiveChars}`);
console.log(`Replacement    : ${replacementName}`);

console.log("# AGE");
console.log("======================================");
console.log(`Age Text       : ${ageText}`);
console.log(`Age            : ${report.age}`);
console.log(`Birth Year     : ${birthYear}`);

console.log("# SCORE");
console.log("=====================================");
console.log(`Original Score : ${scoreText}`);
console.log(`Score          : ${report.score}`);
console.log(`Formatted      : ${formattedScore}`);
console.log(`Round          : ${roundedScore}`);
console.log(`Floor          : ${flooredScore}`);
console.log(`Ceil           : ${ceiledScore}`);
console.log(`Grade          : ${report.grade}`);

console.log("# REGISTRATION");
console.log("=======================================");
console.log(`Day            : ${String(report.registrationDate.day).padStart(2, "0")}`);
console.log(`Month          : ${report.registrationDate.month}`);
console.log(`Year           : ${report.registrationDate.year}`);
console.log(`Date           : ${String(report.registrationDate.day).padStart(2, "0")}${String(report.registrationDate.month).padStart(2, "0")}${report.registrationDate.year}`);

console.log("# REPORT GENERATED");
console.log("=======================================");
console.log(`Date           : ${currentDate}`);
console.log(`Time           : ${currentTime}`);
console.log(`Day            : ${currentDay}`);

console.log("# LUCKY DICE");
console.log("=======================================");
console.log(`Dice           : ${dice}`);
console.log(`Result         : ${diceResult}`);

console.log("# BONUS");
console.log("=======================================");
console.log(`Name Characters: ${cleanName.length}`);
console.log(`Status         : ${score >= 75 ? "LULUS" : "BELUM LULUS"}`);


console.log(" ================= SELESAI ======================");

