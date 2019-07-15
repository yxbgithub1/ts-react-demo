declare namespace Message {
    /** 提示类型 */
    type MessageType = 'info' | 'success' | 'error' | 'warning'

    /** 公共Props */
    // interface CommondProps {
    //     type?: MessageType,
    //     duration?: number,
    //     message?: string,
    //     willUnmount?: () => void,
    //     onClose?: () => void
    // }

    /**
     * 组件公共Props
     * @interface CommondProps
     * type     提示类型
     * duration 过度毫秒
     * message  提示内容
     * node     节点
     */
    interface CommondProps {
        type?: MessageType,
        duration?: number,
        message?: string,
        node?: any
    }

    /**
     * @interface ModalState
     */
    interface ModalState {
        visible: boolean
    }

    /**
     * @interface ModalProps
     * @extends {CommondProps}
     */
    interface ModalProps extends CommondProps {

    }

    /**
     * @interface MessageProps
     * @extends {CommondProps}
     */
    interface MessageProps extends CommondProps {

    }
}

export = Message
export as namespace Message
