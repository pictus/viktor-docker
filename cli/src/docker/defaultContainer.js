import { VIKTOR_DOCKER_COMPOSE } from "../enviroment.js";
import { DockerComposeInteract } from "./DockerComposeInteract.js";

export const defaultContainer = new DockerComposeInteract(VIKTOR_DOCKER_COMPOSE);