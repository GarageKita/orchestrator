'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA

class Controller{
    static async getProducts(req, res, next){
        if(req.params.id){
            if (req.headers.access_token) {
                try {
                    axios.get(url + '/products/' + req.params.id, req.body, {
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
            } else {
                try {
                    axios.get(url + '/products/' + req.params.id, req.body)
                    .then(({data, status}) => {
                        res.status(status).json(data)
                    }).catch(({response}) => {
                        res.status(response.status).json(response.data)
                    })
                } catch (error) {
                    next(error)
                }
            }
        } else {
            try {
                axios.get(url + '/products')
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

    static async postProduct(req, res, next){
        try {
            axios.post(url + '/products', req.body, {
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

    static async putProduct(req, res, next){
        try {
            axios.put(url + '/products', req.body, {
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

    static async delProduct(req, res, next){
        try {
            axios.delete(url + '/products/' + req.params.id, {
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

    static getMyProducts(req, res, next){
        try {
            axios.get(url + '/products', {
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