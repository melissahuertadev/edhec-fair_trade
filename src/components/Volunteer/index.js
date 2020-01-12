import React from 'react';
import { FirebaseContext } from '../Firebase';

const Volunteer = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>
                <form class="ui form">
                    <div>
                        <h1>Volunteer</h1>
                    </div>
                    <div class="field">
                        <label>
                            <h4>First Name</h4>
                        </label>
                        <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                    <div class="field">
                        <label>
                            <h4>Last Name</h4>
                            </label>
                        <input type="text" name="last-name" placeholder="Last Name" />
                    </div>
                    <div class="field">
                        <label>
                            <h4>email</h4>
                            </label>
                        <input type="text" name="email" placeholder="email" />
                    </div>
                    <div class="field">
                        <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" />
                        <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
                <br />
                <br />
                <h1>Donate</h1>
                <form class="ui form">
                    <h4 class="ui dividing header">Donation Information</h4>
                    <div class="field">
                        <label>Name</label>
                        <div class="two fields">
                        <div class="field">
                            <input type="text" name="shipping[first-name]" placeholder="First Name" />
                        </div>
                        <div class="field">
                            <input type="text" name="shipping[last-name]" placeholder="Last Name" />
                        </div>
                        </div>
                    </div>
                    <div class="field">
                        <label>Billing Address</label>
                        <div class="fields">
                        <div class="twelve wide field">
                            <input type="text" name="shipping[address]" placeholder="Street Address" />
                        </div>
                        <div class="four wide field">
                            <input type="text" name="shipping[address-2]" placeholder="Apt #" />
                        </div>
                        </div>
                    </div>
                    <div class="two fields">
                        <div class="field">
                        <label>State</label>
                        <select class="ui fluid dropdown">
                            <option>State</option>
                            <option>No State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                        </select>
                        </div>
                        </div>
                        
                        <div class="two fields">
                            <div class="field">
                                <label>Country</label>
                                <select class="form-group ui selection dropdown" id="select">
                            <option>Select a country</option>
                            <option>Afghanistan</option>
                            <option>Albania</option>
                            <option>Algeria</option>
                            <option>American Samoa</option>
                            <option>Andorra</option>
                            <option>Angola</option>
                            <option>Anguilla</option>
                            <option>Antigua</option>
                            <option>Argentina</option>
                            <option>Armenia</option>
                            <option>Aruba</option>
                            <option>Australia</option>
                            <option>Austria</option>
                            <option>Azerbaijan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                            <option>Belarus</option>
                            <option>Belgium</option>
                            <option>Belize</option>
                            <option>Benin</option>
                            <option>Bermuda</option>
                            <option>Bhutan</option>
                            <option>Bolivia</option>
                            <option>Bosnia</option>
                            <option>Botswana</option>
                            <option>Bouvet Island</option>
                            <option>Brazil</option>
                            <option>British Virgin Islands</option>
                            <option>Brunei</option>
                            <option>Bulgaria</option>
                            <option>Burkina Faso</option>
                            <option>Burma</option>
                            <option>Burundi</option>
                            <option>Caicos Islands</option>
                            <option>Cambodia</option>
                            <option>Cameroon</option>
                            <option>Canada</option>
                            <option>Cape Verde</option>
                            <option>Cayman Islands</option>
                            <option>Central African Republic</option>
                            <option>Chad</option>
                            <option>Chile</option>
                            <option>China</option>
                            <option>Christmas Island</option>
                            <option>Cocos Islands</option>
                            <option>Colombia</option>
                            <option>Comoros</option>
                            <option>Congo Brazzaville</option>
                            <option>Congo</option>
                            <option>Cook Islands</option>
                            <option>Costa Rica</option>
                            <option>Cote Divoire</option>
                            <option>Croatia</option>
                            <option>Cuba</option>
                            <option>Cyprus</option>
                            <option>Czech Republic</option>
                            <option>Denmark</option>
                            <option>Djibouti</option>
                            <option>Dominica</option>
                            <option>Dominican Republic</option>
                            <option>Ecuador</option>
                            <option>Egypt</option>
                            <option>El Salvador</option>
                            <option>England</option>
                            <option>Equatorial Guinea</option>
                            <option>Eritrea</option>
                            <option>Estonia</option>
                            <option>Ethiopia</option>
                            <option>European Union</option>
                            <option>Falkland Islands</option>
                            <option>Faroe Islands</option>
                            <option>Fiji</option>
                            <option>Finland</option>
                            <option>France</option>
                            <option>French Guiana</option>
                            <option>French Polynesia</option>
                            <option>French Territories</option>
                            <option>Gabon</option>
                            <option>Gambia</option>
                            <option>Georgia</option>
                            <option>Germany</option>
                            <option>Ghana</option>
                            <option>Gibraltar</option>
                            <option>Greece</option>
                            <option>Greenland</option>
                            <option>Grenada</option>
                            <option>Guadeloupe</option>
                            <option>Guam</option>
                            <option>Guatemala</option>
                            <option>Guinea-Bissau</option>
                            <option>Guinea</option>
                            <option>Guyana</option>
                            <option>Haiti</option>
                            <option>Heard Island</option>
                            <option>Honduras</option>
                            <option>Hong Kong</option>
                            <option>Hungary</option>
                            <option>Iceland</option>
                            <option>India</option>
                            <option>Indian Ocean Territory</option>
                            <option>Indonesia</option>
                            <option>Iran</option>
                            <option>Iraq</option>
                            <option>Ireland</option>
                            <option>Israel</option>
                            <option>Italy</option>
                            <option>Jamaica</option>
                            <option>Japan</option>
                            <option>Jordan</option>
                            <option>Kazakhstan</option>
                            <option>Kenya</option>
                            <option>Kiribati</option>
                            <option>Kuwait</option>
                            <option>Kyrgyzstan</option>
                            <option>Laos</option>
                            <option>Latvia</option>
                            <option>Lebanon</option>
                            <option>Lesotho</option>
                            <option>Liberia</option>
                            <option>Libya</option>
                            <option>Liechtenstein</option>
                            <option>Lithuania</option>
                            <option>Luxembourg</option>
                            <option>Macau</option>
                            <option>Macedonia</option>
                            <option>Madagascar</option>
                            <option>Malawi</option>
                            <option>Malaysia</option>
                            <option>Maldives</option>
                            <option>Mali</option>
                            <option>Malta</option>
                            <option>Marshall Islands</option>
                            <option>Martinique</option>
                            <option>Mauritania</option>
                            <option>Mauritius</option>
                            <option>Mayotte</option>
                            <option>Mexico</option>
                            <option>Micronesia</option>
                            <option>Moldova</option>
                            <option>Monaco</option>
                            <option>Mongolia</option>
                            <option>Montenegro</option>
                            <option>Montserrat</option>
                            <option>Morocco</option>
                            <option>Mozambique</option>
                            <option>Namibia</option>
                            <option>Nauru</option>
                            <option>Nepal</option>
                            <option>Netherlands Antilles</option>
                            <option>Netherlands</option>
                            <option>New Caledonia</option>
                            <option>New Guinea</option>
                            <option>New Zealand</option>
                            <option>Nicaragua</option>
                            <option>Niger</option>
                            <option>Nigeria</option>
                            <option>Niue</option>
                            <option>Norfolk Island</option>
                            <option>North Korea</option>
                            <option>Northern Mariana Islands</option>
                            <option>Norway</option>
                            <option>Oman</option>
                            <option>Pakistan</option>
                            <option>Palau</option>
                            <option>Palestine</option>
                            <option>Panama</option>
                            <option>Paraguay</option>
                            <option>Peru</option>
                            <option>Philippines</option>
                            <option>Pitcairn Islands</option>
                            <option>Poland</option>
                            <option>Portugal</option>
                            <option>Puerto Rico</option>
                            <option>Qatar</option>
                            <option>Reunion</option>
                            <option>Romania</option>
                            <option>Russia</option>
                            <option>Rwanda</option>
                            <option>Saint Helena</option>
                            <option>Saint Kitts and Nevis</option>
                            <option>Saint Lucia</option>
                            <option>Saint Pierre</option>
                            <option>Saint Vincent</option>
                            <option>Samoa</option>
                            <option>San Marino</option>
                            <option>Sandwich Islands</option>
                            <option>Sao Tome</option>
                            <option>Saudi Arabia</option>
                            <option>Senegal</option>
                            <option>Serbia</option>
                            <option>Seychelles</option>
                            <option>Sierra Leone</option>
                            <option>Singapore</option>
                            <option>Slovakia</option>
                            <option>Slovenia</option>
                            <option>Solomon Islands</option>
                            <option>Somalia</option>
                            <option>South Africa</option>
                            <option>South Korea</option>
                            <option>Spain</option>
                            <option>Sri Lanka</option>
                            <option>Sudan</option>
                            <option>Suriname</option>
                            <option>Svalbard</option>
                            <option>Swaziland</option>
                            <option>Sweden</option>
                            <option>Switzerland</option>
                            <option>Syria</option>
                            <option>Taiwan</option>
                            <option>Tajikistan</option>
                            <option>Tanzania</option>
                            <option>Thailand</option>
                            <option>Timorleste</option>
                            <option>Togo</option>
                            <option>Tokelau</option>
                            <option>Tonga</option>
                            <option>Trinidad</option>
                            <option>Tunisia</option>
                            <option>Turkey</option>
                            <option>Turkmenistan</option>
                            <option>Tuvalu</option>
                            <option>Uganda</option>
                            <option>Ukraine</option>
                            <option>United Arab Emirates</option>
                            <option>United States</option>
                            <option>Uruguay</option>
                            <option>Us Minor Islands</option>
                            <option>Us Virgin Islands</option>
                            <option>Uzbekistan</option>
                            <option>Vanuatu</option>
                            <option>Vatican City</option>
                            <option>Venezuela</option>
                            <option>Vietnam</option>
                            <option>Wallis and Futuna</option>
                            <option>Western Sahara</option>
                            <option>Yemen</option>
                            <option>Zambia</option>
                            <option>Zimbabwe</option>
                            </select>
                            </div>
                            </div>

                    <h4 class="ui dividing header">Billing Information</h4>
                    <div class="field">
                            <div class="field">
                                <label>Card Type</label>
                                <input type="hidden" name="card[type]" />
                                <select class="ui selection dropdown" id="select">
                            <option>Type</option>
                            <option>Visa</option>
                            <option>American Express</option>
                            <option>Mastercard</option>
                            <option>Discover</option>
                            </select>
                            </div>
                    </div>
                    <div class="fields">
                        <div class="seven wide field">
                        <label>Card Number</label>
                        <input type="text" name="card[number]" maxlength="16" placeholder="Card #" />
                        </div>
                        <div class="three wide field">
                        <label>CVC</label>
                        <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC" />
                        </div>
                        <div class="six wide field">
                        <label>Expiration</label>
                        <div class="two fields">
                            <div class="field">
                            <select class="ui fluid search dropdown" name="card[expire-month]">
                                <option value="">Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            </div>
                            <div class="field">
                            <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year" />
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div class="ui segment">
                        <div class="field">
                        <div class="ui toggle checkbox">
                            <input type="checkbox" name="gift" tabindex="0" />
                            <label>Do not include a receipt in the package</label>
                        </div>
                        </div>
                    </div>
                    <div class="ui button" tabindex="0">Submit Order</div>
                </form>
            </div>
        }
    }
    </FirebaseContext.Consumer>
);

export default Volunteer;