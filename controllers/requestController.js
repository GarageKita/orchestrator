'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA
const endPoint = '/requests'

module.exports = class Controller {
    static async getRequest(req, res, next){
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
        //     let id = (req.params.id)?req.params.id:''
        //     let headers = (req.headers.access_token)?{headers:{access_token: req.headers.access_token}}:{}

        //     axios.get(url + '/requests/' + id, req.body, headers).then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
        // if(req.params.id){
        //     if (req.headers.access_token) {
        //         axios.get(url + '/requests/' + req.params.id, {
        //             headers: {
        //                 access_token: req.headers.access_token
        //             }
        //         }).then(({data, status}) => {
        //             res.status(status).json(data)
        //         }).catch(({response}) => {
        //             res.status(response.status).json(response.data)
        //         })
        //     } else {
        //         axios.get(url + '/requests/' + req.params.id).then(({data, status}) => {
        //             res.status(status).json(data)
        //         }).catch(({response}) => {
        //             res.status(response.status).json(response.data)
        //         })
        //     }
        // } else {
        //     axios.get(url + '/requests')
        //     .then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // }
    }

    static async postRequest(req, res, next){
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
        // let id = (req.params.id)?req.params.id:''
        // let headers = (req.headers.access_token)?{headers:{access_token: req.headers.access_token}}:{}

        
        // try {
        //     axios.post(url + '/requests/' + id, req.body, headers).then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
    }

    static async putRequest(req, res, next){
        // let id = (req.params.id)?req.params.id:''
        // let headers = (req.headers.access_token)?{headers:{access_token: req.headers.access_token}}:{}

        
        // try {
        //     axios.put(url + '/requests/' + id, req.body, headers).then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
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
    }

    static async delRequest(req, res, next){
        // let id = (req.params.id)?req.params.id:''
        // let headers = (req.headers.access_token)?{headers:{access_token: req.headers.access_token}}:{}

        // try {
        //     axios.delete(url + '/requests/' + id, headers).then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
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
    }

    static async getMyRequest(req, res, next){
        try {
            let id = (req.params.id)?'/'+req.params.id:''
            let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

            axios({
                method: 'get',
                url: url + endPoint + '/myrequests' + id,
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
        // let id = (req.params.id)?req.params.id:''
        // let headers = (req.headers.access_token)?{headers:{access_token: req.headers.access_token}}:{}

        // console.log(id, headers)
        // try {
        //     axios.get(url + '/requests/' + id, req.body, headers).then(({data, status}) => {
        //         res.status(status).json(data)
        //     }).catch(({response}) => {
        //         res.status(response.status).json(response.data)
        //     })
        // } catch (error) {
        //     next(error)
        // }
    }
}
