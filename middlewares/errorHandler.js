
function errorHandler(err, req, res, next){
    // console.log(err)
    /* istanbul ignore next */
    if (typeof (err) === 'string') {
        return res.status(400).json({success: false, message: err.message})
    }

    /* istanbul ignore next */
    if (err.name == 'EmailSendError' || err.name == 'NotFound'){
        return res.status(401).json({success: false, message: err.message})
    }

    /* istanbul ignore next */
    if (err.message == undefined){
        return res.status(500).json({success: false, message: "Unknown Error"})
    } else {
        return res.status(500).json({success: false, message: JSON.stringify(err)})
    }
}

module.exports = errorHandler;