const defaultColor = "#ebe64d";
// const checkColor = "#237033";
const compareColor = "#7700ff";
const swapColor = "#fc3a3a";
const overwriteColor = "#fc3a3a";
const finalColor = "#3ebd58";

export function clearAnimationIntervals( animateIntervalIds ) {
    console.log("clear animation called");
    animateIntervalIds.current.forEach( timeoutId => {
            clearTimeout( timeoutId );
        });
    animateIntervalIds.current = [];
}

export function animateSpeed(animationSpeed) {
    switch(animationSpeed) {
        case "lightning":
            return 5;
        case "fast":
            return 10;
        case "normal":
            return 50;
        case "slow":
            return 1000;
        default:
            return 10;
    }
}

export function animateSorting( steps, bars, animateIntervalIds, animateDelay ) {

    let j = 0 ;
      // = 10;//30; //50
    for(let i=0;i<steps.length;i++){
        const step = steps[i];

        if( step.check ) {
            // console.log(`check : ${step.data}`);
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor=compareColor;
            }, ++j * animateDelay) );
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor=defaultColor;
            }, (++j * animateDelay)) );
        }
        else if( step.compare ) {
            // console.log(`compare : ${step.data}`);
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor=compareColor;
                bars[step.data[1]].style.backgroundColor=compareColor;
            }, ++j * animateDelay) );
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor=defaultColor;
                bars[step.data[1]].style.backgroundColor=defaultColor;
            }, (++j * animateDelay)) );
        }
        else if( step.overwrite ) {
            animateIntervalIds.push( setTimeout( ()=>{
                bars[step.data[0]].style.backgroundColor=overwriteColor;
                bars[step.data[0]].style.height=`${step.data[1]*3}px`;
            }, ++j * animateDelay) );
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor=defaultColor;
            }, (++j * animateDelay)) );
        }
        else if( step.swap ) {
            // console.log(`swap : ${step.data}`);
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor=swapColor;
                bars[step.data[2]].style.backgroundColor=swapColor;
                bars[step.data[0]].style.height=`${step.data[1]*3}px`;
                bars[step.data[2]].style.height=`${step.data[3]*3}px`;
            }, ++j * animateDelay) );
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor=defaultColor;
                bars[step.data[2]].style.backgroundColor=defaultColor;
            }, (++j * animateDelay)) );
        }
        else {
            // console.log(`final : ${step.data}`);
            animateIntervalIds.push( setTimeout(()=>{
                bars[step.data[0]].style.backgroundColor=finalColor;
            }, ++j * animateDelay) );

        }
    }
    animateIntervalIds.push( setInterval( ()=>{ clearAnimationIntervals(animateIntervalIds) }, ++j*animateDelay) );
}

export function resetBarColor(bars) {
    for(let i=0;i<bars.length;i++){
        bars[i].style.backgroundColor=defaultColor;
    }
}