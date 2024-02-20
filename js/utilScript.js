
let Navbar = document.querySelector('header');

let displayNav = `

<div id="sticky-banner" tabindex="-1"
    class="fixed top-0 start-0 z-50 flex justify-between w-full p-1 border-b border-gray-200 bg-accent">
    <div class="flex items-center mx-auto">
        <p class="flex items-center text-sm font-normal te ">
            <span
                class="inline-flex p-1 me-3 bg-white rounded-full  w-6 h-6 items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-primary-100 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 18 19">
                    <path
                        d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                </svg>
                <span class="sr-only">Light bulb</span>
            </span>
            <span>Ready to find your dream space or share yours? <a href="https://flowbite.com"
                    class="inline font-medium text-blue-600 underline d underline-offset-2 decoration-600  decoration-solid hover:no-underline">Sign
                    in now! </a></span>
        </p>
    </div>
    <div class="flex items-center">
        <button id="closeBtn" data-dismiss-target="#sticky-banner" type="button"
            class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-primary-100 rounded-lg text-sm p-1.5 ">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close banner</span>
        </button>
    </div>
</div>
</div>
<!-- navbar -->
<nav class="bg-white fixed w-full z-20  start-0  top-[30px] border-b border-primary-50 ">
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/quickRent-logo-green.png" class="h-10" alt="Quick Rent Logo">
      
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div class="flex gap-1">
            <button type="button"
                class="text-base font-bold text-black-100  hover:bg-primary-70 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  px-4 py-2 text-center ">Sign In
            </button>
            <button type="button"
                class="hidden sm:block text-base font-bold text-black-100 bg-primary-50 hover:bg-primary-70 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg  px-4 py-2 text-center ">I'm
                a Landlord
            </button>
        </div>

        <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm te rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15" />
            </svg>
        </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
                <a href="#"
                    class="hover:underline text-primary-70 block py-2 px-3  rounded   md:p-0 text-base font-bold ">Home</a>
            </li>
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                    class="hover:underline font-bold flex items-center justify-between w-full py-2 px-3 text-primary-100  md:border-0  md:p-0 md:w-auto ">Tenant
                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                <!-- Dropdown menu -->
                <div id="dropdownNavbar"
                    class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                    <ul class="py-2 text-base-bold font-bold text-primary-100 " aria-labelledby="dropdownLargeButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:underline hover:bg-gray-50">All Properties</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:underline  hover:bg-gray-50">Favourite</a>
                        </li>

                    </ul>
                </div>
            </li>
            <li>
                <a href="#"
                    class="hover:underline block py-2 px-3 text-primary-100 rounded   md:p-0 text-base font-bold ">Landlord</a>
            </li>
            <li>
                <a href="#"
                    class="hover:underline block py-2 px-3 text-primary-100 rounded  md:p-0 text-base font-bold">Support</a>
            </li>

    </div>



`

navContent.innerHTML(displayNav);