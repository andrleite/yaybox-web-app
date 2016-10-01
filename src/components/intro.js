import React from 'react';

const Intro = () => {
  return (
    <div id="intro" className="section scrollspy">
      <div className="container">
        <div className="row">
          <div  className="col s12">
              <h2 className="center header text_h2"> Somos uma plataforma Caas (Container as a Service). <span className="span_h2"> Yaybox  </span> facilita a gestão de suas aplicações com <span className="span_h2"> contêineres Docker.</span> </h2>
          </div>

          <div  className="col s12 m4 l4">
            <div className="center promo promo-example">
              <i className="mdi-image-flash-on"></i>
              <h5 className="promo-caption">Deploy</h5>
              <p className="light center">Faça o deploy de sua aplicação de forma simples e rápida, com alguns cliques seu site ou aplicativo já estará disponível.</p>
            </div>
        </div>
        <div className="col s12 m4 l4">
            <div className="center promo promo-example">
              <i className="mdi-social-group"></i>
              <h5 className="promo-caption">Gerencie seus Aplicativos</h5>
              <p className="light center">Acompanhe suas métricas e consumo de recursos, acesse logs ou altere suas configurações. Faça update do seu aplicativo de forma ágil e progressiva. Monitore a saúde da sua aplicação.</p>
            </div>
        </div>
        <div className="col s12 m4 l4">
            <div className="center promo promo-example">
              <i className="mdi-hardware-desktop-windows"></i>
              <h5 className="promo-caption">Escalabilidade</h5>
              <p className="light center">Provisione mais contêineres de sua aplicação para dar conta de picos de trafêgo. Garantindo performance para seus usuários.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Intro;