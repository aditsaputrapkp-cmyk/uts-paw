import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
    const { id } = useParams()
    const item = items.find((i) => String(i.id) === id)

    if (loading) return <p>Memuat data...</p>
    if (!item) {
        return (
            <section>
                <h1>Item tidak ditemukan</h1>
                <Link to="/koleksi">Kembali ke koleksi</Link>
            </section>
        )
    }
        

    return (
        <section>
            <h1>{item.judul}</h1>
            <dl>
                <dt>Kategori</dt>
                <dd>{item.kategori}</dd>
                <dt>Nama Latin</dt>
                <dd>{item.namaLatin}</dd>
                <dt>Frekuensi Siram</dt>
                <dd>{item.frekuensiSiram}</dd>
                <dt>Kebutuhan Cahaya</dt>
                <dd>{item.kebutuhanCahaya}</dd>
            </dl>
                <Link to="/koleksi">Kembali</Link>
        </section>
    )
}
