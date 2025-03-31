import './App.css'
import Form from './components/Form'
import MessageList from './components/MessageList'

function App() {

  return (
    <div className='app'>
      <div className="container">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <Form />
      </div>
      <MessageList />
    </div>
  )
}

export default App
