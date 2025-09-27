// Podes receber VÁRIAS props ao mesmo tempo
// Cada prop é como uma "variável" diferente
// Aqui recebemos 4 props: titulo, cor, nome e idade

export default function ComponentsWithManyProps({ titulo, cor, nome, Career }) {
  return (
    <div className={`bg-${cor}-100 border border-${cor}-400 text-${cor}-700 px-4 py-3 rounded mb-4`}>
      <h2 className="text-xl font-semibold">{titulo}</h2>
      <p>Nome: {nome}</p>
      <p>Career: {Career} </p>
      <p>Hi there, I'm a Software Engineer who loves to create sustainable apps that helps the world.</p>
    </div>
  )
}

// COMO USAR no index.js:
// <ComponenteComVariasProps titulo="Perfil do Utilizador" cor="blue" nome="Maria Neto" idade={25} />