# Estudos de React

Repositório de prática para aprender React por meio de pequenos projetos independentes. Cada pasta representa uma etapa do aprendizado e pode ser executada separadamente com Vite.

## Objetivo

Registrar, de forma progressiva, os principais fundamentos usados na criação de interfaces React:

- criação de uma aplicação com React e Vite;
- uso de variáveis, funções e expressões dentro do JSX;
- composição de componentes e passagem de `props`;
- renderização condicional e de listas;
- gerenciamento de dados com `useState`;
- efeitos colaterais e consumo de uma API com `useEffect`;
- construção de um formulário com validação e cálculo de IMC;
- organização de estilos com CSS e CSS Modules.

## Propósito

Este é um repositório didático. Os exemplos são pequenos, intencionais e independentes para que cada conceito possa ser estudado, alterado e executado sem a complexidade de uma aplicação única. O objetivo é transformar cada avanço em uma referência prática para projetos React maiores.

## Processo de aprendizagem

O conteúdo evolui do mais simples ao mais aplicado:

1. **Fundamentos:** criação da aplicação, variáveis e expressões JSX.
2. **Composição:** componentes reutilizáveis e comunicação por `props`.
3. **Interação:** eventos, estado e atualização de objetos.
4. **Dados externos:** carregamento de usuários, estados de carregamento e erro.
5. **Aplicação prática:** formulário controlado, validação, regra de negócio e estilos isolados.

## Módulos

| Pasta | Conteúdo principal |
| --- | --- |
| [`01_app`](01_app) | Estrutura inicial de uma aplicação React com Vite. |
| [`02_variaveis`](02_variaveis) | Variáveis, funções, expressões e atributos no JSX. |
| [`03_componentes`](03_componentes) | Componentes funcionais e passagem de `props`. |
| [`04_jsx`](04_jsx) | JSX, eventos, renderização condicional e listas. |
| [`05_contador`](05_contador) | Estado básico com um contador interativo. |
| [`06_estados`](06_estados) | `useState` com valores primitivos e objetos. |
| [`07_useeffect_lista`](07_useeffect_lista) | `useEffect`, `fetch` e exibição de dados de uma API. |
| [`08_imc`](08_imc) | Formulário controlado, validação, cálculo de IMC e CSS Modules. |

## Como executar

Cada módulo possui seu próprio `package.json` e deve ser executado a partir da própria pasta:

```bash
cd 01_app
npm install
npm run dev
```

Para estudar outro exemplo, troque `01_app` pelo nome do módulo desejado. Os comandos disponíveis em cada projeto são:

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # gera a versão de produção
npm run lint     # verifica problemas com ESLint
npm run preview  # visualiza a build de produção
```

## Organização dos commits

A sequência sugerida para registrar a evolução do repositório está documentada em [`PLANO-DE-COMMITS.md`](PLANO-DE-COMMITS.md). Ela acompanha a ordem pedagógica dos módulos e mantém cada commit concentrado em uma etapa compreensível.
