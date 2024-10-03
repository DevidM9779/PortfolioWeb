import "./DownloadButton.css"


export const DownloadButton = ({
    as: Component = "button",
    className = "",
    color = "white",
    speed = "2s",
    link = "",
    children,
    ...rest
}) => {
    return (
        <Component className={`download-button-container ${className}`} {...rest}>
            <div
                className="border-gradient"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 71%)`,
                    animationDuration: speed,
                }}
            >
            </div>
            <div className="inner-content">
                <a href={link}>
                    {children}
                </a>
            </div>
        </Component>
    )
}