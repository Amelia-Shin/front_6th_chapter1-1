(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};function i({searchValue:e=``,categories:t=[],selectedCategory1:n=``,selectedCategory2:r=``,sort:i=`price_asc`,limit:a=20,loading:o=!1}){let s=()=>{let e=``,t=window.location.pathname;if(t.includes(`category1`)){let e=t.match(/category1=([^&/]+)/)[1];n=decodeURIComponent(e)}if(t.includes(`category2`)){let e=t.match(/category2=([^&/]+)/)[1];r=decodeURIComponent(e)}return e+=`<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>`,n&&(e+=`<span class="mx-1 text-gray-400">></span>`,e+=`<button data-breadcrumb="category1" class="text-xs hover:text-blue-800 hover:underline">${n}</button>`),r&&(e+=`<span class="mx-1 text-gray-400">></span>`,e+=`<button data-breadcrumb="category2" class="text-xs hover:text-blue-800 hover:underline">${r}</button>`),e},c=()=>{if(o)return`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`;let e=window.location.pathname;if(n){if(e.includes(`category1`)){let t=e.match(/category1=([^&/]+)/)[1];n=decodeURIComponent(t)}if(e.includes(`category2`)){let t=e.match(/category2=([^&/]+)/)[1];r=decodeURIComponent(t)}let i=t[n]?Object.keys(t[n]):[];return i.map(e=>`
            <button
              data-category1="${n}"
              data-category2="${e}"
              class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                ${r===e?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}"
            >
              ${e}
            </button>
          `).join(``)}else{let e=Array.isArray(t)?t:Object.keys(t||{});return e.map(e=>`
            <button
              data-category1="${e}"
              class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              ${e}
            </button>
          `).join(``)}},l=window.location.pathname;if(l.includes(`limit`)){let e=l.match(/limit=([^&/]+)/)[1];a=decodeURIComponent(e)}if(l.includes(`sort`)){let e=l.match(/sort=([^&/]+)/)[1];i=decodeURIComponent(e)}if(l.includes(`search`)){let t=l.match(/search=([^&/]+)/)[1];e=decodeURIComponent(t)}let u=[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}],d=[{value:`10`,label:`10개`},{value:`20`,label:`20개`},{value:`50`,label:`50개`},{value:`100`,label:`100개`}];return`
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <!-- 검색창 -->
        <div class="mb-4">
            <div class="relative">
            <input 
                type="text" 
                id="search-input" 
                placeholder="상품명을 검색해보세요..." 
                value="${e}" 
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
                </svg>
            </div>
            </div>
        </div>
        <!-- 필터 옵션 -->
        <div class="space-y-3">
            <!-- 카테고리 필터 -->
            <div class="space-y-2">
                <div class="flex items-center gap-2">
                    <label class="text-sm text-gray-600">카테고리:</label>
                    ${s()}
                </div>
                <div class="flex flex-wrap gap-2">${c()}</div>
            </div>

            <!-- 기존 필터들 -->
            <div class="flex gap-2 items-center justify-between">
            <!-- 페이지당 상품 수 -->
            <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">개수:</label>
                <select 
                    id="limit-select"
                    class="text-sm border border-gray-300 rounded px-2 py-1 
                           focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                ${d.map(e=>`
                    <option value="${e.value}" ${a===e.value?`selected`:``}>
                        ${e.label}
                    </option>
                    `).join(``)}
                </select>
            </div>

            <!-- 정렬 -->
            <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">정렬:</label>
                <select 
                    id="sort-select" 
                    class="text-sm border border-gray-300 rounded px-2 py-1
                           focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                ${u.map(e=>`
                    <option value="${e.value}" ${i===e.value?`selected`:``}>
                    ${e.label}
                    </option>
                `).join(``)}
                </select>
            </div>
            </div>
        </div>
        </div>
    `}function a({cartCount:e=0,title:t=`쇼핑몰`,showBackButton:n=!1}){let r=n?`
        <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      `:``,i=e>0?`
        <span
        class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
        >
        ${e}
        </span>
    `:``;return`
        <header class="bg-white shadow-sm sticky top-0 z-40">
            <div class="max-w-md mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        ${r}
                        <h1 class="text-xl font-bold text-gray-900">
                            <a href="/" data-link="">${t}</a>
                        </h1>
                    </div>
                    <div class="flex items-center space-x-2">
                    <!-- 장바구니 아이콘 -->
                    <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                            ></path>
                        </svg>
                        ${i}
                    </button>
                    </div>
                </div>
            </div>
        </header>
    `}function o(){return`
        <footer class="bg-white shadow-sm sticky top-0 z-40">
            <div class="max-w-md mx-auto py-8 text-center text-gray-500">
                <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
            </div>
        </footer>
    `}function s({content:e,cartCount:t=0,showBackButton:n=!1,title:r=`쇼핑몰`}){return`
        <div class="min-h-screen bg-gray-50">
            ${a({cartCount:t,title:r,showBackButton:n})}
            <main class="max-w-md mx-auto px-4 py-4">
                ${e}
            </main>
            ${o()}
        </div>
    `}function c({product:e}){let{productId:t,image:n,title:r,lprice:i,mallName:a=``}=e;return`
      <div
        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
        data-product-id="${t}"
      >
        <!-- 상품 이미지 -->
        <div
          class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image"
          data-product-link="${t}"
        >
          <img
            src="${n}"
            alt="${r}"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>
        <!-- 상품 정보 -->
        <div class="p-3">
          <div class="cursor-pointer product-info mb-3" data-product-link="${t}">
            <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${r}</h3>
            <p class="text-xs text-gray-500 mb-2">${a}</p>
            <p class="text-lg font-bold text-gray-900">${parseInt(i).toLocaleString()}원</p>
          </div>
          <!-- 장바구니 버튼 -->
          <button
            class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                 hover:bg-blue-700 transition-colors add-to-cart-btn"
            data-product-id="${t}"
          >
            장바구니 담기
          </button>
        </div>
      </div>
    `}function l({count:e=4}){let t=Array.from({length:e},()=>`
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
            <div class="aspect-square bg-gray-200"></div>
            <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
            </div>
        </div>
    `).join(``);return`<div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">${t}</div>`}function u(){return`
        <div class="text-center py-4">
            <div class="inline-flex items-center">
            <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
            </div>
        </div>
    `}function d({products:e=[],total:t=0,loading:n=!1,hasNext:r=!0}){let i=()=>n&&e.length===0?l({count:4}):e.length===0?`
        <div class="col-span-2 text-center py-8 text-gray-500">
          상품이 없습니다.
        </div>
      `:`
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
                ${e.map(e=>c({product:e})).join(``)}
            </div>
        `,a=()=>n&&e.length>0?u():!r&&e.length>0?`
                <div class="text-center py-4 text-sm text-gray-500">
                    모든 상품을 확인했습니다
                </div>
            `:``;return`
        <div class="mb-6">
            <div>
                <!-- 상품 개수 정보 -->
                ${n?``:`
                    <div class="mb-4 text-sm text-gray-600">
                        총 <span class="font-medium text-gray-900">${t}개</span>의 상품
                    </div>
                `}
                ${i()}
                ${a()}
            </div>
        </div>
    `}async function f(e={}){let{page:t=1,limit:n=20,search:r=``,category1:i=``,category2:a=``,sort:o=`price_asc`}=e,s=new URLSearchParams({page:t.toString(),limit:n.toString(),...r&&{search:r},...i&&{category1:i},...a&&{category2:a},sort:o}),c=await fetch(`/api/products?${s}`);return await c.json()}async function p(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function m(){let e=await fetch(`/api/categories`);return await e.json()}const h=()=>{E(T)};window.addEventListener(`popstate`,h);const g=`/front_6th_chapter1-1`,_={navigateTo:e=>{window.history.pushState({},``,`${g}${e}`),h()}},v=(e=window.location.pathname)=>e.startsWith(g)?e.slice(21)||`/`:e;var y=_;function b({productInfo:e}){console.log(e);let t=e=>{let t=Math.floor(e),n=5-Math.ceil(e),r=``;for(let e=0;e<t;e++)r+=`
            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          `;for(let e=0;e<n;e++)r+=`
            <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          `;return r};return`
  <!-- 브레드크럼 -->
  <nav class="mb-4">
    <div class="flex items-center space-x-2 text-sm text-gray-600">
      <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
      <button class="breadcrumb-link" data-category1="${e.category1}">
      ${e.category1}
      </button>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
      <button class="breadcrumb-link" data-category2="${e.category2}">
      ${e.category2}
      </button>
    </div>
  </nav>
  <!-- 상품 상세 정보 -->
  <div class="bg-white rounded-lg shadow-sm mb-6">
    <!-- 상품 이미지 -->
    <div class="p-4">
      <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover product-detail-image">
      </div>
      <!-- 상품 정보 -->
      <div>
        <p class="text-sm text-gray-600 mb-1"></p>
        <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
        <!-- 평점 및 리뷰 -->
        <div class="flex items-center mb-3">
          <div class="flex items-center">
            ${t(e.rating)}
          </div>
          <span class="ml-2 text-sm text-gray-600">${e.rating} (${e.reviewCount}개 리뷰)</span>
        </div>
        <!-- 가격 -->
        <div class="mb-4">
          <span class="text-2xl font-bold text-blue-600">${e.lprice}원</span>
        </div>
        <!-- 재고 -->
        <div class="text-sm text-gray-600 mb-4">
          재고 ${e.stock}개
        </div>
        <!-- 설명 -->
        <div class="text-sm text-gray-700 leading-relaxed mb-6">
          ${e.description}
        </div>
      </div>
    </div>
    <!-- 수량 선택 및 액션 -->
    <div class="border-t border-gray-200 p-4">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm font-medium text-gray-900">수량</span>
        <div class="flex items-center">
          <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
             rounded-l-md bg-gray-50 hover:bg-gray-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <input 
            type="number" 
            id="quantity-input" 
            value="1" 
            min="1"
            max="${e.stock}" 
            class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
          <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
             rounded-r-md bg-gray-50 hover:bg-gray-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- 액션 버튼 -->
      <button id="add-to-cart-btn" data-product-id="${e.productId}" 
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
            hover:bg-blue-700 transition-colors font-medium">
        장바구니 담기
      </button>
    </div>
  </div>
  <!-- 상품 목록으로 이동 -->
  <div class="mb-6">
    <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
      hover:bg-gray-200 transition-colors go-to-product-list">
      상품 목록으로 돌아가기
    </button>
  </div>
  <!-- 관련 상품 -->
  <div class="bg-white rounded-lg shadow-sm">
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
      <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
    </div>
    <div class="p-4">
      <div class="grid grid-cols-2 gap-3 responsive-grid">
        <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="86940857379">
          <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
            <img src="https://shopping-phinf.pstatic.net/main_8694085/86940857379.1.jpg" alt="샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이" class="w-full h-full object-cover" loading="lazy">
          </div>
          <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이</h3>
          <p class="text-sm font-bold text-blue-600">230원</p>
        </div>
        <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="82094468339">
          <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
            <img src="https://shopping-phinf.pstatic.net/main_8209446/82094468339.4.jpg" alt="실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제" class="w-full h-full object-cover" loading="lazy">
          </div>
          <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제</h3>
          <p class="text-sm font-bold text-blue-600">280원</p>
        </div>
      </div>
    </div>
  </div>
</main>
<footer class="bg-white shadow-sm sticky top-0 z-40">
  <div class="max-w-md mx-auto py-8 text-center text-gray-500">
    <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
  </div>
</footer>
</div>
`}const x=(e=100)=>{let{scrollTop:t,scrollHeight:n,clientHeight:r}=document.documentElement;return t+r>=n-e},S=e=>{let t=!1;return()=>{t||(t=!0,requestAnimationFrame(()=>{e(),t=!1}))}},C=({onLoadMore:e,threshold:t=100,shouldLoad:n=()=>!0})=>{let r=()=>{x(t)&&n()&&e()},i=S(r);return window.addEventListener(`scroll`,i,{passive:!0}),()=>{window.removeEventListener(`scroll`,i)}};function w(){return`
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>
        
        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
        
        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        
        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
        
        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>
      
      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
  `}const T={products:[],total:0,loading:!1,categories:[],categoriesLoading:!1,searchValue:``,selectedCategory1:``,selectedCategory2:``,selectedSort:`price_asc`,selectedLimit:20,currentPage:1,isLoadingMore:!1,hasNext:!0,cartCount:0};let E=async function(e){let t=document.body.querySelector(`#root`),n=v(window.location.pathname),r=n.match(/^\/product\/(.+)$/),a;if(n===`/`||n===``||n.includes(`limit`)||n.includes(`sort`)||n.includes(`search`)||n.includes(`category`))a=s({content:`
        ${i({searchValue:e.searchValue,categories:e.categories,selectedCategory1:e.selectedCategory1,selectedCategory2:e.selectedCategory2,sort:e.selectedSort,limit:e.selectedLimit,loading:e.categoriesLoading})}
        ${d({products:e.products,total:e.total,loading:e.loading,hasNext:e.hasNext})}
        `,cartCount:e.cartCount,showBackButton:!1,title:`쇼핑몰`});else if(r){let t=n.split(`/`)[2],r=await p(t);e.productDetail=r,a=s({content:`${b({productInfo:r})}`,cartCount:e.cartCount,showBackButton:!0,title:`상품 상세`})}else a=s({content:`${w()}`,title:`쇼핑몰`});t.innerHTML=a};async function D(){T.loading=!0,T.categoriesLoading=!0,T.cartCount=localStorage.getItem(`cartCount`),E(T);let e=window.location.pathname;if(e.includes(`sort`)){let t=e.match(/sort=([^&/]+)/);t&&(T.selectedSort=t[1])}if(e.includes(`limit`)){let t=e.match(/limit=([^&/]+)/);t&&(T.selectedLimit=t[1])}let[{products:t,pagination:{total:n}},r]=await Promise.all([f({sort:T.selectedSort,limit:T.selectedLimit}),m()]);T.products=t,T.total=n,T.loading=!1,T.categories=r,T.categoriesLoading=!1,E(T)}const O=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-YiGTYyvf.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));O().then(D);function k(){document.querySelectorAll(`[data-category1]:not([data-category2])`).forEach(e=>{e.onclick=e=>{if(T.selectedCategory1=e.target.getAttribute(`data-category1`),T.selectedCategory2=``,e.target.matches(`[data-category1]:not([data-category2])`)){let t=e.target.getAttribute(`data-category1`);y.navigateTo(`/category1=${encodeURIComponent(t)}`)}}}),document.querySelectorAll(`[data-category2]`).forEach(e=>{e.onclick=e=>{if(T.selectedCategory1=e.target.getAttribute(`data-category1`),T.selectedCategory2=e.target.getAttribute(`data-category2`),e.target.matches(`[data-category2]`)){let t=e.target.getAttribute(`data-category1`),n=e.target.getAttribute(`data-category2`);y.navigateTo(`/category1=${encodeURIComponent(t)}&category2=${encodeURIComponent(n)}`)}}});let e=document.querySelector(`[data-breadcrumb='category1']`);e&&(e.onclick=e=>{let t=e.target.getAttribute(`data-category1`);!t&&e.target.closest(`[data-category1]`)&&(t=e.target.closest(`[data-category1]`).getAttribute(`data-category1`)),t&&y.navigateTo(`/category1=${encodeURIComponent(t)}`),T.selectedCategory1=e.target.getAttribute(`data-category1`),T.selectedCategory2=``});let t=document.getElementById(`limit-select`);t&&(t.onchange=e=>{let t=e.target.value;j({limit:t,page:T.currentPage}),T.selectedLimit=Number(t),y.navigateTo(`/limit=${encodeURIComponent(T.selectedLimit)}`)});let n=document.getElementById(`sort-select`);n&&(n.onchange=e=>{let t=e.target.value;T.selectedSort=t,j({sort:T.selectedSort,page:T.currentPage}),y.navigateTo(`/sort=${encodeURIComponent(T.selectedSort)}`)});let r=document.getElementById(`search-input`);r&&(r.addEventListener(`keydown`,e=>{let t=e.target.value.trim();t!==``&&e.key===`Enter`&&(j({search:t,page:T.currentPage}),T.searchValue=t,y.navigateTo(`/search=${encodeURIComponent(t)}`))}),document.body.addEventListener(`click`,e=>{if(!e._productLinkHandled){let t=e.target.closest(`[data-product-link]`);if(t){e.preventDefault(),e._productLinkHandled=!0;let n=t.getAttribute(`data-product-link`);y.navigateTo(`/product/${n}`)}}}));let i=document.getElementById(`product-list`)||document.body;i._cartListenerAttached!==!0&&(i.addEventListener(`click`,e=>{let t=e.target.closest(`.add-to-cart-btn`);if(t){e.preventDefault();let t=Number(localStorage.getItem(`cartCount`))||0,n=t+1;localStorage.setItem(`cartCount`,n),E(T)}}),i._cartListenerAttached=!0)}const A=E;E=function(...e){let t=A.apply(this,e);return k(),t};const j=async({limit:e=20,sort:t=`price_asc`,search:n=``,page:r=1})=>{T.loading=!0,T.isLoadingMore=!0;try{let{products:i,pagination:{total:a,page:o,hasNext:s}}=await f({limit:e,sort:t,search:n,page:r});T.currentPage===o?(T.products=i,T.loading=!1):T.products=[...T.products,...i],T.isLoadingMore=!1,T.total=a,T.currentPage=o,T.hasNext=s,T.selectedSort=t,T.selectedLimit=e,E(T)}catch(e){T.loading=!1,console.log(e)}},M=()=>C({onLoadMore:()=>{j({limit:T.selectedLimit,sort:T.selectedSort,search:T.searchValue,page:Number(T.currentPage)+1})},threshold:100,shouldLoad:()=>!T.isLoadingMore&&T.hasNext});M();