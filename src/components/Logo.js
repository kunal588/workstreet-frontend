import React from 'react'
import '../logoSvg.css'
function Logo() {
    return (
        <div className="container">
            <div className="divSvg">
                <div id="layer3"></div>
                <div id="divContainingShawdow">
                    <div id="shadow">{}</div>
                </div>
                <svg width="1075" height="139" id="logo" viewBox="0 0 1075 139" fill="none">
                    <path
                        d="M64.025 9.22498C63.4417 8.87499 62.7417 8.69999 61.925 8.69999H53C51.0167 8.69999 50.025 9.45832 50.025 10.975C50.025 11.325 50.1417 11.85 50.375 12.55L75.75 73.275C73.0667 79.6917 70.4417 86.1083 67.875 92.525C65.8553 97.4825 63.8717 102.476 61.9242 107.506C61.3968 108.868 60.8721 110.233 60.35 111.6L23.075 19.9C21.325 15.5833 20.1 12.6667 19.4 11.15C18.7 9.51665 17.5333 8.69999 15.9 8.69999H6.975C4.99167 8.69999 4 9.45832 4 10.975C4 11.675 4.11667 12.2 4.35 12.55L54.05 132.075C54.6333 133.358 55.7417 134 57.375 134H62.975C63.9083 134 64.6083 133.942 65.075 133.825C65.5417 133.592 66.0083 132.95 66.475 131.9L83.275 91.3L100.075 131.9C100.542 132.833 101.008 133.417 101.475 133.65C101.942 133.883 102.642 134 103.575 134H109.175C110.108 134 110.808 133.883 111.275 133.65C111.742 133.417 112.15 132.833 112.5 131.9L162.2 12.55C162.433 11.85 162.55 11.325 162.55 10.975C162.55 9.45832 161.617 8.69999 159.75 8.69999H150.825C149.075 8.69999 147.85 9.45832 147.15 10.975C146.45 12.4917 145.283 15.4667 143.65 19.9L106.375 111.425L69.1 19.9C68.1667 17.6833 67.4083 15.875 66.825 14.475C66.3583 13.075 65.8917 11.9667 65.425 11.15C65.075 10.2167 64.6083 9.57498 64.025 9.22498ZM64.025 9.22498L65.5685 6.65249M65.5685 6.65249C64.4332 5.97134 63.1759 5.69999 61.925 5.69999H53C51.7106 5.69999 50.1937 5.93181 48.9464 6.88567C47.5468 7.95595 47.025 9.50629 47.025 10.975C47.025 11.8398 47.2809 12.7544 47.5289 13.4987L47.5641 13.6041L72.4987 73.2753C69.9787 79.3173 67.5102 85.3594 65.0932 91.4016C63.4652 95.3978 61.8607 99.4172 60.2795 103.46L25.8552 18.7729L25.8547 18.7715C24.1205 14.4939 22.8759 11.5261 22.1398 9.92734C21.6239 8.73949 20.8496 7.64526 19.7204 6.85479C18.5612 6.04339 17.2386 5.69999 15.9 5.69999H6.975C5.68559 5.69999 4.16874 5.93181 2.9214 6.88567C1.5218 7.95595 1 9.50629 1 10.975C1 11.8222 1.11343 12.9056 1.66104 13.8969L51.2987 133.272L51.3189 133.316C51.8416 134.466 52.6667 135.45 53.8156 136.115C54.936 136.764 56.1732 137 57.375 137H62.975C63.9697 137 64.9688 136.944 65.8026 136.735L66.1221 136.656L66.4166 136.508C67.246 136.094 67.8196 135.458 68.2012 134.933C68.6001 134.385 68.932 133.758 69.2164 133.118L69.2322 133.083L83.275 99.1462L97.3439 133.146L97.3917 133.242C97.9059 134.27 98.7389 135.636 100.133 136.333C101.227 136.88 102.488 137 103.575 137H109.175C110.262 137 111.523 136.88 112.617 136.333C114.131 135.576 114.881 134.079 115.289 133.007L165.012 13.6024L165.046 13.4987C165.294 12.7544 165.55 11.8398 165.55 10.975C165.55 9.57049 165.087 8.03374 163.742 6.9404C162.515 5.94387 161.012 5.69999 159.75 5.69999H150.825C149.512 5.69999 148.194 5.98772 147.015 6.71794C145.826 7.45373 144.982 8.51261 144.426 9.71781C143.671 11.3532 142.472 14.4212 140.852 18.8154L106.375 103.471L71.8718 18.7521L71.8649 18.7358C70.9542 16.5729 70.2112 14.8013 69.6355 13.4201C69.1791 12.0643 68.6879 10.8605 68.1446 9.86705C67.6552 8.65686 66.8672 7.43175 65.5685 6.65249ZM195.929 117.2L195.939 117.211L195.95 117.221C202.059 123.331 209.202 128.15 217.354 131.678C225.567 135.233 234.375 137 243.746 137C253.005 137 261.754 135.231 269.963 131.678C278.115 128.15 285.258 123.331 291.367 117.221C297.588 111.001 302.467 103.801 305.999 95.6417C309.552 87.4334 311.321 78.6844 311.321 69.425C311.321 60.1656 309.552 51.4166 305.999 43.2083C302.469 35.0531 297.591 27.9104 291.368 21.8041C285.261 15.5806 278.118 10.7019 269.963 7.17182C261.754 3.61897 253.005 1.84999 243.746 1.84999C234.375 1.84999 225.567 3.61683 217.354 7.17182C209.194 10.7038 202.048 15.5861 195.939 21.8145C189.835 27.9214 185.019 35.061 181.493 43.2083C177.94 51.4166 176.171 60.1656 176.171 69.425C176.171 78.6844 177.94 87.4334 181.493 95.6417C185.019 103.788 189.832 110.982 195.929 117.2ZM268.771 9.92498C276.588 13.3083 283.413 17.975 289.246 23.925C295.196 29.7583 299.863 36.5833 303.246 44.4C306.629 52.2167 308.321 60.5583 308.321 69.425C308.321 78.2917 306.629 86.6333 303.246 94.45C299.863 102.267 295.196 109.15 289.246 115.1C283.413 120.933 276.588 125.542 268.771 128.925C260.954 132.308 252.613 134 243.746 134C234.763 134 226.363 132.308 218.546 128.925C210.729 125.542 203.904 120.933 198.071 115.1C192.238 109.15 187.629 102.267 184.246 94.45C180.863 86.6333 179.171 78.2917 179.171 69.425C179.171 60.5583 180.863 52.2167 184.246 44.4C187.629 36.5833 192.238 29.7583 198.071 23.925C203.904 17.975 210.729 13.3083 218.546 9.92498C226.363 6.54165 234.763 4.84999 243.746 4.84999C252.613 4.84999 260.954 6.54165 268.771 9.92498ZM261.977 113.048L261.967 113.052L261.957 113.056C256.287 115.564 250.227 116.825 243.746 116.825C237.144 116.825 230.964 115.563 225.175 113.052C219.44 110.514 214.445 107.107 210.167 102.829C205.895 98.5563 202.49 93.5689 199.954 87.8433C197.551 82.0442 196.346 75.9132 196.346 69.425C196.346 62.806 197.556 56.6771 199.953 51.0067C202.493 45.1579 205.899 40.1141 210.167 35.8463C214.437 31.576 219.42 28.2327 225.14 25.8129L225.153 25.8075L225.165 25.802C230.957 23.2886 237.141 22.025 243.746 22.025C250.227 22.025 256.287 23.2857 261.957 25.7936L261.989 25.8075L262.021 25.8208C267.856 28.2429 272.889 31.5856 277.15 35.8463C281.41 40.107 284.753 45.14 287.175 50.9751L287.188 51.007L287.202 51.0385C289.707 56.702 290.971 62.8194 290.971 69.425C290.971 75.9064 289.71 82.0324 287.194 87.8307L287.188 87.8434L287.183 87.8561C284.763 93.5755 281.42 98.5584 277.15 102.829C272.879 107.099 267.831 110.507 261.977 113.048ZM208.046 104.95C212.596 109.5 217.904 113.117 223.971 115.8C230.154 118.483 236.746 119.825 243.746 119.825C250.629 119.825 257.104 118.483 263.171 115.8C269.354 113.117 274.721 109.5 279.271 104.95C283.821 100.4 287.379 95.0917 289.946 89.025C292.629 82.8417 293.971 76.3083 293.971 69.425C293.971 62.425 292.629 55.8917 289.946 49.825C287.379 43.6417 283.821 38.275 279.271 33.725C274.721 29.175 269.354 25.6167 263.171 23.05C257.104 20.3667 250.629 19.025 243.746 19.025C236.746 19.025 230.154 20.3667 223.971 23.05C217.904 25.6167 212.596 29.175 208.046 33.725C203.496 38.275 199.879 43.6417 197.196 49.825C194.629 55.8917 193.346 62.425 193.346 69.425C193.346 76.3083 194.629 82.8417 197.196 89.025C199.879 95.0917 203.496 100.4 208.046 104.95ZM398.989 134C398.055 134 397.297 133.767 396.714 133.3C396.13 132.717 395.605 132.075 395.139 131.375L368.714 87.45H338.789V131.375C338.789 133.125 337.914 134 336.164 134H327.064C325.197 134 324.264 133.125 324.264 131.375V76.075C324.264 74.0917 325.197 73.1 327.064 73.1H377.989C381.139 72.8667 384.055 72.05 386.739 70.65C389.539 69.1333 391.989 67.2667 394.089 65.05C396.189 62.7167 397.822 60.0917 398.989 57.175C400.272 54.2583 400.914 51.225 400.914 48.075C400.914 44.925 400.272 41.8333 398.989 38.8C397.705 35.7667 395.955 33.0833 393.739 30.75C391.639 28.4167 389.072 26.55 386.039 25.15C383.122 23.75 380.03 23.05 376.764 23.05H334.589C332.722 23.05 331.789 22.0583 331.789 20.075V11.325C331.789 9.57499 332.722 8.69999 334.589 8.69999H376.939C382.189 8.69999 387.147 9.74999 391.814 11.85C396.48 13.95 400.564 16.8083 404.064 20.425C407.564 23.925 410.364 28.0667 412.464 32.85C414.564 37.6333 415.614 42.65 415.614 47.9C415.614 52.3333 414.855 56.65 413.339 60.85C411.822 64.9333 409.722 68.6667 407.039 72.05C404.472 75.4333 401.38 78.4083 397.764 80.975C394.985 82.9469 392 84.5057 388.808 85.6512C387.845 85.9967 386.864 86.3047 385.864 86.575L413.164 132.075C413.514 132.775 413.689 133.242 413.689 133.475C413.689 133.825 413.164 134 412.114 134H398.989ZM390.379 88.27C393.617 87.054 396.659 85.4373 399.5 83.4215C403.345 80.6925 406.654 77.5153 409.409 73.8889C412.281 70.2628 414.529 66.2609 416.151 61.8946L416.156 61.8818L416.16 61.8689C417.794 57.3446 418.614 52.6833 418.614 47.9C418.614 42.2369 417.478 36.8094 415.211 31.644C412.973 26.5463 409.972 22.0954 406.202 18.3212C402.437 14.435 398.045 11.3641 393.045 9.11422C387.981 6.83547 382.602 5.69999 376.939 5.69999H334.589C333.239 5.69999 331.669 6.01243 330.437 7.16762C329.168 8.35695 328.789 9.93623 328.789 11.325V20.075C328.789 21.4853 329.117 23.1011 330.304 24.3623C331.523 25.6577 333.145 26.05 334.589 26.05H376.764C379.585 26.05 382.233 26.651 384.74 27.8546L384.761 27.8644L384.781 27.8739C387.469 29.1144 389.698 30.7452 391.509 32.7569L391.536 32.7869L391.564 32.8162C393.526 34.8821 395.08 37.2597 396.226 39.9689C397.36 42.6496 397.914 45.3448 397.914 48.075C397.914 50.8041 397.361 53.4263 396.243 55.9668L396.222 56.0135L396.203 56.0608C395.172 58.638 393.735 60.9514 391.884 63.0149C390.022 64.9744 387.843 66.6373 385.33 68.0011C383.06 69.1818 380.585 69.8858 377.874 70.1H327.064C325.62 70.1 323.998 70.4922 322.779 71.7876C321.592 73.0489 321.264 74.6647 321.264 76.075V131.375C321.264 132.764 321.643 134.343 322.912 135.532C324.144 136.688 325.714 137 327.064 137H336.164C337.501 137 339.055 136.664 340.254 135.465C341.452 134.267 341.789 132.712 341.789 131.375V90.45H367.017L392.604 132.981L392.643 133.039C393.217 133.9 393.867 134.696 394.592 135.421L394.71 135.539L394.84 135.643C396.076 136.632 397.548 137 398.989 137H412.114C412.726 137 413.512 136.959 414.244 136.715C414.898 136.497 416.689 135.643 416.689 133.475C416.689 132.78 416.47 132.172 416.366 131.897C416.228 131.526 416.046 131.131 415.847 130.733L415.795 130.63L390.379 88.27ZM516.788 128.931L516.668 128.764L476.654 86.4058L514.573 46.4911C515.241 45.8162 516.209 44.6217 516.209 43C516.209 41.0342 514.861 39.8733 513.878 39.3275C512.448 38.5327 510.901 38.075 509.271 38.075H497.371C495.642 38.075 494.116 38.7385 492.908 39.898C492.181 40.5082 491.502 41.1266 490.875 41.7537L490.846 41.7828L449.621 85.3408V84.4414L503.728 27.0606C504.51 26.2673 505.271 25.0949 505.271 23.575C505.271 22.757 505.069 21.9025 504.573 21.1222C504.084 20.354 503.417 19.826 502.745 19.4737C501.488 18.8155 499.986 18.65 498.596 18.65H486.697C484.967 18.65 483.441 19.3136 482.233 20.4731C481.506 21.0833 480.827 21.7016 480.2 22.3287L480.167 22.3614L449.621 54.8539V12.725C449.621 10.8089 448.931 9.08138 447.596 7.70827C446.222 6.16218 444.358 5.52499 442.421 5.52499H436.296C434.359 5.52499 432.493 6.16302 431.119 7.71145C429.765 9.11578 429.271 10.9276 429.271 12.725V129.8C429.271 131.631 429.708 133.561 431.112 135.026C432.538 136.514 434.459 137 436.296 137H442.421C444.284 137 446.232 136.532 447.693 135.071C449.154 133.61 449.621 131.662 449.621 129.8V114.905L462.705 101.253L492.945 133.291L492.975 133.321C493.488 133.834 494.011 134.408 494.542 135.046L494.716 135.255L494.926 135.43C496.179 136.474 497.68 137 499.296 137H511.197C512.462 137 513.682 136.86 514.821 136.535L515.003 136.482L515.178 136.407C516.44 135.867 518.221 134.615 518.221 132.25C518.221 131.647 518.052 131.166 517.967 130.943C517.863 130.672 517.737 130.426 517.625 130.224C517.4 129.819 517.108 129.379 516.788 128.931ZM512.421 44.4L472.521 86.4L514.346 130.675C514.93 131.492 515.221 132.017 515.221 132.25C515.221 132.833 514.813 133.3 513.996 133.65C513.18 133.883 512.246 134 511.197 134H499.296C498.363 134 497.546 133.708 496.846 133.125C496.263 132.425 495.68 131.783 495.096 131.2L462.721 96.9L446.621 113.7V129.8C446.621 132.6 445.221 134 442.421 134H436.296C433.613 134 432.271 132.6 432.271 129.8V12.725C432.271 11.4417 432.621 10.45 433.321 9.74998C434.021 8.93332 435.013 8.52499 436.296 8.52499H442.421C443.705 8.52499 444.696 8.93332 445.396 9.74998C446.213 10.5667 446.621 11.5583 446.621 12.725V62.425L482.321 24.45C482.905 23.8667 483.546 23.2833 484.246 22.7C484.946 22 485.763 21.65 486.697 21.65H498.596C501.046 21.65 502.271 22.2917 502.271 23.575C502.271 24.0417 502.038 24.5083 501.572 24.975L446.621 83.25V92.875L492.996 43.875C493.58 43.2917 494.221 42.7083 494.921 42.125C495.621 41.425 496.438 41.075 497.371 41.075H509.271C510.322 41.075 511.371 41.3667 512.421 41.95C513.471 42.5333 513.471 43.35 512.421 44.4ZM557.154 30.0434L557.18 30.0183L557.23 29.9627C559.263 27.716 561.491 25.863 563.915 24.3876L563.93 24.3784L563.945 24.369C566.37 22.8538 569.051 21.8864 572.023 21.4742C573.298 21.3121 574.687 20.8837 575.782 19.8573C576.966 18.7478 577.43 17.2956 577.43 15.875V7.82499C577.43 6.3843 577.062 4.91268 576.073 3.6759C574.898 2.20673 573.226 1.67499 571.63 1.67499H571.565L571.5 1.67782C565.725 1.92891 560.294 3.31412 555.239 5.84171L555.225 5.84855L555.211 5.85554C550.364 8.34143 546.117 11.5232 542.489 15.4005C538.861 19.2797 535.987 23.7196 533.869 28.7016L533.857 28.7311L533.845 28.7608C531.837 33.7812 530.83 39.0009 530.83 44.4C530.83 50.3709 532.232 56.1367 534.997 61.6666C536.517 64.707 538.469 67.5963 540.835 70.3358L540.86 70.3647L540.885 70.393C543.202 72.9413 545.46 75.4889 547.66 78.0358C549.729 80.4317 551.463 82.9806 552.869 85.6841L552.89 85.7253L552.913 85.7658C554.283 88.2133 554.98 90.9132 554.98 93.925C554.98 96.5203 554.434 99.2224 553.284 102.05C552.119 104.8 550.586 107.34 548.68 109.674C546.787 111.877 544.578 113.77 542.04 115.356C539.605 116.878 537.058 117.77 534.374 118.068L534.354 118.071L534.333 118.073C533.012 118.238 531.586 118.701 530.484 119.804C529.327 120.96 528.905 122.438 528.905 123.85V131.55C528.905 132.991 529.273 134.462 530.263 135.699C531.438 137.168 533.11 137.7 534.705 137.7H534.805L534.905 137.693C540.526 137.319 545.807 135.94 550.719 133.547C555.601 131.169 559.823 128.023 563.357 124.111C566.857 120.235 569.609 115.856 571.606 110.989L571.611 110.976L571.616 110.964C573.627 105.935 574.63 100.657 574.63 95.15C574.63 90.6764 574.009 86.5916 572.706 82.941C571.464 79.4648 569.847 76.223 567.851 73.2231C566.019 70.2966 563.891 67.5009 561.474 64.8355C559.303 62.2058 557.188 59.5189 555.13 56.775C552.33 53.0408 551.005 49.1704 551.005 45.1C551.005 43.7097 551.233 42.2292 551.719 40.648C552.377 38.9013 553.084 37.275 553.839 35.7666L553.857 35.7304L553.874 35.6936C554.641 34.0494 555.333 32.7189 555.95 31.682C556.32 31.1542 556.614 30.7464 556.837 30.45C556.954 30.2935 557.042 30.1807 557.104 30.1043C557.129 30.0733 557.146 30.0537 557.154 30.0434ZM550.98 111.6C553.08 109.033 554.772 106.233 556.055 103.2C557.339 100.05 557.98 96.9583 557.98 93.925C557.98 90.425 557.164 87.2167 555.53 84.3C554.014 81.3833 552.147 78.6417 549.93 76.075C547.714 73.5083 545.439 70.9417 543.105 68.375C540.889 65.8083 539.08 63.125 537.68 60.325C535.114 55.1917 533.83 49.8833 533.83 44.4C533.83 39.3833 534.764 34.5417 536.63 29.875C538.614 25.2083 541.297 21.0667 544.68 17.45C548.064 13.8333 552.03 10.8583 556.58 8.52499C561.247 6.19165 566.264 4.90832 571.63 4.67499C572.564 4.67499 573.264 4.96665 573.73 5.54999C574.197 6.13332 574.43 6.89165 574.43 7.82499V15.875C574.43 17.3917 573.497 18.2667 571.63 18.5C568.247 18.9667 565.155 20.075 562.355 21.825C559.672 23.4583 557.222 25.5 555.005 27.95C554.772 28.1833 554.247 28.8833 553.43 30.05C552.73 31.2167 551.972 32.675 551.155 34.425C550.339 36.0583 549.58 37.8083 548.88 39.675C548.297 41.5417 548.005 43.35 548.005 45.1C548.005 49.8833 549.58 54.375 552.73 58.575C554.83 61.375 556.989 64.1167 559.205 66.8C561.539 69.3667 563.58 72.05 565.33 74.85C567.197 77.65 568.714 80.6833 569.88 83.95C571.047 87.2167 571.63 90.95 571.63 95.15C571.63 100.283 570.697 105.183 568.83 109.85C566.964 114.4 564.397 118.483 561.13 122.1C557.864 125.717 553.955 128.633 549.405 130.85C544.855 133.067 539.955 134.35 534.705 134.7C533.772 134.7 533.072 134.408 532.605 133.825C532.139 133.242 531.905 132.483 531.905 131.55V123.85C531.905 122.217 532.839 121.283 534.705 121.05C537.855 120.7 540.83 119.65 543.63 117.9C546.43 116.15 548.88 114.05 550.98 111.6ZM668.162 11.0279L668.104 10.7366C667.836 9.39705 667.227 8.04631 666.033 7.05157C664.832 6.05112 663.388 5.69999 662.012 5.69999H613.537C612.188 5.69999 610.618 6.01243 609.385 7.16762C608.117 8.35695 607.737 9.93623 607.737 11.325V131.2C607.737 132.596 608.088 134.194 609.316 135.421C610.544 136.649 612.142 137 613.537 137H622.287C623.833 137 625.45 136.501 626.618 135.134C627.596 134.111 628.262 132.778 628.262 131.2V26.225H662.012C663.567 26.225 665.274 25.8067 666.553 24.457C667.802 23.1377 668.162 21.4315 668.162 19.9V11.0279ZM625.262 131.2C625.262 131.9 624.971 132.542 624.387 133.125C623.921 133.708 623.221 134 622.287 134H613.537C611.671 134 610.737 133.067 610.737 131.2V11.325C610.737 9.57499 611.671 8.69999 613.537 8.69999H662.012C663.762 8.69999 664.812 9.57499 665.162 11.325V19.9C665.162 22.1167 664.112 23.225 662.012 23.225H625.262V131.2ZM756.508 134C755.575 134 754.817 133.767 754.233 133.3C753.65 132.717 753.125 132.075 752.658 131.375L726.233 87.45H696.308V131.375C696.308 133.125 695.433 134 693.683 134H684.583C682.717 134 681.783 133.125 681.783 131.375V76.075C681.783 74.0917 682.717 73.1 684.583 73.1H735.508C738.658 72.8667 741.575 72.05 744.258 70.65C747.058 69.1333 749.508 67.2667 751.608 65.05C753.708 62.7167 755.342 60.0917 756.508 57.175C757.792 54.2583 758.433 51.225 758.433 48.075C758.433 44.925 757.792 41.8333 756.508 38.8C755.225 35.7667 753.475 33.0833 751.258 30.75C749.158 28.4167 746.592 26.55 743.558 25.15C740.642 23.75 737.55 23.05 734.283 23.05H692.108C690.242 23.05 689.308 22.0583 689.308 20.075V11.325C689.308 9.57499 690.242 8.69999 692.108 8.69999H734.458C739.708 8.69999 744.667 9.74999 749.333 11.85C754 13.95 758.083 16.8083 761.583 20.425C765.083 23.925 767.883 28.0667 769.983 32.85C772.083 37.6333 773.133 42.65 773.133 47.9C773.133 52.3333 772.375 56.65 770.858 60.85C769.342 64.9333 767.242 68.6667 764.558 72.05C761.992 75.4333 758.9 78.4083 755.283 80.975C752.505 82.9469 749.519 84.5057 746.328 85.6512C745.365 85.9967 744.383 86.3047 743.383 86.575L770.683 132.075C771.033 132.775 771.208 133.242 771.208 133.475C771.208 133.825 770.683 134 769.633 134H756.508ZM747.899 88.27C751.137 87.054 754.179 85.4373 757.019 83.4215C760.865 80.6923 764.174 77.5148 766.929 73.888C769.801 70.2622 772.049 66.2605 773.67 61.8946L773.675 61.8818L773.68 61.8689C775.314 57.3446 776.133 52.6833 776.133 47.9C776.133 42.2369 774.998 36.8094 772.73 31.644C770.492 26.5463 767.492 22.0954 763.722 18.3211C759.957 14.435 755.564 11.3641 750.564 9.11422C745.5 6.83547 740.121 5.69999 734.458 5.69999H692.108C690.759 5.69999 689.189 6.01243 687.956 7.16762C686.688 8.35695 686.308 9.93623 686.308 11.325V20.075C686.308 21.4853 686.637 23.1011 687.824 24.3623C689.043 25.6577 690.664 26.05 692.108 26.05H734.283C737.105 26.05 739.753 26.651 742.26 27.8546L742.28 27.8644L742.301 27.8739C744.989 29.1144 747.218 30.7452 749.028 32.7569L749.055 32.7869L749.083 32.8162C751.046 34.8821 752.599 37.2597 753.745 39.9689C754.879 42.6496 755.433 45.3448 755.433 48.075C755.433 50.8041 754.88 53.4263 753.762 55.9668L753.742 56.0135L753.723 56.0608C752.692 58.6382 751.255 60.9518 749.403 63.0154C747.541 64.9745 745.363 66.6371 742.85 68.0007C740.58 69.1817 738.105 69.8858 735.394 70.1H684.583C683.139 70.1 681.518 70.4922 680.299 71.7876C679.112 73.0489 678.783 74.6647 678.783 76.075V131.375C678.783 132.764 679.163 134.343 680.431 135.532C681.664 136.688 683.234 137 684.583 137H693.683C695.021 137 696.575 136.664 697.773 135.465C698.972 134.267 699.308 132.712 699.308 131.375V90.45H724.537L750.123 132.981L750.162 133.039C750.736 133.9 751.386 134.696 752.112 135.421L752.229 135.539L752.359 135.643C753.596 136.632 755.068 137 756.508 137H769.633C770.246 137 771.032 136.959 771.763 136.715C772.418 136.497 774.208 135.643 774.208 133.475C774.208 132.78 773.989 132.172 773.886 131.897C773.747 131.526 773.565 131.131 773.366 130.733L773.315 130.63L747.899 88.27ZM864.934 96.3241L865.015 96.2224L865.087 96.1141C865.815 95.0222 866.291 93.7529 866.291 92.35V83.425C866.291 82.0757 865.979 80.5054 864.823 79.2732C863.634 78.0045 862.055 77.625 860.666 77.625H807.491V61.925H860.666C862.297 61.925 863.84 61.2916 864.934 59.9241C865.866 58.7583 866.291 57.3802 866.291 55.95V47.2C866.291 45.7698 865.866 44.3917 864.934 43.2259C863.84 41.8584 862.297 41.225 860.666 41.225H807.491V26.225H875.191C876.684 26.225 878.326 25.7888 879.533 24.4306C880.681 23.1397 880.991 21.5061 880.991 20.075V11.325C880.991 9.98755 880.655 8.43346 879.456 7.23492C878.258 6.03638 876.703 5.69999 875.366 5.69999H792.591C791.286 5.69999 789.748 5.97673 788.516 7.05476C787.207 8.19974 786.791 9.75902 786.791 11.15V131.2C786.791 132.596 787.142 134.194 788.37 135.421C789.597 136.649 791.195 137 792.591 137H874.841C876.295 137 877.937 136.634 879.194 135.378C880.45 134.121 880.816 132.479 880.816 131.025V122.45C880.816 120.903 880.316 119.285 878.947 118.116C877.743 116.974 876.231 116.475 874.666 116.475H807.491V98.325H860.666C862.297 98.325 863.84 97.6916 864.934 96.3241ZM860.666 80.625C862.416 80.625 863.291 81.5583 863.291 83.425V92.35C863.291 93.05 863.058 93.75 862.591 94.45C862.124 95.0333 861.483 95.325 860.666 95.325H804.491V119.475H874.666C875.599 119.475 876.358 119.767 876.941 120.35C877.524 120.817 877.816 121.517 877.816 122.45V131.025C877.816 133.008 876.824 134 874.841 134H792.591C790.724 134 789.791 133.067 789.791 131.2V11.15C789.791 9.51665 790.724 8.69999 792.591 8.69999H875.366C877.116 8.69999 877.991 9.57499 877.991 11.325V20.075C877.991 22.175 877.058 23.225 875.191 23.225H804.491V44.225H860.666C861.483 44.225 862.124 44.5167 862.591 45.1C863.058 45.6833 863.291 46.3833 863.291 47.2V55.95C863.291 56.7667 863.058 57.4667 862.591 58.05C862.124 58.6333 861.483 58.925 860.666 58.925H804.491V80.625H860.666ZM969.694 96.3241L969.776 96.2224L969.848 96.1141C970.576 95.0222 971.052 93.7529 971.052 92.35V83.425C971.052 82.0757 970.739 80.5054 969.584 79.2732C968.395 78.0045 966.816 77.625 965.427 77.625H912.252V61.925H965.427C967.058 61.925 968.6 61.2916 969.694 59.9241C970.627 58.7583 971.052 57.3802 971.052 55.95V47.2C971.052 45.7698 970.627 44.3917 969.694 43.2259C968.6 41.8584 967.058 41.225 965.427 41.225H912.252V26.225H979.952C981.445 26.225 983.087 25.7888 984.294 24.4306C985.441 23.1397 985.752 21.5061 985.752 20.075V11.325C985.752 9.98755 985.415 8.43346 984.217 7.23492C983.018 6.03638 981.464 5.69999 980.127 5.69999H897.352C896.047 5.69999 894.508 5.97673 893.276 7.05476C891.968 8.19974 891.552 9.75902 891.552 11.15V131.2C891.552 132.596 891.903 134.194 893.13 135.421C894.358 136.649 895.956 137 897.352 137H979.602C981.056 137 982.697 136.634 983.954 135.378C985.211 134.121 985.577 132.479 985.577 131.025V122.45C985.577 120.903 985.077 119.285 983.708 118.116C982.504 116.974 980.991 116.475 979.427 116.475H912.252V98.325H965.427C967.058 98.325 968.6 97.6916 969.694 96.3241ZM965.427 80.625C967.177 80.625 968.052 81.5583 968.052 83.425V92.35C968.052 93.05 967.818 93.75 967.352 94.45C966.885 95.0333 966.243 95.325 965.427 95.325H909.252V119.475H979.427C980.36 119.475 981.118 119.767 981.702 120.35C982.285 120.817 982.577 121.517 982.577 122.45V131.025C982.577 133.008 981.585 134 979.602 134H897.352C895.485 134 894.552 133.067 894.552 131.2V11.15C894.552 9.51665 895.485 8.69999 897.352 8.69999H980.127C981.877 8.69999 982.752 9.57499 982.752 11.325V20.075C982.752 22.175 981.818 23.225 979.952 23.225H909.252V44.225H965.427C966.243 44.225 966.885 44.5167 967.352 45.1C967.818 45.6833 968.052 46.3833 968.052 47.2V55.95C968.052 56.7667 967.818 57.4667 967.352 58.05C966.885 58.6333 966.243 58.925 965.427 58.925H909.252V80.625H965.427ZM1073.36 11.0279L1073.3 10.7366C1073.04 9.39705 1072.43 8.04631 1071.23 7.05157C1070.03 6.05112 1068.59 5.69999 1067.21 5.69999H1018.74C1017.39 5.69999 1015.82 6.01243 1014.59 7.16762C1013.32 8.35695 1012.94 9.93623 1012.94 11.325V131.2C1012.94 132.596 1013.29 134.194 1014.52 135.421C1015.74 136.649 1017.34 137 1018.74 137H1027.49C1029.03 137 1030.65 136.501 1031.82 135.136C1032.8 134.112 1033.46 132.779 1033.46 131.2V26.225H1067.21C1068.77 26.225 1070.47 25.8067 1071.75 24.457C1073 23.1377 1073.36 21.4315 1073.36 19.9V11.0279ZM1030.46 131.2C1030.46 131.9 1030.17 132.542 1029.59 133.125C1029.12 133.708 1028.42 134 1027.49 134H1018.74C1016.87 134 1015.94 133.067 1015.94 131.2V11.325C1015.94 9.57499 1016.87 8.69999 1018.74 8.69999H1067.21C1068.96 8.69999 1070.01 9.57499 1070.36 11.325V19.9C1070.36 22.1167 1069.31 23.225 1067.21 23.225H1030.46V131.2Z"
                        stroke="white"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    )
}
export default Logo
