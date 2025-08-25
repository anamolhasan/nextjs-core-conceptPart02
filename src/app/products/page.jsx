import dbConnect from '@/lib/dbConnect'
import { redirect } from 'next/navigation'
import React from 'react'
import { getProducts } from '../actions/products/getProducts'

// export const dynamic = 'force-dynamic'

const ProductsPage = async() => {
  // const res = await fetch('http://localhost:3000/api/items',{
  //   cache: 'force-cache'
  // })
  // const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env
  //   const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`)
  //   const data = await res.json()

    // ---- conditional for redirect
    // if(data.length > 3){
    //       redirect('/')
    // }

   const data = await getProducts()

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