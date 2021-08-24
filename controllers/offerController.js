'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA

class Controller {
    static async postOffer(req, res, next) {
        try {
            axios.post(url + '/offers/' + req.params.id, req.body, {
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

    static putOffer(req, res, next){
        try {
            axios.put(url + '/offers/' + req.params.id, req.body, {
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
    
    static getRequestOffer(req, res, next){
        try {
            axios.get(url + '/offers/' + req.params.id, {
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
    static getMyOffer(req, res, next){
        try {
            axios.get(url + '/offers/myoffers', {
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

    static delOffer(req, res, next){
        try {
            axios.delete(url + '/offers/' + req.params.id, {
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