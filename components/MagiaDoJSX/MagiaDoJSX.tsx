import Saudacao from "@/components/Saudacoes/Saudacao";

export default function MagiaDoJSX() {


const magia = <strong>HTML dentro do JavaScript!</strong>

    return (<>
    <div>
            Um componente é uma função JS que retora JSX - {magia} 
    </div>
    <MagiaDoJSX/>
    </>
    )
}
