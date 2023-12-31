import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto w-full bg-primaryBG pt-6 px-4 pb-4 xl:px-8 lg:px-8">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <span className="font-semibold text-xl tracking-tight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="190"
              height="27"
              viewBox="0 0 239 37"
              fill="none"
              className="p-0.5"
            >
              <path
                d="M24.3404 0.888885H21.2242L0 37.0006H20.195L22.9875 31.3L25.9246 37.0006H46.7382L24.3404 0.888885ZM22.8257 5.46211L33.0937 22.009H13.101L22.8257 5.46211ZM17.8882 33.3004H6.4638L10.9272 25.7034H21.6115L17.8882 33.3004ZM24.2826 25.7034H35.389L40.1068 33.3004H28.1794L24.2826 25.7034Z"
                fill="white"
              />
              <path
                d="M65.0254 36.5149H60.3655L70.7723 12.0069H75.6577L86.2843 36.5149H81.3988L78.6295 29.8257H70.4601L72.0211 25.8884H76.9528L73.1023 16.6841L65.0254 36.5149Z"
                fill="white"
              />
              <path
                d="M102.733 12.0069V15.921H95.7025V36.5149H91.1639V15.921H84.1335V12.0069H102.733Z"
                fill="white"
              />
              <path
                d="M113.012 36.5149V12.0069H122.61C130.704 12.0069 134.761 15.8612 134.78 23.57C134.78 32.1923 130.723 36.5015 122.61 36.4976L113.012 36.5149ZM122.61 32.5719C127.698 32.5719 130.24 29.5771 130.236 23.5873C130.236 18.4764 127.694 15.921 122.61 15.921H117.557V32.5719H122.61Z"
                fill="white"
              />
              <path
                d="M143.175 12.0069V36.5149H138.636V12.0069H143.175Z"
                fill="white"
              />
              <path
                d="M167.856 35.3818C165.497 36.3202 162.97 36.763 160.433 36.6826C151.784 36.6826 147.459 32.4274 147.459 23.9169C147.459 15.8651 151.859 11.8373 160.658 11.8334C163.11 11.7913 165.55 12.1969 167.856 13.0302V17.1409C165.689 16.2169 163.355 15.7504 160.999 15.7707C155.114 15.7707 152.171 18.4842 152.171 23.9111C152.171 29.7968 154.948 32.7377 160.502 32.7338C161.452 32.7175 162.397 32.5795 163.312 32.3233V25.2004H167.856V35.3818Z"
                fill="white"
              />
              <path
                d="M176.679 12.0069V36.5149H172.141V12.0069H176.679Z"
                fill="white"
              />
              <path
                d="M197.845 12.0069V15.921H190.821V36.5149H186.277V15.921H179.229V12.0069H197.845Z"
                fill="white"
              />
              <path
                d="M200.366 36.5149H195.706L206.113 12.0069H210.999L221.619 36.5149H216.74L213.918 29.8257H205.824L207.385 25.8884H212.323L208.466 16.6841L200.366 36.5149Z"
                fill="white"
              />
              <path
                d="M229.159 12.0069V32.5719H238.889V36.5149H224.614V12.0069H229.159Z"
                fill="white"
              />
            </svg>
          </span>
          <p className="text-white px-4 py-4 text-sm md:w-1/2">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="md:flex md:flex-row flex flex-col ">
          <div className="px-4 md:w-1/3 lg:w-fit xl:w-fit ">
            <div className="pt-4">
              <h3 className="Text-lg text-white font-semibold hover:underline ">
                Our Technologies
              </h3>
            </div>
            <ul className="list-none list-inside text-white py-1 text-sm">
              <li className="pt-1">ReactJS</li>
              <li className="pt-1">Gatsby</li>
              <li className="pt-1">NextJS</li>
              <li className="pt-1">NodeJs</li>
              <li className="pt-1">GraphQL</li>
              <li className="pt-1">Laravel</li>
            </ul>
          </div>
          <div className="px-4 md:w-1/3 lg:w-fit xl:w-fit ">
            <div className="pt-4">
              <h3 className="Text-lg text-white font-semibold hover:underline ">
                Our Services
              </h3>
            </div>
            <ul className="list-none list-inside text-white py-1 text-sm">
              <li className="pt-1">
                Social Media Marketing
              </li>
              <li className="pt-1">
                Web & Mobile <br/>App Development
              </li>
              <li className="pt-1">
                Data & Analytics
              </li>
              <li className="pt-1">
                Google Marketing Solutions
              </li>
              <li className="pt-1">
                Search Engine Optimization
              </li>
            </ul>
          </div>
        </div>

        
      </div>
      <div>
          <hr className="mx-8 mt-4 lg:mx-44 xl:56  " />
          <p className="p-2 text-center text-white text-md">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
    </footer>
  );
};

export default Footer;
