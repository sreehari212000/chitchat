import { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel, IconButton } from '@mui/material';
import './App.css';
import Message from './components/Message';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';


function App() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputvalue] = useState('')
  const [username, setUsername] = useState('')

  useEffect(()=>{
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'))
    onSnapshot(q, (snapshot)=>{
      setMessages (snapshot.docs.map((doc)=>( {
        id: doc.id,
        data: doc.data()
      })) )
    })
  }, [])

  useEffect(()=>{
    setUsername(prompt('Please enter your name: '))
  }, [])

  async function handleSend(e){
    e.preventDefault()
    await addDoc(collection(db, 'messages'), {
      message: inputValue,
      username: username,
      timestamp: serverTimestamp()
    })
    setInputvalue('') 
  }
  return (
    <div className="App">
      <h1>CHIT CHAT</h1>
      <h2>Welcome {username}</h2>

      <form className='app-form'>
      <FormControl className='app-formcontrol'>
        <Input className='app-input' placeholder='Enter a message....' id="my-input" value={inputValue} onChange={e => setInputvalue(e.target.value)} />

        <IconButton className='app-sendbtn'  disabled={!inputValue} type='submit' variant='contained' color='primary' onClick={handleSend}
        >
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>
      <FlipMove>
      {messages.map((message)=>{
        return (
          <Message 
          key={message.id}
          username={username} 
          message={message.data}
        />
        )
      })}
      </FlipMove>
    </div>
  );
}

export default App;
