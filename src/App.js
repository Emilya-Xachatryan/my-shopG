import React from 'react'
import AppRouter from './router/AppRouter'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="app">
      <Header/>
      <main className="content">
        <AppRouter />
      </main>
      <Footer/>
    </div>
  )
}

export default App
