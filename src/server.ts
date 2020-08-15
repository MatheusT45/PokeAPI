import app from "./app";
import { PORT } from "./constants/pokeApi";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));