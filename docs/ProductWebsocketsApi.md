# Fastly.ProductWebsocketsApi

```javascript
const apiInstance = new Fastly.ProductWebsocketsApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**disableProductWebsockets**](ProductWebsocketsApi.md#disableProductWebsockets) | **DELETE** /enabled-products/v1/websockets/services/{service_id} | Disable product
[**enableProductWebsockets**](ProductWebsocketsApi.md#enableProductWebsockets) | **PUT** /enabled-products/v1/websockets/services/{service_id} | Enable product
[**getProductWebsockets**](ProductWebsocketsApi.md#getProductWebsockets) | **GET** /enabled-products/v1/websockets/services/{service_id} | Get product enablement status


## `disableProductWebsockets`

```javascript
disableProductWebsockets({ service_id })
```

Disable the Websockets product on a service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.disableProductWebsockets(options)
  .then(() => {
    console.log('API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** | Alphanumeric string identifying the service. |

### Return type

null (empty response body)


## `enableProductWebsockets`

```javascript
enableProductWebsockets({ service_id })
```

Enable the WebSockets product on a service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.enableProductWebsockets(options)
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
**service_id** | **String** | Alphanumeric string identifying the service. |

### Return type

[**WebsocketsResponseBodyEnable**](WebsocketsResponseBodyEnable.md)


## `getProductWebsockets`

```javascript
getProductWebsockets({ service_id })
```

Get the enablement status of the WebSockets product on a service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.getProductWebsockets(options)
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
**service_id** | **String** | Alphanumeric string identifying the service. |

### Return type

[**WebsocketsResponseBodyEnable**](WebsocketsResponseBodyEnable.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
