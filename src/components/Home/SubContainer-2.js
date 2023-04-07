import React from "react";
import "../../css/Home.css";

function SubContainer2() {
    return (
        <div className="card-group">
            <div className="cg-row-one">
                <div className="big-card" id="card-one">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/e5bf/a6bb/6a828db043253eff6a234cb68a6dc3ff?Expires=1681689600&Signature=fMxSqw8Xxhro08Gdd30hvZYT~dmWZlxbswJptWuaFVyKpoeLTWO~~M~VPtR-z0DSg0y~9SkrBJ6nhvsxkzSwZVSl1LthR2GVlcrMhPr3oXUCNa5yogOj1c66Fr~iGApiVOS2clkc8BiJXLgk05-TCUa6vNzSVhrfEMo1Fvx62WAifz4QW2Pb-Afkr47g2z4aCDM3VXWQoMqw259-yefk32jexd1IvorzGR5UPuOWCSseXjiff~~h7FS2Nqmeva3vG8tFYh3CoFKKgoy5WrotTRhtU-PSWl~T9T8qonyArIMV1aGc5GED9JplrFcF~AgqGIAl8w4eZrMm2CRpR-5GYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="cg-card-one"
                    />
                </div>
                <div className="little-card" id="little-card-one">
                    <img
                        id="heart-eyes"
                        src={require("./assets/heart-eyes.png")}
                        alt="heart-eyes"
                    />
                    {/* <img
                        src={require("./assets/speech-bubble.png")}
                        alt="speech-bubble"
                    /> */}
                </div>
                <div className="big-card" id="card-two">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/cc8a/4f7c/685cdf53412bf99ad50ac6b06b0c994e?Expires=1681689600&Signature=AxEPXVbX85l85WgXlIdlquGe84pqeiQ0txYizd~A-qaNUr6WQk0XV7tjWabJ3npQYerqLGQkBZmJJWf8i30DGzrzqTgshRuMyzPG2iL9XUrlXSqZgnaPZ6DWMklOHl6X5woRlTmKQX0ESQxV3GyC~ISt~HMXmY~GK95VlcJ9twtGbakzXn2Nv6t3Gb55w7QpOua7Imae8PlSScLbyE2v3SmowajsPgHmeECuOqYRnTolqGgJi4MI-s5hSoHibkF3Rd2zaYMhyfEZSjBMpF-M9-AZBmc~zP8yyu8QceOsFUjgODbAY1bilvmYpeUrPnQcoVAW4co4wRptfO1f9s5Smg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="cg-card-two"
                    />
                </div>
            </div>

            <div className="cg-row-two">
                <div className="big-card" id="card-three">
                    <img src={require("./assets/pencil.png")} alt="pencil" />
                </div>
                <div className="big-card" id="card-four">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/e30b/3c34/5b339e605cf808ec83fd7d5e6b491efc?Expires=1681689600&Signature=jhLQtGysQat5fMWb4RjGMfq5gSIlejx68bKfGWmntV3wyVNMkUR5-bzAKlUTAryIDDvhrofWplAvk-B0HJmIcRPf4HIHl75sQhlxOMWZDbfGWr3NQU1SBSqzbbVGJLYhE1B3992tAeYQtGdtejwCbryT0LlO1bRn~o6Axw9FlvUoohtgje8zoPYQGEhUmOQ8Mxf0z7oV9kWH--xJWoO-B2Wk5dTyxgygzE0gWf-OOlMnWjt3mdHWPDBgnxQu3B7zAUOp3GFRk1cWjytGSd-lZN6SInLp-AsXDwYNsh5stOV5Ii7nyBiYvl9lMy3s9tSfFwQci1X4yxrhkznmKANLww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="four"
                    />
                </div>
            </div>

            <div className="cg-row-three">
                <div className="big-card" id="card-five">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/e6c5/3a00/b064e02872cfa9fbbdf8cd07f82ab046?Expires=1681689600&Signature=F44dgFfTI610WaGt5kmqNy-J0joYFMV-TgiUIUY2aREduZ-bh7o7-dkLwcOmowkzEaonG5py173yTVulDba6y~LFPW~PXqjeyHAPA9GM249OJLh-D4L6rQKH1tdnjbjhjhr4eNCvNRqZy2~UJD52i84IhivGe44BsC9RfojTfWWTQJBndaeCJEa3nD7z-mVSM1UyL-Ur7a1iYGYU9t-coCrxKKijuBRbGp8EzlZEhkMcPA0AnMbtb-eL1nEihLqusO3LKX8vF~oFcHcUgy4MJUrj9rX2VC~MKmGhO~tgkgvXCpbnNY67PkXAJnqrnPoWGilQK9a5kx-fsqC95fB7uw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="card-five"
                    />
                </div>

                <div className="little-card" id="little-card-two">
                    <img
                        id="finger-purse"
                        src={require("./assets/finger-purse.png")}
                        alt="finger-purse"
                    />
                </div>
                <div className="big-card" id="card-six">
                    <img src={require("./assets/woman.png")} alt="laptop" />
                </div>
                <div className="big-card" id="card-seven">
                    <img src={require("./assets/crown.png")} alt="crown" />
                </div>
            </div>
        </div>
    );
}

export default SubContainer2;
