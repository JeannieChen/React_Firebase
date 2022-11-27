import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import { useState } from 'react';

function App() {
  const subtitle = "All the latest events"
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* Children props */}
        {showModal &&
          <Modal handleClose={handleClose}>
            <h2>10% off coupon code</h2>
            <p>Check it out</p>
          </Modal>}

        <div>
          <button onClick={() => setShowModal(true)}>Show modal</button>
        </div>

        {/* Components */}
        <Title title="Events in your area" subtitle={subtitle} />

      </header>
    </div>
  );
}

export default App;
