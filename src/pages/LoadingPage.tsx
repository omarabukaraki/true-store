import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const LoadingPage = () => {
    return (
        <div className='h-[40rem] w-full flex flex-col justify-center place-items-center'>
            <OrbitProgress variant="track-disc" color="#959595" size="medium" text="Loading" textColor="#000000" />
        </div>
    )
}

export default LoadingPage
