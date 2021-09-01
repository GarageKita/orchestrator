'use strict'

const axios = require("axios")
/* istanbul ignore next */
const url = (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development" ) ? 'http://localhost:3000' : process.env.URL_MAIN_GARAGE_KITA
const endPoint = '/requests'

module.exports = class Controller {
    static async getRequest(req, res, next){
        let id = (req.params.id)?'/'+req.params.id:''
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

    static async postRequest(req, res, next){
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'post',
            url: url + endPoint,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }

    static async putRequest(req, res, next){
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

    static async delRequest(req, res, next){
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

    static async getMyRequest(req, res, next){
        let headers = {access_token: req.headers.access_token}

        axios({
            method: 'get',
            url: url + endPoint + '/myrequests',
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        })
    }
}
