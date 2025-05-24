const Home = () => {
  return (
    <div>
      <section className="text-center p-5 bg-danger text-white vh-100 d-flex flex-column justify-content-center align-items-center">
        <img
          src="/logo.png"
          alt="Logo Sabor de História"
          className="img-fluid mb-3"
        />
        <h1 className="display-4">
          <strong>Sabor de História</strong>
        </h1>
        <h2 className="text-muted">
          <i>Receitas do coração...</i>
        </h2>
      </section>

      <section id="sobre" className="container my-5">
        <h1 className="text-center">Sobre Nós</h1>
        <div className="row">
          <div className="col-md-6">
            <p>
              Bem-vindo ao Sabor de História, um lugar onde os sabores se
              entrelaçam com narrativas emocionantes, criando uma experiência
              gastronômica única. Aqui, a cozinha é mais do que apenas o preparo
              de alimentos; é uma jornada através do tempo, sabores e memórias.
            </p>
            <p>
              No Sabor de História, acreditamos que cada prato conta uma
              história, seja ela uma lembrança de infância, uma tradição
              familiar passada de geração em geração ou uma descoberta culinária
              em uma viagem emocionante. Nossa missão é não apenas compartilhar
              receitas deliciosas, mas também transportá-lo para o coração de
              cada história por trás delas.
            </p>
            <p>
              Exploramos os recantos mais fascinantes da culinária, desde as
              receitas tradicionais que resistiram ao teste do tempo até as
              criações contemporâneas que refletem a diversidade cultural do
              mundo.
            </p>
          </div>

          <div className="col-md-6">
            <p>
              Cada página do Sabor de História é uma ode à riqueza da culinária
              global e à beleza de suas narrativas. Aqui, você encontrará não
              apenas receitas detalhadas e deliciosas para cada ocasião, mas
              também histórias que tocam a alma. Deixe-se envolver pelos aromas
              sedutores, pelas texturas reconfortantes e pelas histórias que
              ecoam através das panelas e dos pratos.
            </p>
            <p>
              Junte-se a nós nesta jornada de descoberta culinária e emocional.
              No Sabor de História, cada mordida é uma aventura, cada prato é
              uma história e cada experiência é uma lembrança a ser guardada com
              carinho.
            </p>
            <p className="text-danger">
              <strong>
                Seja bem-vindo à nossa mesa, onde o amor pela comida e pela
                narrativa se entrelaçam em uma dança harmoniosa de sabores e
                emoções.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="container my-5">
        <h1 className="text-center">Fale Conosco</h1>
        <div className="card p-4 shadow">
          <form>
            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Celular</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensagem</label>
              <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">
              ENVIAR
            </button>
          </form>
          <p className="mt-3 text-center">
            Caso preferir, entre em contato pelos canais:
            <br />
            Email: <b>sabordehistoria@gmail.com</b>
            <br />
            WhatsApp: <b>(11) 94114-6040</b>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
