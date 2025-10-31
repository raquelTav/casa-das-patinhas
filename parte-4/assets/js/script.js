const pageTemplates = {
    header: `
        <div class="header-content container">
            <h1>Casa das Patinhas</h1>
            <nav role="navigation" id="main-navigation" aria-label="Navegação Principal">
                <ul>
                    <li><a href="/index.html" data-nav-link>Início</a></li>
                    <li>
                        <a href="/projetos.html" data-nav-link>Projetos</a>
                        <ul class="dropdown-menu">
                            <li><a href="/projetos.html#adocao" data-nav-link>Adoção</a></li>
                            <li><a href="/projetos.html#voluntariado" data-nav-link>Voluntariado</a></li>
                        </ul>
                    </li>
                    <li><a href="/cadastro.html" data-nav-link>Cadastro</a></li>
                </ul>
            </nav>

            <button class="nav-toggle" aria-expanded="false" aria-controls="main-navigation">
                <span class="sr-only">Menu</span>
                <span class="nav-toggle-icon" aria-hidden="true"></span>
            </button>
        </div>
    `,
    
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
            <img src="assets/imagens/Voluntaria-ONG.jpg" alt="pessoa cercada por cães" width="400">
            <figcaption>Voluntária visitando nossa ONG.</figcaption>
            </figure>
        </section>
        <section aria-labelledby="contato-title">
            <h2 id="contato-title">Informações de contato</h2>
            <address>
            <p><strong>Telefone:</strong> (85) 98678-9980</p>
            <p><strong>E-mail:</strong> <a href="mailto:contato@casadaspatinhas.org.br">contato@casadaspatinhas.org.br</a></p>
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
                <div class="tags">
                    <span class="badge">Adoção</span>
                    <span class="badge badge-secondary">Cuidado</span>
                    <span class="badge">Comunidade</span>
                </div>
                
                <h3 id="voluntariado-title">Voluntariado</h3>
                <figure>
                    <img src="assets/imagens/voluntarios-ONG.jpg" alt="Voluntáros em nossa ONG">
                </figure>
                <p>Quem pode ser voluntário? Qualquer pessoa maior de idade, com disponibilidade mínima semanal, pode participar. Temos tarefas presenciais e remotas.</p>
                <h4>Como se inscrever</h4>
                <ol>
                    <li>Preencha o formulário de <a href="/cadastro.html" data-nav-link>cadastro</a>.</li>
                    <li>Participe de uma reunião de orientação.</li>
                    <li>Receba treinamento sobre manejo e cuidado animal.</li>
                </ol>
            </article>
            
            <article class="project" aria-labelledby="castracao-title">
                <div class="tags">
                    <span class="badge">Saúde</span>
                    <span class="badge badge-secondary">Prevenção</span>
                </div>
                
                <h3 id="castracao-title">Castração e Saúde Animal</h3>
                <p>Realizamos campanhas de castração de baixo custo e oferecemos suporte veterinário básico para os animais sob nosso cuidado.</p>
                <h4>Objetivos:</h4>
                <ul>
                    <li>Controlar a população de animais de rua.</li>
                    <li>Garantir a saúde e bem-estar dos animais resgatados.</li>
                </ul>
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
        
        document.querySelectorAll('header nav a').forEach(link => {
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
        if (window.innerWidth <= 768 && document.body.classList.contains('nav-open')) {
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

        
        msg.textContent = '';
        msg.className = 'small';
        
        if (!form.checkValidity()) { 
            form.reportValidity(); 
            msg.textContent = 'Por favor, corrija os campos obrigatórios.'; 
            msg.className = 'small error';
            return; 
        }
        
        if (!formModule.utils.validarCPF(cpfInput.value)) { 
            msg.textContent = 'CPF inválido. Verifique o número digitado.'; 
            msg.className = 'small error'; 
            cpfInput.focus(); 
            return; 
        }

        if (nascimentoInput.value) {
            const hoje = new Date();
            const nasc = new Date(nascimentoInput.value + 'T00:00:00'); 
            let idade = hoje.getFullYear() - nasc.getFullYear();
            const m = hoje.getMonth() - nasc.getMonth();
            if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) { idade--; }
            if (idade < 18) { 
                msg.textContent = 'É necessário ter 18 anos ou mais para se cadastrar.'; 
                msg.className = 'small error'; 
                nascimentoInput.focus(); 
                return; 
            }
        }

        msg.textContent = 'Cadastro enviado com sucesso! Entraremos em contato em breve.';
        msg.className = 'small alert-success'; 
        
      
        setTimeout(() => {
            form.reset();
            msg.textContent = '';
            msg.className = 'small';
        }, 3000);
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
        [cpfInput, telInput, cepInput, document.getElementById('email'), document.getElementById('nascimento')].forEach(el => {
            el.addEventListener('input', clearErrorListener);
            el.addEventListener('focus', clearErrorListener); 
        });
    },

    destroy() { 
      
    },
};


const spaRouter = {
    appRoot: null,
    headerContainer: null, 
    navLinks: [],

    BASE_PATH: '/casa-das-patinhas/parte-4', 
    

    routes: { 
        '/': 'home', 
        '/projetos.html': 'projects', 
        '/cadastro.html': 'register', 
        '/index.html': 'home' 
    },

    normalizePath(path) {
      
        if (this.BASE_PATH !== '' && path.startsWith(this.BASE_PATH)) {
            path = path.substring(this.BASE_PATH.length);
        }

        if (path === '' || path === '/') {
            return '/index.html'; 
        }

     
        if (path.includes('#')) {
            return path.substring(0, path.indexOf('#'));
        }

        return path;
    },

    init() {
        this.appRoot = document.getElementById('app-root');
        this.headerContainer = document.querySelector('header'); 

     
        this.renderHeader(this.routes[this.normalizePath(window.location.pathname)] || 'notFound');
        
    
        this.navLinks = document.querySelectorAll('header nav a');

        this.navLinks.forEach(link => { link.addEventListener('click', this.navigate.bind(this)); });
        
        this.appRoot.addEventListener('click', (e) => {
            if (e.target.matches('a[data-nav-link]')) { this.navigate.bind(this)(e); }
        });
        
        window.addEventListener('popstate', this.handlePopState.bind(this));

        mobileNavModule.init();
        
        this.renderPage(this.normalizePath(window.location.pathname)); 
    },
    
  
    renderHeader(pageKey) {
        this.headerContainer.innerHTML = pageTemplates.header;
    },


    navigate(e) {
        e.preventDefault(); 
        
        let targetPath = e.currentTarget.getAttribute('href');
        let targetHash = '';
        
        if (targetPath.includes('#')) {
            const parts = targetPath.split('#');
            targetPath = parts[0];
            targetHash = parts[1];
        }

        if (targetPath === '') { targetPath = '/index.html'; }
        else if (!targetPath.startsWith('/')) { targetPath = '/' + targetPath; }

        let fullPath = `${this.BASE_PATH}${targetPath}`;
        if (targetHash) fullPath += `#${targetHash}`;

        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;


        const isSamePage = this.normalizePath(currentPath) === this.normalizePath(targetPath);
        
        if (isSamePage) {
           
            if (targetHash && currentHash !== `#${targetHash}`) {
                window.history.pushState(null, '', fullPath);
                document.getElementById(targetHash)?.scrollIntoView({ behavior: 'smooth' });
            } else if (!targetHash) {
                 window.history.pushState(null, '', fullPath);
                 window.scrollTo(0, 0); 
            }
        } else {
            window.history.pushState(null, '', fullPath);
            this.renderPage(targetPath);
        }
        
    
        mobileNavModule.closeNav();
        
       
        this.updateActiveLink(targetPath);
    },

    handlePopState() {
        this.renderPage(this.normalizePath(window.location.pathname));
    },

    renderPage(path) {
        if (path === '/') path = '/index.html';

        const pageKey = this.routes[path] || 'notFound'; 
        const pageData = pageTemplates[pageKey];

        this.appRoot.innerHTML = pageData.main;

        const navContainer = document.querySelector('header nav');
        const toggleButton = document.querySelector('.nav-toggle');

        this.headerContainer.querySelector('.header-content').innerHTML = pageData.header;
        
   
        if (navContainer && toggleButton) {
            this.headerContainer.querySelector('.header-content').appendChild(navContainer.parentElement); 
        }

        document.title = pageData.title;

     
        this.updateActiveLink(path);
       
        formModule.destroy();
        if (pageKey === 'register') { formModule.init(); }
        
    
        if (window.location.hash) {
            document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
    },
    
    updateActiveLink(currentPath) {
     
        this.navLinks.forEach(link => link.classList.remove('active'));

     
        this.navLinks.forEach(link => {
         
            let linkPath = link.getAttribute('href');
            if (linkPath.includes('#')) {
                linkPath = linkPath.substring(0, linkPath.indexOf('#'));
            }
            
          
            if (linkPath === '/') { linkPath = '/index.html'; }
            else if (linkPath === '/projetos') { linkPath = '/projetos.html'; }
            else if (linkPath === '/cadastro') { linkPath = '/cadastro.html'; }
            
            
            if (currentPath === linkPath) {
                link.classList.add('active');
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
  
    spaRouter.init();
    
    const footerContent = document.querySelector('footer .footer-content p');
    if (footerContent) {
        footerContent.innerHTML = `&copy; ${new Date().getFullYear()} Casa das Patinhas. Todos os direitos reservados.`;
    }
});
