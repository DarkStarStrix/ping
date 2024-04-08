export const OtterIcon = ({ size }: { size?: number }) => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={size ?? 30} height={size ?? 30}>
      <path
        fill={"hsl(var(--bc))"}
        d="m0 198l5-9 14-4 60 19 2-24-25-24-13-28-3-15 3-41 10-23 19-23 29-18 29-7h17l40 12 27 24 58-4 26 4 27-24 40-12h17l24 5 28 15 21 22 14 29 3 41-3 15-16 32-22 20 2 24 60-19 14 4 5 9v8l-11 12-68 20v55l71 17 8 11v8l-7 10-15 2-57-14-20 59-39 48-49 31-58 14h-22l-58-14-49-31-39-48-21-59-56 14-15-2-7-10v-8l8-11 71-17v-54l-68-21-11-12zm104-155l-17 15-12 23-2 30 7 21 12 13 8-20 24-34 28-25 28-16-18-12-30-4zm243-4l-16 11 29 16 27 24 25 35 8 20 10-10 9-24-1-27-12-25-29-21-30-4zm-148 38l-37 23-30 36-17 45-3 33 39 12 12 13-2 12-11 8-38-10v35l39-7 9 6 3 14-8 11-42 10-1 7 19 48 32 37 49 27 28 6h32l44-12 33-21 32-37 19-48-1-7-42-10-8-11 3-14 9-6 39 7v-35l-38 10-11-8-2-12 12-13 38-11 1-11-12-52-13-24-26-29-20-14-33-14-54-5zm-7 73l13 3 7 14-1 11-7 9h-18l-7-9v-17zm122 0l17 7 3 16-3 9-10 7-11-1-7-6-2-21zm-76 51h36l15 11 3 24-19 29v7l5 7 21 7 4 16-11 12-18-1-17-10-23 11h-14l-9-7-2-13 4-8 21-7 5-7v-7l-20-32 4-21z"
      />
    </svg>
  );
};

export const LensIcon = ({ size }: { size?: number }) => {
  return (
    <svg width={size ?? 100} height={size ?? 100} viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="177" height="177" rx="2" fill="black" />
      <path
        d="M108.914 71.9026C113.315 68.2308 118.225 66.8338 122.934 67.187C127.957 67.5637 132.605 69.9182 136.077 73.3381C139.548 76.7582 141.933 81.3328 142.315 86.2698C142.7 91.2518 141.032 96.4698 136.634 101.049C136.232 101.471 135.821 101.887 135.401 102.298C115.453 121.948 88.9555 122 88.6844 122H88.6831C88.5476 122 61.966 121.999 41.9665 102.296L41.9622 102.291C41.5493 101.882 41.1427 101.47 40.7422 101.056L40.739 101.052C36.339 96.4767 34.6693 91.26 35.0533 86.278C35.4338 81.3418 37.8171 76.7667 41.2876 73.3454C44.7578 69.9243 49.4056 67.5679 54.4295 67.1896C59.1381 66.835 64.0491 68.2303 68.4523 71.9003C68.9258 66.2398 71.3925 61.8343 74.9732 58.8056C78.7921 55.5753 83.7688 54 88.6832 54C93.5977 54 98.5743 55.5753 102.393 58.8056C105.974 61.8347 108.441 66.241 108.914 71.9026ZM89.5964 120.008L89.5955 119.983L89.5971 119.983L89.5964 120.008ZM87.7701 120.008L87.7694 119.983L87.771 119.983L87.7701 120.008ZM103.67 92.7224C103.124 92.7224 102.935 93.4989 103.283 93.9102C103.899 94.6387 104.27 95.576 104.27 96.5986C104.27 98.919 102.361 100.8 100.006 100.8C97.6505 100.8 95.7411 98.919 95.7411 96.5986C95.7411 96.4745 95.5767 96.4128 95.5024 96.5134C94.8298 97.4235 94.3757 98.4452 94.1891 99.518C94.0841 100.122 93.5857 100.623 92.9594 100.623H92.6135C91.7961 100.623 91.1218 99.9697 91.2424 99.1787C92.0694 93.7577 97.4925 89.826 103.67 89.826C109.847 89.826 115.27 93.7577 116.097 99.1787C116.217 99.9697 115.543 100.623 114.726 100.623C113.908 100.623 113.261 99.9664 113.083 99.1857C112.275 95.6324 108.527 92.7224 103.67 92.7224ZM65.7998 96.5986C65.7998 96.4349 65.5844 96.347 65.483 96.4773C64.764 97.4016 64.2741 98.4484 64.0667 99.5516C63.9443 100.203 63.4062 100.745 62.729 100.745H62.4752C61.6578 100.745 60.9835 100.092 61.104 99.301C61.9306 93.8771 67.3543 89.9483 73.5313 89.9483C79.7082 89.9483 85.1319 93.8771 85.9585 99.301C86.0791 100.092 85.4047 100.745 84.5873 100.745C83.77 100.745 83.1227 100.089 82.9452 99.3081C82.1371 95.7526 78.3892 92.8447 73.5313 92.8447C73.0897 92.8447 72.9281 93.4555 73.2237 93.7764C73.9105 94.5222 74.329 95.5123 74.329 96.5986C74.329 98.919 72.4197 100.8 70.0644 100.8C67.7091 100.8 65.7998 98.919 65.7998 96.5986ZM93.4274 106.731C94.0051 106.165 94.8979 105.89 95.6152 106.273C96.3325 106.657 96.6046 107.547 96.0877 108.167C94.4041 110.184 91.6782 111.463 88.6718 111.463C85.667 111.463 82.9351 110.198 81.2493 108.165C80.7342 107.544 81.0097 106.654 81.7284 106.273C82.4471 105.892 83.3385 106.171 83.9154 106.737C85.0266 107.829 86.7129 108.567 88.6718 108.567C90.6256 108.567 92.3137 107.821 93.4274 106.731Z"
        fill="white"
      />
    </svg>
  );
};

export const LensTextDark = () => {
  return (
    <svg width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M76.4891 84.2247V86.7584H68.5062V78.0663H71.6097V84.2247H76.4891Z" fill="black" />
      <path
        d="M85.5813 84.546V86.7584H77.4893V78.0663H85.5449V80.2787H80.5927V81.3455H85.2964V83.3822H80.5927V84.546H85.5813Z"
        fill="black"
      />
      <path
        d="M96.7888 78.0663V86.7584H92.8307L89.7758 81.2728V86.7584H87.0178V78.0663H91.1032L94.043 83.4549V78.0663H96.7888Z"
        fill="black"
      />
      <path
        d="M102.384 87.019C101.563 87.019 100.793 86.922 100.074 86.7281C99.3589 86.5301 98.7345 86.2674 98.2011 85.9401V83.6913C98.7507 84.0348 99.3568 84.3076 100.02 84.5096C100.682 84.7076 101.355 84.8066 102.038 84.8066C102.531 84.8066 102.897 84.7622 103.135 84.6733C103.374 84.5844 103.493 84.4429 103.493 84.249C103.493 84.0792 103.41 83.9439 103.244 83.8428C103.079 83.7418 102.784 83.6549 102.359 83.5822L101.123 83.3579C100.092 83.172 99.3366 82.8548 98.8558 82.4063C98.3789 81.9577 98.1405 81.3637 98.1405 80.6242C98.1405 80.0625 98.3042 79.5716 98.6315 79.1513C98.9629 78.727 99.4599 78.3977 100.123 78.1633C100.789 77.9249 101.61 77.8057 102.584 77.8057C103.416 77.8057 104.133 77.8905 104.735 78.0602C105.341 78.23 105.841 78.4361 106.233 78.6785V80.8364C105.865 80.6303 105.396 80.4525 104.826 80.303C104.261 80.1535 103.646 80.0787 102.984 80.0787C101.917 80.0787 101.383 80.2525 101.383 80.6C101.383 80.697 101.412 80.7778 101.468 80.8424C101.529 80.9031 101.632 80.9556 101.777 81C101.923 81.0445 102.131 81.0849 102.402 81.1213L103.79 81.3455C104.473 81.4587 105.03 81.6264 105.463 81.8486C105.895 82.0668 106.218 82.3558 106.433 82.7154C106.647 83.071 106.754 83.5115 106.754 84.0368C106.754 84.6349 106.572 85.1602 106.208 85.6128C105.849 86.0613 105.337 86.4088 104.675 86.6553C104.016 86.8978 103.252 87.019 102.384 87.019Z"
        fill="black"
      />
      <path
        d="M74.5131 89.6404C75.2647 89.6404 75.8971 89.7737 76.4103 90.0404C76.9276 90.3031 77.3155 90.6749 77.5741 91.1557C77.8368 91.6366 77.9681 92.2003 77.9681 92.8469C77.9681 93.4854 77.8186 94.0491 77.5196 94.538C77.2246 95.0229 76.7821 95.4028 76.1921 95.6776C75.6021 95.9483 74.8828 96.0837 74.0342 96.0837H71.6097V98.3446H68.5062V89.6404H74.5131ZM73.222 94.1137C73.7271 94.1137 74.113 94.0107 74.3797 93.8046C74.6505 93.5945 74.7859 93.3035 74.7859 92.9317C74.7859 92.5721 74.6646 92.2933 74.4222 92.0953C74.1838 91.8932 73.8423 91.7922 73.3978 91.7922H71.6097V94.1137H73.222Z"
        fill="black"
      />
      <path
        d="M84.9266 98.3446L82.1202 94.7805V98.3446H79.0167V89.6525H85.1388C85.8176 89.6525 86.4096 89.7737 86.9148 90.0162C87.4199 90.2587 87.8078 90.6021 88.0786 91.0466C88.3533 91.4871 88.4907 92.0003 88.4907 92.5862C88.4907 93.0954 88.3877 93.552 88.1816 93.9561C87.9755 94.3562 87.6846 94.6774 87.3088 94.9199C86.9329 95.1583 86.4965 95.2977 85.9995 95.3381L88.5756 98.3446H84.9266ZM83.8719 93.8652C84.3286 93.8652 84.6761 93.7763 84.9145 93.5985C85.1529 93.4207 85.2721 93.1621 85.2721 92.8226C85.2721 92.4994 85.161 92.2549 84.9387 92.0892C84.7205 91.9235 84.3932 91.8407 83.9568 91.8407H82.1202V93.8652H83.8719Z"
        fill="black"
      />
      <path
        d="M94.9825 98.6295C93.8551 98.6295 92.863 98.4214 92.0064 98.0052C91.1497 97.5889 90.489 97.0252 90.0243 96.314C89.5596 95.6028 89.3272 94.8148 89.3272 93.9501C89.3272 93.0691 89.5575 92.2832 90.0182 91.5922C90.4829 90.8971 91.1436 90.3536 92.0003 89.9616C92.857 89.5656 93.8551 89.3676 94.9946 89.3676C96.1261 89.3676 97.1182 89.5656 97.9708 89.9616C98.8275 90.3536 99.4862 90.8971 99.9468 91.5922C100.412 92.2832 100.644 93.0691 100.644 93.9501C100.644 94.8189 100.41 95.6089 99.9408 96.3201C99.4761 97.0313 98.8154 97.595 97.9587 98.0112C97.102 98.4234 96.1099 98.6295 94.9825 98.6295ZM94.9825 96.1079C95.4472 96.1079 95.8554 96.019 96.2069 95.8412C96.5585 95.6594 96.8292 95.4068 97.0192 95.0835C97.2091 94.7603 97.304 94.3905 97.304 93.9743C97.304 93.5621 97.2091 93.1984 97.0192 92.8833C96.8292 92.5681 96.5585 92.3236 96.2069 92.1498C95.8554 91.9761 95.4472 91.8892 94.9825 91.8892C94.5138 91.8892 94.1036 91.9761 93.752 92.1498C93.4005 92.3236 93.1277 92.5681 92.9338 92.8833C92.7438 93.1984 92.6489 93.5621 92.6489 93.9743C92.6489 94.3905 92.7438 94.7603 92.9338 95.0835C93.1277 95.4068 93.4005 95.6594 93.752 95.8412C94.1036 96.019 94.5138 96.1079 94.9825 96.1079Z"
        fill="black"
      />
      <path d="M110.094 92.1013H107.136V98.3446H104.032V92.1013H101.02V89.6525H110.094V92.1013Z" fill="black" />
      <path
        d="M116.113 98.6295C114.985 98.6295 113.993 98.4214 113.136 98.0052C112.28 97.5889 111.619 97.0252 111.154 96.314C110.69 95.6028 110.457 94.8148 110.457 93.9501C110.457 93.0691 110.688 92.2832 111.148 91.5922C111.613 90.8971 112.274 90.3536 113.13 89.9616C113.987 89.5656 114.985 89.3676 116.125 89.3676C117.256 89.3676 118.248 89.5656 119.101 89.9616C119.958 90.3536 120.616 90.8971 121.077 91.5922C121.542 92.2832 121.774 93.0691 121.774 93.9501C121.774 94.8189 121.54 95.6089 121.071 96.3201C120.606 97.0313 119.945 97.595 119.089 98.0112C118.232 98.4234 117.24 98.6295 116.113 98.6295ZM116.113 96.1079C116.577 96.1079 116.985 96.019 117.337 95.8412C117.689 95.6594 117.959 95.4068 118.149 95.0835C118.339 94.7603 118.434 94.3905 118.434 93.9743C118.434 93.5621 118.339 93.1984 118.149 92.8833C117.959 92.5681 117.689 92.3236 117.337 92.1498C116.985 91.9761 116.577 91.8892 116.113 91.8892C115.644 91.8892 115.234 91.9761 114.882 92.1498C114.531 92.3236 114.258 92.5681 114.064 92.8833C113.874 93.1984 113.779 93.5621 113.779 93.9743C113.779 94.3905 113.874 94.7603 114.064 95.0835C114.258 95.4068 114.531 95.6594 114.882 95.8412C115.234 96.019 115.644 96.1079 116.113 96.1079Z"
        fill="black"
      />
      <path
        d="M128.248 98.6295C127.068 98.6295 126.049 98.4315 125.193 98.0355C124.34 97.6354 123.691 97.0899 123.247 96.3989C122.802 95.7038 122.58 94.9199 122.58 94.047C122.58 93.1621 122.806 92.366 123.259 91.6588C123.712 90.9476 124.372 90.388 125.241 89.9798C126.11 89.5717 127.142 89.3676 128.339 89.3676C129.07 89.3676 129.739 89.4404 130.345 89.5858C130.955 89.7313 131.535 89.9414 132.084 90.2162V92.7802C131.733 92.5337 131.292 92.3337 130.763 92.1801C130.238 92.0266 129.678 91.9498 129.084 91.9498C128.433 91.9498 127.874 92.0347 127.405 92.2044C126.936 92.3741 126.579 92.6125 126.332 92.9196C126.09 93.2227 125.969 93.5743 125.969 93.9743C125.969 94.3784 126.092 94.736 126.338 95.0472C126.589 95.3543 126.948 95.5947 127.417 95.7685C127.886 95.9382 128.442 96.0231 129.084 96.0231C129.698 96.0231 130.27 95.9422 130.799 95.7806C131.329 95.6149 131.765 95.3947 132.109 95.1199V97.6233C131.515 97.9708 130.915 98.2254 130.308 98.387C129.706 98.5487 129.019 98.6295 128.248 98.6295Z"
        fill="black"
      />
      <path
        d="M138.746 98.6295C137.619 98.6295 136.627 98.4214 135.77 98.0052C134.913 97.5889 134.252 97.0252 133.788 96.314C133.323 95.6028 133.091 94.8148 133.091 93.9501C133.091 93.0691 133.321 92.2832 133.782 91.5922C134.246 90.8971 134.907 90.3536 135.764 89.9616C136.62 89.5656 137.619 89.3676 138.758 89.3676C139.89 89.3676 140.882 89.5656 141.734 89.9616C142.591 90.3536 143.25 90.8971 143.71 91.5922C144.175 92.2832 144.407 93.0691 144.407 93.9501C144.407 94.8189 144.173 95.6089 143.704 96.3201C143.24 97.0313 142.579 97.595 141.722 98.0112C140.865 98.4234 139.873 98.6295 138.746 98.6295ZM138.746 96.1079C139.211 96.1079 139.619 96.019 139.97 95.8412C140.322 95.6594 140.593 95.4068 140.783 95.0835C140.973 94.7603 141.068 94.3905 141.068 93.9743C141.068 93.5621 140.973 93.1984 140.783 92.8833C140.593 92.5681 140.322 92.3236 139.97 92.1498C139.619 91.9761 139.211 91.8892 138.746 91.8892C138.277 91.8892 137.867 91.9761 137.516 92.1498C137.164 92.3236 136.891 92.5681 136.697 92.8833C136.507 93.1984 136.412 93.5621 136.412 93.9743C136.412 94.3905 136.507 94.7603 136.697 95.0835C136.891 95.4068 137.164 95.6594 137.516 95.8412C137.867 96.019 138.277 96.1079 138.746 96.1079Z"
        fill="black"
      />
      <path d="M153.615 95.8109V98.3446H145.632V89.6525H148.735V95.8109H153.615Z" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.2074 82.3186C50.7676 81.0227 52.5086 80.5296 54.1782 80.6542C55.9592 80.7872 57.6073 81.6182 58.8381 82.8252C60.069 84.0323 60.9146 85.6469 61.0499 87.3893C61.1865 89.1477 60.5951 90.9893 59.0357 92.6057C58.8931 92.7544 58.7473 92.9014 58.5985 93.0465C51.5258 99.9817 42.1307 100 42.0346 100H42.0341C41.9861 100 32.5612 99.9996 25.4701 93.0455L25.4685 93.044C25.3221 92.8995 25.178 92.7542 25.036 92.6079L25.0348 92.6067C23.4747 90.9918 22.8827 89.1506 23.0189 87.3922C23.1538 85.6501 23.9988 84.0353 25.2293 82.8278C26.4598 81.6203 28.1077 80.7887 29.889 80.6552C31.5585 80.53 33.2998 81.0225 34.861 82.3178C35.0288 80.3199 35.9035 78.765 37.173 77.6961C38.5271 76.556 40.2917 76 42.0341 76C43.7766 76 45.5412 76.556 46.8952 77.6961C48.165 78.7652 49.0397 80.3204 49.2074 82.3186ZM42.3579 99.2968L42.3576 99.288L42.3582 99.288L42.3579 99.2968ZM41.7104 99.2968L41.7101 99.288L41.7107 99.288L41.7104 99.2968ZM47.3477 89.6667C47.1543 89.6667 47.0873 89.9408 47.2107 90.0859C47.4293 90.3431 47.5607 90.6739 47.5607 91.0348C47.5607 91.8538 46.8838 92.5177 46.0487 92.5177C45.2136 92.5177 44.5366 91.8538 44.5366 91.0348C44.5366 90.991 44.4783 90.9692 44.452 91.0047C44.2135 91.3259 44.0525 91.6865 43.9863 92.0652C43.9491 92.2784 43.7724 92.455 43.5503 92.455H43.4277C43.1378 92.455 42.8987 92.2246 42.9415 91.9454C43.2347 90.0321 45.1576 88.6445 47.3477 88.6445C49.5379 88.6445 51.4607 90.0321 51.754 91.9454C51.7967 92.2246 51.5576 92.455 51.2678 92.455C50.978 92.455 50.7485 92.2235 50.6855 91.9479C50.3988 90.6938 49.0699 89.6667 47.3477 89.6667ZM33.9205 91.0348C33.9205 90.977 33.8441 90.946 33.8082 90.992C33.5532 91.3182 33.3795 91.6877 33.306 92.0771C33.2626 92.3071 33.0718 92.4982 32.8317 92.4982H32.7417C32.4519 92.4982 32.2128 92.2678 32.2555 91.9886C32.5486 90.0743 34.4717 88.6876 36.6618 88.6876C38.8519 88.6876 40.775 90.0743 41.068 91.9886C41.1108 92.2678 40.8717 92.4982 40.5819 92.4982C40.2921 92.4982 40.0626 92.2666 39.9996 91.9911C39.7131 90.7362 38.3842 89.7099 36.6618 89.7099C36.5052 89.7099 36.4479 89.9255 36.5527 90.0387C36.7963 90.302 36.9446 90.6514 36.9446 91.0348C36.9446 91.8538 36.2677 92.5177 35.4326 92.5177C34.5975 92.5177 33.9205 91.8538 33.9205 91.0348ZM43.7162 94.6108C43.9211 94.4111 44.2376 94.314 44.4919 94.4494C44.7463 94.5847 44.8428 94.899 44.6595 95.1176C44.0625 95.8298 43.096 96.281 42.0301 96.281C40.9647 96.281 39.9961 95.8345 39.3983 95.117C39.2157 94.8978 39.3134 94.5838 39.5682 94.4494C39.823 94.3149 40.1391 94.4132 40.3436 94.6132C40.7376 94.9984 41.3355 95.2588 42.0301 95.2588C42.7228 95.2588 43.3214 94.9958 43.7162 94.6108Z"
        fill="black"
      />
    </svg>
  );
};

export const LensTextLight = () => {
  return (
    <svg width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M76.4891 84.2247V86.7584H68.5062V78.0663H71.6097V84.2247H76.4891Z" fill="white" />
      <path
        d="M85.5813 84.546V86.7584H77.4893V78.0663H85.5449V80.2787H80.5927V81.3455H85.2964V83.3822H80.5927V84.546H85.5813Z"
        fill="white"
      />
      <path
        d="M96.7888 78.0663V86.7584H92.8307L89.7758 81.2728V86.7584H87.0178V78.0663H91.1032L94.043 83.4549V78.0663H96.7888Z"
        fill="white"
      />
      <path
        d="M102.384 87.019C101.563 87.019 100.793 86.922 100.074 86.7281C99.3589 86.5301 98.7345 86.2674 98.2011 85.9401V83.6913C98.7507 84.0348 99.3568 84.3076 100.02 84.5096C100.682 84.7076 101.355 84.8066 102.038 84.8066C102.531 84.8066 102.897 84.7622 103.135 84.6733C103.374 84.5844 103.493 84.4429 103.493 84.249C103.493 84.0792 103.41 83.9439 103.244 83.8428C103.079 83.7418 102.784 83.6549 102.359 83.5822L101.123 83.3579C100.092 83.172 99.3366 82.8548 98.8558 82.4063C98.3789 81.9577 98.1405 81.3637 98.1405 80.6242C98.1405 80.0625 98.3042 79.5716 98.6315 79.1513C98.9629 78.727 99.4599 78.3977 100.123 78.1633C100.789 77.9249 101.61 77.8057 102.584 77.8057C103.416 77.8057 104.133 77.8905 104.735 78.0602C105.341 78.23 105.841 78.4361 106.233 78.6785V80.8364C105.865 80.6303 105.396 80.4525 104.826 80.303C104.261 80.1535 103.646 80.0787 102.984 80.0787C101.917 80.0787 101.383 80.2525 101.383 80.6C101.383 80.697 101.412 80.7778 101.468 80.8424C101.529 80.9031 101.632 80.9556 101.777 81C101.923 81.0445 102.131 81.0849 102.402 81.1213L103.79 81.3455C104.473 81.4587 105.03 81.6264 105.463 81.8486C105.895 82.0668 106.218 82.3558 106.433 82.7154C106.647 83.071 106.754 83.5115 106.754 84.0368C106.754 84.6349 106.572 85.1602 106.208 85.6128C105.849 86.0613 105.337 86.4088 104.675 86.6553C104.016 86.8978 103.252 87.019 102.384 87.019Z"
        fill="white"
      />
      <path
        d="M74.5131 89.6404C75.2647 89.6404 75.8971 89.7737 76.4103 90.0404C76.9276 90.3031 77.3155 90.6749 77.5741 91.1557C77.8368 91.6366 77.9681 92.2003 77.9681 92.8469C77.9681 93.4854 77.8186 94.0491 77.5196 94.538C77.2246 95.0229 76.7821 95.4028 76.1921 95.6776C75.6021 95.9483 74.8828 96.0837 74.0342 96.0837H71.6097V98.3446H68.5062V89.6404H74.5131ZM73.222 94.1137C73.7271 94.1137 74.113 94.0107 74.3797 93.8046C74.6505 93.5945 74.7859 93.3035 74.7859 92.9317C74.7859 92.5721 74.6646 92.2933 74.4222 92.0953C74.1838 91.8932 73.8423 91.7922 73.3978 91.7922H71.6097V94.1137H73.222Z"
        fill="white"
      />
      <path
        d="M84.9266 98.3446L82.1202 94.7805V98.3446H79.0167V89.6525H85.1388C85.8176 89.6525 86.4096 89.7737 86.9148 90.0162C87.4199 90.2587 87.8078 90.6021 88.0786 91.0466C88.3533 91.4871 88.4907 92.0003 88.4907 92.5862C88.4907 93.0954 88.3877 93.552 88.1816 93.9561C87.9755 94.3562 87.6846 94.6774 87.3088 94.9199C86.9329 95.1583 86.4965 95.2977 85.9995 95.3381L88.5756 98.3446H84.9266ZM83.8719 93.8652C84.3286 93.8652 84.6761 93.7763 84.9145 93.5985C85.1529 93.4207 85.2721 93.1621 85.2721 92.8226C85.2721 92.4994 85.161 92.2549 84.9387 92.0892C84.7205 91.9235 84.3932 91.8407 83.9568 91.8407H82.1202V93.8652H83.8719Z"
        fill="white"
      />
      <path
        d="M94.9825 98.6295C93.8551 98.6295 92.863 98.4214 92.0064 98.0052C91.1497 97.5889 90.489 97.0252 90.0243 96.314C89.5596 95.6028 89.3272 94.8148 89.3272 93.9501C89.3272 93.0691 89.5575 92.2832 90.0182 91.5922C90.4829 90.8971 91.1436 90.3536 92.0003 89.9616C92.857 89.5656 93.8551 89.3676 94.9946 89.3676C96.1261 89.3676 97.1182 89.5656 97.9708 89.9616C98.8275 90.3536 99.4862 90.8971 99.9468 91.5922C100.412 92.2832 100.644 93.0691 100.644 93.9501C100.644 94.8189 100.41 95.6089 99.9408 96.3201C99.4761 97.0313 98.8154 97.595 97.9587 98.0112C97.102 98.4234 96.1099 98.6295 94.9825 98.6295ZM94.9825 96.1079C95.4472 96.1079 95.8554 96.019 96.2069 95.8412C96.5585 95.6594 96.8292 95.4068 97.0192 95.0835C97.2091 94.7603 97.304 94.3905 97.304 93.9743C97.304 93.5621 97.2091 93.1984 97.0192 92.8833C96.8292 92.5681 96.5585 92.3236 96.2069 92.1498C95.8554 91.9761 95.4472 91.8892 94.9825 91.8892C94.5138 91.8892 94.1036 91.9761 93.752 92.1498C93.4005 92.3236 93.1277 92.5681 92.9338 92.8833C92.7438 93.1984 92.6489 93.5621 92.6489 93.9743C92.6489 94.3905 92.7438 94.7603 92.9338 95.0835C93.1277 95.4068 93.4005 95.6594 93.752 95.8412C94.1036 96.019 94.5138 96.1079 94.9825 96.1079Z"
        fill="white"
      />
      <path d="M110.094 92.1013H107.136V98.3446H104.032V92.1013H101.02V89.6525H110.094V92.1013Z" fill="white" />
      <path
        d="M116.113 98.6295C114.985 98.6295 113.993 98.4214 113.136 98.0052C112.28 97.5889 111.619 97.0252 111.154 96.314C110.69 95.6028 110.457 94.8148 110.457 93.9501C110.457 93.0691 110.688 92.2832 111.148 91.5922C111.613 90.8971 112.274 90.3536 113.13 89.9616C113.987 89.5656 114.985 89.3676 116.125 89.3676C117.256 89.3676 118.248 89.5656 119.101 89.9616C119.958 90.3536 120.616 90.8971 121.077 91.5922C121.542 92.2832 121.774 93.0691 121.774 93.9501C121.774 94.8189 121.54 95.6089 121.071 96.3201C120.606 97.0313 119.945 97.595 119.089 98.0112C118.232 98.4234 117.24 98.6295 116.113 98.6295ZM116.113 96.1079C116.577 96.1079 116.985 96.019 117.337 95.8412C117.689 95.6594 117.959 95.4068 118.149 95.0835C118.339 94.7603 118.434 94.3905 118.434 93.9743C118.434 93.5621 118.339 93.1984 118.149 92.8833C117.959 92.5681 117.689 92.3236 117.337 92.1498C116.985 91.9761 116.577 91.8892 116.113 91.8892C115.644 91.8892 115.234 91.9761 114.882 92.1498C114.531 92.3236 114.258 92.5681 114.064 92.8833C113.874 93.1984 113.779 93.5621 113.779 93.9743C113.779 94.3905 113.874 94.7603 114.064 95.0835C114.258 95.4068 114.531 95.6594 114.882 95.8412C115.234 96.019 115.644 96.1079 116.113 96.1079Z"
        fill="white"
      />
      <path
        d="M128.248 98.6295C127.068 98.6295 126.049 98.4315 125.193 98.0355C124.34 97.6354 123.691 97.0899 123.247 96.3989C122.802 95.7038 122.58 94.9199 122.58 94.047C122.58 93.1621 122.806 92.366 123.259 91.6588C123.712 90.9476 124.372 90.388 125.241 89.9798C126.11 89.5717 127.142 89.3676 128.339 89.3676C129.07 89.3676 129.739 89.4404 130.345 89.5858C130.955 89.7313 131.535 89.9414 132.084 90.2162V92.7802C131.733 92.5337 131.292 92.3337 130.763 92.1801C130.238 92.0266 129.678 91.9498 129.084 91.9498C128.433 91.9498 127.874 92.0347 127.405 92.2044C126.936 92.3741 126.579 92.6125 126.332 92.9196C126.09 93.2227 125.969 93.5743 125.969 93.9743C125.969 94.3784 126.092 94.736 126.338 95.0472C126.589 95.3543 126.948 95.5947 127.417 95.7685C127.886 95.9382 128.442 96.0231 129.084 96.0231C129.698 96.0231 130.27 95.9422 130.799 95.7806C131.329 95.6149 131.765 95.3947 132.109 95.1199V97.6233C131.515 97.9708 130.915 98.2254 130.308 98.387C129.706 98.5487 129.019 98.6295 128.248 98.6295Z"
        fill="white"
      />
      <path
        d="M138.746 98.6295C137.619 98.6295 136.627 98.4214 135.77 98.0052C134.913 97.5889 134.252 97.0252 133.788 96.314C133.323 95.6028 133.091 94.8148 133.091 93.9501C133.091 93.0691 133.321 92.2832 133.782 91.5922C134.246 90.8971 134.907 90.3536 135.764 89.9616C136.62 89.5656 137.619 89.3676 138.758 89.3676C139.89 89.3676 140.882 89.5656 141.734 89.9616C142.591 90.3536 143.25 90.8971 143.71 91.5922C144.175 92.2832 144.407 93.0691 144.407 93.9501C144.407 94.8189 144.173 95.6089 143.704 96.3201C143.24 97.0313 142.579 97.595 141.722 98.0112C140.865 98.4234 139.873 98.6295 138.746 98.6295ZM138.746 96.1079C139.211 96.1079 139.619 96.019 139.97 95.8412C140.322 95.6594 140.593 95.4068 140.783 95.0835C140.973 94.7603 141.068 94.3905 141.068 93.9743C141.068 93.5621 140.973 93.1984 140.783 92.8833C140.593 92.5681 140.322 92.3236 139.97 92.1498C139.619 91.9761 139.211 91.8892 138.746 91.8892C138.277 91.8892 137.867 91.9761 137.516 92.1498C137.164 92.3236 136.891 92.5681 136.697 92.8833C136.507 93.1984 136.412 93.5621 136.412 93.9743C136.412 94.3905 136.507 94.7603 136.697 95.0835C136.891 95.4068 137.164 95.6594 137.516 95.8412C137.867 96.019 138.277 96.1079 138.746 96.1079Z"
        fill="white"
      />
      <path d="M153.615 95.8109V98.3446H145.632V89.6525H148.735V95.8109H153.615Z" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.2074 82.3186C50.7676 81.0227 52.5086 80.5296 54.1782 80.6542C55.9592 80.7872 57.6073 81.6182 58.8381 82.8252C60.069 84.0323 60.9146 85.6469 61.0499 87.3893C61.1865 89.1477 60.5951 90.9893 59.0357 92.6057C58.8931 92.7544 58.7473 92.9014 58.5985 93.0465C51.5258 99.9817 42.1307 100 42.0346 100H42.0341C41.9861 100 32.5612 99.9996 25.4701 93.0455L25.4685 93.044C25.3221 92.8995 25.178 92.7542 25.036 92.6079L25.0348 92.6067C23.4747 90.9918 22.8827 89.1506 23.0189 87.3922C23.1538 85.6501 23.9988 84.0353 25.2293 82.8278C26.4598 81.6203 28.1077 80.7887 29.889 80.6552C31.5585 80.53 33.2998 81.0225 34.861 82.3178C35.0288 80.3199 35.9035 78.765 37.173 77.6961C38.5271 76.556 40.2917 76 42.0341 76C43.7766 76 45.5412 76.556 46.8952 77.6961C48.165 78.7652 49.0397 80.3204 49.2074 82.3186ZM42.3579 99.2968L42.3576 99.288L42.3582 99.288L42.3579 99.2968ZM41.7104 99.2968L41.7101 99.288L41.7107 99.288L41.7104 99.2968ZM47.3477 89.6667C47.1543 89.6667 47.0873 89.9408 47.2107 90.0859C47.4293 90.3431 47.5607 90.6739 47.5607 91.0348C47.5607 91.8538 46.8838 92.5177 46.0487 92.5177C45.2136 92.5177 44.5366 91.8538 44.5366 91.0348C44.5366 90.991 44.4783 90.9692 44.452 91.0047C44.2135 91.3259 44.0525 91.6865 43.9863 92.0652C43.9491 92.2784 43.7724 92.455 43.5503 92.455H43.4277C43.1378 92.455 42.8987 92.2246 42.9415 91.9454C43.2347 90.0321 45.1576 88.6445 47.3477 88.6445C49.5379 88.6445 51.4607 90.0321 51.754 91.9454C51.7967 92.2246 51.5576 92.455 51.2678 92.455C50.978 92.455 50.7485 92.2235 50.6855 91.9479C50.3988 90.6938 49.0699 89.6667 47.3477 89.6667ZM33.9205 91.0348C33.9205 90.977 33.8441 90.946 33.8082 90.992C33.5532 91.3182 33.3795 91.6877 33.306 92.0771C33.2626 92.3071 33.0718 92.4982 32.8317 92.4982H32.7417C32.4519 92.4982 32.2128 92.2678 32.2555 91.9886C32.5486 90.0743 34.4717 88.6876 36.6618 88.6876C38.8519 88.6876 40.775 90.0743 41.068 91.9886C41.1108 92.2678 40.8717 92.4982 40.5819 92.4982C40.2921 92.4982 40.0626 92.2666 39.9996 91.9911C39.7131 90.7362 38.3842 89.7099 36.6618 89.7099C36.5052 89.7099 36.4479 89.9255 36.5527 90.0387C36.7963 90.302 36.9446 90.6514 36.9446 91.0348C36.9446 91.8538 36.2677 92.5177 35.4326 92.5177C34.5975 92.5177 33.9205 91.8538 33.9205 91.0348ZM43.7162 94.6108C43.9211 94.4111 44.2376 94.314 44.4919 94.4494C44.7463 94.5847 44.8428 94.899 44.6595 95.1176C44.0625 95.8298 43.096 96.281 42.0301 96.281C40.9647 96.281 39.9961 95.8345 39.3983 95.117C39.2157 94.8978 39.3134 94.5838 39.5682 94.4494C39.823 94.3149 40.1391 94.4132 40.3436 94.6132C40.7376 94.9984 41.3355 95.2588 42.0301 95.2588C42.7228 95.2588 43.3214 94.9958 43.7162 94.6108Z"
        fill="white"
      />
    </svg>
  );
};
