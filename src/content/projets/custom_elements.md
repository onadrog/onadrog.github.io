---
title: "Custom elements"
pubDate: 2023-07-01T09:09:08+02:00
description: "Pourquoi utiliser Reactjs pour de simples elements ?"
tags: ["Js", "WIP"]
draft: false
---

# Custom Elements

## Motivation

Mis à part le fait de vouloir apprendre un peu plus Javascript, l'autre
motivation était surtout de ne pas tombé dans le gouffre du "npm i react", pour
simplement créer un formulaire interactif en Ajax ou un "Theme switcher".
Je me rappel durant mes études de Dev web l'examinateur m'avoir confié à la fin
de l'examen être content d'avoir vu "du Js pur, tout le monde a fait du JQuery
". Je commence à comprendre, ReactJs se voulait être la Vue du model MVC, mais
aujourd'hui tout le monde l'utilise pour tout (les apps electrons, mais c'est un autre sujet), sans parler du temps de chargement des fichier, du poids des fichiers, et la lenteur des site en fonction de la machine côté client.
Oui il existe des alternatives comme Svelte, Preact, solidJs etc... qui sont
beaucoup plus léger. Mais pourquoi faire compliqué quand on peu faire simple ?
Et surtout constament appprendre la syntax d'un nouveau framework, alors qu'on
possède déja les outils nécessaire ?

Voilà pourquoi j'ai décidé d'utiliser les custom elements dès que possible,
l'avantage est qu'ils sont réutilisable dans n'importe quel environnement, pas
besoin de démarrer sont projet par "npm i" mais tout simplement par:

```html
<head>
    <script src="./themeSwitcher.js"></script>
</head>

<body>
    <theme-switcher
        id="themeToggle"
        class="switcher-wrapper"
        tabindex="0"
        aria-label="Change theme color."
    >
        <label for="dark">Dark mode</label>
        <input type="radio" id="dark" name="theme-toggle" value="dark" />

        <label for="light">Light mode</label>
        <input type="radio" id="light" name="theme-toggle" value="light" />
    </theme-switcher>
</body>
```

Et voilà votre site dispose d'un bouton pour changer de theme. Et surtout
réutilisable dans d'autres projets.

Par example sur ce site le mode CRT et le Theme-switcher sont des customs
elements.

Si ce projet vous intéresse voici le repos, n'hésitez pas à proposer d'autres
customs elements.

### [Code source](https://github.com/onadrog/custom_elements)
