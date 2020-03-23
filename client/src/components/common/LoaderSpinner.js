import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default function LoaderSpinner(props) {
    return (
        <Loader
            type={props.type}
            color={props.color}
            height={props.height}
            width={props.width}
        />
    )
}
