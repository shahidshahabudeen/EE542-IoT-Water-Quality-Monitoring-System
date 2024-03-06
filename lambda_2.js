const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const sagemaker = new AWS.SageMakerRuntime({ region: 'us-west-2' });

exports.handler = async (event, context) => {
    try {
        const bucket = event.Records[0].s3.bucket.aquasensepro;
        const key = event.Records[0].s3.object.test_potability_data.csv;

        const s3Response = await s3.getObject({ Bucket: bucket, Key: key }).promise();
        const data = JSON.parse(s3Response.Body.toString('utf-8'));
        
        const endpointName = 'https://aquasense.notebook.us-west-2.sagemaker.aws/tree/aquasensepro';
        const inferenceResult = await sagemaker.invokeEndpoint({
            EndpointName: endpointName,
            Body: JSON.stringify(data),
            ContentType: 'application/json',
        }).promise();

        const result = JSON.parse(inferenceResult.Body.toString('utf-8'));
        console.log('Inference Result:', result);

        return {
            statusCode: 200,
            body: JSON.stringify('Inference successful!'),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Error during inference'),
        };
    }
};