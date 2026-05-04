import bcrypt from "bcryptjs";

async function hello(){
    const hash = await bcrypt.hash("MyInitialAdminPassword", 10); // Admin password
    console.log(hash);

}

hello()