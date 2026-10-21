# L3---Exerc-cios-Flexbox-T3_L3---Cau-H.-De-Moura-1F

# Lista 03 – Exercícios de Flexbox (T3_L3)

Aluno: Cauã Henrique de Moura
Professor: Hewerton Enes de Oliveira


 Parte A – Múltipla escolha

 Questão 1

**Resposta: (b)** No contêiner (pai) cujos filhos se tornarão itens flex.

O `display: flex` vai no elemento pai. Quando eu declaro isso nele, os filhos diretos viram itens flex automaticamente, então não preciso mexer em cada filho para alinhar. Por isso a (a) está errada. A (c) também não faz sentido, porque qualquer elemento pode ser contêiner flex, não só o `<body>`. E a (d) mistura as coisas: o `display: flex` não depende de o elemento ser `inline`.

 Questão 2

**Resposta: (c)** `row`

O valor padrão do `flex-direction` é `row`, ou seja, os itens ficam em linha, um ao lado do outro. O `column` e o `row-reverse` existem, mas precisam ser declarados. O `wrap` nem é valor do `flex-direction`, é do `flex-wrap`.

 Questão 3

**Resposta: (b)** Horizontal, da esquerda para a direita.

Com `row`, o eixo principal acompanha a direção do texto, que no nosso caso é horizontal, da esquerda para a direita. O eixo cruzado é o vertical. Da direita para a esquerda só aconteceria com `row-reverse`.

 Questão 4

**Resposta: (b)** No eixo vertical (eixo principal).

O `justify-content` sempre trabalha no eixo principal, seja ele qual for. Como em `column` o eixo principal passa a ser o vertical, é nele que os itens são distribuídos. Ele também não depende do `flex-wrap`, então a (d) está errada.

Questão 5

**Resposta: (c)** `align-items`

É o `align-items` que alinha os itens no eixo cruzado. O `justify-content` age no eixo principal, o `flex-direction` só define qual é o eixo principal e o `gap` apenas cria espaço entre os itens.

 Questão 6

**Resposta: (c)** `stretch`

O valor padrão do `align-items` é `stretch`: se o item não tiver uma altura definida (no caso do `row`), ele estica para ocupar toda a altura da linha. Os outros valores (`center`, `flex-start`, `baseline`) precisam ser escritos de forma explícita.

 Questão 7

**Resposta: (b)** Coloca o primeiro item no início, o último no fim, e distribui o espaço somente entre eles.

No `space-between` não sobra espaço nas pontas: o primeiro item encosta no começo e o último encosta no final, e o espaço que sobra é dividido igualmente entre os itens. A (a) descreve o `space-evenly`, e a (c) descreve o `center`. A (d) fala em esticar os itens, o que é papel de `stretch` ou do `flex-grow`, e não do `justify-content`.

Questão 8

**Resposta: (b)** `wrap`

O `flex-wrap: wrap` permite que os itens quebrem para a linha de baixo quando não cabem. O `nowrap` é o padrão e mantém tudo em uma linha só. Já o `row` é valor do `flex-direction` e o `stretch` é valor do `align-items`, então nem fazem parte do `flex-wrap`.

 Questão 9

**Resposta: (b)** O contêiner tem `flex-wrap: wrap` (ou `wrap-reverse`) e mais de uma linha.

O `align-content` distribui as linhas de itens ao longo do eixo cruzado. Se só existe uma linha, não há o que distribuir, e se o contêiner não quebra linha (`nowrap`), ele sempre terá uma linha só. Então só dá para ver o efeito com `wrap` e mais de uma linha.

 Questão 10

**Resposta: (b)** Define o espaço entre os itens, sem criar espaço extra nas bordas externas do contêiner.

A grande vantagem do `gap` é que ele só coloca espaço entre os itens. Com margem, o último item também ganha espaço em volta e sobra um espaço indesejado na borda. O `gap` funciona em contêineres flex normais (não só com `position: absolute`), não substitui o `padding` e não alinha nada no eixo cruzado.

 Questão 11

**Resposta: (c)** Invertem a ordem visual no eixo horizontal (da direita para a esquerda).

O `row-reverse` continua sendo horizontal, mas o começo do eixo passa a ser o lado direito. Então o primeiro item do HTML aparece na extremidade direita e os demais vão vindo para a esquerda. Ele não empilha (isso seria `column`) e também não quebra linha sozinho (isso depende do `flex-wrap`).

Questão 12

**Resposta: (a)** `justify-content: center;` e `align-items: center;`

Para centralizar nos dois sentidos eu preciso mexer nos dois eixos: o `justify-content: center` centraliza no eixo principal e o `align-items: center` centraliza no eixo cruzado. Isso só funciona na vertical porque o contêiner tem altura definida, se não houvesse altura sobrando não teria o que centralizar. As outras opções mexem em apenas um eixo ou em propriedades que não centralizam nada.



## Parte B – Dissertativas e análise de código

### Questão 13

O **contêiner flex** é o elemento pai, o que recebe o `display: flex`. Os **itens flex** são os filhos diretos desse pai. Quem recebe o `display: flex` é só o pai, e os filhos diretos viram itens flex automaticamente: passam a seguir as regras do Flexbox, como ficar em linha por padrão (`row`), e podem ser alinhados e distribuídos pelas propriedades do contêiner (`justify-content`, `align-items`, `gap` etc.). Vale lembrar que só os filhos diretos viram itens. Os netos continuam se comportando normalmente, a menos que o filho também seja declarado como contêiner flex.

### Questão 14

Como o `.box` tem `flex-direction: column`, os itens A, B e C ficam **empilhados na vertical**, A em cima, depois B e depois C, nessa ordem.

- **Na vertical (eixo principal):** o `justify-content: center` junta os três itens no meio da altura de 300px. Sobra o mesmo espaço em cima e embaixo do grupo. Cada letra ocupa só a altura do próprio conteúdo, então os três ficam bem agrupados no centro, sem espaço entre eles.
- **Na horizontal (eixo cruzado):** como o `align-items` não foi declarado, vale o padrão `stretch`. Então cada div se estica e ocupa toda a largura do `.box`, com o texto alinhado à esquerda dentro dele.

Resumindo: uma coluna A, B, C centralizada verticalmente na caixa de 300px, com cada item ocupando a largura toda.

### Questão 15

Se eu tirar o `flex-direction: column`, volta o padrão `row`, e várias coisas mudam:

- **Direção:** A, B e C deixam de ficar empilhados e passam a ficar **lado a lado**, em uma linha.
- **Quebra de linha:** o `flex-wrap` padrão é `nowrap`, então os itens **não quebram** para a linha de baixo, mesmo que não caibam nos 300px de largura.
- **Largura dos itens:** por padrão os itens podem encolher (o `flex-shrink` padrão é 1), então eles se espremem para tentar caber. Mas se mesmo encolhendo não couberem, eles **transbordam** (vazam) para fora do contêiner. Como o `justify-content` é `center` e o espaço que "sobra" é negativo, o estouro acontece para os dois lados.
- **Eixos:** o `justify-content: center` agora age na horizontal (novo eixo principal) e o `align-items` padrão (`stretch`) faz os itens ocuparem os 300px de altura inteiros, em vez de ficarem centralizados na vertical.

### Questão 16

**(a)** Com `flex-direction: row`:
- O `justify-content` atua no **eixo principal**, que é o **horizontal**.
- O `align-items` atua no **eixo cruzado**, que é o **vertical**.

**(b)** Com `flex-direction: column` os eixos se **invertem**:
- O eixo principal passa a ser o **vertical**, então o `justify-content` passa a distribuir os itens na vertical.
- O eixo cruzado passa a ser o **horizontal**, então o `align-items` passa a alinhar os itens na horizontal.

As propriedades continuam as mesmas, o que muda é o eixo em que cada uma trabalha: o `justify-content` sempre segue o eixo principal e o `align-items` sempre segue o cruzado.

### Questão 17

O `align-content` serve para distribuir **várias linhas** de itens no eixo cruzado. Com `flex-wrap: nowrap` os itens ficam sempre em uma única linha, e, em um contêiner de linha única, o `align-content` simplesmente não tem efeito, porque não há linhas para distribuir. Para centralizar os itens nesse caso, quem faz o serviço é o `align-items: center`.

Para o `align-content` passar a ter efeito seriam necessárias duas coisas:

1. Habilitar a quebra de linha, com `flex-wrap: wrap` (ou `wrap-reverse`), e ter itens suficientes para formar **mais de uma linha**.
2. O contêiner precisa ter espaço sobrando no eixo cruzado (por exemplo, uma altura maior que a soma das linhas), senão não há o que distribuir.

### Questão 18

Com `gap: 16px` no contêiner, o espaçamento de 16px aparece **somente entre os itens**, e o contêiner cuida disso sozinho, em um lugar só. Já com `margin-right: 16px` em cada item, cada um passa a carregar sua própria margem.

O problema típico da margem é que o **último item também ganha a margem**, então sobra 16px a mais na borda direita do contêiner. Isso desalinha o conjunto (por exemplo, atrapalha a centralização) e pode até gerar rolagem horizontal. Para corrigir, é preciso criar uma exceção, como `.item:last-child { margin-right: 0; }`. Além disso, com `flex-wrap`, a margem direita não cria espaço entre as linhas, então eu ainda precisaria de `margin-bottom`, que por sua vez deixa um espaço extra embaixo. O `gap` resolve tudo isso de uma vez (linhas e colunas).



## Parte C – Prática

### Questão 19 – Menu horizontal

Arquivos: [`questao-19.html`](questao-19.html) e [`questao-19.css`](questao-19.css)

```css
.menu {
  display: flex;
  align-items: center;
  gap: 12px;
}
```

O `display: flex` coloca os `<li>` lado a lado. O `gap: 12px` dá o espaçamento de 12px entre eles e o `align-items: center` centraliza todos no eixo cruzado (vertical). No arquivo do projeto também tem uns estilos só para deixar o menu mais bonito (tirar as bolinhas da lista, cores e altura mínima para dar para ver o alinhamento vertical).

### Questão 20 – Galeria com quebra de linha

Arquivos: [`questao-20.html`](questao-20.html) e [`questao-20.css`](questao-20.css)

```css
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
```

O `flex-wrap: wrap` faz os cards irem para a linha de baixo quando não cabem. O `gap: 16px` com um único valor vale para os dois sentidos, então dá 16px entre linhas e 16px entre colunas.

### Questão 21 – Card centralizado na tela

Arquivos: [`questao-21.html`](questao-21.html) e [`questao-21.css`](questao-21.css)

```css
.pagina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

O `justify-content: center` centraliza na horizontal e o `align-items: center` na vertical. O `min-height: 100vh` garante que a `.pagina` tenha pelo menos a altura da tela, que é o que dá espaço para o centro vertical existir.

### Questão 22 – Layout em coluna

Arquivos: [`questao-22.html`](questao-22.html) e [`questao-22.css`](questao-22.css)

```css
.pagina {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

Com `flex-direction: column`, o `header`, o `main` e o `footer` ficam empilhados de cima para baixo, e o `gap: 8px` coloca 8px entre cada seção. Eu não usei nenhuma propriedade de item (`flex-grow` etc.), só as do contêiner.

### Questão 23 – Barra de ferramentas

Arquivos: [`questao-23.html`](questao-23.html) e [`questao-23.css`](questao-23.css)

```css
.toolbar {
  display: flex;
  justify-content: space-between;
}
```

Com `space-between`, o grupo da esquerda encosta no início, o da direita encosta no fim e o do meio fica no espaço entre os dois. Dentro de cada grupo (`.grupo`), usei outro `display: flex` com `gap` só para os botões ficarem lado a lado (isso está no arquivo CSS). Uma observação: o grupo do meio só fica exatamente no centro se os grupos das pontas tiverem larguras parecidas, porque o `space-between` divide o espaço sobrando de forma igual, e não pelo centro da barra.

### Questão 24 – Faixa de cards (desafio)

Arquivos: [`questao-24.html`](questao-24.html), [`questao-24.css`](questao-24.css) e [`script.js`](script.js)

HTML:

```html
<div class="faixa">
  <div class="card">
    <h2>Card 1</h2>
    <p>Texto curto.</p>
  </div>
  <div class="card">
    <h2>Card 2</h2>
    <p>Este card tem um texto um pouco maior para mostrar que a altura é igualada.</p>
  </div>
  <div class="card">
    <h2>Card 3</h2>
    <p>Texto médio, só para variar o tamanho.</p>
  </div>
  <div class="card">
    <h2>Card 4</h2>
    <p>Mais um card com conteúdo de tamanho diferente dos outros, também para testar a altura.</p>
  </div>
</div>
```

CSS:

```css
.faixa {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: flex-start;
  gap: 1rem;
  min-height: 30rem;
}

.card {
  box-sizing: border-box;
  width: 14rem;
  max-width: 100%;
}
```

