import React from 'react';

export default function About() {
    return (
        <div className="about-section  rounded-bottom p-5 text-light background-image1">

            <h2>About Our Weather App</h2>
            <p>Welcome to our Weather App! 🌦️</p>
            <p>
                Our mission is to provide you with accurate and up-to-date weather information for cities around the world. Whether you're planning your day, preparing for a trip, or just curious about the weather, our app has got you covered.
            </p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Key Features
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Real-Time Weather Data:</strong> Get the latest weather updates, including temperature, humidity, wind speed, and more.</li>
                                <li><strong>City Search:</strong> Easily search for weather information in any city. If the city exists in the OpenWeather database, we'll provide you with detailed weather data.</li>
                                <li><strong>Visual Weather Icons:</strong> Enjoy visually appealing weather icons that represent current weather conditions.</li>
                                <li><strong>Detailed Forecast:</strong> Access more detailed information such as minimum and maximum temperatures, wind speed, and even rain data if available.</li>
                                <li><strong>User-Friendly Interface:</strong> Navigate through our app with ease, thanks to our intuitive and responsive design.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How It Works
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ol>
                                <li><strong>Search for a City:</strong> Enter the name of the city you want to check the weather for.</li>
                                <li><strong>Fetch Data:</strong> Our app connects to the OpenWeather API to fetch the latest weather data for the specified city.</li>
                                <li><strong>Display Results:</strong> View the weather details, including temperature, weather conditions, and more, all in one place.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Why Choose Us?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <ul>
                                <li><strong>Accuracy:</strong> We use reliable data from the OpenWeather API to ensure you get the most accurate weather information.</li>
                                <li><strong>Simplicity:</strong> Our app is designed to be simple and easy to use, so you can quickly find the information you need.</li>
                                <li><strong>Visual Appeal:</strong> Enjoy a clean and modern design that makes checking the weather a pleasant experience.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p>
                Thank you for choosing our Weather App! We hope it helps you stay informed and prepared for whatever the weather brings. If you have any feedback or suggestions, feel free to reach out to us.
            </p>

            <p>Stay weather-wise! ☀️🌧️🌩️</p>
        </div>
    );
}
