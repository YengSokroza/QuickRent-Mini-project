'use strict'


import { rooms } from "../data/room.js"
import { card } from "./cardComponent.js"

let renderArea = document.querySelector('#render-area')


rooms.map((room) => {
    renderArea.innerHTML += card(room)
})