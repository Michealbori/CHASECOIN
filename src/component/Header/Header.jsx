import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <>
                     
    {/* <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class=" Logo navbar-brand animate__animated animate__backInDown"> <img src="/Chase.png" alt="Logo" />
        </a>
        <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> <a class=" Logo navbar-brand"> <img src="/Chase.png" alt="Logo" /> </a></h5>
            <button type="button" class="btn-close  shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item mx-2 design">
                <a class="nav-link active" aria-current="page" id='Navtext' href="#SERVICES">Home</a>
              </li>
              <li class="nav-item mx-2 design">
                <a class="nav-link active" id='PLUS' aria-current="page">+</a>
              </li>
              <li class="nav-item mx-2 design">
                <a class="nav-link active" id='Navtext'  href="#LOCATION">  CONNECT </a>
              </li>
              <li class="nav-item mx-2 design">
                <a class="nav-link active" id='PLUS' aria-current="page">+</a>
              </li>
              <li class="nav-item mx-2 design">
                <a class="nav-link active" id='Navtext'  href="#DISCOVER"> ABOUT </a>
              </li>
              
            </ul>
             <div class="d-flex justify-content-center align-items-center">
              <a href="" class=" Start text-decoration-none">
                   <span  className='JoinLinks'>JOIN NOW <img src="/arrow-up.png" alt="" /> </span>
                  </a>
             </div>

          </div>
        </div>
      </div>
    </nav> */}

<nav class="navbar navbar-expand-lg fixed-top"  style={{ marginBottom: 30}}>
        <div class="container">
            <a class="navbar-brand me-auto" href="#">
            <img src="/Chase.png" alt="Logo" style={{ width: 90 }} />
            </a>

            <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                {" "}
                <img src="/Chase.png" alt="Logo" style={{ width: 90 }} />
                </h5>
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                ></button>
            </div>
            <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item mx-2 design">
                <a class="nav-link active" aria-current="page" id='Navtext' href="#SERVICES">Home</a>
              </li>
              <li class="nav-item mx-2 design">
                <a class="nav-link active" id='PLUS' aria-current="page">+</a>
              </li>
              <li class="nav-item mx-2 design">
                <a class="nav-link active" id='Navtext'  href="#LOCATION">  CONNECT </a>
              </li>
              <li class="nav-item mx-2 design">
                <a class="nav-link active" id='PLUS' aria-current="page">+</a>
              </li>
              <li class="nav-item mx-2 design">
                <a class="nav-link active" id='Navtext'  href="#DISCOVER"> ABOUT </a>
              </li>
              
            </ul>
            </div>
            </div>
            {/* <div class="d-flex justify-content-center align-items-center">
              <a href="" class=" Start text-decoration-none">
                   <span  className='JoinLinks'>JOIN NOW <img src="/arrow-up.png" alt="" /> </span>
                  </a>
             </div> */}
            <span className="JoinLinks">
            JOIN NOW
            </span>
            <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        </nav>
    </>
  )
}
