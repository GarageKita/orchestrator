'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA

class Controller {
    static async postBid(req, res, next) {
        try {
            axios.post(url + '/bids/' + req.params.id, req.body, {
                headers: {
                    access_token: req.headers.access_token
                }
            })
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        } catch (error) {
            next(error)
        }
    }

    static async putBid(req, res, next){
        try {
            axios.put(url + '/bids/' + req.params.id, {
                headers: {
                    access_token: req.headers.access_token
                }
            })
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        } catch (error) {
            next(error)
        }
    }
    
    static async getProductBid(req, res, next){
        try {
            axios.get(url + '/bids/' + req.params.id, {
                headers: {
                    access_token: req.headers.access_token
                }
            })
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        } catch (error) {
            next(error)
        }
    }

    static async getMyBids(req, res, next){
        try {
            axios.get(url + '/bids/mybids', {
                headers: {
                    access_token: req.headers.access_token
                }
            })
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        } catch (error) {
            next(error)
        }
    }

    static async delBid(req, res, next){
        try {
            axios.delete(url + '/bids/' + req.params.id, {
                headers: {
                    access_token: req.headers.access_token
                }
            })
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller