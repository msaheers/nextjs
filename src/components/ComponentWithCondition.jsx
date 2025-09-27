// Em react o if else é feito a partir do ternário ou com && para mostrar algo apenas se for verdadeiro
// OPERADOR TERNÁRIO: condição ? seVerdadeiro : seFalso

export default function ComponenteWithCondition() {
  let estaLogado = true;
  let nomeUtilizador = "";
  let acessoCompleto = true;

  return (
    <div className="bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 rounded mb-4">
      <h2 className="text-xl font-semibold">Hey Y'all 🙋‍♂️</h2>
      
      {/* estaLogado é TRUE? Se sim: "Bem-vinda, {nomeUtilizador}!" Se não: "Não estás logado!" */} 
      {estaLogado ? (  
        <p>Please Login {nomeUtilizador}!</p>
      ) : (
        <p>Não estás !</p>
      )}
      
      {/* Também podes usar && para mostrar algo apenas se for verdadeiro */}
      {acessoCompleto && <p>You Have Full Access</p>}
    </div>
  )
}

// COMO USAR no index.js:
// <ComponenteComCondicional />