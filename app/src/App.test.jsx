import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test, vi } from 'vitest'
import App from './App.jsx'
import data from '../public/data/koleksi.json'

vi.stubGlobal('fetch', async () => ({ ok: true, json: async () => data }))

function buka(alamat) {
    render(
        <MemoryRouter initialEntries={[alamat]}>
            <App />
        </MemoryRouter>,
    )
}

test('alamat salah menampilkan 404', () => {
    buka('/abc')
    expect(screen.getByText('404')).toBeInTheDocument()
})

test('halaman tentang tampil', () => {
    buka('/tentang')
    expect(screen.getByRole('heading', { name: 'Tentang' })).toBeInTheDocument()
})

test('halaman koleksi menampilkan tanaman', async () => {
    buka('/koleksi')
    expect(await screen.findByText(data[0].judul)).toBeInTheDocument()
})

test('id salah menampilkan tidak ditemukan', async () => {
    buka('/koleksi/999')
    expect(await screen.findByText(/tidak ditemukan/i)).toBeInTheDocument()
})

test('judul kosong menampilkan pesan error', () => {
    buka('/tambah')
    fireEvent.click(screen.getByText('Simpan'))
    expect(screen.getByRole('alert')).toBeInTheDocument()
})