import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    body { 
        background: #FFF;
        color: #343a40;
        font-family: "Open Sans", sans-serif;
    }
      
    a {
        color: #343a40;
        transition: 0.5s;

        &:hover {
            color: #0078FF;
            outline: none;
            text-decoration: none;
        }

        &:focus {
            color: #0078FF;
            outline: none;
            text-decoration: none;
        }

        &:active {
            color: #51d8af;
            outline: none;
            text-decoration: none;
        }


    }
      
      
    p {
        padding: 0;
        margin: 0 0 30px 0;
    }
      
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        margin: 0 0 20px 0;
        padding: 0;
    }

    .mt-md-5 {
        margin-top: 3rem;
    }
    .mt-4{
        margin-top: 1.5rem;
    }

    #particles-js {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
    }
    .overlay {
        background: rgba(0,0,0,0.7 );
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      
      .parallax-section {
        background-attachment: fixed !important;
        background-size: cover !important;
        overflow: hidden;
      }
    

    .menu-active {
        color: #006098;
    }

    .toggle,
    [id^=drop] {
        display: none;
    }

    @media all and (max-width : 991px) {
        #logo {
            display: block;
            padding: 0;
            text-align: center;
            float: none;
        }
    
        nav {
            margin: 0;
        }
    
        /* Hide the navigation menu by default */
        /* Also hide the  */
        .toggle+a,
        .menu {
            display: none;
        }
    
        /* Stylinf the toggle lable */
        .toggle {
            display: block;
            padding: 6px 12px;
            font-size: 14px;
            text-decoration: none;
            border: none;
            float: right;
            color: #000;
            font-weight: 550;
            letter-spacing: 1px;
            border: 1px solid #0078FF;
            margin-bottom: 0;
            cursor: pointer;
            -webkit-border-radius: 4px;
            -o-border-radius: 4px;
            -ms-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            transition: 0.5s all;
            -webkit-transition: 0.5s all;
            -moz-transition: 0.5s all;
            -o-transition: 0.5s all;
            -ms-transition: 0.5s all;
        }

        .toggle:hover {
            background-color: #0078FF;
            color: #FFF;
        }
    
        .menu .toggle {
            float: none;
            text-align: center;
            margin: auto;
            max-width: 120px;
            padding: 5px;
            font-size: 14px;
            letter-spacing: .5px;
            color: #202428;
            font-weight: 400;
            border: none;
        }
    
        /* Display Dropdown when clicked on Parent Lable */
        [id^=drop]:checked + ul {
            display: block;
            background: #fff;
            padding: 15px 0;
            text-align: center;
            width: 100%;
        }

        
    
        /* Change menu item's width to 100% */
        nav ul li {
            display: block;
            width: 100%;
            padding: 5px 0;
        }
    
        nav a:hover,
        nav ul ul ul a {
            background-color: transparent;
        }
    
        /* Hide Dropdowns by Default */
        nav ul ul {
            float: none;
            position: static;
            color: #fff;
            /* has to be the same number as the "line-height" of "nav a" */
        }
    
        /* Hide menus on hover */
        nav ul ul li:hover>ul,
        nav ul li:hover>ul {
            display: none;
        }
    
        /* Fisrt Tier Dropdown */
        nav ul ul li {
            display: block;
            width: 100%;
            padding: 0;
        }
    
        nav ul ul ul li {
            position: static;
            /* has to be the same number as the "width" of "nav ul ul li" */
        }
    
        nav ul ul li a {
            color: #000;
            font-size: 15px;
            padding: 0;
        }
    }

    .d-lg-flex {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    } 

    .justify-content-between {
        -webkit-box-pack: justify !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
    }

    .align-items-center {
        -webkit-box-align: center !important;
        -ms-flex-align: center !important;
        align-items: center !important;
    }

    .py-3 {
        padding-top: 1rem !important;
    }

    .px-sm-3 {
        padding-right: 1rem !important;
    }
    .px-sm-3 {
        padding-left: 1rem !important;
    }

    .header {
        display: block;
    }

    /*======= services ========== */
    .service-column {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(2, 1fr);
        text-align: left;
    }

    @media screen and (max-width: 580px) {

        .service-column {
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(1, 1fr);
            text-align: left;
        }
    }   


    /*=========== CARD ========== */
    .card {
        position: relative;
        max-width: 300px;
        height: auto;
        background: linear-gradient(-45deg, #fe0847, #feae3f);
        border-radius: 15px;
        margin: 0 auto;
        padding: 40px 20px;
        box-shadow: 0 10px 15px rgba(0,0,0,.4);
        transition: .5s;
        overflow: hidden;
    }

    .card:hover {
        transform: scale(1.1);
    }

    .col-sm-4:nth-child(1) .card,
    .col-sm-4:nth-child(1) .card .title .fa{
        background: linear-gradient(-45deg, #f403d1, #64b5f6);
    }

    .col-sm-4:nth-child(2) .card,
    .col-sm-4:nth-child(2) .card .title .fa{
        background: linear-gradient(-45deg, #ffec61, #f321d7);
    }

    .col-sm-4:nth-child(3) .card,
    .col-sm-4:nth-child(3) .card .title .fa {
        background: linear-gradient(-45deg, #24ff72, #9a4eff);
    }

    .card:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40%;
        background: rgba(255,255, 255, .1);
        z-index: 1;
        transform: skewY(-5deg) scale(1.5);
    }

    .card .title .fa{
        color: #fff;
        font-size: 40px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        line-height: 100px;
        box-shadow: 0 10px 10px rgba(0,0,0,0.3);
    }

    .card .title h2 {
        position: relative;
        margin: 20px 0 0;
        padding: 0;
        color: #fff;
        font-size: 28px;
        z-index: 2;
    }

    .card .price {
        position: relative;~
        z-index: 2;
    }

    .card .price h4 {
        margin: 0;
        padding: 20px 0;
        color: #fff;
        font-size: 40px;
    }

    .card .option {
        position: relative;
        z-index: 2;
    }

    .card .option ul {
        margin: 0;
        padding: 0;
    }

    .card .option ul li {
        margin: 0 0 10px;
        padding: 0;
        list-style: none;
        color: #fff;
        font-size: 14px;
    }

    .card a {
        position: relative;
        z-index: 2;
        background: #fff;
        color: #000;
        width: 150px;
        height: 40px;
        line-height: 40px;
        border-radius: 40px;
        display: block;
        text-align: center;
        margin: 20px auto 0;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        font-size: 14px;
    }


    

`;