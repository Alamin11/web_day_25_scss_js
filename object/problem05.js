
function crossingSignal(signalColor) {
    if (signalColor === 'red' || signalColor === 'Red' || signalColor === 'RED') {
        console.log('Stop crossing. If you cross now , will be in danger');
    }
    else if (signalColor === 'Yellow' || signalColor === 'YELLOW' || signalColor === 'yellow') {
        console.log('Cross at your own risks');
    }
    else if (signalColor === 'Green' || signalColor === 'GREEN' || signalColor === 'green') {
        console.log('You are safe to cross');
    }
    else {
        console.log("signal color can not be determined")
    }
}
crossingSignal('green');
// console.log(signal);