import React from 'react'
import Project from './Project'

const Projectapp = () => {
    const postcard =[
        {
            id: 1,
            name: "Codecomm",
            description: "A social media environment designed for sharing of contents, exchanging information, ideas and engaging with other members online.",
            image: "photos/codecommHome.jpg"
    },
    {
        id: 2,
        name: "NCS",
        description: "I, along with my team, developed a voting portal for the Nigeria Computer Society. The app, constructed with HTML, Tailwind, and PHP as the backend language, serves as a testament to our collaborative effort.",
        image: "photos/ncs.jpg"
},
{
    id: 3,
    name: "Fastcare",
    description: "This application is a platform use to provide medical assistance to individuals remotely or in emergency situations without requiring a hospital visit.",
    image: "photos/fastcarepic.png"
}
];
  return (
    <div id='projectapp'>
        {postcard && <Project postcard={postcard} />}
    </div>
  )
}

export default Projectapp


