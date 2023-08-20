import React from "react";

function index() {
  return (
    <div className="optionBar flex items-center justify-between">
      <div className="flex items-center">
        <h3 className="font-bold">Lucinda</h3>
        <button
          className="bg-white border-2 border-main-border p-2 rounded-md mx-2
        hidden md:block md:col-span-3 
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-main-color"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </button>
        <button className="hidden md:flex md:col-span-3  items-center bg-white border-2 border-main-border p-2 rounded-md mx-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.963"
            height="14.138"
            viewBox="0 0 11.963 14.138"
          >
            <g
              id="Group_33"
              data-name="Group 33"
              transform="translate(0.29 0.29)"
            >
              <g
                id="Group_34"
                data-name="Group 34"
                transform="translate(0.21 0.21)"
              >
                <rect
                  id="Rectangle_9"
                  data-name="Rectangle 9"
                  width="10.963"
                  height="8.207"
                  rx="2"
                  transform="translate(0 4.931)"
                  fill="#edf0ff"
                  stroke="#4d60ff"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M12.866.5h0a2.585,2.585,0,0,0-2.585,2.585V5.431h5.171V3.085A2.585,2.585,0,0,0,12.866.5Z"
                  transform="translate(-7.385 -0.5)"
                  fill="none"
                  stroke="#4d60ff"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M16.822,27.737a1.59,1.59,0,1,1-1.59-1.59,1.59,1.59,0,0,1,1.59,1.59"
                  transform="translate(-9.751 -18.553)"
                  fill="#4d60ff"
                />
              </g>
            </g>
          </svg>
          <span className="ml-2">Private</span>
        </button>
        <button className="hidden md:flex md:col-span-3 items-center bg-white border-2 border-main-border p-2 rounded-md mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="10"
            viewBox="0 0 11 10"
          >
            <g
              id="Group_36"
              data-name="Group 36"
              transform="translate(-96 -272)"
            >
              <g
                id="Rectangle_5"
                data-name="Rectangle 5"
                transform="translate(96 272)"
                fill="#edf0ff"
                stroke="#4d60ff"
                strokeWidth="1"
              >
                <rect width="5" height="10" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="4"
                  height="9"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectangle_6"
                data-name="Rectangle 6"
                transform="translate(102 272)"
                fill="#edf0ff"
                stroke="#4d60ff"
                strokeWidth="1"
              >
                <rect width="5" height="5" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="4"
                  height="4"
                  rx="0.5"
                  fill="none"
                />
              </g>
              <g
                id="Rectangle_7"
                data-name="Rectangle 7"
                transform="translate(102 278)"
                fill="#edf0ff"
                stroke="#4d60ff"
                strokeWidth="1"
              >
                <rect width="5" height="4" rx="1" stroke="none" />
                <rect
                  x="0.5"
                  y="0.5"
                  width="4"
                  height="3"
                  rx="0.5"
                  fill="none"
                />
              </g>
            </g>
          </svg>
          <span className="ml-2">Board</span>
        </button>
        <button className="hidden md:flex md:col-span-3 bg-white border-2 border-main-border p-2 rounded-md mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-main-color"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center">
        <button className="hidden md:flex md:col-span-3 items-center bg-white border-2 border-main-border p-2 rounded-md mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.869"
            height="10.885"
            viewBox="0 0 10.869 10.885"
          >
            <g
              id="Group_40"
              data-name="Group 40"
              transform="translate(0.283 0.432)"
            >
              <g
                id="Group_41"
                data-name="Group 41"
                transform="translate(0.07 0.1)"
              >
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M21.1.8a.242.242,0,0,0-.17-.17,4.16,4.16,0,0,0-3.865,1.1L15.247,3.548l-.86-.279h0a1.563,1.563,0,0,0-1.6.388l-.533.533a.243.243,0,0,0,0,.339l1.163,1.163-.666,1.1a.242.242,0,0,0,.036.291l1.854,1.842a.242.242,0,0,0,.291.048l1.1-.654h.012L17.21,9.486h0a.242.242,0,0,0,.339,0l.533-.533a1.563,1.563,0,0,0,.388-1.6l-.279-.86,1.818-1.818A4.225,4.225,0,0,0,21.1.8Z"
                  transform="translate(-11.239 -0.5)"
                  fill="#edf0ff"
                  stroke="#4d60ff"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
                <line
                  id="Line_8"
                  data-name="Line 8"
                  x2="4.956"
                  y2="4.956"
                  transform="translate(1.015 4.029)"
                  fill="none"
                  stroke="#4d60ff"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
                <line
                  id="Line_9"
                  data-name="Line 9"
                  x1="1.128"
                  y2="1.128"
                  transform="translate(0 7.086)"
                  fill="none"
                  stroke="#4d60ff"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
                <line
                  id="Line_10"
                  data-name="Line 10"
                  x1="1.706"
                  y2="1.706"
                  transform="translate(0.315 7.979)"
                  fill="none"
                  stroke="#4d60ff"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
                <line
                  id="Line_11"
                  data-name="Line 11"
                  x1="1.128"
                  y2="1.128"
                  transform="translate(1.786 8.872)"
                  fill="none"
                  stroke="#4d60ff"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                />
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M82.345,23.619a.814.814,0,1,0,.786-.211.814.814,0,0,0-.786.211"
                  transform="translate(-75.574 -21.552)"
                  fill="#4d60ff"
                />
              </g>
            </g>
          </svg>
          <span className="ml-2">Power-Ups</span>
        </button>
        <button className="hidden md:flex md:col-span-3 items-center bg-white border-2 border-main-border p-2 rounded-md mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.691"
            height="10.644"
            viewBox="0 0 9.691 10.644"
          >
            <path
              id="Path_17"
              data-name="Path 17"
              d="M0,5.952H3.365L2.53,10,7.542,4.048H4.178L5.012,0Z"
              transform="translate(1.075 0.322)"
              fill="#edf0ff"
              stroke="#4d60ff"
              strokeWidth="1"
            />
          </svg>

          <span className="ml-2">Automation</span>
        </button>
        <button className="hidden md:flex md:col-span-3 items-center bg-white border-2 border-main-border p-2 rounded-md mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.557"
            height="6"
            viewBox="0 0 9.557 6"
          >
            <g
              id="Group_44"
              data-name="Group 44"
              transform="translate(-323.012 -153)"
            >
              <path
                id="Path_18"
                data-name="Path 18"
                d="M323.012,151.5h9.557"
                transform="translate(0 2)"
                fill="none"
                stroke="#4d60ff"
                strokeWidth="1"
              />
              <path
                id="Path_19"
                data-name="Path 19"
                d="M323.012,151.5h7.09"
                transform="translate(1.234 4.5)"
                fill="none"
                stroke="#4d60ff"
                strokeWidth="1"
              />
              <path
                id="Path_20"
                data-name="Path 20"
                d="M323.012,151.5h4.775"
                transform="translate(2.391 7)"
                fill="none"
                stroke="#4d60ff"
                strokeWidth="1"
              />
            </g>
          </svg>

          <span className="ml-2">Filter</span>
        </button>
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          className="rounded-full mx-2"
          style={{ height: "50px", width: "50px" }}
          alt=""
          loading="lazy"
        />
        <button className="hidden md:block md:col-span-3 mx-2 bg-white border-2 border-main-border p-2 rounded-md">
          <span>Share</span>
        </button>
        <button className="mx-2 bg-[#EDF0FF] border-2 border-main-border rounded-md p-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="16"
            className="font-main-color"
            viewBox="0 0 4 16"
          >
            <g
              id="Group_47"
              data-name="Group 47"
              transform="translate(-608 -147)"
            >
              <circle
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="2"
                cy="2"
                r="2"
                transform="translate(608 147)"
                fill="#4d60ff"
              />
              <circle
                id="Ellipse_6"
                data-name="Ellipse 6"
                cx="2"
                cy="2"
                r="2"
                transform="translate(608 153)"
                fill="#4d60ff"
              />
              <circle
                id="Ellipse_7"
                data-name="Ellipse 7"
                cx="2"
                cy="2"
                r="2"
                transform="translate(608 159)"
                fill="#4d60ff"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default index;
