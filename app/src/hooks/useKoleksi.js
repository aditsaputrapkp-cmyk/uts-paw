import { useContext } from 'react'
import { KoleksiContext } from '../context/koleksiContext.js'

function useKoleksi() {
  const isi = useContext(KoleksiContext)
  if (!isi) {
    throw new Error('useKoleksi hanya boleh dipakai di dalam KoleksiProvider')
  }
  return isi
}

export default useKoleksi
