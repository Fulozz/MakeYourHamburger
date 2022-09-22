<template>
<footer id="footer" class="">
  <div class="foot">

    <h1 class="contact"> contate.Me </h1>
    <br>
    <br>
    <div class="social">
      <a href="https://www.instagram.com/th1ago.andrade/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <title>Instagram</title>
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" role="img" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon"
          data-tooltip="Instagram">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>

      </a>
      <a href="https://fulozz.github.io/portfolio/" target="_blank" rel="noreferrer" aria-label="GitHub">
        <title>GitHub</title>
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" role="img" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
          </path>
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/thiago-silva-andrade-4837731b1/" aria-label="Linkedin" target="_blank"
        rel="noreferrer">
        <title>LinkedIn</title>
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" role="img" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>

      <a href="https://www.youtube.com/channel/UCjv2wosiD2d36QtPytuYuNA" aria-label="youtube" target="_blank"
        rel="noreferrer">
        <title>Codepen</title>
        <svg role="img" viewBox="0 0 24 24" width="30px" height="30px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" class="social-icon">
          <title>CodePen</title>
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
          <line x1="12" y1="2" x2="12" y2="8.5"></line>
        </svg>
      </a>
    </div>
  </div>
</footer>

</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
#footer{
    height: 200px;
    width: 100%;
    background-color: #222;
    border-top: 4px solid #111;
    color: #FCBA03;
    display: flex;
    align-items: center;
    justify-content: center;
}
.social-icon{
    color: #fff;
    margin-right: 10px;
    margin-left: 10px;
    transform: .5s;
}
.social-icon:hover{
    color: #FCBA03;
}
.social{
  display: flex;
  justify-content: center;
  text-align: center;
}
.foot{
    text-align: center;
    justify-content: center;
}
.contact{
    color:#FCBA03 !important;
}
</style>


