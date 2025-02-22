// global.d.ts
export { }

import React from 'react'

// import { Module } from 'react';

declare.global = () => {
    window.React = {
        UI: Module,
        Router: Module,
        navigate: Function,
        back: Function,
        success: Function,
        error: Function
    }
}