import { ReactNode } from 'react'
import { SiteLogoSize } from './types'

export const logoBySize: Record<SiteLogoSize, ReactNode> = {
  medium: (
    <svg
      role="img"
      aria-label="Logo"
      width="97"
      height="25"
      viewBox="0 0 97 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.661531 4.824C0.757531 3.336 1.32553 2.176 2.36553 1.344C3.42153 0.511999 4.76553 0.0959988 6.39753 0.0959988C7.51753 0.0959988 8.48553 0.295999 9.30153 0.696C10.1175 1.096 10.7335 1.64 11.1495 2.328C11.5655 3.016 11.7735 3.792 11.7735 4.656C11.7735 5.648 11.5095 6.496 10.9815 7.2C10.4535 7.904 9.82153 8.376 9.08553 8.616V8.712C10.0295 9 10.7655 9.528 11.2935 10.296C11.8215 11.048 12.0855 12.016 12.0855 13.2C12.0855 14.144 11.8695 14.984 11.4375 15.72C11.0055 16.456 10.3655 17.04 9.51753 17.472C8.66953 17.888 7.65353 18.096 6.46953 18.096C4.74153 18.096 3.31753 17.656 2.19753 16.776C1.09353 15.88 0.501531 14.6 0.421531 12.936H3.06153C3.12553 13.784 3.45353 14.48 4.04553 15.024C4.63753 15.552 5.43753 15.816 6.44553 15.816C7.42153 15.816 8.17353 15.552 8.70153 15.024C9.22953 14.48 9.49353 13.784 9.49353 12.936C9.49353 11.816 9.13353 11.024 8.41353 10.56C7.70953 10.08 6.62153 9.84 5.14953 9.84H4.52553V7.584H5.17353C6.46953 7.568 7.45353 7.352 8.12553 6.936C8.81353 6.52 9.15753 5.864 9.15753 4.968C9.15753 4.2 8.90953 3.592 8.41353 3.144C7.91753 2.68 7.21353 2.448 6.30153 2.448C5.40553 2.448 4.70953 2.68 4.21353 3.144C3.71753 3.592 3.42153 4.152 3.32553 4.824H0.661531ZM18.0555 0.24V18H15.3195V0.24H18.0555ZM33.7677 11.064C33.7677 11.56 33.7357 12.008 33.6717 12.408H23.5677C23.6477 13.464 24.0397 14.312 24.7437 14.952C25.4477 15.592 26.3117 15.912 27.3357 15.912C28.8077 15.912 29.8477 15.296 30.4557 14.064H33.4077C33.0077 15.28 32.2797 16.28 31.2237 17.064C30.1837 17.832 28.8877 18.216 27.3357 18.216C26.0717 18.216 24.9357 17.936 23.9277 17.376C22.9357 16.8 22.1517 16 21.5757 14.976C21.0157 13.936 20.7357 12.736 20.7357 11.376C20.7357 10.016 21.0077 8.824 21.5517 7.8C22.1117 6.76 22.8877 5.96 23.8797 5.4C24.8877 4.84 26.0397 4.56 27.3357 4.56C28.5837 4.56 29.6957 4.832 30.6717 5.376C31.6477 5.92 32.4077 6.688 32.9517 7.68C33.4957 8.656 33.7677 9.784 33.7677 11.064ZM30.9117 10.2C30.8957 9.192 30.5357 8.384 29.8317 7.776C29.1277 7.168 28.2557 6.864 27.2157 6.864C26.2717 6.864 25.4637 7.168 24.7917 7.776C24.1197 8.368 23.7197 9.176 23.5917 10.2H30.9117ZM41.7882 4.56C42.8122 4.56 43.7162 4.768 44.5002 5.184C45.3002 5.584 45.9242 6.088 46.3722 6.696V4.776H49.1322V18.216C49.1322 19.432 48.8762 20.512 48.3642 21.456C47.8522 22.416 47.1082 23.168 46.1322 23.712C45.1722 24.256 44.0202 24.528 42.6762 24.528C40.8842 24.528 39.3962 24.104 38.2122 23.256C37.0282 22.424 36.3562 21.288 36.1962 19.848H38.9082C39.1162 20.536 39.5562 21.088 40.2282 21.504C40.9162 21.936 41.7322 22.152 42.6762 22.152C43.7802 22.152 44.6682 21.816 45.3402 21.144C46.0282 20.472 46.3722 19.496 46.3722 18.216V16.008C45.9082 16.632 45.2762 17.16 44.4762 17.592C43.6922 18.008 42.7962 18.216 41.7882 18.216C40.6362 18.216 39.5802 17.928 38.6202 17.352C37.6762 16.76 36.9242 15.944 36.3642 14.904C35.8202 13.848 35.5482 12.656 35.5482 11.328C35.5482 10 35.8202 8.824 36.3642 7.8C36.9242 6.776 37.6762 5.984 38.6202 5.424C39.5802 4.848 40.6362 4.56 41.7882 4.56ZM46.3722 11.376C46.3722 10.464 46.1802 9.672 45.7962 9C45.4282 8.328 44.9402 7.816 44.3322 7.464C43.7242 7.112 43.0682 6.936 42.3642 6.936C41.6602 6.936 41.0042 7.112 40.3962 7.464C39.7882 7.8 39.2922 8.304 38.9082 8.976C38.5402 9.632 38.3562 10.416 38.3562 11.328C38.3562 12.24 38.5402 13.04 38.9082 13.728C39.2922 14.416 39.7882 14.944 40.3962 15.312C41.0202 15.664 41.6762 15.84 42.3642 15.84C43.0682 15.84 43.7242 15.664 44.3322 15.312C44.9402 14.96 45.4282 14.448 45.7962 13.776C46.1802 13.088 46.3722 12.288 46.3722 11.376ZM51.8138 11.328C51.8138 10 52.0858 8.824 52.6298 7.8C53.1898 6.776 53.9418 5.984 54.8858 5.424C55.8458 4.848 56.9018 4.56 58.0538 4.56C59.0938 4.56 59.9978 4.768 60.7658 5.184C61.5498 5.584 62.1738 6.088 62.6378 6.696V4.776H65.3978V18H62.6378V16.032C62.1738 16.656 61.5418 17.176 60.7418 17.592C59.9418 18.008 59.0298 18.216 58.0058 18.216C56.8698 18.216 55.8298 17.928 54.8858 17.352C53.9418 16.76 53.1898 15.944 52.6298 14.904C52.0858 13.848 51.8138 12.656 51.8138 11.328ZM62.6378 11.376C62.6378 10.464 62.4458 9.672 62.0618 9C61.6938 8.328 61.2058 7.816 60.5978 7.464C59.9898 7.112 59.3338 6.936 58.6298 6.936C57.9258 6.936 57.2698 7.112 56.6618 7.464C56.0538 7.8 55.5578 8.304 55.1738 8.976C54.8058 9.632 54.6218 10.416 54.6218 11.328C54.6218 12.24 54.8058 13.04 55.1738 13.728C55.5578 14.416 56.0538 14.944 56.6618 15.312C57.2858 15.664 57.9418 15.84 58.6298 15.84C59.3338 15.84 59.9898 15.664 60.5978 15.312C61.2058 14.96 61.6938 14.448 62.0618 13.776C62.4458 13.088 62.6378 12.288 62.6378 11.376ZM75.6634 4.56C76.7034 4.56 77.6314 4.776 78.4474 5.208C79.2794 5.64 79.9274 6.28 80.3914 7.128C80.8554 7.976 81.0874 9 81.0874 10.2V18H78.3754V10.608C78.3754 9.424 78.0794 8.52 77.4874 7.896C76.8954 7.256 76.0874 6.936 75.0634 6.936C74.0394 6.936 73.2234 7.256 72.6154 7.896C72.0234 8.52 71.7274 9.424 71.7274 10.608V18H68.9914V4.776H71.7274V6.288C72.1754 5.744 72.7434 5.32 73.4314 5.016C74.1354 4.712 74.8794 4.56 75.6634 4.56ZM87.7693 7.008V14.328C87.7693 14.824 87.8813 15.184 88.1053 15.408C88.3453 15.616 88.7453 15.72 89.3053 15.72H90.9853V18H88.8253C87.5933 18 86.6493 17.712 85.9933 17.136C85.3373 16.56 85.0093 15.624 85.0093 14.328V7.008H83.4493V4.776H85.0093V1.488H87.7693V4.776H90.9853V7.008H87.7693Z"
        fill="currentColor"
      />
      <path
        d="M94.611 18.168C94.115 18.168 93.699 18 93.363 17.664C93.027 17.328 92.859 16.912 92.859 16.416C92.859 15.92 93.027 15.504 93.363 15.168C93.699 14.832 94.115 14.664 94.611 14.664C95.091 14.664 95.499 14.832 95.835 15.168C96.171 15.504 96.339 15.92 96.339 16.416C96.339 16.912 96.171 17.328 95.835 17.664C95.499 18 95.091 18.168 94.611 18.168Z"
        fill="currentColor"
      />
    </svg>
  ),
  small: (
    <svg
      role="img"
      aria-label="Logo"
      width="65"
      height="17"
      viewBox="0 0 65 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.10769 3.216C1.17169 2.224 1.55035 1.45067 2.24369 0.896C2.94769 0.341333 3.84369 0.0639992 4.93169 0.0639992C5.67835 0.0639992 6.32369 0.197333 6.86769 0.464C7.41169 0.730666 7.82235 1.09333 8.09969 1.552C8.37702 2.01067 8.51569 2.528 8.51569 3.104C8.51569 3.76533 8.33969 4.33067 7.98769 4.8C7.63569 5.26933 7.21435 5.584 6.72369 5.744V5.808C7.35302 6 7.84369 6.352 8.19569 6.864C8.54769 7.36533 8.72369 8.01067 8.72369 8.8C8.72369 9.42933 8.57969 9.98933 8.29169 10.48C8.00369 10.9707 7.57702 11.36 7.01169 11.648C6.44635 11.9253 5.76902 12.064 4.97969 12.064C3.82769 12.064 2.87835 11.7707 2.13169 11.184C1.39569 10.5867 1.00102 9.73333 0.947688 8.624H2.70769C2.75035 9.18933 2.96902 9.65333 3.36369 10.016C3.75835 10.368 4.29169 10.544 4.96369 10.544C5.61435 10.544 6.11569 10.368 6.46769 10.016C6.81969 9.65333 6.99569 9.18933 6.99569 8.624C6.99569 7.87733 6.75569 7.34933 6.27569 7.04C5.80635 6.72 5.08102 6.56 4.09969 6.56H3.68369V5.056H4.11569C4.97969 5.04533 5.63569 4.90133 6.08369 4.624C6.54235 4.34667 6.77169 3.90933 6.77169 3.312C6.77169 2.8 6.60635 2.39467 6.27569 2.096C5.94502 1.78667 5.47569 1.632 4.86769 1.632C4.27035 1.632 3.80635 1.78667 3.47569 2.096C3.14502 2.39467 2.94769 2.768 2.88369 3.216H1.10769ZM12.7037 0.16V12H10.8797V0.16H12.7037ZM23.1784 7.376C23.1784 7.70667 23.1571 8.00533 23.1144 8.272H16.3784C16.4318 8.976 16.6931 9.54133 17.1624 9.968C17.6318 10.3947 18.2078 10.608 18.8904 10.608C19.8718 10.608 20.5651 10.1973 20.9704 9.376H22.9384C22.6718 10.1867 22.1864 10.8533 21.4824 11.376C20.7891 11.888 19.9251 12.144 18.8904 12.144C18.0478 12.144 17.2904 11.9573 16.6184 11.584C15.9571 11.2 15.4344 10.6667 15.0504 9.984C14.6771 9.29067 14.4904 8.49067 14.4904 7.584C14.4904 6.67733 14.6718 5.88267 15.0344 5.2C15.4078 4.50667 15.9251 3.97333 16.5864 3.6C17.2584 3.22667 18.0264 3.04 18.8904 3.04C19.7224 3.04 20.4638 3.22133 21.1144 3.584C21.7651 3.94667 22.2718 4.45867 22.6344 5.12C22.9971 5.77067 23.1784 6.52267 23.1784 7.376ZM21.2744 6.8C21.2638 6.128 21.0238 5.58933 20.5544 5.184C20.0851 4.77867 19.5038 4.576 18.8104 4.576C18.1811 4.576 17.6424 4.77867 17.1944 5.184C16.7464 5.57867 16.4798 6.11733 16.3944 6.8H21.2744ZM28.5254 3.04C29.2081 3.04 29.8108 3.17867 30.3334 3.456C30.8668 3.72267 31.2828 4.05867 31.5814 4.464V3.184H33.4214V12.144C33.4214 12.9547 33.2508 13.6747 32.9094 14.304C32.5681 14.944 32.0721 15.4453 31.4214 15.808C30.7814 16.1707 30.0134 16.352 29.1174 16.352C27.9228 16.352 26.9308 16.0693 26.1414 15.504C25.3521 14.9493 24.9041 14.192 24.7974 13.232H26.6054C26.7441 13.6907 27.0374 14.0587 27.4854 14.336C27.9441 14.624 28.4881 14.768 29.1174 14.768C29.8534 14.768 30.4454 14.544 30.8934 14.096C31.3521 13.648 31.5814 12.9973 31.5814 12.144V10.672C31.2721 11.088 30.8508 11.44 30.3174 11.728C29.7948 12.0053 29.1974 12.144 28.5254 12.144C27.7574 12.144 27.0534 11.952 26.4134 11.568C25.7841 11.1733 25.2828 10.6293 24.9094 9.936C24.5468 9.232 24.3654 8.43733 24.3654 7.552C24.3654 6.66667 24.5468 5.88267 24.9094 5.2C25.2828 4.51733 25.7841 3.98933 26.4134 3.616C27.0534 3.232 27.7574 3.04 28.5254 3.04ZM31.5814 7.584C31.5814 6.976 31.4534 6.448 31.1974 6C30.9521 5.552 30.6268 5.21067 30.2214 4.976C29.8161 4.74133 29.3788 4.624 28.9094 4.624C28.4401 4.624 28.0028 4.74133 27.5974 4.976C27.1921 5.2 26.8614 5.536 26.6054 5.984C26.3601 6.42133 26.2374 6.944 26.2374 7.552C26.2374 8.16 26.3601 8.69333 26.6054 9.152C26.8614 9.61067 27.1921 9.96267 27.5974 10.208C28.0134 10.4427 28.4508 10.56 28.9094 10.56C29.3788 10.56 29.8161 10.4427 30.2214 10.208C30.6268 9.97333 30.9521 9.632 31.1974 9.184C31.4534 8.72533 31.5814 8.192 31.5814 7.584ZM35.2092 7.552C35.2092 6.66667 35.3905 5.88267 35.7532 5.2C36.1265 4.51733 36.6279 3.98933 37.2572 3.616C37.8972 3.232 38.6012 3.04 39.3692 3.04C40.0625 3.04 40.6652 3.17867 41.1772 3.456C41.6999 3.72267 42.1159 4.05867 42.4252 4.464V3.184H44.2652V12H42.4252V10.688C42.1159 11.104 41.6945 11.4507 41.1612 11.728C40.6279 12.0053 40.0199 12.144 39.3372 12.144C38.5799 12.144 37.8865 11.952 37.2572 11.568C36.6279 11.1733 36.1265 10.6293 35.7532 9.936C35.3905 9.232 35.2092 8.43733 35.2092 7.552ZM42.4252 7.584C42.4252 6.976 42.2972 6.448 42.0412 6C41.7959 5.552 41.4705 5.21067 41.0652 4.976C40.6599 4.74133 40.2225 4.624 39.7532 4.624C39.2839 4.624 38.8465 4.74133 38.4412 4.976C38.0359 5.2 37.7052 5.536 37.4492 5.984C37.2039 6.42133 37.0812 6.944 37.0812 7.552C37.0812 8.16 37.2039 8.69333 37.4492 9.152C37.7052 9.61067 38.0359 9.96267 38.4412 10.208C38.8572 10.4427 39.2945 10.56 39.7532 10.56C40.2225 10.56 40.6599 10.4427 41.0652 10.208C41.4705 9.97333 41.7959 9.632 42.0412 9.184C42.2972 8.72533 42.4252 8.192 42.4252 7.584ZM51.1089 3.04C51.8023 3.04 52.4209 3.184 52.9649 3.472C53.5196 3.76 53.9516 4.18667 54.2609 4.752C54.5703 5.31733 54.7249 6 54.7249 6.8V12H52.9169V7.072C52.9169 6.28267 52.7196 5.68 52.3249 5.264C51.9303 4.83733 51.3916 4.624 50.7089 4.624C50.0263 4.624 49.4823 4.83733 49.0769 5.264C48.6823 5.68 48.4849 6.28267 48.4849 7.072V12H46.6609V3.184H48.4849V4.192C48.7836 3.82933 49.1623 3.54667 49.6209 3.344C50.0903 3.14133 50.5863 3.04 51.1089 3.04ZM59.1796 4.672V9.552C59.1796 9.88267 59.2542 10.1227 59.4036 10.272C59.5636 10.4107 59.8302 10.48 60.2036 10.48H61.3236V12H59.8836C59.0622 12 58.4329 11.808 57.9956 11.424C57.5582 11.04 57.3396 10.416 57.3396 9.552V4.672H56.2996V3.184H57.3396V0.992H59.1796V3.184H61.3236V4.672H59.1796Z"
        fill="currentColor"
      />
      <path
        d="M63.7407 12.112C63.41 12.112 63.1327 12 62.9087 11.776C62.6847 11.552 62.5727 11.2747 62.5727 10.944C62.5727 10.6133 62.6847 10.336 62.9087 10.112C63.1327 9.888 63.41 9.776 63.7407 9.776C64.0607 9.776 64.3327 9.888 64.5567 10.112C64.7807 10.336 64.8927 10.6133 64.8927 10.944C64.8927 11.2747 64.7807 11.552 64.5567 11.776C64.3327 12 64.0607 12.112 63.7407 12.112Z"
        fill="currentColor"
      />
    </svg>
  ),
}
