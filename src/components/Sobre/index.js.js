import estilos from './Sobre.module.module.css'

export default function Sobre() {
    return (
        <section id={estilos.sobre} className={estilos.sobre}>
            <div className={estilos.center}>
                <h2>Import perfum</h2>
                <p>Fundada em 2001</p>
                </div>

                <div className={estilos.elementos_sobre}>
                    <picture>
                        <img src='' alt='Nossa loja'/>
                    </picture>
                

                <div className={estilos.elementos_sobre}>
                    <h4>Nossas Filiais</h4>
                    <p>Hoje temos 5 filiais espalhadas pelo Brasil</p>
                </div>

                <div className={estilos.elementos_sobre}>
                    <h4>Atendimento individual</h4>
                    <p>Nossa equipe é treinada para te atender</p>
                </div>

                <picture>
                    <img src='' alt='Atendimento'/>
                </picture>
            </div>
        </section>
    )}