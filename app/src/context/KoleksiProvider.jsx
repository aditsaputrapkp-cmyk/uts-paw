import { useState, useEffect } from "react";
import { KoleksiContext } from "./koleksiContext.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

export function KoleksiProvider({ children }) {
  const [items, setItems] = useLocalStorage("uts-paw-koleksi", null);
  const [loading, setLoading] = useState(items === null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // data sudah ada di localStorage, tidak perlu fetch
    if (items !== null) return;

    async function muatData() {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}data/koleksi.json`);
        if (!res.ok) {
          throw new Error(`Data gagal dimuat (status ${res.status})`);
        }
        setItems(await res.json());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    muatData();
  }, [items, setItems]);

  function tambah(itemBaru) {
    const dengan = { ...itemBaru, id: String(Date.now()) };
    setItems((lama) => [...(lama ?? []), dengan]);
  }

  function hapus(id) {
    setItems((lama) => (lama ?? []).filter((i) => String(i.id) !== String(id)));
  }

  const value = { items: items ?? [], loading, error, tambah, hapus };

  return (
    <KoleksiContext.Provider value={value}>{children}</KoleksiContext.Provider>
  );
}
