// O MAP é usado para mostrar LISTAS de coisas
// É como um "loop" que cria um elemento para cada item da lista
// Para cada fruta na lista, cria um <p>
// KEY é OBRIGATÓRIO! Ajuda o React a identificar cada item

export default function ComponenteComMap() {

  const Cars = ["Toyota-Supra", "Porche", "Ferrari", "BMW", "Lemborgini"]
  
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
      <h2 className="text-xl font-semibold">Super Car Lists:</h2>

      {Cars.map((Car, i) => (
        <p key={i}>{Car}</p>
      ))}

      <p className="text-sm mt-2">Total: {Cars.length} Super Cars</p>
    </div>
  )
}

// COMO USAR no index.js:
// <ComponenteComMap />