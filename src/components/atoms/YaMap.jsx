import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

export default function YaMap(props) {

    const defaultState = {
        center: [55.863328, 36.785239],
        zoom: 11,
        controls: []
    }
    return (
        <section className="map cd12 pl0 pr0 relative" id="location">
            <div className={'map__map relative w-full'}>
                <a href='https://kapustin.team' target='_blank' rel="noreferrer" class="label-kapustin">
        <svg width="648" height="100" viewBox="0 0 648 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="647.165" height="138" rx="69" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M100.149 97.9354C108.041 90.7988 113 80.4785 113 69C113 57.4882 108.012 47.1414 100.08 40.0026C96.5048 61.6893 78.7063 78.5809 56.5848 80.7773V103.905C61.8266 106.526 67.7411 108 74 108C80.0548 108 85.7874 106.62 90.9004 104.158C90.6075 95.7369 87.6614 87.9902 82.8723 81.728C85.6451 79.9648 88.2289 77.9309 90.5864 75.6635C95.4862 82.0332 98.8567 89.6403 100.149 97.9354ZM46.7735 96.9235C39.5101 89.8402 35 79.9468 35 69C35 58.0532 39.5101 48.1598 46.7735 41.0765V70.9045V80.7773V96.9235ZM56.5848 34.0947V70.9045C75.3378 68.5661 89.9818 52.9967 90.8807 33.8326C85.7727 31.3763 80.047 30 74 30C67.7411 30 61.8266 31.4744 56.5848 34.0947Z" fill="white"/>
            <path d="M145.848 55.9098C144.096 55.9098 142.56 55.6578 141.24 55.1538C139.944 54.6258 138.864 53.9298 138 53.0658L139.332 51.3378C140.148 52.1058 141.108 52.6938 142.212 53.1018C143.34 53.4858 144.552 53.6778 145.848 53.6778C147.408 53.6778 148.644 53.4018 149.556 52.8498C150.492 52.2978 150.96 51.5658 150.96 50.6538C150.96 50.1258 150.816 49.6818 150.528 49.3218C150.24 48.9378 149.844 48.6378 149.34 48.4218C148.86 48.1818 148.284 48.0138 147.612 47.9178C146.964 47.8218 146.256 47.7738 145.488 47.7738H141.6V45.5778H145.488C146.208 45.5778 146.88 45.5178 147.504 45.3978C148.128 45.2778 148.668 45.0978 149.124 44.8578C149.604 44.6178 149.976 44.3178 150.24 43.9578C150.504 43.5978 150.636 43.1658 150.636 42.6618C150.636 42.2538 150.504 41.8818 150.24 41.5458C149.976 41.1858 149.616 40.8858 149.16 40.6458C148.728 40.4058 148.2 40.2258 147.576 40.1058C146.952 39.9618 146.28 39.8898 145.56 39.8898C143.136 39.8898 141.192 40.6338 139.728 42.1218L138.324 40.4658C139.14 39.6258 140.136 38.9538 141.312 38.4498C142.488 37.9458 143.868 37.6938 145.452 37.6938C146.628 37.6938 147.696 37.8018 148.656 38.0178C149.64 38.2098 150.48 38.5098 151.176 38.9178C151.896 39.3018 152.448 39.7818 152.832 40.3578C153.24 40.9338 153.444 41.5938 153.444 42.3378C153.444 42.9858 153.288 43.5618 152.976 44.0658C152.688 44.5698 152.316 45.0018 151.86 45.3618C151.404 45.6978 150.9 45.9738 150.348 46.1898C149.796 46.3818 149.268 46.5138 148.764 46.5858C149.268 46.6338 149.808 46.7418 150.384 46.9098C150.984 47.0778 151.536 47.3418 152.04 47.7018C152.544 48.0378 152.964 48.4698 153.3 48.9978C153.636 49.5018 153.804 50.1138 153.804 50.8338C153.804 51.5538 153.624 52.2258 153.264 52.8498C152.904 53.4738 152.376 54.0138 151.68 54.4698C151.008 54.9258 150.18 55.2738 149.196 55.5138C148.212 55.7778 147.096 55.9098 145.848 55.9098Z" fill="white"/>
            <path d="M169.056 55.4778V53.4978C167.592 55.1058 165.672 55.9098 163.296 55.9098C162.552 55.9098 161.82 55.7898 161.1 55.5498C160.38 55.3098 159.732 54.9498 159.156 54.4698C158.58 53.9658 158.112 53.3538 157.752 52.6338C157.392 51.9138 157.212 51.0858 157.212 50.1498C157.212 49.1898 157.392 48.3498 157.752 47.6298C158.112 46.9098 158.58 46.3098 159.156 45.8298C159.732 45.3498 160.38 45.0018 161.1 44.7858C161.82 44.5458 162.552 44.4258 163.296 44.4258C164.496 44.4258 165.576 44.6178 166.536 45.0018C167.52 45.3858 168.36 45.9858 169.056 46.8018V43.6698C169.056 42.4938 168.636 41.5938 167.796 40.9698C166.98 40.3218 165.936 39.9978 164.664 39.9978C162.624 39.9978 160.848 40.8018 159.336 42.4098L158.076 40.5378C159.924 38.6178 162.24 37.6578 165.024 37.6578C165.936 37.6578 166.8 37.7658 167.616 37.9818C168.432 38.1978 169.14 38.5458 169.74 39.0258C170.364 39.4818 170.856 40.0818 171.216 40.8258C171.576 41.5698 171.756 42.4698 171.756 43.5258V55.4778H169.056ZM164.268 53.9658C165.228 53.9658 166.128 53.7858 166.968 53.4258C167.832 53.0658 168.528 52.5258 169.056 51.8058V48.5298C168.528 47.8098 167.832 47.2698 166.968 46.9098C166.128 46.5498 165.228 46.3698 164.268 46.3698C162.996 46.3698 161.964 46.7298 161.172 47.4498C160.38 48.1458 159.984 49.0578 159.984 50.1858C159.984 51.2898 160.38 52.2018 161.172 52.9218C161.964 53.6178 162.996 53.9658 164.268 53.9658Z" fill="white"/>
            <path d="M175.117 53.2458C175.525 53.1738 175.885 53.0298 176.197 52.8138C176.533 52.5978 176.833 52.2498 177.097 51.7698C177.385 51.2898 177.637 50.6418 177.853 49.8258C178.069 49.0098 178.261 47.9538 178.429 46.6578L179.545 38.0898H191.641V53.1018H193.657V59.9058H190.957V55.4778H177.817V59.9058H175.117V53.2458ZM181.129 46.9818C180.913 48.6378 180.589 49.9458 180.157 50.9058C179.749 51.8658 179.233 52.5978 178.609 53.1018H188.941V40.4658H181.921L181.129 46.9818Z" fill="white"/>
            <path d="M197.348 55.4778V38.0898H200.048V51.3738L209.156 38.0898H211.82V55.4778H209.12V41.9418L199.94 55.4778H197.348Z" fill="white"/>
            <path d="M223.368 55.9098C221.616 55.9098 220.08 55.6578 218.76 55.1538C217.464 54.6258 216.384 53.9298 215.52 53.0658L216.852 51.3378C217.668 52.1058 218.628 52.6938 219.732 53.1018C220.86 53.4858 222.072 53.6778 223.368 53.6778C224.928 53.6778 226.164 53.4018 227.076 52.8498C228.012 52.2978 228.48 51.5658 228.48 50.6538C228.48 50.1258 228.336 49.6818 228.048 49.3218C227.76 48.9378 227.364 48.6378 226.86 48.4218C226.38 48.1818 225.804 48.0138 225.132 47.9178C224.484 47.8218 223.776 47.7738 223.008 47.7738H219.12V45.5778H223.008C223.728 45.5778 224.4 45.5178 225.024 45.3978C225.648 45.2778 226.188 45.0978 226.644 44.8578C227.124 44.6178 227.496 44.3178 227.76 43.9578C228.024 43.5978 228.156 43.1658 228.156 42.6618C228.156 42.2538 228.024 41.8818 227.76 41.5458C227.496 41.1858 227.136 40.8858 226.68 40.6458C226.248 40.4058 225.72 40.2258 225.096 40.1058C224.472 39.9618 223.8 39.8898 223.08 39.8898C220.656 39.8898 218.712 40.6338 217.248 42.1218L215.844 40.4658C216.66 39.6258 217.656 38.9538 218.832 38.4498C220.008 37.9458 221.388 37.6938 222.972 37.6938C224.148 37.6938 225.216 37.8018 226.176 38.0178C227.16 38.2098 228 38.5098 228.696 38.9178C229.416 39.3018 229.968 39.7818 230.352 40.3578C230.76 40.9338 230.964 41.5938 230.964 42.3378C230.964 42.9858 230.808 43.5618 230.496 44.0658C230.208 44.5698 229.836 45.0018 229.38 45.3618C228.924 45.6978 228.42 45.9738 227.868 46.1898C227.316 46.3818 226.788 46.5138 226.284 46.5858C226.788 46.6338 227.328 46.7418 227.904 46.9098C228.504 47.0778 229.056 47.3418 229.56 47.7018C230.064 48.0378 230.484 48.4698 230.82 48.9978C231.156 49.5018 231.324 50.1138 231.324 50.8338C231.324 51.5538 231.144 52.2258 230.784 52.8498C230.424 53.4738 229.896 54.0138 229.2 54.4698C228.528 54.9258 227.7 55.2738 226.716 55.5138C225.732 55.7778 224.616 55.9098 223.368 55.9098Z" fill="white"/>
            <path d="M246.576 55.4778V53.4978C245.112 55.1058 243.192 55.9098 240.816 55.9098C240.072 55.9098 239.34 55.7898 238.62 55.5498C237.9 55.3098 237.252 54.9498 236.676 54.4698C236.1 53.9658 235.632 53.3538 235.272 52.6338C234.912 51.9138 234.732 51.0858 234.732 50.1498C234.732 49.1898 234.912 48.3498 235.272 47.6298C235.632 46.9098 236.1 46.3098 236.676 45.8298C237.252 45.3498 237.9 45.0018 238.62 44.7858C239.34 44.5458 240.072 44.4258 240.816 44.4258C242.016 44.4258 243.096 44.6178 244.056 45.0018C245.04 45.3858 245.88 45.9858 246.576 46.8018V43.6698C246.576 42.4938 246.156 41.5938 245.316 40.9698C244.5 40.3218 243.456 39.9978 242.184 39.9978C240.144 39.9978 238.368 40.8018 236.856 42.4098L235.596 40.5378C237.444 38.6178 239.76 37.6578 242.544 37.6578C243.456 37.6578 244.32 37.7658 245.136 37.9818C245.952 38.1978 246.66 38.5458 247.26 39.0258C247.884 39.4818 248.376 40.0818 248.736 40.8258C249.096 41.5698 249.276 42.4698 249.276 43.5258V55.4778H246.576ZM241.788 53.9658C242.748 53.9658 243.648 53.7858 244.488 53.4258C245.352 53.0658 246.048 52.5258 246.576 51.8058V48.5298C246.048 47.8098 245.352 47.2698 244.488 46.9098C243.648 46.5498 242.748 46.3698 241.788 46.3698C240.516 46.3698 239.484 46.7298 238.692 47.4498C237.9 48.1458 237.504 49.0578 237.504 50.1858C237.504 51.2898 237.9 52.2018 238.692 52.9218C239.484 53.6178 240.516 53.9658 241.788 53.9658Z" fill="white"/>
            <path d="M254.688 55.4778V38.0898H257.388V51.3738L266.496 38.0898H269.16V55.4778H266.46V41.9418L257.28 55.4778H254.688ZM268.224 32.9418C267.504 33.9258 266.592 34.7058 265.488 35.2818C264.408 35.8338 263.22 36.1098 261.924 36.1098C260.628 36.1098 259.428 35.8338 258.324 35.2818C257.244 34.7058 256.332 33.9258 255.588 32.9418L256.92 31.7898C257.496 32.5818 258.204 33.2178 259.044 33.6978C259.884 34.1538 260.844 34.3818 261.924 34.3818C262.98 34.3818 263.928 34.1538 264.768 33.6978C265.632 33.2418 266.34 32.6058 266.892 31.7898L268.224 32.9418Z" fill="white"/>
            <path d="M274.551 55.4778V38.0898H277.251V45.3258H286.323V38.0898H289.023V55.4778H286.323V47.7018H277.251V55.4778H274.551Z" fill="white"/>
            <path d="M302.263 55.9098C300.967 55.9098 299.779 55.6938 298.699 55.2618C297.619 54.8058 296.683 54.1818 295.891 53.3898C295.123 52.5738 294.511 51.6138 294.055 50.5098C293.623 49.3818 293.407 48.1338 293.407 46.7658C293.407 45.5178 293.623 44.3418 294.055 43.2378C294.487 42.1098 295.075 41.1378 295.819 40.3218C296.587 39.5058 297.487 38.8578 298.519 38.3778C299.575 37.8978 300.727 37.6578 301.975 37.6578C303.295 37.6578 304.471 37.8978 305.503 38.3778C306.535 38.8578 307.411 39.5178 308.131 40.3578C308.851 41.1978 309.391 42.1938 309.751 43.3458C310.135 44.4738 310.327 45.6858 310.327 46.9818V47.6658H296.251C296.299 48.4818 296.479 49.2618 296.791 50.0058C297.103 50.7258 297.523 51.3618 298.051 51.9138C298.603 52.4418 299.251 52.8738 299.995 53.2098C300.739 53.5218 301.579 53.6778 302.515 53.6778C303.523 53.6778 304.495 53.4858 305.431 53.1018C306.367 52.7178 307.183 52.1778 307.879 51.4818L309.175 53.2458C308.311 54.1098 307.303 54.7698 306.151 55.2258C304.999 55.6818 303.703 55.9098 302.263 55.9098ZM307.663 45.6858C307.663 45.0378 307.543 44.3778 307.303 43.7058C307.087 43.0098 306.739 42.3858 306.259 41.8338C305.803 41.2578 305.215 40.7898 304.495 40.4298C303.775 40.0698 302.923 39.8898 301.939 39.8898C301.003 39.8898 300.187 40.0698 299.491 40.4298C298.795 40.7898 298.207 41.2458 297.727 41.7978C297.271 42.3498 296.911 42.9738 296.647 43.6698C296.407 44.3418 296.275 45.0138 296.251 45.6858H307.663Z" fill="white"/>
            <path d="M314.7 55.4778V38.0898H317.4V45.3258H326.472V38.0898H329.172V55.4778H326.472V47.7018H317.4V55.4778H314.7Z" fill="white"/>
            <path d="M342.159 55.9098C340.839 55.9098 339.639 55.6698 338.559 55.1898C337.503 54.7098 336.603 54.0618 335.859 53.2458C335.115 52.4058 334.539 51.4338 334.131 50.3298C333.747 49.2258 333.555 48.0378 333.555 46.7658C333.555 45.5178 333.747 44.3418 334.131 43.2378C334.539 42.1098 335.115 41.1378 335.859 40.3218C336.603 39.5058 337.503 38.8578 338.559 38.3778C339.639 37.8978 340.839 37.6578 342.159 37.6578C343.479 37.6578 344.667 37.8978 345.723 38.3778C346.803 38.8578 347.715 39.5058 348.459 40.3218C349.203 41.1378 349.767 42.1098 350.151 43.2378C350.559 44.3418 350.763 45.5178 350.763 46.7658C350.763 48.0378 350.559 49.2258 350.151 50.3298C349.767 51.4338 349.203 52.4058 348.459 53.2458C347.715 54.0618 346.803 54.7098 345.723 55.1898C344.667 55.6698 343.479 55.9098 342.159 55.9098ZM342.159 53.4978C343.095 53.4978 343.911 53.3178 344.607 52.9578C345.327 52.5738 345.927 52.0818 346.407 51.4818C346.911 50.8578 347.283 50.1378 347.523 49.3218C347.787 48.5058 347.919 47.6538 347.919 46.7658C347.919 45.8778 347.787 45.0378 347.523 44.2458C347.283 43.4298 346.911 42.7218 346.407 42.1218C345.927 41.4978 345.327 41.0058 344.607 40.6458C343.911 40.2618 343.095 40.0698 342.159 40.0698C341.223 40.0698 340.395 40.2618 339.675 40.6458C338.955 41.0058 338.343 41.4978 337.839 42.1218C337.359 42.7218 336.987 43.4298 336.723 44.2458C336.483 45.0378 336.363 45.8778 336.363 46.7658C336.363 47.6538 336.483 48.5058 336.723 49.3218C336.987 50.1378 337.359 50.8578 337.839 51.4818C338.343 52.0818 338.955 52.5738 339.675 52.9578C340.395 53.3178 341.223 53.4978 342.159 53.4978Z" fill="white"/>
            <path d="M364.446 55.4778V38.0898H367.146V51.3738L376.254 38.0898H378.918V55.4778H376.218V41.9418L367.038 55.4778H364.446Z" fill="white"/>
            <path d="M402.158 55.9098C400.958 55.9098 399.854 55.6458 398.846 55.1178C397.838 54.5898 396.986 53.8338 396.29 52.8498V62.1018H393.59V38.0898H396.29V40.6818C396.914 39.7938 397.742 39.0738 398.774 38.5218C399.806 37.9458 400.934 37.6578 402.158 37.6578C403.31 37.6578 404.354 37.8738 405.29 38.3058C406.25 38.7138 407.066 39.3138 407.738 40.1058C408.434 40.8738 408.962 41.8218 409.322 42.9498C409.706 44.0778 409.898 45.3498 409.898 46.7658C409.898 48.1818 409.706 49.4538 409.322 50.5818C408.962 51.7098 408.434 52.6698 407.738 53.4618C407.066 54.2538 406.25 54.8658 405.29 55.2978C404.354 55.7058 403.31 55.9098 402.158 55.9098ZM401.474 53.4978C402.338 53.4978 403.118 53.3298 403.814 52.9938C404.51 52.6578 405.098 52.1898 405.578 51.5898C406.058 50.9898 406.418 50.2818 406.658 49.4658C406.922 48.6258 407.054 47.7258 407.054 46.7658C407.054 45.8058 406.922 44.9178 406.658 44.1018C406.418 43.2858 406.058 42.5778 405.578 41.9778C405.098 41.3778 404.51 40.9098 403.814 40.5738C403.118 40.2378 402.338 40.0698 401.474 40.0698C400.394 40.0698 399.374 40.3458 398.414 40.8978C397.478 41.4258 396.77 42.0738 396.29 42.8418V50.6898C396.77 51.4578 397.478 52.1178 398.414 52.6698C399.374 53.2218 400.394 53.4978 401.474 53.4978Z" fill="white"/>
            <path d="M425.064 55.4778V53.4978C423.6 55.1058 421.68 55.9098 419.304 55.9098C418.56 55.9098 417.828 55.7898 417.108 55.5498C416.388 55.3098 415.74 54.9498 415.164 54.4698C414.588 53.9658 414.12 53.3538 413.76 52.6338C413.4 51.9138 413.22 51.0858 413.22 50.1498C413.22 49.1898 413.4 48.3498 413.76 47.6298C414.12 46.9098 414.588 46.3098 415.164 45.8298C415.74 45.3498 416.388 45.0018 417.108 44.7858C417.828 44.5458 418.56 44.4258 419.304 44.4258C420.504 44.4258 421.584 44.6178 422.544 45.0018C423.528 45.3858 424.368 45.9858 425.064 46.8018V43.6698C425.064 42.4938 424.644 41.5938 423.804 40.9698C422.988 40.3218 421.944 39.9978 420.672 39.9978C418.632 39.9978 416.856 40.8018 415.344 42.4098L414.084 40.5378C415.932 38.6178 418.248 37.6578 421.032 37.6578C421.944 37.6578 422.808 37.7658 423.624 37.9818C424.44 38.1978 425.148 38.5458 425.748 39.0258C426.372 39.4818 426.864 40.0818 427.224 40.8258C427.584 41.5698 427.764 42.4698 427.764 43.5258V55.4778H425.064ZM420.276 53.9658C421.236 53.9658 422.136 53.7858 422.976 53.4258C423.84 53.0658 424.536 52.5258 425.064 51.8058V48.5298C424.536 47.8098 423.84 47.2698 422.976 46.9098C422.136 46.5498 421.236 46.3698 420.276 46.3698C419.004 46.3698 417.972 46.7298 417.18 47.4498C416.388 48.1458 415.992 49.0578 415.992 50.1858C415.992 51.2898 416.388 52.2018 417.18 52.9218C417.972 53.6178 419.004 53.9658 420.276 53.9658Z" fill="white"/>
            <path d="M439.332 55.9098C437.58 55.9098 436.044 55.6578 434.724 55.1538C433.428 54.6258 432.348 53.9298 431.484 53.0658L432.816 51.3378C433.632 52.1058 434.592 52.6938 435.696 53.1018C436.824 53.4858 438.036 53.6778 439.332 53.6778C440.892 53.6778 442.128 53.4018 443.04 52.8498C443.976 52.2978 444.444 51.5658 444.444 50.6538C444.444 50.1258 444.3 49.6818 444.012 49.3218C443.724 48.9378 443.328 48.6378 442.824 48.4218C442.344 48.1818 441.768 48.0138 441.096 47.9178C440.448 47.8218 439.74 47.7738 438.972 47.7738H435.084V45.5778H438.972C439.692 45.5778 440.364 45.5178 440.988 45.3978C441.612 45.2778 442.152 45.0978 442.608 44.8578C443.088 44.6178 443.46 44.3178 443.724 43.9578C443.988 43.5978 444.12 43.1658 444.12 42.6618C444.12 42.2538 443.988 41.8818 443.724 41.5458C443.46 41.1858 443.1 40.8858 442.644 40.6458C442.212 40.4058 441.684 40.2258 441.06 40.1058C440.436 39.9618 439.764 39.8898 439.044 39.8898C436.62 39.8898 434.676 40.6338 433.212 42.1218L431.808 40.4658C432.624 39.6258 433.62 38.9538 434.796 38.4498C435.972 37.9458 437.352 37.6938 438.936 37.6938C440.112 37.6938 441.18 37.8018 442.14 38.0178C443.124 38.2098 443.964 38.5098 444.66 38.9178C445.38 39.3018 445.932 39.7818 446.316 40.3578C446.724 40.9338 446.928 41.5938 446.928 42.3378C446.928 42.9858 446.772 43.5618 446.46 44.0658C446.172 44.5698 445.8 45.0018 445.344 45.3618C444.888 45.6978 444.384 45.9738 443.832 46.1898C443.28 46.3818 442.752 46.5138 442.248 46.5858C442.752 46.6338 443.292 46.7418 443.868 46.9098C444.468 47.0778 445.02 47.3418 445.524 47.7018C446.028 48.0378 446.448 48.4698 446.784 48.9978C447.12 49.5018 447.288 50.1138 447.288 50.8338C447.288 51.5538 447.108 52.2258 446.748 52.8498C446.388 53.4738 445.86 54.0138 445.164 54.4698C444.492 54.9258 443.664 55.2738 442.68 55.5138C441.696 55.7778 440.58 55.9098 439.332 55.9098Z" fill="white"/>
            <path d="M460.237 55.9098C459.037 55.9098 457.933 55.6458 456.925 55.1178C455.917 54.5898 455.065 53.8338 454.369 52.8498V62.1018H451.669V38.0898H454.369V40.6818C454.993 39.7938 455.821 39.0738 456.853 38.5218C457.885 37.9458 459.013 37.6578 460.237 37.6578C461.389 37.6578 462.433 37.8738 463.369 38.3058C464.329 38.7138 465.145 39.3138 465.817 40.1058C466.513 40.8738 467.041 41.8218 467.401 42.9498C467.785 44.0778 467.977 45.3498 467.977 46.7658C467.977 48.1818 467.785 49.4538 467.401 50.5818C467.041 51.7098 466.513 52.6698 465.817 53.4618C465.145 54.2538 464.329 54.8658 463.369 55.2978C462.433 55.7058 461.389 55.9098 460.237 55.9098ZM459.553 53.4978C460.417 53.4978 461.197 53.3298 461.893 52.9938C462.589 52.6578 463.177 52.1898 463.657 51.5898C464.137 50.9898 464.497 50.2818 464.737 49.4658C465.001 48.6258 465.133 47.7258 465.133 46.7658C465.133 45.8058 465.001 44.9178 464.737 44.1018C464.497 43.2858 464.137 42.5778 463.657 41.9778C463.177 41.3778 462.589 40.9098 461.893 40.5738C461.197 40.2378 460.417 40.0698 459.553 40.0698C458.473 40.0698 457.453 40.3458 456.493 40.8978C455.557 41.4258 454.849 42.0738 454.369 42.8418V50.6898C454.849 51.4578 455.557 52.1178 456.493 52.6698C457.453 53.2218 458.473 53.4978 459.553 53.4978Z" fill="white"/>
            <path d="M483.142 55.4778V53.4978C481.678 55.1058 479.758 55.9098 477.382 55.9098C476.638 55.9098 475.906 55.7898 475.186 55.5498C474.466 55.3098 473.818 54.9498 473.242 54.4698C472.666 53.9658 472.198 53.3538 471.838 52.6338C471.478 51.9138 471.298 51.0858 471.298 50.1498C471.298 49.1898 471.478 48.3498 471.838 47.6298C472.198 46.9098 472.666 46.3098 473.242 45.8298C473.818 45.3498 474.466 45.0018 475.186 44.7858C475.906 44.5458 476.638 44.4258 477.382 44.4258C478.582 44.4258 479.662 44.6178 480.622 45.0018C481.606 45.3858 482.446 45.9858 483.142 46.8018V43.6698C483.142 42.4938 482.722 41.5938 481.882 40.9698C481.066 40.3218 480.022 39.9978 478.75 39.9978C476.71 39.9978 474.934 40.8018 473.422 42.4098L472.162 40.5378C474.01 38.6178 476.326 37.6578 479.11 37.6578C480.022 37.6578 480.886 37.7658 481.702 37.9818C482.518 38.1978 483.226 38.5458 483.826 39.0258C484.45 39.4818 484.942 40.0818 485.302 40.8258C485.662 41.5698 485.842 42.4698 485.842 43.5258V55.4778H483.142ZM478.354 53.9658C479.314 53.9658 480.214 53.7858 481.054 53.4258C481.918 53.0658 482.614 52.5258 483.142 51.8058V48.5298C482.614 47.8098 481.918 47.2698 481.054 46.9098C480.214 46.5498 479.314 46.3698 478.354 46.3698C477.082 46.3698 476.05 46.7298 475.258 47.4498C474.466 48.1458 474.07 49.0578 474.07 50.1858C474.07 51.2898 474.466 52.2018 475.258 52.9218C476.05 53.6178 477.082 53.9658 478.354 53.9658Z" fill="white"/>
            <path d="M498.85 53.4978C499.786 53.4978 500.602 53.3178 501.298 52.9578C502.018 52.5738 502.619 52.0818 503.099 51.4818C503.603 50.8578 503.975 50.1378 504.215 49.3218C504.479 48.5058 504.611 47.6418 504.611 46.7298C504.611 45.8658 504.479 45.0378 504.215 44.2458C503.975 43.4298 503.603 42.7218 503.099 42.1218C502.619 41.4978 502.018 41.0058 501.298 40.6458C500.602 40.2618 499.786 40.0698 498.85 40.0698C497.914 40.0698 497.087 40.2618 496.367 40.6458C495.647 41.0058 495.035 41.4978 494.531 42.1218C494.051 42.7218 493.678 43.4298 493.414 44.2458C493.174 45.0378 493.055 45.8658 493.055 46.7298C493.055 47.6418 493.174 48.5058 493.414 49.3218C493.678 50.1378 494.051 50.8578 494.531 51.4818C495.035 52.0818 495.647 52.5738 496.367 52.9578C497.087 53.3178 497.914 53.4978 498.85 53.4978ZM498.85 55.9098C497.506 55.9098 496.307 55.6698 495.251 55.1898C494.195 54.6858 493.295 53.9898 492.551 53.1018C491.807 52.2138 491.231 51.1698 490.823 49.9698C490.439 48.7458 490.246 47.4138 490.246 45.9738C490.246 43.8618 490.439 42.0498 490.823 40.5378C491.207 39.0018 491.77 37.7298 492.514 36.7218C493.282 35.7138 494.23 34.9338 495.358 34.3818C496.51 33.8058 497.842 33.4218 499.354 33.2298C500.314 33.0858 501.106 32.9538 501.73 32.8338C502.354 32.6898 502.847 32.5458 503.207 32.4018C503.591 32.2578 503.855 32.1138 503.999 31.9698C504.167 31.8258 504.251 31.6578 504.251 31.4658H506.879C506.879 32.1858 506.662 32.7858 506.23 33.2658C505.798 33.7218 505.246 34.0938 504.574 34.3818C503.902 34.6698 503.158 34.8978 502.342 35.0658C501.55 35.2338 500.783 35.3658 500.039 35.4618C498.743 35.6538 497.662 35.9298 496.798 36.2898C495.934 36.6498 495.226 37.0818 494.674 37.5858C494.122 38.0898 493.691 38.6658 493.379 39.3138C493.091 39.9378 492.874 40.6218 492.73 41.3658C493.042 40.8618 493.414 40.3938 493.846 39.9618C494.278 39.5058 494.771 39.1098 495.323 38.7738C495.875 38.4378 496.474 38.1738 497.122 37.9818C497.794 37.7658 498.515 37.6578 499.283 37.6578C500.507 37.6578 501.622 37.8978 502.63 38.3778C503.638 38.8578 504.49 39.5178 505.186 40.3578C505.906 41.1738 506.458 42.1338 506.842 43.2378C507.226 44.3418 507.419 45.5058 507.419 46.7298C507.419 47.9778 507.226 49.1658 506.842 50.2938C506.458 51.3978 505.895 52.3698 505.151 53.2098C504.407 54.0258 503.507 54.6858 502.451 55.1898C501.395 55.6698 500.194 55.9098 498.85 55.9098Z" fill="white"/>
            <path d="M519.628 55.9098C518.308 55.9098 517.108 55.6698 516.028 55.1898C514.972 54.7098 514.072 54.0618 513.328 53.2458C512.584 52.4058 512.008 51.4338 511.6 50.3298C511.216 49.2258 511.024 48.0378 511.024 46.7658C511.024 45.5178 511.216 44.3418 511.6 43.2378C512.008 42.1098 512.584 41.1378 513.328 40.3218C514.072 39.5058 514.972 38.8578 516.028 38.3778C517.108 37.8978 518.308 37.6578 519.628 37.6578C520.948 37.6578 522.136 37.8978 523.192 38.3778C524.272 38.8578 525.184 39.5058 525.928 40.3218C526.672 41.1378 527.236 42.1098 527.62 43.2378C528.028 44.3418 528.232 45.5178 528.232 46.7658C528.232 48.0378 528.028 49.2258 527.62 50.3298C527.236 51.4338 526.672 52.4058 525.928 53.2458C525.184 54.0618 524.272 54.7098 523.192 55.1898C522.136 55.6698 520.948 55.9098 519.628 55.9098ZM519.628 53.4978C520.564 53.4978 521.38 53.3178 522.076 52.9578C522.796 52.5738 523.396 52.0818 523.876 51.4818C524.38 50.8578 524.752 50.1378 524.992 49.3218C525.256 48.5058 525.388 47.6538 525.388 46.7658C525.388 45.8778 525.256 45.0378 524.992 44.2458C524.752 43.4298 524.38 42.7218 523.876 42.1218C523.396 41.4978 522.796 41.0058 522.076 40.6458C521.38 40.2618 520.564 40.0698 519.628 40.0698C518.692 40.0698 517.864 40.2618 517.144 40.6458C516.424 41.0058 515.812 41.4978 515.308 42.1218C514.828 42.7218 514.456 43.4298 514.192 44.2458C513.952 45.0378 513.832 45.8778 513.832 46.7658C513.832 47.6538 513.952 48.5058 514.192 49.3218C514.456 50.1378 514.828 50.8578 515.308 51.4818C515.812 52.0818 516.424 52.5738 517.144 52.9578C517.864 53.3178 518.692 53.4978 519.628 53.4978Z" fill="white"/>
            <path d="M535.801 55.4778V40.4658H530.761V38.0898H543.577V40.4658H538.501V55.4778H535.801Z" fill="white"/>
            <path d="M557.99 55.4778V53.4978C556.526 55.1058 554.606 55.9098 552.23 55.9098C551.486 55.9098 550.754 55.7898 550.034 55.5498C549.314 55.3098 548.666 54.9498 548.09 54.4698C547.514 53.9658 547.046 53.3538 546.686 52.6338C546.326 51.9138 546.146 51.0858 546.146 50.1498C546.146 49.1898 546.326 48.3498 546.686 47.6298C547.046 46.9098 547.514 46.3098 548.09 45.8298C548.666 45.3498 549.314 45.0018 550.034 44.7858C550.754 44.5458 551.486 44.4258 552.23 44.4258C553.43 44.4258 554.51 44.6178 555.47 45.0018C556.454 45.3858 557.294 45.9858 557.99 46.8018V43.6698C557.99 42.4938 557.57 41.5938 556.73 40.9698C555.914 40.3218 554.87 39.9978 553.598 39.9978C551.558 39.9978 549.782 40.8018 548.27 42.4098L547.01 40.5378C548.858 38.6178 551.174 37.6578 553.958 37.6578C554.87 37.6578 555.734 37.7658 556.55 37.9818C557.366 38.1978 558.074 38.5458 558.674 39.0258C559.298 39.4818 559.79 40.0818 560.15 40.8258C560.51 41.5698 560.69 42.4698 560.69 43.5258V55.4778H557.99ZM553.202 53.9658C554.162 53.9658 555.062 53.7858 555.902 53.4258C556.766 53.0658 557.462 52.5258 557.99 51.8058V48.5298C557.462 47.8098 556.766 47.2698 555.902 46.9098C555.062 46.5498 554.162 46.3698 553.202 46.3698C551.93 46.3698 550.898 46.7298 550.106 47.4498C549.314 48.1458 548.918 49.0578 548.918 50.1858C548.918 51.2898 549.314 52.2018 550.106 52.9218C550.898 53.6178 551.93 53.9658 553.202 53.9658Z" fill="white"/>
            <path d="M566.102 55.4778V38.0898H568.802V45.3258H577.874V38.0898H580.574V55.4778H577.874V47.7018H568.802V55.4778H566.102Z" fill="white"/>
            <path d="M593.561 55.9098C592.241 55.9098 591.041 55.6698 589.961 55.1898C588.905 54.7098 588.005 54.0618 587.261 53.2458C586.517 52.4058 585.941 51.4338 585.533 50.3298C585.149 49.2258 584.957 48.0378 584.957 46.7658C584.957 45.5178 585.149 44.3418 585.533 43.2378C585.941 42.1098 586.517 41.1378 587.261 40.3218C588.005 39.5058 588.905 38.8578 589.961 38.3778C591.041 37.8978 592.241 37.6578 593.561 37.6578C594.881 37.6578 596.069 37.8978 597.125 38.3778C598.205 38.8578 599.117 39.5058 599.861 40.3218C600.605 41.1378 601.169 42.1098 601.553 43.2378C601.961 44.3418 602.165 45.5178 602.165 46.7658C602.165 48.0378 601.961 49.2258 601.553 50.3298C601.169 51.4338 600.605 52.4058 599.861 53.2458C599.117 54.0618 598.205 54.7098 597.125 55.1898C596.069 55.6698 594.881 55.9098 593.561 55.9098ZM593.561 53.4978C594.497 53.4978 595.313 53.3178 596.009 52.9578C596.729 52.5738 597.329 52.0818 597.809 51.4818C598.313 50.8578 598.685 50.1378 598.925 49.3218C599.189 48.5058 599.321 47.6538 599.321 46.7658C599.321 45.8778 599.189 45.0378 598.925 44.2458C598.685 43.4298 598.313 42.7218 597.809 42.1218C597.329 41.4978 596.729 41.0058 596.009 40.6458C595.313 40.2618 594.497 40.0698 593.561 40.0698C592.625 40.0698 591.797 40.2618 591.077 40.6458C590.357 41.0058 589.745 41.4978 589.241 42.1218C588.761 42.7218 588.389 43.4298 588.125 44.2458C587.885 45.0378 587.765 45.8778 587.765 46.7658C587.765 47.6538 587.885 48.5058 588.125 49.3218C588.389 50.1378 588.761 50.8578 589.241 51.4818C589.745 52.0818 590.357 52.5738 591.077 52.9578C591.797 53.3178 592.625 53.4978 593.561 53.4978Z" fill="white"/>
            <path d="M151.536 99.4778L145.272 91.6658L142.392 94.5098V99.4778H139.692V82.0898H142.392V91.3418L151.536 82.0898H154.956L147.252 89.9738L154.992 99.4778H151.536Z" fill="white"/>
            <path d="M165.675 99.9098C164.355 99.9098 163.155 99.6698 162.075 99.1898C161.019 98.7098 160.119 98.0618 159.375 97.2458C158.631 96.4058 158.055 95.4338 157.647 94.3298C157.263 93.2258 157.071 92.0378 157.071 90.7658C157.071 89.5178 157.263 88.3418 157.647 87.2378C158.055 86.1098 158.631 85.1378 159.375 84.3218C160.119 83.5058 161.019 82.8578 162.075 82.3778C163.155 81.8978 164.355 81.6578 165.675 81.6578C166.995 81.6578 168.183 81.8978 169.239 82.3778C170.319 82.8578 171.231 83.5058 171.975 84.3218C172.719 85.1378 173.283 86.1098 173.667 87.2378C174.075 88.3418 174.279 89.5178 174.279 90.7658C174.279 92.0378 174.075 93.2258 173.667 94.3298C173.283 95.4338 172.719 96.4058 171.975 97.2458C171.231 98.0618 170.319 98.7098 169.239 99.1898C168.183 99.6698 166.995 99.9098 165.675 99.9098ZM165.675 97.4978C166.611 97.4978 167.427 97.3178 168.123 96.9578C168.843 96.5738 169.443 96.0818 169.923 95.4818C170.427 94.8578 170.799 94.1378 171.039 93.3218C171.303 92.5058 171.435 91.6538 171.435 90.7658C171.435 89.8778 171.303 89.0378 171.039 88.2458C170.799 87.4298 170.427 86.7218 169.923 86.1218C169.443 85.4978 168.843 85.0058 168.123 84.6458C167.427 84.2618 166.611 84.0698 165.675 84.0698C164.739 84.0698 163.911 84.2618 163.191 84.6458C162.471 85.0058 161.859 85.4978 161.355 86.1218C160.875 86.7218 160.503 87.4298 160.239 88.2458C159.999 89.0378 159.879 89.8778 159.879 90.7658C159.879 91.6538 159.999 92.5058 160.239 93.3218C160.503 94.1378 160.875 94.8578 161.355 95.4818C161.859 96.0818 162.471 96.5738 163.191 96.9578C163.911 97.3178 164.739 97.4978 165.675 97.4978Z" fill="white"/>
            <path d="M193.728 99.4778V85.8338L188.076 99.4778H187.068L181.38 85.8338V99.4778H178.68V82.0898H182.244L187.572 94.9778L192.828 82.0898H196.428V99.4778H193.728Z" fill="white"/>
            <path d="M212.685 99.4778V97.4978C211.221 99.1058 209.301 99.9098 206.925 99.9098C206.181 99.9098 205.449 99.7898 204.729 99.5498C204.009 99.3098 203.361 98.9498 202.785 98.4698C202.209 97.9658 201.741 97.3538 201.381 96.6338C201.021 95.9138 200.841 95.0858 200.841 94.1498C200.841 93.1898 201.021 92.3498 201.381 91.6298C201.741 90.9098 202.209 90.3098 202.785 89.8298C203.361 89.3498 204.009 89.0018 204.729 88.7858C205.449 88.5458 206.181 88.4258 206.925 88.4258C208.125 88.4258 209.205 88.6178 210.165 89.0018C211.149 89.3858 211.989 89.9858 212.685 90.8018V87.6698C212.685 86.4938 212.265 85.5938 211.425 84.9698C210.609 84.3218 209.565 83.9978 208.293 83.9978C206.253 83.9978 204.477 84.8018 202.965 86.4098L201.705 84.5378C203.553 82.6178 205.869 81.6578 208.653 81.6578C209.565 81.6578 210.429 81.7658 211.245 81.9818C212.061 82.1978 212.769 82.5458 213.369 83.0258C213.993 83.4818 214.485 84.0818 214.845 84.8258C215.205 85.5698 215.385 86.4698 215.385 87.5258V99.4778H212.685ZM207.897 97.9658C208.857 97.9658 209.757 97.7858 210.597 97.4258C211.461 97.0658 212.157 96.5258 212.685 95.8058V92.5298C212.157 91.8098 211.461 91.2698 210.597 90.9098C209.757 90.5498 208.857 90.3698 207.897 90.3698C206.625 90.3698 205.593 90.7298 204.801 91.4498C204.009 92.1458 203.613 93.0578 203.613 94.1858C203.613 95.2898 204.009 96.2018 204.801 96.9218C205.593 97.6178 206.625 97.9658 207.897 97.9658Z" fill="white"/>
            <path d="M220.797 99.4778V82.0898H223.497V89.3258H232.569V82.0898H235.269V99.4778H232.569V91.7018H223.497V99.4778H220.797Z" fill="white"/>
            <path d="M238.609 97.2458C239.017 97.1738 239.377 97.0298 239.689 96.8138C240.025 96.5978 240.325 96.2498 240.589 95.7698C240.877 95.2898 241.129 94.6418 241.345 93.8258C241.561 93.0098 241.753 91.9538 241.921 90.6578L243.037 82.0898H255.133V97.1018H257.149V103.906H254.449V99.4778H241.309V103.906H238.609V97.2458ZM244.621 90.9818C244.405 92.6378 244.081 93.9458 243.649 94.9058C243.241 95.8658 242.725 96.5978 242.101 97.1018H252.433V84.4658H245.413L244.621 90.9818Z" fill="white"/>
            <path d="M268.436 99.9098C267.116 99.9098 265.916 99.6698 264.836 99.1898C263.78 98.7098 262.88 98.0618 262.136 97.2458C261.392 96.4058 260.816 95.4338 260.408 94.3298C260.024 93.2258 259.832 92.0378 259.832 90.7658C259.832 89.5178 260.024 88.3418 260.408 87.2378C260.816 86.1098 261.392 85.1378 262.136 84.3218C262.88 83.5058 263.78 82.8578 264.836 82.3778C265.916 81.8978 267.116 81.6578 268.436 81.6578C269.756 81.6578 270.944 81.8978 272 82.3778C273.08 82.8578 273.992 83.5058 274.736 84.3218C275.48 85.1378 276.044 86.1098 276.428 87.2378C276.836 88.3418 277.04 89.5178 277.04 90.7658C277.04 92.0378 276.836 93.2258 276.428 94.3298C276.044 95.4338 275.48 96.4058 274.736 97.2458C273.992 98.0618 273.08 98.7098 272 99.1898C270.944 99.6698 269.756 99.9098 268.436 99.9098ZM268.436 97.4978C269.372 97.4978 270.188 97.3178 270.884 96.9578C271.604 96.5738 272.204 96.0818 272.684 95.4818C273.188 94.8578 273.56 94.1378 273.8 93.3218C274.064 92.5058 274.196 91.6538 274.196 90.7658C274.196 89.8778 274.064 89.0378 273.8 88.2458C273.56 87.4298 273.188 86.7218 272.684 86.1218C272.204 85.4978 271.604 85.0058 270.884 84.6458C270.188 84.2618 269.372 84.0698 268.436 84.0698C267.5 84.0698 266.672 84.2618 265.952 84.6458C265.232 85.0058 264.62 85.4978 264.116 86.1218C263.636 86.7218 263.264 87.4298 263 88.2458C262.76 89.0378 262.64 89.8778 262.64 90.7658C262.64 91.6538 262.76 92.5058 263 93.3218C263.264 94.1378 263.636 94.8578 264.116 95.4818C264.62 96.0818 265.232 96.5738 265.952 96.9578C266.672 97.3178 267.5 97.4978 268.436 97.4978Z" fill="white"/>
            <path d="M281.442 99.4778V82.0898H284.142V95.3738L293.25 82.0898H295.914V99.4778H293.214V85.9418L284.034 99.4778H281.442ZM294.978 76.9418C294.258 77.9258 293.346 78.7058 292.242 79.2818C291.162 79.8338 289.974 80.1098 288.678 80.1098C287.382 80.1098 286.182 79.8338 285.078 79.2818C283.998 78.7058 283.086 77.9258 282.342 76.9418L283.674 75.7898C284.25 76.5818 284.958 77.2178 285.798 77.6978C286.638 78.1538 287.598 78.3818 288.678 78.3818C289.734 78.3818 290.682 78.1538 291.522 77.6978C292.386 77.2418 293.094 76.6058 293.646 75.7898L294.978 76.9418Z" fill="white"/>
            <path d="M325.203 99.4778L316.095 88.6778L313.683 91.4138V99.4778H310.695V75.4658H313.683V87.8858L324.303 75.4658H328.047L318.039 86.8778L328.911 99.4778H325.203Z" fill="white"/>
            <path d="M342.482 99.4778V97.4978C341.018 99.1058 339.098 99.9098 336.722 99.9098C335.978 99.9098 335.246 99.7898 334.526 99.5498C333.806 99.3098 333.158 98.9498 332.582 98.4698C332.006 97.9658 331.538 97.3538 331.178 96.6338C330.818 95.9138 330.638 95.0858 330.638 94.1498C330.638 93.1898 330.818 92.3498 331.178 91.6298C331.538 90.9098 332.006 90.3098 332.582 89.8298C333.158 89.3498 333.806 89.0018 334.526 88.7858C335.246 88.5458 335.978 88.4258 336.722 88.4258C337.922 88.4258 339.002 88.6178 339.962 89.0018C340.946 89.3858 341.786 89.9858 342.482 90.8018V87.6698C342.482 86.4938 342.062 85.5938 341.222 84.9698C340.406 84.3218 339.362 83.9978 338.09 83.9978C336.05 83.9978 334.274 84.8018 332.762 86.4098L331.502 84.5378C333.35 82.6178 335.666 81.6578 338.45 81.6578C339.362 81.6578 340.226 81.7658 341.042 81.9818C341.858 82.1978 342.566 82.5458 343.166 83.0258C343.79 83.4818 344.282 84.0818 344.642 84.8258C345.002 85.5698 345.182 86.4698 345.182 87.5258V99.4778H342.482ZM337.694 97.9658C338.654 97.9658 339.554 97.7858 340.394 97.4258C341.258 97.0658 341.954 96.5258 342.482 95.8058V92.5298C341.954 91.8098 341.258 91.2698 340.394 90.9098C339.554 90.5498 338.654 90.3698 337.694 90.3698C336.422 90.3698 335.39 90.7298 334.598 91.4498C333.806 92.1458 333.41 93.0578 333.41 94.1858C333.41 95.2898 333.806 96.2018 334.598 96.9218C335.39 97.6178 336.422 97.9658 337.694 97.9658Z" fill="white"/>
            <path d="M362.366 99.4778V84.4658H353.294V99.4778H350.594V82.0898H365.066V99.4778H362.366Z" fill="white"/>
            <path d="M369.918 103.834C370.11 103.93 370.35 104.002 370.638 104.05C370.926 104.098 371.178 104.122 371.394 104.122C371.994 104.122 372.498 103.99 372.906 103.726C373.314 103.486 373.674 103.006 373.986 102.286L375.138 99.6578L367.866 82.0898H370.782L376.578 96.3458L382.338 82.0898H385.29L376.578 103.006C376.05 104.278 375.354 105.178 374.49 105.706C373.626 106.234 372.618 106.51 371.466 106.534C371.178 106.534 370.842 106.51 370.458 106.462C370.074 106.414 369.75 106.354 369.486 106.282L369.918 103.834Z" fill="white"/>
            <path d="M395.774 99.9098C394.478 99.9098 393.29 99.6818 392.21 99.2258C391.154 98.7458 390.242 98.0978 389.474 97.2818C388.73 96.4658 388.142 95.5058 387.71 94.4018C387.302 93.2738 387.098 92.0618 387.098 90.7658C387.098 89.4698 387.302 88.2698 387.71 87.1658C388.142 86.0618 388.73 85.1018 389.474 84.2858C390.242 83.4698 391.154 82.8338 392.21 82.3778C393.29 81.8978 394.478 81.6578 395.774 81.6578C397.358 81.6578 398.642 81.9458 399.626 82.5218C400.634 83.0978 401.474 83.8178 402.146 84.6818L400.346 86.3378C399.77 85.5458 399.11 84.9698 398.366 84.6098C397.646 84.2498 396.83 84.0698 395.918 84.0698C394.982 84.0698 394.142 84.2378 393.398 84.5738C392.678 84.9098 392.054 85.3778 391.526 85.9778C390.998 86.5778 390.59 87.2858 390.302 88.1018C390.038 88.9178 389.906 89.8058 389.906 90.7658C389.906 91.7258 390.038 92.6258 390.302 93.4658C390.59 94.2818 390.998 94.9898 391.526 95.5898C392.054 96.1898 392.678 96.6578 393.398 96.9938C394.142 97.3298 394.982 97.4978 395.918 97.4978C397.742 97.4978 399.218 96.7418 400.346 95.2298L402.146 96.8858C401.474 97.7498 400.634 98.4698 399.626 99.0458C398.642 99.6218 397.358 99.9098 395.774 99.9098Z" fill="white"/>
            <path d="M409.098 99.4778V84.4658H404.058V82.0898H416.874V84.4658H411.798V99.4778H409.098Z" fill="white"/>
            <path d="M420.415 99.4778V82.0898H423.115V95.3738L432.223 82.0898H434.887V99.4778H432.187V85.9418L423.007 99.4778H420.415Z" fill="white"/>
            <path d="M440.278 99.4778V82.0898H442.978V89.3258H452.05V82.0898H454.75V99.4778H452.05V91.7018H442.978V99.4778H440.278Z" fill="white"/>
            <path d="M471.013 99.4778V97.4978C469.549 99.1058 467.629 99.9098 465.253 99.9098C464.509 99.9098 463.777 99.7898 463.057 99.5498C462.337 99.3098 461.689 98.9498 461.113 98.4698C460.537 97.9658 460.069 97.3538 459.709 96.6338C459.349 95.9138 459.169 95.0858 459.169 94.1498C459.169 93.1898 459.349 92.3498 459.709 91.6298C460.069 90.9098 460.537 90.3098 461.113 89.8298C461.689 89.3498 462.337 89.0018 463.057 88.7858C463.777 88.5458 464.509 88.4258 465.253 88.4258C466.453 88.4258 467.533 88.6178 468.493 89.0018C469.477 89.3858 470.317 89.9858 471.013 90.8018V87.6698C471.013 86.4938 470.593 85.5938 469.753 84.9698C468.937 84.3218 467.893 83.9978 466.621 83.9978C464.581 83.9978 462.805 84.8018 461.293 86.4098L460.033 84.5378C461.881 82.6178 464.197 81.6578 466.981 81.6578C467.893 81.6578 468.757 81.7658 469.573 81.9818C470.389 82.1978 471.097 82.5458 471.697 83.0258C472.321 83.4818 472.813 84.0818 473.173 84.8258C473.533 85.5698 473.713 86.4698 473.713 87.5258V99.4778H471.013ZM466.225 97.9658C467.185 97.9658 468.085 97.7858 468.925 97.4258C469.789 97.0658 470.485 96.5258 471.013 95.8058V92.5298C470.485 91.8098 469.789 91.2698 468.925 90.9098C468.085 90.5498 467.185 90.3698 466.225 90.3698C464.953 90.3698 463.921 90.7298 463.129 91.4498C462.337 92.1458 461.941 93.0578 461.941 94.1858C461.941 95.2898 462.337 96.2018 463.129 96.9218C463.921 97.6178 464.953 97.9658 466.225 97.9658Z" fill="white"/>
        </svg>
    </a>
                <YMaps height={'520px'} query={{ apikey: 'fe365efb-ab51-440e-a7d1-c6b999dd3f87' }}>
                    <Map height={'520px'} defaultState={defaultState}>
                        <Placemark
                            geometry={[55.863328, 36.785239]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageSize: [40, 45]
                            }} />
                        <ZoomControl options={{ float: "right" }} />
                    </Map>
                </YMaps>
            </div>
        </section>
    )
}