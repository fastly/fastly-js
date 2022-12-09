# Fastly.EnabledProductsApi

```javascript
const apiInstance = new Fastly.EnabledProductsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**disableProduct**](EnabledProductsApi.md#disableProduct) | **DELETE** /enabled-products/{product_id}/services/{service_id} | Disable a product
[**enableProduct**](EnabledProductsApi.md#enableProduct) | **PUT** /enabled-products/{product_id}/services/{service_id} | Enable a product
[**getEnabledProduct**](EnabledProductsApi.md#getEnabledProduct) | **GET** /enabled-products/{product_id}/services/{service_id} | Get enabled product


## `disableProduct`

```javascript
disableProduct({ product_id, service_id })
```

Disable a product on a service. Supported product IDs: `origin_inspector`,`domain_inspector`,`image_optimizer`, and `websockets`.

### Example

```javascript
const options = {
  product_id: origin_inspector, // required
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
enableProduct({ product_id, service_id })
```

Enable a product on a service. Supported product IDs: `origin_inspector`,`domain_inspector`,`image_optimizer`, and `websockets`.

### Example

```javascript
const options = {
  product_id: origin_inspector, // required
  service_id: "service_id_example", // required
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

### Return type

[**EnabledProduct**](EnabledProduct.md)


## `getEnabledProduct`

```javascript
getEnabledProduct({ product_id, service_id })
```

Get enabled product on a service. Supported product IDs: `origin_inspector`,`domain_inspector`,`image_optimizer`, and `websockets`.

### Example

```javascript
const options = {
  product_id: origin_inspector, // required
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

[**EnabledProduct**](EnabledProduct.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
