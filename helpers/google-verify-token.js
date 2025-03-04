const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '94372713827-0jadtr3tcllka0c6ui9omrtbj49g1qrf.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '94372713827-jkvfs65kvmlh22ueghud7bgn94siptus.apps.googleusercontent.com'
            ]
            // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }    
    } catch (error) {
        return null;
    }    
    
}

module.exports = {
    validarGoogleIdToken
}