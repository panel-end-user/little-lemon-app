import { useState } from "react";

function BookingForm(props) {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')
    const [occasion, setOccasion] = useState('')

    function changeDate(e) {
        setDate(e.target.value)
        props.dispatch({ date: new Date(e.target.value) })
    }

    function handleSubmit(e) {
        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        }
        e.preventDefault()
        props.submitForm(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={changeDate}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {
                    props.availableTimes.times.map(t => {
                        return <option key={t}>{t}</option>
                    })
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;