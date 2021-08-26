'use strict'
const axios = require('axios')
const url = process.env.URL_3RD_PARTY_GARAGE_KITA;

class OngkirController{
    static async getProvince(req, res, next) {
        console.log('masuk province')
        try {
            let id = (req.query.id)?'/?id='+req.query.id:''
            let headers = {}
            
            axios({
                method: 'get',
                url: url + '/ongkir/province' + id,
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

    static async getCity (req, res, next) {
        console.log('masuk city')
        try {
            let id = (req.query.id)?'id='+req.query.id:''
            let idProvince = (req.query.province)?'province='+req.query.province:''
            let headers = {}
            let query = ""

            if (id != '' && idProvince != ''){
                query = '?' + id + '&' + idProvince
            } else if (id != '' && idProvince =='') {
                query = '?' + id
            } else if (id == '' && idProvince != '') {
                query = '?' + idProvince
            }

            axios({
                method: 'get',
                url: url + '/ongkir/city' + query,
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

    static async countCost(req, res, next) {
        console.log('masuk Count')
        let headers = {}
        try {
            axios({
                method: 'post',
                url: url + '/ongkir/cost',
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

module.exports = OngkirController