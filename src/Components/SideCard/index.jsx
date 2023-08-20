import React from "react";

function index() {
  return (
    <div className="hidden lg:block lg:col-span-5 bg-white p-4 rounded-md shadow">
      <div className="flex items-center pb-8 border-b-2 border-[#EDF0FF]">
        <img
          className="rounded-full h-16 w-16 object-cover"
          src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          alt="Profile"
        />
        <div className="ml-4">
          <h3 className="text-xl">Lucinda</h3>
          <p className="text-main-color">Free</p>
        </div>
      </div>
      <div className="flex flex-col border-b-2 border-[#EDF0FF]">
        <div className="flex items-center my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 11 10"
          >
            <g
              id="Group_17"
              data-name="Group 17"
              transform="translate(-96 -272)"
            >
              <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="5"
                height="10"
                rx="1"
                transform="translate(96 272)"
                fill="#4d60ff"
              />
              <rect
                id="Rectangle_6"
                data-name="Rectangle 6"
                width="5"
                height="5"
                rx="1"
                transform="translate(102 272)"
                fill="#4d60ff"
              />
              <rect
                id="Rectangle_7"
                data-name="Rectangle 7"
                width="5"
                height="4"
                rx="1"
                transform="translate(102 278)"
                fill="#4d60ff"
              />
            </g>
          </svg>

          <p className="ml-2">Workspaces</p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 11 11"
            >
              <g
                id="Group_18"
                data-name="Group 18"
                transform="translate(-115 -304)"
              >
                <circle
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  transform="translate(118 304)"
                  fill="#4d60ff"
                />
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M5.5,0C8.538,0,11,1.9,11,4.243s-11,2.343-11,0S2.462,0,5.5,0Z"
                  transform="translate(115 309)"
                  fill="#4d60ff"
                />
              </g>
            </svg>

            <p className="ml-2">Members</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
          >
            <g
              id="Group_25"
              data-name="Group 25"
              transform="translate(-189 -305.5)"
            >
              <line
                id="Line_4"
                data-name="Line 4"
                y1="9"
                transform="translate(193.5 305.5)"
                fill="none"
                stroke="#4d60ff"
                strokeWidth="1"
              />
              <line
                id="Line_5"
                data-name="Line 5"
                y1="9"
                transform="translate(198 310) rotate(90)"
                fill="none"
                stroke="#4d60ff"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
        <div className="flex items-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 11 11.004"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M10.965,4.893a.358.358,0,0,0-.354-.271,1.211,1.211,0,0,1-.832-2.114.306.306,0,0,0,.034-.417,5.549,5.549,0,0,0-.873-.88.307.307,0,0,0-.419.034,1.264,1.264,0,0,1-1.371.309,1.226,1.226,0,0,1-.742-1.2A.308.308,0,0,0,6.137.037,5.545,5.545,0,0,0,4.9.033a.307.307,0,0,0-.273.314A1.223,1.223,0,0,1,3.873,1.52a1.277,1.277,0,0,1-1.362-.309A.306.306,0,0,0,2.1,1.177a5.462,5.462,0,0,0-.889.88.309.309,0,0,0,.032.419A1.218,1.218,0,0,1,1.55,3.852a1.272,1.272,0,0,1-1.2.74.3.3,0,0,0-.317.271,5.413,5.413,0,0,0,0,1.25.354.354,0,0,0,.359.271,1.211,1.211,0,0,1,1.131.755A1.225,1.225,0,0,1,1.219,8.5a.306.306,0,0,0-.034.416,5.443,5.443,0,0,0,.871.88.307.307,0,0,0,.419-.032,1.269,1.269,0,0,1,1.373-.311,1.218,1.218,0,0,1,.743,1.194.308.308,0,0,0,.271.322A5.7,5.7,0,0,0,5.5,11a5.175,5.175,0,0,0,.6-.034.307.307,0,0,0,.273-.316,1.221,1.221,0,0,1,.752-1.173,1.27,1.27,0,0,1,1.359.314.306.306,0,0,0,.415.034,5.55,5.55,0,0,0,.889-.88.307.307,0,0,0-.032-.419,1.211,1.211,0,0,1,.819-2.119h.068a.308.308,0,0,0,.322-.271,5.643,5.643,0,0,0,0-1.247ZM5.507,7.348A1.837,1.837,0,1,1,6.8,6.81a1.835,1.835,0,0,1-1.3.538"
              transform="translate(0.001 0)"
              fill="#4d60ff"
            />
          </svg>

          <p className="ml-2">Workspace settings</p>
        </div>
      </div>
      <div className="flex flex-col border-b-2 border-[#EDF0FF] my-3">
        <h3 className="font-bold">Workspace views</h3>

        <div className="flex items-center my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 11 10"
          >
            <g
              id="Group_17"
              data-name="Group 17"
              transform="translate(-96 -272)"
            >
              <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="5"
                height="10"
                rx="1"
                transform="translate(96 272)"
                fill="#4d60ff"
              />
              <rect
                id="Rectangle_6"
                data-name="Rectangle 6"
                width="5"
                height="5"
                rx="1"
                transform="translate(102 272)"
                fill="#4d60ff"
              />
              <rect
                id="Rectangle_7"
                data-name="Rectangle 7"
                width="5"
                height="4"
                rx="1"
                transform="translate(102 278)"
                fill="#4d60ff"
              />
            </g>
          </svg>

          <p className="ml-2">Table</p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 11 11"
            >
              <g
                id="Group_18"
                data-name="Group 18"
                transform="translate(-115 -304)"
              >
                <circle
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  transform="translate(118 304)"
                  fill="#4d60ff"
                />
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M5.5,0C8.538,0,11,1.9,11,4.243s-11,2.343-11,0S2.462,0,5.5,0Z"
                  transform="translate(115 309)"
                  fill="#4d60ff"
                />
              </g>
            </svg>

            <p className="ml-2">Calendar</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="9"
            viewBox="0 0 9 9"
          >
            <g
              id="Group_25"
              data-name="Group 25"
              transform="translate(-189 -305.5)"
            >
              <line
                id="Line_4"
                data-name="Line 4"
                y1="9"
                transform="translate(193.5 305.5)"
                fill="none"
                stroke="#4d60ff"
                strokeWidth="1"
              />
              <line
                id="Line_5"
                data-name="Line 5"
                y1="9"
                transform="translate(198 310) rotate(90)"
                fill="none"
                stroke="#4d60ff"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col  my-3">
        <h3 className="font-bold">Your boards</h3>
        <div className="flex items-center my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 11 10"
          >
            <g
              id="Group_17"
              data-name="Group 17"
              transform="translate(-96 -272)"
            >
              <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="5"
                height="10"
                rx="1"
                transform="translate(96 272)"
                fill="#4d60ff"
              />
              <rect
                id="Rectangle_6"
                data-name="Rectangle 6"
                width="5"
                height="5"
                rx="1"
                transform="translate(102 272)"
                fill="#4d60ff"
              />
              <rect
                id="Rectangle_7"
                data-name="Rectangle 7"
                width="5"
                height="4"
                rx="1"
                transform="translate(102 278)"
                fill="#4d60ff"
              />
            </g>
          </svg>
          <p className="ml-2">Mo</p>
        </div>
      </div>
    </div>
  );
}

export default index;
