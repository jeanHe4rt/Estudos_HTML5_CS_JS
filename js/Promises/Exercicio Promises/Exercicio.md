# Avançando Promises

No exercício anterior, nós criamos Promises para ligar 3 naves diferentes e, no momento de ligar, elas fazem o teste de cara para autorizar ou barra a nave de ser ligada.

Agora vamos atualizar nossas naves. Elas precisarão fazer o <strong> tesde de escudo</strong> também. As nasves receverão um <i> novo atributo 'shild'</i> com os seguintes valores: 70 para sophi, 40 para amsterdã e 80 para estrela-anã.

para os teste de escudo nós<i>dobraremos o valor</i> do escudo e se este valos dobrado for menor que 100, deve ser lançado um erro.

Depois disso, precisamos pegar o valor dobrado e normalizar, reduzindo  ele a 70% do valor do teste. Nesta normalização, o escudo não pode passar de 120. Caso passe deve ser retornado um erro.

## Passos para  executar o exercício

- Instancie as 3 naves
- Adicionar os parâmetros novos nos objetos criados
- criar um novo método que retorne uma Promise para a normalização do escudo
- Criar um novo método que faça o teste de escudo e retorne o valor dobrado
- Atualizar o método de checagem de carga para retornar numa mensagem de eero no lugar do valor atual.
- Atualizar o método de ligar para chamar as duas Promises de teste de carga e de escudo de uma só vez
  - <b> Os dois testes devem ser resolvidos ou um erro deve ser gerado</b>
- Caso o teste de carga e escudo passem, o valor retornado do teste de escudo deve ser chamado na Promise de normalização e valor retornado da normalização deve ser armazenado como escudo atual da nave
