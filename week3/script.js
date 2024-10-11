// Data Mahasiswa
const dataMahasiswa = [
    {
        id: 1,
        nama: "Chie Gremoryyy",
        tanggalLahir: "2003-05-20",
        fakultas: "Fakultas Ilmu Komputer",
        programStudi: "Teknik Informatika",
        semester: 5,
        nilai: {
            algoritma: 85,
            basisData: 88,
            pemrogramanWeb: 90,
        },
        aktif: true,
        organisasi: ["Himpunan Mahasiswa Teknik", "Komunikasi Pemrograman", "DNCC", "Udinus Esport"],
    },
    {
        id: 2,
        nama: "Ardella Tasya Nismona",
        tanggalLahir: "2003-06-15",
        fakultas: "Fakultas Ekonomi Bisnis",
        programStudi: "Manajemen",
        semester: 4,
        nilai: {
            manajemenKeuangan: 92,
            akutansi: 87,
            pemasaran: 95,
        },
        aktif: true,
        organisasi: ["Koperasi Mahasiswa"],
    },
    {
        id: 3,
        nama: "Rudi Hartono",
        tanggalLahir: "1998-12-01",
        fakultas: "Fakultas Teknik",
        programStudi: "Teknik Elektro",
        semester: 8,
        nilai: {
            mekanikaTanah: 85,
            strukturBangunan: 89,
        },
        aktif: false,
        organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
    },
];

// Masukin data json ke variable. 1 array ad 3 object
const mhs = dataMahasiswa;

// Coba ambil 1 object dari array
const mhs_pertama = mhs[0];
console.log(mhs[1])

// Konsep Destruktif, ambil beberapa key dari object
// const nama = mhs_pertama.nama;
// const fakultas = mhs_pertama.fakultas;
const { nama, fakultas, organisasi, tanggalLahir, aktif } = mhs_pertama;
console.log(nama, fakultas, organisasi);

// Destructuring dari array
const [orgPertama, orgKedua, ...orgLainnya] = organisasi;
console.log(orgPertama, orgKedua, orgLainnya);

// Spread Operator
const newOrganisasi = [...organisasi, "Futsal"];
console.log(newOrganisasi)

// Split string, buat function
// Function Oldstyle no Jutsu
function getYear2(str) {
    str.split("-")[0];
}
console.log(tanggalLahir.split("-")[0]);

// Function Newstyle
const getYear = (str) => str.split("-")[0];
console.log(getYear(tanggalLahir))

// Conditional
// Hanya bisa mengenal 2 kondisi saja
const statusMhs = aktif ? "Masih aktif bosku!" : "Udah Afk bosku!";
console.log(statusMhs);

// Old Style 
console.log("Nama: " +nama);

// ES6 Style
console.log(`Nama: ${nama}, Lahirnya ${tanggalLahir}`);

// Array Map
const namaAllMahasiswa = mhs.map((mahasiswa) => mahasiswa.nama);
console.log(namaAllMahasiswa);

// Filtering tampilkan semua mahasiswa yang aktif
const mhsAllAktif = mhs.filter((mahasiswa) => mahasiswa.aktif);
console.log(mhsAllAktif);

// Filtering tampilkan semua mahasiswa yang aktif dan dari Fakultas Ilmu Komputer (hanya tampil nama dan prodi      )
const mahasiswaAktifFakultasIlkom = dataMahasiswa
    .filter(mahasiswa => mahasiswa.aktif && mahasiswa.fakultas === "Fakultas Ilmu Komputer")
    .map(mahasiswa => ({
        nama: mahasiswa.nama,
        programStudi: mahasiswa.programStudi
    }));

console.log("Nama dan Program Studi Mahasiswa Aktif dari Fakultas Ilmu Komputer:", mahasiswaAktifFakultasIlkom);

// Sorting, mengurutkan berdasarkan banyaknya semester
const sortBySemester = mhs.slice().sort((a,b) => a.semester - b.semester);
console.log(sortBySemester);

// Total Nilai All Mahasiswa
const totalNilaiMahasiswa = dataMahasiswa.reduce((sum, mhs) => {
    const totalNilai = Object.values(mhs.nilai).reduce((acc, nilai) => acc + nilai, 0);
    return sum + totalNilai;
}, 0);
console.log(totalNilaiMahasiswa);

// Update Mahasiswa pada field fakultas dan semester
const updatedMahasiswa = { ...mhs_pertama, fakultas: "Fakultas Kedokteran", semester: 7 };
console.log("Updated Mahasiswa:", updatedMahasiswa);

// Create New Mahasiswa
const newMahasiswa = {
    id: 4,
    nama: "Mikasa Ackerman",
    tanggalLahir: "2000-10-05",
    fakultas: "Fakultas Ilmu Komputer",
    programStudi: "Ilmu Komunikasi",
    semester: 2,
    nilai: {
        dasarKomunikasi: 82,
        kalkulus: 90,
        pemrogramanWeb: 87,
    },
    aktif: true,
    organisasi: ["Himpunan Mahasiswa Jawa", "Udinus Esport"],
}
const dataMahasiswaUpdated = [ ...dataMahasiswa, newMahasiswa];
console.log(dataMahasiswaUpdated);

// Delete Mahasiswa
const dataMahasiswaAfterDelete = dataMahasiswaUpdated.filter((mhs) => mhs.id !== 3);
console.log(dataMahasiswaAfterDelete);

// Update Mahasiswa 
const dataMahasiswaAfterUpdated = dataMahasiswaAfterDelete.map((mhs) => mhs.id === 1? { ...mhs, semester: 7 } : mhs);
console.log(dataMahasiswaAfterUpdated);