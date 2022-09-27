import React from "react"
import Link from "next/link"
import NProgress from "nprogress"
import Router from "next/router"
import Head from 'next/head'

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Layout = ({children}) => {
    const head = () => (
        <React.Fragment>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/static/css/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link>
      </React.Fragment>
    )


    const nav = () => (
        //
        <ul className="nav nav-tabs bg-warning">
            <li className="nav-item">
                <Link href="/">
                     <a className="nav-link text-dark">Home</a>
                </Link>  
            </li>
            <li className="nav-item">
                <Link  href="/login">
                <a className="nav-link text-dark">Login</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/register">
                    <a className="nav-link text-dark">Register</a>
                </Link>
            </li>
        </ul>
    )
    return <React.Fragment>
        {head()} 
        {nav()} 
        <div className="container pt-5 pb-5">{children}</div>
    </React.Fragment>
}

export default Layout