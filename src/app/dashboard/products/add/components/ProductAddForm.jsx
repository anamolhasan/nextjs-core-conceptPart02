"use client"

import { useRouter } from "next/navigation"

const ProductAddForm = () => {
    const router = useRouter()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = e.target 
        const productName = form.productName.value
        const payload = {productName}
        const res = await fetch('http://localhost:3000/api/items', {
            method: 'POST',
            body:JSON.stringify(payload),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const result = await res.json()
        console.log(result)
        form.reset()
        // alert('product added')
        router.push('/products')
        // router.refresh()
    }
  return (
    <div className="text-center py-5 font-bold">
        <form onSubmit={handleSubmit}>
            <input className="bg-white text-black p-2" type="text" name="productName" id="" placeholder='Product Name' />
            <button className="bg-blue-600 text-white p-2" type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ProductAddForm