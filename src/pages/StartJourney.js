import React from "react";
import "../css/StartJourney.css";
import { Button } from "@material-tailwind/react";

function StartJourney() {
    return (
        <div className="start-journey-page">
            <div className="sj-row-one">
                <div className="sj-1-heading">
                    Start Your Journey <br /> With Us Now
                </div>
                <div className="sj-1-body">
                    <div className="sj-1-body-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Qui sed et pariatur veniam. Et laudantium pariatur
                        hic eaque. Ut sunt molestiae repellat. Nihil accusamus
                        sit vel facilis autem sint reprehenderit. Eius iure qui
                        pariatur.Sint veniam et occaecati voluptatem. Dolorem
                        excepturi velit aut molestias dicta. Doloribus laborum
                        officia ipsam est. Dolorem reprehenderit consequuntur
                        odio repudiandae accusamus doloremque voluptate aut et.
                    </div>

                    <button className="sj-1-btn">
                        <svg
                            width="120"
                            height="24"
                            viewBox="0 0 120 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.188 18V5.40003H3.564V15.84H9.324V18H1.188ZM15.0839 18.252C14.1959 18.252 13.4099 18.066 12.7259 17.694C12.0539 17.31 11.5259 16.776 11.1419 16.092C10.7699 15.396 10.5839 14.58 10.5839 13.644V13.428C10.5839 12.492 10.7699 11.682 11.1419 10.998C11.5139 10.302 12.0359 9.76803 12.7079 9.39603C13.3799 9.01203 14.1599 8.82003 15.0479 8.82003C15.9239 8.82003 16.6859 9.01803 17.3339 9.41403C17.9819 9.79803 18.4859 10.338 18.8459 11.034C19.2059 11.718 19.3859 12.516 19.3859 13.428V14.202H12.8879C12.9119 14.814 13.1399 15.312 13.5719 15.696C14.0039 16.08 14.5319 16.272 15.1559 16.272C15.7919 16.272 16.2599 16.134 16.5599 15.858C16.8599 15.582 17.0879 15.276 17.2439 14.94L19.0979 15.912C18.9299 16.224 18.6839 16.566 18.3599 16.938C18.0479 17.298 17.6279 17.61 17.0999 17.874C16.5719 18.126 15.8999 18.252 15.0839 18.252ZM12.9059 12.51H17.0819C17.0339 11.994 16.8239 11.58 16.4519 11.268C16.0919 10.956 15.6179 10.8 15.0299 10.8C14.4179 10.8 13.9319 10.956 13.5719 11.268C13.2119 11.58 12.9899 11.994 12.9059 12.51ZM24.1765 18.252C23.5405 18.252 22.9705 18.144 22.4665 17.928C21.9625 17.7 21.5605 17.376 21.2605 16.956C20.9725 16.524 20.8285 16.002 20.8285 15.39C20.8285 14.778 20.9725 14.268 21.2605 13.86C21.5605 13.44 21.9685 13.128 22.4845 12.924C23.0125 12.708 23.6125 12.6 24.2845 12.6H26.7325V12.096C26.7325 11.676 26.6005 11.334 26.3365 11.07C26.0725 10.794 25.6525 10.656 25.0765 10.656C24.5125 10.656 24.0925 10.788 23.8165 11.052C23.5405 11.304 23.3605 11.634 23.2765 12.042L21.1885 11.34C21.3325 10.884 21.5605 10.47 21.8725 10.098C22.1965 9.71403 22.6225 9.40803 23.1505 9.18003C23.6905 8.94003 24.3445 8.82003 25.1125 8.82003C26.2885 8.82003 27.2185 9.11403 27.9025 9.70203C28.5865 10.29 28.9285 11.142 28.9285 12.258V15.588C28.9285 15.948 29.0965 16.128 29.4325 16.128H30.1525V18H28.6405C28.1965 18 27.8305 17.892 27.5425 17.676C27.2545 17.46 27.1105 17.172 27.1105 16.812V16.794H26.7685C26.7205 16.938 26.6125 17.13 26.4445 17.37C26.2765 17.598 26.0125 17.802 25.6525 17.982C25.2925 18.162 24.8005 18.252 24.1765 18.252ZM24.5725 16.416C25.2085 16.416 25.7245 16.242 26.1205 15.894C26.5285 15.534 26.7325 15.06 26.7325 14.472V14.292H24.4465C24.0265 14.292 23.6965 14.382 23.4565 14.562C23.2165 14.742 23.0965 14.994 23.0965 15.318C23.0965 15.642 23.2225 15.906 23.4745 16.11C23.7265 16.314 24.0925 16.416 24.5725 16.416ZM31.8108 18V9.07203H34.0428V10.08H34.3668C34.4988 9.72003 34.7148 9.45603 35.0148 9.28803C35.3268 9.12003 35.6868 9.03603 36.0948 9.03603H37.1748V11.052H36.0588C35.4828 11.052 35.0088 11.208 34.6368 11.52C34.2648 11.82 34.0788 12.288 34.0788 12.924V18H31.8108ZM38.9475 18V9.07203H41.1795V10.242H41.5035C41.6475 9.93003 41.9175 9.63603 42.3135 9.36003C42.7095 9.07203 43.3095 8.92803 44.1135 8.92803C44.8095 8.92803 45.4155 9.09003 45.9315 9.41403C46.4595 9.72603 46.8675 10.164 47.1555 10.728C47.4435 11.28 47.5875 11.928 47.5875 12.672V18H45.3195V12.852C45.3195 12.18 45.1515 11.676 44.8155 11.34C44.4915 11.004 44.0235 10.836 43.4115 10.836C42.7155 10.836 42.1755 11.07 41.7915 11.538C41.4075 11.994 41.2155 12.636 41.2155 13.464V18H38.9475ZM54.5376 18V5.40003H58.9476L61.1256 16.38H61.4496L63.6276 5.40003H68.0376V18H65.7336V7.14603H65.4096L63.2496 18H59.3256L57.1656 7.14603H56.8416V18H54.5376ZM74.7307 18.252C73.8427 18.252 73.0447 18.072 72.3367 17.712C71.6287 17.352 71.0707 16.83 70.6627 16.146C70.2547 15.462 70.0507 14.64 70.0507 13.68V13.392C70.0507 12.432 70.2547 11.61 70.6627 10.926C71.0707 10.242 71.6287 9.72003 72.3367 9.36003C73.0447 9.00003 73.8427 8.82003 74.7307 8.82003C75.6187 8.82003 76.4167 9.00003 77.1247 9.36003C77.8327 9.72003 78.3907 10.242 78.7987 10.926C79.2067 11.61 79.4107 12.432 79.4107 13.392V13.68C79.4107 14.64 79.2067 15.462 78.7987 16.146C78.3907 16.83 77.8327 17.352 77.1247 17.712C76.4167 18.072 75.6187 18.252 74.7307 18.252ZM74.7307 16.236C75.4267 16.236 76.0027 16.014 76.4587 15.57C76.9147 15.114 77.1427 14.466 77.1427 13.626V13.446C77.1427 12.606 76.9147 11.964 76.4587 11.52C76.0147 11.064 75.4387 10.836 74.7307 10.836C74.0347 10.836 73.4587 11.064 73.0027 11.52C72.5467 11.964 72.3187 12.606 72.3187 13.446V13.626C72.3187 14.466 72.5467 15.114 73.0027 15.57C73.4587 16.014 74.0347 16.236 74.7307 16.236ZM81.5041 18V9.07203H83.7361V10.08H84.0601C84.1921 9.72003 84.4081 9.45603 84.7081 9.28803C85.0201 9.12003 85.3801 9.03603 85.7881 9.03603H86.8681V11.052H85.7521C85.1761 11.052 84.7021 11.208 84.3301 11.52C83.9581 11.82 83.7721 12.288 83.7721 12.924V18H81.5041ZM92.3925 18.252C91.5045 18.252 90.7185 18.066 90.0345 17.694C89.3625 17.31 88.8345 16.776 88.4505 16.092C88.0785 15.396 87.8925 14.58 87.8925 13.644V13.428C87.8925 12.492 88.0785 11.682 88.4505 10.998C88.8225 10.302 89.3445 9.76803 90.0165 9.39603C90.6885 9.01203 91.4685 8.82003 92.3565 8.82003C93.2325 8.82003 93.9945 9.01803 94.6425 9.41403C95.2905 9.79803 95.7945 10.338 96.1545 11.034C96.5145 11.718 96.6945 12.516 96.6945 13.428V14.202H90.1965C90.2205 14.814 90.4485 15.312 90.8805 15.696C91.3125 16.08 91.8405 16.272 92.4645 16.272C93.1005 16.272 93.5685 16.134 93.8685 15.858C94.1685 15.582 94.3965 15.276 94.5525 14.94L96.4065 15.912C96.2385 16.224 95.9925 16.566 95.6685 16.938C95.3565 17.298 94.9365 17.61 94.4085 17.874C93.8805 18.126 93.2085 18.252 92.3925 18.252ZM90.2145 12.51H94.3905C94.3425 11.994 94.1325 11.58 93.7605 11.268C93.4005 10.956 92.9265 10.8 92.3385 10.8C91.7265 10.8 91.2405 10.956 90.8805 11.268C90.5205 11.58 90.2985 11.994 90.2145 12.51Z"
                                fill="white"
                            />
                            <path
                                d="M0 20.25H97.4505V21.15H0V20.25Z"
                                fill="white"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M105 12.5322C105 12.2847 105.098 12.0474 105.273 11.8725C105.448 11.6975 105.686 11.5992 105.933 11.5992H116.743L112.736 7.59477C112.561 7.41958 112.463 7.18197 112.463 6.93421C112.463 6.68645 112.561 6.44884 112.736 6.27364C112.912 6.09845 113.149 6.00003 113.397 6.00003C113.645 6.00003 113.882 6.09845 114.058 6.27364L119.656 11.8716C119.742 11.9583 119.811 12.0613 119.858 12.1746C119.905 12.288 119.93 12.4095 119.93 12.5322C119.93 12.6549 119.905 12.7764 119.858 12.8898C119.811 13.0031 119.742 13.1061 119.656 13.1928L114.058 18.7907C113.882 18.9659 113.645 19.0643 113.397 19.0643C113.149 19.0643 112.912 18.9659 112.736 18.7907C112.561 18.6155 112.463 18.3779 112.463 18.1302C112.463 17.8824 112.561 17.6448 112.736 17.4696L116.743 13.4652H105.933C105.686 13.4652 105.448 13.3669 105.273 13.1919C105.098 13.0169 105 12.7796 105 12.5322Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="sj-row-two">
                <div className="sj-2-images">
                    <div className="sj-image-row1">
                        <img className="sj-img1" src="https://s3-alpha-sig.figma.com/img/6267/26b2/be2595433c28eda2a913cea75a86a8c4?Expires=1681689600&Signature=OoHc82dvj6d6sZR0hGsYEWyX9iO~-ipT1zQes4-HJRK2ves6BuW~OghyL0JrisjMtFjKLRTFhr2Uz8JocI36pa~C9hkzCG04bxpmGgUDTgg-eIhK19tKKYLIy09OiyFl6wBzj-AQAVjcti5nzgxWnCKFKpY7InBJV0y4rup~3QD22MIUvEqWLe06eEH6DDC~V-u9k8hkk15VitKZnGcZeXZS9FHtz7SatLtvZ~2~Kcy6MVSG~rCEjL6z6b40q-JasbVzQ~X2-gQOtzZhoj4pEs0yKgiWNmiDztAPB3NoO-0F5UqnQ12a7tH2xsGvDsQk8Rf534CQ63Vmf0VtzLTklA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img1" />

                        <img className="sj-img2" src="https://s3-alpha-sig.figma.com/img/738e/6e77/a92971e6075b85d18be0de93205d90cb?Expires=1681689600&Signature=Z7hiNJyLVsnaO9ngTqGksfoWwH78wDYCcnXRlQbJ1M7YDDBFKIaFjb1-WYBjmNnT5zQ~KfXtsAwsguPRzwY2RGI41zXxAHdNBoIGYq11ClDTMdWnrK8NoShameQh~8OUWQQLSBmp1gSVaHe6bTc4ZbIJPUnJK6ADpXTegXed2FO89Qp73UX6VCCp2uOmIT3w~zgBkE-B~AwgD0kWVmDwYuEm8RLuWiudmnDJLsco~vZemYxk~Dqlg2~9sFl9qVn--qV3c4emUlygnPn1bhSdSkZOZywdPn1a7CfBUCA83rcCmnyYb3~JsmA7~oir86CR~DMukhkcadQh3F3bgFHh5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img2"/>
                        <img className="sj-img3" src="https://s3-alpha-sig.figma.com/img/35af/249c/b9f6e3491a3e9412270231a090b01f3b?Expires=1681689600&Signature=KvXPvgLXRmVuML1u~wrxi9y1-PSZkWsXpRuLltsI13O8uFyGp8qbFguFoFRNkSXX20N7f9YtHsjXobOu3ZynR4FjSAjj3CiSN6tpBoTxnzRkA7QRtYP0re6Hf20CJgK0X16LmBVggEh4k6nriZ25IaSkUa2IJs4TDkGqW8CiycjksNz7zofG-pdSL8t~N~X5BsklrxAPvjmYWX3rr90KtXY3wfN2CTLseGtE886hgMG8eQpBemc0rFLPUthmy8Ceh0gTZo9-VxiwLgfZlBQ33l~E-GOj~HIef~k77sk4x8OJsxn5pZ9n5A5wBxrXuoReZxI68hNUtJG825dsFmDtfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img3"/>
                    </div>



                    <div className="sj-image-row2">
                        <img className="sj-img4" src="https://s3-alpha-sig.figma.com/img/30f5/97da/61c09707ca0a5bdbba669cc16464b701?Expires=1681689600&Signature=VIK34S95050pQvtni7BRSl3dx~NxJgRumX8dwbMD46iYbiMkXpn8Y0SP~t5LPgqCE9u0L-L~Qs5uqw~MC3x8ew6b6M8sndkJ1z05PAC344lCeycaYrhuU0l8nyT-k~YODIW9KAJRxhOIOFXzjuMhyfRYZAOKRuDFAACg6BhASs10OOtC3yosYyrrbjIi-eM67~D92I17HYiKJ-z1HAf8lpk6fBZ9qScHQD-ULsIhYtP8uthWL~fsjcQxzw397EQWFq-ADujUBcvwkKwdUA3LOsHc~2iITEMezFkmyiriUCQZWc4o-4S77Et3OJcXyxicsmdaRfDGcj3QYppXeEHBZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img4"/>
                        <img className="sj-img5" src="https://s3-alpha-sig.figma.com/img/3f07/8fc6/ae1ca777d18432dc9d6d1909922166a0?Expires=1681689600&Signature=OAYznbBEBkLnvftT1o24eXQIcDhv35BlV6XP6yDTRfIESzn6cBYaC0p~vMMQxY15rVmQXtlUFDKGTWW11fRTTl0i1N42VKcbOL5m-ZW7f~m5HyuSzQip2kTyroPIO7J0aPLBWdyoCkfs6TCIq-z4ZdPGk0TxLI2CGpd0vNVMfDwY5umPX~HoiqLbsfrywCcVPYTX24EfPOSq0rGhaRiJcfk78Pke6xhwbJFYb7pzTrHNYdI34Rtt4tmHdqP8z~HWJY3d9gDQnacs2ig-C46HaGE~1ThtDF5~uLN0~i~C8hTAtRv7fv82mArDaatNgLNEsINn5S7qzouLzYwPGwXEnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img5"/>
                        <img className="sj-img6" src="https://s3-alpha-sig.figma.com/img/850e/a5e7/9b555779d02fcd6ccebec2b1def760a3?Expires=1681689600&Signature=qAwszp~6ec3a8XUYvap4rzGCeR505rQsFKf8QjAEeskWQNSso~QHQAn6Il1t42CGu7I-tRuRhqxnoozMv0MZF1yB6Ebe9Y45wcx4X~MHJ5C5v0qQQrqyTuvQ4BbmMn9jNXVgYBjNblSFpVP47~BZg~5kwDl5BzOHVrXe48gxCwWoqf2RSi~oKKjPeMH5jeg5dhvmO55WG2RLf36FivhYsIdK03FNVGEmBmS2jATHWWQW6YhZ256wmWwexH0H53lDMI1tZvN2XPB~EJOgTxHLdjyb7qsYaw3T3Y4RU655ZmOAfyuQHBWoa-EvboPyeBCUXIcztfjL~IaUn0aq-VryLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img6"/>
                    </div>
                </div>









                <div className="sj-2-text">
                    <div className="sj-2-heading">Meet Our Team</div>
                    <div className="sj-2-subheading">
                        Use This Section To Describe Your Company And The Motto
                    </div>
                    <div className="sj-2-body">
                        Aperiam voluptatum eius impedit dignissimos expedita
                        consequatur qui. Cupiditate modi occaecati et. Numquam
                        aut fuga nulla voluptates adipisci et vero. Praesentium
                        quo perspiciatis itaque voluptatum id magni harum.
                    </div>
                    <div className="sj-2-btn-container">
                        <Button
                            className="sj-2-btn try-it-now-btn lg:inline-block"
                            variant="gradient"
                            size="sm"
                        >
                            <span>Learn more</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartJourney;
