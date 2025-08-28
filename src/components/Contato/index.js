import estilos from './Contato.module.css'

export default function Contato() { 
return (
    <section id={estilos.contato}>
        <div className={estilos.contato}>
        <h2>Fale Conosco</h2>
        <p>
            Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através das nossas sociais ou da central de atendimento.
        </p>

        <div className={estilos.central_redes}>
            <div className={estilos.bloco_contato}>
                <h4>Contato</h4>
                <ul>
                    <li>
                        <picture>
                            <img src='' alt='localização'/>
                        </picture>Caraguatatuba - SP
                    </li>
                </ul>
            </div>

            <div className={estilos.bloco_contato}>
                <h4>Redes Sociais</h4>
                <ul>
                    <li>
                        <picture>
                            <img src=''/>
                        </picture> Import Perfum
                    </li>

                    <li>
                        <picture>
                            <img src=''/>
                        </picture>@importperfum
                    </li>

                    <li>
                        <picture>
                            <img src=''/>
                        </picture>@importperfum
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </section>
)
}