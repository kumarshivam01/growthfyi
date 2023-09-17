import React, { useEffect, useState } from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
import axios from 'axios'
import datas from './data'
import { Meter } from './Meter'
import { Onpage } from './Onpage'
import { Loader } from './Loader'
export const SeoAudit = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const post_array = [];
    post_array.push({
        "url": `https:/${location.pathname}`,
        "enable_javascript": true,
        "custom_js": "meta = {}; meta.url = document.URL; meta;"
    });
    // console.log(post_array)
    const [data, setData] = useState()
    const [loader, setLoader] = useState(true);
    // console.log("data"+data)
    useEffect(() => {
        axios({
            method: 'post',
            url: 'https://api.dataforseo.com/v3/on_page/instant_pages',
            auth: {
                username: 'shivambkp70@gmail.com',
                password: 'b654c4e11309518b'
            },
            data: post_array,
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            var result = response['data']['tasks'];
            // Result data
            // console.log('api data')
            setLoader(false)
            if(result[0].result == null){
                navigate('/not-found')
            }
            // console.log(result[0]);
            setData(result[0])
        }).catch(function (error) {
            setLoader(false)
            navigate('/not-found')
            console.log("error");
            console.log(error);
        });
    }, [])
    return (
        <div>
            <div className="main  bg-white">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    <div className="hero">
                        {/* <!-- hero headline --> */}
                        <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                            <p className='text-gray-800'>EVERYTHING YOU NEED TO KNOW</p>
                            <h1 className=" font-bold text-4xl text-gray-700 mt-3">Results for https:/{location.pathname}</h1>

                        </div>

                        {
                            loader && <>
                                <Loader/>
                            </>
                        }
                       {
                        data && <>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
                            <div className='border border-gray-300 m-auto bg-white p-5 w-[50%] h-[80%]' style={{overflow:'hidden'}}>
                                <img lazy className='w-[100%] h-[100%] ' style={{overflow:'hidden'}} src={data && data.result[0].items[0].meta.favicon} alt="" />
                            </div>
                            <div className='grid grid-cols-1 gap-8 m-auto' >
                                <Meter color="#10b981" bgColor="#dcfce7" percentage={data && data.result[0].items[0].onpage_score} textColor="#10b981" />  
                            </div>
                        </div>
                        <Onpage data={data && data.result[0].items[0]}/>
                        </>
                       }
                    </div>
                </div>

            </div>
        </div>
    )
}
