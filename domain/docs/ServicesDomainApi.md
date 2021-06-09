# Domain.ServicesDomainApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkDomain**](ServicesDomainApi.md#checkDomain) | **GET** /service/{service_id}/version/{version_id}/domain/{domain_name}/check | Validate DNS configuration for a single domain on a service
[**checkDomains**](ServicesDomainApi.md#checkDomains) | **GET** /service/{service_id}/version/{version_id}/domain/check_all | Validate DNS configuration for all domains on a service
[**createDomain**](ServicesDomainApi.md#createDomain) | **POST** /service/{service_id}/version/{version_id}/domain | Add a domain name to a service
[**deleteDomain**](ServicesDomainApi.md#deleteDomain) | **DELETE** /service/{service_id}/version/{version_id}/domain/{domain_name} | Remove a domain from a service
[**getDomain**](ServicesDomainApi.md#getDomain) | **GET** /service/{service_id}/version/{version_id}/domain/{domain_name} | Describe a domain
[**listDomains**](ServicesDomainApi.md#listDomains) | **GET** /service/{service_id}/version/{version_id}/domain | List domains
[**updateDomain**](ServicesDomainApi.md#updateDomain) | **PUT** /service/{service_id}/version/{version_id}/domain/{domain_name} | Update a domain



## checkDomain

> [OneOfobjectstringboolean] checkDomain(serviceId, versionId, domainName)

Validate DNS configuration for a single domain on a service

Checks the status of a specific domain&#39;s DNS record for a Service Version. Returns an array in the same format as domain/check_all.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Domain.ServicesDomainApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let domainName = www.example.com; // String | 
apiInstance.checkDomain(serviceId, versionId, domainName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **domainName** | **String**|  | 

### Return type

[**[OneOfobjectstringboolean]**](OneOfobjectstringboolean.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checkDomains

> [[OneOfobjectstringboolean]] checkDomains(serviceId, versionId)

Validate DNS configuration for all domains on a service

Checks the status of all domains&#39; DNS records for a Service Version. Returns an array of 3 items. The first is the details for the domain, the second is the current CNAME of the domain, and the third is a boolean indicating whether or not it has been properly setup to use Fastly.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Domain.ServicesDomainApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.checkDomains(serviceId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 

### Return type

**[[OneOfobjectstringboolean]]**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createDomain

> InlineObject createDomain(serviceId, versionId, opts)

Add a domain name to a service

Create a domain for a particular service and version.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Domain.ServicesDomainApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'createdAt': "createdAt_example", // String | Date and time in ISO 8601 format.
  'deletedAt': "deletedAt_example", // String | Date and time in ISO 8601 format.
  'updatedAt': "updatedAt_example", // String | Date and time in ISO 8601 format.
  'comment': "''", // String | A freeform descriptive note.
  'name': "name_example" // String | The name of the domain or domains associated with this service.
};
apiInstance.createDomain(serviceId, versionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **name** | **String**| The name of the domain or domains associated with this service. | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteDomain

> Object deleteDomain(serviceId, versionId, domainName)

Remove a domain from a service

Delete the domain for a particular service and versions.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Domain.ServicesDomainApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let domainName = www.example.com; // String | 
apiInstance.deleteDomain(serviceId, versionId, domainName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **domainName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDomain

> InlineObject getDomain(serviceId, versionId, domainName)

Describe a domain

Get the domain for a particular service and version.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Domain.ServicesDomainApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let domainName = www.example.com; // String | 
apiInstance.getDomain(serviceId, versionId, domainName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **domainName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDomains

> InlineResponse200 listDomains(serviceId, versionId)

List domains

List all the domains for a particular service and version.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Domain.ServicesDomainApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listDomains(serviceId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDomain

> InlineObject1 updateDomain(serviceId, versionId, domainName, opts)

Update a domain

Update the domain for a particular service and version.

### Example

```javascript
import Domain from 'domain';
let defaultClient = Domain.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Domain.ServicesDomainApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let domainName = www.example.com; // String | 
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'createdAt': "createdAt_example", // String | Date and time in ISO 8601 format.
  'deletedAt': "deletedAt_example", // String | Date and time in ISO 8601 format.
  'updatedAt': "updatedAt_example", // String | Date and time in ISO 8601 format.
  'comment': "''", // String | A freeform descriptive note.
  'name': "name_example" // String | The name of the domain or domains associated with this service.
};
apiInstance.updateDomain(serviceId, versionId, domainName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **domainName** | **String**|  | 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **name** | **String**| The name of the domain or domains associated with this service. | [optional] 

### Return type

[**InlineObject1**](InlineObject1.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

