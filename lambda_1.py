import boto3

# Initialize S3 client inside the lambda_handler function
s3_client = boto3.client('s3')
    
def lambda_handler(event, context):
   
    # Parse the incoming MQTT message
    message = event['Records'][0]['Sns']['Message']
    
    bucket_name = 'aquasensepro'
    file_name = 'test_potability_data.csv'
    
    # Update the S3 bucket with the new data
    s3_client.put_object(Body=data_to_update.encode(), Bucket=bucket_name, Key=file_name)
    
    return {
        'statusCode': 200,
        'body': 'S3 updated successfully!'
    }
