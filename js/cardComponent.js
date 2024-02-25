export const card = (room) => {
    return `
    <div class="overflow-hidden rounded-xl shadow-xl">
    <div>
        <a href="detail.html"><img class="w-full h-[230px] rounded-t-lg object-cover" src="${room.image || "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"} " alt="image description"></a>

    </div>
    <div class="space-y-2 p-4">
        <p class="text-md  font-bold">${room.price || "Unavailable"}$ <span class="text-xs text-black-50">/ Month <span
            class="text-xs ">&#40;Bills Included&#41;<span></span>
        </p>
        <div>
            <p class="text-sm font-medium text-black-50">${room.location || "Unavailable"}</p>
        </div>
        <div>
            <a href="" class="px-2 py-1 bg-slate-100 rounded-xl text-xxs text-black-50">${room.tag[0] || "Unavailable"}</a>
            <a href="" class="px-2 py-1 bg-slate-100 rounded-xl text-xxs text-black-50">${room.tag[1] || "Unavailable"}</a>
            <a href="" class="px-2 py-1 bg-slate-100 rounded-xl text-xxs text-black-50">${room.tag[2] || "Unavailable"}</a>
        </div>
        <p class="text-xs text-black-100">From ${room.date || "Unavailable"}</p>
    </div>
    
</div>
</div>
                   
    `
}

