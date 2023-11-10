import { useState } from 'react';
import AnimatedMessages from './shared/AnimatedText';
import song from './assets/song.mp3';

const App = () => {
const [isPlaying, setIsPlaying] = useState(false);

  const messages = [
  'olá',
  'você deve estar pensando',
  '"por que o Henrique me mandou isso?"',
  '"não é o seu portifólio?"', 'não',
  'e sim, é o que vocês está pensando',
  'algo, muito, MUITO, acima de nós todos',
  'se trata de residências em perigo',
  'famílias sofrendo',
  'amigos com saudade',
  'uma van completamente equipada, mas PARADA',
  'um sonho em comum',
  'a família que mora da willow street precisa da nossa ajuda',
  'Posso contar com sua ajuda, hoje a noite?'
]

const audio = new Audio(song);

function play() {
  audio.play();
  setIsPlaying(true);
}

  return (
    <div className='background'>
      <button className='btn' onClick={play} style={{opacity: `${isPlaying ? 0 : 1}`}}>
        Click Me!
      </button>
      {isPlaying ? <AnimatedMessages messages={messages} /> : null}
    </div>
  );
};

export default App;
