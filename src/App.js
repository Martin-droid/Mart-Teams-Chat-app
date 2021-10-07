import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine 
           height="100vh"
           projectID="3bc41cb7-c958-4a1b-97f0-6802f3fc980f"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}
           />}
           />
    

    );
}

export default App;