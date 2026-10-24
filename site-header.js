(function () {
  const mount = document.getElementById('siteHeader');
  if (!mount) {
    throw new Error('Missing site header mount element.');
  }

  mount.insertAdjacentHTML('beforebegin', `
    <!-- TOP ANNOUNCEMENT BAR -->
    <div class="bg-black text-white text-[11px] tracking-widest uppercase py-2 px-4">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center gap-1 font-medium">
        <span id="topBarTagline" class="text-neutral-300">Vietnam France Financial &amp; Construction Consulting LLC • Est. 2019</span>
        <div class="flex items-center gap-4 text-neutral-400">
          <span id="topBarOffices">Hanoi &amp; Ho Chi Minh City</span>
          <span class="hidden sm:inline">•</span>
          <a href="tel:+84949385538" class="text-white hover:underline">(+84) 949 38 55 38</a>
          <span class="hidden sm:inline">•</span>
          <a href="mailto:trangbtt@vffc.vn" class="text-white hover:underline">trangbtt@vffc.vn</a>
        </div>
      </div>
    </div>

    <!-- STICKY TOP NAVBAR -->
    <header id="header" class="sticky top-0 z-40 glass-nav hairline-b transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- BRAND LOGO -->
          <a href="#header" id="brandLogoLink" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-lg tracking-tighter transition-transform group-hover:scale-95 shadow-sm">
              VF
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold tracking-tight text-black flex items-center gap-1">
                VFFC<span class="text-xs font-light text-neutral-400">.vn</span>
              </span>
              <span id="brandSubtitle" class="text-[9px] uppercase tracking-widest text-neutral-500 font-semibold hidden sm:block">
                Vietnam France Consulting
              </span>
            </div>
          </a>

          <!-- DESKTOP NAVIGATION -->
          <nav class="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase">
            <a href="#about" id="navAbout" class="text-neutral-700 hover:text-black transition-colors">About</a>
            <a href="#services" id="navServices" class="text-neutral-700 hover:text-black transition-colors">Services</a>
            <a href="#portfolio" id="navPortfolio" class="text-neutral-700 hover:text-black transition-colors">Portfolio</a>
            <a href="#leadership" id="navLeadership" class="text-neutral-700 hover:text-black transition-colors">Leadership</a>
            <a href="#credentials" id="navCredentials" class="text-neutral-700 hover:text-black transition-colors">Credentials</a>
            <a href="#contact" id="navContact" class="text-neutral-700 hover:text-black transition-colors">Contact</a>
          </nav>

          <!-- RIGHT CONTROLS: LANGUAGE & CTA -->
          <div class="hidden md:flex items-center gap-4">
            <button id="langToggleBtn" type="button" class="text-[11px] font-bold tracking-wider px-3 py-1.5 border border-neutral-300 hover:border-black uppercase transition-colors bg-white" title="Toggle English / Tiếng Việt">
              <span id="currentLangLabel">EN</span> | VI
            </button>
            <a href="#contact" id="navCtaBtn" class="bg-black text-white hover:bg-neutral-800 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 transition-all shadow-sm hover:shadow">
              Consult With Us
            </a>
          </div>

          <!-- MOBILE MENU & LANG BUTTON -->
          <div class="flex items-center gap-2 md:hidden">
            <button id="mobileLangToggleBtn" type="button" class="text-[10px] font-bold px-2 py-1 border border-neutral-300 uppercase">
              <span id="mobileLangLabel">EN</span>
            </button>
            <button id="mobileMenuBtn" type="button" aria-label="Toggle Navigation Menu" class="p-2 text-black hover:bg-neutral-100 rounded focus:outline-none">
              <svg id="hamburgerIcon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg id="closeIcon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- MOBILE MENU DRAWER -->
      <div id="mobileMenu" class="hidden md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-3">
        <a href="#about" id="mNavAbout" class="mobile-nav-link block py-2 text-sm font-semibold tracking-wide uppercase text-neutral-800 hover:text-black border-b border-neutral-100">About</a>
        <a href="#services" id="mNavServices" class="mobile-nav-link block py-2 text-sm font-semibold tracking-wide uppercase text-neutral-800 hover:text-black border-b border-neutral-100">Services</a>
        <a href="#portfolio" id="mNavPortfolio" class="mobile-nav-link block py-2 text-sm font-semibold tracking-wide uppercase text-neutral-800 hover:text-black border-b border-neutral-100">Portfolio</a>
        <a href="#leadership" id="mNavLeadership" class="mobile-nav-link block py-2 text-sm font-semibold tracking-wide uppercase text-neutral-800 hover:text-black border-b border-neutral-100">Leadership</a>
        <a href="#credentials" id="mNavCredentials" class="mobile-nav-link block py-2 text-sm font-semibold tracking-wide uppercase text-neutral-800 hover:text-black border-b border-neutral-100">Credentials</a>
        <a href="#contact" id="mNavContact" class="mobile-nav-link block py-2 text-sm font-semibold tracking-wide uppercase text-neutral-800 hover:text-black border-b border-neutral-100">Contact</a>
        <div class="pt-2">
          <a href="#contact" id="mNavCtaBtn" class="mobile-nav-link block w-full text-center bg-black text-white text-xs font-semibold uppercase tracking-wider py-3">
            Consult With Us
          </a>
        </div>
      </div>
    </header>
  `);
  mount.remove();
})();
