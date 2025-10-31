const pageTemplates = {
    home: {
        title: 'Casa das Patinhas — Início',
        header: `<div class="header-brand"><h1>Casa das Patinhas</h1><p>Resgatando e encontrando lares amorosos para cães e gatos.</p></div>`,
        main: `
        <section class="hero" aria-labelledby="sobre-title">
            <div class="card">
            <h2 id="sobre-title">Sobre a nossa organização</h2>
            <p>Somos uma organização sem fins lucrativos dedicada ao resgate, reabilitação e adoção de animais domésticos. Trabalhamos com voluntários, veterinários parceiros e apoio da comunidade.</p>
            <p>Atuamos nas áreas de resgate, castração, educação e reintegração familiar para animais em situação de risco.</p>
            </div>
            <figure>
            <img src="assets/imagens/voluntarios-ONG.jpg" alt="pessoa cercada por cães" width="400">
            <figcaption>Voluntária visitando nossa ONG.</figcaption>
            </figure>
        </section>
        <section aria-labelledby="contato-title">
            <h2 id="contato-title">Informações de contato</h2>
            <address>
            <p><strong>Telefone:</strong> (85) 98678-9980</p>
            <p><strong>E-mail:</strong> contato@casadaspatinhas.org.br</p>
            <p><strong>Endereço (sede):</strong> Rua cinco, 333 — Fortaleza, CE</p>
            </address>
        </section>
        <section aria-labelledby="adote-title">
            <h2 id="adote-title">Como adotar</h2>
            <p>Você pode conhecer nossos animais através das campanhas e feiras de adoção. Para iniciar o processo, preencha o formulário de cadastro e agende uma visita.</p>
            <p><a href="/cadastro.html" class="btn btn-cta" data-nav-link>Ir para o formulário de cadastro</a></p>
        </section>
        `,
    },
    projects: {
        title: 'Casa das Patinhas — Projetos',
        header: `<div class="header-brand"><h1>Nossos Projetos</h1></div>`,
        main: `
        <section class="projects" aria-labelledby="projetos-title">
            <h2 id="projetos-title">Nossas iniciativas</h2>
            <article class="project" aria-labelledby="voluntariado-title">
            <h3 id="voluntariado-title">Voluntariado</h3>
            <figure>
                <img src="assets/imagens/voluntarios-ONG.jpg" alt="Voluntária cuidando de um cão">
                <figcaption>Voluntária cuidando de um dos animais resgatados.</figcaption>
            </figure>
            <p>Quem pode ser voluntário? Qualquer pessoa maior de idade, com disponibilidade mínima semanal, pode participar. Temos tarefas presenciais e remotas.</p>
            <h4>Como se inscrever</h4>
            <ol>
                <li>Preencha o formulário de <a href="/cadastro.html" data-nav-link>cadastro</a>.</li>
                <li>Participe de uma reunião de orientação.</li>
                <li>Receba treinamento sobre manejo e cuidado animal.</li>
            </ol>
            </article>
        </section>
        `,
    },
    register: {
        title: 'Cadastro — Casa das Patinhas',
        header: `<div class="header-brand"><h1>Formulário de Cadastro</h1></div>`,
        main: `
        <figure>
            <img src="assets/imagens/adocao-ONG.jpg" alt="cães filhotes para adoção">
            <figcaption>Faça parte da mudança: cadastre-se e ajude um animal a encontrar um lar.</figcaption>
        </figure>
        
        <form id="cadastroForm" novalidate>
            <fieldset>
            <legend>Dados pessoais</legend>
            <div class="row">
                <div>
                <label for="nome">Nome completo *</label>
                <input id="nome" name="nome" type="text" required minlength="3" placeholder="Seu nome completo">
                </div>
                <div>
                <label for="email">E‑mail *</label>
                <input id="email" name="email" type="email" required placeholder="seu@exemplo.com">
                </div>
                <div>
                <label for="cpf">CPF *</label>
                <input id="cpf" name="cpf" type="text" inputmode="numeric" required maxlength="14" placeholder="000.000.000-00" aria-describedby="cpfHelp">
                <p id="cpfHelp" class="small">Formato: 000.000.000-00</p>
                </div>
                <div>
                <label for="telefone">Telefone *</label>
                <input id="telefone" name="telefone" type="tel" inputmode="tel" required maxlength="15" placeholder="(00) 91234-5678">
                </div>
                <div>
                <label for="nascimento">Data de nascimento *</label>
                <input id="nascimento" name="nascimento" type="date" required>
                </div>
                <div>
                <label for="tipoCadastro">Motivo do cadastro *</label>
                <select id="tipoCadastro" name="tipoCadastro" required>
                    <option value="">— selecione —</option>
                    <option value="adocao">Adoção</option>
                    <option value="voluntariado">Voluntariado</option>
                    <option value="doacao">Doação</option>
                </select>
                </div>
            </div>
            </fieldset>
            <fieldset>
            <legend>Endereço</legend>
            <div class="row">
                <div class="full">
                <label for="endereco">Endereço *</label>
                <input id="endereco" name="endereco" type="text" required placeholder="Rua, número, complemento">
                </div>
                <div>
                <label for="cep">CEP *</label>
                <input id="cep" name="cep" type="text" inputmode="numeric" required maxlength="9" placeholder="00000-000">
                </div>
                <div>
                <label for="cidade">Cidade *</label>
                <input id="cidade" name="cidade" type="text" required>
                </div>
                <div>
                <label for="estado">Estado *</label>
                <input id="estado" name="estado" type="text" required maxlength="2" placeholder="CE">
                </div>
            </div>
            </fieldset>
            <fieldset>
            <legend>Informações adicionais</legend>
            <label for="observacoes">Observações (alergias, experiência com animais, disponibilidade)</label>
            <textarea id="observacoes" name="observacoes" rows="4"></textarea>
            </fieldset>
            <div class="actions">
            <button type="reset" form="cadastroForm">Limpar</button>
            <button type="submit">Enviar cadastro</button>
            </div>
            <p id="formMessage" class="small" role="status" aria-live="polite"></p>
        </form>
        `,
    },
    notFound: {
        title: 'Página não encontrada',
        header: `<div class="header-brand"><h1>Ops! Página não encontrada</h1></div>`,
        main: `<section class="text-center"><h2>Erro 404</h2><p>A página que você está procurando não existe.</p><p><a href="/index.html" class="btn" data-nav-link>Voltar ao Início</a></p></section>`,
    },
};


const mobileNavModule = {
    init() {
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('header nav');

        if (!navToggle || !nav) return;

        navToggle.removeEventListener('click', this.toggleNav.bind(this));
        
        navToggle.addEventListener('click', this.toggleNav.bind(this));
        
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', this.closeNav);
        });
    },

    toggleNav() {
        const navToggle = document.querySelector('.nav-toggle');
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true'; 
        
        navToggle.setAttribute('aria-expanded', !isExpanded);
        
        document.body.classList.toggle('nav-open');
    },
    
    closeNav() {
        const navToggle = document.querySelector('.nav-toggle');
        if (document.body.classList.contains('nav-open')) {
            document.body.classList.remove('nav-open');
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }
};


const formModule = {
    utils: {
        aplicarMascara(input, mascaraFn) {
            const listener = (e) => {
                const pos = input.selectionStart;
                const oldLen = input.value.length;
                input.value = mascaraFn(input.value);
                const newLen = input.value.length;
                if (pos !== null) {
                input.selectionEnd = pos + (newLen - oldLen);
                }
            };
            input.addEventListener('input', listener);
            return listener;
        },
        mascaraCPF: (v) => {
            v = v.replace(/\D/g, ''); v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d)/, '$1.$2'); v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            return v.slice(0, 14);
        },
        mascaraTelefone: (v) => {
            v = v.replace(/\D/g, ''); if (v.length <= 2) return v;
            v = v.replace(/^(\d{2})(\d)/, '($1) $2'); v = v.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
            return v.slice(0, 15);
        },
        mascaraCEP: (v) => { v = v.replace(/\D/g, ''); v = v.replace(/(\d{5})(\d)/, '$1-$2'); return v.slice(0, 9); },
        validarCPF: (cpf) => {
            cpf = cpf.replace(/\D/g, ''); if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
            let soma = 0; let resto;
            for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) resto = 0;
            if (resto !== parseInt(cpf.substring(9, 10))) return false;
            soma = 0;
            for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) resto = 0;
            if (resto !== parseInt(cpf.substring(10, 11))) return false;
            return true;
        },
    },

    handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const msg = form.querySelector('#formMessage');
        const cpfInput = form.querySelector('#cpf');
        const nascimentoInput = form.querySelector('#nascimento');

        if (!form.checkValidity()) { form.reportValidity(); msg.textContent = 'Por favor, corrija os campos obrigatórios.'; msg.className = 'error'; return; }
        if (!formModule.utils.validarCPF(cpfInput.value)) { msg.textContent = 'CPF inválido. Verifique o número digitado.'; msg.className = 'error'; cpfInput.focus(); return; }

        if (nascimentoInput.value) {
            const hoje = new Date();
            const nasc = new Date(nascimentoInput.value + 'T00:00:00');
            let idade = hoje.getFullYear() - nasc.getFullYear();
            const m = hoje.getMonth() - nasc.getMonth();
            if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) { idade--; }
            if (idade < 18) { msg.textContent = 'É necessário ter 18 anos ou mais para se cadastrar.'; msg.className = 'error'; nascimentoInput.focus(); return; }
        }

        msg.textContent = 'Cadastro enviado com sucesso! Entraremos em contato em breve.';
        msg.className = '';
        form.reset();
    },

    init() {
        const form = document.getElementById('cadastroForm');
        if (!form) return;

        form.removeEventListener('submit', formModule.handleSubmit);
        form.addEventListener('submit', formModule.handleSubmit);

        const cpfInput = document.getElementById('cpf');
        const telInput = document.getElementById('telefone');
        const cepInput = document.getElementById('cep');
        const msg = document.getElementById('formMessage');

        formModule.utils.aplicarMascara(cpfInput, formModule.utils.mascaraCPF);
        formModule.utils.aplicarMascara(telInput, formModule.utils.mascaraTelefone);
        formModule.utils.aplicarMascara(cepInput, formModule.utils.mascaraCEP);
    
        const clearErrorListener = () => { msg.textContent = ''; msg.className = 'small'; };
        [cpfInput, telInput, cepInput, document.getElementById('email')].forEach(el => {
            el.addEventListener('input', clearErrorListener);
        });
    },

    destroy() { 

    },
};


const spaRouter = {
    appRoot: null,
    headerContent: null,
    navLinks: [],

    BASE_PATH: '/casa-das-patinhas/parte-4', 
    
    routes: { 
        '/': 'home', 
        '/projetos.html': 'projects', 
        '/cadastro.html': 'register', 
        '/index.html': 'home' 
    },

    normalizePath(path) {
        
        if (path.startsWith(this.BASE_PATH)) {
            path = path.substring(this.BASE_PATH.length);
        }

        if (path === '' || path === '/') {
            return '/index.html'; 
        }

        return path;
    },

    init() {
        this.appRoot = document.getElementById('app-root');
        this.headerContent = document.querySelector('header .header-content');
        this.navLinks = document.querySelectorAll('header nav a');

        this.navLinks.forEach(link => { link.addEventListener('click', this.navigate.bind(this)); });
        
        this.appRoot.addEventListener('click', (e) => {
            if (e.target.matches('a[data-nav-link]')) { this.navigate.bind(this)(e); }
        });
        
        window.addEventListener('popstate', this.handlePopState.bind(this));

        mobileNavModule.init();
        
        this.renderPage(this.normalizePath(window.location.pathname)); 
    },

    navigate(e) {
        e.preventDefault(); 
        
        let path = e.currentTarget.getAttribute('href');
        
        
        if (path === '/') { 
            path = '/index.html';
        } else if (path === '/projetos') {
            path = '/projetos.html';
        } else if (path === '/cadastro') { 
            path = '/cadastro.html';
        }

        
        let fullPath = `${this.BASE_PATH}${path}`;
        
        const currentNormalizedPath = this.normalizePath(window.location.pathname);
        
        
        if (currentNormalizedPath !== path) {
             
             window.history.pushState(null, '', fullPath);

             
             this.renderPage(path);
        }
    },

    handlePopState() {
        
        this.renderPage(this.normalizePath(window.location.pathname));
    },

    renderPage(path) {
        if (path === '/') path = '/index.html';

        const pageKey = this.routes[path] || 'notFound'; 
        const pageData = pageTemplates[pageKey];

        this.appRoot.innerHTML = pageData.main;

        const currentNav = this.headerContent.querySelector('nav');
        const currentToggle = this.headerContent.querySelector('.nav-toggle');
        this.headerContent.innerHTML = pageData.header;
        
        if (currentNav && currentToggle) {
            this.headerContent.appendChild(currentNav);
            this.headerContent.appendChild(currentToggle);
        } 
    
        document.title = pageData.title;

        // CORREÇÃO CRÍTICA AQUI: Padroniza o link para comparação
        this.navLinks.forEach(link => {
            let linkPath = link.getAttribute('href');
            
            if (linkPath === '/') {
                linkPath = '/index.html';
            } else if (linkPath === '/projetos') {
                linkPath = '/projetos.html';
            } else if (linkPath === '/cadastro') { 
                linkPath = '/cadastro.html';
            }
            
            if (path === linkPath) {
                 link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });


        this.appRoot.querySelectorAll('a[data-nav-link]').forEach(link => {
             const href = link.getAttribute('href');
             if (href === '/cadastro') link.setAttribute('href', '/cadastro.html');
             if (href === '/projetos') link.setAttribute('href', '/projetos.html');
             if (href === '/') link.setAttribute('href', '/index.html');
        });
        

        formModule.destroy();
        if (pageKey === 'register') { formModule.init(); }
        window.scrollTo(0, 0);
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const anoSpan = document.getElementById('ano-footer');
    if (anoSpan) {
        anoSpan.textContent = new Date().getFullYear();
    }

    spaRouter.init();
});