// Configure with country code + area code + number, digits only, before publishing.
    const WHATSAPP_NUMBER = "5547991028848";
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');
    menuButton.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open'); menuButton.setAttribute('aria-expanded','false');
    }));
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('requestForm').addEventListener('submit', event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const dateValue = form.get('date');
      const dateText = dateValue ? new Date(dateValue + 'T12:00:00').toLocaleDateString('pt-BR') : 'a combinar';
      const details = (form.get('details') || '').trim();
      const message = [
        'Olá! Acessei o site Entre Nós e gostaria de consultar um atendimento.',
        `Tipo de atendimento: ${form.get('service')}.`,
        `Duração: ${form.get('hours') || 'a combinar'}.`,
        `Cidade: ${form.get('city')}.`,
        `Data desejada: ${dateText}.`,
        details ? `Informações adicionais: ${details}` : '',
        'Poderia me informar o valor e a disponibilidade?'
      ].filter(Boolean).join('\n');
      const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : 'https://wa.me/';
      window.open(`${base}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    });
    document.querySelectorAll('.wa-link').forEach(link => link.addEventListener('click', event => {
      if (link.getAttribute('href') === '#contato') return;
      event.preventDefault();
      const message = 'Olá! Acessei o site Entre Nós e gostaria de consultar horários e valores para companhia e apoio cotidiano.';
      const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : 'https://wa.me/';
      window.open(`${base}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    }));
