import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from '@/components/Header';
import WeatherDetail from '@/components/WeatherDetail';
import WeatherCityName from '@/components/WeatherCityName';
import Loading from '@/components/Loading';
import GetWeather from '@/hooks/weather';
import WeatherInterface from '@/interfaces/weather';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let weatherData: WeatherInterface | null = GetWeather();
  if (!weatherData) return <Loading />

  return (
    <>
      <Header iconURL={weatherData.iconURL} />
      {weatherData && <main className={`${styles.main} ${inter.className}`}>
        <WeatherCityName name={weatherData.name} iconURL={weatherData.iconURL} />
        <WeatherDetail weatherData={weatherData}/>
      </main>}
    </>
  );
  }
