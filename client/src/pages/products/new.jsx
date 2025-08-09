import React from 'react'

const CreateProduct = () => {
    return (
        <>
            <section className='w-full mx-auto px-4 py-4'>
                <form action="" className='flex flex-row justify-center'>
                    <legend>Create Product</legend>
                    <label htmlFor="">Product Name</label>
                    <input type="text" className='border border-gray-200' />
                    <label htmlFor="">Manufaturer Name</label>
                    <input type="text" className='border border-gray-200' />
                    <label htmlFor="">Price </label>
                    <input type="number" className='border border-gray-200' />
                    <button>
                        Submit
                    </button>
                </form>
            </section>
        </>
    )
}

export default CreateProduct