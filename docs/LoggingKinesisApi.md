# FastlyApi.LoggingKinesisApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogKinesis**](LoggingKinesisApi.md#createLogKinesis) | **POST** /service/{service_id}/version/{version_id}/logging/kinesis | Create  an Amazon Kinesis log endpoint
[**deleteLogKinesis**](LoggingKinesisApi.md#deleteLogKinesis) | **DELETE** /service/{service_id}/version/{version_id}/logging/kinesis/{logging_kinesis_name} | Delete the Amazon Kinesis log endpoint
[**getLogKinesis**](LoggingKinesisApi.md#getLogKinesis) | **GET** /service/{service_id}/version/{version_id}/logging/kinesis/{logging_kinesis_name} | Get an Amazon Kinesis log endpoint
[**listLogKinesis**](LoggingKinesisApi.md#listLogKinesis) | **GET** /service/{service_id}/version/{version_id}/logging/kinesis | List Amazon Kinesis log endpoints
[**updateLogKinesis**](LoggingKinesisApi.md#updateLogKinesis) | **PUT** /service/{service_id}/version/{version_id}/logging/kinesis/{logging_kinesis_name} | Update the Amazon Kinesis log endpoint



## `createLogKinesis`

> createLogKinesis(service_id, version_id, opts)

Create  an Amazon Kinesis log endpoint

Create an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingKinesisApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'format': null, // String | 
  'topic': "topic_example", // String | The Amazon Kinesis stream to send logs to. Required.
  'region': "region_example", // String | The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to.
  'secret_key': "secret_key_example", // String | The secret key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
  'access_key': "access_key_example", // String | The access key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
  'iam_role': "iam_role_example" // String | The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if `access_key` and `secret_key` are provided.
};
apiInstance.createLogKinesis(service_id, version_id, opts).then((data) => {
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
**format** | [**String**](../Model/String.md) |  | [optional]
**topic** | **String** | The Amazon Kinesis stream to send logs to. Required. | [optional]
**region** | **String** | The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to. | [optional]
**secret_key** | **String** | The secret key associated with the target Amazon Kinesis stream. Not required if &#x60;iam_role&#x60; is specified. | [optional]
**access_key** | **String** | The access key associated with the target Amazon Kinesis stream. Not required if &#x60;iam_role&#x60; is specified. | [optional]
**iam_role** | **String** | The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if &#x60;access_key&#x60; and &#x60;secret_key&#x60; are provided. | [optional]

### Return type

[**LoggingKinesisResponse**](LoggingKinesisResponse.md)


## `deleteLogKinesis`

> deleteLogKinesis(service_id, version_id, logging_kinesis_name)

Delete the Amazon Kinesis log endpoint

Delete an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingKinesisApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_kinesis_name = "logging_kinesis_name_example"; // String | 
apiInstance.deleteLogKinesis(service_id, version_id, logging_kinesis_name).then((data) => {
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
**logging_kinesis_name** | **String** |  |

### Return type

**Object**


## `getLogKinesis`

> getLogKinesis(service_id, version_id, logging_kinesis_name)

Get an Amazon Kinesis log endpoint

Get the details for an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingKinesisApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_kinesis_name = "logging_kinesis_name_example"; // String | 
apiInstance.getLogKinesis(service_id, version_id, logging_kinesis_name).then((data) => {
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
**logging_kinesis_name** | **String** |  |

### Return type

[**LoggingKinesisResponse**](LoggingKinesisResponse.md)


## `listLogKinesis`

> listLogKinesis(service_id, version_id)

List Amazon Kinesis log endpoints

List all of the Amazon Kinesis Data Streams logging objects for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingKinesisApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogKinesis(service_id, version_id).then((data) => {
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

[**[LoggingKinesisResponse]**](LoggingKinesisResponse.md)


## `updateLogKinesis`

> updateLogKinesis(service_id, version_id, logging_kinesis_name)

Update the Amazon Kinesis log endpoint

Update an Amazon Kinesis Data Streams logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingKinesisApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_kinesis_name = "logging_kinesis_name_example"; // String | 
apiInstance.updateLogKinesis(service_id, version_id, logging_kinesis_name).then((data) => {
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
**logging_kinesis_name** | **String** |  |

### Return type

[**LoggingKinesisResponse**](LoggingKinesisResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
