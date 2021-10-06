# Fastly.LoggingS3AllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **String** | The access key for your S3 account. Not required if &#x60;iam_role&#x60; is provided. | [optional] 
**acl** | **String** | The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information. | [optional] 
**bucket_name** | **String** | The bucket name for S3 account. | [optional] 
**domain** | **String** | The domain of the Amazon S3 endpoint. | [optional] 
**iam_role** | **String** | The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if &#x60;access_key&#x60; and &#x60;secret_key&#x60; are provided. | [optional] 
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**redundancy** | **String** | The S3 redundancy level. | [optional] [default to &#39;null&#39;]
**secret_key** | **String** | The secret key for your S3 account. Not required if &#x60;iam_role&#x60; is provided. | [optional] 
**server_side_encryption** | **String** | Set this to &#x60;AES256&#x60; or &#x60;aws:kms&#x60; to enable S3 Server Side Encryption. | [optional] [default to &#39;null&#39;]
**server_side_encryption_kms_key_id** | **String** | Optional server-side KMS Key Id. Must be set if &#x60;server_side_encryption&#x60; is set to &#x60;aws:kms&#x60; or &#x60;AES256&#x60;. | [optional] [default to &#39;null&#39;]



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
