---
title: "Image converter bundle"
pubDate: 2023-07-01T12:27:19+02:00
description: "Convertisseur d'image"
tags: ["PHP", "Symfony"]
draft: false
---

# Image Converter Bundle

Un convertisseur/uploader d'image pour Symfony.

## Motivation

Mon ancien site perso était écrit en PHP avec l'utilisation de Symfony, et
héberger en sur un serveur PHP mutualisé.

J'avais besoin d'un uploader d'image pour Symfony et je suis tombé sur
Vich/uploader-bundle, qui fonctionnait très bien mais ne répondait pas à mes
besoins du moment c'est à dire upload et convertir des images au format Webp qui sont plus légère
que les JPG. Comme d'habitude j'ai décidé de créer l'outil qui répondait à mes
besoins (étant loin d'imaginer le temps que ça prendrait).

J'ai donc créer Onadrog/imageConverterBundle, un bundle Symfony qui utilise
l'extension GD de php, compatible avec doctrine-orm et symfony forms.

En tant que première app PHP, je me suis vite retrouvé à bricoler du code,
écrire un cli, géré des bases de données.

Ce bundle contient aussi une version Js pour ceux qui ne possèdent pas
l'extension PHP.

## Ps

Fonctionne avec les anciennes versions de Symfony, un jour peut être je ferais
un refacto complet suite à mes nouvelles connaissance en dev.

Le code source est disponible pour plus de détails technique avec un WIKI.

### [Code source](https://github.com/onadrog/ImageConverterBundle)
