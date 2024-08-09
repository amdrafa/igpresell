import './App.css';
import porcentagem1 from "./assets/porcentagem1.png"
import porcentagem2 from "./assets/porcentagem2.png"
import porcentagem3 from "./assets/porcentagem3.png"
import porcentagem4 from "./assets/porcentagem4.png"
import porcentagem5 from "./assets/porcentagem5.png"
import roleta from "./assets/roleta.jpeg"
import bonus from "./assets/ganhos.jpeg"



function App() {
  return (
    <div>
      <div className="flex justify-center bg-red-500 text-white  font-extrabold py-2 text-xl">
        DEPÓSITO MÍNIMO: R$20
      </div>
      <main className='main-bg bg-black text-white'>
        <div className='flex flex-col justify-center items-center px-2 mt-2'>
          <a href="https://4play.bet/affiliates/?btag=2042404">
            <img width={250} src={roleta} alt="" />
          </a>
          <div className="font-extrabold text-2xl text-center">
            DEPOSITE R$10 PRA{" "} <br />
            <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              GANHAR UM BÔNUS
            </span>
          </div>

          <a href="https://4play.bet/affiliates/?btag=2042404" className='my-4'>
            <img width={250} src={bonus} alt="" />
          </a>

          <div className='text-2xl text-center opacity-80 my-4 mb-8 px-4'>
            Clique no botão abaixo e finalize seu cadastro
          </div>
          <a href='https://4play.bet/affiliates/?btag=2042404' className='w-full px-5'>
            <button className='text-white w-full text-xl bg-green-500 font-extrabold p-4 rounded-lg shadow-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 pulsar-brilho'>
              FINALIZE SEU CADASTRO
            </button>
          </a>

          <div className='font-extrabold mt-8 text-3xl'>
            JOGOS <span className='text-yellow-400'>PAGANTES</span>
          </div>
          <div className='mb-4 text-2xl'>
            Arraste para o lado.
          </div>

          <a href="https://4play.bet/affiliates/?btag=2042404" className='overflow-auto flex mb-8'>
            <img width={150} src={porcentagem1} alt="" />
            <img width={150} src={porcentagem2} alt="" />
            <img width={150} src={porcentagem3} alt="" />
            <img width={150} src={porcentagem4} alt="" />
            <img width={150} src={porcentagem5} alt="" />
          </a>

        </div>
      </main>
    </div>
  );
}

export default App;
