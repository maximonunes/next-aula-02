import MagiaDoJSX from '@/components/MagiaDoJSX/MagiaDoJSX'
import Like from '@/components/Like/Like'

export default function HomePage() {

  return (
    <div>
      <h2>Interfaces Web Modernas</h2>
      <p>O que aprendeste até agora (HTML, CSS, JavaScript) 
        será agora potenciado pelo React & Next.js.</p>
      <p>React é uma biblioteca JS para construir interfaces de utilizador (UI) através de componentes.</p>
      <MagiaDoJSX></MagiaDoJSX>
      <main>
        <h1>Incrementa/Decrementa</h1>
      <Like></Like>
      </main>
    </div>
  )
}
