/*Botões */
const sobreMim = document.getElementById('sobre-mim');
const skills = document.getElementById('skills');
const portfolio = document.getElementById('portfolio');
const lifeStyle = document.getElementById('life-style');
const cursos = document.getElementById('cursos');
const contato = document.getElementById('contato');

/*Cards */
const cardSobreMim = document.getElementById('sobre-mim-card')
const cardSkills = document.getElementById('skills-card');
const cardPortfolio = document.getElementById('portfolio-card');
const cardLifeStyle = document.getElementById('life-style-card');
const cardCursos = document.getElementById('cursos-card');
const cardContato = document.getElementById('contato-card');

/*Funções */

const arrayCards = [cardSobreMim, cardSkills, cardPortfolio, cardLifeStyle, cardCursos, cardContato];
const esconderCards = () => arrayCards.forEach(card => card.classList.add('esconder'));
const mostarCards = indice => arrayCards[indice].classList.remove('esconder');


sobreMim.onclick = function(){esconderCards(); mostarCards(0);};
skills.onclick = function(){esconderCards();mostarCards(1);};
portfolio.onclick = function(){esconderCards();mostarCards(2);};
lifeStyle.onclick = function(){esconderCards();mostarCards(3);};
cursos.onclick = function(){esconderCards();mostarCards(4);};
contato.onclick = function(){esconderCards();mostarCards(5);};
