import React from 'react'
import profile_picture from '../assets/profile.jpg'

const CoverSection = () => {
  return (
    <section className="w-screen h-screen bg-cover flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src={profile_picture} alt="piyawutcha.github.io" className="w-52 rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-3">
          <div className="text-6xl font-light">
            Piyawut Chantasrisawat
          </div>
          <div className="text-6xl font-light mt-2">
            (Benz)
          </div>
          <div className="text-4xl font-extralight mt-2">
            Software Developer based in Sydney, Australia
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoverSection