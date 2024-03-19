import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [messages, setMessages] = useState([]);

  // -X POST https://getcody.ai/api/v1/messages \
  // -H "Authorization: Bearer $ACCESS_TOKEN" \
  // -H "Content-Type: application/json" \
  // -d '{"content":"string","conversation_id":"string"}'


  //fetch all messages
  const fetchMessages = useCallback(async () => {

    try {
      const response = await axios.get('https://getcody.ai/api/v1/messages ', {
        headers: {
          Authorization: 'Bearer 895DxNd88qTCyBAh1X65pYI2s41lZZc9ZY7JCM1L13a16323'
        }
      });
      setMessages(response.data.data);
    } catch (error) {
      console.log(error)
    }

  }, [])

  // send message
  const sendMessage = async() => {
    try {
      const response = await axios.post('https://getcody.ai/api/v1/messages', {
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer 895DxNd88qTCyBAh1X65pYI2s41lZZc9ZY7JCM1L13a16323'
        }
      });
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMessages();
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
      <div className="containerMain border-purple-900 border-solid border-[5px] rounded-lg w-[50vw] h-[60vh] p-6 mx-auto bg-purple-300 flex flex-col justify-between">
        <div className='justify-self-start flex flex-col'>

          {
            messages.map((message, index) => {
              return <div key={index} className={message.machine ? "server" : "client"}>
                {message.content}
              </div>
            })
          }
        </div>
        {/* Message Input */}
        <div className="w-full p-2 border-purple-900 justify-self-end">
          <form className='flex justify-between w-full' onSubmit={sendMessage}>
          <input type="text" className='border-purple-900 w-[40vw] p-4 rounded-md shadow-2xl' />
          <input type="submit" value="Send" className='shadow-md p-4 bg-purple-700 w-44 rounded-lg hover:rounded-xl cursor-pointer mx-2 hover:scale-105 transition-all ease-in-out text-white hover:bg-purple-950'/>
          </form>
        </div>
      </div>
    </div>
  )
}
