import React from 'react'
import './style.scss'

const FlexItem = (props: { className?: any; children: React.ReactNode; }) => (
    <div className={`child ${props.className || ''}`}>{props.children}</div>
)

const FlexChild = (props: { className?: any; children: React.ReactNode; }) => (
    <div className={`child ${props.className || ''}`}>{props.children}</div>
)

class Flex extends React.PureComponent<{ className?: string }> {
    static FlexItem = FlexItem
    render() {
        return (
            <div className={`flex ${this.props.className}`}>{this.props.children}</div>
        )
    }
}

class FlexCol extends React.PureComponent<{ className?: string }> {
    static FlexItem = FlexItem
    render() {
        return (
            <div className={`flex column ${this.props.className}`}>{this.props.children}</div>
        )
    }
}

export {
    Flex,
    FlexCol,
    FlexItem,
    FlexChild
}