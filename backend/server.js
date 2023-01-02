import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import productRoute from './routes/productRoute.js'

const app = express()
const port = 5000

const db = async () => {
    await mongoose.connect('mongodb+srv://iqblfrdsyh:punyaiqbal@cluster0.soat5s1.mongodb.net/ecommerce?retryWrites=true&w=majority').finally(console.log('Connected'))
}
db().catch((err) => console.log(err))

app.use(express.json())
app.use(cors())
app.use(productRoute)

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})