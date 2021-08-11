# FastlyApi.LoggingS3Api



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogAwsS3**](LoggingS3Api.md#createLogAwsS3) | **POST** /service/{service_id}/version/{version_id}/logging/s3 | Create an AWS S3 log endpoint
[**deleteLogAwsS3**](LoggingS3Api.md#deleteLogAwsS3) | **DELETE** /service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name} | Delete an AWS S3 log endpoint
[**getLogAwsS3**](LoggingS3Api.md#getLogAwsS3) | **GET** /service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name} | Get an AWS S3 log endpoint
[**listLogAwsS3**](LoggingS3Api.md#listLogAwsS3) | **GET** /service/{service_id}/version/{version_id}/logging/s3 | List AWS S3 log endpoints
[**updateLogAwsS3**](LoggingS3Api.md#updateLogAwsS3) | **PUT** /service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name} | Update an AWS S3 log endpoint



## `createLogAwsS3`

> LoggingS3Response createLogAwsS3(service_id, version_id, opts)

Create an AWS S3 log endpoint

Create a S3 for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingS3Api();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'timestamp_format': "timestamp_format_example", // String | Date and time in ISO 8601 format.
  'period': 3600, // Number | How frequently log files are finalized so they can be available for reading (in seconds).
  'gzip_level': 0, // Number | What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
  'compression_codec': new FastlyApi.LoggingCompressionCodec(), // LoggingCompressionCodec | 
  'access_key': "access_key_example", // String | The access key for your S3 account. Not required if `iam_role` is provided.
  'acl': "acl_example", // String | The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information.
  'bucket_name': "bucket_name_example", // String | The bucket name for S3 account.
  'domain': "domain_example", // String | The domain of the Amazon S3 endpoint.
  'iam_role': "iam_role_example", // String | The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if `access_key` and `secret_key` are provided.
  'path': "'null'", // String | The path to upload logs to.
  'public_key': "'null'", // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
  'redundancy': "'null'", // String | The S3 redundancy level.
  'secret_key': "secret_key_example", // String | The secret key for your S3 account. Not required if `iam_role` is provided.
  'server_side_encryption_kms_key_id': "'null'", // String | Optional server-side KMS Key Id. Must be set if `server_side_encryption` is set to `aws:kms` or `AES256`.
  'server_side_encryption': "'null'" // String | Set this to `AES256` or `aws:kms` to enable S3 Server Side Encryption.
};
apiInstance.createLogAwsS3(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**compression_codec** | [**LoggingCompressionCodec**](../Model/LoggingCompressionCodec.md) |  | [optional]
**access_key** | **String** | The access key for your S3 account. Not required if &#x60;iam_role&#x60; is provided. | [optional]
**acl** | **String** | The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information. | [optional]
**bucket_name** | **String** | The bucket name for S3 account. | [optional]
**domain** | **String** | The domain of the Amazon S3 endpoint. | [optional]
**iam_role** | **String** | The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if &#x60;access_key&#x60; and &#x60;secret_key&#x60; are provided. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**redundancy** | **String** | The S3 redundancy level. | [optional] [default to &#39;null&#39;]
**secret_key** | **String** | The secret key for your S3 account. Not required if &#x60;iam_role&#x60; is provided. | [optional]
**server_side_encryption_kms_key_id** | **String** | Optional server-side KMS Key Id. Must be set if &#x60;server_side_encryption&#x60; is set to &#x60;aws:kms&#x60; or &#x60;AES256&#x60;. | [optional] [default to &#39;null&#39;]
**server_side_encryption** | **String** | Set this to &#x60;AES256&#x60; or &#x60;aws:kms&#x60; to enable S3 Server Side Encryption. | [optional] [default to &#39;null&#39;]

### Return type

[**LoggingS3Response**](LoggingS3Response.md)


## `deleteLogAwsS3`

> Object deleteLogAwsS3(service_id, version_id, logging_s3_name)

Delete an AWS S3 log endpoint

Delete the S3 for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingS3Api();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_s3_name = "logging_s3_name_example"; // String | 
apiInstance.deleteLogAwsS3(service_id, version_id, logging_s3_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_s3_name** | **String** |  |

### Return type

**Object**


## `getLogAwsS3`

> LoggingS3Response getLogAwsS3(service_id, version_id, logging_s3_name)

Get an AWS S3 log endpoint

Get the S3 for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingS3Api();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_s3_name = "logging_s3_name_example"; // String | 
apiInstance.getLogAwsS3(service_id, version_id, logging_s3_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_s3_name** | **String** |  |

### Return type

[**LoggingS3Response**](LoggingS3Response.md)


## `listLogAwsS3`

> [LoggingS3Response] listLogAwsS3(service_id, version_id)

List AWS S3 log endpoints

List all of the S3s for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingS3Api();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogAwsS3(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[LoggingS3Response]**](LoggingS3Response.md)


## `updateLogAwsS3`

> LoggingS3Response updateLogAwsS3(service_id, version_id, logging_s3_name, opts)

Update an AWS S3 log endpoint

Update the S3 for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingS3Api();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_s3_name = "logging_s3_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'timestamp_format': "timestamp_format_example", // String | Date and time in ISO 8601 format.
  'period': 3600, // Number | How frequently log files are finalized so they can be available for reading (in seconds).
  'gzip_level': 0, // Number | What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
  'compression_codec': new FastlyApi.LoggingCompressionCodec(), // LoggingCompressionCodec | 
  'access_key': "access_key_example", // String | The access key for your S3 account. Not required if `iam_role` is provided.
  'acl': "acl_example", // String | The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information.
  'bucket_name': "bucket_name_example", // String | The bucket name for S3 account.
  'domain': "domain_example", // String | The domain of the Amazon S3 endpoint.
  'iam_role': "iam_role_example", // String | The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if `access_key` and `secret_key` are provided.
  'path': "'null'", // String | The path to upload logs to.
  'public_key': "'null'", // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
  'redundancy': "'null'", // String | The S3 redundancy level.
  'secret_key': "secret_key_example", // String | The secret key for your S3 account. Not required if `iam_role` is provided.
  'server_side_encryption_kms_key_id': "'null'", // String | Optional server-side KMS Key Id. Must be set if `server_side_encryption` is set to `aws:kms` or `AES256`.
  'server_side_encryption': "'null'" // String | Set this to `AES256` or `aws:kms` to enable S3 Server Side Encryption.
};
apiInstance.updateLogAwsS3(service_id, version_id, logging_s3_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_s3_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**compression_codec** | [**LoggingCompressionCodec**](../Model/LoggingCompressionCodec.md) |  | [optional]
**access_key** | **String** | The access key for your S3 account. Not required if &#x60;iam_role&#x60; is provided. | [optional]
**acl** | **String** | The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information. | [optional]
**bucket_name** | **String** | The bucket name for S3 account. | [optional]
**domain** | **String** | The domain of the Amazon S3 endpoint. | [optional]
**iam_role** | **String** | The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if &#x60;access_key&#x60; and &#x60;secret_key&#x60; are provided. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**redundancy** | **String** | The S3 redundancy level. | [optional] [default to &#39;null&#39;]
**secret_key** | **String** | The secret key for your S3 account. Not required if &#x60;iam_role&#x60; is provided. | [optional]
**server_side_encryption_kms_key_id** | **String** | Optional server-side KMS Key Id. Must be set if &#x60;server_side_encryption&#x60; is set to &#x60;aws:kms&#x60; or &#x60;AES256&#x60;. | [optional] [default to &#39;null&#39;]
**server_side_encryption** | **String** | Set this to &#x60;AES256&#x60; or &#x60;aws:kms&#x60; to enable S3 Server Side Encryption. | [optional] [default to &#39;null&#39;]

### Return type

[**LoggingS3Response**](LoggingS3Response.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
