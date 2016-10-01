import React from 'react';

const Pricing = () => {
  return (
    <div className="section scrollspy" id="work">
      <div className="container">
        <h2 className="header text_b">Preço </h2>
        <div className="row">
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>BASICO</strong><br />
                <span>a partir de</span><br/>
                <span className="plan_price"><span className="currency">R$</span>35*</span>
                <span className="plan_price_details">por mês</span><br/>
                <span className="plan_price_details">*Estimado 730h por mês</span><br/>
                <i className="material-icons mdi-navigation-more-vert right tooltipped" data-position="bottom" data-delay="50" data-tooltip="Saiba mais!">more_vert</i></span>
                <p></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Plano Básico <i className="material-icons mdi-navigation-close right">close</i></span>
                <p> Ideal para projetos pessoais </p>
                <p>521MB - 1GB RAM </p>
                <p>Não escala</p>
                <p>Update</p>
                <p><i className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="512MB RAM">yay-mini</i><span> - </span>
                <i className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="1GB RAM">yay-small</i></p>

              </div>
            </div> {/* div card */}

          </div> {/* div col s12 */}
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>STANDARD</strong><br />
                <span>a partir de</span><br/>
                <span className="plan_price"><span className="currency">R$</span>65*</span>
                <span className="plan_price_details">por mês</span><br/>
                <span className="plan_price_details">*Estimado 730h por mês</span><br/>
                <i className="material-icons mdi-navigation-more-vert right tooltipped" data-position="bottom" data-delay="50" data-tooltip="Saiba mais!">more_vert</i></span>
                <p></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Plano Standard<i className="material-icons mdi-navigation-close right">close</i></span>
                <p>Para ambientes de produção</p>
                <p>2GB - 4GB RAM </p>
                <p>Auto scale</p>
                <p>Métricas</p>
                <p>Logs</p>
                <p>Update</p>
                <p><i className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="2GB RAM">yay-medium</i><span> - </span>
                <i className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="4GB RAM">yay-large</i></p>
              </div>
            </div> {/* div card */}
          </div> {/* div col s12 */}
          
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4"><strong>PERFORMANCE</strong><br />
                <span>a partir de</span><br/>
                <span className="plan_price"><span className="currency">R$</span>95*</span>
                <span className="plan_price_details">por mês</span><br/>
                <span className="plan_price_details">*Estimado 730h por mês</span><br/>
                <i className="material-icons mdi-navigation-more-vert right tooltipped" data-position="bottom" data-delay="50" data-tooltip="Saiba mais!">more_vert</i></span>
                <p></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Plano Performance <i className="material-icons mdi-navigation-close right">close</i></span>
                <p>Ideal para aplicações críticas</p>
                <p>6GB RAM </p>
                <p>Auto scale horizontal</p>
                <p>Métricas</p>
                <p>Logs</p>
                <p>Update</p>
                <p>Scale vertical</p>
                <p><i className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="6GB RAM">yay-pro</i></p>
              </div>
            </div> {/* div card */}
          </div> {/* div col s12 */}

        </div>  {/* div row */}
      </div>  {/* div container */}
    </div>
  );
};

export default Pricing;