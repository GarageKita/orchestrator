'use strict'

const axios = require("axios")
// const url = process.env.URL_MAIN_GARAGE_KITA
/* istanbul ignore next */
const url = (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development" ) ? 'http://localhost:3000' : process.env.URL_MAIN_GARAGE_KITA
const endPoint = '/products'

class Controller{
    static async getProducts(req, res, next){
        /* istanbul ignore next */
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
        })
    }

    static async postProduct(req, res, next){
        /* istanbul ignore next */
        let id = (req.params.id)?'/'+req.params.id:''
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

    static async putProduct(req, res, next){
        /* istanbul ignore next */
        let id = (req.params.id)?'/'+req.params.id:''
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

    static async delProduct(req, res, next){
        /* istanbul ignore next */
        let id = (req.params.id)?'/'+req.params.id:''
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

    static getMyProducts(req, res, next){
        /* istanbul ignore next */
        let id = (req.params.id)?'/'+req.params.id:''
        let headers = {access_token: req.headers.access_token}

        axios({
            method: 'get',
            url: url + endPoint + '/myproducts' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        })
    }
}

module.exports = Controller