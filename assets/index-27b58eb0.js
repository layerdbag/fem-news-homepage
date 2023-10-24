(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function c(t){const a=document.querySelector(".menu-open"),i=document.querySelector(".menu-close");a.addEventListener("click",()=>{t.classList.add("open-nav")}),i.addEventListener("click",()=>{t.classList.remove("open-nav")})}document.querySelector("#app").innerHTML=`
  <div class='wrapper'>
    <h1 class='visually-hidden'>News Homepage</h1>
    <header>
      <a href='#' class='logo'>
        <svg width="65" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M23.016 39.2c.317 0 .574-.093.77-.28.196-.187.294-.457.294-.812v-1.82c0-.448.033-.84.098-1.176.065-.336.145-.663.238-.98l5.09-18.122 4.822 18.57c.112.384.193.682.243.895l.023.099c.047.215.07.453.07.714v1.82c0 .355.098.625.294.812.196.187.453.28.77.28h10.696c.299 0 .55-.093.756-.28.205-.187.308-.457.308-.812v-1.82c0-.373.023-.705.07-.994.047-.29.135-.677.266-1.162L54.04 7.224c.299-1.25.765-2.254 1.4-3.01.635-.756 1.363-1.311 2.184-1.666l.672-.308c.336-.168.574-.331.714-.49.14-.159.21-.369.21-.63 0-.336-.117-.607-.35-.812C58.637.103 58.287 0 57.82 0h-8.904c-.467 0-.817.103-1.05.308-.233.205-.35.476-.35.812 0 .261.06.471.182.63.121.159.313.303.574.434l.616.224c1.12.41 1.871.999 2.254 1.764s.453 1.661.21 2.688l-5.535 23.486-6.477-25.81c-.133-.58-.17-1.018-.11-1.31l.026-.104c.093-.29.317-.49.672-.602l1.232-.336c.299-.112.518-.257.658-.434a.986.986 0 0 0 .21-.63c0-.355-.112-.63-.336-.826C41.468.098 41.122 0 40.656 0H24.78c-.448 0-.789.098-1.022.294-.233.196-.35.471-.35.826 0 .224.06.415.182.574.121.159.322.294.602.406l1.176.42c.261.093.462.243.602.448.14.205.294.607.462 1.204l1.751 6.742-5.553 19.475L16.128 4.48c-.147-.49-.194-.898-.14-1.223l.028-.135c.093-.345.327-.574.7-.686l1.456-.336c.504-.168.756-.504.756-1.008 0-.336-.112-.602-.336-.798C18.368.098 18.022 0 17.556 0H1.344C.896 0 .56.098.336.294.112.49 0 .756 0 1.092c0 .224.056.434.168.63.112.196.29.35.532.462l1.232.392c.355.13.625.308.812.532.187.224.345.579.476 1.064l7.84 30.408c.112.43.191.751.238.966.047.215.07.462.07.742v1.82c0 .355.103.625.308.812.205.187.467.28.784.28h10.556Zm34.804.7c1.195 0 2.263-.29 3.206-.868a6.338 6.338 0 0 0 2.24-2.338c.55-.98.826-2.04.826-3.178 0-1.157-.275-2.212-.826-3.164a6.325 6.325 0 0 0-2.24-2.282c-.943-.57-2.011-.854-3.206-.854-1.157 0-2.207.285-3.15.854a6.325 6.325 0 0 0-2.24 2.282c-.55.952-.826 2.007-.826 3.164 0 1.139.275 2.198.826 3.178.55.98 1.297 1.76 2.24 2.338.943.579 1.993.868 3.15.868Z" fill="#00001A"/></svg>
      </a>
      <nav>
        <button class='menu-close'>
          <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
        </button>
        <ul class='primary-nav'>
          <li><a href='/'>Home</a></li>
          <li><a href='/#new'>New</a></li>
          <li><a href='/#popular'>Popular</a></li>
          <li><a href='/#trending'>Trending</a></li>
          <li><a href='/#categories'>Categories</a></li>
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
              <source srcset="./assets/images/image-web-3-mobile.jpg" 
              media="(max-width: 43.5em)">
              <img src="./assets/images/image-web-3-desktop.jpg" 
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
              <img src='./assets/images/image-retro-pcs.jpg' alt=''
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
            <img src='./assets/images/image-top-laptops.jpg' alt=''
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
            <img src='./assets/images/image-gaming-growth.jpg' alt=''
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
`;c(document.querySelector("nav"));
