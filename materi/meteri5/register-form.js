console.log('>>>>>>> JS EVENT FORMS <<<<<<<<<<');
const nameInput = document.getElementById('nameInput');
const nameInfo = document.getElementById('nameInfo');
const previewName = document.getElementById('previewName');
const previewClass = document.getElementById('previewClass');
const previewStatus = document.getElementById('previewStatus');
const previewInterest = document.getElementById('previewInterest');
const previewReason = document.getElementById('previewReason');
const message = document.getElementById('message');

console.log(nameInput);
nameInput.addEventListener('input', function() {
    const name = nameInput.value; // ambil inputan user ketik
    console.log(`User menngiput nama: ${name}`);
    nameInfo.textContent = `👋🏻 Halo, ${name}!`;
    previewName.textContent = name;
});

const classSelect = document.getElementById('classSelect');
console.log(classSelect);
classSelect.addEventListener('change', function() {
    const className = classSelect.value;
    console.log(`User memilih kelas: ${className}`);
    previewClass.textContent = className;
});

const agreementCheckbox = document.getElementById('agreement');
console.log(agreementCheckbox);
agreementCheckbox.addEventListener('change', function() {
    const isChecked = agreementCheckbox.checked; // ambil status checknya
    console.log({ isChecked }); // boolean
    previewStatus.textContent = isChecked ? 'Siap' : 'Belum Siap';
});

// DOMContentloaded adalah event yang dijalankan setelah seluruh element HTML terload.
// Umumnya digunakan untuk me
document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to Coders Club!');
});

const reasonInput = document.getElementById('reasonInput');
console.log(reasonInput);
reasonInput.addEventListener('keydown', function(e) {
    console.log(`User menginput key: ${e.key}`);
    const reason = reasonInput.value;
    previewReason.textContent = reason;
    const characterCount = document.getElementById('characterCount');
    const totalCounter = reason.length;
    characterCount.textContent = totalCounter;
    // Logika perubahan warna indicator
    if (totalCounter >= 90) {
      characterCount.style.color = "red"; // Kritis (Sisa 10 karakter)
    } else if (totalCounter >= 70) {
      characterCount.style.color = "orange"; // Peringatan (Sisa 30 karakter)
    } else {
      characterCount.style.color = "inherit"; // Normal (Kembali ke warna asli bawaan CSS)
    }

});

const registrationForm = document.getElementById('registrationForm');
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
    registrationForm.reset(); 
    previewName.textContent = 'belum diisi';
    previewClass.textContent = 'belum di pilih';
    previewStatus.textContent = 'belum dipilih';
    previewInterest.textContent = 'belum ada alasan dipilih';
    previewReason.textContent = 'belum siap dikirim ';
    message.textContent = 'silahkan isi form pendaftaran';
});

registrationForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form submit secara default
    // konfirmasi sebelum submit
    const confirmation = confirm('Apakah Anda yakin ingin mengirimkan formulir ini?');
    if (!confirmation) {
        // Jika user menekan "OK", lakukan submit form  
        console.log('user name membatalkan submit!');
        return; // Hentikan eksekusi fungsi submit
    }
    // Jika user menekan "Cancel", lanjutkan proses submit
    console.log('user name setuju submit!');
}); 

console.log('form berhasil di load');
