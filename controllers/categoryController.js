'use strict'

const axios = require("axios")
const url = process.env.URL_MAIN_GARAGE_KITA
const endPoint = '/categories'

class Controller{
    static postCategory(req, res, next){
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
        //     axios.post(url + '/categories', req.body, {
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

    static putCategory(req, res, next){
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
        //     axios.put(url + '/categories/' + req.params.id, req.body, {
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

    static delCategory(req, res, next){
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
        //     axios.delete(url + '/categories/' + req.params.id, {
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

    static getCategory(req, res, next){
        try {
            let id = (req.params.id)?'/'+req.params.id:''
            let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

            console.log(id, headers, url + endPoint + id, req.body)
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
        //     axios.get(url + '/categories')
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

module.exports= Controller