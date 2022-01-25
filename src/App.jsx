import './App.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Navbar'
import Footer from './Components/Footer'
import Landingsegment from './Components/Landingsegment'
import Boxes from './Components/Boxes'

function App () {
  return (
    <>
      <Header />
      <Landingsegment />
      <Boxes />
      <Footer />
    </>
  )
}
export default App
