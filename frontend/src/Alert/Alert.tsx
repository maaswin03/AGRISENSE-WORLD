import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import '../Alert/Alert.css'

function Alert() {
  return (
    <div>
      <Navbar />

      <div className='alert1'>
        <h1>Alert & Notifications</h1>
        <div className='alert2'>
          <p>Currently No message available</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Alert