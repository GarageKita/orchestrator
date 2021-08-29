'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA

class Controller {
    static async postBid(req, res, next) {
        console.log('masuk')
        try {
            let id = (req.params.id)?'/'+req.params.id:''
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
        } catch (error) {
            next(error)
        }

        // try {
        //     axios.post(url + '/bids/' + req.params.id, req.body, {
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

    static async putBid(req, res, next){
        try {
            let id = (req.params.id)?'/'+req.params.id:''
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
        } catch (error) {
            next(error)
        }

        // try {
        //     axios.put(url + '/bids/' + req.params.id, {
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
    
    static async getProductBid(req, res, next){
        try {
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
        } catch (error) {
            next(error)
        }

        // try {
        //     axios.get(url + '/bids/' + req.params.id, {
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

    static async getMyBids(req, res, next){
        try {
            let id = (req.params.id)?'/'+req.params.id:''
            let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

            axios({
                method: 'get',
                url: url + '/bids/mybids' + id,
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
        //     axios.get(url + '/bids/mybids', {
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

    static async getBid(req, res, next){
        try {
            let id = (req.params.id)?'/'+req.params.id:''
            let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

            axios({
                method: 'get',
                url: url + '/bids/checkbid' + id,
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
    }

    static async delBid(req, res, next){
        try {
            let id = (req.params.id)?'/'+req.params.id:''
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
        } catch (error) {
            next(error)
        }

        // try {
        //     axios.delete(url + '/bids/' + req.params.id, {
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