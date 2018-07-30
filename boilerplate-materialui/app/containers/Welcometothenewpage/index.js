/*
 *
 * Welcometothenewpage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectWelcometothenewpage from './selectors';
import messages from './messages';
import passenger from './passenger.jpg';

import{
  MainContainer,
  ImageMain,
  MainImageContainer,
  MainContainerText,
  Welcomejuan,
  Telephones,
  Specials,
  TravelSpecial,
  GetOutTravel,
  

  
}from './styledComponents';

export class Welcometothenewpage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MainContainer>
        <Helmet
          title="Welcometothenew"
          meta={[
            { name: 'description', content: 'Description of Welcometothenewpage' },
          ]}
        />
        <MainImageContainer>
          <ImageMain 
            src={passenger}
            alt="guarf?"   
          />
          <MainContainerText>
            LunasdeMiel.mx

          </MainContainerText>
          <Welcomejuan>
            Bienvenido(a),chelis

            </Welcomejuan>
            <Telephones>
            Tel. (33) 240 4585
            </Telephones>
            <Specials>
            ¡Especiales!
            </Specials>



        </MainImageContainer>
        <TravelSpecial>
        En este viaje especial nos encargamos de que todo sea perfecto
        </TravelSpecial>
        <GetOutTravel>
        ¿A dónde quieres ir?
        </GetOutTravel>  
      </MainContainer>
    );
  }
}



Welcometothenewpage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  welcometothenewpage: makeSelectWelcometothenewpage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcometothenewpage);



