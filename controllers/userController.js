'use strict'

const axios = require("axios")
const url = (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development") ? 'http://localhost:3000' : process.env.URL_MAIN_GARAGE_KITA

class Controller{
    static async login(req, res, next){
        // try {
            axios.post(url + '/login', req.body)
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        // } catch (error) {
        //     next(error)
        // }
    }
    
    static async register(req, res, next){
        // try {
            axios.post(url + '/register', req.body)
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        // } catch (error) {
        //     console.log('error2', error)
        //     next(error)
        // }
    }

    static async putUser(req, res, next) {
        // try {
            let id = (req.params.id)?'/'+req.params.id:''
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
        // } catch (error) {
        //     next(error)
        // }
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
}

module.exports = Controller