import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import sun from "../public/images/inte.jpg";
import inter from "../public/images/inta.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Replace 'faIcons' with the name of the icon you want to use

const App = () => {
  const tiles = [
    {
      image:sun,
      title:"Modular Interiors",
      desc:"lskjdfhaskjdfhaksjd"
    },
    {
      image:inter,
      title:"Interiors",
      desc:"5272395702934785"
    },
    {
      image:sun,
      title:"Modular",
      desc:"{}{}{}{][][][](*)&*&*(*^%&%&3)}}"
    },
    {
      image:sun,
      title:"Modular",
      desc:"{}{}{}{][][][](*)&*&*(*^%&%&3)}}"
    },
  ];
  return (
    <div>
      <Header heading={"Homepage"} />
      <div className="">
        <div classname="relativ">
          <img src={sun} className="w-full" alt="sample image" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center mt-">
          <h1 className="text-white font-bold text-7xl p-8">
            Bringing beauty to every corner
          </h1>
        </div>
        <div>
          <h1 className="font-bold text-center text-4xl p-5">
            One-stop shop for all things interiors
          </h1>
          <p className="text-center text-l p-1">
            Be it end-to-end interiors, renovation or modular solutions, we have
            it all for your home or office. With a wide range of furniture &
            decor, we have your back from start to finish.
          </p>
        </div>
        <div className="flex p-4">
          {tiles.map((item) => (
            <div className="w-1/4 bg-slate-200 rounded-lg p-6 m-4">
              <img src={item.image} className="rounded-lg" alt="sample image" />
              <h3 className="text-center font-semibold text-2xl p-2">
                {item.title}
              </h3>
              <p className="text-center">
                {item.desc}
              </p>
              <div className="flex justify-center">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-3xl text-center p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer name={"Anand"} />
    </div>
  );
};

export default App;
