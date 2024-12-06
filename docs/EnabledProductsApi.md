# Fastly.EnabledProductsApi

```javascript
const apiInstance = new Fastly.EnabledProductsApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**disableProduct**](EnabledProductsApi.md#disableProduct) | **DELETE** /enabled-products/v1/{product_id}/services/{service_id} | Disable a product
[**enableProduct**](EnabledProductsApi.md#enableProduct) | **PUT** /enabled-products/v1/{product_id}/services/{service_id} | Enable a product
[**getEnabledProduct**](EnabledProductsApi.md#getEnabledProduct) | **GET** /enabled-products/v1/{product_id}/services/{service_id} | Get enabled product
[**getProductConfiguration**](EnabledProductsApi.md#getProductConfiguration) | **GET** /enabled-products/v1/{product_id}/services/{service_id}/configuration | Get configuration for a product
[**setProductConfiguration**](EnabledProductsApi.md#setProductConfiguration) | **PATCH** /enabled-products/v1/{product_id}/services/{service_id}/configuration | Update configuration for a product


## `disableProduct`

```javascript
disableProduct({ product_id, service_id })
```

Disable a product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, `websockets`, `bot_management`, `ngwaf`, `ddos_protection`, and `log_explorer_insights`.

### Example

```javascript
const options = {
  product_id: ngwaf, // required
  service_id: "service_id_example", // required
};

apiInstance.disableProduct(options)
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
**product_id** | **String** |  |
**service_id** | **String** | Alphanumeric string identifying the service. |

### Return type

null (empty response body)


## `enableProduct`

```javascript
enableProduct({ product_id, service_id, [set_workspace_id] })
```

Enable a product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, `websockets`, `bot_management`, `ngwaf`, `ddos_protection`, and `log_explorer_insights`.

### Example

```javascript
const options = {
  product_id: ngwaf, // required
  service_id: "service_id_example", // required
  set_workspace_id: {"workspace_id":"7JFbo4RNA0OKdFWC04r6B3"},
};

apiInstance.enableProduct(options)
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
**product_id** | **String** |  |
**service_id** | **String** | Alphanumeric string identifying the service. |
**set_workspace_id** | [**SetWorkspaceId**](SetWorkspaceId.md) |  | [optional]

### Return type

[**EnabledProductResponse**](EnabledProductResponse.md)


## `getEnabledProduct`

```javascript
getEnabledProduct({ product_id, service_id })
```

Get enabled product on a service. Supported product IDs: `brotli_compression`,`domain_inspector`,`fanout`,`image_optimizer`,`origin_inspector`, `websockets`, `bot_management`, `ngwaf`, `ddos_protection`, and `log_explorer_insights`.

### Example

```javascript
const options = {
  product_id: ngwaf, // required
  service_id: "service_id_example", // required
};

apiInstance.getEnabledProduct(options)
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
**product_id** | **String** |  |
**service_id** | **String** | Alphanumeric string identifying the service. |

### Return type

[**EnabledProductResponse**](EnabledProductResponse.md)


## `getProductConfiguration`

```javascript
getProductConfiguration({ product_id, service_id })
```

Get configuration for an enabled product on a service. Supported product IDs: `ngwaf` and `ddos_protection`.

### Example

```javascript
const options = {
  product_id: ngwaf, // required
  service_id: "service_id_example", // required
};

apiInstance.getProductConfiguration(options)
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
**product_id** | **String** |  |
**service_id** | **String** | Alphanumeric string identifying the service. |

### Return type

[**ConfiguredProductResponse**](ConfiguredProductResponse.md)


## `setProductConfiguration`

```javascript
setProductConfiguration({ product_id, service_id, [set_configuration] })
```

Update configuration for an enabled product on a service. Supported product IDs: `ngwaf` and `ddos_protection`.

### Example

```javascript
const options = {
  product_id: ngwaf, // required
  service_id: "service_id_example", // required
  set_configuration: {"workspace_id":"7JFbo4RNA0OKdFWC04r6B3","traffic_ramp":"20"},
};

apiInstance.setProductConfiguration(options)
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
**product_id** | **String** |  |
**service_id** | **String** | Alphanumeric string identifying the service. |
**set_configuration** | [**SetConfiguration**](SetConfiguration.md) |  | [optional]

### Return type

[**ConfiguredProductResponse**](ConfiguredProductResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
