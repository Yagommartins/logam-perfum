import estilos from './Topo.module.css'

export default function Topo () {
    return (
        <header>
            <div className={estilos.topo}>
                <picture>
                <a href=""><img src='./logo do logan perfume.jpg'/> </a>
                </picture>

                <nav>
                    <a href="#produtos">Produtos</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contatos</a>
                </nav>
            </div>
            </header>
    )
}