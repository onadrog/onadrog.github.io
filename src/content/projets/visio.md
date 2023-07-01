---
title: "Visio"
pubDate: 2023-06-30T09:09:08+02:00
draft: false
description: "Un site de video-conference"
tags: ["Js", "WIP"]
---

# Visio

Le projets a démarrer pedant la crise du COVID
Le but était d'avoir un site où passer des appels vidéos avec mes proches,
plusieurs site proposent ce genre de service mais je voulais quelque chose que
je puisse contrôler, et facile d'utilisation surtout!

En tant que dev j'ai cette envie d'apprendre des nouvelles choses, c'était
l'occasion!

## Les techno utilisées pour créer ce projet:

### WEBRTC

La partie indispensable pour un flux vidéo de pairs à pairs. Les webrtc comment
envoyé le flux à plusieurs personnes ? websocket, SSE ? Je suis tombé sur
[peerjs](https://peerjs.com) qui permet de gérer les connexions entres pairs.

### Backend

`Symfony` car le framework me permettait de mettre en place très
rapidement des routes, base de données.

### SSE

Le système de notification j'ai opté pour `Mercure`, là aussi j'avais le choix
entre les websocket et les server side event, et puisque le but étant de
découvrir de nouvelles techno mon choix c'est rapidement tourné vers `Mercure`
(qu'est ce que c'était que ce SSE ?)

### UI

Pour l'interface Utilisateur j'ai choisis React simplement car ReactJs est
partout, je me devais d'y jeter un œil, j'aurais pu très bien m'en sortir avec
`Symfony` et des pages en php/css et un peux de JS, mais il me fallais une UI
réactive.

#### State

Pour l'état global faisant mes premiers pas dans l'écosystème Reactjs je me suis
vite retrouvé face à Redux afin de pouvoir gérer les différentes connexion entre
les participants, connaitre les IP, et pseudos, rejoindre les rooms etc...

Après un brain storming avec moi même voila comment est née ce site de
video conference à héberger sois même.

Aujourd'hui avec un peu plus d'expérience et du recul je ne réutiliserais
probablement pas les mêmes technologies, c'est un mélange un peux chaotique à
gérer, voilà pourquoi le projet est resté en WIP, quelques bugs restent présent
mais les principales fonctions sont là. Les video conferences fonctionnent.
Malgré tout c'était une bonne expérience à développer, et un bon casse-tête à
gérer les flux envoyer et reçu dans Redux.

### [Code source](https://github.com/onadrog/visio)
