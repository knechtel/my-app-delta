export const PADRAO = "http://1da5-177-74-122-85.ngrok.io";

export const LOCAL = "http://88d8-177-74-122-104.ngrok.io";
 var BASE = `http://10.0.0.199:5000`;

export var CREATE_CLIENT = BASE + "/api/client-findAll";
export var LOGIN = BASE + "/login";
export var REFRESH = BASE + "/refresh";
export var SAVE_IMAGE = BASE + "/api/saveImage";
export var FIND_BY_ID_CLIENT = BASE + `/api/client-findById`;
export var FIND_ALL_EQUIPMENT_BY_CLIENT =
  BASE + `/api/client-findByAllEquipment`;
export var FIND_CLIENT_BY_EQUIPMENT =  BASE+'/api/equipment-to-client'
export var FIND_EQUIPMENT_BY_CLIENT = BASE + `/api/equipmentByIdClient`;
export var FIND_BY_ID_EQUIPMENT = BASE + `/equipment-findById`;
export var CREATE_EQUIPMENT = BASE + `/api/equipment`;
export var DELETE_CLIENT = `http://1da5-177-74-122-85.sa.ngrok.io/client-delete`;
export var DELETE_EQUIPMENT = `http://1da5-177-74-122-85.sa.ngrok.io/equipment-delete`;
export var UPDATE_CLIENT = BASE + `/api/client-update`;
export var UPDATE_EQUIPMENT = BASE + `/api/equipment-update`;
export var EDIT_CLIENT_URL = "http://localhost:3000/edit/";
export var EQUIPMENT_FIND_DATA_ENTRADA =
  BASE + `/api/equipment-findByDataEntrada`;
export var FIND_ALL_CLIENT = BASE + `/api/client-findAll`;
export var PDF_BY_ID = BASE + "/download?id=";
export var LOAD_IAMAGE = BASE + "/api/upload";
export var UPLOAD_IAMAGE = BASE + "/upOs?id=";
export var EQUIPMENT_FIND_DATA_ENTREGA =
  BASE + "/api/equipment-findByDataEntrega";
export var PHOTO_SERVIDOR = BASE + "/print/download";
export var FIND_BY_NAME_CLIENT = BASE + "/api/findClientByName";
