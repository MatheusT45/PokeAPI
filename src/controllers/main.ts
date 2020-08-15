import { Application } from 'express';
import { PokeService } from '../services/pokemon';
import { PokeTypeService } from '../services/poketype';

export class Controller {
    private pokeService: PokeService;
    private pokeTypeService: PokeTypeService;

    constructor(private app: Application) {
        this.pokeService = new PokeService();
        this.pokeTypeService = new PokeTypeService();
        this.routes();
    }

    public routes() {
        this.app.route('/').get(this.pokeService.welcomeMessage);
        this.app.route('/pokemons').get(this.pokeService.getAllPokemon);
        this.app.route('/pokemon').post(this.pokeService.addNewPokemon);
        this.app
            .route('/pokemon/:id')
            .delete(this.pokeService.deletePokemon)
            .put(this.pokeService.updatePokemon);

        this.app.route('/poketypes').get(this.pokeTypeService.getAllPokeType);
        this.app.route('/poketype').post(this.pokeTypeService.addNewPokeType);
        this.app
            .route('/poketype/:id')
            .delete(this.pokeTypeService.deletePokeType)
            .put(this.pokeTypeService.updatePokeType);
    }
}