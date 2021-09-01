'use strict'

const axios = require("axios")
// const url = process.env.URL_DEAL_TRANSACTION_GARAGE_KITA
const url = (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development" ) ? 'http://localhost:3001' : process.env.URL_DEAL_TRANSACTION_GARAGE_KITA
const endPoint = '/deals'

class Controller{
    static async createDealTransaction(req, res, next){
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
    }

    static async getAllUserTransaction(req, res, next) {
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
    }

    static async deleteTransaction(req, res, next) {
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

    static async updateTransaction(req, res, next) {
        try {
            let id = (req.params.id)?'/'+req.params.id:''
            let headers = (req.headers.access_token)?{access_token: req.headers.access_token}:{}

            axios({
                method: 'patch',
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
}

module.exports= Controller