import './DownArrow.css'

export const DownArrow = () => {
    const scrollDown = () => {
        // TODO: CODE TO SCROLL DOWN HERE
    }

    return (
        <div className={"down-arrow-container"} onClick={scrollDown}>
            <div className={'down-arrow'}/>
        </div>
    )
}