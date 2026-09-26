console.log("==========================");
console.log("HSI STUDENT MANAGEMENT");
console.log("==========================");


// ==========================
// DATA SISWA
// ==========================

let students = [];

// Ambil data dari localStorage
const dataSiswa = localStorage.getItem("hsiStudents");

if (dataSiswa) {
  students = JSON.parse(dataSiswa);
}


// ==========================
// AMBIL ELEMENT HTML
// ==========================

const studentForm = document.getElementById("studentForm");
const studentName = document.getElementById("studentName");
const studentScore = document.getElementById("studentScore");
const studentList = document.getElementById("studentList");
const totalStudents = document.getElementById("totalStudents");
const averageScore = document.getElementById("averageScore");


// ==========================
// MENAMPILKAN DATA
// ==========================

function tampilkanSiswa() {

  studentList.innerHTML = "";

  if (students.length === 0) {
    studentList.innerHTML =
      '<div class="empty">📭 Belum ada data siswa.</div>';
  } else {

    for (let i = 0; i < students.length; i++) {

      const siswa = students[i];

      const div = document.createElement("div");

      div.className = "student-item";

      div.innerHTML = `
        <div class="student-name">
          <span class="student-number">${i + 1}.</span>
          ${siswa.nama}
        </div>

        <div class="score">
          ${siswa.score}
        </div>

        <button class="delete-btn" onclick="hapusSiswa(${i})">
          🗑️ Hapus
        </button>
      `;

      studentList.appendChild(div);
    }
  }

  hitungStatistik();
}


// ==========================
// TAMBAH SISWA
// ==========================

studentForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const nama = studentName.value;
  const score = Number(studentScore.value);

  const siswaBaru = {
    nama: nama,
    score: score
  };

  students.push(siswaBaru);

  // Simpan ke localStorage
  localStorage.setItem("hsiStudents", JSON.stringify(students));

  // Kosongkan form
  studentName.value = "";
  studentScore.value = "";

  tampilkanSiswa();
});


// ==========================
// HAPUS SISWA
// ==========================

function hapusSiswa(index) {

  students.splice(index, 1);

  localStorage.setItem(
    "hsiStudents",
    JSON.stringify(students)
  );

  tampilkanSiswa();
}


// ==========================
// HITUNG STATISTIK
// ==========================

function hitungStatistik() {

  totalStudents.textContent = students.length;

  if (students.length === 0) {
    averageScore.textContent = 0;
    return;
  }

  let totalNilai = 0;

  for (let i = 0; i < students.length; i++) {
    totalNilai = totalNilai + students[i].score;
  }

  const rataRata = totalNilai / students.length;

  averageScore.textContent = rataRata.toFixed(2);
}


// ==========================
// JALANKAN SAAT HALAMAN DIBUKA
// ==========================

tampilkanSiswa();