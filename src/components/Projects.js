import React, { useState } from 'react'
import data from '../data';
import pic from '../1.png'

const Projects = () => {
  const [items, ] = useState(data)

  return (
    <>
      <section className="py-20 px-5 bg-green-800 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pt-32">
        {items.map((item) => {
          const { id,  desc } = item
          return (
            <div key={id}>
              <small className="block text-center text-white font-semibold text-lg">
                {desc}
              </small>
              <img src={pic} alt=""></img>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Projects