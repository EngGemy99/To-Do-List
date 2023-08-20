import React, { useContext, useEffect, useRef, useState } from "react";
import { Modal, Ripple, initTE } from "tw-elements";
import { ToDoTask } from "../../config/axiosConfig";
import Tasks from "../../Context/ToDo";

function Model({ state, title, setIsAdding }) {
  const { setTasks } = useContext(Tasks);

  useEffect(() => {
    initTE({ Modal, Ripple });
  }, []);

  const [loading, setLoading] = useState(false);
  const descriptionRef = useRef(null);

  const handleAdd = async () => {
    const description = descriptionRef.current.value;
    setLoading(true);
    try {
      const { data } = await ToDoTask.post("toDos", {
        task: title,
        description,
        state,
      });
      setTasks((prev) => [...prev, data.toDo]);
    } catch (error) {
      console.log(error);
    } finally {
      descriptionRef.current.value = "";
      setLoading(false);
      setIsAdding(false);
      document.querySelector("[data-te-backdrop-show]").remove();
      document.querySelector("body").style.overflow = "scroll";
    }
  };
  return (
    <>
      <button
        type="button"
        className="mainBtn mr-3"
        data-te-toggle="modal"
        data-te-target="#exampleModal"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Add Card
      </button>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-[#4d60ffa8]"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out mx-auto w-[80%] top-10"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className=" rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel"
              >
                {title}
              </h5>
              <p className=" text-[#707070]dark:text-neutral-200">
                in the {state}
              </p>
            </div>

            <div className="relative flex-auto p-4" data-te-modal-body-ref>
              <div className="flex flex-col lg:flex-row bg-white  rounded gap-3">
                {/* right side */}
                <div className="mb-4 lg:mb-0 lg:w-7/10 flex-[2] lg:pr-4 ">
                  <div>
                    <h4 className="font-bold mb-3">Notifications</h4>
                    <button className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
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

                      <span className="ml-3 text-main-color">Watch</span>
                    </button>
                  </div>
                  <div>
                    <h1 className="font-bold mb-3 text-2xl">Description</h1>
                    <div className="border rounded-md">
                      <div className="options py-3 px-2 flex gap-2">
                        <button className="flex items-center mr-2 border-r-2 border-gray-200 px-2">
                          <span className="mr-2">Aa</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 7.663 5.246"
                          >
                            <path
                              id="Path_23"
                              data-name="Path 23"
                              d="M173.267,97.784l3.125,3.125,3.125-3.125"
                              transform="translate(-172.56 -97.077)"
                              fill="none"
                              stroke="#4d60ff"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
                        <button className="flex items-center mr-2 border-r-2 border-gray-200 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="22"
                            viewBox="0 0 11 22"
                          >
                            <text
                              id="B"
                              transform="translate(0 18)"
                              fill="#4d60ff"
                              fontSize="17"
                              fontFamily="SegoeUI-Bold, Segoe UI"
                              fontWeight="700"
                            >
                              <tspan x="0" y="0">
                                B
                              </tspan>
                            </text>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8.578"
                            height="13.154"
                            viewBox="0 0 8.578 13.154"
                            className="mx-3"
                          >
                            <path
                              id="Path_21"
                              data-name="Path 21"
                              d="M2.3,0V1.879H4.424l-2.3,9.4H0v1.879H6.276V11.275H4.153l2.3-9.4H8.577V0Z"
                              transform="translate(0 0)"
                              fill="#4d60ff"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="4"
                            viewBox="0 0 14 4"
                          >
                            <g
                              id="Group_48"
                              data-name="Group 48"
                              transform="translate(13.217 0.439) rotate(90)"
                            >
                              <circle
                                id="Ellipse_5"
                                data-name="Ellipse 5"
                                cx="2"
                                cy="2"
                                r="2"
                                transform="translate(-0.439 -0.783)"
                                fill="#4d60ff"
                              />
                              <circle
                                id="Ellipse_6"
                                data-name="Ellipse 6"
                                cx="2"
                                cy="2"
                                r="2"
                                transform="translate(-0.439 4.217)"
                                fill="#4d60ff"
                              />
                              <circle
                                id="Ellipse_7"
                                data-name="Ellipse 7"
                                cx="2"
                                cy="2"
                                r="2"
                                transform="translate(-0.439 9.217)"
                                fill="#4d60ff"
                              />
                            </g>
                          </svg>
                        </button>
                        <button className="flex items-center mr-2 border-r-2 border-gray-200 px-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="10"
                            viewBox="0 0 16 10"
                            className="mr-3"
                          >
                            <g
                              id="Group_79"
                              data-name="Group 79"
                              transform="translate(-2.002 -0.281)"
                            >
                              <g
                                id="Group_76"
                                data-name="Group 76"
                                transform="translate(0 0)"
                              >
                                <circle
                                  id="Ellipse_8"
                                  data-name="Ellipse 8"
                                  cx="1"
                                  cy="1"
                                  r="1"
                                  transform="translate(4.002 0.281) rotate(90)"
                                  fill="#4d60ff"
                                />
                                <rect
                                  id="Rectangle_19"
                                  data-name="Rectangle 19"
                                  width="13"
                                  height="2"
                                  rx="1"
                                  transform="translate(5.002 0.281)"
                                  fill="#4d60ff"
                                />
                              </g>
                              <g
                                id="Group_77"
                                data-name="Group 77"
                                transform="translate(0 4.72)"
                              >
                                <circle
                                  id="Ellipse_8-2"
                                  data-name="Ellipse 8"
                                  cx="1"
                                  cy="1"
                                  r="1"
                                  transform="translate(4.002 -0.439) rotate(90)"
                                  fill="#4d60ff"
                                />
                                <rect
                                  id="Rectangle_19-2"
                                  data-name="Rectangle 19"
                                  width="13"
                                  height="2"
                                  rx="1"
                                  transform="translate(5.002 -0.439)"
                                  fill="#4d60ff"
                                />
                              </g>
                              <g
                                id="Group_78"
                                data-name="Group 78"
                                transform="translate(0 8.439)"
                              >
                                <circle
                                  id="Ellipse_8-3"
                                  data-name="Ellipse 8"
                                  cx="1"
                                  cy="1"
                                  r="1"
                                  transform="translate(4.002 -0.158) rotate(90)"
                                  fill="#4d60ff"
                                />
                                <rect
                                  id="Rectangle_19-3"
                                  data-name="Rectangle 19"
                                  width="13"
                                  height="2"
                                  rx="1"
                                  transform="translate(5.002 -0.158)"
                                  fill="#4d60ff"
                                />
                              </g>
                            </g>
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7.663"
                            height="5.246"
                            viewBox="0 0 7.663 5.246"
                          >
                            <path
                              id="Path_22"
                              data-name="Path 22"
                              d="M173.267,97.784l3.125,3.125,3.125-3.125"
                              transform="translate(-172.56 -97.077)"
                              fill="none"
                              stroke="#4d60ff"
                              strokeWidth="2"
                            />
                          </svg>
                        </button>
                      </div>
                      <input
                        ref={descriptionRef}
                        className="border p-2 pb-16  block w-full bg-white shadow-sm    sm:text-sm  placeholder-[#ACB5FF] outline-none"
                        type="text"
                        placeholder="Enter a description for this card"
                      />
                    </div>
                    <div className="flex items-center mt-4">
                      <button
                        onClick={handleAdd}
                        type="button"
                        className="mainBtn mr-3"
                        disabled={loading}
                      >
                        {loading ? "loading..." : "save"}
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.728"
                        height="12.728"
                        viewBox="0 0 12.728 12.728"
                      >
                        <g
                          id="Group_54"
                          data-name="Group 54"
                          transform="translate(-418.136 -379.136)"
                        >
                          <line
                            id="Line_4"
                            data-name="Line 4"
                            y1="17"
                            transform="translate(430.51 379.49) rotate(45)"
                            fill="none"
                            stroke="#000"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_5"
                            data-name="Line 5"
                            y1="17"
                            transform="translate(430.51 391.51) rotate(135)"
                            fill="none"
                            stroke="#000"
                            strokeWidth="1"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="flex mt-5">
                      <img
                        src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                        className="rounded-full mr-4"
                        style={{ height: "50px", width: "50px" }}
                        alt=""
                        loading="lazy"
                      />
                      <input
                        className="border p-2 block w-full bg-white shadow-sm    sm:text-sm placeholder-[#ACB5FF] outline-none rounded-lg"
                        type="text"
                        placeholder="Write a comment"
                      />
                    </div>
                  </div>
                </div>
                {/* left side */}
                <div className="hidden lg:block flex-[.8]">
                  <h4 className="font-bold mb-3">Add to card</h4>
                  <div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
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
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      <span className="ml-3 text-main-color">Members</span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24"
                        height="24"
                        viewBox="0 0 11.7 13.236"
                      >
                        <defs>
                          <clipPath id="clipPath">
                            <rect
                              id="Rectangle_21"
                              data-name="Rectangle 21"
                              width="9.816"
                              height="11.71"
                              fill="#4d60ff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Group_82"
                          data-name="Group 82"
                          transform="matrix(0.985, 0.174, -0.174, 0.985, 2.033, 0)"
                          clipPath="url(#clipPath)"
                        >
                          <path
                            id="Path_24"
                            data-name="Path 24"
                            d="M285.308,25.059a.416.416,0,0,1-.421-.421v-8.4l-2.2-1.829a.42.42,0,1,1,.539-.645l2.342,1.947a.42.42,0,0,1,.145.316v8.593a.416.416,0,0,1-.408.434Z"
                            transform="translate(-275.9 -13.349)"
                            fill="#4d60ff"
                          />
                          <path
                            id="Path_25"
                            data-name="Path 25"
                            d="M7.882,2.749,4.777.209A.93.93,0,0,0,3.619.2L.355,2.749A.929.929,0,0,0,0,3.486V10.7a.938.938,0,0,0,.934.934H7.3a.938.938,0,0,0,.934-.934V3.473a.987.987,0,0,0-.355-.724ZM5,4.223A1.256,1.256,0,1,1,5,2.446,1.263,1.263,0,0,1,5,4.223"
                            transform="translate(0 0)"
                            fill="#4d60ff"
                          />
                        </g>
                      </svg>

                      <span className="ml-3 text-main-color">Labels</span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        id="Group_84"
                        data-name="Group 84"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 11 10.171"
                      >
                        <g id="Group_85" data-name="Group 85">
                          <path
                            id="Path_26"
                            data-name="Path 26"
                            d="M5.489,5.022,9.51.3a.782.782,0,0,1,.878-.258.907.907,0,0,1,.3.172A.922.922,0,0,1,10.9.485a.8.8,0,0,1-.115.923l-4.263,5a1.549,1.549,0,0,1-2.347.012L2.566,4.6A.785.785,0,0,1,2.433,3.7a.922.922,0,0,1,.508-.449.8.8,0,0,1,.9.245L5.2,5.026l.027.026a.194.194,0,0,0,.119.039.191.191,0,0,0,.125-.048l.02-.021Zm.876-2.831H2.977A1.289,1.289,0,0,0,1.691,3.476V7.195A1.29,1.29,0,0,0,2.977,8.48H6.626A1.29,1.29,0,0,0,7.912,7.195V6.375a.765.765,0,0,1,.51-.748.953.953,0,0,1,.672,0,.765.765,0,0,1,.51.748v.819A2.968,2.968,0,0,1,8.73,9.3l-.011.01a2.967,2.967,0,0,1-2.093.863H2.977A2.968,2.968,0,0,1,.873,9.3l-.01-.011A2.967,2.967,0,0,1,0,7.195V3.476A2.982,2.982,0,0,1,2.977.5H6.364a.765.765,0,0,1,.748.51.953.953,0,0,1,0,.672.765.765,0,0,1-.748.51Z"
                            transform="translate(0 0)"
                            fill="#4d60ff"
                          />
                        </g>
                      </svg>

                      <span className="ml-3 text-main-color">Checklist</span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 11 10.37"
                      >
                        <g
                          id="Group_86"
                          data-name="Group 86"
                          transform="translate(-922 -18)"
                        >
                          <rect
                            id="Rectangle_18"
                            data-name="Rectangle 18"
                            width="4.897"
                            height="0.612"
                            rx="0.306"
                            transform="translate(926.476 22.942)"
                            fill="#edf0ff"
                          />
                          <g
                            id="Group_57"
                            data-name="Group 57"
                            transform="translate(922 18)"
                          >
                            <g
                              id="Group_18"
                              data-name="Group 18"
                              transform="translate(5.009 4.997)"
                            >
                              <circle
                                id="Ellipse_3"
                                data-name="Ellipse 3"
                                cx="0.059"
                                cy="0.059"
                                r="0.059"
                                transform="translate(0.071)"
                                fill="#4d60ff"
                              />
                              <path
                                id="Path_9"
                                data-name="Path 9"
                                d="M.131,0A.119.119,0,0,1,.261.1C.261.156,0,.156,0,.1A.119.119,0,0,1,.131,0Z"
                                transform="translate(0 0.119)"
                                fill="#4d60ff"
                              />
                            </g>
                            <g
                              id="Group_87"
                              data-name="Group 87"
                              transform="translate(0 0)"
                            >
                              <g id="Group_88" data-name="Group 88">
                                <path
                                  id="Path_27"
                                  data-name="Path 27"
                                  d="M9.538,1.077H8.5V.4a.4.4,0,0,0-.8,0v.678H3.4V.4a.4.4,0,0,0-.8,0v.678H1.462A1.462,1.462,0,0,0,0,2.539V8.907A1.462,1.462,0,0,0,1.462,10.37H9.538A1.462,1.462,0,0,0,11,8.907V2.539A1.462,1.462,0,0,0,9.538,1.077ZM2.819,7.82a1.077,1.077,0,1,1,.76-.315A1.075,1.075,0,0,1,2.819,7.82Zm2.705,0a1.077,1.077,0,1,1,.76-.315,1.075,1.075,0,0,1-.76.315m2.705,0a1.077,1.077,0,1,1,.76-.315,1.075,1.075,0,0,1-.76.315ZM10.2,3.59H.8V2.539a.665.665,0,0,1,.665-.665H2.6v.518a.4.4,0,1,0,.8,0V1.874H7.7v.518a.4.4,0,1,0,.8,0V1.874H9.538a.665.665,0,0,1,.665.665Z"
                                  transform="translate(0 0)"
                                  fill="#4d60ff"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>

                      <span className="ml-3 text-main-color">Dates</span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        id="Group_90"
                        data-name="Group 90"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24"
                        height="24"
                        viewBox="0 0 7.675 11.371"
                      >
                        <defs>
                          <clipPath id="clipPath">
                            <rect
                              id="Rectangle_22"
                              data-name="Rectangle 22"
                              width="7.675"
                              height="11.371"
                              fill="#4d60ff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Group_89"
                          data-name="Group 89"
                          clipPath="url(#clipPath)"
                        >
                          <path
                            id="Path_28"
                            data-name="Path 28"
                            d="M3.952,8.359A.746.746,0,0,0,4.7,7.606V3.089a4.044,4.044,0,0,0-.4-2A2.069,2.069,0,0,0,2.4,0C.9,0,0,1.155,0,3.089V7.553a3.837,3.837,0,0,0,7.675,0V.779a.745.745,0,1,0-1.489,0V7.553a2.348,2.348,0,0,1-4.7,0V3.089c0-1.585.643-1.585.889-1.585.272,0,.829,0,.829,1.585V7.606a.746.746,0,0,0,.745.752Z"
                            transform="translate(0)"
                            fill="#4d60ff"
                          />
                        </g>
                      </svg>

                      <span className="ml-3 text-main-color">Attachment</span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 11 11"
                      >
                        <path
                          id="Subtraction_1"
                          data-name="Subtraction 1"
                          d="M9-2515H2a2,2,0,0,1-2-2v-7a2,2,0,0,1,2-2H9a2,2,0,0,1,2,2v7A2,2,0,0,1,9-2515Zm-7-10a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H9a1,1,0,0,0,1-1v-3a1,1,0,0,0-1-1Z"
                          transform="translate(0 2526)"
                          fill="#4d60ff"
                        />
                      </svg>

                      <span className="ml-3 text-main-color">Cover</span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        id="Component_3_1"
                        data-name="Component 3 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 11 5"
                      >
                        <rect
                          id="Rectangle_25"
                          data-name="Rectangle 25"
                          width="11"
                          height="3"
                          rx="1"
                          transform="translate(0 2)"
                          fill="#4d60ff"
                        />
                        <rect
                          id="Rectangle_26"
                          data-name="Rectangle 26"
                          width="7"
                          height="1"
                          rx="0.5"
                          fill="#4d60ff"
                        />
                      </svg>

                      <span className="ml-3 text-main-color">
                        Custom Fields
                      </span>
                    </div>
                    <div className="mb-3">
                      <h3 className="mb-3">Power-Ups</h3>
                      <div className="flex cursor-pointer">
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
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                        <span className="ml-2 text-[#7F7F7F]">
                          Add Power-Ups
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3">Automation</h3>
                      <div className="flex cursor-pointer">
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
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                        <span className="ml-2 text-[#7F7F7F]">Add button</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold my-3">Actions</h4>
                  <div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 11.746 9.094"
                      >
                        <g
                          id="Component_5_1"
                          data-name="Component 5 – 1"
                          transform="translate(0 0.354)"
                        >
                          <path
                            id="Path_29"
                            data-name="Path 29"
                            d="M1117.8,248h11"
                            transform="translate(-1117.795 -243.807)"
                            fill="none"
                            stroke="#4d60ff"
                            strokeWidth="1"
                          />
                          <path
                            id="Path_30"
                            data-name="Path 30"
                            d="M173.267,97.784l4.193,4.193,4.193-4.193"
                            transform="translate(-90.939 181.653) rotate(-90)"
                            fill="none"
                            stroke="#4d60ff"
                            strokeWidth="1"
                          />
                        </g>
                      </svg>

                      <span className="ml-3 text-main-color">Moves</span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 11.083 12"
                      >
                        <g
                          id="Component_4_1"
                          data-name="Component 4 – 1"
                          transform="translate(0.5 0.5)"
                        >
                          <rect
                            id="Rectangle_27"
                            data-name="Rectangle 27"
                            width="9"
                            height="10"
                            rx="1"
                            transform="translate(1.583 1.5)"
                            fill="#4d60ff"
                          />
                          <path
                            id="Path_31"
                            data-name="Path 31"
                            d="M1125.158,242.5h-8.132v8.837"
                            transform="translate(-1117.025 -242.5)"
                            fill="none"
                            stroke="#4d60ff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                          />
                        </g>
                      </svg>

                      <span className="ml-3 text-main-color">Copy</span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 9 10.001"
                      >
                        <path
                          id="Subtraction_2"
                          data-name="Subtraction 2"
                          d="M7-2516H2a2,2,0,0,1-2-2v-6a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2v6A2,2,0,0,1,7-2516Zm-5.182-9.091a1,1,0,0,0-1,1v2.545a1,1,0,0,0,1,1H7.182a1,1,0,0,0,1-1v-2.545a1,1,0,0,0-1-1Z"
                          transform="translate(0 2526)"
                          fill="#4d60ff"
                        />
                      </svg>

                      <span className="ml-3 text-main-color">
                        Make template
                      </span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 11.11 11.983"
                      >
                        <g
                          id="Component_4_1"
                          data-name="Component 4 – 1"
                          transform="translate(0.055 0.497)"
                        >
                          <path
                            id="Rectangle_30"
                            data-name="Rectangle 30"
                            d="M0,0H11a0,0,0,0,1,0,0V7A2,2,0,0,1,9,9H2A2,2,0,0,1,0,7V0A0,0,0,0,1,0,0Z"
                            transform="translate(0 2.486)"
                            fill="#4d60ff"
                          />
                          <path
                            id="Path_33"
                            data-name="Path 33"
                            d="M1117,243.726l11-1.212"
                            transform="translate(-1117 -242.514)"
                            fill="none"
                            stroke="#4d60ff"
                            strokeWidth="1"
                          />
                          <line
                            id="Line_20"
                            data-name="Line 20"
                            x2="4"
                            transform="translate(3.5 5.986)"
                            fill="none"
                            stroke="#edf0ff"
                            strokeWidth="1"
                          />
                        </g>
                      </svg>

                      <span className="ml-3 text-main-color">Archive</span>
                    </div>
                    <div className="bg-[#EDF0FF] rounded-md p-3 flex items-center mb-3">
                      <svg
                        id="Component_5_1"
                        data-name="Component 5 – 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 9 10"
                      >
                        <circle
                          id="Ellipse_11"
                          data-name="Ellipse 11"
                          cx="2"
                          cy="2"
                          r="2"
                          transform="translate(5 3)"
                          fill="#4d60ff"
                        />
                        <g
                          id="Group_92"
                          data-name="Group 92"
                          transform="translate(-1115.769 -240.597)"
                        >
                          <path
                            id="Path_34"
                            data-name="Path 34"
                            d="M0,0,2.754,4.908,5.507,0"
                            transform="translate(1117.815 248.679) rotate(-90)"
                            fill="none"
                            stroke="#4d60ff"
                            strokeWidth="1"
                          />
                          <circle
                            id="Ellipse_12"
                            data-name="Ellipse 12"
                            cx="2"
                            cy="2"
                            r="2"
                            transform="translate(1115.769 240.597)"
                            fill="#4d60ff"
                          />
                          <circle
                            id="Ellipse_13"
                            data-name="Ellipse 13"
                            cx="2"
                            cy="2"
                            r="2"
                            transform="translate(1115.769 246.597)"
                            fill="#4d60ff"
                          />
                        </g>
                      </svg>

                      <span className="ml-3 text-main-color">Share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
