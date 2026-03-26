import { Suspense } from 'react';
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const json = async () => {
    const data = await fetch('./data.json');
    const res = await data.json();
    return res;
  }
  const movieDataPromise = json();
  return (
    <main className=" min-h-screen  text-white manrope">
      <Navbar></Navbar>
      <Suspense fallback={<h3>Ruko jara</h3>}>
        <Hero movieDataPromise={movieDataPromise}></Hero>
      </Suspense>
    </main>
  )
}

export default App
