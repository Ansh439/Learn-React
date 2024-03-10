import Card from './Components/Card'
import Footer from './Components/Footer'
import './App.css'

function App() {
  

  return (
    <>
      <Card desc = "Macbook" btn = "View More"/>
      <Card desc = "Dell" btn = "Click Here"/>
      <Card desc = "Lava" btn = "Add to Cart"/>
      <Footer />
    </>
  )
}

export default App
