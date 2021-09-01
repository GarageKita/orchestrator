'use strict'

const axios = require("axios")
/* istanbul ignore next */
const url = (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development" ) ? 'http://localhost:3000' : process.env.URL_MAIN_GARAGE_KITA

class Controller {
    static async postBid(req, res, next) {
        let id = '/'+req.params.id
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'post',
            url: url + '/bids' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }

    static async putBid(req, res, next){
        let id = '/'+req.params.id
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'put',
            url: url + '/bids' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }
    
    static async getProductBid(req, res, next){
        /* istanbul ignore next */
        let id = (req.params.id)?'/'+req.params.id:''
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'get',
            url: url + '/bids' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }

    static async getMyBids(req, res, next){
        /* istanbul ignore next */
        let id = (req.params.id)?'/'+req.params.id:''
        /* istanbul ignore next */
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'get',
            url: url + '/bids/mybids' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        })
    }

    static async getBid(req, res, next){
        /* istanbul ignore next */
        let id = (req.params.id)?'/'+req.params.id:''
        /* istanbul ignore next */
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'get',
            url: url + '/bids/checkbid' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        })
    }

    static async delBid(req, res, next){
        let id = '/'+req.params.id
        let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

        axios({
            method: 'delete',
            url: url + '/bids' + id,
            data: req.body,
            headers: headers
            })
        .then(({data, status}) => {
            res.status(status).json(data)
        }).catch(({response}) => {
            res.status(response.status).json(response.data)
        })
    }
}

module.exports = Controller