'use strict'

const axios = require("axios")
/* istanbul ignore next */
const url = (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development" ) ? 'http://localhost:3000' : process.env.URL_MAIN_GARAGE_KITA
const endPoint = '/offers'
class Controller {
    static async postOffer(req, res, next) {
        let id = '/'+req.params.id
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'post',
            url: url + endPoint + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }

    static putOffer(req, res, next){
        let id = '/'+req.params.id
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'put',
            url: url + endPoint + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }
    
    static getRequestOffer(req, res, next){
        let id = '/'+req.params.id
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'get',
            url: url + endPoint + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }

    static getMyOffer(req, res, next){
        let id = ''
        let headers = {access_token: req.headers.access_token}

        axios({
            method: 'get',
            url: url + endPoint + '/myoffers' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        })
    }

    static delOffer(req, res, next){
        let id = '/'+req.params.id
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'delete',
            url: url + endPoint + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }

    static getOffer(req, res, next){
        /* istanbul ignore next */
        let id = (req.params.id)?'/'+req.params.id:''
        let headers = {access_token: req.headers.access_token}

        axios({
            method: 'get',
            url: url + endPoint + '/checkoffer' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        })
    }
}

module.exports = Controller