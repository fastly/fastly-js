# Fastly.LoggingDigitaloceanApi


```javascript
const apiInstance = new Fastly.LoggingDigitaloceanApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogDigocean**](LoggingDigitaloceanApi.md#createLogDigocean) | **POST** /service/{service_id}/version/{version_id}/logging/digitalocean | Create a DigitalOcean Spaces log endpoint
[**deleteLogDigocean**](LoggingDigitaloceanApi.md#deleteLogDigocean) | **DELETE** /service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name} | Delete a DigitalOcean Spaces log endpoint
[**getLogDigocean**](LoggingDigitaloceanApi.md#getLogDigocean) | **GET** /service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name} | Get a DigitalOcean Spaces log endpoint
[**listLogDigocean**](LoggingDigitaloceanApi.md#listLogDigocean) | **GET** /service/{service_id}/version/{version_id}/logging/digitalocean | List DigitalOcean Spaces log endpoints
[**updateLogDigocean**](LoggingDigitaloceanApi.md#updateLogDigocean) | **PUT** /service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name} | Update a DigitalOcean Spaces log endpoint



## `createLogDigocean`

```javascript
createLogDigocean({ service_id, version_id, [format], , [format_version], , [name], , [placement], , [response_condition], , [compression_codec], , [gzip_level], , [message_type], , [period], , [timestamp_format], , [access_key], , [bucket_name], , [domain], , [path], , [public_key], , [secret_key] })
```

Create a DigitalOcean Space for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required

  format: "'%h %l %u %t \"%r\" %&gt;s %b'",

  format_version: new Fastly.LoggingFormatVersion(),

  name: "name_example",

  placement: new Fastly.LoggingPlacement(),

  response_condition: "response_condition_example",

  compression_codec: new Fastly.LoggingCompressionCodec(),

  gzip_level: 0,

  message_type: new Fastly.LoggingMessageType(),

  period: 3600,

  timestamp_format: "timestamp_format_example",

  access_key: "access_key_example",

  bucket_name: "bucket_name_example",

  domain: "'nyc3.digitaloceanspaces.com'",

  path: "'null'",

  public_key: "'null'",

  secret_key: "secret_key_example",
};

apiInstance.createLogDigocean(options)
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
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**compression_codec** | [**LoggingCompressionCodec**](../Model/LoggingCompressionCodec.md) |  | [optional]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**access_key** | **String** | Your DigitalOcean Spaces account access key. | [optional]
**bucket_name** | **String** | The name of the DigitalOcean Space. | [optional]
**domain** | **String** | The domain of the DigitalOcean Spaces endpoint. | [optional] [default to &#39;nyc3.digitaloceanspaces.com&#39;]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**secret_key** | **String** | Your DigitalOcean Spaces account secret key. | [optional]

### Return type

[**LoggingDigitaloceanResponse**](LoggingDigitaloceanResponse.md)


## `deleteLogDigocean`

```javascript
deleteLogDigocean({ service_id, version_id, logging_digitalocean_name })
```

Delete the DigitalOcean Space for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_digitalocean_name: "logging_digitalocean_name_example", // required
};

apiInstance.deleteLogDigocean(options)
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
**logging_digitalocean_name** | **String** |  |

### Return type

**Object**


## `getLogDigocean`

```javascript
getLogDigocean({ service_id, version_id, logging_digitalocean_name })
```

Get the DigitalOcean Space for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_digitalocean_name: "logging_digitalocean_name_example", // required
};

apiInstance.getLogDigocean(options)
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
**logging_digitalocean_name** | **String** |  |

### Return type

[**LoggingDigitaloceanResponse**](LoggingDigitaloceanResponse.md)


## `listLogDigocean`

```javascript
listLogDigocean({ service_id, version_id })
```

List all of the DigitalOcean Spaces for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogDigocean(options)
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

[**[LoggingDigitaloceanResponse]**](LoggingDigitaloceanResponse.md)


## `updateLogDigocean`

```javascript
updateLogDigocean({ service_id, version_id, logging_digitalocean_name, [format], , [format_version], , [name], , [placement], , [response_condition], , [compression_codec], , [gzip_level], , [message_type], , [period], , [timestamp_format], , [access_key], , [bucket_name], , [domain], , [path], , [public_key], , [secret_key] })
```

Update the DigitalOcean Space for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_digitalocean_name: "logging_digitalocean_name_example", // required

  format: "'%h %l %u %t \"%r\" %&gt;s %b'",

  format_version: new Fastly.LoggingFormatVersion(),

  name: "name_example",

  placement: new Fastly.LoggingPlacement(),

  response_condition: "response_condition_example",

  compression_codec: new Fastly.LoggingCompressionCodec(),

  gzip_level: 0,

  message_type: new Fastly.LoggingMessageType(),

  period: 3600,

  timestamp_format: "timestamp_format_example",

  access_key: "access_key_example",

  bucket_name: "bucket_name_example",

  domain: "'nyc3.digitaloceanspaces.com'",

  path: "'null'",

  public_key: "'null'",

  secret_key: "secret_key_example",
};

apiInstance.updateLogDigocean(options)
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
**logging_digitalocean_name** | **String** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**compression_codec** | [**LoggingCompressionCodec**](../Model/LoggingCompressionCodec.md) |  | [optional]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**access_key** | **String** | Your DigitalOcean Spaces account access key. | [optional]
**bucket_name** | **String** | The name of the DigitalOcean Space. | [optional]
**domain** | **String** | The domain of the DigitalOcean Spaces endpoint. | [optional] [default to &#39;nyc3.digitaloceanspaces.com&#39;]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**secret_key** | **String** | Your DigitalOcean Spaces account secret key. | [optional]

### Return type

[**LoggingDigitaloceanResponse**](LoggingDigitaloceanResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
