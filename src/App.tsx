import styles from './App.module.css';
import { Alert } from './components/alert/Alert';
import { Form } from './components/form/Form';
import { Spinner } from './components/spinner/Spinner';
import { WeatherDetails } from './components/weatherDetails/WeatherDetails';
import useWeather from './hooks/useWeather';

function App() {

  const { dataWeather, hasDataWeather, isLoading, notFound, fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Consulta el estado del tiempo</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {hasDataWeather && <WeatherDetails dataWeather={dataWeather} />}
        {isLoading && <Spinner />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  )
}

export default App
