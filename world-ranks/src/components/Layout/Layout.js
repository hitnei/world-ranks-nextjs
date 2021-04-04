import { useEffect, useState } from "react";
import { Brightness6Rounded } from "@material-ui/icons";
import Head from "next/head";
import Link from "next/Link";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "World Ranks" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerLink}>
          <Link href="/">
            <svg
              width="175"
              height="24"
              viewBox="0 0 175 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.32 20C32.048 20 31.824 19.928 31.648 19.784C31.488 19.624 31.392 19.432 31.36 19.208L28.792 3.848C28.776 3.816 28.768 3.768 28.768 3.704C28.768 3.576 28.816 3.464 28.912 3.368C29.024 3.256 29.144 3.2 29.272 3.2H32.416C32.88 3.2 33.136 3.384 33.184 3.752L34.648 12.824L36.304 7.568C36.432 7.136 36.696 6.92 37.096 6.92H38.896C39.296 6.92 39.56 7.136 39.688 7.568L41.344 12.8L42.832 3.752C42.864 3.56 42.936 3.424 43.048 3.344C43.16 3.248 43.336 3.2 43.576 3.2H46.72C46.864 3.2 46.984 3.256 47.08 3.368C47.176 3.464 47.224 3.576 47.224 3.704V3.848L44.656 19.208C44.624 19.432 44.52 19.624 44.344 19.784C44.168 19.928 43.952 20 43.696 20H41.272C41.016 20 40.816 19.936 40.672 19.808C40.528 19.68 40.432 19.536 40.384 19.376L38.008 12.728L35.632 19.376C35.568 19.536 35.464 19.68 35.32 19.808C35.176 19.936 34.976 20 34.72 20H32.32ZM54.9383 20.24C52.9223 20.24 51.3703 19.776 50.2823 18.848C49.2103 17.904 48.6263 16.568 48.5303 14.84C48.5143 14.632 48.5063 14.272 48.5063 13.76C48.5063 13.248 48.5143 12.888 48.5303 12.68C48.6263 10.984 49.2263 9.664 50.3303 8.72C51.4503 7.76 52.9863 7.28 54.9383 7.28C56.8903 7.28 58.4183 7.76 59.5223 8.72C60.6423 9.664 61.2503 10.984 61.3463 12.68C61.3783 13.096 61.3943 13.456 61.3943 13.76C61.3943 14.064 61.3783 14.424 61.3463 14.84C61.2503 16.568 60.6583 17.904 59.5703 18.848C58.4983 19.776 56.9543 20.24 54.9383 20.24ZM54.9383 17.216C55.5943 17.216 56.0823 17.016 56.4023 16.616C56.7223 16.2 56.9063 15.568 56.9543 14.72C56.9703 14.56 56.9783 14.24 56.9783 13.76C56.9783 13.28 56.9703 12.96 56.9543 12.8C56.9063 11.968 56.7223 11.344 56.4023 10.928C56.0823 10.512 55.5943 10.304 54.9383 10.304C54.2823 10.304 53.7943 10.512 53.4743 10.928C53.1543 11.344 52.9703 11.968 52.9223 12.8L52.8983 13.76L52.9223 14.72C52.9703 15.568 53.1543 16.2 53.4743 16.616C53.7943 17.016 54.2823 17.216 54.9383 17.216ZM64.2805 20C64.1205 20 63.9765 19.944 63.8485 19.832C63.7365 19.704 63.6805 19.56 63.6805 19.4V8.144C63.6805 7.968 63.7365 7.824 63.8485 7.712C63.9605 7.584 64.1045 7.52 64.2805 7.52H67.2085C67.3845 7.52 67.5285 7.584 67.6405 7.712C67.7685 7.824 67.8325 7.968 67.8325 8.144V9.056C68.2805 8.56 68.8005 8.184 69.3925 7.928C70.0005 7.656 70.6725 7.52 71.4085 7.52H72.4885C72.6645 7.52 72.8085 7.576 72.9205 7.688C73.0325 7.8 73.0885 7.944 73.0885 8.12V10.736C73.0885 10.896 73.0325 11.04 72.9205 11.168C72.8085 11.28 72.6645 11.336 72.4885 11.336H70.0645C69.4245 11.336 68.9285 11.512 68.5765 11.864C68.2405 12.216 68.0725 12.712 68.0725 13.352V19.4C68.0725 19.576 68.0085 19.72 67.8805 19.832C67.7685 19.944 67.6245 20 67.4485 20H64.2805ZM75.367 20C75.191 20 75.039 19.944 74.911 19.832C74.799 19.72 74.743 19.576 74.743 19.4V3.56C74.743 3.384 74.799 3.24 74.911 3.128C75.039 3.016 75.191 2.96 75.367 2.96H78.367C78.543 2.96 78.687 3.016 78.799 3.128C78.911 3.24 78.967 3.384 78.967 3.56V19.4C78.967 19.56 78.911 19.704 78.799 19.832C78.687 19.944 78.543 20 78.367 20H75.367ZM86.3839 20.24C84.8319 20.24 83.6079 19.752 82.7119 18.776C81.8319 17.8 81.3599 16.408 81.2959 14.6L81.2719 13.76L81.2959 12.896C81.3599 11.152 81.8399 9.784 82.7359 8.792C83.6319 7.784 84.8479 7.28 86.3839 7.28C87.8239 7.28 88.9839 7.744 89.8639 8.672V3.56C89.8639 3.384 89.9199 3.24 90.0319 3.128C90.1599 3.016 90.3039 2.96 90.4639 2.96H93.5599C93.7359 2.96 93.8799 3.016 93.9919 3.128C94.1199 3.24 94.1839 3.384 94.1839 3.56V19.4C94.1839 19.576 94.1199 19.72 93.9919 19.832C93.8799 19.944 93.7359 20 93.5599 20H90.7039C90.5439 20 90.3999 19.944 90.2719 19.832C90.1599 19.704 90.1039 19.56 90.1039 19.4V18.656C89.2399 19.712 87.9999 20.24 86.3839 20.24ZM87.7759 16.904C88.4639 16.904 88.9759 16.688 89.3119 16.256C89.6479 15.808 89.8319 15.248 89.8639 14.576C89.8959 14.128 89.9119 13.824 89.9119 13.664C89.9119 13.488 89.8959 13.192 89.8639 12.776C89.8319 12.152 89.6399 11.64 89.2879 11.24C88.9519 10.824 88.4479 10.616 87.7759 10.616C87.0559 10.616 86.5359 10.832 86.2159 11.264C85.9119 11.68 85.7359 12.264 85.6879 13.016L85.6639 13.76L85.6879 14.504C85.7359 15.256 85.9119 15.848 86.2159 16.28C86.5359 16.696 87.0559 16.904 87.7759 16.904Z"
                fill="#B9C9D1"
              />
              <path
                d="M102.818 20C102.658 20 102.514 19.944 102.386 19.832C102.274 19.704 102.218 19.56 102.218 19.4V3.824C102.218 3.648 102.274 3.504 102.386 3.392C102.498 3.264 102.642 3.2 102.818 3.2H109.418C111.53 3.2 113.178 3.68 114.362 4.64C115.562 5.6 116.162 6.952 116.162 8.696C116.162 9.816 115.898 10.768 115.37 11.552C114.858 12.336 114.146 12.944 113.234 13.376L116.474 19.232C116.522 19.328 116.546 19.416 116.546 19.496C116.546 19.624 116.498 19.744 116.402 19.856C116.306 19.952 116.186 20 116.042 20H112.658C112.194 20 111.866 19.784 111.674 19.352L109.034 14.144H106.73V19.4C106.73 19.576 106.666 19.72 106.538 19.832C106.426 19.944 106.282 20 106.106 20H102.818ZM109.394 10.616C110.082 10.616 110.602 10.448 110.954 10.112C111.322 9.76 111.506 9.28 111.506 8.672C111.506 8.064 111.322 7.576 110.954 7.208C110.602 6.84 110.082 6.656 109.394 6.656H106.73V10.616H109.394ZM122.409 20.24C121.561 20.24 120.785 20.08 120.081 19.76C119.393 19.424 118.849 18.968 118.449 18.392C118.065 17.816 117.873 17.184 117.873 16.496C117.873 15.408 118.321 14.528 119.217 13.856C120.129 13.168 121.377 12.696 122.961 12.44L125.937 11.984V11.696C125.937 11.104 125.817 10.672 125.577 10.4C125.337 10.128 124.929 9.992 124.353 9.992C124.033 9.992 123.761 10.048 123.537 10.16C123.329 10.272 123.089 10.44 122.817 10.664C122.609 10.84 122.425 10.968 122.265 11.048C122.201 11.16 122.121 11.216 122.025 11.216H119.241C119.081 11.216 118.945 11.168 118.833 11.072C118.737 10.96 118.697 10.832 118.713 10.688C118.729 10.256 118.945 9.776 119.361 9.248C119.777 8.704 120.409 8.24 121.257 7.856C122.105 7.472 123.153 7.28 124.401 7.28C126.385 7.28 127.857 7.72 128.817 8.6C129.777 9.464 130.257 10.64 130.257 12.128V19.4C130.257 19.56 130.201 19.704 130.089 19.832C129.977 19.944 129.833 20 129.657 20H126.705C126.545 20 126.401 19.944 126.273 19.832C126.161 19.704 126.105 19.56 126.105 19.4V18.56C125.753 19.056 125.265 19.464 124.641 19.784C124.017 20.088 123.273 20.24 122.409 20.24ZM123.609 17.408C124.313 17.408 124.881 17.176 125.313 16.712C125.761 16.248 125.985 15.576 125.985 14.696V14.408L123.993 14.744C122.649 15 121.977 15.48 121.977 16.184C121.977 16.552 122.129 16.848 122.433 17.072C122.753 17.296 123.145 17.408 123.609 17.408ZM133.468 20C133.308 20 133.164 19.944 133.036 19.832C132.924 19.704 132.868 19.56 132.868 19.4V8.12C132.868 7.944 132.924 7.8 133.036 7.688C133.164 7.576 133.308 7.52 133.468 7.52H136.42C136.596 7.52 136.74 7.576 136.852 7.688C136.964 7.8 137.02 7.944 137.02 8.12V9.032C137.452 8.504 138.004 8.08 138.676 7.76C139.364 7.44 140.148 7.28 141.028 7.28C141.94 7.28 142.748 7.488 143.452 7.904C144.172 8.32 144.732 8.936 145.132 9.752C145.548 10.568 145.756 11.552 145.756 12.704V19.4C145.756 19.56 145.7 19.704 145.588 19.832C145.476 19.944 145.332 20 145.156 20H141.964C141.788 20 141.636 19.944 141.508 19.832C141.396 19.72 141.34 19.576 141.34 19.4V12.848C141.34 12.128 141.164 11.576 140.812 11.192C140.476 10.808 139.98 10.616 139.324 10.616C138.684 10.616 138.18 10.816 137.812 11.216C137.444 11.6 137.26 12.144 137.26 12.848V19.4C137.26 19.56 137.204 19.704 137.092 19.832C136.98 19.944 136.836 20 136.66 20H133.468ZM149.008 20C148.832 20 148.68 19.944 148.552 19.832C148.44 19.72 148.384 19.576 148.384 19.4V3.56C148.384 3.384 148.44 3.24 148.552 3.128C148.68 3.016 148.832 2.96 149.008 2.96H151.936C152.112 2.96 152.256 3.016 152.368 3.128C152.48 3.24 152.536 3.384 152.536 3.56V11.576L155.728 7.928C155.76 7.896 155.816 7.84 155.896 7.76C155.992 7.68 156.088 7.624 156.184 7.592C156.28 7.544 156.4 7.52 156.544 7.52H159.928C160.072 7.52 160.192 7.576 160.288 7.688C160.4 7.784 160.456 7.912 160.456 8.072C160.456 8.216 160.4 8.344 160.288 8.456L156.064 13.112L160.888 19.088C161 19.232 161.056 19.352 161.056 19.448C161.056 19.608 161 19.744 160.888 19.856C160.792 19.952 160.664 20 160.504 20H157.024C156.816 20 156.656 19.968 156.544 19.904C156.448 19.84 156.328 19.736 156.184 19.592L152.536 15.08V19.4C152.536 19.56 152.48 19.704 152.368 19.832C152.256 19.944 152.112 20 151.936 20H149.008ZM167.538 20.24C166.226 20.24 165.13 20.056 164.25 19.688C163.37 19.32 162.714 18.88 162.282 18.368C161.866 17.856 161.658 17.392 161.658 16.976C161.658 16.816 161.714 16.688 161.826 16.592C161.954 16.48 162.09 16.424 162.234 16.424H165.138C165.234 16.424 165.314 16.456 165.378 16.52C165.65 16.696 165.802 16.8 165.834 16.832C166.138 17.056 166.418 17.232 166.674 17.36C166.946 17.472 167.266 17.528 167.634 17.528C168.066 17.528 168.418 17.448 168.69 17.288C168.978 17.112 169.122 16.872 169.122 16.568C169.122 16.312 169.042 16.104 168.882 15.944C168.738 15.784 168.45 15.632 168.018 15.488C167.602 15.328 166.962 15.168 166.098 15.008C163.33 14.448 161.946 13.168 161.946 11.168C161.946 10.512 162.154 9.888 162.57 9.296C163.002 8.688 163.626 8.2 164.442 7.832C165.274 7.464 166.266 7.28 167.418 7.28C168.586 7.28 169.594 7.464 170.442 7.832C171.306 8.184 171.962 8.616 172.41 9.128C172.858 9.624 173.082 10.08 173.082 10.496C173.082 10.64 173.026 10.768 172.914 10.88C172.818 10.992 172.698 11.048 172.554 11.048H169.914C169.77 11.048 169.658 11.016 169.578 10.952C169.386 10.856 169.194 10.736 169.002 10.592C168.714 10.4 168.458 10.256 168.234 10.16C168.026 10.048 167.754 9.992 167.418 9.992C167.018 9.992 166.706 10.08 166.482 10.256C166.258 10.432 166.146 10.656 166.146 10.928C166.146 11.168 166.21 11.368 166.338 11.528C166.482 11.672 166.762 11.816 167.178 11.96C167.61 12.104 168.258 12.256 169.122 12.416C170.69 12.688 171.826 13.176 172.53 13.88C173.25 14.568 173.609 15.376 173.609 16.304C173.609 17.504 173.074 18.464 172.002 19.184C170.946 19.888 169.458 20.24 167.538 20.24Z"
                fill="#21B6B7"
              />
              <rect y="15.7336" width="22" height="4.4" rx="2" fill="#21B6B7" />
              <rect
                y="9.86725"
                width="14.6667"
                height="4.4"
                rx="2"
                fill="#21B6B7"
              />
              <rect y="4" width="7.33333" height="4.4" rx="2" fill="#21B6B7" />
            </svg>
          </Link>
        </div>
        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>All Rights Reserved.</footer>
    </div>
  );
};

export default Layout;
