import mahasiswa from '../../mahasiswa.json'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/USERNAME/uts-paw'

export default function Tentang() {
    const { nama, nim, kelas, tema } = mahasiswa
    return (
        <section>
            <h1>Tentang</h1>
            <dl>
                <dt>Nama</dt>
                <dd>{'Adit Saputra'}</dd>
                <dt>NIM</dt>
                <dd>{'124140078'}</dd>
                <dt>Kelas</dt>
                <dd>{'RA'}</dd>
                <dt>Tema</dt>
                <dd>{'Koleksi Tanaman Hias'}</dd>
            </dl>
            <p>
                Kode sumber: <a href={'https://github.com/aditsaputrapkp-cmyk/uts-paw.git'}>{'https://github.com/aditsaputrapkp-cmyk/uts-paw.git'}</a>
            </p>
        </section>
    )
}
