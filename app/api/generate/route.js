// step32: see the documentation for "route.js" used to make API endpoint in NextJs > copy the code for that , here below.

// step35: now lets import the promise we created in the previous file here below.

// NOTE : export default something → import without braces: import something from "file"; AND IF : export const something = ... → import with braces: import { something } from "file";  and since this clientPromise was exported as default, we import it without braces here below.

// import {clientPromise} from "@/lib/mongodb" 
import clientPromise from "@/lib/mongodb" 

export async function POST(request) {
    try{
    // step40: now we store the data coming from the POST request into a object named "body" here below.
    const body = await request.json();

    // step36: now we connect to the mongodb database using the promise imported as follows -
    const client = await clientPromise;
    const db = client.db("trimsy"); //name of the database mentioned here
    const collection = db.collection("urls"); //name of the collection to store all the urls in it

    // step49: now we check if the shorturl already exists in the database or not , here below.

    // step50: so before proceeding to the below code to insert data , we check that no item with field "shorturl" equal to "body.shorturl" i.e. the shorturl entered by the user already exists in the database or not ; and if it exists then we return with success status "false" from here only and do not insert the data into the database as it returns from here only and not proceeds to insert the data into the database as it already exists there.

    // step51: see next steps in shorten folder's page.js file now there.
    const doc = await collection.findOne({shorturl : body.shorturl})
    if(doc){
        return Response.json({success : false , error : true , message : 'URL Already Exists'})
    }

    // step37: now we are going to generate the short url using this route endpoint here below.

    // step38: if in POSTMAN we send a POST Request to "localhost:3000/api/generate" with the data as -
         /*
        {
        url : "https://google.com",
        shorturl : "google"
        }
         */
    // ; then we want that if our hosted website is "trimsy.vercel.app" , then the short url will be "trimsy.vercel.app/google" and it will redirect us to the original url "https://google.com".

    // step39: so now whenever we make a POST request with this data at "localhost:3000/api/generate" , then we want to store that data in the database here below.

    // step42: created it await as insertOne is an async function.
    const result = await collection.insertOne({
        // step41: now lets insert the following data into the database by making a field url and shorturl in the document of the collection "urls" of the database "trimsy" here below.
        url : body.url,
        shorturl : body.shorturl

    })

    // step43: we used POST and not GET because , GET is used to retrieve data from the server and POST is used to send new data to the server ; In GET data is visible in browser history , so its meant for reading data and not for modifying the database ; whereas POST is more secure for sensitive data sending and for creating new records in the database ; so thus GET is used to fetch data from the server and POST is used to send new data to the server and insert in the database there , here below ; so POST is Clean, secure, correct HTTP usage and it Properly inserts data into DB.

    // step44: so now when client sends a POST request via Postman or frontend with the url and shorturl data , then it reads the JSON body and inserts it into the database and sends back the following response back to the client , showing success message there , here below.

    // step45: result contains th eacknowledgement that the data has been inserted into the database successfully along with the the _id value of the document that has been inserted there in the database, here below : { "acknowledged": true, "insertedId": "66b12cde9f..." }

    // step46: to send actual data back to user (not recommended as we want to store in database and not show it back to user) , then we can send : result: { _id: result.insertedId, url: body.url, shorturl: body.shorturl } manually there.
    return Response.json({success : true , error : false , message : 'URL Generated Successfully' , result : result})

    // step47: now we can install mongodb package to use it in the terminal using "npm install mongodb" command there and then run the server and hit the POST request at "localhost:3000/api/generate" in POSTMAN by entering the data there by selecting "body > then raw" there : with the data fields of url and shorturl there and see the response success recieved there > which ensures that the data has been inserted into the database successfully.

    // step48: but if someone next writes : url > facebook.com & shorturl > google : it will still push it inot the database there , but we don't want anyone else to use a short url name if its already taken by someone else ; so to fix that lets see the next step above there.
} 
catch (err) {
    console.error("API /generate error:", err); // this shows in Vercel logs
    return Response.json(
      { success: false, error: true, message: err.message },
      { status: 500 }
    );
  }
}