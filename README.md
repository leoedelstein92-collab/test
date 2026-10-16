# 🎬 Cartoon Clash

Jeu multijoueur en ligne, jouable dans le navigateur : à chaque manche un thème est tiré
(« Qui est le plus drôle ? », « Qui est le plus méchant ? »…), chaque joueur écrit un
personnage de dessin animé, et une IA (Claude) compare les réponses, attribue un score sur 100
à chacune et explique brièvement son classement.

![Résultats d'une manche](docs/results.png)

## Fonctionnalités

- **Page d'accueil** : pseudo, langue (🇫🇷 / 🇬🇧 / 🇪🇸), photo de profil modifiable
  (48 personnages ou import de sa propre photo).
- **Parties en ligne** : l'hôte crée une partie et partage un code à 4 lettres (ou un lien
  d'invitation). Jusqu'à 12 joueurs.
- **Réglages avant la partie** (hôte) : 3, 5 ou 10 manches, 30 / 60 / 90 s par manche,
  langue des explications de l'IA.
- **Mode « Le plus… ! »** : l'IA note chaque personnage selon le thème et explique son choix.
  Les réponses qui ne sont pas des personnages de dessin animé valent 0.
- **Fin de partie** : podium, classement général, **meilleur score obtenu sur un thème** et
  récapitulatif de chaque manche.
- Reconnexion automatique si un joueur rafraîchit la page.

## Lancer en local

```bash
npm install
export ANTHROPIC_API_KEY=sk-ant-...   # sans clé, le jeu tourne en mode démo (scores aléatoires)
npm start
```

Puis ouvrir http://localhost:3000 (dans plusieurs onglets pour tester à plusieurs).

Tests de bout en bout (2 joueurs, 3 manches, mode démo) : `npm test`.

## Mettre en ligne

Le jeu est un serveur Node.js (Express + Socket.io), il faut donc un hébergeur qui exécute
Node (pas un hébergement de pages statiques). Exemple avec [Render](https://render.com) :

1. Créer un compte Render et cliquer sur **New → Blueprint**, choisir ce dépôt
   (le fichier `render.yaml` configure tout).
2. Renseigner la variable d'environnement `ANTHROPIC_API_KEY`
   (clé à créer sur https://console.anthropic.com).
3. Partager l'URL fournie par Render avec vos amis.

Railway, Fly.io ou n'importe quel VPS fonctionnent aussi (`npm install && npm start`,
port via la variable `PORT`).

## Structure

| Fichier | Rôle |
|---|---|
| `server.js` | Serveur : parties, manches, minuteur, scores (Socket.io) |
| `src/judge.js` | Juge IA (Claude, sortie JSON structurée) + juge de démo |
| `src/themes.js` | Liste des thèmes traduits |
| `public/` | Interface web (HTML/CSS/JS, traductions dans `i18n.js`) |

Variables d'environnement optionnelles : `PORT`, `CLAUDE_MODEL` (par défaut `claude-opus-5-5`).
