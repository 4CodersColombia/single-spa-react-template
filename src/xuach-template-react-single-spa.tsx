import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root.component'
import singleSpaReact from 'single-spa-react'

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    errorBoundary() {
        // Customize the root error boundary for your microfrontend here.
        return null
    },
    rootComponent: Root,
})

export const { bootstrap, mount, unmount } = lifecycles
