let places =[];
let id = 0;


module.exports = {
    read: (req, res)=> {
        res.status(200).send(places);
    },
    create: ( req, res) => {
        const { places } =req.body;
        let day ={
            id: id,
            places:places
        }
        places.push(place);
        id++;
        res.status(200).send(places);
    }
};