import Footer from "./components/Footer";
import Header from "./components/Header";
import sayt1 from '../src/img/sayt1.png';
import rasm2 from '../src/img/rasm2.jpg';
import rasm3 from '../src/img/rasm3.png';
import rasm4 from '../src/img/rasm4.png';
import rasm5 from '../src/img/rasm4.webp';
import rasm6 from '../src/img/rasm6.jpg';
import rasm7 from '../src/img/rasm7.png';
import rasm8 from '../src/img/rasm8.webp';

export default function App() {
  return (
    <div className="bg-cyan-300 w-full min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <h1 className="font-bold text-3xl text-center mt-10">Men haqimda</h1>
        <div className="mt-10 ml-5">
          <p className="text-xl">Yoshim: <span className="font-serif">14</span></p>
          <p className="text-xl">Ismim: <span className="font-serif">Shoyadbek</span></p>
          <p className="text-xl">Familyam: <span className="font-serif">Ibrohimov</span></p>
          <p className="text-xl">Hobbim: <span className="font-serif">Dasturlash</span></p>

         <h1 className="text-3xl font-bold text-center my-10"> men biladigon dasturlar</h1>

         <div className="flex gap-20 w-full max-[1150px] mx-auto ml-8">
          <div className="flex border-2 border-black w-60 h-40 rounded-2xl bg-white">
            <img className="w-20 my-8" src={rasm6} alt="" />
            <p className="text-2xl my-[65px]">Html</p>
          </div>
          <div className="flex border-2 border-black w-60 h-40 rounded-2xl bg-white">
            <img className="w-16 my-10 " src={rasm7} alt="" />
            <p className="text-2xl my-[65px]">Css</p>
          </div>
          <div className="flex border-2 border-black w-60 h-40 rounded-2xl bg-white">
            <img className="w-20 my-8" src={rasm5} alt="" />
            <p className="text-2xl my-[65px]">JavaScript</p>
          </div>
          <div className="flex border-2 border-black w-60 h-40 rounded-2xl bg-white">
            <img className="w-20 my-10" src={rasm8} alt="" />
            <p className="text-2xl my-[65px]">Google sheets</p>
          </div>
         </div>

          <h1 className="text-3xl font-bold text-center my-10">Men tayorlagan narsalar</h1>

          <div className="grid grid-cols-2 gap-10 w-full max-w-[1260px] mx-auto">
            <div className="border-2 rounded-2xl w-[530px] bg-white">
              <img className="border-black border-2 w-[530px] h-[300px] rounded-2xl " src={sayt1} alt="" />
              <h1 className="text-xl text-center font-semibold my-3">Sayt haqida qisqacha</h1>
              <p><span className="font-semibold ml-5">Nomi:</span><span className="font-serif">Millat Umidi</span></p>
              <p><span className="font-semibold ml-5">Nima uchun ochilgan:</span><span className="font-serif">O'quv markazi uchun</span></p>
              <div className="flex gap-5 m-5 mx-32 ">
                <a href="https://millatumidi.uz/uz/missiyamiz-va-maqsadlarimiz/">
                  <button className="flex border-2 border-slate-900 p-1 rounded-2xl px-3"><img className="m-1 w-6" src={rasm2} alt="" /><p className="my-2">Live server</p></button>
                </a>
                <a href="">
                  <button className="flex border-2 py-2 border-red-700 p-1 rounded-2xl px-3"><img className="mt-2 w-6 h-6" src={rasm3} alt="" /><p className="mt-2 mx-2 ">Github</p></button>
                </a>
                
              </div>
            </div>
            <div className="border-2 w-[530px] rounded-2xl bg-white">
              <img className="border-black border-2 w-[530px] h-[300px] rounded-2xl " src={rasm4} alt="" />
              <h1 className="text-xl text-center font-semibold my-3">Sayt haqida qisqacha</h1>
              <p><span className="font-semibold ml-5">Nomi:</span><span className="font-serif">Contact book </span></p>
              <p><span className="font-semibold ml-5">Nima uchun ochilgan:</span><span className="font-serif">Telefon raqamlar uchun</span></p>
              <div className="flex gap-5 m-5 mx-32 ">
                <a href="https://contact-book-one-eosin.vercel.app/">
                  <button className="flex border-2 border-slate-900 p-1 rounded-2xl px-3"><img className="m-1 w-6" src={rasm2} alt="" /><p className="my-2">Live server</p></button>
                </a>
                <a href="https://github.com/shoyatbek2011/Sport.git">
                  <button className="flex border-2 py-2 border-red-700 p-1 rounded-2xl px-3"><img className="mt-2 w-6 h-6" src={rasm3} alt="" /><p className="mt-2 mx-2 ">Github</p></button>
                </a>
                
              </div>
            </div>
            <div className="border-2 w-[530px] rounded-2xl bg-white">
              <img className="border-black border-2 w-[530px] h-[300px] rounded-2xl " src={sayt1} alt="" />
              <h1 className="text-xl text-center font-semibold my-3">Sayt haqida qisqacha</h1>
              <p><span className="font-semibold ml-5">Nomi:</span><span className="font-serif">Millat Umidi</span></p>
              <p><span className="font-semibold ml-5">Nima uchun ochilgan:</span><span className="font-serif">O'quv markazi uchun</span></p>
              <div className="flex gap-5 m-5 mx-32 ">
                <a href="">
                  <button className="flex border-2 border-slate-900 p-1 rounded-2xl px-3"><img className="m-1 w-6" src={rasm2} alt="" /><p className="my-2">Live server</p></button>
                </a>
                <a href="">
                  <button className="flex border-2 py-2 border-red-700 p-1 rounded-2xl px-3"><img className="mt-2 w-6 h-6" src={rasm3} alt="" /><p className="mt-2 mx-2 ">Github</p></button>
                </a>
                
              </div>
            </div>
          </div>



        </div>
      </main>
      <Footer />
    </div>

  )
}