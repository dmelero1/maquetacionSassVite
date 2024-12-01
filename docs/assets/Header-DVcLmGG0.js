(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function a(){return`
      <header>
        <div class="logo">
          <a href="pagina1.html">
            <img src="/src/assets/img/logo.png" alt="Logo" />
          </a>
        </div>
        <ul>
          <li><a href="pagina1.html">HOME</a></li>
          <li><a href="#">DISEÑOS</a></li>
          <li><a href="#">PRODUCTOS</a></li>
          <li><a href="#">RESEÑAS</a></li>
          <li><a href="#">CONTACTOS</a></li>
        </ul>
      </header>
    `}export{a as H};
