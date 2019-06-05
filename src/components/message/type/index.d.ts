declare namespace Message {

    type MessageType = 'info' | 'success' | 'error' | 'warning'

    interface CommondProps {
        type?: MessageType,
        duration?: number,
        message?: string,
        willUnmount?: () => void,
        onClose?: () => void
    }

    interface MessageProps extends CommondProps {

    }

    interface ToastProps extends CommondProps {

    }

    interface ToastState {
        visible: boolean
    }

    interface CommondProps {
        type?: MessageType,
        duration?: number,
        message?: string,
        node?: any
    }

    interface ModalState {
        visible: boolean
    }

    interface ModalProps extends CommondProps {

    }

    interface MessageProps extends CommondProps {

    }
}

export = Message
export as namespace Message
