# Reserva Veiculos

Welcome to ReservaVeiculos, a web application built with angular where you can rent cars. This is the front-end part of this application. You can find the back-end in this [repo].

## How it works

Each user needs to register and login in order to access the application. Then, one can choose between the available cars and make a reservation. It is only possible to reserve a single car at a time. When it is time to return the car, just find your car in the main page and return it, or navigate to the "my reservations" tab via the navigation menu and check your current reservation.

## How to run

Clone the repo in your machine and head to the newly created directory:

    git clone https://github.com/jhonnatangomes/vehicle-reservation-front-end
    cd vehicle-reservation-front-end

Then, install dependencies:

    npm install

You can then start the project using:

    npm start

Alternatively, if you want to check the deployed version, you can go [here]. When using the deployed version, the first login might take about 5 seconds due to the deploy of the back-end in Heroku. It takes a little while to wake up the application when it has not been used for a while.

[here]: http://vehicle-reservation-front-end.vercel.app/
[repo]: https://github.com/jhonnatangomes/vehicle-reservation-back-end
