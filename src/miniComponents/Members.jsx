import React from 'react'

const Members = () => {

  const members = [
    {id: 1, image: "/m1.jpg"},
    {id: 2, image: "/m2.jpg"},
    {id: 3, image: "/m3.jpg"},
    {id: 4, image: "/m4.jpg"},
    {id: 5, image: "/m5.jpg"},
    {id: 6, image: "/m6.jpg"},
    {id: 7, image: "/m7.jpg"},
  ]

  return (
    <div>
      <section className='members'>
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">Gallery</h2>
          </div> 
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Members