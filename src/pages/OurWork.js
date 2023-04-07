import React from "react";
import "../css/OurWork.css";
import { Button } from "@material-tailwind/react";
function OurWork() {
    return (
        <div className="our-work-page">
            <div className="our-work-header">Our Work</div>
            <div className="our-work-description">
                Totam non cum tempore. Voluptatum eius nemo eos reiciendis sit
                dolor deserunt necessitatibus id.Dolor blanditiis vel rerum quas
                quia amet sed accusantium impedit. Dolorem qui qui est. Magnam
                quo blanditiis alias perspiciatis error voluptatem incidunt in
                vitae. Ducimus quia qui quod voluptatem sed fuga vel quasi.
            </div>

            <div className="our-work-container">
                <div className="apple">
                    {/* <div className="apple-content"> */}
                        <img
                            src="https://s3-alpha-sig.figma.com/img/5d49/c386/32ec4017ddb1625a0cc0a2a71da96773?Expires=1681689600&Signature=ioVBt9~xJeiwijWSfpqmTA6YHBiVJmZWornYNXzTYLUQ5Ij5lOoGz9LPj3HnPLMbLKirwg9HGqHebBNTLZBXCj26CA~mzpmtXK7WI4-HWLxWfQTjuQNQ48Joii1i2Vjz0ceMltSOnOA46Has4oVn7b-S1ljDx6vydJjzJSpc7U0YXqmDP53T~Gr5Pcep-iptQJT7ozEGpDmpW5DfOe10KjnSujiw-xm8hqwwTJPNQxo8uZUgJMoztWuecrLJXxXQ8GLN0vrpXUkJhKY1YWr7uaS1KxiCchtjk9bZDeqSraJMPEiVmK5LIk8KCoXkD4HkExqk2UBkkPjzquMepVExWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="apple"
                        />
                        <div className="apple-content-heading">Apple</div>
                        <div className="apple-content-body">Quis quam ad officia molestiae fugiat quis laudantium.</div>
                    {/* </div> */}
                </div>
                <div className="coca-cola">
                    <img src="https://s3-alpha-sig.figma.com/img/6298/40ba/a150c67cfdca3afd97222aa5371bdfd9?Expires=1681689600&Signature=gNpogfXRSmnwrfaNha1BXXm0Mh-Z-IbU4RdxjWp4ZrPz4dNBFiLyI~yy7s0A5edXIhE9tH6mEbyVc0x-r7MFdmnl3Jf~-kGn8R8pFXngrYuOETwvatdffTLZl2jYpLaFoZrtWjluAK7D07YBoAwawoNtsN8GzUyEH0WPg8fqFqL9XPXSLoN9BBI6r7CkijekRoE0OOc3wT228Vu9szrKffUZRY79R1LkGIPV8bjnqvo7e5XAp~YApk3UaB~fhyyM1kzuDmLhsy7CP~wd~X3lK2ksgO6grmWOkUsLM3YhLu9k7MuzusqlDKy5Mi2JJxC6Qiw63gzY8alSTRl5Sape5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="coca-cola" />
                    <div className="coca-cola-heading">Coca-Cola</div>
                    <div className="coca-cola-body">Temporibus sunt sint nesciunt.</div>
                </div>
                <div className="nike">
                    <img src="https://s3-alpha-sig.figma.com/img/6d67/5ad6/4337c6100aa566a0d6ecda7936b8b260?Expires=1681689600&Signature=ZM5D~1ynNC7QCCY5CeOVk1G7Hws~y~iwWkfl7-39GwdvxVsAnVxuvblLAmo9wbzpk5UYpGSVq6trN2puf34FoudH4rkx0s6PNN0dLyQwTKyqbkuGfIpxsacuevSOjkr-UY5Tt~tmv04aDIBGlWC54-jJwcKK~lmb6SmIcMiQ-y4~qg-LN9jy1cgdv8FOaDPczfhP~5QU1EK9NVG3KlhINDIwyIZsC3qyQTsTH-EE3IgSSyqY9GoIj8PTV5IWpvUdzepaJR-cYwKjhPhrteTLdFmaAn0V7mnR9PrknODXaDhrvfPxH2JOZJX7fp7Lw1TKnbGBcsCRF6noNfUmoSTqdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="nike" />
                    <div className="nike-heading">Nike</div>
                    <div className="nike-body">A dignissimos in voluptatem rerum accusantium nobis rem.</div>
                </div>
            </div>

            <div className="our-work-btn-container">
                <Button
                    className="our-work-btn try-it-now-btn lg:inline-block"
                    variant="gradient"
                    size="sm"
                >
                    <span>See more</span>
                </Button>
            </div>
        </div>
    );
}

export default OurWork;
