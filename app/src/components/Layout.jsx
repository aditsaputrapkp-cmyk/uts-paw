import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
    return (
        <div className="kerangka">
            <header className="kepala">
                <div className="kepala-isi">
                    <p className="merek">Koleksi Tanaman Hias</p>
                    <nav className="menu">
                        <NavLink to="/" end>Beranda</NavLink>
                        <NavLink to="/koleksi">Koleksi</NavLink>
                        <NavLink to="/tambah">Tambah</NavLink>
                        <NavLink to="/statistik">Statistik</NavLink>
                        <NavLink to="/tentang">Tentang</NavLink>
                    </nav>
                </div>
            </header>
            <main className="konten">     
                <Outlet />
            </main>
            <footer className="kaki">
                <p>Ujian Tengah Semester Pengembangan Aplikasi Web</p>
            </footer>
        </div>
    )
}

export default Layout
