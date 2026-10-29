export default function PesanTidakAda({ pesan = "Walawe!!, Koleksi yang anda cari tidak ketemu nih! :v" })
{
  return (
    <div role="status">
      <p>{pesan}</p>
    </div>
  )
}