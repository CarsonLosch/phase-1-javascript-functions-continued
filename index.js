// code your solution here
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();

const mondayWork = function(action = "go to the office" ) {
    return (`This Monday, I will ${action}.`);
}
mondayWork();

function wrapAdjective(flare = "*") {
    return function (attribute = "special") {
        return `You are ${flare}${attribute}${flare}!`;
    };
}
wrapAdjective("%")("a dedicated programmer");