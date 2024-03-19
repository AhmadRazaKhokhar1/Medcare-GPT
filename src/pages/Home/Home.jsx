import axios from 'axios'
import { useCallback, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
export default function Home() {
  //variables
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');
  const [typing, setTyping] = useState(false);
  const [recentConversationId, setRecentConversationId] = useState('');
  
  //references
  const messageDiv = useRef();

  //fetch all messages
  const fetchMessages = useCallback(async () => {

    try {
      const response = await axios.get('https://getcody.ai/api/v1/messages ', {
        headers: {
          Authorization: 'Bearer 895DxNd88qTCyBAh1X65pYI2s41lZZc9ZY7JCM1L13a16323'
        }
      });
      setMessages(response.data.data);
      setRecentConversationId(response.data.data);
      const lastConversationId = messages.map((msg)=>{return (msg?msg.conversation_id:"")});
      let index = lastConversationId.length - 1;
      console.log(lastConversationId[index]);
      return;
    } catch (error) {
      console.log(error);
      toast.error("There was an error while loading the Data");
      setTyping(false)
    }

  }, [])
  // send message
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      setTyping(true)
      setQuery('');
      const response = await axios.post('https://getcody.ai/api/v1/messages', { 'content': query, 'conversation_id': 'WjnegEGA3bwZ' }, {
        headers: {
          'Authorization': 'Bearer 895DxNd88qTCyBAh1X65pYI2s41lZZc9ZY7JCM1L13a16323',
          'Content-Type': 'application/json'
        }
      });
      fetchMessages();
      setTyping(false);
      return;
    } catch (error) {
      toast.error("There was an error while loading the Data");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMessages();
    //scrolling to bottom after every render
if(messageDiv.current){
  messageDiv.current.scrollTop = messageDiv.current.scrollHeight;
}
  }, []);
  return (
    <div>
      <h1 className="text-xl text-purple-900 font-extrabold text-center my-7">
        Your Personal AI Doctor
      </h1>
      <p className='text-start w-[35vw] mx-auto'>
        Consult with our AI-powered doctor to discuss your health concerns and receive expert diagnoses and recommendations.
      </p>
      <br />
      {/* Messages container  */}
      <div className="containerMain border-purple-900 border-solid border-[5px] rounded-lg w-[50vw] max-h-[80vh] h-[80vh] p-6 mx-auto bg-purple-300 flex flex-col justify-between overflow-hidden overflow-y-auto mb-32">
        <div className='justify-self-start flex flex-col-reverse '>

          {
            messages.map((message, index) => {
              return <div key={index} ref={messageDiv} className={message.machine ? "server bg-purple-950 shadow-2xl text-white" : "client  bg-purple-500 shadow-2xl text-white"}>
                {
                  (message.machine&&typing)?toast.loading():
                message.content
                
                }
              </div>
            })
          }
        </div>
        {/* Message Input */}
        <div className="w-[50.5vw] p-2 border-purple-900 justify-self-end absolute mt-[34.5vw] -ml-8 block bg-purple-400 rounded-lg">
          <form className='flex justify-between w-full' onSubmit={sendMessage}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='border-purple-900 w-[40vw] p-4 rounded-md shadow-2xl outline-none border-none' placeholder='Consult with me' />
            <input type="submit" value="Send" className='shadow-md p-4 bg-purple-700 w-44 rounded-lg hover:rounded-xl cursor-pointer mx-2 hover:scale-105 transition-all ease-in-out text-white hover:bg-purple-950' />
          </form>
        </div>
      </div>
    </div>
  )
}
