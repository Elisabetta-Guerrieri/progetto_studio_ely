/* =========================================================
   ALBA — ATELIER DI BELLEZZA
   FILE: script.js — COLLEGA I TESTI/CONTATTI ALLA PAGINA
   E GESTISCE LE INTERAZIONI (scroll, form, animazioni)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  renderTesti();
  renderContatti();
  attivaInterazioni();
});

/* ---------- INSERISCE I TESTI NELLA STRUTTURA HTML ---------- */
function renderTesti(){
  const t = TESTI;

  // Nav
  document.getElementById('logo-nome').textContent = t.nomeSalone;
  document.getElementById('footer-logo-nome').textContent = t.nomeSalone;
  document.getElementById('nav-servizi').textContent = t.nav.servizi;
  document.getElementById('nav-rituale').textContent = t.nav.rituale;
  document.getElementById('nav-prezzi').textContent = t.nav.prezzi;
  document.getElementById('nav-recensioni').textContent = t.nav.recensioni;
  document.getElementById('nav-contatti').textContent = t.nav.contatti;
  document.getElementById('nav-prenota').textContent = t.nav.prenota;

  // Hero
  document.getElementById('hero-eyebrow').textContent = t.hero.eyebrow;
  document.getElementById('hero-titolo').innerHTML = t.hero.titolo;
  document.getElementById('hero-testo').textContent = t.hero.testo;
  document.getElementById('hero-cta-primario').textContent = t.hero.ctaPrimario;
  document.getElementById('hero-cta-secondario').textContent = t.hero.ctaSecondario;

  const statsBox = document.getElementById('hero-stats');
  statsBox.innerHTML = t.hero.statistiche.map(s => `
    <div><strong>${s.valore}</strong><span>${s.etichetta}</span></div>
  `).join('');

  // Servizi
  document.getElementById('servizi-eyebrow').textContent = t.servizi.eyebrow;
  document.getElementById('servizi-titolo').innerHTML = t.servizi.titolo;
  document.getElementById('servizi-testo').textContent = t.servizi.testo;

  const serviziGrid = document.getElementById('servizi-grid');
  serviziGrid.innerHTML = t.servizi.lista.map(s => `
    <div class="servizio">
      <span class="num">${s.numero}</span>
      <h3>${s.nome}</h3>
      <p>${s.descrizione}</p>
      <div class="price">${s.prezzo}</div>
    </div>
  `).join('');

  // Rituale
  document.getElementById('rituale-eyebrow').textContent = t.rituale.eyebrow;
  document.getElementById('rituale-titolo').textContent = t.rituale.titolo;
  document.getElementById('rituale-testo').textContent = t.rituale.testo;

  const iconeFasi = [
    '<path d="M4 12c2-4 5-6 8-6s6 2 8 6c-2 4-5 6-8 6s-6-2-8-6Z"/><circle cx="12" cy="12" r="2"/>',
    '<path d="M12 3v6m0 6v6M3 12h6m6 0h6"/>',
    '<path d="M4 14c3 4 6 6 8 6s5-2 8-6M4 14c0-5 4-9 8-9s8 4 8 9"/>',
    '<path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9Z"/>'
  ];

  const ritualPath = document.getElementById('ritual-path');
  ritualPath.innerHTML = t.rituale.fasi.map((f, i) => `
    <div class="ritual-step">
      <div class="dot"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.3" stroke-linecap="round">${iconeFasi[i]}</svg></div>
      <span class="step-label">${f.label}</span>
      <h3>${f.nome}</h3>
      <p>${f.descrizione}</p>
    </div>
  `).join('');

  // Prezzi
  document.getElementById('prezzi-eyebrow').textContent = t.prezzi.eyebrow;
  document.getElementById('prezzi-titolo').textContent = t.prezzi.titolo;
  document.getElementById('prezzi-testo').textContent = t.prezzi.testo;

  const rigaHtml = r => `
    <div class="prezzo-riga">
      <div><div class="nome">${r.nome}</div><div class="desc">${r.durata}</div></div>
      <div class="valore">${r.valore}</div>
    </div>`;
  document.getElementById('prezzi-colonna-1').innerHTML = t.prezzi.colonna1.map(rigaHtml).join('');
  document.getElementById('prezzi-colonna-2').innerHTML = t.prezzi.colonna2.map(rigaHtml).join('');

  // Testimonianze
  document.getElementById('testimonianze-eyebrow').textContent = t.testimonianze.eyebrow;
  document.getElementById('testimonianze-titolo').textContent = t.testimonianze.titolo;

  document.getElementById('testimonianze-grid').innerHTML = t.testimonianze.lista.map(x => `
    <div class="testi">
      <div class="quote-mark">"</div>
      <p class="testo">${x.testo}</p>
      <div class="autore">— ${x.autore}</div>
    </div>
  `).join('');

  // Prenota
  document.getElementById('prenota-eyebrow').textContent = t.prenota.eyebrow;
  document.getElementById('prenota-titolo').textContent = t.prenota.titolo;
  document.getElementById('prenota-testo').textContent = t.prenota.testo;

  const f = t.prenota.form;
  document.getElementById('label-nome').textContent = f.labelNome;
  document.getElementById('input-nome').placeholder = f.placeholderNome;
  document.getElementById('label-telefono').textContent = f.labelTelefono;
  document.getElementById('input-telefono').placeholder = f.placeholderTelefono;
  document.getElementById('label-servizio').textContent = f.labelServizio;
  document.getElementById('select-servizio').innerHTML = f.opzioniServizio.map(o => `<option>${o}</option>`).join('');
  document.getElementById('label-note').textContent = f.labelNote;
  document.getElementById('input-note').placeholder = f.placeholderNote;
  document.getElementById('bottone-invia').textContent = f.bottone;
  document.getElementById('form-nota').textContent = f.nota;

  // Footer
  document.getElementById('footer-descrizione').textContent = t.footer.descrizione;
  document.getElementById('footer-naviga-titolo').textContent = t.footer.colonnaNaviga.titolo;
  document.getElementById('footer-naviga-voci').innerHTML = t.footer.colonnaNaviga.voci.map((v, i) => {
    const ancore = ['#servizi', '#rituale', '#prezzi', '#testimonianze'];
    return `<li><a href="${ancore[i]}">${v}</a></li>`;
  }).join('');
  document.getElementById('footer-social-titolo').textContent = t.footer.colonnaSocial.titolo;
  document.getElementById('footer-copyright').textContent = t.footer.copyright;
  document.getElementById('footer-piva').textContent = t.footer.partitaIva;
}

/* ---------- INSERISCE I DATI DI CONTATTO NELLA STRUTTURA HTML ---------- */
function renderContatti(){
  const c = CONTATTI;

  document.getElementById('contatto-indirizzo').textContent = `${c.indirizzo.via}, ${c.indirizzo.citta}`;
  document.getElementById('contatto-orari').textContent = c.orari.testo;
  document.getElementById('contatto-telefono-email').textContent = `${c.email} · ${c.telefono}`;

  document.getElementById('footer-social-voci').innerHTML = `
    <li><a href="${c.social.instagram}" target="_blank" rel="noopener">Instagram</a></li>
    <li><a href="${c.social.facebook}" target="_blank" rel="noopener">Facebook</a></li>
    <li><a href="${c.social.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
  `;
}

/* ---------- INTERAZIONI: scroll header, animazioni, form ---------- */
function attivaInterazioni(){
  // Ombra header allo scroll
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  });

  // Animazione di comparsa allo scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Invio finto del modulo di prenotazione
  const invia = document.getElementById('bottone-invia');
  invia.addEventListener('click', () => {
    const nome = document.getElementById('input-nome').value.trim();
    if(!nome){
      alert(TESTI.prenota.form.erroreNome);
      return;
    }
    invia.textContent = TESTI.prenota.form.bottoneInviato;
    invia.disabled = true;
    invia.style.opacity = '0.7';
  });
}