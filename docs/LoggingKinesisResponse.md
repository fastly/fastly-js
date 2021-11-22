# Fastly.LoggingKinesisResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**format** | **String** |  | [optional] 
**topic** | **String** | The Amazon Kinesis stream to send logs to. Required. | [optional] 
**region** | **String** | The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to. | [optional]  [one of: "us-east-1", "us-east-2", "us-west-1", "us-west-2", "af-south-1", "ap-east-1", "ap-south-1", "ap-northeast-3", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2", "ap-northeast-1", "ca-central-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-west-1", "eu-west-2", "eu-south-1", "eu-west-3", "eu-north-1", "me-south-1", "sa-east-1"]
**secret_key** | **String** | The secret key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified. | [optional] 
**access_key** | **String** | The access key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified. | [optional] 
**iam_role** | **String** | The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if `access_key` and `secret_key` are provided. | [optional] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
