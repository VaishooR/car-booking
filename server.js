const express= require('express');
const app= express();

const dbConfig= require('./db');
const carsRoute=require('./routes/carsRoute');
const usersRoute= require('./routes/userRoute');
const bookingsRoute=require('./routes/bookingsRoute')
app.use(express.json())

app.use('/api/cars',carsRoute);
app.use('/api/users', usersRoute);
// app.use('/api/bookings',bookingsRoute)

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server running on port ${port}`))




