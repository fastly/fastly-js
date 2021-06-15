# FastlyApi.LoggingKafkaApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogKafka**](LoggingKafkaApi.md#createLogKafka) | **POST** /service/{service_id}/version/{version_id}/logging/kafka | Create a Kafka log endpoint
[**deleteLogKafka**](LoggingKafkaApi.md#deleteLogKafka) | **DELETE** /service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name} | Delete the Kafka log endpoint
[**getLogKafka**](LoggingKafkaApi.md#getLogKafka) | **GET** /service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name} | Get a Kafka log endpoint
[**listLogKafka**](LoggingKafkaApi.md#listLogKafka) | **GET** /service/{service_id}/version/{version_id}/logging/kafka | List Kafka log endpoints
[**updateLogKafka**](LoggingKafkaApi.md#updateLogKafka) | **PUT** /service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name} | Update the Kafka log endpoint



## createLogKafka

> ModelLoggingKafka createLogKafka(service_id, version_id, opts)

Create a Kafka log endpoint

Create a Kafka logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingKafkaApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'tls_ca_cert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tls_client_cert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tls_client_key': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tls_hostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'topic': "topic_example", // String | The Kafka topic to send logs to. Required.
  'brokers': "brokers_example", // String | A comma-separated list of IP addresses or hostnames of Kafka brokers. Required.
  'compression_codec': "compression_codec_example", // String | The codec used for compression of your logs.
  'required_acks': 1, // Number | The number of acknowledgements a leader must receive before a write is considered successful.
  'request_max_bytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` (no limit).
  'parse_log_keyvals': true, // Boolean | Enables parsing of key=value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers).
  'auth_method': "auth_method_example", // String | SASL authentication method.
  'user': "user_example", // String | SASL user.
  'password': "password_example", // String | SASL password.
  'use_tls': new FastlyApi.LoggingUseTls() // LoggingUseTls | 
};
apiInstance.createLogKafka(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **tls_ca_cert** | **String**| A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_cert** | **String**| The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_key** | **String**| The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_hostname** | **String**| The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
 **topic** | **String**| The Kafka topic to send logs to. Required. | [optional] 
 **brokers** | **String**| A comma-separated list of IP addresses or hostnames of Kafka brokers. Required. | [optional] 
 **compression_codec** | **String**| The codec used for compression of your logs. | [optional] 
 **required_acks** | **Number**| The number of acknowledgements a leader must receive before a write is considered successful. | [optional] [default to 1]
 **request_max_bytes** | **Number**| The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
 **parse_log_keyvals** | **Boolean**| Enables parsing of key&#x3D;value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers). | [optional] 
 **auth_method** | **String**| SASL authentication method. | [optional] 
 **user** | **String**| SASL user. | [optional] 
 **password** | **String**| SASL password. | [optional] 
 **use_tls** | [**LoggingUseTls**](LoggingUseTls.md)|  | [optional] 

### Return type

[**ModelLoggingKafka**](ModelLoggingKafka.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogKafka

> Object deleteLogKafka(service_id, version_id, logging_kafka_name)

Delete the Kafka log endpoint

Delete the Kafka logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingKafkaApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_kafka_name = "logging_kafka_name_example"; // String | 
apiInstance.deleteLogKafka(service_id, version_id, logging_kafka_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_kafka_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogKafka

> ModelLoggingKafka getLogKafka(service_id, version_id, logging_kafka_name)

Get a Kafka log endpoint

Get the Kafka logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingKafkaApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_kafka_name = "logging_kafka_name_example"; // String | 
apiInstance.getLogKafka(service_id, version_id, logging_kafka_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_kafka_name** | **String**|  | 

### Return type

[**ModelLoggingKafka**](ModelLoggingKafka.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogKafka

> [ModelLoggingKafka] listLogKafka(service_id, version_id)

List Kafka log endpoints

List all of the Kafka logging endpoints for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingKafkaApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogKafka(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 

### Return type

[**[ModelLoggingKafka]**](ModelLoggingKafka.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogKafka

> ModelLoggingKafka updateLogKafka(service_id, version_id, logging_kafka_name)

Update the Kafka log endpoint

Update the Kafka logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingKafkaApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_kafka_name = "logging_kafka_name_example"; // String | 
apiInstance.updateLogKafka(service_id, version_id, logging_kafka_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_kafka_name** | **String**|  | 

### Return type

[**ModelLoggingKafka**](ModelLoggingKafka.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

