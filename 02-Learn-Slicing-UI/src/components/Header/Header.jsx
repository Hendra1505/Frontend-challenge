import React from "react";
import './Header.css'

const Header = () => {

    return(
        <>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Yours</span>
                        <svg width="170" height="34" viewBox="0 0 170 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_171_950)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8805 6.01412C28.446 5.06524 28.0089 4.29602 26.9043 4.29602H19.9043C18.7998 4.29602 17.446 5.06524 16.8806 6.01412L1.22755 32.2827C0.662133 33.2316 1.0992 34.0008 2.20377 34.0008H17.2038C18.3083 34.0008 19.6621 33.2316 20.2276 32.2827L25.9891 22.6138C26.5545 21.665 26.1174 20.8957 25.0128 20.8957H21.0128C19.9083 20.8957 19.4712 20.1265 20.0366 19.1776L27.8805 6.01412Z" fill="url(#paint0_linear_171_950)"/>
                            <rect width="17" height="21" rx="1" transform="matrix(1 0 -0.511893 0.859049 34.4638 0.000793457)" fill="url(#paint1_linear_171_950)"/>
                            <rect width="13" height="13" rx="1" transform="matrix(1 0 -0.511893 0.859049 30.1784 20.618)" fill="#F5921E"/>
                            </g>
                            <path d="M67.4347 25.5008H63.4801L72.4034 8.04625H77.1591L80.2784 25.5008H76.3239L74.2017 12.0349H74.0653L67.4347 25.5008ZM68.3381 18.64H77.679L77.1847 21.5207H67.8438L68.3381 18.64ZM86.7812 30.6826C85.5994 30.6826 84.6136 30.5207 83.8239 30.1968C83.0398 29.8786 82.4432 29.444 82.0341 28.8928C81.6307 28.3417 81.4091 27.7224 81.3693 27.0349L84.8125 26.5832C84.875 26.8502 84.9943 27.0974 85.1705 27.3247C85.3523 27.5519 85.6108 27.7337 85.946 27.8701C86.2869 28.0065 86.7273 28.0747 87.267 28.0747C88.0568 28.0747 88.7443 27.8815 89.3295 27.4951C89.9148 27.1144 90.2756 26.4752 90.4119 25.5775L90.804 23.1826H90.6506C90.4347 23.5462 90.1392 23.89 89.7642 24.2139C89.3949 24.5377 88.9432 24.8019 88.4091 25.0065C87.8807 25.211 87.2699 25.3133 86.5767 25.3133C85.5881 25.3133 84.7301 25.086 84.0028 24.6315C83.2813 24.1712 82.7585 23.4695 82.4347 22.5264C82.1165 21.5775 82.0767 20.3786 82.3153 18.9298C82.5653 17.4468 83.0142 16.2082 83.6619 15.2139C84.3097 14.2195 85.0767 13.4752 85.9631 12.9809C86.8494 12.4866 87.7727 12.2394 88.733 12.2394C89.4659 12.2394 90.0568 12.3644 90.5057 12.6144C90.9602 12.8587 91.3097 13.1656 91.554 13.5349C91.7983 13.8985 91.9716 14.2565 92.0739 14.6087H92.2188L92.5767 12.4099H96.1818L93.983 25.6286C93.8068 26.748 93.3835 27.6798 92.7131 28.4241C92.0483 29.1741 91.2045 29.7366 90.1818 30.1116C89.1591 30.4923 88.0256 30.6826 86.7812 30.6826ZM88.1449 22.586C88.7244 22.586 89.2443 22.4411 89.7045 22.1514C90.1705 21.8559 90.5597 21.4355 90.8722 20.89C91.1847 20.3389 91.4034 19.6798 91.5284 18.9127C91.6534 18.1457 91.6506 17.4809 91.5199 16.9184C91.3949 16.3502 91.1506 15.9099 90.7869 15.5974C90.429 15.2849 89.9574 15.1286 89.3722 15.1286C88.7699 15.1286 88.2415 15.2906 87.7869 15.6144C87.3324 15.9326 86.9545 16.3758 86.6534 16.944C86.358 17.5122 86.1506 18.1684 86.0312 18.9127C85.9062 19.6684 85.9006 20.3218 86.0142 20.873C86.1335 21.4184 86.3693 21.8417 86.7216 22.1428C87.0739 22.4383 87.5483 22.586 88.1449 22.586ZM102.821 25.7565C101.48 25.7565 100.369 25.4837 99.4886 24.9383C98.608 24.3872 97.9886 23.6087 97.6307 22.6031C97.2784 21.5917 97.2188 20.3957 97.4517 19.015C97.679 17.6684 98.1364 16.4866 98.8239 15.4695C99.517 14.4525 100.386 13.6599 101.432 13.0917C102.477 12.5235 103.642 12.2394 104.926 12.2394C105.79 12.2394 106.571 12.3786 107.27 12.657C107.974 12.9298 108.56 13.3445 109.026 13.9014C109.491 14.4525 109.81 15.1428 109.98 15.9724C110.156 16.8019 110.153 17.7735 109.972 18.8872L109.81 19.8843H98.7642L99.1136 17.6343H106.75C106.835 17.1116 106.801 16.6485 106.648 16.2451C106.494 15.8417 106.239 15.5264 105.881 15.2991C105.523 15.0661 105.082 14.9497 104.56 14.9497C104.026 14.9497 103.526 15.0803 103.06 15.3417C102.594 15.6031 102.202 15.9468 101.884 16.373C101.571 16.7934 101.369 17.2508 101.278 17.7451L100.878 19.9781C100.764 20.6656 100.787 21.2366 100.946 21.6911C101.111 22.1457 101.395 22.4866 101.798 22.7139C102.202 22.9355 102.713 23.0462 103.332 23.0462C103.736 23.0462 104.114 22.9894 104.466 22.8758C104.824 22.7622 105.142 22.5945 105.42 22.373C105.699 22.1457 105.926 21.8644 106.102 21.5292L109.418 21.7508C109.111 22.5576 108.645 23.2622 108.02 23.8644C107.395 24.461 106.642 24.9269 105.761 25.2622C104.886 25.5917 103.906 25.7565 102.821 25.7565ZM116.165 17.9326L114.904 25.5008H111.282L113.464 12.4099H116.915L116.54 14.7195H116.685C117.1 13.9525 117.685 13.3474 118.441 12.9042C119.202 12.461 120.069 12.2394 121.04 12.2394C121.95 12.2394 122.708 12.4383 123.316 12.836C123.93 13.2337 124.362 13.7991 124.612 14.532C124.867 15.265 124.91 16.1428 124.739 17.1656L123.342 25.5008H119.711L120.998 17.8133C121.129 17.0122 121.026 16.3872 120.691 15.9383C120.362 15.4837 119.83 15.2565 119.097 15.2565C118.609 15.2565 118.16 15.3616 117.751 15.5718C117.342 15.782 116.998 16.0889 116.719 16.4923C116.447 16.89 116.262 17.3701 116.165 17.9326ZM132.118 25.7565C130.783 25.7565 129.678 25.4724 128.803 24.9042C127.928 24.3303 127.311 23.5349 126.953 22.5178C126.601 21.4951 126.536 20.3048 126.757 18.9468C126.973 17.6059 127.422 16.4326 128.104 15.4269C128.786 14.4212 129.652 13.64 130.703 13.0832C131.754 12.5207 132.939 12.2394 134.257 12.2394C135.587 12.2394 136.689 12.5264 137.564 13.1002C138.439 13.6684 139.055 14.4639 139.413 15.4866C139.771 16.5093 139.839 17.6997 139.618 19.0576C139.396 20.3928 138.942 21.5633 138.254 22.569C137.567 23.5747 136.7 24.3587 135.655 24.9212C134.609 25.4781 133.43 25.7565 132.118 25.7565ZM132.476 22.944C133.089 22.944 133.632 22.7707 134.104 22.4241C134.581 22.0718 134.976 21.5945 135.288 20.9923C135.607 20.3843 135.828 19.6968 135.953 18.9298C136.078 18.1741 136.087 17.5036 135.979 16.9184C135.871 16.3275 135.643 15.8616 135.297 15.5207C134.956 15.1798 134.487 15.0093 133.891 15.0093C133.277 15.0093 132.732 15.1855 132.254 15.5377C131.777 15.8843 131.382 16.3616 131.07 16.9695C130.757 17.5775 130.538 18.2678 130.413 19.0406C130.294 19.7906 130.286 20.461 130.388 21.0519C130.49 21.6372 130.714 22.1002 131.061 22.4411C131.408 22.7764 131.879 22.944 132.476 22.944ZM145.814 17.9326L144.553 25.5008H140.93L143.112 12.4099H146.564L146.189 14.7195H146.334C146.749 13.9525 147.334 13.3474 148.089 12.9042C148.851 12.461 149.717 12.2394 150.689 12.2394C151.598 12.2394 152.357 12.4383 152.964 12.836C153.578 13.2337 154.01 13.7991 154.26 14.532C154.516 15.265 154.558 16.1428 154.388 17.1656L152.99 25.5008H149.359L150.646 17.8133C150.777 17.0122 150.675 16.3872 150.339 15.9383C150.01 15.4837 149.479 15.2565 148.746 15.2565C148.257 15.2565 147.808 15.3616 147.399 15.5718C146.99 15.782 146.646 16.0889 146.368 16.4923C146.095 16.89 145.911 17.3701 145.814 17.9326ZM161.766 25.7565C160.425 25.7565 159.315 25.4837 158.434 24.9383C157.553 24.3872 156.934 23.6087 156.576 22.6031C156.224 21.5917 156.164 20.3957 156.397 19.015C156.624 17.6684 157.082 16.4866 157.769 15.4695C158.462 14.4525 159.332 13.6599 160.377 13.0917C161.423 12.5235 162.587 12.2394 163.871 12.2394C164.735 12.2394 165.516 12.3786 166.215 12.657C166.92 12.9298 167.505 13.3445 167.971 13.9014C168.437 14.4525 168.755 15.1428 168.925 15.9724C169.102 16.8019 169.099 17.7735 168.917 18.8872L168.755 19.8843H157.71L158.059 17.6343H165.695C165.781 17.1116 165.746 16.6485 165.593 16.2451C165.44 15.8417 165.184 15.5264 164.826 15.2991C164.468 15.0661 164.028 14.9497 163.505 14.9497C162.971 14.9497 162.471 15.0803 162.005 15.3417C161.539 15.6031 161.147 15.9468 160.829 16.373C160.516 16.7934 160.315 17.2508 160.224 17.7451L159.823 19.9781C159.71 20.6656 159.732 21.2366 159.891 21.6911C160.056 22.1457 160.34 22.4866 160.744 22.7139C161.147 22.9355 161.658 23.0462 162.278 23.0462C162.681 23.0462 163.059 22.9894 163.411 22.8758C163.769 22.7622 164.087 22.5945 164.366 22.373C164.644 22.1457 164.871 21.8644 165.048 21.5292L168.363 21.7508C168.056 22.5576 167.59 23.2622 166.965 23.8644C166.34 24.461 165.587 24.9269 164.707 25.2622C163.832 25.5917 162.852 25.7565 161.766 25.7565Z" fill="white"/>
                            <defs>
                            <linearGradient id="paint0_linear_171_950" x1="19.2038" y1="34.0008" x2="4.34596" y2="23.524" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00796D"/>
                            <stop offset="1" stop-color="#38C682"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_171_950" x1="17" y1="21" x2="-2.53037" y2="18.2994" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00796D"/>
                            <stop offset="1" stop-color="#38C682"/>
                            </linearGradient>
                            <clipPath id="clip0_171_950">
                            <rect width="52" height="34" fill="white" transform="translate(0 0.000793457)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </a>
                    </div>
                    <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Services</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Project</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">About Us</a>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="btnContact text-sm font-semibold leading-6 text-gray-900">Contact Us</a>
                    </div>
                </nav>
                    {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <div className="-mx-3">
                            <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                                Product
                                {/* <!-- */}
                                Expand/collapse icon, toggle classNamees based on menu open state.

                                Open: "rotate-180", Closed: ""
                                {/* --> */}
                                <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                            <div className="mt-2 space-y-2" id="disclosure-1">
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Analytics</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Engagement</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Security</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Integrations</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Automations</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Watch demo</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact sales</a>
                            </div>
                            </div>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                        </div>
                        <div className="py-6">
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;