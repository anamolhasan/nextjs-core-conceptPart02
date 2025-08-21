import React from 'react'

export const getSinglePost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json()
    return data
}


export const generateMetadata = async({params}) => {
    // read on params
    const id = (await params).id
    // fetch data
    const singlePost = await getSinglePost(id)
  return {
    title:singlePost.title,
    description:singlePost.body
  }
}



const singlePost = async({params}) => {
    const p = await params
    const singlePost = await getSinglePost(p.id) 
  return (
    <div className='text-center pt-5 m-24'>
        <h1 className='font-bold'>{singlePost.title}</h1>
        <p>{singlePost.body}</p>
    </div>
  )
}

export default singlePost