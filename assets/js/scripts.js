// Stick Header

window.addEventListener("scroll", function () {
	const header = document.querySelector(".header");
	const titleHeight = document.querySelector(".header").scrollHeight;

	if (window.scrollY > 80) {
		header.classList.add("header--sticky");
	} else {
		header.classList.remove("header--sticky");
	}
});

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// //Swiper (inicialização)

// //Type 1: Swiper Navigation
// var swiper = new Swiper('.swiper--navigation', {
// 	direction: 'horizontal',
// 	loop: false,
// 	slidesPerView: 1,
// 	spaceBetween: 30,

// 	//Mousewheel control
// 	mousewheel: true,

// 	//Keyboard control
// 	keyboard: {
// 		enabled: true,
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	//Pagination (if needed)
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 		type: 'bullets',
// 	},

// 	// Scrollbar (if needed)
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });

//Type 2: Swiper Vertical
// var swiperVertical = new Swiper('.swiper--vertical', {
// 	direction: 'vertical',
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	mousewheel: true,
// 	pagination: {
// 		el: '.swiper-pagination2',
// 		clickable: true,
// 	},
// });

// //Type 3: Effect Card
// var swiperVertical = new Swiper('.swiper--effect-card', {
// 	effect: 'cards',
// 	grabCursor: true,
// 	pagination: {
// 		el: '.swiper-pagination3',
// 		clickable: true,
// 	},
// });

// Botão de copiar podcast

const copyButton = document.querySelectorAll(".copy-to-clip");

copyButton.forEach((btn) => {
	btn.addEventListener("click", () => {
		copyToClipboard(btn);
		// tooltipShow(btn);

		tooltipFeedback(btn);
	});
});

function copyToClipboard(e) {
	const textToCopy = e.getAttribute("data-link");
	const textarea = document.createElement("textarea");
	textarea.setAttribute("readonly", "");
	textarea.style.position = "absolute";
	textarea.value = textToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
	let feedback = $('[data-toggle="tooltip"]');

	// feedback.tooltip('show');

	b.addEventListener("mouseout", () => {
		feedback.tooltip("hide");
	});
}

// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll(".lightbox");

imageToLightbox.forEach((image) => {
	image.addEventListener("click", () => {
		if (!image.classList.contains("lightbox--show")) {
			const getImage = image.querySelector("img");
			const getImageSrc = getImage.getAttribute("src");
			const imageLightbox = document.createElement("div");

			imageLightbox.classList.add("lightbox__image");

			document.body.appendChild(imageLightbox);
			imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
			console.log(getImageSrc);

			image.classList.add("lightbox--show");

			document.body.style.overflow = "hidden";
			document.body.style.userSelect = "none";

			closeLightbox(imageLightbox);
		}

		function closeLightbox(e) {
			const lightboxOpen = document.querySelector(".lightbox__image");
			e.addEventListener("click", () => {
				document.body.removeChild(e);
				image.classList.remove("lightbox--show");
				document.body.style.overflow = "auto";
				document.body.style.userSelect = "auto";
			});
		}
	});
});

// Lightbox Scroll (insert the class "lightbox-scroll" into <figure>)

const imageToLightboxWithScroll = document.querySelectorAll(".lightbox-scroll");

imageToLightboxWithScroll.forEach((imageScroll) => {
	imageScroll.addEventListener("click", () => {
		if (!imageScroll.classList.contains("lightbox-scroll--show")) {
			const getImageScroll = imageScroll.querySelector("img");
			const getImageScrollSrc = getImageScroll.getAttribute("src");
			const imageLightboxScroll = document.createElement("div");

			imageLightboxScroll.classList.add("lightbox-scroll__image");

			document.body.appendChild(imageLightboxScroll);
			imageLightboxScroll.innerHTML = `<img src="${getImageScrollSrc}"/>`;
			console.log(getImageScrollSrc);

			imageScroll.classList.add("lightbox-scroll--show");

			document.body.style.overflow = "hidden";
			document.body.style.userSelect = "none";

			closeLightboxScroll(imageLightboxScroll);
		}

		function closeLightboxScroll(s) {
			const lightboxScrollOpen = document.querySelector(".lightbox-scroll__image");
			s.addEventListener("click", () => {
				document.body.removeChild(s);
				imageScroll.classList.remove("lightbox-scroll--show");
				document.body.style.overflow = "auto";
				document.body.style.userSelect = "auto";
			});
		}
	});
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	const boxAttribute = box.getAttribute("data-box");

	const boxLabel = box.querySelector(".label");

	boxLabel.innerHTML = boxAttribute;
});

// Modal - Criação dos modais principais

const modalInfos = {
	creditos: {
		ariaLabel: "creditos",
		modalSize: "modal-lg",
		modalTitle: "Créditos",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Alexandre Padilha</p>
						<p class="small text-muted"><em>Ministro</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>
						<p class="mb-1">Marly Cruz</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora Geral</em></p>

						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora Adjunta</em></p>
						
						<p class="mb-1">Renata Bernardes David</p>
						<p class="small text-muted"><em>Coordenadora de Produção</em></p>

						<p class="mb-1">Juliana Dutra</p>
						<p class="small text-muted"><em>Gerente de Produção</em></p>

						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de Comunicação</em></p>
					
						<p class="mb-1">Alessandra Siqueira</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>

					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>UX/UI Designer e Front-end</em></p>
						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>

						<p class="mb-1">Bruno Athaydes</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>

						<p class="mb-1">Teo Venerando</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>
			
						<span class="h6 mb-3 d-block">Recursos Educacionais</span>
						
						<p class="mb-1">Carmélia Brito</p>
						<p class="small text-muted"><em>Bibliotecária</em></p>

						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>

						<p class="mb-1">Maria Angélica Marcondes Drska</p>
						<p class="small text-muted"><em>Revisão de Português</em></p>

						<p class="mb-1">Janaína Vieira</p>
						<p class="small text-muted"><em>Revisão de Português</em></p>


						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>

						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>

						<p class="mb-1">Fábio Carneiro</p>
						<p class="small text-muted"><em>Designer gráfico e web designer</em></p>
					</div>

					<span class="h5 mb-3 d-block">Coordenação do Acadêmica</span>
					
					<div class="mb-5">
						<p class="mb-1">Anne Clio</p>
						<p class="mb-1">Vanessa Jorge</p>
					</div>

					<div class="mb-5">
						<span class="h6 mb-3 d-block">Conteudistas</span>
						
						<p class="mb-1"><strong>Módulo 1: Fundamentos da Ciência Aberta</strong></p>
						
						<p class="mb-1">Anne Clinio</p>
						<p class="mb-1">Fabiano Couto Corrêa da Silva</p>
	
						<br>

						<p class="mb-1"><strong>Módulo 2: Marcos Legais</strong></p>

						<p class="mb-1">Allan Rocha de Souza</p>
						<p class="mb-1">Francisco José Tavares do Nascimento</p>
						<p class="mb-1">Marcelo Campos D´Aguila</p>

						<br>

						<p class="mb-1"><strong>Módulo 3: Acesso Aberto</strong></p>

						<p class="mb-1">Abel Laerte Packer</p>
						<p class="mb-1">Adeilton Alves Brandão</p>
						<p class="mb-1">Ana Maria Neves Maranhão</p>
						<p class="mb-1">Fabiano Couto Corrêa da Silva</p>
						<p class="mb-1">Roberta Cardoso Cerqueira</p>
						<p class="mb-1">Solange Maria dos Santos</p>
						<p class="mb-1">Viviane Santos de Oliveira Veiga</p>

						<br>

						<p class="mb-1"><strong>Módulo 4: Gestão, Compartilhamento e Abertura de Dados para Pesquisa</strong></p>

						<p class="mb-1">Anderson Luiz Cabral dos Santos </p>
						<p class="mb-1">Anne Clinio</p>
						<p class="mb-1">Bethânia de Araújo Almeida</p>
						<p class="mb-1">Francisco José Tavares do Nascimento</p>
						<p class="mb-1">Jaqueline Gomes Oliveira</p>
						<p class="mb-1">Luis Olavo Bonino</p>
						<p class="mb-1">Marcelo Campos D´Aguila</p>
						<p class="mb-1">Maria de Fátima Moreira Martins</p>
						<p class="mb-1">Patricia Henning</p>
						<p class="mb-1">Pedro Príncipe</p>
						<p class="mb-1">Viviane Santos de Oliveira Veiga</p>
						<p class="mb-1">Vanessa Jorge</p>

						<br>

						<p class="mb-1"><strong>Módulo 5: Educação Aberta e Recursos Educacionais Abertos</strong></p>

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="mb-1">Felipe da Silva Ponte de Carvalho</p>
						<p class="mb-1">Mariano Gomes Pimentel</p>
						<p class="mb-1">Rosane Mendes</p>
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografia: {
		ariaLabel: "bibliografia",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia",
		modalBody: `
			<div class="row justify-content-center pt-5">
    <div class="col-12 col-md-11">
        <div class="mb-5">
            <div class="accordion accordion-flush" id="accordion-bibliografia-CA">
                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Módulo 1</button>
                    </h5>
                    <div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
                        <div class="accordion-body">
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALBAGLI, Sarita; APPEL, Andre Luiz; MACIEL, Maria Lucia. E-Science, ciência aberta e o regime de informação em ciência e tecnologia. Tendências da Pesquisa Brasileira em Ciência da Informação, v. 7, n. 1, jan./jun. 2014.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BAKER, Monya. Is there a reproducibility crisis? Nature, v. 533, p. 452-454, May 2016. Disponível em: <a href='https://www.nature.com/polopoly_fs/1.19970!/menu/main/topColumns/topLeftColumn/pdf/533452a.pdf' target='_blank' rel='noopener noreferrer'>https://www.nature.com/polopoly_fs/1.19970!/menu/main/topColumns/topLeftColumn/pdf/533452a.pdf</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BERTIN, Patrícia et al. A parceria para governo aberto como plataforma para o avanço da ciência aberta no Brasil. Transinformação, v. 31, e190020, 2019. DOI: <a href='https://doi.org/10.1590/2318-0889201931e190020' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/2318-0889201931e190020</a>.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRADLEY, Jean-Claude. Open notebook science. Drexel CoAS E-Learning, Philadelphia, 26 Sep. 2006. Disponível em: <a href='https://drexel-coas-elearning.blogspot.com/2006/09/open-notebook-science.html' target='_blank' rel='noopener noreferrer'>https://drexel-coas-elearning.blogspot.com/2006/09/open-notebook-science.html</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CALLON, Michel; RABEHARISOA, Vololona. Research “in the wild” and the shaping of new social identities. Technology in Society, v. 25, n. 2, p. 193–204, 2003. DOI: https://doi.org/10.1016/S0160-791X(03)00021-6. Disponível em: <a href='https://www.sciencedirect.com/science/article/abs/pii/S0160791X03000216' target='_blank' rel='noopener noreferrer'>https://www.sciencedirect.com/science/article/abs/pii/S0160791X03000216</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAPES. Brasil publicou quase 157 mil artigos em 2023, com destaque para acesso aberto. 2024. Disponível em: <a href='https://www.gov.br/capes/pt-br/assuntos/noticias/brasil-publicou-quase-157-mil-artigos-em-2023' target='_blank' rel='noopener noreferrer'>https://www.gov.br/capes/pt-br/assuntos/noticias/brasil-publicou-quase-157-mil-artigos-em-2023</a>. Acesso em: 26 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CARNEIRO, Sueli. <em>Dispositivo de racialidade: a construção do outro como não ser como fundamento do ser</em>. Rio de Janeiro: Zahar, 2023.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CASATI, Fabio; GIUNCHIGLIA, Fausto; MARCHESE, Maurizio. Liquid publications: scientific publications meet the web. Technical Report DIT-07-073, Dec. 2007. Disponível em: <a href='https://core.ac.uk/reader/150081940' target='_blank' rel='noopener noreferrer'>https://core.ac.uk/reader/150081940</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CONTROLADORIA-GERAL DA UNIÃO (CGU). O que é o governo aberto. Disponível em: <a href='https://www.gov.br/cgu/pt-br/governo-aberto/governo-aberto-no-brasil/principios' target='_blank' rel='noopener noreferrer'>https://www.gov.br/cgu/pt-br/governo-aberto/governo-aberto-no-brasil/principios</a>. Acesso em: 10 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CHAN, Leslie; OKUNE, Angela; SAMBULI, Isaac. In: ALBAGLI, Sarita; MACIEL, Maria Lucia; ABDO, Alexandre (org.). <em>Ciência aberta, questões abertas</em>. Brasília: IBICT, 2015. p. 312. Disponível em: <a href='http://livroaberto.ibict.br/handle/1/1060' target='_blank' rel='noopener noreferrer'>http://livroaberto.ibict.br/handle/1/1060</a>. Acesso em: 12 ago. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DECLARAÇÃO TOLUCA-CIDADE DO CABO SOBRE O ACESSO ABERTO DIAMANTE. 2024. Disponível em: <a href='https://doasummit.uct.ac.za/' target='_blank' rel='noopener noreferrer'>https://doasummit.uct.ac.za/</a>. Acesso em: 15 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EUROPEAN COMMISSION. <em>Open innovation, open science, open to the world: a vision for Europe</em>. 2016. Disponível em: <a href='https://ec.europa.eu/digital-single-market/en/news/open-innovation-open-science-open-world-vision-europe' target='_blank' rel='noopener noreferrer'>https://ec.europa.eu/digital-single-market/en/news/open-innovation-open-science-open-world-vision-europe</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EUROPEAN UNION. <em>Horizon 2020: the EU framework programme for research and innovation</em>. Disponível em: <a href='https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-2020_en' target='_blank' rel='noopener noreferrer'>https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-2020_en</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FUNDAÇÃO PARA A CIÊNCIA E A TECNOLOGIA (FCT). 10 razões para adotar a ciência aberta. Disponível em: <a href='https://docs.wixstatic.com/ugd/a8bd7c_2a8c57f2c5664d68a00569bc2a0343ea.pdf' target='_blank' rel='noopener noreferrer'>https://docs.wixstatic.com/ugd/a8bd7c_2a8c57f2c5664d68a00569bc2a0343ea.pdf</a>. Acesso em: 23 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HARNAD, Stevan. Scholarly skywriting and the prepublication continuum of scientific inquiry. <em>Psychological Science</em>, v. 1, n. 6, p. 342–344, Nov. 1990. DOI: <a href='https://doi.org/10.1111/j.1467-9280.1990.tb00234.x' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1111/j.1467-9280.1990.tb00234.x</a>. Disponível em: <a href='https://journals.sagepub.com/doi/pdf/10.1111/j.1467-9280.1990.tb00234.x' target='_blank' rel='noopener noreferrer'>https://journals.sagepub.com/doi/pdf/10.1111/j.1467-9280.1990.tb00234.x</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INICIATIVA BRASILEIRA DE REPRODUTIBILIDADE. Disponível em: <a href='https://www.reprodutibilidade.bio.br/' target='_blank' rel='noopener noreferrer'>https://www.reprodutibilidade.bio.br/</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INICIATIVA DO ACESSO ABERTO DE BUDAPESTE. Declaração. Disponível em: <a href='https://www.budapestopenaccessinitiative.org/read/' target='_blank' rel='noopener noreferrer'>https://www.budapestopenaccessinitiative.org/read/</a>. Acesso em: 30 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KOWALTOWSKI, Alicia J.; ARRUDA, José R. F.; NUSSENZVEIG, Paulo A.; SILBERMAR, Ariel Mariano. Guest post — Article processing charges are a heavy burden for middle-income countries. Publicado em: 9 mar. 2023. Disponível em: <a href='https://scholarlykitchen.sspnet.org/2023/03/09/guest-post-article-processing-charges-are-a-heavy-burden-for-middle-income-countries/' target='_blank' rel='noopener noreferrer'>https://scholarlykitchen.sspnet.org/2023/03/09/guest-post-article-processing-charges-are-a-heavy-burden-for-middle-income-countries/</a>. Acesso em: 10 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LAFUENTE, Antonio; ESTALELLA, Adolfo. “Ways of Science: Public, Open, and Commons.” In: ALBAGLI, Sarita; MACIEL, Maria Lucia; ABDO, Alexandre Hannud (org.). Open Science, Open Issues. Brasília: IBICT; Rio de Janeiro: UNIRIO, 2015. Disponível em: <a href='http://livroaberto.ibict.br/bitstream/1/1061/1' target='_blank' rel='noopener noreferrer'>http://livroaberto.ibict.br/bitstream/1/1061/1</a>. Acesso em: 30 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LATOUR, Bruno. <em>Ciência em ação: como seguir cientistas e engenheiros sociedade a fora</em>. Tradução: Ivone C. Benedetti. 2. ed. São Paulo: UNESP, 2011. 422 p. Disponível em: <a href='https://www.amazon.com.br/Ci%C3%AAncia-em-a%C3%A7%C3%A3o-Bruno-Latour/dp/8539301903' target='_blank' rel='noopener noreferrer'>https://www.amazon.com.br/Ci%C3%AAncia-em-a%C3%A7%C3%A3o-Bruno-Latour/dp/8539301903</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LESSIG, Lawrence. <em>Cultura livre: como a mídia usa a tecnologia e a legislação para barrar a criação cultural e controlar a criatividade</em>. Tradução: Cardoso Filho, Rodolfo S. et al. São Paulo: Trama, 2005. 336 p. Disponível em: <a href='https://www.academia.edu/26581572/CULTURA_LIVRE_Como_a_Grande_M%C3%ADdia_Usa_a_Tecnologia_e_a_Lei_Para_Bloquear_a_Cultura_e_Controlar_a_Criatividade' target='_blank' rel='noopener noreferrer'>https://www.academia.edu/26581572/CULTURA_LIVRE_Como_a_Grande_M%C3%ADdia_Usa_a_Tecnologia_e_a_Lei_Para_Bloquear_a_Cultura_e_Controlar_a_Criatividade</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MIROWSKI, Philip. <em>The evolution of platform science</em>. <em>Social Research: An International Quarterly</em>, v. 90, n. 4, p. 725–755, 2023. DOI: <a href='https://dx.doi.org/10.1353/sor.2023.a916352' target='_blank' rel='noopener noreferrer'>https://dx.doi.org/10.1353/sor.2023.a916352</a>. Acesso em: 30 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU). <em>Declaração Universal dos Direitos Humanos</em>. Paris, 1948. Disponível em: <a href='https://www.un.org/en/about-us/universal-declaration-of-human-rights' target='_blank' rel='noopener noreferrer'>https://www.un.org/en/about-us/universal-declaration-of-human-rights</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OPEN AND COLLABORATIVE SCIENCE IN DEVELOPMENT NETWORK (OCSDNet). <em>Manifiesto de ciencia abierta y colaborativa: hacia una ciencia abierta inclusiva por el bienestar social y ambiental</em>. 2017. Disponível em: <a href='https://ocsdnet.org/wp-content/uploads/2015/04/Manifesto-Infographic-Spanish-1.pdf' target='_blank' rel='noopener noreferrer'>https://ocsdnet.org/wp-content/uploads/2015/04/Manifesto-Infographic-Spanish-1.pdf</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OPEN KNOWLEDGE FOUNDATION. <em>Open definition</em>. Disponível em: <a href='https://opendefinition.org' target='_blank' rel='noopener noreferrer'>https://opendefinition.org</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PHILLIPS, Tina; FERGUSON, Marion; MINARCHECK, Matthew; PORTICELLA, Nornam; BONNEY, Rick. <em>User’s guide for evaluating learning outcomes in citizen science</em>. Ithaca, NY: Cornell Lab of Ornithology, 2014. Disponível em: <a href='https://www.birds.cornell.edu/citizenscience/wp-content/uploads/2018/10/USERS-GUIDE_linked.pdf' target='_blank' rel='noopener noreferrer'>https://www.birds.cornell.edu/citizenscience/wp-content/uploads/2018/10/USERS-GUIDE_linked.pdf</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">POSADA, Alejandro; CHEN, George. Inequality in knowledge production: the integration of academic infrastructure by big publishers. <em>ELPUB 2018</em>, jun. 2018, Toronto, Canada. Disponível em: <a href='https://hal.archives-ouvertes.fr/hal-01816707/document' target='_blank' rel='noopener noreferrer'>https://hal.archives-ouvertes.fr/hal-01816707/document</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, Boaventura de Sousa. <em>Beyond abyssal thinking: from global lines to ecologies of knowledge</em>. New York: Binghamton University, 2007. 66 p. Disponível em: https://ces.uc.pt/bss/documentos/AbyssalThinking.pdf. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SCHOLZ, Trebor. <em>Cooperativismo de plataforma: contestando a economia do compartilhamento corporativa</em>. Tradução: Rafael A. F. Zanatta. São Paulo: Fundação Rosa Luxemburgo; Elefante; Autonomia Literária, 2016. 96 p. Disponível em: <a href='https://rosalux.org.br/wp-content/uploads/2017/03/cooperativismo-de-plataforma_web_simples.pdf' target='_blank' rel='noopener noreferrer'>https://rosalux.org.br/wp-content/uploads/2017/03/cooperativismo-de-plataforma_web_simples.pdf</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SCIENCE-METRIX INC. <em>Open access availability of scientific publications</em>. Montréal: Science-Metrix Inc., 2018. Disponível em: <a href='https://www.science-metrix.com/sites/default/files/science-metrix/publications/science-metrix_open_access_availability_scientific_publications_report.pdf' target='_blank' rel='noopener noreferrer'>https://www.science-metrix.com/sites/default/files/science-metrix/publications/science-metrix_open_access_availability_scientific_publications_report.pdf</a>. Acesso em: 23 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SHAPIN, Steven; SCHAFFER, Simon. <em>Leviathan and the air-pump: Hobbes, Boyle and the experimental life</em>. Princeton: Princeton University Press, 2017. 448 p. Disponível em: <a href='https://press.princeton.edu/books/paperback/9780691178165/leviathan-and-the-air-pump' target='_blank' rel='noopener noreferrer'>https://press.princeton.edu/books/paperback/9780691178165/leviathan-and-the-air-pump</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">TAYLOR, Linnet. <em>What is data justice? The case for connecting digital rights and freedoms globally</em>. Big Data & Society, p. 1–14, Jul./Dec. 2017. DOI: 10.1177/2053951717736335. Disponível em: <a href='https://journals.sagepub.com/doi/pdf/10.1177/2053951717736335' target='_blank' rel='noopener noreferrer'>https://journals.sagepub.com/doi/pdf/10.1177/2053951717736335</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">UNESCO. <em>Open science outlook 1: status and trends around the world</em>. Paris, 2023. Disponível em: <a href='https://unesdoc.unesco.org/ark:/48223/pf0000387324' target='_blank' rel='noopener noreferrer'>https://unesdoc.unesco.org/ark:/48223/pf0000387324</a>. Acesso em: 15 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">UNESCO.<em> Recomendação da UNESCO sobre ciência aberta</em>. Brasília, 2022. Disponível em: <a href='https://doi.org/10.54677/XFFX3334' target='_blank' rel='noopener noreferrer'>https://doi.org/10.54677/XFFX3334</a>. Acesso em: 15 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VISVANATHAN, Shiv. The search for cognitive justice. Disponível em: <a href='http://www.india-seminar.com/2009/597/597_shiv_visvanathan.ht' target='_blank' rel='noopener noreferrer'>http://www.india-seminar.com/2009/597/597_shiv_visvanathan.ht</a>m. Acesso em: 7 jun. 2021.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="true" aria-controls="collapse1-item2">Módulo 2</button>
                    </h5>
                    <div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
                        <div class="accordion-body">
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. [Constituição (1988)]. <em>Constituição da República Federativa do Brasil</em>. Brasília, DF: Senado Federal; Coordenação de Edições Técnicas, 2016. 496 p. Disponível em: <a href='https://www2.senado.leg.br/bdsf/bitstream/handle/id/518231/CF88_Livro_EC91_2016.pdf' target='_blank' rel='noopener noreferrer'>https://www2.senado.leg.br/bdsf/bitstream/handle/id/518231/CF88_Livro_EC91_2016.pdf</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 9.279, de 14 de maio de 1996. <em>Regula direitos e obrigações relativos à propriedade industrial</em>. Brasília, DF: Presidência da República; Casa Civil, 1996. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/Leis/L9279.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/Leis/L9279.htm</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 9.610, de 19 de fevereiro de 1998. <em>Regula os direitos autorais, entendendo-se sob esta denominação os direitos de autor e os que lhes são conexos</em>. Disponível em: <a href='https://presrepublica.jusbrasil.com.br/legislacao/92175/lei-de-direitos-autorais-lei-9610-98#art-51' target='_blank' rel='noopener noreferrer'>https://presrepublica.jusbrasil.com.br/legislacao/92175/lei-de-direitos-autorais-lei-9610-98#art-51</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 10.973, de 2 de dezembro de 2004. <em>Dispõe sobre incentivos à inovação e à pesquisa científica e tecnológica no ambiente produtivo e dá outras providências</em>. Diário Oficial da União: Brasília, DF, 2 dez. 2004. Disponível em: <a href='http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm' target='_blank' rel='noopener noreferrer'>http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm</a>. Acesso em: 10 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 12.527, de 18 de novembro de 2011. <em>Regula o acesso a informações previsto no inciso XXXIII do art. 5º, no inciso II do § 3º do art. 37 e no § 2º do art. 216 da Constituição Federal; altera a Lei nº 8.112, de 11 de dezembro de 1990; revoga a Lei nº 11.111, de 5 de maio de 2005, e dispositivos da Lei nº 8.159, de 08 de janeiro de 1991; e dá outras providências</em>. Diário Oficial da União: Brasília, DF, 18 nov. 2011. Disponível em: <a href='http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm' target='_blank' rel='noopener noreferrer'>http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm</a>. Acesso em: 10 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 13.709, de 14 de agosto de 2018. <em>Dispõe sobre a proteção de dados pessoais e altera a Lei nº 12.965, de 23 de abril de 2014 (Marco Civil da Internet)</em>. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CALDERON, Mariana Paranhos. <em>Lei de acesso à informação e seu impacto na atividade de inteligência</em>. Campinas: Millenium, 2015. 135 p. Disponível em: <a href='http://www.mpsp.mp.br/portal/page/portal/documentacao_e_divulgacao/doc_biblioteca/bibli_servicos_produtos/bibli_boletim/bibli_bol_2015/Bol17_01.pdf' target='_blank' rel='noopener noreferrer'>http://www.mpsp.mp.br/portal/page/portal/documentacao_e_divulgacao/doc_biblioteca/bibli_servicos_produtos/bibli_boletim/bibli_bol_2015/Bol17_01.pdf</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CUNHA FILHO, Marcio Camargo; XAVIER, Vítor César Silva. <em>Lei de acesso à informação: teoria e prática</em>. 1. ed. Rio de Janeiro: Lumen Juris, 2014. 439 p. Disponível em: <a href='https://core.ac.uk/reader/79127740' target='_blank' rel='noopener noreferrer'>https://core.ac.uk/reader/79127740</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FERREIRA, Rafael Freire. <em>Autodeterminação informativa e a privacidade na sociedade da informação</em>. 3. ed. Rio de Janeiro: Lumen Juris, 2017. 209 p. Disponível em: <a href='https://biblioteca.tc.df.gov.br/?mbdb_book=autodeterminacao-informativa-e-a-privacidade-na-sociedade-da-informacao' target='_blank' rel='noopener noreferrer'>https://biblioteca.tc.df.gov.br/?mbdb_book=autodeterminacao-informativa-e-a-privacidade-na-sociedade-da-informacao</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FERREIRA FILHO, Manoel Gonçalves. <em>Curso de Direito Constitucional</em>. 38. ed. rev. e aum. São Paulo: Saraiva, 2015. 448 p. Disponível em: <a href='https://www.academia.edu/27161513/Curso_de_Direito_Constitucional_Manoel_Goncalves_Ferreira_Filho' target='_blank' rel='noopener noreferrer'>https://www.academia.edu/27161513/Curso_de_Direito_Constitucional_Manoel_Goncalves_Ferreira_Filho</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HEINEN, Juliano. <em>Comentários à Lei de Acesso à Informação: Lei nº 12.527/2011</em>. Belo Horizonte: Fórum, 2014. 312 p. Disponível em: <a href='https://core.ac.uk/download/pdf/79118513.pdf' target='_blank' rel='noopener noreferrer'>https://core.ac.uk/download/pdf/79118513.pdf</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INTERNATIONAL COUNCIL ON ARCHIVES – ICA. <em>Princípios de acesso aos arquivos</em>. Versão preliminar, 26 maio 2011. Disponível em: <a href='https://www.ica.org/app/uploads/2024/01/ICA-Standards_Access_principles_PO.pdf' target='_blank' rel='noopener noreferrer'>https://www.ica.org/app/uploads/2024/01/ICA-Standards_Access_principles_PO.pdf</a>. Acesso em: 18 jul. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NUNES, Alexandre Augusto Pereira. <em>Direito fundamental de acesso à informação: democracia, estado democrático de direito, república e controle social</em>. Rio de Janeiro: Lumen Juris, 2014. 244 p. Disponível em: <a href='https://core.ac.uk/reader/79125110' target='_blank' rel='noopener noreferrer'>https://core.ac.uk/reader/79125110</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RAVELO DIAZ, Grettel; MENA MUGICA, Mayra Marta; DEL CASTILLO GUEVARA, Jorge. Requisitos para la valoración de riesgos de preservación en repositorios digitales. <em>Biblios</em>, Pittsburgh, n. 75, p. 25-34, abr. 2019. DOI: <a href='http://dx.doi.org/10.5195/biblios.2019.484' target='_blank' rel='noopener noreferrer'>http://dx.doi.org/10.5195/biblios.2019.484</a>. Acesso em: 9 abr. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SALES, Ramiro Gonçalves. <em>O direito de acesso à informação pública administrativa</em>. Rio de Janeiro: Lumen Juris, 2014. 497 p. Disponível em: <a href='https://www.amazon.com.br/Direito-Acesso-Informa%C3%A7%C3%A3o-P%C3%BAblica-Administrativa/dp/8567595452' target='_blank' rel='noopener noreferrer'>https://www.amazon.com.br/Direito-Acesso-Informa%C3%A7%C3%A3o-P%C3%BAblica-Administrativa/dp/8567595452</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SAYÃO, Luís Fernando; SALES, Luana Farias. Dados abertos de pesquisa: ampliando o conceito de acesso livre. <em>Revista Eletrônica de Comunicação, Informação e Inovação em Saúde</em>, Rio de Janeiro, v. 8, n. 2, p. 76-92, jun. 2014. DOI: 10.3395/reciis.v8i2.934.pt. Disponível em: <a href='https://www.reciis.icict.fiocruz.br/index.php/reciis/article/view/611/1252' target='_blank' rel='noopener noreferrer'>https://www.reciis.icict.fiocruz.br/index.php/reciis/article/view/611/1252</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VENTURA, Miriam. Lei de acesso à informação, privacidade e a pesquisa em saúde. <em>Cadernos de Saúde Pública</em>, Rio de Janeiro, v. 29, n. 4, p. 636-638, abr. 2013. Disponível em: <a href='https://www.scielo.br/j/csp/a/DxwWJ4fQLp75Z6fMvkQfXKC/?format=pdf&lang=pt' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csp/a/DxwWJ4fQLp75Z6fMvkQfXKC/?format=pdf&lang=pt</a>. Acesso em: 8 jun. 2021.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="true" aria-controls="collapse1-item3">Módulo 3</button>
                    </h5>
                    <div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
                        <div class="accordion-body">
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AMARO, Bianca; LABBÉ, Carmen Gloria; LISOWSKA NAVARRO, Malgorzata; NAKANO, Silvia. Rede Federada de Repositórios Institucionais de Publicações Científicas em Acesso Aberto LA Referencia: a integração da produção científica regional. In: RODRIGUES, Eloy; SWAN, Alma; BAPTISTA, Ana Alice (org.). <em>Una década de Acceso Abierto en UMinho e no mundo</em>. Braga: Universidade do Minho, 2013. p. 123-132. Disponível em: <a href='http://repository.urosario.edu.co/handle/10336/13321?show=full' target='_blank' rel='noopener noreferrer'>http://repository.urosario.edu.co/handle/10336/13321?show=full</a>. Acesso em: 10 abr. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARNES, Lucy. <em>Green, gold, diamond, black: what does it all mean</em>? Open Book Publishers, 2018. DOI: <a href='ttps://doi.org/10.11647/OBP.0173.0089' target='_blank' rel='noopener noreferrer'>https://doi.org/10.11647/OBP.0173.0089</a>. Disponível em: <a href='https://doi.org/10.11647/OBP.0173.0089' target='_blank' rel='noopener noreferrer'>https://doi.org/10.11647/OBP.0173.0089</a>. Acesso em: 18 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BECERRIL-GARCÍA, Arianna; LOPES, Eduardo Aguado; SALAZAR, Rosario Rogel; OROPEZA, Gustavo Garduño; ROCA, María Fernanda Zúñiga. De un modelo centrado en la revista a un modelo centrado en entidades: la publicación y producción científica en la nueva plataforma Redalyc.org. <em>Aula Abierta</em>, Universidade de Oviedo, ISSN 0210-2773, vol. 40, n. 2, 2012, p. 53-64. Disponível em: <a href='https://dialnet.unirioja.es/servlet/articulo?codigo=3920933' target='_blank' rel='noopener noreferrer'>https://dialnet.unirioja.es/servlet/articulo?codigo=3920933</a>. Acesso em: 10 abr. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BEIGEL, Fernanda; PACKER, Abel Laerte; GALLARDO, Oswaldo; SALATINO, Maximiliano. OLIVA: La Producción Científica Indexada en América Latina. Diversidad Disciplinar, Colaboración Institucional y Multilingüismo en SciELO y Redalyc (1995-2018). Dados, v. 67, n. 1, p. e20210174, 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BEZJAK, Sonja et al. <em>Open science training handbook</em>. Versão 1.0. Zenodo, 2018. DOI: https://doi.org/10.5281/zenodo.1212496. Disponível em: <a href='https://doi.org/10.5281/zenodo.1212496' target='_blank' rel='noopener noreferrer'>https://doi.org/10.5281/zenodo.1212496</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BOAI. <em>Budapest Open Access Initiative: 20th Anniversary Recommendations</em>, 2022. Disponível em: <a href='https://www.budapestopenaccessinitiative.org/boai20/' target='_blank' rel='noopener noreferrer'>https://www.budapestopenaccessinitiative.org/boai20/</a>. Acesso em: 23 set. 2023.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUDAPEST OPEN ACCESS INITIATIVE. <em>JLIS</em>, n. 2, 2012. Disponível em: <a href='https://doi.org/10.4403/jlis.it-8629' target='_blank' rel='noopener noreferrer'>https://doi.org/10.4403/jlis.it-8629</a>. Acesso em: 11 nov. 2022.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DECLARACIÓN DE SAN JOSÉ HACIA LA BIBLIOTECA VIRTUAL EM SALUD. Costa Rica, 1998. Disponível em: <a href='https://red.bvsalud.org/modelo-bvs/wp-content/uploads/sites/3/2016/05/Declaracao-de-San-Jose-para-BVS.pdf' target='_blank' rel='noopener noreferrer'>https://red.bvsalud.org/modelo-bvs/wp-content/uploads/sites/3/2016/05/Declaracao-de-San-Jose-para-BVS.pdf</a>. Acesso em: 27 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LOPES, Eduardo Aguado; BECERRIL-GARCÍA, Arianna. El antiguo ecosistema de acceso abierto de América Latina podría ser quebrantado por las propuestas del Norte Global. LSE Latin America and Caribbean Blog, London School of Economics and Political Science, 2020. Disponível em: <a href='https://blogs.lse.ac.uk/latamcaribbean/2020/01/21/el-antiguo-ecosistema-de-acceso-abierto-de-america-latina-podria-ser-quebrantado-por-las-propuestas-del-norte-global/' target='_blank' rel='noopener noreferrer'>https://blogs.lse.ac.uk/latamcaribbean/2020/01/21/el-antiguo-ecosistema-de-acceso-abierto-de-america-latina-podria-ser-quebrantado-por-las-propuestas-del-norte-global/</a>. Acesso em: 5 nov. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MARANHÃO, Ana Maria Neves. <em>Diretrizes para alinhamento dos processos de avaliação da Fundação Oswaldo Cruz às práticas de ciência aberta</em>. 2022. 321 f. Tese (Doutorado em Ciência da Informação) – Departamento de Filosofia, Comunicação e Informação da Faculdade de Letras, Universidade de Coimbra, Coimbra, 2022. Disponível em: <a href='https://hdl.handle.net/10316/113666' target='_blank' rel='noopener noreferrer'>https://hdl.handle.net/10316/113666</a>. Acesso em: 24 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MUELLER, S. P. M. <em>A comunicação científica e o movimento de acesso livre ao conhecimento. Ciência da Informação</em>, v. 35, n. 2, p. 27-38, 2006. Disponível em: <a href='https://doi.org/10.1590/S0100-19652006000200004' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/S0100-19652006000200004</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLIVEIRA, Eloísa Príncipe. Revistas eletrônicas: papel ou bytes? <em>Informare: Cadernos do Programa de Pós-Graduação em Ciência da Informação</em>, Rio de Janeiro, v. 2, n. 1, p. 81-87, jan./jun. 1996.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PACKER, Abel Laerte; ANTONIO, Irati; BERAQUET, Vera Sílvia Marão. <em>Rumo à publicação eletrônica. Ciência da Informação</em>, v. 27, n. 2, p. 107-108, 1998.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PEDRI, Patricia; ARAÚJO, Ronaldo Ferreira. Vantagens e desvantagens da revisão por pares aberta: consensos e dissensos na literatura. <em>Revista Encontros Bibli</em>, v. 26, Esp., e78583, 2021. Disponível em: <a href='https://www.redalyc.org/journal/147/14775306004/html/' target='_blank' rel='noopener noreferrer'>https://www.redalyc.org/journal/147/14775306004/html/</a>. Acesso em: 23 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROSS-HELLAUER, T. What is open peer review? A systematic review. <em>F1000Research</em>, 6, 588. Disponível em: <a href='https://f1000research.com/articles/6-588' target='_blank' rel='noopener noreferrer'>https://f1000research.com/articles/6-588</a>. Acesso em: 23 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SOUSA, Juliana Araujo Gomes de et al. <em>Rede Brasileira de Repositórios Digitais (RBRD): análise de sua constituição e representatividade por meio do Portal OASISBR. Integración y Conocimiento</em>, v. 13, n. 1, p. 34-48, 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">UNESCO. <em>Recomendação da Unesco sobre Ciência Aberta</em>. Brasília, 2022. Disponível em: <a href='https://doi.org/10.54677/XFFX3334' target='_blank' rel='noopener noreferrer'>https://doi.org/10.54677/XFFX3334</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WIKIPEDIA. <em>Repositório institucional</em>. Disponível em: <a href='https://pt.wikipedia.org/wiki/Reposit%C3%B3rio_institucional' target='_blank' rel='noopener noreferrer'>https://pt.wikipedia.org/wiki/Reposit%C3%B3rio_institucional</a>. Acesso em: 17 mar. 2026.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="true" aria-controls="collapse1-item4">Módulo 4</button>
                    </h5>
                    <div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
                        <div class="accordion-body">
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ADR UK. <em>Public Engagement Strategy 2021–2026</em>. Disponível em: <a href='https://www.adruk.org/fileadmin/uploads/adruk/Documents/ADR_UK_Public_Engagement_Strategy_2021-2026.pdf' target='_blank' rel='noopener noreferrer'>https://www.adruk.org/fileadmin/uploads/adruk/Documents/ADR_UK_Public_Engagement_Strategy_2021-2026.pdf</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALMEIDA, B.; PIMENTA, D. <em>Percepções e experiências sobre compartilhamento e vinculação de dados para pesquisa e avaliação de políticas públicas na área da saúde</em>. Salvador: CIDACS; Fiocruz, 2021. Disponível em: <a href='https://cidacs.bahia.fiocruz.br/wp-content/uploads/2021/11/Relatorio7-21.pdf' target='_blank' rel='noopener noreferrer'>https://cidacs.bahia.fiocruz.br/wp-content/uploads/2021/11/Relatorio7-21.pdf</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALMEIDA, B. A.; CARREIRO, R.; SOUZA, M.; BARRETO, M.<em> CIDACS' efforts towards an inclusive and dialogic data governance in Brazil: a focused literature review. International Journal of Population Data Science</em>, v. 9, p. 1–8, 2024. Disponível em: <a href='https://doi.org/10.23889/ijpds.v9i1.2163' target='_blank' rel='noopener noreferrer'>https://doi.org/10.23889/ijpds.v9i1.2163</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARRETO, M. L.; ICHIHARA, M. Y.; ALMEIDA, B. A. et al. <em>The Centre Data and Knowledge Integration for Health (CIDACS): Linking Health and Social Data in Brazil. International Journal of Population Data Science</em>, 2019.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARRETO, M. et al. <em>Cohort profile: the 100 million Brazilian cohort. International Journal of Epidemiology</em>, v. 51, n. 2, p. e27–e38, 2022. DOI: <a href='https://doi.org/10.1093/ije/dyab213' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1093/ije/dyab213</a>.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 8.080, de 19 de setembro de 1990. <em>Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências</em>. Diário Oficial da União: Brasília, DF, 20 set. 1990. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/l8080.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/leis/l8080.htm</a>. Acesso em: 14 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 9.279, de 14 de maio de 1996. <em>Regula direitos e obrigações relativos à propriedade industrial</em>. Diário Oficial da União: Brasília, DF, 15 maio 1996. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/l9279.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/leis/l9279.htm</a>. Acesso em: 10 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 9.610, de 19 de fevereiro de 1998. <em>Altera, atualiza e consolida a legislação sobre direitos autorais e dá outras providências</em>. Diário Oficial da União: Brasília, DF, 20 fev. 1998. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/l9610.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/leis/l9610.htm</a>. Acesso em: 10 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 10.603, de 17 de dezembro de 2002. <em>Dispõe sobre a proteção de informação não divulgada submetida para aprovação da comercialização de produtos e dá outras providências</em>. Diário Oficial da União: Brasília, DF, 18 dez. 2002. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/2002/l10603.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/leis/2002/l10603.htm</a>. Acesso em: 10 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 12.527, de 18 de novembro de 2011. <em>Regula o acesso a informações previsto no inciso XXXIII do art. 5º, no inciso II do § 3º do art. 37 e no § 2º do art. 216 da Constituição Federal; altera a Lei nº 8.112, de 11 de dezembro de 1990; revoga a Lei nº 11.111, de 5 de maio de 2005, e dispositivos da Lei nº 8.159, de 8 de janeiro de 1991; e dá outras providências</em>. Diário Oficial da União: Brasília, DF, 18 nov. 2011. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm</a>. Acesso em: 10 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 13.709, de 14 de agosto de 2018. <em>Lei geral de proteção de dados pessoais (LGPD)</em>. Diário Oficial da União: Brasília, DF, 15 ago. 2018. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a>. Acesso em: 10 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 14.133, de 1º de abril de 2021. Lei de licitações e contratos administrativos<em></em>. Diário Oficial da União: Brasília, DF, 1º abr. 2021. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm</a>. Acesso em: 10 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 14.874, de 28 de maio de 2024. <em>Dispõe sobre a pesquisa com seres humanos e institui o Sistema Nacional de Ética em Pesquisa com Seres Humanos</em>. Diário Oficial da União: Brasília, DF, 29 maio 2024. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14874.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14874.htm</a>. Acesso em: 10 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAPURRO, Rafael; HJORLAND, Binger. <em>O conceito de Informação. Belo Horizonte: UFMG. Perspectivas em Ciência da Informação</em>, v. 12, n. 1, p. 148-207, jan./abr. 2007. Disponível em: <a href='https://periodicos.ufmg.br/index.php/pci/article/view/22360/17954' target='_blank' rel='noopener noreferrer'>https://periodicos.ufmg.br/index.php/pci/article/view/22360/17954</a>. Acesso em: 14 maio 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELI, C. M.; PINHEIRO, R. J.; CAMARGO JR, K. R. <em>Conquistas e desafios para o emprego das técnicas de record linkage na pesquisa e avaliação em saúde no Brasil. Epidemiol</em>. Serv. Saúde, Brasília, 24(4):795-802, out-dez 2015.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DIAS, G. A.; MORO, A. R.; MENEZES, A. K. F.; SIMÕES, A. R. C.; CAMPOS, A. F.; SILVA, L. H. A.; ANJOS, R. L.; BEZERRA, T. D. <em>FAIR Data BR: ferramenta para a avaliação de conjuntos de dados científicos</em>. In: CONFERÊNCIA LUSO-BRASILEIRA DE CIÊNCIA ABERTA (CONFOA), 12., 2021, Braga, Portugal. Anais [...]. Zenodo, 2021. Disponível em: <a href='https://doi.org/10.5281/zenodo.5578768' target='_blank' rel='noopener noreferrer'>https://doi.org/10.5281/zenodo.5578768</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DILLO, I.; HODSON, S.; PITTONET GAIARIN, S.; GROOTVELD, M. <em>Recommendations for a FAIR EOSC – White Paper FAIRsFAIR Synchronisation Force</em>. Zenodo, 2021. Disponível em: <a href='https://doi.org/10.5281/zenodo.6674042' target='_blank' rel='noopener noreferrer'>https://doi.org/10.5281/zenodo.6674042</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DOS ANJOS, A. F.; PIMENTA, D. M.; DE ALMEIDA, M. R. S. et al. <em>Public Involvement & Engagement in health inequalities research on COVID-19 pandemic: a case study of CIDACS/FIOCRUZ BAHIA</em>. <em>Int J Popul Data Sci</em>., 2023 Jun 6;5(4):2133. DOI: 10.23889/ijpds.v5i3.2133.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EUROPEAN COMMISSION. Directorate-General for Research and Innovation. <em>Six recommendations for implementation of FAIR practice by the FAIR in practice task force of the European Open Science Cloud FAIR working group</em>. Luxembourg: Publications Office, 2020. Disponível em: <a href='https://data.europa.eu/doi/10.2777/986252' target='_blank' rel='noopener noreferrer'>https://data.europa.eu/doi/10.2777/986252</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FUNDAÇÃO OSWALDO CRUZ. Presidência. Vice-Presidência de Ensino, Informação e Comunicação. <em>Política de gestão, compartilhamento e abertura de dados para pesquisa: princípios e diretrizes</em>. Rio de Janeiro: Fiocruz, 2020. 19 p. Disponível em: <a href='https://www.arca.fiocruz.br/handle/icict/46408' target='_blank' rel='noopener noreferrer'>https://www.arca.fiocruz.br/handle/icict/46408</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GAIGNARD, A.; ROSNET, T.; DE LAMOTTE, F. et al. <em>FAIR-Checker: supporting digital resource findability and reuse with Knowledge Graphs and Semantic Web standards. Journal of Biomedical Semantics</em>, v. 14, n. 7, 2023. Disponível em: <a href='https://doi.org/10.1186/s13326-023-00289-5' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1186/s13326-023-00289-5</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GIBNEY, E.; VAN NOORDEN, R. <em>Scientists losing data at a rapid rate. Nature</em>, 2013. Disponível em: <a href='https://doi.org/10.1038/nature.2013.14416' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1038/nature.2013.14416</a>. Acesso em: 20 dez. 2019.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HIGHER EDUCATION FUNDING COUNCIL FOR ENGLAND et al. <em>Concordat on open research data</em>. Bristol: HEFCE, 2016. Disponível em: <a href='https://www.ukri.org/wp-content/uploads/2020/10/UKRI-020920-ConcordatonOpenResearchData.pdf' target='_blank' rel='noopener noreferrer'>https://www.ukri.org/wp-content/uploads/2020/10/UKRI-020920-ConcordatonOpenResearchData.pdf</a>. Acesso em: 9 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HEIDORN, P. Bryan. <em>Shedding Light on the Dark Data in the Long Tail of Science. Library Trends</em>, v. 57, n. 2, p. 280-299, 2008. DOI: 10.1353/lib.0.0036. Disponível em: <a href='https://core.ac.uk/download/pdf/4818389.pdf' target='_blank' rel='noopener noreferrer'>https://core.ac.uk/download/pdf/4818389.pdf</a>. Acesso em: 20 dez. 2019.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KONTSIOTI, E. <em>The Road to FAIRness: an evaluation of FAIR data assessment tools</em>. The Hyve, 2023. Disponível em: <a href='https://www.thehyve.nl/articles/evaluation-fair-data-assessment-tools' target='_blank' rel='noopener noreferrer'>https://www.thehyve.nl/articles/evaluation-fair-data-assessment-tools</a>. Acesso em: 11 set. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LANDI, A.; THOMPSON, M.; GIANNUZZI, V.; BONIFAZI, F.; LABASTIDA, I.; BONINO DA SILVA SANTOS, L. O.; ROOS, M. <em>The “A” of FAIR – As open as possible, as closed as necessary. Data Intelligence</em>, v. 2, p. 47–55, 2020. Disponível em: <a href='https://doi.org/10.1162/dint_a_00027' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1162/dint_a_00027</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MCGRAIL, K.; MORAN, R.; O’KEEFE, C.; PREEN, D.; QUAN, H.; SANMARTIN, C.; SCHULL, M.; SMITH, M.; WILLIAMS, C.; WILLIAMSON, T.; WYPER, G.; MOORIN, R.; KUM, H.-C.; JONES, K.; AKBARI, A.; BENNETT, T.; BOYD, A.; CARINCI, F.; CUI, X.; DENAXAS, S.; DOUGALL, N.; FORD, D.; KIRBY, R. S.; KOTELCHUCK, M. <em>A Position Statement on Population Data Science: The science of data about people. International Journal of Population Data Science</em>, 3(1), 2018. DOI: 10.23889/ijpds.v3i1.415.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA CIÊNCIA, TECNOLOGIA E INOVAÇÃO. <em>OCDE aprova revisão sobre acesso a dados de pesquisas científicas com financiamento público</em>. Brasília-DF: MCTI, 2021. Disponível em: <a href='https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2021/01/ocde-aprova-revisao-sobre-acesso-a-dados-de-pesquisas-cientificas-com-financiamento-publico' target='_blank' rel='noopener noreferrer'>https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2021/01/ocde-aprova-revisao-sobre-acesso-a-dados-de-pesquisas-cientificas-com-financiamento-publico</a>. Acesso em: 10 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MIKSA, T.; SIMMS, S.; MIETCHEN, D.; JONES, S. <em>Ten principles for machine-actionable data management plans. PLOS Computational Biology</em>, v. 15, 2019. Disponível em: <a href='https://doi.org/10.1371/journal.pcbi.1006750' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1371/journal.pcbi.1006750</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MONS, Barend et al. <em>Cloudy, increasingly FAIR; revisiting the FAIR Data guiding principles for the European Open Science Cloud. Information Services & Use</em>, v. 37, n. 1, p. 49-56, 2017. DOI: 10.3233/ISU-170824. Disponível em: <a href='https://content.iospress.com/articles/information-services-and-use/isu824' target='_blank' rel='noopener noreferrer'>https://content.iospress.com/articles/information-services-and-use/isu824</a>. Acesso em: 09 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NATIONAL INSTITUTES OF HEALTH (Estados Unidos). <em>NIH Central Resource for Grants and Funding Information. NIH Data Sharing Policy and Implementation Guidance</em>. Bethesda: NIH, may 2003. Disponível em: <a href='https://grants.nih.gov/grants/policy/data_sharing/data_sharing_guidance.htm' target='_blank' rel='noopener noreferrer'>https://grants.nih.gov/grants/policy/data_sharing/data_sharing_guidance.htm</a>. Acesso em: 08 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANISATION FOR ECONOMIC CO-OPERATION AND DEVELOPMENT (OECD). <em>OECD principles and guidelines for access to research data from public funding</em>. Paris: OECD, 2007. Disponível em: <a href='http://www.oecd.org/sti/sci-tech/38500813.pdf' target='_blank' rel='noopener noreferrer'>http://www.oecd.org/sti/sci-tech/38500813.pdf</a>. Acesso em: 8 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PANZOLINI, Carolina; DEMARTINI, Silvana. <em>Manual de direitos autorais</em>. Brasília: TCU, Secretaria-Geral de Administração, 2020.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SAIL DATABANK. <em>Public Involvement & Engagement</em>. Disponível em: <a href='https://saildatabank.com/governance/approvals-public-engagement/public-involvement-engagement/' target='_blank' rel='noopener noreferrer'>https://saildatabank.com/governance/approvals-public-engagement/public-involvement-engagement/</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SALES, L.; VEIGA, V.; HENNING, P.; SAYÃO, L. F. (Org.). <em>Princípios FAIR aplicados à gestão de dados de pesquisa</em>. Ibict, 2021. Disponível em: <a href='https://ridi.ibict.br/handle/123456789/1182' target='_blank' rel='noopener noreferrer'>https://ridi.ibict.br/handle/123456789/1182</a>. Acesso em: 11 set. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SCIENCE EUROPE. <em>Practical Guide to the International Alignment of Research Data Management – Extended Edition</em>. 2021. Disponível em: <a href='https://doi.org/10.5281/zenodo.4915861' target='_blank' rel='noopener noreferrer'>https://doi.org/10.5281/zenodo.4915861</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">UNESCO. <em>Recomendação da UNESCO sobre Ciência Aberta</em>. 2022. Disponível em: <a href='https://unesdoc.unesco.org/ark:/48223/pf0000379949_por' target='_blank' rel='noopener noreferrer'>https://unesdoc.unesco.org/ark:/48223/pf0000379949_por</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WILKINSON, Mark D.; DUMONTIER, Michel; MONS, Barend. <em>The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data</em>, v. 3, n. 160018, p. 1-9, mar. 2016. DOI: 10.1038/sdata.2016.18. Disponível em: <a href='https://www.nature.com/articles/sdata201618' target='_blank' rel='noopener noreferrer'>https://www.nature.com/articles/sdata201618</a>. Acesso em: 09 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD TRADE ORGANIZATION (WTO). <em>Standards concerning the availability, scope and use of Intellectual Property Rights, Section 7: protection of undisclosed information</em>. Genebra-SW, 2017. Disponível em: <a href='https://www.wto.org/english/docs_e/legal_e/31bis_trips_04d_e.htm#7' target='_blank' rel='noopener noreferrer'>https://www.wto.org/english/docs_e/legal_e/31bis_trips_04d_e.htm#7</a>. Acesso em: 10 fev. 2025.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item5">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item5" aria-expanded="true" aria-controls="collapse1-item5">Módulo 5 (em breve)</button>
                    </h5>
                    <div id="collapse1-item5" class="accordion-collapse collapse" aria-labelledby="heading1-item5" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
		`,
	},
	bibliografiaMod1: {
		ariaLabel: "bibliografiaMod1",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia Módulo 1",
		modalBody: `
			<div class="row justify-content-center pt-5">
    <div class="col-12 col-md-11">
        <div class="mb-5">
            <!-- Accordion -->
            <div class="accordion accordion-flush" id="accordionExample2">
                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Aula 1</button>
                    </h5>
                    <div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
                        <div class="accordion-body">
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALBAGLI, Sarita; APPEL, Andre Luiz; MACIEL, Maria Lucia. E-Science, ciência aberta e o regime de informação em ciência e tecnologia. Tendências da Pesquisa Brasileira em Ciência da Informação, v. 7, n. 1, jan./jun. 2014.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BAKER, Monya. Is there a reproducibility crisis? Nature, v. 533, p. 452-454, May 2016. Disponível em: <a href='https://www.nature.com/polopoly_fs/1.19970!/menu/main/topColumns/topLeftColumn/pdf/533452a.pdf' target='_blank' rel='noopener noreferrer'>https://www.nature.com/polopoly_fs/1.19970!/menu/main/topColumns/topLeftColumn/pdf/533452a.pdf</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BERTIN, Patrícia et al. A parceria para governo aberto como plataforma para o avanço da ciência aberta no Brasil. Transinformação, v. 31, e190020, 2019. DOI: <a href='https://doi.org/10.1590/2318-0889201931e190020' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/2318-0889201931e190020</a>.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRADLEY, Jean-Claude. Open notebook science. Drexel CoAS E-Learning, Philadelphia, 26 Sep. 2006. Disponível em: <a href='https://drexel-coas-elearning.blogspot.com/2006/09/open-notebook-science.html' target='_blank' rel='noopener noreferrer'>https://drexel-coas-elearning.blogspot.com/2006/09/open-notebook-science.html</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CALLON, Michel; RABEHARISOA, Vololona. Research “in the wild” and the shaping of new social identities. Technology in Society, v. 25, n. 2, p. 193–204, 2003. DOI: https://doi.org/10.1016/S0160-791X(03)00021-6. Disponível em: <a href='https://www.sciencedirect.com/science/article/abs/pii/S0160791X03000216' target='_blank' rel='noopener noreferrer'>https://www.sciencedirect.com/science/article/abs/pii/S0160791X03000216</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAPES. Brasil publicou quase 157 mil artigos em 2023, com destaque para acesso aberto. 2024. Disponível em: <a href='https://www.gov.br/capes/pt-br/assuntos/noticias/brasil-publicou-quase-157-mil-artigos-em-2023' target='_blank' rel='noopener noreferrer'>https://www.gov.br/capes/pt-br/assuntos/noticias/brasil-publicou-quase-157-mil-artigos-em-2023</a>. Acesso em: 26 fev. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CARNEIRO, Sueli. <em>Dispositivo de racialidade: a construção do outro como não ser como fundamento do ser</em>. Rio de Janeiro: Zahar, 2023.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CASATI, Fabio; GIUNCHIGLIA, Fausto; MARCHESE, Maurizio. Liquid publications: scientific publications meet the web. Technical Report DIT-07-073, Dec. 2007. Disponível em: <a href='https://core.ac.uk/reader/150081940' target='_blank' rel='noopener noreferrer'>https://core.ac.uk/reader/150081940</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CONTROLADORIA-GERAL DA UNIÃO (CGU). O que é o governo aberto. Disponível em: <a href='https://www.gov.br/cgu/pt-br/governo-aberto/governo-aberto-no-brasil/principios' target='_blank' rel='noopener noreferrer'>https://www.gov.br/cgu/pt-br/governo-aberto/governo-aberto-no-brasil/principios</a>. Acesso em: 10 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CHAN, Leslie; OKUNE, Angela; SAMBULI, Isaac. In: ALBAGLI, Sarita; MACIEL, Maria Lucia; ABDO, Alexandre (org.). <em>Ciência aberta, questões abertas</em>. Brasília: IBICT, 2015. p. 312. Disponível em: <a href='http://livroaberto.ibict.br/handle/1/1060' target='_blank' rel='noopener noreferrer'>http://livroaberto.ibict.br/handle/1/1060</a>. Acesso em: 12 ago. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DECLARAÇÃO TOLUCA-CIDADE DO CABO SOBRE O ACESSO ABERTO DIAMANTE. 2024. Disponível em: <a href='https://doasummit.uct.ac.za/' target='_blank' rel='noopener noreferrer'>https://doasummit.uct.ac.za/</a>. Acesso em: 15 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EUROPEAN COMMISSION. <em>Open innovation, open science, open to the world: a vision for Europe</em>. 2016. Disponível em: <a href='https://ec.europa.eu/digital-single-market/en/news/open-innovation-open-science-open-world-vision-europe' target='_blank' rel='noopener noreferrer'>https://ec.europa.eu/digital-single-market/en/news/open-innovation-open-science-open-world-vision-europe</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EUROPEAN UNION. <em>Horizon 2020: the EU framework programme for research and innovation</em>. Disponível em: <a href='https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-2020_en' target='_blank' rel='noopener noreferrer'>https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-2020_en</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FUNDAÇÃO PARA A CIÊNCIA E A TECNOLOGIA (FCT). 10 razões para adotar a ciência aberta. Disponível em: <a href='https://docs.wixstatic.com/ugd/a8bd7c_2a8c57f2c5664d68a00569bc2a0343ea.pdf' target='_blank' rel='noopener noreferrer'>https://docs.wixstatic.com/ugd/a8bd7c_2a8c57f2c5664d68a00569bc2a0343ea.pdf</a>. Acesso em: 23 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HARNAD, Stevan. Scholarly skywriting and the prepublication continuum of scientific inquiry. <em>Psychological Science</em>, v. 1, n. 6, p. 342–344, Nov. 1990. DOI: <a href='https://doi.org/10.1111/j.1467-9280.1990.tb00234.x' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1111/j.1467-9280.1990.tb00234.x</a>. Disponível em: <a href='https://journals.sagepub.com/doi/pdf/10.1111/j.1467-9280.1990.tb00234.x' target='_blank' rel='noopener noreferrer'>https://journals.sagepub.com/doi/pdf/10.1111/j.1467-9280.1990.tb00234.x</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INICIATIVA BRASILEIRA DE REPRODUTIBILIDADE. Disponível em: <a href='https://www.reprodutibilidade.bio.br/' target='_blank' rel='noopener noreferrer'>https://www.reprodutibilidade.bio.br/</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INICIATIVA DO ACESSO ABERTO DE BUDAPESTE. Declaração. Disponível em: <a href='https://www.budapestopenaccessinitiative.org/read/' target='_blank' rel='noopener noreferrer'>https://www.budapestopenaccessinitiative.org/read/</a>. Acesso em: 30 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KOWALTOWSKI, Alicia J.; ARRUDA, José R. F.; NUSSENZVEIG, Paulo A.; SILBERMAR, Ariel Mariano. Guest post — Article processing charges are a heavy burden for middle-income countries. Publicado em: 9 mar. 2023. Disponível em: <a href='https://scholarlykitchen.sspnet.org/2023/03/09/guest-post-article-processing-charges-are-a-heavy-burden-for-middle-income-countries/' target='_blank' rel='noopener noreferrer'>https://scholarlykitchen.sspnet.org/2023/03/09/guest-post-article-processing-charges-are-a-heavy-burden-for-middle-income-countries/</a>. Acesso em: 10 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LAFUENTE, Antonio; ESTALELLA, Adolfo. “Ways of Science: Public, Open, and Commons.” In: ALBAGLI, Sarita; MACIEL, Maria Lucia; ABDO, Alexandre Hannud (org.). Open Science, Open Issues. Brasília: IBICT; Rio de Janeiro: UNIRIO, 2015. Disponível em: <a href='http://livroaberto.ibict.br/bitstream/1/1061/1' target='_blank' rel='noopener noreferrer'>http://livroaberto.ibict.br/bitstream/1/1061/1</a>. Acesso em: 30 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LATOUR, Bruno. <em>Ciência em ação: como seguir cientistas e engenheiros sociedade a fora</em>. Tradução: Ivone C. Benedetti. 2. ed. São Paulo: UNESP, 2011. 422 p. Disponível em: <a href='https://www.amazon.com.br/Ci%C3%AAncia-em-a%C3%A7%C3%A3o-Bruno-Latour/dp/8539301903' target='_blank' rel='noopener noreferrer'>https://www.amazon.com.br/Ci%C3%AAncia-em-a%C3%A7%C3%A3o-Bruno-Latour/dp/8539301903</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LESSIG, Lawrence. <em>Cultura livre: como a mídia usa a tecnologia e a legislação para barrar a criação cultural e controlar a criatividade</em>. Tradução: Cardoso Filho, Rodolfo S. et al. São Paulo: Trama, 2005. 336 p. Disponível em: <a href='https://www.academia.edu/26581572/CULTURA_LIVRE_Como_a_Grande_M%C3%ADdia_Usa_a_Tecnologia_e_a_Lei_Para_Bloquear_a_Cultura_e_Controlar_a_Criatividade' target='_blank' rel='noopener noreferrer'>https://www.academia.edu/26581572/CULTURA_LIVRE_Como_a_Grande_M%C3%ADdia_Usa_a_Tecnologia_e_a_Lei_Para_Bloquear_a_Cultura_e_Controlar_a_Criatividade</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MIROWSKI, Philip. <em>The evolution of platform science</em>. <em>Social Research: An International Quarterly</em>, v. 90, n. 4, p. 725–755, 2023. DOI: <a href='https://dx.doi.org/10.1353/sor.2023.a916352' target='_blank' rel='noopener noreferrer'>https://dx.doi.org/10.1353/sor.2023.a916352</a>. Acesso em: 30 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU). <em>Declaração Universal dos Direitos Humanos</em>. Paris, 1948. Disponível em: <a href='https://www.un.org/en/about-us/universal-declaration-of-human-rights' target='_blank' rel='noopener noreferrer'>https://www.un.org/en/about-us/universal-declaration-of-human-rights</a>. Acesso em: 17 mar. 2026.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OPEN AND COLLABORATIVE SCIENCE IN DEVELOPMENT NETWORK (OCSDNet). <em>Manifiesto de ciencia abierta y colaborativa: hacia una ciencia abierta inclusiva por el bienestar social y ambiental</em>. 2017. Disponível em: <a href='https://ocsdnet.org/wp-content/uploads/2015/04/Manifesto-Infographic-Spanish-1.pdf' target='_blank' rel='noopener noreferrer'>https://ocsdnet.org/wp-content/uploads/2015/04/Manifesto-Infographic-Spanish-1.pdf</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OPEN KNOWLEDGE FOUNDATION. <em>Open definition</em>. Disponível em: <a href='https://opendefinition.org' target='_blank' rel='noopener noreferrer'>https://opendefinition.org</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PHILLIPS, Tina; FERGUSON, Marion; MINARCHECK, Matthew; PORTICELLA, Nornam; BONNEY, Rick. <em>User’s guide for evaluating learning outcomes in citizen science</em>. Ithaca, NY: Cornell Lab of Ornithology, 2014. Disponível em: <a href='https://www.birds.cornell.edu/citizenscience/wp-content/uploads/2018/10/USERS-GUIDE_linked.pdf' target='_blank' rel='noopener noreferrer'>https://www.birds.cornell.edu/citizenscience/wp-content/uploads/2018/10/USERS-GUIDE_linked.pdf</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">POSADA, Alejandro; CHEN, George. Inequality in knowledge production: the integration of academic infrastructure by big publishers. <em>ELPUB 2018</em>, jun. 2018, Toronto, Canada. Disponível em: <a href='https://hal.archives-ouvertes.fr/hal-01816707/document' target='_blank' rel='noopener noreferrer'>https://hal.archives-ouvertes.fr/hal-01816707/document</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, Boaventura de Sousa. <em>Beyond abyssal thinking: from global lines to ecologies of knowledge</em>. New York: Binghamton University, 2007. 66 p. Disponível em: https://ces.uc.pt/bss/documentos/AbyssalThinking.pdf. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SCHOLZ, Trebor. <em>Cooperativismo de plataforma: contestando a economia do compartilhamento corporativa</em>. Tradução: Rafael A. F. Zanatta. São Paulo: Fundação Rosa Luxemburgo; Elefante; Autonomia Literária, 2016. 96 p. Disponível em: <a href='https://rosalux.org.br/wp-content/uploads/2017/03/cooperativismo-de-plataforma_web_simples.pdf' target='_blank' rel='noopener noreferrer'>https://rosalux.org.br/wp-content/uploads/2017/03/cooperativismo-de-plataforma_web_simples.pdf</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SCIENCE-METRIX INC. <em>Open access availability of scientific publications</em>. Montréal: Science-Metrix Inc., 2018. Disponível em: <a href='https://www.science-metrix.com/sites/default/files/science-metrix/publications/science-metrix_open_access_availability_scientific_publications_report.pdf' target='_blank' rel='noopener noreferrer'>https://www.science-metrix.com/sites/default/files/science-metrix/publications/science-metrix_open_access_availability_scientific_publications_report.pdf</a>. Acesso em: 23 dez. 2024.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SHAPIN, Steven; SCHAFFER, Simon. <em>Leviathan and the air-pump: Hobbes, Boyle and the experimental life</em>. Princeton: Princeton University Press, 2017. 448 p. Disponível em: <a href='https://press.princeton.edu/books/paperback/9780691178165/leviathan-and-the-air-pump' target='_blank' rel='noopener noreferrer'>https://press.princeton.edu/books/paperback/9780691178165/leviathan-and-the-air-pump</a>. Acesso em: 6 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">TAYLOR, Linnet. <em>What is data justice? The case for connecting digital rights and freedoms globally</em>. Big Data & Society, p. 1–14, Jul./Dec. 2017. DOI: 10.1177/2053951717736335. Disponível em: <a href='https://journals.sagepub.com/doi/pdf/10.1177/2053951717736335' target='_blank' rel='noopener noreferrer'>https://journals.sagepub.com/doi/pdf/10.1177/2053951717736335</a>. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">UNESCO. <em>Open science outlook 1: status and trends around the world</em>. Paris, 2023. Disponível em: <a href='https://unesdoc.unesco.org/ark:/48223/pf0000387324' target='_blank' rel='noopener noreferrer'>https://unesdoc.unesco.org/ark:/48223/pf0000387324</a>. Acesso em: 15 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">UNESCO.<em> Recomendação da UNESCO sobre ciência aberta</em>. Brasília, 2022. Disponível em: <a href='https://doi.org/10.54677/XFFX3334' target='_blank' rel='noopener noreferrer'>https://doi.org/10.54677/XFFX3334</a>. Acesso em: 15 jan. 2025.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VISVANATHAN, Shiv. The search for cognitive justice. Disponível em: <a href='http://www.india-seminar.com/2009/597/597_shiv_visvanathan.ht' target='_blank' rel='noopener noreferrer'>http://www.india-seminar.com/2009/597/597_shiv_visvanathan.ht</a>m. Acesso em: 7 jun. 2021.</li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>

                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Aula 2</button>
                    </h5>
                    <div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
                        <div class="accordion-body">
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGUIAR, A. C. Informação e atividades de desenvolvimento científico, tecnológico e industrial: tipologia proposta com base em análise funcional. <strong>Ci. Inf</strong>., Brasília, DF, v. 20, n. 1, p. 8, jan./jun. 1991.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ARAÚJO, C. A. A. Correntes teóricas da ciência da informação. <strong>Ci. Inf</strong>., Brasília, DF, v. 38, n. 3, p. 192-204, set./dez., 2009. Disponível em <a href="https://doi.org/10.1590/S0100-19652009000300013" target="_blank" rel="noopener noreferrer">https://doi.org/10.1590/S0100-19652009000300013</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BAPTISTA, P. I. C. F. <strong>Do papiro ao e-book</strong>: uma história social dos suportes da informação. 2014. 48 f. Monografia de conclusão de curso (Graduação em Biblioteconomia e Gestão de Unidade de Informação). Universidade Federal do Rio de Janeiro, Rio de Janeiro. Disponível em: <a href="https://pantheon.ufrj.br/bitstream/11422/265/1/Pedro%20Ivo%20BiblioTCCpdf.pdf" target="_blank" rel="noopener noreferrer">https://pantheon.ufrj.br/bitstream/11422/265/1/Pedro%20Ivo%20BiblioTCCpdf.pdf</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENEZES, Sabrina. Fonte de informação: definição, tipologia e confiabilidade. <strong>Blog da BIBENG</strong>, 10 ago. 2021. Disponível em: <a href="https://www.ufrgs.br/bibeng/fontes-de-informacao-definicao-tipologia-confiabilidade/#:~:text=Fontes%20de%20informa%C3%A7%C3%A3o%20s%C3%A3o%20essenciais,localizar%20informa%C3%A7%C3%B5es%20e%20dados%20confi%C3%A1veis" target="_blank" rel="noopener noreferrer">https://www.ufrgs.br/bibeng/fontes-de-informacao-definicao-tipologia-confiabilidade/#:~:text=Fontes%20de%20informa%C3%A7%C3%A3o%20s%C3%A3o%20essenciais,localizar%20informa%C3%A7%C3%B5es%20e%20dados%20confi%C3%A1veis</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAFEZEIRO, I.; COSTA, L. C.; KUBRUSLY, R. S. Ciência da Computação, Ciência da Informação, Sistemas de Informação: uma reflexão sobre o papel da informação e da interdisciplinaridade na configuração das tecnologias e das ciências. <strong>Perspec. Ci. Inf</strong>., v. 21, n. 3, p. 111–133, jul. 2016. Disponível em: <a href="https://doi.org/10.1590/1981-5344/2681" target="_blank" rel="noopener noreferrer">https://doi.org/10.1590/1981-5344/2681</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMPELLO, B. Aula Fontes de Informação I. <em>In</em>: <strong>Curso de Bacharelado em Biblioteconomia na Modalidade a Distância</strong> - Departamento de Biblioteconomia. UAB: Brasília/DF, 2018. </li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GOMES, L. B. <em>et al.</em> As origens do pensamento sistêmico: das partes para o todo. <strong>Pensando fam.</strong>, Porto Alegre, v. 18, n. 2, p. 3-16, dez. 2014.Disponível em: <a href="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1679-494X2014000200002&lng=pt&nrm=iso" target="_blank" rel="noopener noreferrer">http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1679-494X2014000200002&lng=pt&nrm=iso</a>. Acesso em: 09 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GUIMARÃES, M. C. S.; SILVA, C. H.; SANTANA, R. A. L. Uma abordagem de educação para saúd e a partir da informação científica e tecnológica. <strong>R. Eletr. de Com. Inf. Inov. Saúde</strong>. Rio de Janeiro, v. 6, n. 2, jun., 2012. Disponível em <a href="www.reciis.icict.fiocruz.br" target="_blank" rel="noopener noreferrer">www.reciis.icict.fiocruz.br</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LE COADIC, Y. F. <strong>A Ciência da informação</strong>. 2. ed. Brasília: Briquet de Lemos, 2004.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDE INTERAGENCIAL DE INFORMAÇÕES PARA A SAÚDE – RIPSA. <strong>Indicadores básicos de saúde no Brasil</strong>: conceitos e aplicações. Brasília: Organização Pan-Americana da Saúde, 2002.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SARACEVIC, T. Ciência da informação: origem, evolução e relações <strong>Perspec. Ci. Inf.</strong>, Belo Horizonte, v. 1, n. 1, p. 41-62, jan./jun. 1996.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SENRA, N. C. <strong>A Coordenação da Estatística Nacional</strong>. O Equilíbrio entre o Desejável e o Possível. 1998. Tese (Doutorado em Ciência da Informação) - Escola de Comunicação – ECO, Universidade Federal do Rio de Janeiro – UFRJ e Instituto Brasileiro de Informação em Ciência e Tecnologia – IBICT, Conselho Nacional de Desenvolvimento Científico e Tecnológico – CNPq, Rio de Janeiro, 1998. Disponível em: <a href="https://ridi.ibict.br/bitstream/123456789/665/1/nelsonsenra1998.pdf" target="_blank" rel="noopener noreferrer">https://ridi.ibict.br/bitstream/123456789/665/1/nelsonsenra1998.pdf</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SILVA, C. H. S. <strong>Fontes em Informação Científica e Tecnológica em Saúde</strong> - ICTS - Aula no curso de especialização em ICTS, FIOCRUZ, Rio de Janeiro, junho 2022. </li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUENO, S. B.; BLATMANN, U. Fontes de Informação on-line no contexto da área de ciências da saúde. <strong>Pesquisa Brasileira em Ciência da Informação e Biblioteconomia</strong>, v 1, n 1, 2006. Disponível em: <a href="https://brapci.inf.br/#/v/238971" target="_blank" rel="noopener noreferrer">https://brapci.inf.br/#/v/238971</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUENO, S. B.; BLATMANN, U. Fontes de Informação online no contexto da área de ciências da saúde. <strong>RDBCI:Revista Digital de Biblioteconomia e Ciência da Informação</strong>, v 3, n 1, 2005. Disponível em: <a href="https://brapci.inf.br/#/v/40186" target="_blank" rel="noopener noreferrer">https://brapci.inf.br/#/v/40186</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUSH, V. As We May Think. <strong>The Atlantic Monthly</strong>, July1945. Disponível em: <a href="https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/" target="_blank" rel="noopener noreferrer">https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMPELLO, B. S.; CENDÓN, B. V.; KREMER, J. M. (org.). <strong>Fontes de Informação para pesquisadores e profissionais</strong>. Belo Horizonte: Ed. UFMG, 2000.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAMPELLO, Bernadete. Enciclopédias. <em>In</em>: CAMPELLO, B.; CALDEIRA, P. T. (org.). <strong>Introdução às Fontes de Informação</strong>. 2. ed. Belo Horizonte: Autêntica, 2008. (Coleção Ciência da Informação; v. 2).</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GOMEZ, M. N. G.; CANONGIA, C. (org.). <strong>Contribuição para políticas de ICT</strong>. Brasília, DF: IBICT,2001.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLIVEIRA, A. R. F.; ALENCAR, M. S. M. O uso de aplicativos de saúde para dispositivos móveis como fontes de informação e educação em saúde. <strong>Revista Digital de Biblioteconomia e Ciência da Informação</strong>, v. 15, n.1, 2017. Disponível em: <a href="https://brapci.inf.br/#/v/40893" target="_blank" rel="noopener noreferrer">https://brapci.inf.br/#/v/40893</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLIVEIRA, C. M.; <em>et al.</em> Typology of health information soucers: decision making support. <strong>Asklepion: Informação em Saúde</strong>, v. 2, n.1, 2022. Disponível em: <a href="https://asklepionrevista.info/asklepion/article/view/38" target="_blank" rel="noopener noreferrer">https://asklepionrevista.info/asklepion/article/view/38</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROBREDO, J. Do documento impresso à informação nas nuvens: reflexões. <strong>Liinc em Revista</strong>, v. 7, n.1, p. 19-42, 2011. Disponível em: <a href="http://www.ibict.br/liinc" target="_blank" rel="noopener noreferrer">http://www.ibict.br/liinc</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTANA, R. A. L. <strong>Sistema Nacional de Informações Tóxico-Farmacológicas</strong>: o desafio da padronização dos dados. 2005. Dissertação (Mestrado em Saúde Pública) - Escola Nacional de Saúde Pública, Fundação Oswaldo Cruz, Rio de Janeiro, 2005.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, V. P. S.; COELHO, M. T. A. D.; RODRIGUES JUNIOR, N. M. Fontes de Informação em Saúde. <strong>Revista Fontes Documentais</strong>, v. 3, n. 1, 2020. Disponível em: <a href="https://brabci.info.br/index/php/res/v/15116" target="_blank" rel="noopener noreferrer">https://brabci.info.br/index/php/res/v/15116</a>.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, V. P. S.; COELHO, M. T. A. D.; RODRIGUES JUNIOR, N. M. Fontes de Informação em Saúde: influenciam no conhecimento do HVi/AIDS? <strong>Revista Fontes Documentais</strong>, v 3, n. Ed Especial, 2020. Disponível em: <a href="https://periodicos.ufba.br/index.php/RFD/article/view/57818" target="_blank" rel="noopener noreferrer">https://periodicos.ufba.br/index.php/RFD/article/view/57818</a>.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Aula 3</button>
                    </h5>
                    <div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
                        <div class="accordion-body">
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Aith, F. (2022). Fundamentos e Desafios da Regulação da Saúde Digital em Estados Democráticos de Direito. Em F. Aith, & A. B. Dallari, LGPD na Saúde Digital (pp. 41-59). São Paulo, SP, Brasil : Revista dos Tribunais.<a href="https://www.jusbrasil.com.br/doutrina/secao/1-fundamentos-e-desafios-da-regulacao-da-saude-digital-em-estados-democraticos-de-direito-lgpd-na-saude-digital/1620615610#a-289281868" target="_blank" rel="noopener noreferrer">https://www.jusbrasil.com.br/doutrina/secao/1-fundamentos-e-desafios-da-regulacao-da-saude-digital-em-estados-democraticos-de-direito-lgpd-na-saude-digital/1620615610#a-289281868</a> </li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. (14 de agosto de 2018). <em>Lei 13.709/2018</em>. Fonte: Presidência da República: <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Datasus. (2012). <em>Saúde Digital</em> . Fonte: Datasus : <a href="https://datasus.saude.gov.br/saudedigital/" target="_blank" rel="noopener noreferrer">https://datasus.saude.gov.br/saudedigital/</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">European Union. (27 de april de 2016). <em>General Data Protection Regulation (GDPR)</em>. Fonte: Intersoft Consulting: <a href="https://gdpr-info.eu/" target="_blank" rel="noopener noreferrer">https://gdpr-info.eu/</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Filho, A. D., & Ferrari, I. (2022). Uso de big data em saúde no Brasil: perspectivas e desafios de conformidade com a LGPD. Em F. Aith, & A. B. Dallari, <em>LGPD na Saúde Digital</em> (pp. 2013-229). São Paulo : Revista dos Tribunais.<a href="https://www.jusbrasil.com.br/doutrina/secao/11-uso-de-big-data-em-saude-no-brasil-perspectivas-e-desafios-de-conformidade-com-a-lgpd-lgpd-na-saude-digital/1620615620?utm_source=google&utm_medium=cpc&utm_campaign=doutrina_dsa&utm_term=&utm_content=capitul" target="_blank" rel="noopener noreferrer">https://www.jusbrasil.com.br/doutrina/secao/11-uso-de-big-data-em-saude-no-brasil-perspectivas-e-desafios-de-conformidade-com-a-lgpd-lgpd-na-saude-digital/1620615620?utm_source=google&utm_medium=cpc&utm_campaign=doutrina_dsa&utm_term=&utm_content=capitul</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OMS, O. M. (16 de julho de 2024). <em>World Health Organization</em>. Fonte: Documentod da OMS: <a href="https://www.who.int/pt/publications/m" target="_blank" rel="noopener noreferrer">https://www.who.int/pt/publications/m</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Rivelli, F. (2022). Aplicação e Conformidade dos Dados Sensíveis na Saúde Digital e os Preceitos da LGPD. Em F. Aith, & A. B. Dallari, <em>LGPD na Saúde Digital</em> (pp. 183-198). São Paulo : Revista dos Tribunais . </li>
                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">USA. (20 de aug de 1996). <em>US Departemnet Of Health an Human Service</em>. Fonte: Health Insurance Portability and Accountability Act of 1996: <a href="https://aspe.hhs.gov/reports/health-insurance-portability-accountability-act-1996" target="_blank" rel="noopener noreferrer">https://aspe.hhs.gov/reports/health-insurance-portability-accountability-act-1996</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-item4">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="false" aria-controls="collapse1-item4">Aula 4</button>
                    </h5>
                    <div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
                        <div class="accordion-body">
                            <div class="list">
                                <ul class="list-group">
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei no 8080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências. <strong>Diário Oficial da União</strong>, 20 set. 1990. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l8080.htm</a>. Acesso em 7 de julh. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 8.142, de 28 de dezembro de 1990. Dispõe sobre a participação da comunidade na gestão do Sistema Único de Saúde (SUS) e sobre as transferências intergovernamentais de recursos financeiros na área da saúde e dá outras providências. <strong>Diário Oficial da União</strong>, 31 dez. 1990. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l8142.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l8142.htm</a>. Acesso em 7 de julh. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Decreto nº 100, de 16 de abril de 1991</strong> [Revogado]. Institui a Fundação Nacional de Saúde e dá outras providências. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/decreto/1990-1994/d0100.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/decreto/1990-1994/d0100.htm</a>. Acesso em 7 de julh. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. <strong>Portaria nº 589, de 20 de maio de 2015</strong>. Institui a Política Nacional de Informação e Informática em Saúde (PNIIS). Disponível em: <a href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2015/prt0589_20_05_2015.html" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/saudelegis/gm/2015/prt0589_20_05_2015.html</a>. Acesso em 10 de julh. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria nº 1.768, de 30 de julho de 2021. Altera o Anexo XLII da Portaria de Consolidação GM/MS nº 2, de 28 de setembro de 2017, para dispor sobre a Política Nacional de Informação e Informática em Saúde (PNIIS). <strong>Diário Oficial da União</strong>: Seção 1, Brasília, DF, n. 144, p. 45, 02 ago. 2021. Disponível em: <a href="https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-1.768-de-30-de-julho-de-2021-335472332" target="_blank" rel="noopener noreferrer">https://www.in.gov.br/en/web/dou/-/portaria-gm/ms-n-1.768-de-30-de-julho-de-2021-335472332</a>. Acesso em: 10 de jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria-Executiva. Departamento de Monitoramento e Avaliação do SUS. <strong>Política Nacional de Informação e Informática em Saúde</strong>. Brasília: Ministério da Saúde, 2016. 56 p. Disponível em: <a href="https://www.gov.br/saude/pt-br/composicao/seidigi/publicacoes/pniis-2016.pdf/view" target="_blank" rel="noopener noreferrer">https://www.gov.br/saude/pt-br/composicao/seidigi/publicacoes/pniis-2016.pdf/view</a>. Acesso em: 15 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria nº 1.434, de 28 de maio de 2020. Institui o Programa Conecte SUS e altera a Portaria de Consolidação nº 1/GM/MS, de 28 de setembro de 2017, para instituir a Rede Nacional de Dados em Saúde e dispor sobre a adoção de padrões de interoperabilidade em saúde. <strong>Diário Oficial da União</strong>: Seção 1, Brasília, DF, n. 102, p. 231, 29 maio 2020. Disponível em: <a href="https://www.in.gov.br/en/web/dou/-/portaria-n-1.434-de-28-de-maio-de-2020-259143327" target="_blank" rel="noopener noreferrer">https://www.in.gov.br/en/web/dou/-/portaria-n-1.434-de-28-de-maio-de-2020-259143327</a>. Acesso em: 7 de jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Gabinete do Ministro. <strong>Portaria nº 545, de 20 de maio de 1993</strong>. Estabelece normas e procedimentos reguladores do processo de descentralização da gestão das ações e serviços de saúde, através da Norma Operacional Básica - SUS 01/93. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/1993/prt0545_20_05_1993.html" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/saudelegis/gm/1993/prt0545_20_05_1993.html</a>. Acesso em 7 de julh. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. Ministério da Saúde, Organização Pan-Americana da Saúde, Fundação Oswaldo Cruz. Brasília: Editora do Ministério da Saúde, 2009. (Série B. Textos Básicos de Saúde).</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria Executiva. Departamento de Informática do SUS. <strong>DATASUS Trajetória 1991-2002</strong>. Brasília: Ministério da Saúde, 2002. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/trajetoria_datasus.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/trajetoria_datasus.pdf</a>. Acesso em: 10 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Decreto n° 4.194, de 11 de abril de 2002</strong> [Revogado]. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/decreto/2002/d4194.htm#:~:text=DECRETO%20N%C2%BA%204.194%2C%20DE%2011%20DE%20ABRIL%20DE%202002.&text=Aprova%20a%20Estrutura%20Regimental%20e,que%20lhe%20confere%20o%20art" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/decreto/2002/d4194.htm#:~:text=DECRETO%20N%C2%BA%204.194%2C%20DE%2011%20DE%20ABRIL%20DE%202002.&text=Aprova%20a%20Estrutura%20Regimental%20e,que%20lhe%20confere%20o%20art</a>. Acesso em: 10 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria Executiva. Departamento de Informação e Informática do SUS. <strong>Política Nacional de Informação e Informática em Saúde Proposta Versão 2.0</strong>. Brasília, 29 mar. 2024. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/PoliticaInformacaoSaude29_03_2004.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/PoliticaInformacaoSaude29_03_2004.pdf</a>. Acesso em: 15 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAVALCANTE, R. B.; PINHEIRO, M. M. K. Política Nacional de Informação e Informática em Saúde: avanços e limites atuais. <strong>Perspectivas em Gestão & Conhecimento</strong>, v. 1, n. 2, p. 91–104, 2011. Disponível em: <a href="https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487" target="_blank" rel="noopener noreferrer">https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487</a>. Acesso em: 15 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FONSECA, F. C. S. Sistemas de Informação da Atenção à Saúde: da fragmentação à interoperabilidade. <em>In</em>: BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Regulação, Avaliação e Controle. <strong>Sistemas de Informação da Atenção à Saúde</strong>: contextos históricos, avanços e perspectivas no SUS. Organização Pan-Americana da Saúde: Brasília, 2015. p. 9-22.166 p. Disponível em: <a href="https://www.escoladesaude.pr.gov.br/arquivos/File/sistemas_informacao_atencao_saude_contextos_historicos.pdf" target="_blank" rel="noopener noreferrer">https://www.escoladesaude.pr.gov.br/arquivos/File/sistemas_informacao_atencao_saude_contextos_historicos.pdf</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CAVALCANTE, R. B.; PINHEIRO, M. M. K. Política Nacional de Informação e Informática em Saúde: avanços e limites atuais. <strong>Perspectivas em Gestão & Conhecimento</strong>, v. 1, n. 2, p. 91-104, 2011. Disponível em: <a href="https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487" target="_blank" rel="noopener noreferrer">https://periodicos.ufpb.br/ojs2/index.php/pgc/article/view/10487</a>. Acesso em: 10 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COELHO NETO, G. C.; CHIORO, A. Afinal, quantos Sistemas de Informação em Saúde de base nacional existem no Brasil?. <strong>Cadernos de Saúde Pública</strong>, v. 37, n. 7, 2021. Disponível em: <a href="https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csp/a/RzNmvjHqmLhPHZp6gfcdC6H/?format=pdf&lang=pt</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CONFERÊNCIA NACIONAL DE SAÚDE. <strong>Relatório Final da 5ª Conferência Nacional de Saúde</strong> (CNS). Brasília, 1975. Disponível em: <a href="https://www.gov.br/conselho-nacional-de-saude/pt-br/centrais-de-conteudo/publicacoes/relatorios/relatorio-final-da-5a-conferencia-nacional-de-saude/view#:~:text=A%205%C2%AA%20Confer%C3%AAncia%20Nacional%20de,Nacional%20de%20Vigil%C3%A2ncia%20Epidemiol%C3%B3gica%3B%204" target="_blank" rel="noopener noreferrer">https://www.gov.br/conselho-nacional-de-saude/pt-br/centrais-de-conteudo/publicacoes/relatorios/relatorio-final-da-5a-conferencia-nacional-de-saude/view#:~:text=A%205%C2%AA%20Confer%C3%AAncia%20Nacional%20de,Nacional%20de%20Vigil%C3%A2ncia%20Epidemiol%C3%B3gica%3B%204</a>. Acesso em 10 de julh. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JANNNUZZI, P. M. Estatísticas e Políticas Públicas orientadas por evidências no Brasil: o caso das Políticas de Desenvolvimento Social nos anos 2000. <strong>Revista Brasileira de Geografia</strong>, v. 64, n. 1, p. 37-54, 2019. Disponível em: <a href="https://rbg.ibge.gov.br/index.php/rbg/article/view/2096" target="_blank" rel="noopener noreferrer">https://rbg.ibge.gov.br/index.php/rbg/article/view/2096</a>. Acesso em: 7 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JORGE, M. H. P.; LAURENTI, R.; GOTLIEB, S. L. D. O sistema de Informações sobre Mortalidade – SIM: Concepção, Implantação e Avaliação. <em>In</em>: BRASIL. Ministério da Saúde. <strong>A experiência brasileira em sistemas de informação em saúde</strong>. Ministério da Saúde, Organização Pan-Americana da Saúde, Fundação Oswaldo Cruz. Brasília: Editora do Ministério da Saúde, 2009.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MARIN, H. F. Sistemas de informação em saúde: considerações gerais. <strong>J. Health Inform.</strong>, v. 2, n. 1, p. 20-4, 2010. Disponível em: <a href="https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/4/52" target="_blank" rel="noopener noreferrer">https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/4/52</a>. Acesso em: 7 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MENICUCCI, T. M. G. História da reforma sanitária brasileira e do Sistema Único de Saúde: mudanças, continuidades e a agenda atual. <strong>História, Ciências, Saúde-Manguinhos</strong>, Rio de Janeiro, v. 21, n. 1, p. 77–92, jan. 2014. Disponível em: <a href="https://www.scielo.br/j/hcsm/a/bVMCvZshr9RxtXpdh7YPC5x/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/hcsm/a/bVMCvZshr9RxtXpdh7YPC5x/?format=pdf&lang=pt</a></li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REZENDE, F. A. V. S.; SOARES, M. F.; REIS, A. C. Os sistemas de informação em Saúde no Sistema Único de Saúde. <em>In</em>: LEANDRO, B. D. S.; REZENDE, F. A. V. S; PINTO, J. M. C. <strong>Informações e registros em saúde e seus usos no SUS</strong>. Rio de Janeiro: Editora Fiocruz, 2020.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RISI JUNIOR, J. B. Informação e Saúde no Brasil: a contribuição da Ripsa. <strong>Ciência & Saúde Coletiva</strong>, v. 11, n. 4, p. 1049-1053, 2006. Disponível em: <a href="http://www.scielo.br/pdf/csc/v11n4/32340.pdf" target="_blank" rel="noopener noreferrer">http://www.scielo.br/pdf/csc/v11n4/32340.pdf</a>. Acesso em: 7 jul. 2024.</li>
                                    <li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VIACAVA, F. Informações em saúde: a importância dos inquéritos populacionais. <strong>Ciência & Saúde Coletiva</strong>, v. 7, n. 4, p. 607-621, 2002. Disponível em: <a href="https://www.scielo.br/j/csc/a/j8mV4fvjSk7K9brzbdCj77J/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/csc/a/j8mV4fvjSk7K9brzbdCj77J/?format=pdf&lang=pt</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Accordion -->
        </div>

    </div>
</div>
		`,
	},
	bibliografiaMod2: {
		ariaLabel: "bibliografiaMod2",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia Módulo 2",
		modalBody: `
			
		`,
	},
	bibliografiaMod3: {
		ariaLabel: "bibliografiaMod3",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia Módulo 3",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-11">
					<div class="mb-5">
						<!-- Accordion -->
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item1">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item1" aria-expanded="true" aria-controls="collapse1-item1">Aula 1</button>
								</h5>
								<div id="collapse1-item1" class="accordion-collapse collapse" aria-labelledby="heading1-item1" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INFRAESTRUTURA NACIONAL DE DADOS. BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. <strong>Infraestrutura Nacional de Dados</strong>. Brasília, DF: Governo Digital, 2023. Disponível em: <a href='https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados' target='_blank'>https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados</a>. Acesso em: 30 maio 2025.Serviços e Informações do Brasil</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REDE NACIONAL DE DADOS EM SAÚDE (RNDS). BRASIL. Ministério da Saúde. <strong>Rede Nacional de Dados em Saúde (RNDS)</strong>. Brasília, DF: Ministério da Saúde, 2020. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/seidigi/rnds' target='_blank'>https://www.gov.br/saude/pt-br/composicao/seidigi/rnds</a>. Acesso em: 30 maio 2025.</li>

											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item2" aria-expanded="false" aria-controls="collapse1-item2">Aula 2</button>
								</h5>
								<div id="collapse1-item2" class="accordion-collapse collapse" aria-labelledby="heading1-item2" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Datasus. <strong>Ata da 2ª Reunião CIINFO, 10 de dezembro de 2019</strong> - Versão Final Assinada. Disponível em: <a href='https://datasus.saude.gov.br/wp-content/uploads/2020/05/ATA-da-2a-Reuni%C3%A3o-CIINFO-10.12.2019-Vers%C3%A3o-FINAL-Assinada.pdf' target='_blank'>https://datasus.saude.gov.br/wp-content/uploads/2020/05/ATA-da-2a-Reuni%C3%A3o-CIINFO-10.12.2019-Vers%C3%A3o-FINAL-Assinada.pdf</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Gstão e Inovação dos Serviços Públicos. Instituto Nacional de Tecnologia da Informação. <strong>ICP-Brasil</strong>. Disponível em: <a href='https://www.gov.br/iti/pt-br/assuntos/icp-brasil' target='_blank'>https://www.gov.br/iti/pt-br/assuntos/icp-brasil</a>. Acesso em: 13 jul. 2024.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Lei n.º 13.709, de 14 de agosto de 2018</strong>. Dispõe sobre a proteção de dados pessoais e altera a Lei n.º 12.965, de 23 de abril de 2014 (Marco Civil da Internet). Este texto não substitui o publicado no DOU de 15.8.2018, e republicado parcialmente em 15.8.2018 - Edição extra Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. <strong>Portaria GM/MS n.º 1796, de 22 de julho de 2019</strong>. Redefine o Comitê de Informação e Informática em Saúde (CIINFO/MS) no âmbito do Ministério da Saúde. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2019/prt1796_22_07_2019.html' target='_blank'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2019/prt1796_22_07_2019.html</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria-Executiva. Departamento de Monitoramento e Avaliação do SUS. <strong>Política Nacional de Informação e Informática em Saúde</strong>. Brasília: Ministério da Saúde, 2016. 56 p. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_infor_informatica_saude_2016.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_infor_informatica_saude_2016.pdf</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Portaria nº 1.434, de 28 de maio de 2020. Meu SUS Digital: Legislação. <strong>Diário Oficial da União</strong>: Seção 1, Brasília, DF, n. 102, p. 231, 29 maio 2020. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/seidigi/meususdigital/legislacao' target='_blank'>https://www.gov.br/saude/pt-br/composicao/seidigi/meususdigital/legislacao</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <strong>Síndrome Respiratória Aguda Grave</strong>. SRAG 2021 e 2022. Disponível em: <a href='https://dados.gov.br/dados/conjuntos-dados/srag-2021-e-2022' target='_blank'>https://dados.gov.br/dados/conjuntos-dados/srag-2021-e-2022</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">D. Bender and K. Sartipi, "HL7 FHIR: An Agile and RESTful approach to healthcare information exchange," Proceedings of the 26th IEEE International Symposium on Computer-Based Medical Systems, Porto, Portugal, 2013, pp. 326-331, <a href='https://ieeexplore.ieee.org/document/6627810' target='_blank'>https://ieeexplore.ieee.org/document/6627810</a>. Acesso em: 22 maio 2025.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BENDER, Duane; SARTIPI, KAMRAN. HL7 FHIR: An Agile and REST-ful approach to healthcare information exchange. <em>In:</em> Proceedings of the 26th IEEE International Symposium on Computer-based Medical Systems; 2013. Portugal. p. 326-31.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HARRIS, P. A. <em>et al</em>. Research Electronic Data Capture (REDCap): a metadata-driven methodology and workflow process for providing translational research informatics support. <strong>Journal of Biomedical Informatics</strong>, v. 42, n. 2, p. 377-381, 2009. Disponível em: <a href='https://www.sciencedirect.com/science/article/pii/S1532046408001226' target='_blank'>https://www.sciencedirect.com/science/article/pii/S1532046408001226</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO DE ESTUDOS PARA POLÍTICAS DE SAÚDE. <strong>Panorama IEPS:</strong> Programa TechSUS- Governança e interoperabilidade de dados para a Saúde. (Panorama IEPS nº 4) Disponível em: <a href='https://ieps.org.br/wp-content/uploads/2023/04/panorama-ieps-4-techSUS-saude-digital.pdf' target='_blank'>https://ieps.org.br/wp-content/uploads/2023/04/panorama-ieps-4-techSUS-saude-digital.pdf</a>. Acesso em: 13 jul. 2024.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Ayaz M, Pasha MF, Alzahrani MY, Budiarto R, Stiawan D
												The Fast Health Interoperability Resources (FHIR) Standard: Systematic Literature Review of Implementations, Applications, Challenges and Opportunities. JMIR Med Inform 2021;9(7):e21929. <a href='https://medinform.jmir.org/2021/7/e21929' target='_blank'>https://medinform.jmir.org/2021/7/e21929</a>. Acesso em: 22 maio 2025.
												</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VORISEK CN, LEHNE M, KLOPFENSTEIN SAI, MAYER PJ, BARTSCHKE A, HAESE T, THUN S. Fast Healthcare Interoperability Resources (FHIR) for Interoperability in Health Research: Systematic Review JMIR Med Inform 2022;10(7):e35724 <a href='https://medinform.jmir.org/2022/7/e35724/' target='_blank'>https://medinform.jmir.org/2022/7/e35724/</a> Acesso em : 16 maio 2025.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PRUD'HOMMEAUX E, COLLINS J, BOOTH D, PETERSON KJ, SOLBRIG HR, JIANG G. Development of a FHIR RDF data transformation and validation framework and its evaluation. J Biomed Inform. 2021 May;117:103755. doi: 10.1016/j.jbi.2021.103755. Epub 2021 Mar 26. PMID: 33781919; PMCID: PMC8131260. <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC8131260/' target='_blank'>https://pmc.ncbi.nlm.nih.gov/articles/PMC8131260/</a> Acesso em: 16 maio 2025</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MORAIS NETO, O. L. D.; BARROS, M. B. D. A. Fatores de risco para mortalidade neonatal e pós-neonatal na Região Centro-Oeste do Brasil: linkage entre bancos de dados de nascidos vivos e óbitos infantis. <strong>Caderno de Saúde Pública</strong>, v. 16, n. 2, p. 477-85, 2000. Disponível em: <a href='https://www.scielo.br/j/csp/a/4j5FmhX3rKjGTC8fmHLrZxF/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/csp/a/4j5FmhX3rKjGTC8fmHLrZxF/?format=pdf&lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NAKAMOTO, S. <strong>Bitcoin</strong>: a peer-to-peer electronic cash system. 2008. Disponível em: <a href='https://bitcoin.org/bitcoin.pdf' target='_blank'>https://bitcoin.org/bitcoin.pdf</a>. Acesso em: 13 jul. 2024.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANISATION FOR ECONOMIC CO-OPERATION AND DEVELOPMENT - OECD. <strong>Health Data Governance for the Digital Age</strong> - 2022. Disponível em: <a href='https://www.oecd-ilibrary.org/sites/68b60796-en/1/3/5/index.html?itemId=/content/publication/68b60796-en&_csp_=06e97bce8767c64c4b34a465198dee0c&itemIGO=oecd&itemContentType=book' target='_blank'>https://www.oecd-ilibrary.org/sites/68b60796-en/1/3/5/index.html?itemId=/content/publication/68b60796-en&_csp_=06e97bce8767c64c4b34a465198dee0c&itemIGO=oecd&itemContentType=book</a>. Acesso em: 13 jul. 2024.</li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SMITH, B.; JONES, J.; BROWN, A. Implementation of HL7 FHIR in Electronic Health Record Systems: Lessons Learned. <strong>IEEE Journal of Biomedical and Health Informatics</strong>, 2017. Disponível em: <a href='https://ieeexplore.ieee.org/document/7892358' target='_blank'>https://ieeexplore.ieee.org/document/7892358</a>. Acesso em: 13 jul. 2024.</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item3" aria-expanded="false" aria-controls="collapse1-item3">Aula 3</button>
								</h5>
								<div id="collapse1-item3" class="accordion-collapse collapse" aria-labelledby="heading1-item3" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Araújo, M. S., Brito, M. B. R. de, Pessoa, L. T. S., Cadête, M. L. X., Marques, E. J. G., Coelho, L. N. L., … Resplandes, P. H. S. (2023). IMPACTO DA TELEMEDICINA NA PRESTAÇÃO DE CUIDADOS DE SAÚDE: DESAFIOS E OPORTUNIDADES. <strong>Revista Ibero-Americana De Humanidades, Ciências E Educação</strong>, 9(8), 1300–1306. <a href='https://doi.org/10.51891/rease.v9i8.10990' target='_blank'>https://doi.org/10.51891/rease.v9i8.10990</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Costa, M. V. da S., Camargos, M. C. S., Viana, S. M. N., & Mendes, U. V. de S. (2025). Avanços e desafios da interoperabilidade no Sistema Único de Saúde. <strong>Journal of Health Informatics</strong>, 17(1), 1112. <a href='https://doi.org/10.59681/2175-4411.v17.2025.1112' target='_blank'>https://doi.org/10.59681/2175-4411.v17.2025.1112</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Rachid, Raquel <em>et al</em>. Saúde digital e a plataformização do Estado brasileiro. <strong>Ciência & Saúde Coletiva [online]</strong>. v. 28, n. 7 [Acessado 22 Maio 2025] , pp. 2143-2153. Disponível em: <<a href='https://doi.org/10.1590/1413-81232023287.14302022' target='_blank'>https://doi.org/10.1590/1413-81232023287.14302022</a>>. ISSN 1678-4561. <a href='https://doi.org/10.1590/1413-81232023287.14302022' target='_blank'>https://doi.org/10.1590/1413-81232023287.14302022</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. Ministério da Saúde. Secretaria-Executiva. Departamento de Informática do SUS. <strong>Estratégia de Saúde Digital para o Brasil 2020-2028</strong> [recurso eletrônico]. / Ministério da Saúde, Secretaria-Executiva, Departamento de Informática do SUS. – Brasília : Ministério da Saúde, 2020. 128 p. : il. <a href='https://bvsms.saude.gov.br/bvs/publicacoes/estrategia_saude_digital_Brasil.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/estrategia_saude_digital_Brasil.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALBUQUERQUE, E. A. Y. <em>et al</em>. Prontuário Eletrônico do Paciente e certificação de software em saúde: Avanços que visam maior segurança dos dados médicos. <strong>Revista Brasileira de Inovação Tecnológica em Saúde</strong> ISSN: 2236-1103, v. 7, n. 2, 2017. <a href='https://revista.ibict.br/ciinf/article/view/5007' target='_blank'>https://revista.ibict.br/ciinf/article/view/5007</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. <strong>Diretrizes nacionais de implantação da estratégia e-SUS AB</strong> [recurso eletrônico] / Ministério da Saúde, Secretaria de Atenção à Saúde, Departamento de Atenção Básica. – Brasília : Ministério da Saúde, 2014. 11 p. <a href='https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_nacionais_implantacao_estrategia_esus.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_nacionais_implantacao_estrategia_esus.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">Colleti Junior, J., Andrade, A. B. de ., & Carvalho, W. B. de .. (2018). Avaliação do uso de sistemas de prontuário eletrônico nas unidades de terapia intensiva brasileiras. <strong>Revista Brasileira De Terapia Intensiva</strong>, 30(3), 338–346. <a href='https://doi.org/10.5935/0103-507X.20180057' target='_blank'>https://doi.org/10.5935/0103-507X.20180057</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div class="accordion-item">
								<h5 class="accordion-header" id="heading1-item4">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-item4" aria-expanded="false" aria-controls="collapse1-item4">Aula 4</button>
								</h5>
								<div id="collapse1-item4" class="accordion-collapse collapse" aria-labelledby="heading1-item4" data-bs-parent="">
									<div class="accordion-body">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. MINISTÉRIO DA SAÚDE. Secretarie Executiva. Departamento de Monitoramento e Avaliação do SUS. <strong>Política Nacional de Informação e Informática em Saúde</strong> / Ministério da Saúde, Secretaria Executiva, Departamento de Monitoramento e Avaliação do SUS. – Brasília : Ministério da Saúde, 2016. 56 p. : il. <a href='https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_infor_informatica_saude_2016.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_infor_informatica_saude_2016.pdf</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SCHÖNHOLZER TE, PINTO IC, ZACHARIAS FCM, GAETE RAC, SERRANO-GALLARDO MDP. <strong>Implantação do sistema e-SUS Atenção Básica</strong>: impacto no cotidiano dos profissionais da Atenção Primária à Saúde. Rev. Latino-Am. Enfermagem. 2021;29:e3447. <a href='https://www.scielo.br/j/rlae/a/mpkGdqxpRBHH3B7cSyzjSXc/?format=pdf&lang=pt' target='_blank'>https://www.scielo.br/j/rlae/a/mpkGdqxpRBHH3B7cSyzjSXc/?format=pdf&lang=pt</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DE ALENCAR, M. M. V.; ANDRADE, C. R. A. G.; E VÉRAS, A. R. de A. R.; FREITAS NETO, O. de G.; POL-FACHIN, L. <strong>Interoperabilidade e Sistemas de Informações em Saúde</strong>: o que estamos publicando no Brasil?. Brazilian Journal of Health Review, [S. l.], v. 6, n. 4, p. 17771–17790, 2023. DOI: 10.34119/bjhrv6n4-292. <a href='https://ojs.brazilianjournals.com.br/ojs/index.php/BJHR/article/view/62255' target='_blank'>https://ojs.brazilianjournals.com.br/ojs/index.php/BJHR/article/view/62255</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">REIS-SANTOS, BARBARA. <strong>Sistemas de Informação em Saúde: o quanto estamos avançando?</strong>. Epidemiologia e Serviços de Saúde [online]. v. 32, n. 2, 2023. <a href='https://www.scielo.br/j/ress/a/YcfndkbP5rnMXS4chLM4WSr/?lang=pt' target='_blank'>https://www.scielo.br/j/ress/a/YcfndkbP5rnMXS4chLM4WSr/?lang=pt</a></li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION. <strong>Global strategy on digital health 2020-2025</strong>. Geneva: World Health Organization; 2021. <a href='https://www.who.int/docs/default-source/documents/gs4dhdaa2a9f352b0445bafbc79ca799dce4d.pdf' target='_blank'>https://www.who.int/docs/default-source/documents/gs4dhdaa2a9f352b0445bafbc79ca799dce4d.pdf</a></li>
												
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COSTA, M. V. DA S., CAMARGOS, M. C. S., VIANA, S. M. N., & MENDES, U. V. DE S. <strong>Avanços e desafios da interoperabilidade no Sistema Único de Saúde</strong>. Journal of Health Informatics, 2025, 17(1). <a href='https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/1112' target='_blank'>https://jhi.sbis.org.br/index.php/jhi-sbis/article/view/1112</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- Fim do Accordion -->
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod4: {
		ariaLabel: "bibliografiaMod4",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia Módulo 4",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-11">
					<div class="mb-5">
							<p>A bibliografia a seguir é comum às aulas 1, 2, 3 e 4.</p>

							<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ASSOCIAÇÃO BRASILEIRA DE TELEMEDICINA E TELESSAÚDE. Relatório sobre Telemedicina no Brasil. 2023. Disponível em: <a href='https://www.abtms.org.br/' target='_blank'>https://www.abtms.org.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BANCO MUNDIAL. Relatório sobre Saúde Global. 2020. Disponível em: <a href='https://www.worldbank.org/en/topic/health' target='_blank'>https://www.worldbank.org/en/topic/health</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FUNDAÇÃO GETÚLIO VARGAS. Parcerias Público-Privadas na Saúde. 2021. Disponível em: <a href='https://www.fgv.br/' target='_blank'>https://www.fgv.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FROST & SULLIVAN. Mercado de Saúde Digital no Brasil. 2023. Disponível em: <a href='https://ww2.frost.com/' target='_blank'>https://ww2.frost.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GLOBAL MARKET INSIGHTS. Mercado Global de Saúde Digital. 2024. Disponível em: <a href='https://www.gminsights.com/' target='_blank'>https://www.gminsights.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Pesquisa Nacional de Saúde. 2019a. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Estatísticas de Saúde. 2019b. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. População Quilombola. 2019c. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INTERNATIONAL DATA CORPORATION. Mercado Global de Dispositivos Vestíveis. 2024. Disponível em: <a href='https://www.idc.com/' target='_blank'>https://www.idc.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MCKINSEY & COMPANY. A IA na Saúde: Economia e Eficiência. 2023. Disponível em: <a href='https://www.mckinsey.com/' target='_blank'>https://www.mckinsey.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Boletim Epidemiológico de Arboviroses. 2022. Disponível em: <a href='https://www.saude.gov.br/' target='_blank'>https://www.saude.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Indicadores de Mortalidade Materna. 2020. Disponível em: <a href='https://www.saude.gov.br/indicadores-de-saude' target='_blank'>https://www.saude.gov.br/indicadores-de-saude</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. COVID-19 Dashboard. 2023. Disponível em: <a href='https://covid19.who.int/' target='_blank'>https://covid19.who.int/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Doenças Crônicas. 2020. Disponível em: <a href='https://www.who.int/chronic_diseases/en/' target='_blank'>https://www.who.int/chronic_diseases/en/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Envelhecimento e saúde. 2015. Disponível em: <a href='https://www.who.int/ageing/en/' target='_blank'>https://www.who.int/ageing/en/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Tecnologias em Saúde. 2021. Disponível em: <a href='https://www.who.int/health-topics/technology' target='_blank'>https://www.who.int/health-topics/technology.</li>
</a>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Saúde Mental no Brasil. 2020. Disponível em: <a href='https://www.paho.org/' target='_blank'>https://www.paho.org/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SECRETARIA ESPECIAL DE SAÚDE INDÍGENA. Relatório de Saúde Indígena. 2021. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/sesai' target='_blank'>https://www.gov.br/saude/pt-br/composicao/sesai</a>.</li>
												
											</ul>
										</div>
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod5: {
		ariaLabel: "bibliografiaMod5",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia Módulo 5",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-11">
					<div class="mb-5">
							<p>A bibliografia a seguir é comum às aulas 1, 2, 3 e 4.</p>

							<div class="list">
											<ul class="list-group">
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ASSOCIAÇÃO BRASILEIRA DE TELEMEDICINA E TELESSAÚDE. Relatório sobre Telemedicina no Brasil. 2023. Disponível em: <a href='https://www.abtms.org.br/' target='_blank'>https://www.abtms.org.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BANCO MUNDIAL. Relatório sobre Saúde Global. 2020. Disponível em: <a href='https://www.worldbank.org/en/topic/health' target='_blank'>https://www.worldbank.org/en/topic/health</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FUNDAÇÃO GETÚLIO VARGAS. Parcerias Público-Privadas na Saúde. 2021. Disponível em: <a href='https://www.fgv.br/' target='_blank'>https://www.fgv.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FROST & SULLIVAN. Mercado de Saúde Digital no Brasil. 2023. Disponível em: <a href='https://ww2.frost.com/' target='_blank'>https://ww2.frost.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GLOBAL MARKET INSIGHTS. Mercado Global de Saúde Digital. 2024. Disponível em: <a href='https://www.gminsights.com/' target='_blank'>https://www.gminsights.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Pesquisa Nacional de Saúde. 2019a. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. Estatísticas de Saúde. 2019b. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA. População Quilombola. 2019c. Disponível em: <a href='https://www.ibge.gov.br/' target='_blank'>https://www.ibge.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INTERNATIONAL DATA CORPORATION. Mercado Global de Dispositivos Vestíveis. 2024. Disponível em: <a href='https://www.idc.com/' target='_blank'>https://www.idc.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MCKINSEY & COMPANY. A IA na Saúde: Economia e Eficiência. 2023. Disponível em: <a href='https://www.mckinsey.com/' target='_blank'>https://www.mckinsey.com/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Boletim Epidemiológico de Arboviroses. 2022. Disponível em: <a href='https://www.saude.gov.br/' target='_blank'>https://www.saude.gov.br/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MINISTÉRIO DA SAÚDE. Indicadores de Mortalidade Materna. 2020. Disponível em: <a href='https://www.saude.gov.br/indicadores-de-saude' target='_blank'>https://www.saude.gov.br/indicadores-de-saude</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. COVID-19 Dashboard. 2023. Disponível em: <a href='https://covid19.who.int/' target='_blank'>https://covid19.who.int/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Doenças Crônicas. 2020. Disponível em: <a href='https://www.who.int/chronic_diseases/en/' target='_blank'>https://www.who.int/chronic_diseases/en/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Envelhecimento e saúde. 2015. Disponível em: <a href='https://www.who.int/ageing/en/' target='_blank'>https://www.who.int/ageing/en/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Tecnologias em Saúde. 2021. Disponível em: <a href='https://www.who.int/health-topics/technology' target='_blank'>https://www.who.int/health-topics/technology.</li>
</a>
												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Saúde Mental no Brasil. 2020. Disponível em: <a href='https://www.paho.org/' target='_blank'>https://www.paho.org/</a>.</li>

												<li class="list-group-item aos-init aos-animate" list-style='default' data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SECRETARIA ESPECIAL DE SAÚDE INDÍGENA. Relatório de Saúde Indígena. 2021. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/sesai' target='_blank'>https://www.gov.br/saude/pt-br/composicao/sesai</a>.</li>
												
											</ul>
										</div>
					</div>
				</div>
			</div>
		`,
	},
	autorMod1Aula1: {
		ariaLabel: "autorMod1Aula1",
		modalSize: "modal-xl",
		modalTitle: "Sobre os autores",
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Uende Aparecida Figueiredo Gomes</h5>
						<p class="mb-0">Professora-pesquisadora do Departamento de Engenharia Sanitária e Ambiental da Escola de Engenharia da Universidade Federal de Minas Gerais (DESA/UFMG).</p>
					</div>
					
					<div class="mb-5">
						<h5 class="mb-3">Alexandre Pessoa Dias </h5>
						<p class="mb-0">Coordenador acadêmico do curso, professor-pesquisador da Escola Politécnica de Saúde Joaquim Venâncio da Fiocruz (ESPJV/Fiocruz).</p>
					</div>

				</div>
			</div>
		`,
	},
	glossario: {
		ariaLabel: "glossario",
		modalSize: "modal-lg",
		modalTitle: "Glossário",
		modalBody: `
			<div class="accordion accordion-flush" id="accordionExample2">
	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-c">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-c" aria-expanded="false" aria-controls="collapse1-c">C</button>
		</h2>
		<div id="collapse1-c" class="accordion-collapse collapse" aria-labelledby="heading1-c" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>CIT</strong></p>
					<p><strong>Comissão Intergestores Tripartite:</strong> Um fórum de discussão e deliberação que reúne
						representantes do Ministério da Saúde, dos estados e dos municípios para tratar de temas
						relacionados ao SUS.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-e">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-e" aria-expanded="false" aria-controls="collapse1-e">E</button>
		</h2>
		<div id="collapse1-e" class="accordion-collapse collapse" aria-labelledby="heading1-e" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>ESD</strong></p>
					<p><strong>Estratégia de Saúde Digital:</strong> Iniciativa do Ministério da Saúde para promover a
						digitalização dos serviços de saúde no Brasil, com foco na integração de dados e no uso de
						tecnologias emergentes.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-i">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-i" aria-expanded="false" aria-controls="collapse1-i">I</button>
		</h2>
		<div id="collapse1-i" class="accordion-collapse collapse" aria-labelledby="heading1-i" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>IA</strong></p>
					<p>Inteligência Artificial: Tecnologia que simula processos de inteligência humana, utilizada na
						saúde para diagnósticos, previsão de surtos e personalização de tratamentos.</p>
				</div>

				<div class="mb-5">
					<p class="mb-3"><strong>IoT</strong></p>
					<p><strong>Internet das Coisas:</strong> Tecnologia que conecta objetos do dia a dia à internet,
						permitindo que eles coletem e compartilhem dados, sendo aplicada na saúde para monitoramento e
						gestão de dados clínicos.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-o">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-o" aria-expanded="false" aria-controls="collapse1-o">O</button>
		</h2>
		<div id="collapse1-o" class="accordion-collapse collapse" aria-labelledby="heading1-o" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>OMS</strong></p>
					<p><strong>Organização Mundial da Saúde:</strong> Agência especializada das Nações Unidas que
						coordena a saúde pública internacional e define normas e diretrizes globais para a saúde.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-p">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-p" aria-expanded="false" aria-controls="collapse1-p">P</button>
		</h2>
		<div id="collapse1-p" class="accordion-collapse collapse" aria-labelledby="heading1-p" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>PNIIS</strong></p>
					<p><strong>Política Nacional de Informação e Informática em Saúde:</strong> Política elaborada para
						consolidar as ações do SUS relacionadas à informação e tecnologia da informação em saúde, com
						diretrizes para os três níveis da federação.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-r">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-r" aria-expanded="false" aria-controls="collapse1-r">R</button>
		</h2>
		<div id="collapse1-r" class="accordion-collapse collapse" aria-labelledby="heading1-r" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>RNDS</strong></p>
					<p><strong>Rede Nacional de Dados e Saúde:</strong> Plataforma de interoperabilidade do SUS que
						integra dados de saúde em todo o país, promovendo a conectividade entre as diferentes regiões.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-s">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-s" aria-expanded="false" aria-controls="collapse1-s">S</button>
		</h2>
		<div id="collapse1-s" class="accordion-collapse collapse" aria-labelledby="heading1-s" data-bs-parent="">
			<div class="accordion-body">
				<div class="mb-5">
					<p class="mb-3"><strong>SNIS</strong></p>
					<p><strong>Sistema Nacional de Informações em Saúde:</strong> Um sistema proposto para organizar as
						informações em saúde no Brasil, gerido pelo Ministério da Saúde em parceria com estados e
						municípios.</p>
				</div>

				<div class="mb-5">
					<p class="mb-3"><strong>SUS</strong></p>
					<p><strong>Sistema Único de Saúde:</strong> O sistema de saúde pública do Brasil que visa garantir
						acesso universal, integral e gratuito aos serviços de saúde para toda a população.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="accordion-item">
		<h2 class="accordion-header" id="heading1-t">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
				data-bs-target="#collapse1-t" aria-expanded="false" aria-controls="collapse1-t">T</button>
		</h2>
		<div id="collapse1-t" class="accordion-collapse collapse" aria-labelledby="heading1-t" data-bs-parent="">
			<div class="accordion-body">
				<p class="mb-3"><strong>TIC</strong></p>
				<p><strong>Tecnologias de Informação e Comunicação:</strong> Conjunto de tecnologias usadas para o
					processamento e comunicação de dados, fundamentais para a organização e gestão da informação em
					saúde.</p>
			</div>
		</div>
	</div>
</div>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener("DOMContentLoaded", function (event) {
	//do work

	modalButtons.forEach((btn) => {
		// Check if the modal exist
		const modalId = btn.getAttribute("data-bs-target").slice(1);
		const createdModalId = document.getElementById(modalId);
		const modalOrigin = btn.getAttribute("data-bs-target").slice(7);
		const hasPropriety = Object.hasOwn(modalInfos, modalOrigin);

		if (!createdModalId && hasPropriety) {
			// console.log('modalOrigin: ' + modalOrigin + ' hasPropriety: ' + hasPropriety);

			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement("div");
	const modalLabel = id.slice(6);

	newModal.classList.add("modal", "fade");
	newModal.setAttribute("id", id);
	newModal.setAttribute("tabindex", "-1");
	newModal.setAttribute("aria-labelledby", modalLabel);
	newModal.setAttribute("aria-hidden", "true");

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}

//Before and after
const container = document.querySelector(".antes-e-depois--container");
document.querySelector(".antes-e-depois--slider").addEventListener("input", (e) => {
	container.style.setProperty("--position", `${e.target.value}%`);
});
