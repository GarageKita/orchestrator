'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA

class Controller{
    static async login(req, res, next){
        try {
            axios.post(url + '/login', req.body)
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        } catch (error) {
            next(error)
        }
    }
    
    static async register(req, res, next){
        console.log('masuk', req.body, url + '/register')
        try {
            axios.post(url + '/register', {
                email: req.body.email,
                password: req.body.password
            })
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        } catch (error) {
            console.log('error2', error)
            next(error)
        }
    }

    static async putUser(req, res, next) {
        try {
            axios.post(url + '/user/' + req.params.id, req.body, {
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