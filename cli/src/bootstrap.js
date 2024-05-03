import dotenv from "dotenv";
import path from 'path';
// sorry, need to define here
// until Node20 you can use --env-file, to prevent this
const PROJECT_DIR_NAME='.viktor'

export default dotenv.config({ path: path.join(`./${PROJECT_DIR_NAME}/.env`) });