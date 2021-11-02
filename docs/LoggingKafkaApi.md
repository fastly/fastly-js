# Fastly.LoggingKafkaApi


```javascript
const apiInstance = new Fastly.LoggingKafkaApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogKafka**](LoggingKafkaApi.md#createLogKafka) | **POST** /service/{service_id}/version/{version_id}/logging/kafka | Create a Kafka log endpoint
[**deleteLogKafka**](LoggingKafkaApi.md#deleteLogKafka) | **DELETE** /service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name} | Delete the Kafka log endpoint
[**getLogKafka**](LoggingKafkaApi.md#getLogKafka) | **GET** /service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name} | Get a Kafka log endpoint
[**listLogKafka**](LoggingKafkaApi.md#listLogKafka) | **GET** /service/{service_id}/version/{version_id}/logging/kafka | List Kafka log endpoints
[**updateLogKafka**](LoggingKafkaApi.md#updateLogKafka) | **PUT** /service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name} | Update the Kafka log endpoint



## `createLogKafka`

```javascript
createLogKafka({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][tls_ca_cert, ][tls_client_cert, ][tls_client_key, ][tls_hostname, ][topic, ][brokers, ][compression_codec, ][required_acks, ][request_max_bytes, ][parse_log_keyvals, ][auth_method, ][user, ][password, ][use_tls] })
```

Create a Kafka logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  tls_ca_cert: 'null',
  tls_client_cert: 'null',
  tls_client_key: 'null',
  tls_hostname: 'null',
  topic: "topic_example",
  brokers: "brokers_example",
  compression_codec: ,
  required_acks: 1,
  request_max_bytes: 0,
  parse_log_keyvals: true,
  auth_method: ,
  user: "user_example",
  password: "password_example",
  use_tls: new Fastly.LoggingUseTls(),
};

apiInstance.createLogKafka(options)
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
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**topic** | **String** | The Kafka topic to send logs to. Required. | [optional]
**brokers** | **String** | A comma-separated list of IP addresses or hostnames of Kafka brokers. Required. | [optional]
**compression_codec** | **String** | The codec used for compression of your logs. | [optional]
**required_acks** | **Number** | The number of acknowledgements a leader must receive before a write is considered successful. | [optional] [default to 1]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**parse_log_keyvals** | **Boolean** | Enables parsing of key&#x3D;value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers). | [optional]
**auth_method** | **String** | SASL authentication method. | [optional]
**user** | **String** | SASL user. | [optional]
**password** | **String** | SASL password. | [optional]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]

### Return type

[**LoggingKafkaResponse**](LoggingKafkaResponse.md)


## `deleteLogKafka`

```javascript
deleteLogKafka({ service_id, version_id, logging_kafka_name })
```

Delete the Kafka logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_kafka_name: "logging_kafka_name_example", // required
};

apiInstance.deleteLogKafka(options)
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
**logging_kafka_name** | **String** |  |

### Return type

**Object**


## `getLogKafka`

```javascript
getLogKafka({ service_id, version_id, logging_kafka_name })
```

Get the Kafka logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_kafka_name: "logging_kafka_name_example", // required
};

apiInstance.getLogKafka(options)
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
**logging_kafka_name** | **String** |  |

### Return type

[**LoggingKafkaResponse**](LoggingKafkaResponse.md)


## `listLogKafka`

```javascript
listLogKafka({ service_id, version_id })
```

List all of the Kafka logging endpoints for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogKafka(options)
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

[**[LoggingKafkaResponse]**](LoggingKafkaResponse.md)


## `updateLogKafka`

```javascript
updateLogKafka({ service_id, version_id, logging_kafka_name })
```

Update the Kafka logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_kafka_name: "logging_kafka_name_example", // required
};

apiInstance.updateLogKafka(options)
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
**logging_kafka_name** | **String** |  |

### Return type

[**LoggingKafkaResponse**](LoggingKafkaResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
