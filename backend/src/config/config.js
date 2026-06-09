import moongose from "mongoose"

const connect = async ()=>{

    await moongose.connect("mongodb://chess_netflix_app:CyNKho6rWhXX43n6@ac-rltjsc2-shard-00-00.soxze6n.mongodb.net:27017,ac-rltjsc2-shard-00-01.soxze6n.mongodb.net:27017,ac-rltjsc2-shard-00-02.soxze6n.mongodb.net:27017/?ssl=true&replicaSet=atlas-47mw1z-shard-0&authSource=admin&appName=Cluster0");

    console.log("connection sucess");



}

export default connect;