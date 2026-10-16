import {newGame} from './player.js';
const KEY='afterfall-kapfenberg-save-v1';
export function load(){try{const raw=localStorage.getItem(KEY);if(!raw)return newGame();const value=JSON.parse(raw);return validate(value)?value:newGame();}catch{return newGame();}}
export function save(state){localStorage.setItem(KEY,JSON.stringify(state));}
export function validate(v){return v&&v.version===1&&Number.isFinite(v.position?.lat)&&Number.isFinite(v.position?.lng)&&Number.isFinite(v.health)&&Number.isFinite(v.hunger)&&Number.isFinite(v.thirst)&&Number.isFinite(v.day)&&Number.isFinite(v.minute)&&v.inventory&&typeof v.inventory==='object'&&v.searched&&typeof v.searched==='object'&&Array.isArray(v.log);}
export function download(state){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='afterfall-spielstand.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
