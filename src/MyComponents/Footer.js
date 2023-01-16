import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position: "relative",
        width: "100%",
        top: "30vh",
    }
  return (
    <footer className='bg-dark text-light py-3' style={footerstyle}>
        <p className='text-center'>CopyRight &copy; 2023</p>

    </footer>
  )
}

export default Footer
