
function clearAnimationIntervals( animateIntervalIds ) {
        animateIntervalIds.forEach( timeoutId => {
            clearTimeout( timeoutId );
        });
    animateIntervalIds = [];
}

function animateSorting( steps, bars, animateIntervalIds ) {
    let j = 0 ;
    const animateDelay = 10;//30; //50
    for(let i=0;i<steps.length;i++){
        const step = steps[i];

        if( step.check ) {
            // console.log(`check : ${step.data}`);
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor="#237033";
            }, ++j * animateDelay) );
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor="#ebe64d";
            }, (++j * animateDelay)) );
        }
        else if( step.compare ) {
            // console.log(`compare : ${step.data}`);
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor="#7700ff";
                bars[step.data[1]].style.backgroundColor="#7700ff";
            }, ++j * animateDelay) );
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor="#ebe64d";
                bars[step.data[1]].style.backgroundColor="#ebe64d";
            }, (++j * animateDelay)) );
        }
        else if( step.overwrite ) {
            animateIntervalIds.push( setTimeout( ()=>{
                bars[step.data[0]].style.backgroundColor="#fc3a3a";
                bars[step.data[0]].style.height=`${step.data[1]*3}px`;
            }, ++j * animateDelay) );
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor="#ebe64d";
            }, (++j * animateDelay)) );
        }
        else if( step.swap ) {
            // console.log(`swap : ${step.data}`);
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor="#fc3a3a";
                bars[step.data[2]].style.backgroundColor="#fc3a3a";
                bars[step.data[0]].style.height=`${step.data[1]*3}px`;
                bars[step.data[2]].style.height=`${step.data[3]*3}px`;
            }, ++j * animateDelay) );
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor="#ebe64d";
                bars[step.data[2]].style.backgroundColor="#ebe64d";
            }, (++j * animateDelay)) );
        }
        else {
            // console.log(`final : ${step.data}`);
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor="#3ebd58";
            }, ++j * animateDelay) );

        }
    }
    animateIntervalIds.push( setInterval( ()=>{ clearAnimationIntervals(animateIntervalIds) }, ++j*animateDelay) );
}

function resetBarColor(bars) {
    for(let i=0;i<bars.length;i++){
        bars[i].style.backgroundColor="#ebe64d";
    }
}

module.exports = {
    clearAnimationIntervals,
    animateSorting,
    resetBarColor
}