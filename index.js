const express = require('express')

const app = express()
const port = 3000

let issues = [{
    id: "1",
    title: "first issue",
    description: "Pineappple doesn't belong on pizza"
},
{
    id: "2",
    title: "second issue",
    description: "Nothing works!!"
}];

app.get('/issue', (req,res) => {
    res.json(issues)
})

app.listen(port, () => console.log(`listening on port ${port}`);
)