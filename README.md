# Just Aura

Jeu de pose à plusieurs, dans l’esprit d’un salon Kahoot. Un écran hôte lance les moves. Chaque joueur est sur son téléphone : la caméra compare sa pose au modèle, et le classement revient sur l’hôte.

Aucune image ni vidéo de joueur n’est envoyée. Supabase ne reçoit que le salon, les pseudos et les scores.

## Lancer en local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Renseigne `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` dans `.env.local`. Ce fichier reste sur la machine.

- Hôte (ordi ou projecteur) : [http://localhost:3000/hote](http://localhost:3000/hote) — un code à 6 caractères s’affiche
- Joueurs : la page d’accueil, le code, un pseudo, puis **Rejoindre**
- Solo, sans salon : [http://localhost:3000/entrainement](http://localhost:3000/entrainement)

La caméra du téléphone exige une page en https. En local, `localhost` suffit.

Sur l’hôte : préparer l’aura des moves une fois, puis lancer. La manche attend que tout le monde ait envoyé son score.

## Clips

Dépose les vidéos dans `public/moves/` :

- `move1.mp4` … `move10.mp4`
- MP4 H.264, corps entier, environ 4 à 8 secondes

Les fichiers `.mp4` ne sont pas versionnés. Sans clip, l’app joue un move synthétique pour tester le salon et le score.

Les réglages du juge (fenêtre, retard, tolérance) sont dans `lib/config.ts`.

## Déploiement

Projet Next.js. Les deux variables ci-dessus doivent être présentes sur l’hébergeur. La caméra ne marche qu’en https.
