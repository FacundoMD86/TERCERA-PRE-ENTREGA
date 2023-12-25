//CAPA CONTROLADORA
//LA ENCARGADA DE DIRIGIRME HACIA EL SERVICIO QUE CORRESPONDA (ES SOLO INTERMEDIARIA)
import CartsService from "../services/carts.services.js";

export default class CartsController {
  constructor() {
    //TIENE QUE CONSTRUIR UNA INSTANCIA DE LOS SERVICIOS DEL MODELO
    this.service = new CartsService();
  }
  createController(data) {
    let response = this.service.createService(data);
    return response;
  }
  readController(user_id, state) {
    let response = this.service.readService(user_id, state);
    return response;
  }/*
  readOneController(id) {
    let response = this.service.readOneService(id);
    return response;
  }
  updateController(id, data) {
    let response = this.service.readOneService(id, data);
    return response;
  }
  destroycontroller(id) {
    let response = this.service.destroyService(id);
    return response;
  }*/
}
