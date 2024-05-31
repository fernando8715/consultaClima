import { ChangeEvent, FormEvent, useState } from 'react'
import { countries } from '../../data/countries'
import styles from './Form.module.css'
import { Alert } from '../alert/Alert'

import type { SearchType } from '../../types'

type FormProps = {
    fetchWeather : (search: SearchType) => Promise<void>
}

export const Form = ({fetchWeather}: FormProps) => {

    const [dataSearch, setDataSearch] = useState<SearchType>({
        city: '',
        country: '',
    });

    const [alert, setAlert] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setDataSearch({
            ...dataSearch,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(dataSearch).includes('')) {
            setAlert('Todos los datos son obligatorios');
            return
        }
        setAlert('');
        fetchWeather(dataSearch);
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor='city'>Ciudad:</label>
                <input
                    id='city'
                    type='text'
                    name='city'
                    placeholder='Ingrese la ciudad'
                    value={dataSearch.city}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.field}>
                <label htmlFor='country' >Pais:</label>
                <select
                    id='country'
                    name='country'
                    onChange={handleChange}
                    value={dataSearch.country}
                >
                    <option value=''>--Seleccione--</option>
                    {countries.map(country => (
                        <option
                            key={country.code}
                            value={country.code}
                        >{country.name}</option>
                    ))}
                </select>
            </div>
            <input type='submit' value='Consultar Clima' className={styles.submit} />
        </form>
    )
}
