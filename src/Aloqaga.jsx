import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Aloqaga = () => {
  return (
    <div className="bg-cyan-300 w-full min-h-screen flex flex-col">
      <Header/>
      <main className="grow">
        <h1 className="font-bold text-2xl text-center mt-10">Men haqimda</h1>
        <div className="mt-10 ml-5">
          <p className="font-bold text-xl "><span className="font-serif">Ismim:</span> Shoyadbek</p>
          <p className="font-bold text-xl "><span className="font-serif">Familyam:</span> Ibrohimov</p>
          <p className="font-bold text-xl "><span className="font-serif">Yoshim:</span> 14</p>
          <p className="font-bold text-xl "><span className="font-serif">Soham:</span> Dasturchi</p>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Aloqaga