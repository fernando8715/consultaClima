import { formatGrades } from '../../helpers TS'
import styles from './WeatherDetails.module.css'
import { Weather } from '../../hooks/useWeather'


type WeatherDetailsProps = {
    dataWeather: Weather
}

export const WeatherDetails = ({ dataWeather }: WeatherDetailsProps) => {
    const { name, main, weather } = dataWeather

    return (
        <div className={styles.container}>
            <h2 className={styles.city}>Clima de: {name}</h2>
            <p className={styles.description}>{weather[0].description}</p>
            <p className={styles.actually}><span>{formatGrades(main.temp)}&deg;C</span></p>
            <div className={styles.temperatures}>
                <p>Max. <span>{formatGrades(main.temp_max)}&deg;C</span></p>
                <p>Min. <span>{formatGrades(main.temp_min)}&deg;C</span></p>
            </div>
        </div>
    )
}
