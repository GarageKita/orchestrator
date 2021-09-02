'use strict'

const axios = require("axios")
/* istanbul ignore next */
const url = (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development") ? 'http://localhost:3000' : process.env.URL_MAIN_GARAGE_KITA
/* istanbul ignore next */
const url3rd = (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development") ? 'http://localhost:3002' : process.env.URL_3RD_PARTY_GARAGE_KITA

class Controller{
    static async login(req, res, next){
        axios.post(url + '/login', req.body)
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }
    
    static async register(req, res, next){
        axios.post(url + '/register', req.body)
        .then(({data, status}) => {
            /* istanbul ignore next */
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }

    static async putUser(req, res, next) {
        let id = '/'+req.params.id
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'put',
            url: url + '/user' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }

    static _TESTONLY_MAKEADMIN = (req, res, next) => {
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'patch',
            url: url + '/user/makeadmin',
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }

    static async loginGoogle(req, res, next) {
        axios({
            method: 'post',
            url: url3rd + '/oauthgoogle/login-google',
            data: req.body,
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }
}

module.exports = Controller