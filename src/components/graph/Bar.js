const Bar = ({ height, id }) => {
    return <div id={id} className={"bar"} style={{ height: `${height*3}px` }}>

    </div>
}

export default Bar;