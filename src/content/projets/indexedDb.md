---
title: "IndexedDb"
pubDate: 2023-07-01T09:45:31+02:00
description: "IndexedDb api"
tags: ["Js", "WIP", "Web Workers"]
draft: false
---

# IndexDbApi

## Motivation

Le but de ce repo était simplement de comprendre le fonctionnement de
l'indexedDb, et au passage des web workers.
Je voulais m'exercer et créer un site de test style e-commerce, mais arrive la
question: "où stocker le panier du client ? local-storage ? session-storage ?" Ces
deux solutions ce sont vite révélée être mauvaise.

Le problème suivant étant "il
faut que je m'entraîne avec ReactJs pour répondre à la demande de l'offre
d'emploi", sinon l'utilisation d'une session en php avec Symfony en backend
aurait été parfaite je pense.
Mais voila mon environnement choisis je décide de créer rapidement une api de
test grâce à symfony et Api-platform faker-php, je met en place tout l'environnement de dev
grâce aux containers Docker etc, surement un peu overkill pour finalement
découvrir [Fake store Api](https://fakestoreapi.com/) et tout recommencé à zero,
après tout j'étais la pour faire du JS...

Me voilà donc devant un app React tout fraiche navigation côté client des appels
api, (comme on voit, un peu partout sur le web...), mais cette question du
panier n'est toujours pas résolu.

Je me souviens avoir déjà vu "IndexedDb" dans la doc MDN, je décide donc d'y
jeté un œil, trouve des lib justement pour l'utilisation d'indexedDb.
Finalement, ne comprend pas vraiment comment tout cela fonctionne je décide
donc de créer ma propre lib, (après tout je suis la pour apprendre), je découvre
au passage les web workers, joue avec les tableaux typé pour voir qui est le
plus rapide pour récupérer des réponses d'Api et ensuite les renvoyé sous forme
de tableaux typés, pour finalement me rendre compte, qu'effectuer une requete
Ajax sur le thread principal ou dans un web worker revient au même.

Voila l'histoire de ce projet.

Et pour la question du panier, où le stocker (je n'ai toujours pas répondu à
cette question après cette aventure je suis parti apprendre le C afin de mieux
comprendre l'utilisation mémoire, avoir les bases).

Mais je pense qu'une session PHP avec Symfony en back serait parfait, et une UI
style svelte ou peut être meme Unpoly etc...

Le code source est disponible, à ne pas utiliser en prod bien sûr, mais plutôt à
utiliser comme base de compréhension.

### [Code source](https://github.com/onadrog/idbApi)
