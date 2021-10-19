# Fastly.LoggingS3Api


```javascript
const apiInstance = new Fastly.LoggingS3Api();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogAwsS3**](LoggingS3Api.md#createLogAwsS3) | **POST** /service/{service_id}/version/{version_id}/logging/s3 | Create an AWS S3 log endpoint
[**deleteLogAwsS3**](LoggingS3Api.md#deleteLogAwsS3) | **DELETE** /service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name} | Delete an AWS S3 log endpoint
[**getLogAwsS3**](LoggingS3Api.md#getLogAwsS3) | **GET** /service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name} | Get an AWS S3 log endpoint
[**listLogAwsS3**](LoggingS3Api.md#listLogAwsS3) | **GET** /service/{service_id}/version/{version_id}/logging/s3 | List AWS S3 log endpoints
[**updateLogAwsS3**](LoggingS3Api.md#updateLogAwsS3) | **PUT** /service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name} | Update an AWS S3 log endpoint



## `createLogAwsS3`

```javascript
createLogAwsS3({ service_id, version_id, [format, ][format_version, ][name, ][placement, ][response_condition, ][compression_codec, ][gzip_level, ][message_type, ][period, ][timestamp_format, ][access_key, ][acl, ][bucket_name, ][domain, ][iam_role, ][path, ][public_key, ][redundancy, ][secret_key, ][server_side_encryption, ][server_side_encryption_kms_key_id] })
```

Create a S3 for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  format: '%h %l %u %t "%r" %&gt;s %b',
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
  compression_codec: ,
  gzip_level: 0,
  message_type: 'classic',
  period: 3600,
  timestamp_format: "timestamp_format_example",
  access_key: "access_key_example",
  acl: "acl_example",
  bucket_name: "bucket_name_example",
  domain: "domain_example",
  iam_role: "iam_role_example",
  path: 'null',
  public_key: 'null',
  redundancy: 'null',
  secret_key: "secret_key_example",
  server_side_encryption: 'null',
  server_side_encryption_kms_key_id: 'null',
};

apiInstance.createLogAwsS3(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are &#x60;zstd&#x60;, &#x60;snappy&#x60;, and &#x60;gzip&#x60;. If the specified codec is \\\&quot;gzip\\\&quot;, &#x60;gzip_level&#x60; will default to 3. To specify a different level, leave &#x60;compression_codec&#x60; blank and explicitly set the level using &#x60;gzip_level&#x60;. Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**message_type** | **String** | How the message should be formatted. | [optional] [default to &#39;classic&#39;]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
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

### Return type

[**LoggingS3Response**](LoggingS3Response.md)


## `deleteLogAwsS3`

```javascript
deleteLogAwsS3({ service_id, version_id, logging_s3_name })
```

Delete the S3 for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_s3_name: "logging_s3_name_example", // required
};

apiInstance.deleteLogAwsS3(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_s3_name** | **String** |  |

### Return type

**Object**


## `getLogAwsS3`

```javascript
getLogAwsS3({ service_id, version_id, logging_s3_name })
```

Get the S3 for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_s3_name: "logging_s3_name_example", // required
};

apiInstance.getLogAwsS3(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_s3_name** | **String** |  |

### Return type

[**LoggingS3Response**](LoggingS3Response.md)


## `listLogAwsS3`

```javascript
listLogAwsS3({ service_id, version_id })
```

List all of the S3s for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogAwsS3(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[LoggingS3Response]**](LoggingS3Response.md)


## `updateLogAwsS3`

```javascript
updateLogAwsS3({ service_id, version_id, logging_s3_name, [format, ][format_version, ][name, ][placement, ][response_condition, ][compression_codec, ][gzip_level, ][message_type, ][period, ][timestamp_format, ][access_key, ][acl, ][bucket_name, ][domain, ][iam_role, ][path, ][public_key, ][redundancy, ][secret_key, ][server_side_encryption, ][server_side_encryption_kms_key_id] })
```

Update the S3 for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_s3_name: "logging_s3_name_example", // required
  format: '%h %l %u %t "%r" %&gt;s %b',
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
  compression_codec: ,
  gzip_level: 0,
  message_type: 'classic',
  period: 3600,
  timestamp_format: "timestamp_format_example",
  access_key: "access_key_example",
  acl: "acl_example",
  bucket_name: "bucket_name_example",
  domain: "domain_example",
  iam_role: "iam_role_example",
  path: 'null',
  public_key: 'null',
  redundancy: 'null',
  secret_key: "secret_key_example",
  server_side_encryption: 'null',
  server_side_encryption_kms_key_id: 'null',
};

apiInstance.updateLogAwsS3(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_s3_name** | **String** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are &#x60;zstd&#x60;, &#x60;snappy&#x60;, and &#x60;gzip&#x60;. If the specified codec is \\\&quot;gzip\\\&quot;, &#x60;gzip_level&#x60; will default to 3. To specify a different level, leave &#x60;compression_codec&#x60; blank and explicitly set the level using &#x60;gzip_level&#x60;. Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**message_type** | **String** | How the message should be formatted. | [optional] [default to &#39;classic&#39;]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
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

### Return type

[**LoggingS3Response**](LoggingS3Response.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
