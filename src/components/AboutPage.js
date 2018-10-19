import React from 'react';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">Quienes somos</h2>
      <p>
        Nuestra Radio es un espacio plural, amplio, pero fiel a los valores y principios cooperativos. Basada en el desarrollo de la comunicación popular, comunitaria y solidaria, Radio Cooperativa Tucumán, tiene como norte el crecimiento de un medio masivo con identidad e ideales fuertes tratando de crear un espacio donde comulguen todas las voces que deseen llevar adelante la construcción de una sociedad, Justa, Igualitaria, Solidaria y Equitativa. Estamos convencidos que Otra Idea de País es posible.
      </p>
      <p>
        Concebimos la comunicación como un pilar fundamental para el desarrollo de las sociedades  y nuestro aportardesde nuestro lugar  a través de una participación creciente en la producción y generación de espacios en los medios masivos de comunicación, mediante la difusión de los principios y valores del cooperativismo y participando activamente tanto en el seno del movimiento cooperativo - nacional e internacional- como en los movimientos populares.
      </p>
      <p>
        La misión de Radio Cooperativa Tucumán,  como organización cooperativa y su visión de la realidad nacional se mantienen presentes, renovando año a año el compromiso fijado en la tarea de representar dentro del espacio de la administración de medios masivos y la producción de contenidos, así también difundir el  desarrollo de la economía solidaria en su conjunto, para la construcción de una Argentina con más democracia y justicia social.
      </p>
    </div>
  );
};

export default AboutPage;
