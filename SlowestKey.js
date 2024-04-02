/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let maxKey = keysPressed[0];
    let maxDuration = releaseTimes[0];
    
    for (let i = 1; i < keysPressed.length; i++) {
        let key = keysPressed[i];
        let duration = releaseTimes[i] - releaseTimes[i - 1];
        
        if (maxDuration < duration || maxDuration === duration && maxKey < key) {
            maxDuration = duration;
            maxKey = key;
        }
    }
    
    return maxKey;
};