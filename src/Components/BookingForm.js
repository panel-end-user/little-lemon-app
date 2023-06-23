import { useState } from "react";

function BookingForm() {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')
    const [occasion, setOccasion] = useState('')

    return (
        <form>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;