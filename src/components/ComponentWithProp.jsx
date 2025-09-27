// Uma PROP é como um "parâmetro" que podes passar para um componente
// O {nome} é a prop que este componente vai receber
// É como uma "variável" que vem de fora
// O {nome} vai ser substituído pelo valor que passares

export default function ComponenteComProp({ nome }) {
  return (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
      <h2 className="text-xl font-semibold">Olá, {nome}!</h2>
      <p>Este componente recebeu o nome como prop!</p>
    </div>
  )
}

// COMO USAR no index.js:
// <ComponenteComProp nome="João" />
// <ComponenteComProp nome="Maria" />