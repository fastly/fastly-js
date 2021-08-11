# FastlyApi.LoggingKinesis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**format** | **String** |  | [optional] 
**topic** | **String** | The Amazon Kinesis stream to send logs to. Required. | [optional] 
**region** | **String** | The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to. | [optional] 
**secret_key** | **String** | The secret key associated with the target Amazon Kinesis stream. Not required if &#x60;iam_role&#x60; is specified. | [optional] 
**access_key** | **String** | The access key associated with the target Amazon Kinesis stream. Not required if &#x60;iam_role&#x60; is specified. | [optional] 
**iam_role** | **String** | The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if &#x60;access_key&#x60; and &#x60;secret_key&#x60; are provided. | [optional] 



## Enum: RegionEnum


* `us-east-1` (value: `"us-east-1"`)

* `us-east-2` (value: `"us-east-2"`)

* `us-west-1` (value: `"us-west-1"`)

* `us-west-2` (value: `"us-west-2"`)

* `af-south-1` (value: `"af-south-1"`)

* `ap-east-1` (value: `"ap-east-1"`)

* `ap-south-1` (value: `"ap-south-1"`)

* `ap-northeast-3` (value: `"ap-northeast-3"`)

* `ap-northeast-2` (value: `"ap-northeast-2"`)

* `ap-southeast-1` (value: `"ap-southeast-1"`)

* `ap-southeast-2` (value: `"ap-southeast-2"`)

* `ap-northeast-1` (value: `"ap-northeast-1"`)

* `ca-central-1` (value: `"ca-central-1"`)

* `cn-north-1` (value: `"cn-north-1"`)

* `cn-northwest-1` (value: `"cn-northwest-1"`)

* `eu-central-1` (value: `"eu-central-1"`)

* `eu-west-1` (value: `"eu-west-1"`)

* `eu-west-2` (value: `"eu-west-2"`)

* `eu-south-1` (value: `"eu-south-1"`)

* `eu-west-3` (value: `"eu-west-3"`)

* `eu-north-1` (value: `"eu-north-1"`)

* `me-south-1` (value: `"me-south-1"`)

* `sa-east-1` (value: `"sa-east-1"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
