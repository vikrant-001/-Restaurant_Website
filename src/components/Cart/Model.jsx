import { Fragment } from "react"
import classes from "./Model.module.css"
import ReactDOM from "react-dom"
const BackDrop = (props) => {
    return <div className={classes.backdrop}></div>
}

const ModelOverLay = (props) => {
    return (
        <div className={classes.model}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalEelement = document.getElementById("overlays")
const Model = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop/>,portalEelement)}
            {ReactDOM.createPortal(
                <ModelOverLay>{props.children}</ModelOverLay>
            ,portalEelement)}
        </Fragment>
    )
}

export default Model