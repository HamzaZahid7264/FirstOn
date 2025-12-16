import React from 'react'
import {Bookmark} from 'lucide-react'

export const JobCards = () => {
    const jobOpenings = [
  {
   
    companyName: "Amazon",
    companyLogo: "https://www.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=199&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "3 days ago",
    jobRole: "Frontend Developer",
    workType: "Full Time",
    level: "Junior",
    pricePerHour: "$30/hr"
  },
  {
   
    companyName: "Google",
    companyLogo: "https://www.bing.com/th/id/OIP.DoYuESoRecI9l-vyqdrEnQHaE-?w=259&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "1 week ago",
    jobRole: "Backend Developer",
    workType: "Part Time",
    level: "Senior",
    pricePerHour: "$50/hr"
  },
  {
    
    companyName: "Microsoft",
    companyLogo: "https://www.bing.com/th/id/OIP.ihabIiVh1TA5oaTAcI6BEQHaE8?w=228&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "2 weeks ago",
    jobRole: "Software Engineer",
    workType: "Full Time",
    level: "Mid Level",
    pricePerHour: "$45/hr"
  },
  {
    
    companyName: "Meta",
    companyLogo: "https://www.bing.com/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?w=192&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "5 days ago",
    jobRole: "React Developer",
    workType: "Contract",
    level: "Senior",
    pricePerHour: "$55/hr"
  },
  {
   
    companyName: "Netflix",
    companyLogo: "https://www.bing.com/th/id/OIP.-M_GY7Ris6IBZ7dDqjvAWQHaHa?w=160&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "4 days ago",
    jobRole: "UI/UX Engineer",
    workType: "Full Time",
    level: "Mid Level",
    pricePerHour: "$48/hr"
  },
  {
    
    companyName: "Apple",
    companyLogo: "https://www.bing.com/th/id/OIP.6x6s1sTIRrU8my_FCLwPqwHaFj?w=212&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "1 day ago",
    jobRole: "iOS Developer",
    workType: "Full Time",
    level: "Senior",
    pricePerHour: "$60/hr"
  },
  {
    
    companyName: "Tesla",
    companyLogo: "https://www.bing.com/th/id/OIP.m1ar389tpEOAFN1NTurqvwHaHa?w=196&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "6 days ago",
    jobRole: "Full Stack Developer",
    workType: "Full Time",
    level: "Mid Level",
    pricePerHour: "$52/hr"
  },
  {
    
    companyName: "Spotify",
    companyLogo: "https://www.bing.com/th/id/OIP.OW955xQf461MlcUJ7s9v3gHaEN?w=215&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "2 days ago",
    jobRole: "Backend Engineer",
    workType: "Part Time",
    level: "Junior",
    pricePerHour: "$28/hr"
  },
  {
    
    companyName: "Adobe",
    companyLogo: "https://www.bing.com/th/id/OIP.MPHAVL52hadir7pe0HszoAHaEK?w=366&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "3 weeks ago",
    jobRole: "Software Developer",
    workType: "Contract",
    level: "Senior",
    pricePerHour: "$58/hr"
  },
  {
    
    companyName: "LinkedIn",
    companyLogo: "https://www.bing.com/th/id/OIP.giEfoXvjjpl2Qu6-nQQP2AHaHa?w=195&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    postedTime: "1 week ago",
    jobRole: "Frontend Engineer",
    workType: "Full Time",
    level: "Junior",
    pricePerHour: "$32/hr"
  }
];

  return (
    <div className='parent'>
        {
            jobOpenings.map((item)=>{
                return(
             <div className='card'>
         <div>
          <div className='top'>
          <img src={item.companyLogo} alt=""  />
          <button>Save <Bookmark size={13} /> </button>

           </div>

        <div className='main'>
          <h3 >{item.companyName} <span>{item.postedTime}</span></h3>
          <h2> {item.jobRole}</h2>
          <div className='tag'>
            <h4>{item.workType} </h4>
            <h4> {item.level}</h4>
          </div>
        </div>
      </div>
        <div className='bottom'>
          <div>
          <h3> {item.pricePerHour} </h3>
          <p>Kabul, Afghanistan</p>
          </div>
          <button>Applay Now</button>

        </div>

    </div>
                )
            })
            }
        
    </div>
  )
  
}
