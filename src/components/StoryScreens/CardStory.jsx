import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Story = ({ story }) => {

    const [storie, setStorie] = useState([]);

    const editDate = (createdAt) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const d = new Date(createdAt);
        var datestring = d.getDate() + " " +monthNames[d.getMonth()] + " ," + d.getFullYear() 
        return datestring
    }

    const truncateContent = (content) => {
        const trimmedString = content.substr(0, 73);
        return trimmedString
    }
    const truncateTitle= (title) => {
        const trimmedString = title.substr(0, 69);
        return trimmedString
    }
    const ApproveBlog =async(id) => {
        const config = {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": `${localStorage.getItem("authToken")}`,
            },
          };
  
          const { data } = await axios.put(
            `http://localhost:5000/admin/approve-blog/${id}`,{},
            config
          );
            console.log(data);
          setStorie(data.msg);

    }
    
    return (

        <div className="story-card">
            <Link to={`/story/${story.slug}`} className="story-link">

               
                <div className="story-content-wrapper">

                    <h5 className="story-title">
                        
                    {story.title.length > 76 ? truncateTitle(story.title)+"..." : story.title
                    
                    }
                    </h5>


                    <p className="story-text"dangerouslySetInnerHTML={{__html : truncateContent( story.content) +"..."}}>
                        </p>
                    <p className="story-createdAt">{editDate(story.createdAt)} 
                    </p>
                    {/* <button onClick={()=>ApproveBlog(story._id)}>Approve</button>
                    <button>Report</button> */}
                </div>
            </Link>
        </div>

    )
}

export default Story;
