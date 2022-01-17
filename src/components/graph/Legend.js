const ChartLegend = ({ array }) => {
    let maxVal = array[0] ? array[0] : 0;
    let minVal = array[0] ? array[0] : 0;

    array.forEach( (value, index) => {
        if( value > maxVal)
            maxVal = value;
        if( value < minVal)
            minVal = value;
    });

    return <div id={"legend"}>
        <span>array length : {array.length}</span>
        <span>max value : {maxVal}</span>
        <span>min value : {minVal}</span>
    </div>;
}

export default ChartLegend;