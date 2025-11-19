
export default function Saudacao() {
  const data = new Date();
  const hora = data.getHours();        // 0-23
  const diaSemana = data.getDay();     // 0-domingo, 1-segunda ...
  const dia = data.getDate();          // dia do mês
  const mes = data.getMonth();         // 0-janeiro, 11-dezembro
  const ano = data.getFullYear();  

  // Mensagem com if/else
  let saudacao;
  if (hora < 12) {
    saudacao = "Bom dia";
  } else if (hora >= 12 && hora <= 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

  // Mensagem com ternário
  const clima = hora >= 6 && hora < 18 ? "Que lindo sol!" : "A lua está cheia!";

  // Mensagem com && para dia da semana
  const diaDaSemana = diaSemana === 2 && "É terça-feira!"; // 2 = terça

  // Mensagem com && para mês
  const mensagemDezembro = mes === 11 && "Estamos em dezembro!";

  // Dias para o Natal
  const natal = new Date(ano, 11, 25); // 25 de dezembro
  const diffDias = Math.ceil((natal - data) / (1000 * 60 * 60 * 24)); 

  return (
    <>
      <p>{saudacao}!</p>
      <p>{clima}</p>
      {diaDaSemana && <p>{diaDaSemana}</p>}
      {mensagemDezembro && <p>{mensagemDezembro}</p>}
      <p>Faltam {diffDias} {diffDias === 1 ? "dia" : "dias"} para o Natal 🎄</p>
    </>
  );
}

