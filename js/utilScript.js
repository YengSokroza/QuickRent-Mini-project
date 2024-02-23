'use strict'


import { rooms } from "../data/room.js"
import { card } from "./cardComponent.js"

let renderArea = document.querySelector('#render-area')
let houseArea = document.querySelector('#house-area')
let studioArea = document.querySelector('#studio-area')
let shRoomArea = document.querySelector('#shRoom-area')

rooms.map((room) => {
    renderArea.innerHTML += card(room)
    
})

rooms.map((room) => {
    houseArea.innerHTML += card(room)
    studioArea.innerHTML += card(room)
    shRoomArea.innerHTML += card(room)
})