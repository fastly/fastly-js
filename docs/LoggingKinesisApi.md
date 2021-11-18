# Fastly.LoggingKinesisApi


```javascript
const apiInstance = new Fastly.LoggingKinesisApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogKinesis**](LoggingKinesisApi.md#createLogKinesis) | **POST** /service/{service_id}/version/{version_id}/logging/kinesis | Create  an Amazon Kinesis log endpoint
[**deleteLogKinesis**](LoggingKinesisApi.md#deleteLogKinesis) | **DELETE** /service/{service_id}/version/{version_id}/logging/kinesis/{logging_kinesis_name} | Delete the Amazon Kinesis log endpoint
[**getLogKinesis**](LoggingKinesisApi.md#getLogKinesis) | **GET** /service/{service_id}/version/{version_id}/logging/kinesis/{logging_kinesis_name} | Get an Amazon Kinesis log endpoint
[**listLogKinesis**](LoggingKinesisApi.md#listLogKinesis) | **GET** /service/{service_id}/version/{version_id}/logging/kinesis | List Amazon Kinesis log endpoints
[**updateLogKinesis**](LoggingKinesisApi.md#updateLogKinesis) | **PUT** /service/{service_id}/version/{version_id}/logging/kinesis/{logging_kinesis_name} | Update the Amazon Kinesis log endpoint



## `createLogKinesis`

```javascript
createLogKinesis({ service_id, version_id, [name, ][placement, ][format_version, ][format, ][topic, ][region, ][secret_key, ][access_key, ][iam_role] })
```

Create an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  format: null,
  topic: "topic_example",
  region: "us-east-1",
  secret_key: "secret_key_example",
  access_key: "access_key_example",
  iam_role: "iam_role_example",
};

apiInstance.createLogKinesis(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional]
**format** | [**String**](String.md) |  | [optional]
**topic** | **String** | The Amazon Kinesis stream to send logs to. Required. | [optional]
**region** | **String** | The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to. | [optional] [one of: "us-east-1", "us-east-2", "us-west-1", "us-west-2", "af-south-1", "ap-east-1", "ap-south-1", "ap-northeast-3", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2", "ap-northeast-1", "ca-central-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-west-1", "eu-west-2", "eu-south-1", "eu-west-3", "eu-north-1", "me-south-1", "sa-east-1"]
**secret_key** | **String** | The secret key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified. | [optional]
**access_key** | **String** | The access key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified. | [optional]
**iam_role** | **String** | The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if `access_key` and `secret_key` are provided. | [optional]

### Return type

[**LoggingKinesisResponse**](LoggingKinesisResponse.md)


## `deleteLogKinesis`

```javascript
deleteLogKinesis({ service_id, version_id, logging_kinesis_name })
```

Delete an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_kinesis_name: "logging_kinesis_name_example", // required
};

apiInstance.deleteLogKinesis(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**logging_kinesis_name** | **String** |  |

### Return type

**Object**


## `getLogKinesis`

```javascript
getLogKinesis({ service_id, version_id, logging_kinesis_name })
```

Get the details for an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_kinesis_name: "logging_kinesis_name_example", // required
};

apiInstance.getLogKinesis(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**logging_kinesis_name** | **String** |  |

### Return type

[**LoggingKinesisResponse**](LoggingKinesisResponse.md)


## `listLogKinesis`

```javascript
listLogKinesis({ service_id, version_id })
```

List all of the Amazon Kinesis Data Streams logging objects for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogKinesis(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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

[**[LoggingKinesisResponse]**](LoggingKinesisResponse.md)


## `updateLogKinesis`

```javascript
updateLogKinesis({ service_id, version_id, logging_kinesis_name })
```

Update an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_kinesis_name: "logging_kinesis_name_example", // required
};

apiInstance.updateLogKinesis(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**logging_kinesis_name** | **String** |  |

### Return type

[**LoggingKinesisResponse**](LoggingKinesisResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
