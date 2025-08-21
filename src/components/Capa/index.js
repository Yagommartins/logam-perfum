import estilos from './Capa.module.css'

export default function Capa() {
    return (
        <section className={estilos.secao_capa}>
        <div className={estilos.texto}>
            <h2>Bem-vindo à EAU DE PERFUM</h2>
            <h1>AGORA AINDA MELHOR.</h1>
            <button>Saiba Mais</button>
        </div>
        </section>
    )
}