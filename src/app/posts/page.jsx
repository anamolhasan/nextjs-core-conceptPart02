import React from 'react'

export const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

const Posts = async() => {
  const posts = await getPosts()
  return (
    <div className='grid grid-cols-4 gap-8 p-x7 py-9 '>
      {
        posts.map((singlePost) => {
          return (
            <div key={singlePost.id} className='border p-4'>
              <p>{singlePost.title}</p>
              <p>{singlePost.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Posts