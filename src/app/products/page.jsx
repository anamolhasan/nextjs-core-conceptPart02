import React from 'react'

const ProductsPage = async() => {
    const res = await fetch('http://localhost:3000/api/items',{
      cache: 'force-cache'
    })
    const data = await res.json()
  return (
    <div>
      <ul className='text-3xl font-bold text-center py-5'>
        {
          data?.map((singleProduct) => {
            return <li key={singleProduct._id}>
              {singleProduct?.productName}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default ProductsPage