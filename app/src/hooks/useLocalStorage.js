import { useState, useEffect } from 'react'

function useLocalStorage(kunci, nilaiAwal) {
  const [nilai, setNilai] = useState(() => {
    try {
      const simpanan = localStorage.getItem(kunci)
      return simpanan === null ? nilaiAwal : JSON.parse(simpanan)
    } catch {
      return nilaiAwal
    }
  })

  useEffect(() => {
    if (nilai === null) {
      localStorage.removeItem(kunci)
      return
    }
    localStorage.setItem(kunci, JSON.stringify(nilai))
  }, [kunci, nilai])

  return [nilai, setNilai]
}

export default useLocalStorage
