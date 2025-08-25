// step74: now import redirect here below and also the mongoDB connection utility we created earlier , here below ; and like learnt earlier : MongoDB connection utility that ensures only one connection is reused instead of creating new ones every request ; so even if 100 users are accessing it at same time it doesn't create 100 connections , but a single shared connection is reused mutiple times ; more details in step32--How_to_use_MongoDB_in_NextJs_App.md file there.
import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

// step73: copied the code of javascript from documentation of dynamic routes in Nextjs from there , here below.
export default async function Page({params}) {

    // step75: we now extract the shorturl entered by user from the url and store it in a variable here below as params = {shorturl : "google"} , etc : so it stores the shorturl entered by user in a variable here below.
    const shorturl = (await params).shorturl

    // step76: now like done in page.js of generate folder there , we connect to the database.
    const client = await clientPromise;
    const db = client.db("trimsy"); 
    const collection = db.collection("urls"); 
    
    // step77: we now access the document that has this shorturl field in it equal to the shorturl entered by the user in the input tag of shorturl there , thus here below.
    const doc = await collection.findOne({shorturl : shorturl})

    // step78: if the document exists then we redirect to the url of that document in ehich this was the shorturl and suing the "redirect" fucntion , we redirect to that url.
    if(doc){
        redirect(doc.url)
    }

    // step79: and if it doesn't exist then we redirect to the home page of our website.
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }   
}