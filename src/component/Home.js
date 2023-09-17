import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
export const Home = () => {
    const [url, setUrl] = useState('');
    const [isValidUrl, setIsValidUrl] = useState(true);
    const navigate = useNavigate()
    const handleChange = (e) => {
        setUrl(e.target.value);
      };
    
      const handleSubmit = () => {
        // Check if the entered URL is valid
        const isValid = /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\S*)?$/.test(url);
    
        if (isValid) {
          setIsValidUrl(true);
          navigate(url.replace(/^(https?:\/\/)/, ''))
        } else {
          setIsValidUrl(false);
          return;
        }
    
        // Use the entered URL (you can perform further actions here)
        console.log(`Entered URL: ${url}`);
      };
    
  return (
    <div className="main h-[100vh] bg-gray-800">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="hero">
          {/* <!-- hero headline --> */}
          <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
            <h1 className=" font-bold text-3xl text-gray-200">Stunning a free SEO Audit Report</h1>
           
          </div>
          
          {/* <!-- image search box --> */}
          <div className="box pt-6">
            <div className="box-wrapper">
              <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                <input type="search" name="" id=""  value={url}
        onChange={handleChange} placeholder="Type Your URL" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"  />
                <button className="outline-none focus:outline-none bg-red-500 w-full py-2 rounded-xl text-2xl text-gray-200 font-semibold" onClick={handleSubmit}>Check Your Site</button>
              </div>
            </div>
          </div>
          {isValidUrl ? null : <p style={{ color: 'red' }}>Invalid URL format</p>}
         
        </div>
      </div>
     
    </div>
  )
}
