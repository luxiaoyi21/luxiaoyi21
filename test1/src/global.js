import React from "react"
import * as ANTD from 'antd'
import * as Router from 'react-router-dom'

React.UI = ANTD
React.Router = Router

React.success = (msg, callback) => {
    React.UI.Toast.show({
        icon: 'success',
        content: msg,
        duration: 1500,
        afterClose: callback ? callback : () => {
            React.navigate(-1)
        }
    })
}

React.error = (msg, callback) => {
    React.UI.Toast.show({
        icon: 'fail',
        content: msg,
        duration: 1500,
        afterClose: callback ? callback : () => {
            React.navigate(-1)
        }
    })
}

export default {}
