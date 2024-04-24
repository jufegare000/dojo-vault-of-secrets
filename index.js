const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');


// Instantiates a client
const client = new SecretManagerServiceClient();
const main = async () => {
    console.log("holi")
    await getSecret()
}

const getSecret = async () => {
    const [secret] = await client.accessSecretVersion({
        name: 'projects/clean-cloud-415916/secrets/clean-cloud-secret/versions/latest'
    });

    console.info(`Found secret ${secret.payload.data.toString('utf8')} `);
}
main();