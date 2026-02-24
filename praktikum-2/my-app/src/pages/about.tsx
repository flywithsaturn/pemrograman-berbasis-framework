import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Nama Mahasiswa: Satrio Wisnu Adi Pratama</p>
      <p>NIM: 2341720219</p>
      <p>Program Studi: D4 Teknik Informatika</p>

      <hr />

      <Link href="/">Kembali ke Halaman Utama</Link>
    </div>
  );
}
