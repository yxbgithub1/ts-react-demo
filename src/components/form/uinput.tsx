import React from 'react'

const UInput: React.FC = () => {
    console.log('同级无状态子组件渲染')
    return (
        <div>这是一个无状态(UI)组件</div>
    )
}

// class UInput extends React.PureComponent {
//     render() {
//         console.log('同级子组件渲染')
//         return (
//             <div>这是一个无状态(UI)组件</div>
//         )
//     }
// }

export {
    UInput
}