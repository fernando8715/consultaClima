import axios from "axios"
import { z } from 'zod';
import { SearchType } from "../types";
import { useMemo, useState } from "react";

// esquema con libreria de zod
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    }),
    weather: z.array(z.object({
        description: z.string(),
    }))
})

export type Weather = z.infer<typeof Weather>

const initialState = {
    name: '',
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0,
    },
    weather: [
        {
            description: ''
        }
    ]
}


const useWeather = () => {

    const [dataWeather, setDataWeather] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false);
    const [notFound, setNotFound] = useState(false)

    const hasDataWeather = useMemo(() => dataWeather.name, [dataWeather])

    const fetchWeather = async (search: SearchType) => {
        const appId = import.meta.env.VITE_API_KEY;
        setIsLoading(true);
        setDataWeather(initialState);
        setNotFound(false)
        try {
            // consultar latitud y longitud de la ciudad y pais
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
            const { data } = await axios(geoUrl);
            if (!data[0]) {
                setNotFound(true)
                return
            }
            const { lat, lon } = data[0]

            // consultar clima
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=${appId}`
            const { data: weatherRes } = await axios(weatherUrl);

            // comprobar el esquema definido con los datos de la api.
            const result = Weather.safeParse(weatherRes);
            if (result.success) {
                setDataWeather(result.data)
                // ------------------Verificar los datos en consola ------------------------
                // console.log(result.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    return {
        dataWeather,
        hasDataWeather,
        isLoading,
        notFound,
        fetchWeather,
    }
}

export default useWeather
