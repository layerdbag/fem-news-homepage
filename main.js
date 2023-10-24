import { toggleMenu } from './helper'
import './styles/style.css'

document.querySelector('#app').innerHTML = `
  <div class='wrapper'>
    <h1 class='visually-hidden'>News Homepage</h1>
    <header>
      <a href='./#' class='logo'>
        <img src='../assets/images/logo.svg' alt='brand logo' />
      </a>
      <nav>
        <button class='menu-close'>
          <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
        </button>
        <ul class='primary-nav'>
          <li><a href='./'>Home</a></li>
          <li><a href='./#new'>New</a></li>
          <li><a href='./#popular'>Popular</a></li>
          <li><a href='./#trending'>Trending</a></li>
          <li><a href='./#categories'>Categories</a></li>
        </ul>
      </nav>

          <button class='menu-open'>
            <svg width="40" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
          </button>
    </header>
    <main>
      <div class='main-box'>
        <article>
          <div class='main-media'>
            <picture>
              <source srcset="../assets/images/image-web-3-mobile.jpg" 
              media="(max-width: 43.5em)">
              <img src="../assets/images/image-web-3-desktop.jpg" 
              alt="" 
              class='main-media__img'
             >
            </picture>
            <div class='main-media__box'>
              <h2 class='main-media__title'>
                The Bright Future of Web 3.0?
              </h2>
              <div class='main-media__sub'>
                <p class='main-media__content'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                  But is it really fulfilling its promise?</p>
                <button class='main-media__btn'>Read more</button>
              </div>
            </div>
          </div>
        </article>
        <aside class='new' id='new'>
          <h2 class='feature-header'>New</h2>
          <ul class='feature'>
            <li>
              <div class='feature-box'>
              <h3 class='feature__title'>
                <a href='#'>Hydrogen VS Electric Cars</a>
              </h3>
              <p class='feature__content'>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
            </li>
            <li>
            <div class='feature-box'>
              <h3 class='feature__title'><a href='#'>The Downsides of AI Artistry</a></h3>
              <p class='feature__content'> What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            </li>
            <li>
            <div class='feature-box'>
              <h3 class='feature__title'><a href='#'>Is VC Funding Drying Up?</a></h3>
              <p class='feature__content'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
            </li>
          </ul>
        </aside>
      </div>
      <article class='sub' id='trending'>
        <ul class='sub-media'>
          <li>
            <div class='media-box'>
              <img src='../assets/images/image-retro-pcs.jpg' alt=''
              class='sub-media__img' />
              <div class='sub-box'>
              <h2 class='sub-media__title'>01</h2>
              <h3 class='sub-media__subtitle'><a href='#'>Reviving Retro PCs</a></h3>
              <p class='sub-media__content'>What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>
          </li>
          <li>
          <div class='media-box'>
            <img src='../assets/images/image-top-laptops.jpg' alt=''
            class='sub-media__img' />
            <div class='sub-box'>
              <h2 class='sub-media__title'>02</h2>
              <h3 class='sub-media__subtitle'><a href='#'>Top 10 Laptops of 2022</a></h3>
              <p class='sub-media__content'>Our best picks for various needs and budgets.</p>
            </div>
            </div>
          </li>
          <li>
          <div class='media-box'>
            <img src='../assets/images/image-gaming-growth.jpg' alt=''
            class='sub-media__img' />
            <div class='sub-box'>
              <h2 class='sub-media__title'>03</h2>
              <h3 class='sub-media__subtitle'><a href='#'>The Growth of Gaming</a></h3>
              <p class='sub-media__content'>How the pandemic has sparked fresh opportunities.</p>
            </div>
            </div>
          </li>
        </ul>
      </article>
    </main>
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/layerdbag" target='_blank'>layerdbag</a>.
  </div> 
  </div>
`

toggleMenu(document.querySelector('nav'));

