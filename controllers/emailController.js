'use strict'

const axios = require("axios")
const url = process.env.URL_3RD_PARTY_GARAGE_KITA;

class EmailController{
    static async sendActivation(req, res, next) {
        // router.post('/email/sendactivation/:email', emailController.sendActivation)
        let emailKirim = req.params.email

        try {
            axios.post(url + '/email/sendactivation/' + emailKirim)
            .then(({data, status}) => {
                res.status(status).json(data)
            }).catch(({response}) => {
                res.status(response.status).json(response.data)
            })
        } catch (error) {
            next(error)
        }
    }

    static async activatedAccount (req, res, next) {
        // router.get('/email/activation', emailController.activatedAccount)
        let activationCode = req.query.code;

        try {
            axios.get(url + '/email/activation/?code=' + activationCode)
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

module.exports = EmailController