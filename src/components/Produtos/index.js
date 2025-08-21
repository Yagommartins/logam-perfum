import estilos from './Produtos.module.css'

export default function Produtos() {
  return (
    <section id='produtos' className={estilos.produtos}>
      <div className={estilos.titulos}>
        <h2>Nossos Produtos</h2>
        <p>
          Aqui, reunimos as fragrâncias mais sofisticadas do mercado, trazendo para você uma seleção exclusiva de perfumes que combinam elegância, estilo e personalidade. Explore nossa coleção e descubra o aroma perfeito para cada ocasião.
        </p>
        <p>
          Autenticidade garantia | As melhores marcas do mundo | Envio rápido e seguro
        </p>

        <div className={estilos.perfume_img}>
          <div className={estilos.card_perfume}>
            <span className={estilos.selo}>Mais Vendidos</span>
            <h3> Idôle 50ml</h3>
            <picture>
              <img src='/perfume_4.png' alt='idole.png'></img>
            </picture>
            <p className={estilos.preco}>R$ 434,90</p>
            <button className={estilos.botao}>Comprar Agora</button>
          </div>



          <div className={estilos.card_perfume}>
            <span className={estilos.seloNovo}>Novo</span>
            <h3> Jadore 50ml</h3>
            <picture>
              <img src='/perfume_2.png' alt='idole.png'></img>
            </picture>
            <p className={estilos.preco}>R$ 434,90</p>
            <button className={estilos.botao}>Comprar Agora</button>
          </div>



          <div className={estilos.card_perfume}>
            <span className={estilos.selo}>Queridinhos</span>
            <h3> Versace Eros 50ml</h3>
            <picture>
              <img src='/versace eros.jpg' alt='Hugo Boss'></img>
            </picture>
            <p className={estilos.preco}>R$ 434,90</p>
            <button className={estilos.botao}>Comprar Agora</button>
          </div>

          <div className={estilos.card_perfume}>
            <span className={estilos.selo}>Mais Vendidos</span>
            <h3> Cebolinha 50ml</h3>
            <picture>
              <img src='/cebolinha_perfume.jpg' alt='Cebolinha'></img>
            </picture>
            <p className={estilos.preco}>R$ 434,90</p>
            <button className={estilos.botao}>Comprar Agora</button>
          </div>
        </div>
      </div>
    </section>
  )
}