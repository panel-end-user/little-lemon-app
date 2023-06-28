import { useReducer, useEffect } from 'react';
import BookingForm from './BookingForm'
import { fetchAPI, submitAPI } from './API/API.js'
import { useNavigate } from 'react-router-dom'

function updateTimes(availableTimes, action) {
    return {
        ...availableTimes,
        times: fetchAPI(action.date)
    }
}

function BookingPage () {
    useEffect(() => {
        initializeTimes()
    }, [])

    function initializeTimes() {
        const currentDate = new Date()
        dispatch({ date: currentDate })
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, { times: [] })

    const navigate = useNavigate()

    function submitForm(formData) {
        if(submitAPI(formData) === true) {
            navigate('/bookingconfirmation')
        }
    }

    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    )
}

export default BookingPage;