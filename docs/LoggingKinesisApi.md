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
createLogKinesis({ service_id, version_id, [access_key], , [format], , [format_version], , [iam_role], , [name], , [placement], , [region], , [secret_key], , [topic] })
```

Create an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example

```javascript
const options = {
 service_id: "service_id_example", // required
 version_id: 56, // required
  access_key: "access_key_example",
  format: null,
  format_version: new Fastly.LoggingFormatVersion(),
  iam_role: "iam_role_example",
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  region: "region_example",
  secret_key: "secret_key_example",
  topic: "topic_example",
};

apiInstance.createLogKinesis(options)
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
**access_key** | **String** | The access key associated with the target Amazon Kinesis stream. Not required if &#x60;iam_role&#x60; is specified. | [optional]
**format** | [**String**](../Model/String.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**iam_role** | **String** | The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if &#x60;access_key&#x60; and &#x60;secret_key&#x60; are provided. | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**region** | **String** | The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to. | [optional]
**secret_key** | **String** | The secret key associated with the target Amazon Kinesis stream. Not required if &#x60;iam_role&#x60; is specified. | [optional]
**topic** | **String** | The Amazon Kinesis stream to send logs to. Required. | [optional]

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
**logging_kinesis_name** | **String** |  |

### Return type

[**LoggingKinesisResponse**](LoggingKinesisResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
