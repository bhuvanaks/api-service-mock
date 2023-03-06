# api-service-mock

Mock of the api services used for DBaaS UI

## Local development

1. Install deps with `yarn`
2. Run `yarn dev`
3. Make changes to files inside `src` folder
4. Your app will be running on `http://localhost:3000`

## Building

Before pushing to github, make sure to build TS->JS with `yarn build`. That will update files in `build` folder

## Auto deploying

After you push changes, the app will be auto deployed to `https://api-service-mock.onrender.com` (deploy process can take about 5 minutes)
