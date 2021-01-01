# PokeAPI

Quick and simple Pokémon RESTful CRUD API using Nodejs, Typescript and MongoDB.

[This article](https://dev.to/nyagarcia/pokeapi-rest-in-nodejs-with-express-typescript-mongodb-and-docker-part-1-5f8g) was used as a base for this API and the repo can be found [here](https://github.com/NyaGarcia/pokeAPI) so thanks Nya! :D

### Running

Installing dependencies:
```
npm install
```

Running the app:
```
npm run start
```

Running mongoDB:
```
docker-compose up
```

# Documentation

### Routes

| Method  | Route | Params | Body | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| GET  | `/pokemons`  | NONE | NONE | Get the list of all pokemons |
| GET  | `/pokemon/{id}`  | PokemonObject.id | NONE | Get single pokemon by id |
| POST  | `/pokemon`  | NONE | PokemonObject | Add a new pokemon |
| PUT  | `/pokemon/{id}`  | PokemonObject.id | PokemonObject | Update a pokemon |
| DEL  | `/pokemon/{id}`  | PokemonObject.id | NONE | Delete a pokemon |
| GET  | `/pokedex/{number}`  | PokemonObject.number | NONE | Get single pokemon by its pokedex number |
| GET  | `/poketypes`  | NONE | NONE | Get the list of all pokemon types |
| POST  | `/poketype`  | NONE | TypeObject | Add a new pokemon type |
| PUT  | `/poketype/{id}`  | TypeObject.id | TypeObject | Update a pokemon type |
| DEL  | `/poketype/{id}`  | TypeObject.id | NONE | Delete a pokemon type |


### Models
#### PokemonObject

| Attribute  | Type | About |
| ------------- | ------------- | ------------- |
| id  | `String`  | Default id created by mongo |
| Number  | `Number`  | The Pokedex number of the pokemon |
| Name  | `String`  | The name of the pokemo |
| Description  | `String`  | The description of the pokemon |
| Type  | `<Array>TypeObject`  | Types the pokemon has |
| HasGender  | `Boolean`  | If the pokemon has gender segmentation |
| Height  | `Number`  | The height of the pokemon |
| Weight  | `Number`  | The weight of the pokemon |
| Sprite  | `String`  | The sprite of the pokemon |

#### TypeObject
| Attribute  | Type | About |
| ------------- | ------------- | ------------- |
| id  | `String`  | Default id created by mongo |
| Name  | `String`  | The pokemon type name |
| Color  | `String`  | The pokemon type color in hexadecimal |

### TODOs
- Sprite default URL
- Chance to be shiny
- Effective and weak type
