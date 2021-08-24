'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA
const endPoint = '/products'

class Controller{
    static async getProducts(req, res, next){
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

        // if(req.params.id){
        //     if (req.headers.access_token) {
        //         try {
        //             axios.get(url + '/products/' + req.params.id, req.body, {
        //                 headers: {
        //                     access_token: req.headers.access_token
        //                 }
        //             })
        //             .then(({data, status}) => {
        //                 res.status(status).json(data)
        //             }).catch(({response}) => {
        //                 res.status(response.status).json(response.data)
        //             })
        //         } catch (error) {
        //             next(error)
        //         }
        //     } else {
        //         try {
        //             axios.get(url + '/products/' + req.params.id, req.body)
        //             .then(({data, status}) => {
        //                 res.status(status).json(data)
        //             }).catch(({response}) => {
        //                 res.status(response.status).json(response.data)
        //             })
        //         } catch (error) {
        //             next(error)
        //         }
        //     }
        // } else {
        //     try {
        //         axios.get(url + '/products')
        //         .then(({data, status}) => {
        //             res.status(status).json(data)
        //         }).catch(({response}) => {
        //             res.status(response.status).json(response.data)
        //         })
        //     } catch (error) {
        //         next(error)
        //     }
        // }
    }

    static async postProduct(req, res, next){
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
        //     axios.post(url + '/products', req.body, {
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

    static async putProduct(req, res, next){
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
        // console.log('masuk')
        // try {
        //     axios.put(url + '/products/' + req.params.id, req.body, {
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

    static async delProduct(req, res, next){
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
        //     axios.delete(url + '/products/' + req.params.id, {
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

    static getMyProducts(req, res, next){
        try {
            let id = (req.params.id)?'/'+req.params.id:''
            let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

            axios({
                method: 'get',
                url: url + endPoint + '/myproducts' + id,
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
        //     axios.get(url + '/products', {
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