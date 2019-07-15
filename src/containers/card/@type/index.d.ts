declare namespace Card {
    interface CardProps {

    }
    interface CardState {
        name  : string,
        mobile: string,
        src   : string,
    }

    interface CardPopupsProps {
        // visible: boolean
    }

    interface CardPopupsState {
        visible: boolean
    }
}
export = Card
export as namespace Card