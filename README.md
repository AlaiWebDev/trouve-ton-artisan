# Implémenter des migrations et utiliser un seeder pour peupler les tables

## Générer les migrations pour créer les tables

```bash
npx sequelize-cli migration:generate --name create-artisans
npx sequelize-cli migration:generate --name create-categories
npx sequelize-cli migration:generate --name create-specialities
```

## Appliquer les migrations

```bash
npx sequelize-cli db:migrate
```

## Générer un composant de seed

```bash
npx sequelize-cli seed:generate --name seed-artisans
npx sequelize-cli seed:generate --name seed-specialities
npx sequelize-cli seed:generate --name seed-categories
```

## Exécuter le seed

```bash
npx sequelize-cli db:seed:all
```

## Annuler les migrations (retour en arrière avec suppression des tables)

```bash
npx sequelize-cli db:migrate:undo:all
```