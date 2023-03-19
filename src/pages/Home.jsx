import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <div style={{height: '65vh'}} className="px-4 py-5 my-5 text-center">
  <h1 className="display-5 fw-bold">BrandShop</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">We offer best sales</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to='/products' ><button type="button" className="btn btn-primary btn-md px-4">Shop Now</button></Link>
    </div>
  </div>
  <img className='rounded-5 mt-5' style={{opacity: '.8'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwM4Bu0bAKKJS69JAsZkt8izQhLETlESrBPw&usqp=CAU" width={450} height={330} alt="Brand" />
</div>

  )
}

export default Home