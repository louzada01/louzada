1. Quais as principais vantagens de se criar interfaces no React? Você estaria disposto a usar outro Framework? Se sim, por quê?

R. -> React é uma lib enxuta, trabalha com um Virtual DOM o que facilita a comunição com a DOM já que tudo é processado pela Virtual DOM e entre posteriormente de uma só vez a DOM verdadeira, alterando apenas o que foi modificado e não gastando recursos onde não se precisa, aplicando o conceito de SPA, que apesar de parecer pequena ao primeiro momento (a lib React) permite uma flexibilidade enorme para o desenvolviemnto de aplicações utilizando-a como stack principal. Hoje, a maior vantagem do react perante aos seus concorrentes (Vue.js, Angular, Polymer e etc...) fora todo seu escopo técnico, é a popularidade da ferramenta, permitindo facilitar outras contratações e também aproveitar o conhecimento com outras áreas, como é o caso do React Native dentro do Mobile e o React VR para Realidade Virtual.
Quanto a trabalhar com outra ferramenta, seja Vue.js ou Angular, vejo que não teria problema ja que ambas se baseiam em JavaScript, e o que muda de uma para outra são conceitos. Eu não tenho problema em mudar a stack, pois me considero um desenvolvedor JavaScript, e tudo que está sendo construido com ele é de fácil compreenção para mim, apesar de que cada uma tem o seu contexto.

2. Você já chegou a trabalhar efeitos usando Redux Thunk e Redux Saga? Se sim, quais diferenças você percebe entre os dois?

R. -> Sim, trabalho atualmente em uma aplicação utilizando Saga. A principal diferença está hoje, ao meu ver, no conceito de ambas. Os Sagas vem para trabalhar com Side-Effects e operações assíncronas dentro do Redux, ou seja, tudo que eu precisar executar de forma colateral a uma ação, seja um método interno da aplicação como uma chamada externa a uma API por exemplo, eu posso usar o SAGA para tratar isso, enquanto no Thunk é meio que usado como um middleware da minha aplicação, o que consegue entregar praticamente a mesma coisa que os sagas, utilzando o Async/Await (no saga usamos yield) porém entra com muita complexidade na aplicação, criando uma dificuldade maior para escalar um projeto dependendo da equipe, ja que dentro de uma arquitetura usando Thunk cria-se também uma morosidade para escrita de testes e dificulta o controle de promisses por exemplo.
Os sagas permitem uma flexibilidade melhor, já que se cria uma camada separada na aplicação (muitos colocam como um contra porém vejo como um ponto favorável) ajudando a organizar os códigos assíncronos que de alguma forma podem alterar o estado da aplicação, fora que dispensam a criação de actions creators.

3. Quais componentes do React. JS você está mais acostumado a utilizar?

R. -> Não pude compreender bem o contexto da palavra componente, porém, vejo que é muito na criação de componentes utilizando classes e componentes utilizando funções, e hoje vejo que faz mais sentido com as ferramentas atuais trabalhar utilizando os componentes em formato de função, já que permitem a utilização da API de Hooks do React e facilitam a legibilidade do código e controle do ciclo de vida do componente em si.

4. Qual foi a última coisa que você aprendeu à respeito do React? Quando foi? Você aprendeu por interesse pessoal ou por causa do trabalho?

R. Recentemente estou estudando sobre TypeScript dentro do React e também com Gatsby (que utiliza React) e tem se tornando uma mão na roda. O interesse veio por, durante algumas pesquisas, vi muito o uso do TypeScript em ferramentas front-end, e como ja havia usado ele dentro do Node.js (Express e recentemente Adonis) vi que iria ajudar muito para resolver uma verbosidade confusa criada pelo prop-types.

5.  Qual o ganho no trabalho com componentes ao se utilizar Hooks?

R. Menos linhas de código, com isso também ganhamos menos verbosidade, temos um maior controle do nosso componente uma vez que é mais fácil disparar os hooks no código removendo o uso do this que confunde muitos programadores no inicio de carreira, fora que usando a API de Hooks do React temos também alertas que previnem erros de performance da aplicação, que usando componentes em formato de classe programadores mais jovens não iriam conseguir verificar.

6. Como os Hooks e o Lifecycle se relacionam dentro do framework?

R. Com os Hooks dispensamos a utilização de métodos como o componentDidMount, componentWillUnmount e componentDidUpdate, alterando eles pelos Hooks useState e useEffect, por exemplo. A principal diferença é que podemos alterar com facilidade tanto o estado quanto o ciclo de vida, permitindo assim uma maior acertividade Virtual DOM em fazer o trabalho pesado renderizando, atualizando e retirando o componente na DOM real. A API dos Hooks hoje veio justamente para melhorar toda essa comunicação, que antes era mais verbosa e demandava uma confusão enorme, como é o exemplo do componentDidUpdate que foi facilmente resolvido com o segundo argumento do hook useEffect.

7. O Hooks pode ser o substituto do Redux? Se sim, em quais situações?

R. Vejo que ambos tem aplicações diferentes, e no caso do Redux ele se propoem a aplicações com uma complexidade maior. Recentemente tivemos a adição da API de Contexto dentro do React, o que facilitou muito o controle de estados por contexto mas ainda não chegou a dispensar o Redux justamente por suas especificidades. O redux serve para um estado global, ja os hooks muitas vezes se limitam ao componente em que está localizado. Usar Redux em tudo ao meu ver é criar uma bomba pois torna muito complexo o que deveria ser simples.

8. Qual foi o principal motivo que te levou a desenvolver FrontEnd?

R. O gosto por JavaScript e gostar de ver o que estava fazendo em uma interface me chamaram mais a atenção por especializar nessa área, fora que amo desenvolvimento Mobile também, junto com o crescimento de estruturas separadas, onde o front-end começa a ganhar resopnsabiliade e visão, tornando o back-end enxuto e trazendo o que de fato é responsabilidade do client para o desenvolvimento Front-End.

9. O Vanilla é um outro framework de JavaScript. Você tem experiência com ele? Se sim, você acha que ele complementa ou concorre com o React?

R. vanilla técnicamente não é um framework, e sim uma forma pura de apresentar suas funcionalidades. Ou seja, em qualquer ferramenta existente que utiliza JavaScript, ela também utiliza e está sendo feita com Vanilla. Vejo que os conhecimentos de desenvolvimento em Vanilla são de grande importancia, ja que tudo roda em cima de código Vanilla e com isso aprendemos de fato o que é JavaScript, não perdendo o conhecimento prinicipal para abstrações como jQuery, React, Angular, Vue ou qualquer outra ferramenta/lib JavaScript.

10. Como você vê o futuro de sua carreira se tratando de sua relação com o desenvolvimento Front End?

R. Quero me manter sempre atualizado, pois o mercado Front-End é ainda relativamente novo e tem muito o que oferecer ainda, e isso abre grandes portas para um desenvolvedor como eu que sempre gosta de estar estudando, vejo que o céu é o limite, e assim como não podemos tocar o céu também não podemos tocar o limite de um mercado como um todo, sempre tem algo novo ou que pode ser feito de uma melhor forma.
