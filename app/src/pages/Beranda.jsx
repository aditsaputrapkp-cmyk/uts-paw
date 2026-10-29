import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
    const { items, loading } = useKoleksi()
    const jumlahKategori = new Set(items.map((item) => item.kategori)).size

    return (
        <section>
            <h1>"Koleksi Tanaman Hias" Bukan Sekedar Koleksi Belaka</h1>
            <p>Tema: {mahasiswa.tema}</p>
            {loading ? (
                <p>Memuat ringkasan...</p>
            ) : (           
                <p>Ada {items.length} tanaman dalam {jumlahKategori} kategori</p>
            )}
            <p>
                <Link to="/koleksi">Lihat semua tanaman</Link>
            </p>
        </section>
    )
}
