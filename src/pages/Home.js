import React from "react";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import "../css/Home.css";
import SubContainer2 from "../components/Home/SubContainer-2";

function Home() {
    const form = useForm({
        initialValues: {
            email: "",
            termsOfService: false,
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
        },
    });

    return (
        <div className="home-page">
            <div className="container-1">
                <div className="sub-container-1">
                    <div className="div-above">
                        <div className="div-above-text">
                            <h1>
                                We Take <br />
                                Care Of <br />
                                Your Brand
                            </h1>
                        </div>
                    </div>

                    <div className="div-below">
                        <div id="divBelowText">
                            Lorem ipsum et id laboriosam eius
                            recusandae.Dolor voluptate maxime qui sunt provident
                            aut. Voluptas dolor ea quidem itaque similique
                            blanditiis quam optio voluptatibus. Qui adipisci
                            tenetur explicabo laudantium. 
                        </div>

                        {/* EMAIL FORM: */}
                        <div className="email-div">
                            <Box maw={300} style={{ width: "100%" }}>
                                <form
                                    onSubmit={form.onSubmit((values) =>
                                        console.log(values)
                                    )}
                                >
                                    <div className="email-input">
                                        <TextInput
                                            id="email-input"
                                            variant="gradient"
                                            size="sm"
                                            // withAsterisk
                                            // label="Email"
                                            placeholder="Enter Your Email"
                                            {...form.getInputProps("email")}
                                        />
                                    </div>
                                    <div className="email-btn">
                                        {/* <Button type="submit">Let's Talk</Button> */}
                                        <Button
                                            className="try-it-now-btn hidden lg:inline-block"
                                            type="submit"
                                            variant="gradient"
                                            size="sm"
                                        >
                                            <span>Let's Talk</span>
                                        </Button>
                                    </div>
                                </form>
                            </Box>
                        </div>
                    </div>
                </div>

                {/* CONTAINER-2 */}
                <div className="sub-container-2">
                    {/* Instead of going with the convention of 'container-2' I'm gonna use 'card-group' here. */}
                    <SubContainer2 />
                </div>
            </div>
        </div>
    );
}

export default Home;
