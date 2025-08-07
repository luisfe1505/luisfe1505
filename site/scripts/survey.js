//  This script generates the survey form exactly like the original, but using only JavaScript. This way I comply with the lab and can easily modify the form if I need to.

const form = document.createElement('form');
form.action = "https://formspree.io/f/mblylbbp";
form.method = "POST";
form.innerHTML = `
<p>
                        <label for="name_field">What is your name? <abbr title="required"
                                aria-label="required">*</abbr></label>
                        <input type="text" id="name_field" name="name_field" required>
                    </p>
                    <p>
                        <label for="email_field"> What is your email? <abbr title="required"
                                aria-label="required">*</abbr></label>
                        <input type="email" id="email_field" name="email_field" required>
                    </p>
                    <p>
                        <label for="best_whole_number">Which whole number is best? </label>
                        <input type="number" id="best_whole_number" name="best_whole_number" min="1" step="1" required>
                    </p>
                    <p>
                        <label for="best_day">Which day is best? </label>
                        <input type="date" id="best_day" name="best_day">
                    </p>
                    <p>
                        <label id="best_bear_label" for="best_bear"> Which bear is best?</label>
                        <select name="best_bear" id="best_bear" aria-labelledby="best_bear_label" required>
                            <option value="" selected>&nbsp;</option>
                            <option value="Black">Black</option>
                            <option value="Brown">Brown</option>
                            <option value="Care">Care</option>
                            <option value="Panda">Panda</option>
                            <option value="Polar">Polar</option>
                            <option value="Teddy">Teddy</option>
                        </select>
                    </p>
                    <fieldset>
                        <legend id="enjoys_radio_buttons">Do you like radio buttons? </legend>
                        <ul>

                            <li>
                                <input type="radio" id="radio_yes" name="enjoys_radio_buttons" value="yes">
                                <label for="radio_yes">Yes</label>
                            </li>
                            <li>
                                <input type="radio" id="radio_no" name="enjoys_radio_buttons" value="no">
                                <label for="radio_no">No</label>
                            </li>
                            <li>
                                <input type="radio" id="radio_none" name="enjoys_radio_buttons" value="?" checked>
                                <label for="radio_none">None of your business</label>
                            </li>
                        </ul>
                    </fieldset>
                    <p>
                        <label for="life_meaning">What is the meaning of life?</label>.
                        <textarea name="life_meaning" id="life_meaning" cols="50" rows="5"
                            placeholder="Enter the correct answer here"></textarea>
                    </p>
                    <button type="submit">Send</button>
`;
const container = document.getElementById('creating-a-web-form');
if (container) {
    container.innerHTML = '';
    container.appendChild(form);
}