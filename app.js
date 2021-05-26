/**
 * Created by revelation on 24/05/2021.
 * Reedax.IO Technologies Limited *
 * Developer Revelation A.F *
 */
//initialize vue app for each page
var _vue = new Vue({
    el: '#app',
    data: {
        orders: [],
        myorders: [],
        warehouse: [],
        page: {account_type: 'rider'},
        p: {shippiping_address: "{}"},
        order_upd: 'picked',
        user: JSON.parse(window.localStorage.getItem("user")),
        alert: null,
        alert2: null,
        alert3: null,
    }
});

//public an alert
var _timx = null;
//fire alert
function _alert(msg, time) {
    //clear existing timer
    _vue.$data.alert = msg;
    if (time > 1000) {
        clearInterval(_timx);
        _timx = setTimeout(function () {
            _vue.$data.alert = null;
        }, time);
    }
}

//api caller
function apiCaller(url, data, callback, method) {
    _header.method = method;
    if (method === 'POST') {
        _header.body = JSON.stringify(data);
    }
    var api = fetch(url, _header)
    api.then(function (res) {
        return res.json();
    }).then(function (resp) {
        callback(resp);
    })
}

//safer mode
function _ct(txt) {
    if (txt)
        return txt;
    return '';
}

//logout
function logout() {
    window.localStorage.clear();
    window.location.href = "index.html";
}
