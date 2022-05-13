# Simple application in TS to gather weather information about your location

## Setup configuration

- Get your `API_KEY` on: https://openweathermap.org/api
- Verify your email (the mail needs to be verified for the key to work)
- If the API returns 401, your key is probably not activated yet. Within the next couple of hours, it will be activated and ready to use (https://openweathermap.org/faq#error401)
- Replace `PUT_YOUR_API_KEY_HERE` in .env with your `API_KEY`

## How to run?

```bash
# install dependencies
yarn install

# start the application
yarn start

# open the application in the browser
open http://localhost:3000
```
