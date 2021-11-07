// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object

app.use("/static", express.static("public"));
app.use(express.json()); // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })); // decode url-encoded incoming POST data

app.get("/UserProfileForm", (req, res) => {
  console.log(req.data);
});

const express = require('express') // CommonJS import style!

// const {
//   default: AvAddToQueue,
// } = require("material-ui/svg-icons/av/add-to-queue");

const app = express() // instantiate an Express object

const port = 5000

app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log(`app listening on port ${port}!`))

app.use('/static', express.static('public'))


app.get('/editvendorprofile', (req,res) => {
    const sampleProfile = {
        name : "Julia's Juice Stand",
        category : "Food",
        subcategories : [],
        location : "W 4th Street across from Stern Business School",
        hours : "Monday - Friday 9am-6pm",
        menu : "Green juice - $5",
        description : "Convenient, healthy, delicious green juices made to order by Julia!"
    }
    res.json(sampleProfile);
})


module.exports = app
