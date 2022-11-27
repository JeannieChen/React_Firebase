export default function Title({ title, subtitle }) {
    return (
        // fragment: no wrapper div element; <> = React.Fragment
        <>
            <h1 className="title">{title}</h1>
            <br />
            <h2 className="subtitle">{subtitle}</h2>
        </>
    )

}