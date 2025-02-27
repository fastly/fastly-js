# Fastly.ProductDomainInspectorApi

```javascript
const apiInstance = new Fastly.ProductDomainInspectorApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**disableProductDomainInspector**](ProductDomainInspectorApi.md#disableProductDomainInspector) | **DELETE** /enabled-products/v1/domain_inspector/services/{service_id} | Disable product
[**enableProductDomainInspector**](ProductDomainInspectorApi.md#enableProductDomainInspector) | **PUT** /enabled-products/v1/domain_inspector/services/{service_id} | Enable product
[**getProductDomainInspector**](ProductDomainInspectorApi.md#getProductDomainInspector) | **GET** /enabled-products/v1/domain_inspector/services/{service_id} | Get product enablement status


## `disableProductDomainInspector`

```javascript
disableProductDomainInspector({ service_id })
```

Disable the Domain Inspector product on a service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.disableProductDomainInspector(options)
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


## `enableProductDomainInspector`

```javascript
enableProductDomainInspector({ service_id })
```

Enable the Domain Inspector product on a service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.enableProductDomainInspector(options)
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

[**DomainInspectorResponseBodyEnable**](DomainInspectorResponseBodyEnable.md)


## `getProductDomainInspector`

```javascript
getProductDomainInspector({ service_id })
```

Get the enablement status of the Domain Inspector product on a service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.getProductDomainInspector(options)
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

[**DomainInspectorResponseBodyEnable**](DomainInspectorResponseBodyEnable.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
