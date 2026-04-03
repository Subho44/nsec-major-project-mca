import React from 'react'
import Servicecard from './Servicecard'


const About = () => {
    const courses = [
        {id:1, title:"web development"},
        {id:2, title:"app development"},
        {id:3, title:"ui/ux design"},

    ]
  return <>
  <div>
   {
    courses.map(x=>(
        <Servicecard key={x.id} title={x.title}/>
    ))
   }

  </div>
  
  
  </>
}

export default About