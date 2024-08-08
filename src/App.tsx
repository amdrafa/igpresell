import './App.css';
import porcentagem1 from "./assets/porcentagem1.png"
import porcentagem2 from "./assets/porcentagem2.png"
import porcentagem3 from "./assets/porcentagem3.png"
import porcentagem4 from "./assets/porcentagem4.png"
import porcentagem5 from "./assets/porcentagem5.png"



function App() {
  return (
    <div>
      <div className="flex justify-center bg-green-600 text-white font-extrabold py-2 text-base">
        VOCÊ GANHOU 40 RODADAS GRÁTIS
      </div>
      <main className='main-bg bg-black text-white'>
        <div className='flex flex-col justify-center items-center px-2 mb-36'>
          <span className='text-7xl mb-4'>
            🔞
          </span>
          <div className='font-extrabold text-3xl text-center'>
            VOCÊ TEM <span className='text-red-600'>+18 ANOS?</span> <br /> <br /> <span className='text-green-500'>DEPOSITE</span> PARA GANHAR UM <span className='text-orange-400'>BÔNUS</span> DE <span className='text-blue-600'>R$100</span>
          </div>
          <div className='text-2xl text-center opacity-80 my-4 mb-8'>
            Clique no botão abaixo e finalize seu cadastro
          </div>
          <a href='https://4play.bet/affiliates/?btag=2042404' className='w-full px-5'>
            <button className='text-zinc-700 w-full text-xl bg-white font-extrabold p-4 rounded-lg shadow-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 pulsar-brilho'>
              FINALIZE SEU CADASTRO
            </button>
          </a>

          <div className='mt-8'>
            Arraste para o lado.
          </div>

          <div className='overflow-auto flex'>
            <img width={150} src={porcentagem1} alt="" />
            <img width={150} src={porcentagem2} alt="" />
            <img width={150} src={porcentagem3} alt="" />
            <img width={150} src={porcentagem4} alt="" />
            <img width={150} src={porcentagem5} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
