import Button from './components/Button/index';
import Title from './components/Title';
import Card from './components/Card';
import Greeting from './components/Greeting';


function App() {
  return (
   <div>      
      <Button label= {"Clique aqui"} />
      <Title text= 'Página inicial' />
      <Title text= 'Sobre nós'/>
      <Card>
        <h2>Card de Bem vindo</h2>
        <p>Este é o conteúdo de um card de boas vindas</p>
      </Card>
      <Greeting name= 'Ana'/>
      <Greeting name= 'Feliciti'/>
      <Greeting name= 'Débora'/>
      <Greeting name= 'Rochele'/>
   </div>
  );
}

export default App;
