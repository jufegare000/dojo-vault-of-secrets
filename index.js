const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

// Instantiates a client
const client = new SecretManagerServiceClient();
const main = async () => {
    console.log("holi")
    await getSecret()
}





const getSecret = async () => {
    const [secret] = await client.getSecret({
        name: 'clean-cloud-secret',
    });

    console.info(`Found secret ${secret.name} `);
}
main();