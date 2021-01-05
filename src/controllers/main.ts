import { Application } from 'express';
import { PokeService } from '../services/pokemon';
import { PokeTypeService } from '../services/poketype';
import { PokedexService } from '../services/pokedex';
import { HelperService } from '../services/helper';
export class Controller {
  private pokeService: PokeService;
  private helperService: HelperService;
  private pokeTypeService: PokeTypeService;
  private pokedexService: PokedexService

  constructor(private app: Application) {
    this.pokeService = new PokeService();
    this.pokeTypeService = new PokeTypeService();
    this.pokedexService = new PokedexService();
    this.helperService = new HelperService();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.helperService.welcomeMessage);
    this.app.route('/pokemons').get(this.pokeService.getAllPokemon);
    this.app.route('/pokemon').post(this.pokeService.addNewPokemon);
    this.app
      .route('/pokemon/:id')
      .get(this.pokeService.getPokemonById)
      .delete(this.pokeService.deletePokemon)
      .put(this.pokeService.updatePokemon);
    this.app
      .route('/pokedex/:number')
      .get(this.pokedexService.getPokemonByNumber);

    this.app.route('/poketypes').get(this.pokeTypeService.getAllPokeType);
    this.app.route('/poketype').post(this.pokeTypeService.addNewPokeType);
    this.app
      .route('/poketype/:id')
      .delete(this.pokeTypeService.deletePokeType)
      .put(this.pokeTypeService.updatePokeType);
  }
}