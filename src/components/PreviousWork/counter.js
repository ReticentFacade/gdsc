import React from "react";
import CountUp, { useCountUp } from "react-countup";
import "../../css/PreviousWork.css";

function CounterNumbers() {
    useCountUp({
        ref: "counter",
        enableScrollSpy: true,
        scrollSpyDelay: 100,
    });

    return (
        <div className="counter-numbers">
            <div className="row-one">
                <div className="counter-one">
                    <CountUp
                        id="counter-one"
                        start={0}
                        end={245}
                        suffix="%"
                        duration={4}
                        enableScrollSpy
                    ></CountUp>
                    <div className="counter-one-text">
                        More revenues for the brand
                    </div>
                </div>
                <div className="counter-two">
                    <CountUp
                        id="counter-two"
                        start={0}
                        end={50}
                        suffix="+ "
                        duration={5}
                        enableScrollSpy
                    ></CountUp>
                    <div className="counter-two-text">Brands work with us</div>
                </div>
            </div>

            <div className="row-two">
                <div className="counter-three">
                    <CountUp
                        id="counter-three"
                        start={0}
                        end={130}
                        suffix="K+ "
                        duration={4}
                        enableScrollSpy
                    ></CountUp>
                    <div className="counter-three-text">
                        Audiences reached across platform
                    </div>
                </div>
                <div className="counter-four">
                    <CountUp
                        id="counter-four"
                        start={0}
                        end={24}
                        suffix="+"
                        duration={5}
                        enableScrollSpy
                    ></CountUp>
                    <div className="counter-four-text">
                        New deals signed quarterly
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterNumbers;
