const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env){
        case 'dev':
            return {
                bd_string: 'mongodb+srv://usuario_admin:07917207@clusterapi.hbpgi.mongodb.net/?retryWrites=true&w=majority',
                bd_pass: 'nicomel1420',
                jwt_expires: '7d'
            }
        case 'hml':
            return {
                bd_string: 'mongodb+srv://usuario_admin:07917207@clusterapi.hbpgi.mongodb.net/?retryWrites=true&w=majority',
                bd_pass: 'nicomel1420',
                jwt_expires: '7d'
            }
        case 'prod':
            return {
                bd_string: 'mongodb+srv://usuario_admin:07917207@clusterapi.hbpgi.mongodb.net/?retryWrites=true&w=majority',
                bd_pass: 'nicomel1420',
                jwt_expires: '7d'
            }
    }
}

console.log(`Ìniciando a aip em ambiente ${env.toUpperCase()}`);
module.exports = config();