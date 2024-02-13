import styles from "@/styles/Home.module.css";
import WeatherInterface from '@/interfaces/weather';

export default function WeatherDetail({weatherData}: {weatherData: WeatherInterface | null}) {
  return (
    <>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>{weatherData?.temp} °C</h2>
            <p>Temp</p>
          </div>

          <div className={styles.card}>
            <h2>{weatherData?.pressure} hPa</h2>
            <p>Pressure</p>
          </div>

          <div className={styles.card}>
            <h2><div style={{ 'display': 'inline-block','rotate': `${weatherData?.windDeg}deg` }}>↑</div> {weatherData?.windSpeed} m/s</h2>
            <p>Wind</p>
          </div>

          <div className={styles.card}>
            <h2>{weatherData?.clouds} %</h2>
            <p>Cloud</p>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>{weatherData?.sunriseTime}</h2>
            <p>Sunrise</p>
          </div>

          <div className={styles.card}>
            <h2>{weatherData?.sunsetTime}</h2>
            <p>Sunset</p>
          </div>
        </div>
    </>
  );
}
