
# Entrega 4.2: Node REST + DB + JWT

### Instructions

0. Execute "npm install" in your console, in this directory.
1. Execute in your local computer "Mongo Compass"
2. Check that your  Node JS version is up to date (Execute: "node -v" => v18.x)
3. Execute "npm run dev" in your console, in this directory.

## To do:

- POST /players: => Registrar usuaris
  - Registrar jugadors amb un nom únic => se li assigna un identificador únic ($id) i una data de registre ($date).
  -  Els jugadors també es poden registrar amb nom “ANÒNIM”, que no serà únic.  => se li assigna un identificador únic ($id) i una data de registre ($date).
- PUT /players/{id}: => Modifica el nom del jugador ($id)
- POST /games/{id}:=> Fer una tirada d'un jugador específic ($id)
- GET /players: => Llistar tots els jugadors del sistema, amb el seu percentatge d’èxits, i percentatge d’èxit mig de tots els jugadors. resultat = 7, ($id) guanya la partida, si no ($id) perd
- DELETE /games/{id}: => Eliminar totes les tirades d'un jugador ($id)

- GET /games/{id}: => Retornar el llistat de jugades d'un jugador ($id)
  - Mostar el valor de cada dau, i si ha guanyat la partida (resultat == 7)
  - Mostar percentatge d’èxit de totes les tirades 
- GET /ranking: => Retornar un ranking de jugadors ordenat per percentatge d'èxits, i el percentatge d’èxits mig del conjunt de tots els jugadors
- GET /ranking/loser: => Retornar el jugador amb pitjor percentatge d’èxit
- GET /ranking/winner: => Retornar el jugador amb millor percentatge d’èxit

### Bibliography

Node JS Register and Login API using JWT & MongoDB => 
https://www.youtube.com/watch?v=ZEg03f1o_vQ