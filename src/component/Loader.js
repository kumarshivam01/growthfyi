import React from 'react'
import styled from 'styled-components'
export const Loader = () => {
  return (
    <Load>
        <center>
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 m-auto mt-10"></div>
        </center>
    </Load>
  )
}

const Load = styled.main`
    .loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
 
}

@-webkit-keyframes spinner {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
