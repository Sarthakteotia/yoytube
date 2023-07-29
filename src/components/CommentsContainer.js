import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers'
import React from 'react'

const CommentData = [
    {
        name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[

        ]
    },
    {
        name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[
            
        ]
    },
    {
        name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[
            
        ]
    },
    {
        name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[
            {
                name: "Sarthak Teotia", 
                text: "Hello World",
                replies:[
                    
                ]
            }
        ]
    },
    {
        name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[
            
        ]
    },
    {
        name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[
            {
                name: "Sarthak Teotia", 
                text: "Hello World",
                replies:[
                    
                ]
            }
        ]
    },
    {
        name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[
            
        ]
    },
    {
        name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[
            
        ]
    },
    {
        name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[
            {
                name: "Sarthak Teotia", 
        text: "Hello World",
        replies:[
            {
                name: "Sarthak Teotia", 
                text: "Hello World",
                replies:[
                    {
                        name: "Sarthak Teotia", 
                        text: "Hello World",
                        replies:[
                            {
                                name: "Sarthak Teotia", 
                                text: "Hello World",
                                replies:[
                                    
                                ]
                            }
                        ]
                    }
                ]
            }
            ]
            }
            ]
    },
]

const Comment = ({data}) =>{
    const {name, text, replies} = data;
    return(
  <div className='px-3 flex'>
    <img className="h-8 w-8" alt="user" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
    <div>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>
  </div>
    )
}

const commentList=({comments})=>{
    return comments.map((Comment,index)=>(<Comment key={index} data={Comment} />))
}

const CommentsContainer = () => {
  return (
    <>
    <div>
        <h1 className='text-2xl font-bold'>Comments:</h1>
    </div>
    <div>
      <commentList comments={CommentData} />
    </div>
    </>
  )
}

export default CommentsContainer;