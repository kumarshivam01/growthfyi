import React from 'react'

export const Onpage = ({data}) => {
    console.log(data)
  return (
    <div>
        <p className='text-5xl font-semibold text-gray-700 text-center mt-8' >Onpage Results</p>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 items-center mt-5'>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3'>
                <p className='text-3xl font-semibold'>{data.meta.internal_links_count}</p>
                <p>Internal Links</p>
            </div>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3'>
            <p className='text-3xl font-semibold'>{data.meta.external_links_count}</p>
                <p>External Links</p>
            </div>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3'>
            <p className='text-3xl font-semibold'>{data.meta.images_count}</p>
                <p>Total No Image</p>
            </div>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3'>
            <p className='text-3xl font-semibold'>{data.meta.images_size}</p>
                <p>Image Size </p>
            </div>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3'>
            <p className='text-3xl font-semibold'>{data.meta.scripts_count}</p>
                <p>Scripts</p>
            </div>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3'>
            <p className='text-3xl font-semibold'>{data.meta.scripts_size}</p>
                <p>Scripts Size</p>
            </div>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3'>
            <p className='text-3xl font-semibold'>{data.meta.content.plain_text_size}</p>
                <p>Plain Text Size</p>
            </div>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3 hover:bg-white '>
            <p className='text-3xl font-semibold'>{data.meta.content.plain_text_word_count}</p>
                <p>Plain Text Word Count</p>
            </div>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3'>
            <p className='text-3xl font-semibold'>{Math.floor(data.meta.content.automated_readability_index)}</p>
                <p>Automated Readability Index</p>
            </div>
            <div className='border border-gray-400 border-x-4 border-y-4 h-[100px] rounded-2xl hover:border-black text-center pt-3'>
            <p className='text-3xl font-semibold'>{data.meta.content.title_to_content_consistency}</p>
                <p>Title to Content Consistency</p>
            </div>
        </div>
    </div>
  )
}
