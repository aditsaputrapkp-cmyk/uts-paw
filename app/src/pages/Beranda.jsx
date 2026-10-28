import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import KotakRingkasan from '../components/KotakRingkasan.jsx'
import mahasiswa from '../../mahasiswa.json'

function Beranda() {
    const { items, loading } = useKoleksi()
    const jumlahKategori = new Set(items.map((i) => i.kategori)).size

    return (
        <section className="sorotan">
            <h1>{mahasiswa.tema}</h1>
            <p className="tema">Tema : Koleksi Tanaman Hias.</p>
            {loading ? (
                <p>Memuat ringkasan...</p>
            ) : (
                <KotakRingkasan jumlah={items.length} kategori={jumlahKategori} />
            )}
            <Link className="tombol" to="/koleksi">
                Lihat koleksi
            </Link>
        </section>
    )
}

export default Beranda
