export const START={lat:47.4434,lng:15.2919};
export function newGame(){return {version:1,position:{...START},day:1,minute:480,health:100,hunger:100,thirst:100,inventory:{Wasser:2,Konserve:1},searched:{},log:['Du erwachst in Kapfenberg. Die Straßen sind ungewöhnlich still.']};}
export function advance(state,minutes){state.minute+=minutes;while(state.minute>=1440){state.minute-=1440;state.day++;}state.hunger=Math.max(0,state.hunger-minutes*.045);state.thirst=Math.max(0,state.thirst-minutes*.075);if(state.hunger===0||state.thirst===0)state.health=Math.max(0,state.health-minutes*.08);}
export function timeLabel(state){return `Tag ${state.day} · ${String(Math.floor(state.minute/60)).padStart(2,'0')}:${String(Math.floor(state.minute%60)).padStart(2,'0')}`;}
