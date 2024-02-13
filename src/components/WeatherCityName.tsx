import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function WeatherCityName({name, iconURL}: {name: string, iconURL: string}) {
  return (
    <>
        <div className={styles.center}>
          <div className={styles.header}>
            {name}
          </div>
        </div>
        <div className={styles.center}>
            <Image
              className={styles.logo}
              src={iconURL}
              alt="weather icon"
              width={180}
              height={180}
              priority
            />
        </div>
    </>
  );
}
