# FastlyApi.DomainApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkDomain**](DomainApi.md#checkDomain) | **GET** /service/{service_id}/version/{version_id}/domain/{domain_name}/check | Validate DNS configuration for a single domain on a service
[**checkDomains**](DomainApi.md#checkDomains) | **GET** /service/{service_id}/version/{version_id}/domain/check_all | Validate DNS configuration for all domains on a service
[**createDomain**](DomainApi.md#createDomain) | **POST** /service/{service_id}/version/{version_id}/domain | Add a domain name to a service
[**deleteDomain**](DomainApi.md#deleteDomain) | **DELETE** /service/{service_id}/version/{version_id}/domain/{domain_name} | Remove a domain from a service
[**getDomain**](DomainApi.md#getDomain) | **GET** /service/{service_id}/version/{version_id}/domain/{domain_name} | Describe a domain
[**listDomains**](DomainApi.md#listDomains) | **GET** /service/{service_id}/version/{version_id}/domain | List domains
[**updateDomain**](DomainApi.md#updateDomain) | **PUT** /service/{service_id}/version/{version_id}/domain/{domain_name} | Update a domain



## checkDomain

> [OneOfobjectstringboolean] checkDomain(service_id, version_id, domain_name)

Validate DNS configuration for a single domain on a service

Checks the status of a specific domain&#39;s DNS record for a Service Version. Returns an array in the same format as domain/check_all.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let domain_name = "domain_name_example"; // String | 
apiInstance.checkDomain(service_id, version_id, domain_name).then((data) => {
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
 **domain_name** | **String**|  | 

### Return type

[**[OneOfobjectstringboolean]**](OneOfobjectstringboolean.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checkDomains

> [Array] checkDomains(service_id, version_id)

Validate DNS configuration for all domains on a service

Checks the status of all domains&#39; DNS records for a Service Version. Returns an array of 3 items. The first is the details for the domain, the second is the current CNAME of the domain, and the third is a boolean indicating whether or not it has been properly setup to use Fastly.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.checkDomains(service_id, version_id).then((data) => {
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

**[Array]**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createDomain

> ModelDomain createDomain(service_id, version_id, opts)

Add a domain name to a service

Create a domain for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'comment': "''", // String | A freeform descriptive note.
  'name': "name_example" // String | The name of the domain or domains associated with this service.
};
apiInstance.createDomain(service_id, version_id, opts).then((data) => {
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
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **name** | **String**| The name of the domain or domains associated with this service. | [optional] 

### Return type

[**ModelDomain**](ModelDomain.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteDomain

> Object deleteDomain(service_id, version_id, domain_name)

Remove a domain from a service

Delete the domain for a particular service and versions.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let domain_name = "domain_name_example"; // String | 
apiInstance.deleteDomain(service_id, version_id, domain_name).then((data) => {
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
 **domain_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDomain

> ModelDomain getDomain(service_id, version_id, domain_name)

Describe a domain

Get the domain for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let domain_name = "domain_name_example"; // String | 
apiInstance.getDomain(service_id, version_id, domain_name).then((data) => {
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
 **domain_name** | **String**|  | 

### Return type

[**ModelDomain**](ModelDomain.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDomains

> ModelDomain listDomains(service_id, version_id)

List domains

List all the domains for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listDomains(service_id, version_id).then((data) => {
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

[**ModelDomain**](ModelDomain.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDomain

> ModelDomain updateDomain(service_id, version_id, domain_name, opts)

Update a domain

Update the domain for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DomainApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let domain_name = "domain_name_example"; // String | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'comment': "''", // String | A freeform descriptive note.
  'name': "name_example" // String | The name of the domain or domains associated with this service.
};
apiInstance.updateDomain(service_id, version_id, domain_name, opts).then((data) => {
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
 **domain_name** | **String**|  | 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **name** | **String**| The name of the domain or domains associated with this service. | [optional] 

### Return type

[**ModelDomain**](ModelDomain.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

