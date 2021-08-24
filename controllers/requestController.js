'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA

module.exports = class Controller {
    static async getRequest(req, res, next){
        if(req.params.id){
            if (req.headers.access_token) {
                axios.get(url + '/requests/' + req.params.id, {
                    headers: {
                        access_token: req.headers.access_token
                    }
                }).then(({data, status}) => {
                    res.status(status).json(data)
                }).catch(({response}) => {
                    res.status(response.status).json(response.data)
                })
            } else {
                axios.get(url + '/requests/' + req.params.id).then(({data, status}) => {
                    res.status(status).json(data)
                }).catch(({response}) => {
                    res.status(response.status).json(response.data)
                })
            }
        } else {
            axios.get(url + '/requests')
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        }
    }

    static async postRequest(req, res, next){
        try {
            axios.post(url + '/requests', req.body, {
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

    static async putRequest(req, res, next){
        try {
            axios.put(url + '/requests', req.body, {
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

    static async delRequest(req, res, next){
        try {
            axios.delete(url + '/requests' + req.params.id, {
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

    static async getMyRequest(req, res, next){
        try {
            axios.get(url + '/requests', {
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
