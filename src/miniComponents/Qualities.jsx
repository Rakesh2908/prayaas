import React from 'react'

const Qualities = () => {

  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Prayaas is deeply committed to fostering a sense of community and belonging among the children we serve. By organizing educational workshops, recreational activities, and skill development programs, we aim to build a supportive environment where every child can thrive and feel valued. Our efforts are directed towards creating a holistic community that nurtures growth, learning, and mutual support.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "We believe that trust is the foundation of effective social work. Prayaas maintains complete transparency in all its operations, ensuring that every resource, donation, and effort is accounted for and directed towards its intended purpose. Regular updates, open communication channels, and transparent financial practices ensure that our stakeholders are always informed and involved.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "To ensure that our initiatives are truly making a difference, Prayaas places a strong emphasis on impact measurement. We continuously assess the outcomes of our programs through feedback, surveys, and performance metrics. This helps us to understand the effectiveness of our interventions and to refine our strategies for maximum positive impact on the lives of the children we support.",
    },
  ];

  return (
    <div className='qualities'>
      <h2>OUR QUALITIES</h2>
      <div className="container">
        {qualities.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="img-wrapper">
                <img src={element.image} alt={element.title}/>
              </div>
              <div className="content">
                <p className="title">{element.title}</p>
                <p className="description">{element.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Qualities