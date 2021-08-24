'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA
const endPoint = '/offers'
class Controller {
    static async postOffer(req, res, next) {
        try {
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
        } catch (error) {
            next(error)
        }

        // try {
        //     axios.post(url + '/offers/' + req.params.id, req.body, {
        //         headers: {
        //             access_token: req.headers.access_token
        //         }
        //     })
        //     .then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
    }

    static putOffer(req, res, next){
        try {
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
        } catch (error) {
            next(error)
        }

        // try {
        //     axios.put(url + '/offers/' + req.params.id, req.body, {
        //         headers: {
        //             access_token: req.headers.access_token
        //         }
        //     })
        //     .then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
    }
    
    static getRequestOffer(req, res, next){
        try {
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
        } catch (error) {
            next(error)
        }

        // try {
        //     axios.get(url + '/offers/' + req.params.id, {
        //         headers: {
        //             access_token: req.headers.access_token
        //         }
        //     })
        //     .then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
    }
    static getMyOffer(req, res, next){
        try {
            let id = (req.params.id)?'/'+req.params.id:''
            let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

            axios({
                method: 'get',
                url: url + endPoint + '/myoffers' + id,
                data: req.body,
                headers: headers
              })
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        } catch (error) {
            next(error)
        }

        // try {
        //     axios.get(url + '/offers/myoffers', {
        //         headers: {
        //             access_token: req.headers.access_token
        //         }
        //     })
        //     .then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
    }

    static delOffer(req, res, next){
        try {
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
        } catch (error) {
            next(error)
        }

        // try {
        //     axios.delete(url + '/offers/' + req.params.id, {
        //         headers: {
        //             access_token: req.headers.access_token
        //         }
        //     })
        //     .then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
    }
}

module.exports = Controller