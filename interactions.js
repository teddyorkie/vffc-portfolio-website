
    // CURRENT LANGUAGE STATE
    let currentLanguage = 'en'; // 'en' or 'vi'
    let currentActiveProject = 'p1';

    // RENDER HISTORICAL LEDGER TABLE
    function renderLedgerTable(lang) {
      const tbody = document.getElementById('ledgerTableBody');
      if (!tbody) return;
      tbody.innerHTML = '';
      ledgerRowsData.forEach(item => {
        const row = item[lang];
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="py-3 px-3 font-semibold text-black">${row.name}</td>
          <td class="py-3 px-3">${row.scale}</td>
          <td class="py-3 px-3 text-neutral-500">${row.partners}</td>
          <td class="py-3 px-3">${row.sector}</td>
          <td class="py-3 px-3">${row.scope}</td>
          <td class="py-3 px-3 text-right font-bold text-black">${row.year}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    // RENDER PROJECT CARDS IN ACTIVE LANGUAGE
    function renderProjectCards(lang) {
      ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'].forEach(pId => {
        const card = document.getElementById(pId);
        if (!card) return;
        const p = projectsData[pId][lang];
        
        const catEl = card.querySelector(`.${pId}CategoryBadge`);
        if (catEl) catEl.innerHTML = p.category;
        
        const partnersEl = card.querySelector(`.${pId}Partners`);
        if (partnersEl) partnersEl.innerHTML = p.partners;
        
        const titleEl = card.querySelector(`.${pId}Title`);
        if (titleEl) titleEl.innerHTML = p.title;
        
        const descEl = card.querySelector(`.${pId}Desc`);
        if (descEl) descEl.innerHTML = p.description;
        
        const scaleLabel = card.querySelector(`.${pId}ScaleLabel`);
        if (scaleLabel) {
          scaleLabel.innerHTML = i18n[lang][`project_scale_${pId}`];
        }
        
        const btnEl = card.querySelector('.project-modal-trigger');
        if (btnEl) btnEl.innerHTML = i18n[lang].view_mandate_btn;
      });
    }

    // APPLY BILINGUAL TRANSLATION TO ENTIRE DOM
    function applyLanguage(lang) {
      currentLanguage = lang;
      const dict = i18n[lang];

      // Update document title
      document.title = dict.page_title;

      // Top bar
      const topBarTagline = document.getElementById('topBarTagline');
      if (topBarTagline) topBarTagline.innerHTML = dict.top_tagline;
      const topBarOffices = document.getElementById('topBarOffices');
      if (topBarOffices) topBarOffices.innerHTML = dict.top_offices;

      // Brand
      const brandSubtitle = document.getElementById('brandSubtitle');
      if (brandSubtitle) brandSubtitle.innerHTML = dict.brand_sub;

      // Nav
      const navAbout = document.getElementById('navAbout'); if (navAbout) navAbout.innerHTML = dict.nav_about;
      const navServices = document.getElementById('navServices'); if (navServices) navServices.innerHTML = dict.nav_services;
      const navPortfolio = document.getElementById('navPortfolio'); if (navPortfolio) navPortfolio.innerHTML = dict.nav_portfolio;
      const navLeadership = document.getElementById('navLeadership'); if (navLeadership) navLeadership.innerHTML = dict.nav_leadership;
      const navCredentials = document.getElementById('navCredentials'); if (navCredentials) navCredentials.innerHTML = dict.nav_credentials;
      const navContact = document.getElementById('navContact'); if (navContact) navContact.innerHTML = dict.nav_contact;
      const navCtaBtn = document.getElementById('navCtaBtn'); if (navCtaBtn) navCtaBtn.innerHTML = dict.nav_cta;

      // Mobile Nav
      const mNavAbout = document.getElementById('mNavAbout'); if (mNavAbout) mNavAbout.innerHTML = dict.nav_about;
      const mNavServices = document.getElementById('mNavServices'); if (mNavServices) mNavServices.innerHTML = dict.nav_services;
      const mNavPortfolio = document.getElementById('mNavPortfolio'); if (mNavPortfolio) mNavPortfolio.innerHTML = dict.nav_portfolio;
      const mNavLeadership = document.getElementById('mNavLeadership'); if (mNavLeadership) mNavLeadership.innerHTML = dict.nav_leadership;
      const mNavCredentials = document.getElementById('mNavCredentials'); if (mNavCredentials) mNavCredentials.innerHTML = dict.nav_credentials;
      const mNavContact = document.getElementById('mNavContact'); if (mNavContact) mNavContact.innerHTML = dict.nav_contact;
      const mNavCtaBtn = document.getElementById('mNavCtaBtn'); if (mNavCtaBtn) mNavCtaBtn.innerHTML = dict.nav_cta;

      // Hero
      const heroEyebrow = document.getElementById('heroEyebrow'); if (heroEyebrow) heroEyebrow.innerHTML = dict.hero_eyebrow;
      const heroTitle = document.getElementById('heroTitle'); if (heroTitle) heroTitle.innerHTML = dict.hero_title;
      const heroDesc = document.getElementById('heroDesc'); if (heroDesc) heroDesc.innerHTML = dict.hero_desc;
      const heroQuote = document.getElementById('heroQuote'); if (heroQuote) heroQuote.innerHTML = dict.hero_quote;
      const heroBtnPortfolio = document.getElementById('heroBtnPortfolio'); if (heroBtnPortfolio) heroBtnPortfolio.innerHTML = dict.hero_btn_portfolio;
      const openProfileModalBtn = document.getElementById('openProfileModalBtn'); if (openProfileModalBtn) openProfileModalBtn.innerHTML = dict.hero_btn_profile;
      const heroBtnContact = document.getElementById('heroBtnContact'); if (heroBtnContact) heroBtnContact.innerHTML = dict.hero_btn_contact;
      const heroImgCaption = document.getElementById('heroImgCaption'); if (heroImgCaption) heroImgCaption.innerHTML = dict.hero_img_caption;

      // Stats
      const stat1Label = document.getElementById('stat1Label'); if (stat1Label) stat1Label.innerHTML = dict.stat1_label;
      const stat2Label = document.getElementById('stat2Label'); if (stat2Label) stat2Label.innerHTML = dict.stat2_label;
      const stat3Label = document.getElementById('stat3Label'); if (stat3Label) stat3Label.innerHTML = dict.stat3_label;
      const stat4Label = document.getElementById('stat4Label'); if (stat4Label) stat4Label.innerHTML = dict.stat4_label;

      // About
      const aboutEyebrow = document.getElementById('aboutEyebrow'); if (aboutEyebrow) aboutEyebrow.innerHTML = dict.about_eyebrow;
      const aboutTitle = document.getElementById('aboutTitle'); if (aboutTitle) aboutTitle.innerHTML = dict.about_title;
      const aboutStory1 = document.getElementById('aboutStory1'); if (aboutStory1) aboutStory1.innerHTML = dict.about_story1;
      const aboutStory2 = document.getElementById('aboutStory2'); if (aboutStory2) aboutStory2.innerHTML = dict.about_story2;
      const aboutStory3 = document.getElementById('aboutStory3'); if (aboutStory3) aboutStory3.innerHTML = dict.about_story3;
      const openExecutiveSummaryBtn = document.getElementById('openExecutiveSummaryBtn'); if (openExecutiveSummaryBtn) openExecutiveSummaryBtn.innerHTML = dict.about_modal_btn;

      // Pillars
      const pillar1Title = document.getElementById('pillar1Title'); if (pillar1Title) pillar1Title.innerHTML = dict.pillar1_title;
      const pillar1Desc = document.getElementById('pillar1Desc'); if (pillar1Desc) pillar1Desc.innerHTML = dict.pillar1_desc;
      const pillar2Title = document.getElementById('pillar2Title'); if (pillar2Title) pillar2Title.innerHTML = dict.pillar2_title;
      const pillar2Desc = document.getElementById('pillar2Desc'); if (pillar2Desc) pillar2Desc.innerHTML = dict.pillar2_desc;
      const pillar3Title = document.getElementById('pillar3Title'); if (pillar3Title) pillar3Title.innerHTML = dict.pillar3_title;
      const pillar3Desc = document.getElementById('pillar3Desc'); if (pillar3Desc) pillar3Desc.innerHTML = dict.pillar3_desc;
      const pillar4Title = document.getElementById('pillar4Title'); if (pillar4Title) pillar4Title.innerHTML = dict.pillar4_title;
      const pillar4Desc = document.getElementById('pillar4Desc'); if (pillar4Desc) pillar4Desc.innerHTML = dict.pillar4_desc;

      // Services
      const servicesEyebrow = document.getElementById('servicesEyebrow'); if (servicesEyebrow) servicesEyebrow.innerHTML = dict.services_eyebrow;
      const servicesTitle = document.getElementById('servicesTitle'); if (servicesTitle) servicesTitle.innerHTML = dict.services_title;
      const servicesSubtitle = document.getElementById('servicesSubtitle'); if (servicesSubtitle) servicesSubtitle.innerHTML = dict.services_sub;

      const srv1Title = document.getElementById('srv1Title'); if (srv1Title) srv1Title.innerHTML = dict.srv1_title;
      const srv1Desc = document.getElementById('srv1Desc'); if (srv1Desc) srv1Desc.innerHTML = dict.srv1_desc;
      const srv1_b1 = document.getElementById('srv1_b1'); if (srv1_b1) srv1_b1.innerHTML = dict.srv1_b1;
      const srv1_b2 = document.getElementById('srv1_b2'); if (srv1_b2) srv1_b2.innerHTML = dict.srv1_b2;
      const srv1_b3 = document.getElementById('srv1_b3'); if (srv1_b3) srv1_b3.innerHTML = dict.srv1_b3;

      const srv2Title = document.getElementById('srv2Title'); if (srv2Title) srv2Title.innerHTML = dict.srv2_title;
      const srv2Desc = document.getElementById('srv2Desc'); if (srv2Desc) srv2Desc.innerHTML = dict.srv2_desc;
      const srv2_b1 = document.getElementById('srv2_b1'); if (srv2_b1) srv2_b1.innerHTML = dict.srv2_b1;
      const srv2_b2 = document.getElementById('srv2_b2'); if (srv2_b2) srv2_b2.innerHTML = dict.srv2_b2;
      const srv2_b3 = document.getElementById('srv2_b3'); if (srv2_b3) srv2_b3.innerHTML = dict.srv2_b3;

      const srv3Title = document.getElementById('srv3Title'); if (srv3Title) srv3Title.innerHTML = dict.srv3_title;
      const srv3Desc = document.getElementById('srv3Desc'); if (srv3Desc) srv3Desc.innerHTML = dict.srv3_desc;
      const srv3_b1 = document.getElementById('srv3_b1'); if (srv3_b1) srv3_b1.innerHTML = dict.srv3_b1;
      const srv3_b2 = document.getElementById('srv3_b2'); if (srv3_b2) srv3_b2.innerHTML = dict.srv3_b2;
      const srv3_b3 = document.getElementById('srv3_b3'); if (srv3_b3) srv3_b3.innerHTML = dict.srv3_b3;

      const srv4Title = document.getElementById('srv4Title'); if (srv4Title) srv4Title.innerHTML = dict.srv4_title;
      const srv4Desc = document.getElementById('srv4Desc'); if (srv4Desc) srv4Desc.innerHTML = dict.srv4_desc;
      const srv4_b1 = document.getElementById('srv4_b1'); if (srv4_b1) srv4_b1.innerHTML = dict.srv4_b1;
      const srv4_b2 = document.getElementById('srv4_b2'); if (srv4_b2) srv4_b2.innerHTML = dict.srv4_b2;
      const srv4_b3 = document.getElementById('srv4_b3'); if (srv4_b3) srv4_b3.innerHTML = dict.srv4_b3;

      const srv5Title = document.getElementById('srv5Title'); if (srv5Title) srv5Title.innerHTML = dict.srv5_title;
      const srv5Desc = document.getElementById('srv5Desc'); if (srv5Desc) srv5Desc.innerHTML = dict.srv5_desc;
      const srv5_b1 = document.getElementById('srv5_b1'); if (srv5_b1) srv5_b1.innerHTML = dict.srv5_b1;
      const srv5_b2 = document.getElementById('srv5_b2'); if (srv5_b2) srv5_b2.innerHTML = dict.srv5_b2;
      const srv5_b3 = document.getElementById('srv5_b3'); if (srv5_b3) srv5_b3.innerHTML = dict.srv5_b3;
      const srv5_b4 = document.getElementById('srv5_b4'); if (srv5_b4) srv5_b4.innerHTML = dict.srv5_b4;

      document.querySelectorAll('.service-detail-btn').forEach(el => {
        el.innerHTML = dict.srv_explore_label;
      });

      // Portfolio
      const portfolioEyebrow = document.getElementById('portfolioEyebrow'); if (portfolioEyebrow) portfolioEyebrow.innerHTML = dict.portfolio_eyebrow;
      const portfolioTitle = document.getElementById('portfolioTitle'); if (portfolioTitle) portfolioTitle.innerHTML = dict.portfolio_title;
      const portfolioSubtitle = document.getElementById('portfolioSubtitle'); if (portfolioSubtitle) portfolioSubtitle.innerHTML = dict.portfolio_sub;
      
      const filterAll = document.getElementById('filterAll'); if (filterAll) filterAll.innerHTML = dict.filter_all;
      const filterHospitality = document.getElementById('filterHospitality'); if (filterHospitality) filterHospitality.innerHTML = dict.filter_hosp;
      const filterInfrastructure = document.getElementById('filterInfrastructure'); if (filterInfrastructure) filterInfrastructure.innerHTML = dict.filter_infra;
      const filterUrban = document.getElementById('filterUrban'); if (filterUrban) filterUrban.innerHTML = dict.filter_urban;

      // Render cards & ledger
      renderProjectCards(lang);
      renderLedgerTable(lang);

      // Ledger headers & labels
      const fullProjectLedger = document.getElementById('fullProjectLedger');
      const isLedgerHidden = fullProjectLedger && fullProjectLedger.classList.contains('hidden');
      const toggleProjectsLabel = document.getElementById('toggleProjectsLabel');
      if (toggleProjectsLabel) {
        toggleProjectsLabel.innerHTML = isLedgerHidden ? dict.ledger_toggle_show : dict.ledger_toggle_hide;
      }
      const ledgerHeading = document.getElementById('ledgerHeading'); if (ledgerHeading) ledgerHeading.innerHTML = dict.ledger_heading;
      const ledgerSource = document.getElementById('ledgerSource'); if (ledgerSource) ledgerSource.innerHTML = dict.ledger_source;
      const th_proj = document.getElementById('th_proj'); if (th_proj) th_proj.innerHTML = dict.th_proj;
      const th_scale = document.getElementById('th_scale'); if (th_scale) th_scale.innerHTML = dict.th_scale;
      const th_partners = document.getElementById('th_partners'); if (th_partners) th_partners.innerHTML = dict.th_partners;
      const th_sector = document.getElementById('th_sector'); if (th_sector) th_sector.innerHTML = dict.th_sector;
      const th_scope = document.getElementById('th_scope'); if (th_scope) th_scope.innerHTML = dict.th_scope;
      const th_year = document.getElementById('th_year'); if (th_year) th_year.innerHTML = dict.th_year;

      // Leadership
      const leadershipEyebrow = document.getElementById('leadershipEyebrow'); if (leadershipEyebrow) leadershipEyebrow.innerHTML = dict.leadership_eyebrow;
      const leadershipTitle = document.getElementById('leadershipTitle'); if (leadershipTitle) leadershipTitle.innerHTML = dict.leadership_title;
      const leadershipSubtitle = document.getElementById('leadershipSubtitle'); if (leadershipSubtitle) leadershipSubtitle.innerHTML = dict.leadership_sub;

      const leader1Role = document.getElementById('leader1Role'); if (leader1Role) leader1Role.innerHTML = dict.leader1_role;
      const leader1Bio1 = document.getElementById('leader1Bio1'); if (leader1Bio1) leader1Bio1.innerHTML = dict.leader1_bio1;
      const leader1Bio2 = document.getElementById('leader1Bio2'); if (leader1Bio2) leader1Bio2.innerHTML = dict.leader1_bio2;
      const leader1Contact = document.getElementById('leader1Contact'); if (leader1Contact) leader1Contact.innerHTML = dict.leader1_contact;

      const leader2Role = document.getElementById('leader2Role'); if (leader2Role) leader2Role.innerHTML = dict.leader2_role;
      const leader2Bio1 = document.getElementById('leader2Bio1'); if (leader2Bio1) leader2Bio1.innerHTML = dict.leader2_bio1;
      const leader2Bio2 = document.getElementById('leader2Bio2'); if (leader2Bio2) leader2Bio2.innerHTML = dict.leader2_bio2;
      const leader2Contact = document.getElementById('leader2Contact'); if (leader2Contact) leader2Contact.innerHTML = dict.leader2_contact;

      const leader3Role = document.getElementById('leader3Role'); if (leader3Role) leader3Role.innerHTML = dict.leader3_role;
      const leader3Bio1 = document.getElementById('leader3Bio1'); if (leader3Bio1) leader3Bio1.innerHTML = dict.leader3_bio1;
      const leader3Bio2 = document.getElementById('leader3Bio2'); if (leader3Bio2) leader3Bio2.innerHTML = dict.leader3_bio2;
      const leader3Contact = document.getElementById('leader3Contact'); if (leader3Contact) leader3Contact.innerHTML = dict.leader3_contact;

      const domainsLabel1 = document.getElementById('domainsLabel1'); if (domainsLabel1) domainsLabel1.innerHTML = dict.core_domains_label;
      const domainsLabel2 = document.getElementById('domainsLabel2'); if (domainsLabel2) domainsLabel2.innerHTML = dict.core_domains_label;
      const domainsLabel3 = document.getElementById('domainsLabel3'); if (domainsLabel3) domainsLabel3.innerHTML = dict.core_domains_label;

      ['l1', 'l2', 'l3'].forEach((leader, leaderIndex) => {
        for (let domainIndex = 1; domainIndex <= 4; domainIndex++) {
          const domain = document.getElementById(`${leader}_d${domainIndex}`);
          if (domain) domain.innerHTML = dict[`leader${leaderIndex + 1}_domain${domainIndex}`];
        }
      });

      // Credentials (fixing IDs to match HTML exactly)
      const credentialsEyebrow = document.getElementById('credentialsEyebrow'); if (credentialsEyebrow) credentialsEyebrow.innerHTML = dict.credentials_eyebrow;
      const credentialsTitle = document.getElementById('credentialsTitle'); if (credentialsTitle) credentialsTitle.innerHTML = dict.credentials_title;
      const credentialsSubtitle = document.getElementById('credentialsSubtitle'); if (credentialsSubtitle) credentialsSubtitle.innerHTML = dict.credentials_sub;

      const stage1Title = document.getElementById('stage1Title'); if (stage1Title) stage1Title.innerHTML = dict.stage1_title;
      const stage1Desc = document.getElementById('stage1Desc'); if (stage1Desc) stage1Desc.innerHTML = dict.stage1_desc;
      const stage1Tag = document.getElementById('stage1Tag'); if (stage1Tag) stage1Tag.innerHTML = dict.stage1_tag;

      const stage2Title = document.getElementById('stage2Title'); if (stage2Title) stage2Title.innerHTML = dict.stage2_title;
      const stage2Desc = document.getElementById('stage2Desc'); if (stage2Desc) stage2Desc.innerHTML = dict.stage2_desc;
      const stage2Tag = document.getElementById('stage2Tag'); if (stage2Tag) stage2Tag.innerHTML = dict.stage2_tag;

      const stage3Title = document.getElementById('stage3Title'); if (stage3Title) stage3Title.innerHTML = dict.stage3_title;
      const stage3Desc = document.getElementById('stage3Desc'); if (stage3Desc) stage3Desc.innerHTML = dict.stage3_desc;
      const stage3Tag = document.getElementById('stage3Tag'); if (stage3Tag) stage3Tag.innerHTML = dict.stage3_tag;

      const stage4Title = document.getElementById('stage4Title'); if (stage4Title) stage4Title.innerHTML = dict.stage4_title;
      const stage4Desc = document.getElementById('stage4Desc'); if (stage4Desc) stage4Desc.innerHTML = dict.stage4_desc;
      const stage4Tag = document.getElementById('stage4Tag'); if (stage4Tag) stage4Tag.innerHTML = dict.stage4_tag;

      // Contact Form Labels
      const contactEyebrow = document.getElementById('contactEyebrow'); if (contactEyebrow) contactEyebrow.innerHTML = dict.contact_eyebrow;
      const contactTitle = document.getElementById('contactTitle'); if (contactTitle) contactTitle.innerHTML = dict.contact_title;
      const contactSubtitle = document.getElementById('contactSubtitle'); if (contactSubtitle) contactSubtitle.innerHTML = dict.contact_sub;

      const hanoiOfficeLabel = document.getElementById('hanoiOfficeLabel'); if (hanoiOfficeLabel) hanoiOfficeLabel.innerHTML = dict.hanoi_office_label;
      const hanoiOfficeAddr = document.getElementById('hanoiOfficeAddr'); if (hanoiOfficeAddr) hanoiOfficeAddr.innerHTML = dict.hanoi_office_addr;
      const hcmOfficeLabel = document.getElementById('hcmOfficeLabel'); if (hcmOfficeLabel) hcmOfficeLabel.innerHTML = dict.hcm_office_label;
      const hcmOfficeAddr = document.getElementById('hcmOfficeAddr'); if (hcmOfficeAddr) hcmOfficeAddr.innerHTML = dict.hcm_office_addr;

      const directPhoneLabel = document.getElementById('directPhoneLabel'); if (directPhoneLabel) directPhoneLabel.innerHTML = dict.direct_phone_label;
      const directEmailLabel = document.getElementById('directEmailLabel'); if (directEmailLabel) directEmailLabel.innerHTML = dict.direct_email_label;

      const lblFullName = document.getElementById('lblFullName'); if (lblFullName) lblFullName.innerHTML = dict.lbl_fullname;
      const lblWorkEmail = document.getElementById('lblWorkEmail'); if (lblWorkEmail) lblWorkEmail.innerHTML = dict.lbl_workemail;
      const lblPhone = document.getElementById('lblPhone'); if (lblPhone) lblPhone.innerHTML = dict.lbl_phone;
      const lblOrg = document.getElementById('lblOrg'); if (lblOrg) lblOrg.innerHTML = dict.lbl_org;
      const lblServiceType = document.getElementById('lblServiceType'); if (lblServiceType) lblServiceType.innerHTML = dict.lbl_servicetype;
      const lblProjectScale = document.getElementById('lblProjectScale'); if (lblProjectScale) lblProjectScale.innerHTML = dict.lbl_projectscale;
      const lblProjectBrief = document.getElementById('lblProjectBrief'); if (lblProjectBrief) lblProjectBrief.innerHTML = dict.lbl_projectbrief;
      const lblNdaCheck = document.getElementById('lblNdaCheck'); if (lblNdaCheck) lblNdaCheck.innerHTML = dict.lbl_ndacheck;
      const submitFormBtn = document.getElementById('submitFormBtn'); if (submitFormBtn) submitFormBtn.innerHTML = dict.btn_submit;

      // Inputs placeholders
      const fullName = document.getElementById('fullName');
      if (fullName) fullName.placeholder = dict.placeholder_fullname;
      const workEmail = document.getElementById('workEmail');
      if (workEmail) workEmail.placeholder = dict.placeholder_workemail;
      const phoneNumber = document.getElementById('phoneNumber');
      if (phoneNumber) phoneNumber.placeholder = "(+84) 9XX XXX XXX";
      const organization = document.getElementById('organization');
      if (organization) organization.placeholder = dict.placeholder_organization;
      const projectBrief = document.getElementById('projectBrief');
      if (projectBrief) projectBrief.placeholder = dict.placeholder_projectbrief;

      // Modals
      const modalScaleLabel = document.getElementById('modalScaleLabel'); if (modalScaleLabel) modalScaleLabel.innerHTML = dict.modal_scale_label;
      const modalPartnersLabel = document.getElementById('modalPartnersLabel'); if (modalPartnersLabel) modalPartnersLabel.innerHTML = dict.modal_partners_label;
      const modalYearLabel = document.getElementById('modalYearLabel'); if (modalYearLabel) modalYearLabel.innerHTML = dict.modal_year_label;
      const modalScopeHeading = document.getElementById('modalScopeHeading'); if (modalScopeHeading) modalScopeHeading.innerHTML = dict.modal_scope_heading;
      const modalDeliverablesHeading = document.getElementById('modalDeliverablesHeading'); if (modalDeliverablesHeading) modalDeliverablesHeading.innerHTML = dict.modal_del_heading;
      const modalDismissBtn = document.getElementById('modalDismissBtn'); if (modalDismissBtn) modalDismissBtn.innerHTML = dict.modal_dismiss;
      const dismissServiceModalBtn = document.getElementById('dismissServiceModalBtn'); if (dismissServiceModalBtn) dismissServiceModalBtn.innerHTML = dict.service_modal_dismiss;
      const dismissProfileModalBtn = document.getElementById('dismissProfileModalBtn'); if (dismissProfileModalBtn) dismissProfileModalBtn.innerHTML = dict.profile_modal_dismiss;

      // Toast
      const toastTitle = document.getElementById('toastTitle'); if (toastTitle) toastTitle.innerHTML = dict.toast_title;
      const toastMessage = document.getElementById('toastMessage'); if (toastMessage) toastMessage.innerHTML = dict.toast_msg;
      const toastRefLabel = document.getElementById('toastRefLabel'); if (toastRefLabel) toastRefLabel.innerHTML = dict.toast_ref;

      // Footer
      const footerBrandTag = document.getElementById('footerBrandTag'); if (footerBrandTag) footerBrandTag.innerHTML = dict.footer_brand_tag;
      const footerCopyright = document.getElementById('footerCopyright'); if (footerCopyright) footerCopyright.innerHTML = dict.footer_copyright;
      const footerDiscretion = document.getElementById('footerDiscretion'); if (footerDiscretion) footerDiscretion.innerHTML = dict.footer_discretion;

      // Profile modal body
      const profileModalBody = document.getElementById('profileModalBody');
      if (profileModalBody) profileModalBody.innerHTML = profileModalData[lang];

      // Update button label
      const currentLangLabel = document.getElementById('currentLangLabel');
      if (currentLangLabel) currentLangLabel.textContent = lang.toUpperCase();
      const mobileLangLabel = document.getElementById('mobileLangLabel');
      if (mobileLangLabel) mobileLangLabel.textContent = lang.toUpperCase();

      // If project modal is currently open, refresh its data in the new language
      const projectModal = document.getElementById('projectModal');
      if (projectModal && !projectModal.classList.contains('hidden')) {
        refreshProjectModal(currentActiveProject, lang);
      }
    }

    // REFRESH PROJECT MODAL CONTENT
    function refreshProjectModal(projectId, lang) {
      const p = projectsData[projectId][lang];
      if (!p) return;
      document.getElementById('modalTitle').innerHTML = p.title;
      document.getElementById('modalSubtitle').innerHTML = p.subtitle;
      document.getElementById('modalCategoryBadge').innerHTML = p.category;
      document.getElementById('modalScale').innerHTML = p.scale;
      document.getElementById('modalPartners').innerHTML = p.partners;
      document.getElementById('modalYear').innerHTML = p.year;
      document.getElementById('modalDescription').innerHTML = p.description;

      const delList = document.getElementById('modalDeliverables');
      delList.innerHTML = '';
      p.deliverables.forEach(d => {
        const li = document.createElement('li');
        li.innerHTML = d;
        delList.appendChild(li);
      });
    }

    // OPEN PROJECT MODAL
    function openProjectModal(projectId) {
      currentActiveProject = projectId;
      refreshProjectModal(projectId, currentLanguage);
      const projectModal = document.getElementById('projectModal');
      projectModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeProjectModal() {
      const projectModal = document.getElementById('projectModal');
      projectModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    // OPEN SERVICE MODAL
    function openServiceModal(serviceKey) {
      const s = serviceDetailsData[serviceKey];
      if (!s) return;
      const sData = s[currentLanguage] || s['en'];
      document.getElementById('serviceModalTitle').innerHTML = sData.title;
      document.getElementById('serviceModalContent').innerHTML = sData.body;
      const serviceModal = document.getElementById('serviceModal');
      serviceModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeServiceModal() {
      const serviceModal = document.getElementById('serviceModal');
      serviceModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    // OPEN PROFILE MODAL
    function openProfileModal() {
      const profileModal = document.getElementById('profileModal');
      const profileModalBody = document.getElementById('profileModalBody');
      if (profileModalBody) profileModalBody.innerHTML = profileModalData[currentLanguage];
      profileModal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeProfileModal() {
      const profileModal = document.getElementById('profileModal');
      profileModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    // TOGGLE LANGUAGE HANDLER
    function toggleLanguage() {
      const nextLang = (currentLanguage === 'en') ? 'vi' : 'en';
      applyLanguage(nextLang);
    }

    // BUILD CONTACT FORM MAILTO URL
    function buildContactMailtoUrl(data, refId) {
      const fullName = (data.fullName || '').trim() || 'N/A';
      const workEmail = (data.workEmail || '').trim() || 'N/A';
      const phoneNumber = (data.phoneNumber || '').trim() || 'N/A';
      const organization = (data.organization || '').trim() || 'N/A';
      const serviceLabel = (data.serviceLabel || '').trim() || 'General Inquiry';
      const scaleLabel = (data.scaleLabel || '').trim() || 'N/A';
      const ndaStatus = data.ndaRequested ? 'Yes (M-NDA Requested)' : 'No';
      const normalizedBrief = ((data.projectBrief || '').trim() || 'N/A').replace(/\r?\n/g, '\r\n');

      const subjectSender = organization !== 'N/A' ? `${fullName} (${organization})` : fullName;
      const subject = `[VFFC Mandate Inquiry - ${refId}] ${serviceLabel} — ${subjectSender}`;

      const bodyLines = [
        `Reference ID: ${refId}`,
        `Full Name: ${fullName}`,
        `Corporate Email: ${workEmail}`,
        `Phone / WhatsApp: ${phoneNumber}`,
        `Organization / Entity: ${organization}`,
        `Advisory Practice: ${serviceLabel}`,
        `Estimated Project Scale: ${scaleLabel}`,
        `Mutual NDA (M-NDA) Requested: ${ndaStatus}`,
        '',
        'Mandate Brief & Scope Objectives:',
        normalizedBrief
      ];
      const body = bodyLines.join('\r\n');

      return `mailto:quangld@vffc.vn?cc=${encodeURIComponent('trangbtt@vffc.vn')}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    // INITIALIZATION & EVENT LISTENERS
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize in English
      applyLanguage('en');

      // Language Toggle Listeners
      const langToggleBtn = document.getElementById('langToggleBtn');
      if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
      const mobileLangToggleBtn = document.getElementById('mobileLangToggleBtn');
      if (mobileLangToggleBtn) mobileLangToggleBtn.addEventListener('click', toggleLanguage);

      // Brand Logo smooth scroll
      const brandLogoLink = document.getElementById('brandLogoLink');
      if (brandLogoLink) {
        brandLogoLink.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // Mobile Menu Toggle
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburgerIcon = document.getElementById('hamburgerIcon');
      const closeIcon = document.getElementById('closeIcon');
      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
          const isHidden = mobileMenu.classList.contains('hidden');
          if (isHidden) {
            mobileMenu.classList.remove('hidden');
            if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
            if (closeIcon) closeIcon.classList.remove('hidden');
          } else {
            mobileMenu.classList.add('hidden');
            if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
            if (closeIcon) closeIcon.classList.add('hidden');
          }
        });
      }

      // Mobile Nav Links click
      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          if (mobileMenu) mobileMenu.classList.add('hidden');
          if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
          if (closeIcon) closeIcon.classList.add('hidden');
        });
      });

      // Footer Back To Top
      const footerBackToTopBtn = document.getElementById('footerBackToTopBtn');
      if (footerBackToTopBtn) {
        footerBackToTopBtn.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // Portfolio Filtering
      const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          filterButtons.forEach(b => {
            b.classList.remove('bg-black', 'text-white', 'border-black');
            b.classList.add('bg-white', 'text-neutral-700', 'border-neutral-300');
          });
          btn.classList.add('bg-black', 'text-white', 'border-black');
          btn.classList.remove('bg-white', 'text-neutral-700', 'border-neutral-300');

          portfolioItems.forEach(item => {
            const cat = item.getAttribute('data-category');
            if (filter === 'all' || cat === filter) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          });
        });
      });

      // Project Cards Modal Triggers
      document.querySelectorAll('.portfolio-item').forEach(card => {
        card.addEventListener('click', (e) => {
          const pId = card.getAttribute('data-project');
          if (pId) openProjectModal(pId);
        });
      });
      document.querySelectorAll('.project-modal-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const pId = btn.getAttribute('data-project') || btn.getAttribute('data-project-id');
          if (pId) openProjectModal(pId);
        });
      });

      // Project Modal Close Buttons
      const closeProjectModalBtn = document.getElementById('closeProjectModalBtn');
      if (closeProjectModalBtn) closeProjectModalBtn.addEventListener('click', closeProjectModal);
      const modalDismissBtn = document.getElementById('modalDismissBtn');
      if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeProjectModal);
      const projectModal = document.getElementById('projectModal');
      if (projectModal) {
        projectModal.addEventListener('click', (e) => {
          if (e.target === projectModal) closeProjectModal();
        });
      }

      // Service Detail Modal Triggers
      document.querySelectorAll('.service-detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const sKey = btn.getAttribute('data-service');
          if (sKey) openServiceModal(sKey);
        });
      });
      const closeServiceModalBtn = document.getElementById('closeServiceModalBtn');
      if (closeServiceModalBtn) closeServiceModalBtn.addEventListener('click', closeServiceModal);
      const dismissServiceModalBtn = document.getElementById('dismissServiceModalBtn');
      if (dismissServiceModalBtn) dismissServiceModalBtn.addEventListener('click', closeServiceModal);
      const serviceModal = document.getElementById('serviceModal');
      if (serviceModal) {
        serviceModal.addEventListener('click', (e) => {
          if (e.target === serviceModal) closeServiceModal();
        });
      }

      // Profile Modal Triggers
      const openProfileModalBtn = document.getElementById('openProfileModalBtn');
      if (openProfileModalBtn) openProfileModalBtn.addEventListener('click', openProfileModal);
      const openExecutiveSummaryBtn = document.getElementById('openExecutiveSummaryBtn');
      if (openExecutiveSummaryBtn) openExecutiveSummaryBtn.addEventListener('click', openProfileModal);
      const closeProfileModalBtn = document.getElementById('closeProfileModalBtn');
      if (closeProfileModalBtn) closeProfileModalBtn.addEventListener('click', closeProfileModal);
      const dismissProfileModalBtn = document.getElementById('dismissProfileModalBtn');
      if (dismissProfileModalBtn) dismissProfileModalBtn.addEventListener('click', closeProfileModal);
      const profileModal = document.getElementById('profileModal');
      if (profileModal) {
        profileModal.addEventListener('click', (e) => {
          if (e.target === profileModal) closeProfileModal();
        });
      }

      // Toggle Full Project Ledger
      const toggleAllProjectsBtn = document.getElementById('toggleAllProjectsBtn');
      const fullProjectLedger = document.getElementById('fullProjectLedger');
      const toggleProjectsLabel = document.getElementById('toggleProjectsLabel');
      if (toggleAllProjectsBtn && fullProjectLedger) {
        toggleAllProjectsBtn.addEventListener('click', () => {
          const isHidden = fullProjectLedger.classList.contains('hidden');
          if (isHidden) {
            fullProjectLedger.classList.remove('hidden');
            if (toggleProjectsLabel) toggleProjectsLabel.innerHTML = i18n[currentLanguage].ledger_toggle_hide;
          } else {
            fullProjectLedger.classList.add('hidden');
            if (toggleProjectsLabel) toggleProjectsLabel.innerHTML = i18n[currentLanguage].ledger_toggle_show;
          }
        });
      }

      // Contact Form Submission (with mailto: + in-page Toast)
      const contactForm = document.getElementById('contactForm');
      const toastNotification = document.getElementById('toastNotification');
      const toastRefId = document.getElementById('toastRefId');
      const closeToastBtn = document.getElementById('closeToastBtn');
      if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const submitBtn = document.getElementById('submitFormBtn');
          const origText = submitBtn.innerHTML;
          submitBtn.innerHTML = i18n[currentLanguage].submit_sending;
          submitBtn.disabled = true;

          const getSelectLabel = (id) => {
            const el = document.getElementById(id);
            if (!el || !el.value) return '';
            const opt = el.options[el.selectedIndex];
            return opt ? opt.text : el.value;
          };

          const formData = {
            fullName: (document.getElementById('fullName') || {}).value || '',
            workEmail: (document.getElementById('workEmail') || {}).value || '',
            phoneNumber: (document.getElementById('phoneNumber') || {}).value || '',
            organization: (document.getElementById('organization') || {}).value || '',
            serviceLabel: getSelectLabel('serviceType'),
            scaleLabel: getSelectLabel('projectScale'),
            projectBrief: (document.getElementById('projectBrief') || {}).value || '',
            ndaRequested: Boolean((document.getElementById('ndaCheck') || {}).checked)
          };

          const randNum = Math.floor(1000 + Math.random() * 9000);
          const refId = `VFFC-2026-${randNum}`;
          const mailtoUrl = buildContactMailtoUrl(formData, refId);

          window.location.href = mailtoUrl;

          setTimeout(() => {
            submitBtn.innerHTML = origText;
            submitBtn.disabled = false;
            contactForm.reset();

            if (toastRefId) toastRefId.textContent = refId;
            if (toastNotification) {
              toastNotification.classList.remove('hidden');
              setTimeout(() => {
                toastNotification.classList.add('hidden');
              }, 8000);
            }
          }, 900);
        });
      }
      if (closeToastBtn && toastNotification) {
        closeToastBtn.addEventListener('click', () => {
          toastNotification.classList.add('hidden');
        });
      }

      // Keyboard Esc to close all modals
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeProjectModal();
          closeServiceModal();
          closeProfileModal();
          if (toastNotification) toastNotification.classList.add('hidden');
        }
      });
    });
  