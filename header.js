/**
 * Created by revelation on 24/05/2021.
 * Reedax.IO Technologies Limited *
 * Developer Revelation A.F *
 */

function check_login() {
    if(!localStorage.getItem('user')){
        localStorage.clear();
        window.location.href = "index.html";
    }
}

//constant head
var _header = {
    headers: {"Accept": "application/json", "Content-Type": "application/json"},
    method: "POST"
};

const BASE_URL = "https://ecm.bloomzon.com/";

const API_LOGIN_URL = BASE_URL + "api/v1/auth/login";

const API_GET_ALL_ORDERS_URL = BASE_URL + "api/v1/get-all-orders";

const API_GET_RIDER_ORDERS_URL = BASE_URL + "api/v1/rider-orders";

const API_GET_IN_WHEREHOUSE_URL = BASE_URL + "/api/v1/warehouse-orders";

const API_UPDATE_ORDER = BASE_URL + "api/v1/change-order-status";