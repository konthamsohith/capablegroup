import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, Reorder, useDragControls } from 'framer-motion';

interface TechItem {
    id: string;
    name: string;
    category: string;
    icon: React.ReactNode;
}

// ─── HIGH-FIDELITY OFFICIAL BRAND LOGOS ──────────────────────────────────────

const Icons = {
    React: () => (
        <svg viewBox="0 0 100 100" className="w-7 h-7">
            <circle cx="50" cy="50" r="8" fill="#61DAFB" />
            <g fill="none" stroke="#61DAFB" strokeWidth="2.5">
                <ellipse cx="50" cy="50" rx="45" ry="18" />
                <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="45" ry="18" transform="rotate(120 50 50)" />
            </g>
        </svg>
    ),
    NextJS: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" className="w-7 h-7"><mask height="180" id=":r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#:r8:mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:r8:paint0_linear_408_134)"></path><rect fill="url(#:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect></g><defs><linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg>
    ),
    VueJS: () => (
        <svg viewBox="0 0 128 128" className="w-7 h-7">
            <path d="M78.8 3.4L64 28.9 49.2 3.4H13.6L64 90.7l50.4-87.3H78.8z" fill="#41B883" />
            <path d="M78.8 3.4L64 28.9 49.2 3.4H36.3L64 51.4l27.7-48H78.8z" fill="#35495E" />
        </svg>
    ),
    TypeScript: () => (
        <svg viewBox="0 0 256 256" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6" /><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF" /></svg>
    ),
    Tailwind: () => (
        <svg viewBox="0 0 128 128" className="w-7 h-7">
            <path d="M64 30.6c-13.9 0-22.6 6.9-26 20.8 5.2-6.9 11.3-9.5 18.2-7.8 4 1 6.8 3.9 9.9 7.1 5.1 5.2 11 11.2 23.9 11.2 13.9 0 22.6-6.9 26-20.8-5.2 6.9-11.3 9.5-18.2 7.8-4-1-6.8-3.9-9.9-7.1C81.1 36.6 75.1 30.6 64 30.6zM38 61.3c-13.9 0-22.6 6.9-26 20.8 5.2-6.9 11.3-9.5 18.2-7.8 4 1 6.8 3.9 9.9 7.1 5.1 5.2 11 11.2 23.9 11.2 13.9 0 22.6-6.9 26-20.8-5.2 6.9-11.3 9.5-18.2 7.8-4-1-6.8-3.9-9.9-7.1-5.1-5.1-11.1-11.2-24-11.2z" fill="#38BDF8" />
        </svg>
    ),
    NodeJS: () => (
        <svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-7 h-7"><defs><linearGradient id="no_a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stopColor="#41873F" /><stop offset="32.88%" stopColor="#418B3D" /><stop offset="63.52%" stopColor="#419637" /><stop offset="93.19%" stopColor="#3FA92D" /><stop offset="100%" stopColor="#3FAE2A" /></linearGradient><linearGradient id="no_c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stopColor="#41873F" /><stop offset="40.32%" stopColor="#54A044" /><stop offset="71.36%" stopColor="#66B848" /><stop offset="90.81%" stopColor="#6CC04A" /></linearGradient><linearGradient id="no_f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stopColor="#6CC04A" /><stop offset="28.64%" stopColor="#66B848" /><stop offset="59.68%" stopColor="#54A044" /><stop offset="86.24%" stopColor="#41873F" /></linearGradient><path id="no_b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /><path id="no_e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /></defs><path fill="url(#no_a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" /><mask id="no_d" fill="#fff"><use xlinkHref="#no_b" /></mask><path fill="url(#no_c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#no_d)" /><mask id="no_g" fill="#fff"><use xlinkHref="#no_e" /></mask><path fill="url(#no_f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#no_g)" /></svg>
    ),
    Python: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="16 16 32 32" className="w-7 h-7"><path fill="url(#py_a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" /><path fill="url(#py_b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z" /><defs><linearGradient id="py_a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stopColor="#387EB8" /><stop offset="1" stopColor="#366994" /></linearGradient><linearGradient id="py_b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stopColor="#FFE052" /><stop offset="1" stopColor="#FFC331" /></linearGradient></defs></svg>
    ),
    Django: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 32 32" className="w-7 h-7"><path d="M14.135 4H18.1v18.169a26.218 26.218 0 0 1-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322 0-4 2.673-6.6 6.816-6.6a6.448 6.448 0 0 1 1.724.2V4Zm0 9.142a3.992 3.992 0 0 0-1.337-.2c-2 0-3.163 1.223-3.163 3.366 0 2.087 1.107 3.239 3.138 3.239a9.355 9.355 0 0 0 1.362-.1v-6.3Z" style={{ fill: "#44b78b" }} /><path d="M24.4 10.059v9.1c0 3.133-.235 4.639-.923 5.938A6.316 6.316 0 0 1 20.237 28l-3.678-1.733a5.708 5.708 0 0 0 3.141-2.629c.566-1.121.745-2.42.745-5.837v-7.742ZM20.441 4.02h3.964v4.028h-3.964z" style={{ fill: "#44b78b" }} /></svg>
    ),
    FastAPI: () => (
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" className="w-7 h-7"><path d="M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128 128-57.33 128-128S198.67 0 128 0Zm-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966L121.33 230.605Z" fill="#009688" /></svg>
    ),
    Claude: () => (
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257" className="w-7 h-7"><path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z" /></svg>
    ),
    LangChain: () => (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <title>LangChain</title>
            <path fill="#000000" strokeWidth="1" d="M6.0988 5.9175C2.7359 5.9175 0 8.6462 0 12s2.736 6.0825 6.0988 6.0825h11.8024C21.2641 18.0825 24 15.3538 24 12s-2.736 -6.0825 -6.0988 -6.0825ZM5.9774 7.851c0.493 0.0124 1.02 0.2496 1.273 0.6228 0.3673 0.4592 0.4778 1.0668 0.8944 1.4932 0.5604 0.6118 1.199 1.1505 1.7161 1.802 0.4892 0.5954 0.8386 1.2937 1.1436 1.9975 0.1244 0.2335 0.1257 0.5202 0.31 0.7197 0.0908 0.1204 0.5346 0.4483 0.4383 0.5645 0.0555 0.1204 0.4702 0.286 0.3263 0.4027 -0.1944 0.04 -0.4129 0.0476 -0.5616 -0.1074 -0.0549 0.126 -0.183 0.0596 -0.2819 0.0432a4 4 0 0 0 -0.025 0.0736c-0.3288 0.0219 -0.5754 -0.3126 -0.732 -0.565 -0.3111 -0.168 -0.6642 -0.2702 -0.982 -0.446 -0.0182 0.2895 0.0452 0.6485 -0.231 0.8353 -0.014 0.5565 0.8436 0.0656 0.9222 0.4804 -0.061 0.0067 -0.1286 -0.0095 -0.1774 0.0373 -0.2239 0.2172 -0.4805 -0.1645 -0.7385 -0.007 -0.3464 0.174 -0.3808 0.3161 -0.8096 0.352 -0.0237 -0.0359 -0.0143 -0.0592 0.0059 -0.0811 0.1207 -0.1399 0.1295 -0.3046 0.3356 -0.3643 -0.2122 -0.0334 -0.3899 0.0833 -0.5686 0.1757 -0.2323 0.095 -0.2304 -0.2141 -0.5878 0.0164 -0.0396 -0.0322 -0.0208 -0.0615 0.0018 -0.0864 0.0908 -0.1107 0.2102 -0.127 0.345 -0.1208 -0.663 -0.3686 -0.9751 0.4507 -1.2813 0.0432 -0.092 0.0243 -0.1265 0.1068 -0.1845 0.1652 -0.05 -0.0548 -0.0123 -0.1212 -0.0099 -0.1857 -0.0598 -0.028 -0.1356 -0.041 -0.1179 -0.1366 -0.1171 -0.0395 -0.1988 0.0295 -0.286 0.0952 -0.0787 -0.0608 0.0532 -0.1492 0.0776 -0.2125 0.0702 -0.1216 0.23 -0.025 0.3111 -0.1126 0.2306 -0.1308 0.552 0.0814 0.8155 0.0455 0.203 0.0255 0.4544 -0.1825 0.3526 -0.39 -0.2171 -0.2767 -0.179 -0.6386 -0.1839 -0.9695 -0.0268 -0.1929 -0.491 -0.4382 -0.6252 -0.6462 -0.1659 -0.1873 -0.295 -0.4047 -0.4243 -0.6182 -0.4666 -0.9008 -0.3198 -2.0584 -0.9077 -2.8947 -0.266 0.1466 -0.6125 0.0774 -0.8418 -0.119 -0.1238 0.1125 -0.1292 0.2598 -0.139 0.4161 -0.297 -0.2962 -0.2593 -0.8559 -0.022 -1.1855 0.0969 -0.1302 0.2127 -0.2373 0.342 -0.3316 0.0292 -0.0213 0.0391 -0.0419 0.0385 -0.0747 0.1174 -0.5267 0.5764 -0.7391 1.0694 -0.7267m12.4071 0.46c0.5575 0 1.0806 0.2159 1.474 0.6082s0.61 0.9145 0.61 1.4704c0 0.556 -0.2167 1.078 -0.61 1.4698v0.0006l-0.902 0.8995a2.08 2.08 0 0 1 -0.8597 0.5166l-0.0164 0.0047 -0.0058 0.0164a2.05 2.05 0 0 1 -0.474 0.7308l-0.9018 0.8995c-0.3934 0.3924 -0.917 0.6083 -1.4745 0.6083s-1.0806 -0.216 -1.474 -0.6083c-0.813 -0.8107 -0.813 -2.1294 0 -2.9402l0.9019 -0.8995a2.056 2.056 0 0 1 0.858 -0.5143l0.017 -0.0053 0.0058 -0.0158a2.07 2.07 0 0 1 0.4752 -0.7337l0.9018 -0.8995c0.3934 -0.3924 0.9171 -0.6083 1.4745 -0.6083zm0 0.8965a1.18 1.18 0 0 0 -0.8388 0.3462l-0.9018 0.8995a1.181 1.181 0 0 0 -0.3427 0.9252l0.0053 0.0572c0.0323 0.2652 0.149 0.5044 0.3374 0.6917 0.13 0.1296 0.2733 0.2114 0.4471 0.2686a0.9 0.9 0 0 1 0.014 0.1582 0.884 0.884 0 0 1 -0.2609 0.6304l-0.0554 0.0554c-0.3013 -0.1028 -0.5525 -0.253 -0.7794 -0.4792a2.06 2.06 0 0 1 -0.5761 -1.0968l-0.0099 -0.0578 -0.0461 0.0368a1.1 1.1 0 0 0 -0.0876 0.0794l-0.9024 0.8995c-0.4623 0.461 -0.4623 1.212 0 1.673 0.2311 0.2305 0.535 0.346 0.8394 0.3461 0.3043 0 0.6077 -0.1156 0.8388 -0.3462l0.9019 -0.8995c0.4623 -0.461 0.4623 -1.2113 0 -1.673a1.17 1.17 0 0 0 -0.4367 -0.2749 1 1 0 0 1 -0.014 -0.1611c0 -0.2591 0.1023 -0.505 0.2901 -0.6923 0.3019 0.1028 0.57 0.2694 0.7962 0.495 0.3007 0.2999 0.4994 0.679 0.5756 1.0968l0.0105 0.0578 0.0455 -0.0373a1.1 1.1 0 0 0 0.0887 -0.0794l0.902 -0.8996c0.4622 -0.461 0.4628 -1.2124 0 -1.6735a1.18 1.18 0 0 0 -0.8395 -0.3462Zm-9.973 5.1567 -0.0006 0.0006c-0.0793 0.3078 -0.1048 0.8318 -0.506 0.847 -0.033 0.1776 0.1228 0.2445 0.2655 0.1874 0.141 -0.0645 0.2081 0.0508 0.2557 0.1657 0.2177 0.0317 0.5394 -0.0725 0.5516 -0.3298 -0.325 -0.1867 -0.4253 -0.5418 -0.5662 -0.8709" />
        </svg>
    ),
    Pinecone: () => (
        <svg role="img" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-7 h-7">
            <title>Pinecone</title>
            <path fill="#201d1e" strokeWidth="1" d="M41.6639 84.2421c2.9707 0 5.379 2.4082 5.379 5.3789 0 2.9708 -2.4083 5.379 -5.379 5.379 -2.9707 0 -5.3789 -2.4082 -5.3789 -5.379 0 -2.9707 2.4082 -5.3789 5.3789 -5.3789Zm29.8425 -9.8142 5.3155 1.5749 -4.2194 14.2407c-0.3687 1.2444 -1.5514 2.0663 -2.8462 1.9781l-1.3033 -0.0894 -0.0319 0.0263 -13.5413 -0.9503 0.3768 -5.5311 9.0978 0.6174 -5.9561 -8.592 4.5561 -3.1588 5.9639 8.6026 2.5881 -8.7184Zm-57.8545 -9.8446 5.5301 0.3917 -0.6477 9.0964 8.5763 -5.9637 3.1659 4.551 -8.5875 5.97 8.7654 2.5828 -1.5668 5.3179 -14.3079 -4.2153c-1.2491 -0.368 -2.0737 -1.5559 -1.9816 -2.8549l1.0538 -14.8759Zm35.7061 -7.746 9.9809 12.0501 -4.4983 3.7259 -5.94 -7.1714 -1.9257 11.026 -5.7538 -1.0058 1.9277 -11.0431 -7.9967 4.7149 -2.9648 -5.0326 13.4392 -7.9173c1.2355 -0.7279 2.8168 -0.4511 3.7315 0.6533Zm27.9244 -8.0846 4.9858 -2.7126 7.2633 13.3498c0.6363 1.1695 0.3741 2.624 -0.6305 3.4977l-1.0276 0.8879 -10.4857 9.1255 -3.7248 -4.2828 7.0495 -6.133 -10.5003 -1.8917 1.0073 -5.5858 10.4929 1.8906 -4.4299 -8.1456ZM18.484 34.7957l3.7558 4.2556 -6.9527 6.1321 10.5203 1.8367 -0.9751 5.5916 -10.5319 -1.8382 4.5238 8.1783 -4.9667 2.7475 -7.37968 -13.3402c-0.64432 -1.1647 -0.39258 -2.6208 0.60541 -3.5016L18.484 34.7957Zm35.5606 -4.3904 9.9471 12.0177 -4.4995 3.7243 -5.9386 -7.1745 -1.9258 11.0293 -5.7537 -1.0058 1.921 -11.0003 -7.966 4.6698 -2.9535 -5.0393 12.2362 -7.1742 0.0121 -0.0466 0.0539 0.007 1.1403 -0.6649c1.2354 -0.724 2.8135 -0.4456 3.7265 0.6575Zm12.8181 -5.9103 2.1755 -5.2425 14.0722 5.8397c1.2282 0.5097 1.9379 1.804 1.7072 3.1136l-0.2343 1.3027 -2.403 13.6692 -5.5899 -0.9847 1.6107 -9.1502 -9.336 5.1598 -2.7436 -4.9688 9.3539 -5.1641 -8.6127 -3.5747ZM40.0554 14.1642l0.2419 5.6708 -9.2957 0.3973 7.011 8.0121 -4.2716 3.7377 -7.0228 -8.0242 -1.6362 9.1609 -5.5873 -0.9994 2.6777 -14.9705c0.234 -1.3084 1.3447 -2.2791 2.6727 -2.3358l1.3154 -0.0588 0.0295 -0.0214 13.8654 -0.5687ZM59.0705 2.07046 68.9726 14.164l-4.5193 3.7004 -5.8771 -7.179 -1.9823 11.0147 -5.7486 -1.0345 1.9856 -11.03946 -8.0241 4.69146 -2.9469 -5.04311L55.3374 1.3991c1.2401 -0.724667 2.8231 -0.439982 3.7331 0.67136Z" />
        </svg>
    ),
    AWS: () => (
        <svg role="img" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
            <path fill="#252f3e" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z" />
            <path fill="#f90" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z" />
        </svg>
    ),
    GCP: () => (
        <svg role="img" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-7 h-7">
            <title>Google Cloud</title>
            <path fill="#EA4335" d="M10.313 5.376l1.887-1.5-.332-.414a5.935 5.935 0 00-5.586-1.217 5.89 5.89 0 00-3.978 4.084c-.03.113.312-.098.463-.056l2.608-.428s.127-.124.201-.205c1.16-1.266 3.126-1.432 4.465-.354l.272.09z" />
            <path fill="#4285F4" d="M13.637 6.3a5.835 5.835 0 00-1.77-2.838l-1.83 1.82a3.226 3.226 0 011.193 2.564v.323c.9 0 1.63.725 1.63 1.62 0 .893-.73 1.619-1.63 1.619l-3.257-.003-.325.035v2.507l.325.053h3.257a4.234 4.234 0 004.08-2.962A4.199 4.199 0 0013.636 6.3z" />
            <path fill="#34A853" d="M4.711 13.999H7.97v-2.594H4.71c-.232 0-.461-.066-.672-.161l-.458.14-1.313 1.297-.114.447a4.254 4.254 0 002.557.87z" />
            <path fill="#FBBC05" d="M4.711 5.572A4.234 4.234 0 00.721 8.44a4.206 4.206 0 001.433 4.688l1.89-1.884a1.617 1.617 0 01.44-3.079 1.63 1.63 0 011.714.936l1.89-1.878A4.24 4.24 0 004.71 5.572z" />
        </svg>
    ),
    Vercel: () => (
        <svg viewBox="0 0 128 128" className="w-7 h-7">
            <path d="M64 0L128 111H0L64 0z" fill="currentColor" />
        </svg>
    ),
    PostgreSQL: () => (
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 432.071 445.383" className="w-7 h-7"><g style={{ fillRule: "nonzero", clipRule: "nonzero", fill: "none", stroke: "#fff", strokeWidth: "12.4651", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "4" }}><path d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107" style={{ fill: "#000", stroke: "#000", strokeWidth: "37.3953", strokeLinecap: "butt", strokeLinejoin: "miter" }} /><path stroke="none" d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z" style={{ fill: "#336791", stroke: "none" }} /><path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329" /><path d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762" style={{ strokeLinejoin: "bevel" }} /><path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z" /><path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938" /><path d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z" style={{ fill: "#fff", strokeWidth: "4.155", strokeLinecap: "butt", strokeLinejoin: "miter" }} /><path d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z" style={{ fill: "#fff", strokeWidth: "2.0775", strokeLinecap: "butt", strokeLinejoin: "miter" }} /><path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435" /></g></svg>
    ),
    Supabase: () => (
        <svg viewBox="0 0 128 128" className="w-7 h-7">
            <path d="M64 0L12 64h44v64l52-64H64V0z" fill="#3ECF8E" />
        </svg>
    )
};

const allTech: TechItem[] = [
    { id: 'react', name: 'React', category: 'Frontend', icon: <Icons.React /> },
    { id: 'nextjs', name: 'Next.js', category: 'Frontend', icon: <Icons.NextJS /> },
    { id: 'vuejs', name: 'Vue.js', category: 'Frontend', icon: <Icons.VueJS /> },
    { id: 'typescript', name: 'TypeScript', category: 'Frontend', icon: <Icons.TypeScript /> },
    { id: 'tailwind', name: 'Tailwind', category: 'Frontend', icon: <Icons.Tailwind /> },
    { id: 'nodejs', name: 'Node.js', category: 'Backend', icon: <Icons.NodeJS /> },
    { id: 'python', name: 'Python', category: 'Backend', icon: <Icons.Python /> },
    { id: 'django', name: 'Django', category: 'Backend', icon: <Icons.Django /> },
    { id: 'fastapi', name: 'FastAPI', category: 'Backend', icon: <Icons.FastAPI /> },
    { id: 'claude', name: 'Claude', category: 'AI & ML', icon: <Icons.Claude /> },
    { id: 'langchain', name: 'LangChain', category: 'AI & ML', icon: <Icons.LangChain /> },
    { id: 'pinecone', name: 'Pinecone', category: 'AI & ML', icon: <Icons.Pinecone /> },
    { id: 'aws', name: 'AWS', category: 'Cloud & DB', icon: <Icons.AWS /> },
    { id: 'gcp', name: 'GCP', category: 'Cloud & DB', icon: <Icons.GCP /> },
    { id: 'vercel', name: 'Vercel', category: 'Cloud & DB', icon: <Icons.Vercel /> },
    { id: 'postgresql', name: 'PostgreSQL', category: 'Cloud & DB', icon: <Icons.PostgreSQL /> },
    { id: 'supabase', name: 'Supabase', category: 'Cloud & DB', icon: <Icons.Supabase /> },
];

const categories = ['Frontend', 'Backend', 'AI & ML', 'Cloud & DB'];

function StackListItem({ tech, onRemove }: { tech: TechItem; onRemove: () => void }) {
    const dragControls = useDragControls();
    return (
        <Reorder.Item
            value={tech.id}
            as="div"
            dragListener={false}
            dragControls={dragControls}
            transition={{ duration: 0.2 }}
            onDragStart={() => {
                document.documentElement.classList.add('dnd-dragging');
                document.body.classList.add('dnd-dragging');
            }}
            onDragEnd={() => {
                document.documentElement.classList.remove('dnd-dragging');
                document.body.classList.remove('dnd-dragging');
            }}
            whileDrag={{ cursor: 'grabbing' }}
            className="w-full flex items-center justify-between p-4 bg-white text-gray-900 font-medium text-[13px] rounded-xl border border-gray-200 shadow-sm group hover:border-[#ff6321] transition-colors cursor-default"
        >
            <div
                className="flex items-center gap-4 flex-1 min-w-0 cursor-grab active:cursor-grabbing touch-none"
                onPointerDown={(e) => dragControls.start(e)}
            >
                <div className="w-6 h-6 rounded flex items-center justify-center text-gray-400 flex-shrink-0 pointer-events-none" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M8 6h2v2H8V6zm0 5h2v2H8v-2zm0 5h2v2H8v-2zm5-10h2v2h-2V6zm0 5h2v2h-2v-2zm0 5h2v2h-2v-2z" /></svg>
                </div>
                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 p-1.5 flex-shrink-0 pointer-events-none">
                    {tech.icon}
                </div>
                <div className="flex flex-col text-left min-w-0 select-none">
                    <span className="leading-tight text-[14px] font-bold truncate">
                        {tech.name}
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5 font-semibold">
                        {tech.category} Module
                    </span>
                </div>
            </div>
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove();
                }}
                className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex flex-shrink-0 items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 border border-transparent transition-all opacity-0 group-hover:opacity-100"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </Reorder.Item>
    );
}

const TechStackBuilder: React.FC = () => {
    const navigate = useNavigate();
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const dropZoneRef = useRef<HTMLDivElement>(null);
    const [isDraggingOver, setIsDraggingOver] = useState(false);

    const toggleTech = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [id, ...prev]
        );
    };

    const handleHtml5DragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        setIsDraggingOver(true);
    };

    const handleHtml5DragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        setIsDraggingOver(true);
    };

    const handleHtml5DragLeave = (e: React.DragEvent) => {
        const related = e.relatedTarget as Node | null;
        if (!related || !e.currentTarget.contains(related)) setIsDraggingOver(false);
    };

    const handleHtml5Drop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDraggingOver(false);
        const techId = e.dataTransfer.getData('text/plain');
        if (techId && !selectedIds.includes(techId)) {
            toggleTech(techId);
        }
    };

    const handleHtml5DragStart = (e: React.DragEvent, techId: string) => {
        e.dataTransfer.setData('text/plain', techId);
        e.dataTransfer.effectAllowed = 'copy';
        if (e.dataTransfer.setDragImage && e.currentTarget) {
            const el = e.currentTarget as HTMLElement;
            e.dataTransfer.setDragImage(el, 0, 0);
        }
        const root = document.documentElement;
        const body = document.body;
        root.classList.add('dnd-dragging');
        body.classList.add('dnd-dragging');
        root.style.cursor = 'grabbing';
        body.style.cursor = 'grabbing';
        const source = e.currentTarget;
        const onDragEnd = () => {
            root.classList.remove('dnd-dragging');
            body.classList.remove('dnd-dragging');
            root.style.cursor = '';
            body.style.cursor = '';
            source.removeEventListener('dragend', onDragEnd);
        };
        source.addEventListener('dragend', onDragEnd);
    };

    const selectedTech = selectedIds.map(id => allTech.find(t => t.id === id)).filter((t): t is TechItem => t != null);

    return (
        <section id="tech-configurator" className="py-24 md:py-32 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6321]/10 text-[#ff6321] text-xs font-bold tracking-widest uppercase mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#ff6321] animate-pulse" />
                        Infrastructure Configurator
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        Architect Your <span className="text-[#ff6321]">Stack</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-[#69686e] max-w-2xl mx-auto leading-relaxed"
                    >
                        Select from our curated library of premium modules below to build your custom project foundation and generate a lead quote.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative min-h-[400px] lg:min-h-[600px] w-full items-start">
                    {/* Available Tech Library */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 lg:pr-4 relative z-30">
                        {categories.map(cat => (
                            <div key={cat} className="flex flex-col w-full relative z-20">
                                <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#ff6321] mb-6 flex items-center gap-2">
                                    <span className="w-1 h-3 bg-[#ff6321] rounded-full" />
                                    {cat}
                                </h4>
                                <div className="flex flex-col gap-3 w-full">
                                    {allTech.filter(t => t.category === cat).map(tech => {
                                        const isSelected = selectedIds.includes(tech.id);
                                        return (
                                            <motion.div
                                                role="button"
                                                tabIndex={0}
                                                key={tech.id}
                                                layout
                                                draggable={!isSelected}
                                                onDragStart={(e: React.DragEvent) => {
                                                    if (!isSelected) handleHtml5DragStart(e, tech.id);
                                                }}
                                                whileHover={!isSelected ? { scale: 1.02, y: -2 } : {}}
                                                whileTap={!isSelected ? { scale: 0.95 } : {}}
                                                onClick={() => {
                                                    toggleTech(tech.id);
                                                }}
                                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTech(tech.id); } }}
                                                className={`p-3 lg:p-4 flex flex-row items-center gap-3 rounded-[16px] font-bold text-[13px] transition-all duration-300 shadow-sm touch-none text-left w-full relative overflow-hidden group select-none ${isSelected
                                                        ? 'bg-gray-100 text-gray-500 border-2 border-[#ff6321] shadow-none cursor-default opacity-75'
                                                        : 'bg-white text-black border border-gray-200 hover:border-[#ff6321] hover:shadow-md cursor-grab'
                                                    }`}
                                            >
                                                <div className={`w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-gray-100 grayscale opacity-40' : 'bg-gray-50 group-hover:bg-[#ff6321]/5'}`} aria-hidden="true">
                                                    {tech.icon}
                                                </div>
                                                <span className="leading-tight flex-1 tracking-tight truncate">
                                                    {tech.name}
                                                </span>

                                                {/* Interactive Indicator */}
                                                <div className={`w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isSelected
                                                    ? 'bg-[#ff6321] border-[#ff6321] text-white'
                                                    : 'bg-transparent border-gray-300 text-gray-400 group-hover:border-[#ff6321] group-hover:text-[#ff6321]'
                                                    }`}>
                                                    {isSelected ? (
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                                    ) : (
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Selected Stack Panel */}
                    <div className="w-full lg:w-1/3 flex-shrink-0 sticky top-32 self-start z-20">
                        <motion.div
                            ref={dropZoneRef}
                            data-infrastructure-stack-drop
                            onDragEnter={handleHtml5DragEnter}
                            onDragOver={handleHtml5DragOver}
                            onDragLeave={handleHtml5DragLeave}
                            onDrop={handleHtml5Drop}
                            animate={{
                                borderColor: isDraggingOver ? '#ff6321' : 'rgba(255,99,33,0.2)',
                                backgroundColor: isDraggingOver ? '#fff8f5' : '#ffffff',
                                scale: isDraggingOver ? 1.02 : 1,
                                boxShadow: isDraggingOver ? '0 20px 40px rgba(255,99,33,0.1)' : '0 8px 30px rgb(0,0,0,0.04)'
                            }}
                            className={`rounded-[32px] p-8 md:p-10 border-2 border-[#ff6321]/20 bg-white text-gray-900 relative overflow-hidden transition-all duration-300 cursor-grab ${isDraggingOver ? '!cursor-grabbing' : ''}`}
                        >
                            {/* Glowing ambient background effect when dragging */}
                            {isDraggingOver && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-[#ff6321]/10 blur-[80px] rounded-full pointer-events-none transition-opacity" />
                            )}

                            {/* the large background count removed per request */}

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold tracking-tight mb-8 flex items-center justify-between">
                                    Infrastructure Stack
                                    {selectedIds.length > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-7 h-7 rounded-lg bg-gray-100 text-gray-900 text-[12px] flex items-center justify-center border border-gray-200 font-bold"
                                        >
                                            {selectedIds.length}
                                        </motion.span>
                                    )}
                                </h3>

                                <div className="min-h-[260px] max-h-[320px] overflow-y-auto mb-2 pr-2 custom-scrollbar">
                                    {selectedIds.length === 0 ? (
                                        <div className="h-[220px] flex flex-col items-center justify-center text-center p-8 border border-dashed border-gray-300 rounded-[20px] bg-gray-50/50">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 border border-gray-200 shadow-sm">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-400">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-500 text-[13px] font-medium leading-relaxed max-w-[200px]">
                                                {isDraggingOver ? 'Drop module here to install' : 'Configure your stack by adding modules from the library.'}
                                            </p>
                                        </div>
                                    ) : (
                                        <Reorder.Group
                                            as="div"
                                            axis="y"
                                            values={selectedIds}
                                            onReorder={setSelectedIds}
                                            className="flex flex-col gap-2 pb-28 pt-2"
                                        >
                                            {selectedIds.map((id) => {
                                                const tech = allTech.find(t => t.id === id);
                                                if (!tech) return null;
                                                return (
                                                    <StackListItem
                                                        key={tech.id}
                                                        tech={tech}
                                                        onRemove={() => toggleTech(tech.id)}
                                                    />
                                                );
                                            })}
                                        </Reorder.Group>
                                    )}
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-white pointer-events-none z-20" />

                                <div className="relative z-30 pt-4 border-t border-gray-100">
                                    <motion.button
                                        disabled={selectedIds.length === 0}
                                        whileHover={selectedIds.length > 0 ? { scale: 1.02 } : {}}
                                        whileTap={selectedIds.length > 0 ? { scale: 0.98 } : {}}
                                        onClick={() => setIsQuoteModalOpen(true)}
                                        className={`w-full py-4 rounded-[16px] font-bold text-[13px] tracking-widest uppercase transition-all duration-300 ${selectedIds.length > 0
                                            ? 'bg-[#ff6321] text-white hover:bg-[#e0541a] shadow-[0_4_20px_rgba(255,99,33,0.3)]'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                            }`}
                                    >
                                        GENERATE PROJECT QUOTE
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Quote result – professional popup */}
            <AnimatePresence>
                {isQuoteModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="quote-popup-title">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsQuoteModalOpen(false)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ type: 'spring', damping: 28, stiffness: 360 }}
                            className="relative bg-white w-full max-w-md rounded-[20px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] border border-black/[0.06] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6">
                                {/* Header with close */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-10 h-10 rounded-xl bg-[#ff6321]/10 flex items-center justify-center flex-shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="#ff6321" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0">
                                            <h2 id="quote-popup-title" className="text-[17px] font-semibold text-black tracking-tight">Quote strategy ready</h2>
                                            <p className="text-[13px] text-[#69686e] mt-0.5">Baseline engagement prepared for your stack</p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setIsQuoteModalOpen(false)}
                                        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[#69686e] hover:bg-black/5 hover:text-black transition-colors"
                                        aria-label="Close"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>

                                {/* Summary line */}
                                <p className="text-[13px] text-[#69686e] leading-relaxed mb-4">
                                    We've captured your {selectedIds.length}-tool configuration. Standard engagement: <span className="font-medium text-black">Enterprise</span>, estimated delivery <span className="font-medium text-black">2–3 weeks</span>.
                                </p>

                                {/* Selected stack */}
                                <div className="mb-5">
                                    <span className="text-[11px] font-semibold tracking-widest uppercase text-[#69686e] mb-2 block">Selected stack</span>
                                    <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-[#f5f4f3]/80 border border-black/[0.06]">
                                        {selectedTech.map((t) => (
                                            <span key={t.id} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg text-[12px] font-medium text-black border border-black/[0.06] shadow-sm">
                                                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4">{t.icon}</span>
                                                {t.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsQuoteModalOpen(false);
                                            navigate('/contact', {
                                                state: {
                                                    fromQuote: true,
                                                    stackNames: selectedTech.map(t => t.name),
                                                    stackIds: selectedIds,
                                                },
                                            });
                                        }}
                                        className="flex-1 py-3 px-4 bg-[#ff6321] text-white rounded-xl text-[13px] font-semibold hover:bg-[#e0541a] transition-colors"
                                    >
                                        Request quote
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsQuoteModalOpen(false)}
                                        className="py-3 px-5 rounded-xl text-[13px] font-medium text-[#69686e] border border-black/10 hover:bg-black/[0.04] hover:border-black/15 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TechStackBuilder;
