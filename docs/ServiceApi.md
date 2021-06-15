# FastlyApi.ServiceApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createService**](ServiceApi.md#createService) | **POST** /service | Create a service
[**deleteService**](ServiceApi.md#deleteService) | **DELETE** /service/{service_id} | Delete a service
[**getService**](ServiceApi.md#getService) | **GET** /service/{service_id} | Get a service
[**getServiceDetail**](ServiceApi.md#getServiceDetail) | **GET** /service/{service_id}/details | Get service details
[**listServiceDomains**](ServiceApi.md#listServiceDomains) | **GET** /service/{service_id}/domain | List the domains within a service
[**listServices**](ServiceApi.md#listServices) | **GET** /service | List services
[**searchService**](ServiceApi.md#searchService) | **GET** /service/search | Search for a service by name
[**updateService**](ServiceApi.md#updateService) | **PUT** /service/{service_id} | Update a service



## createService

> ModelService createService(opts)

Create a service

Create a service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServiceApi();
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'comment': "''", // String | A freeform descriptive note.
  'customer_id': "customer_id_example", // String | Alphanumeric string identifying the customer.
  'name': "name_example", // String | The name of the service.
  'paused': true, // Boolean | Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated.
  'type': "type_example", // String | The type of this service.
  'publish_key': "publish_key_example", // String | Unused at this time.
  'id': "id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Current [version](/reference/api/services/version/) of the service.
  'versions': new FastlyApi.SchemasModelVersion() // [SchemasModelVersion] | A list of [versions](/reference/api/services/version/) associated with the service.
};
apiInstance.createService(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **customer_id** | **String**| Alphanumeric string identifying the customer. | [optional] 
 **name** | **String**| The name of the service. | [optional] 
 **paused** | **Boolean**| Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated. | [optional] 
 **type** | **String**| The type of this service. | [optional] 
 **publish_key** | **String**| Unused at this time. | [optional] 
 **id** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Current [version](/reference/api/services/version/) of the service. | [optional] 
 **versions** | [**[SchemasModelVersion]**](SchemasModelVersion.md)| A list of [versions](/reference/api/services/version/) associated with the service. | [optional] 

### Return type

[**ModelService**](ModelService.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteService

> Object deleteService(service_id)

Delete a service

Delete a service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServiceApi();
let service_id = "service_id_example"; // String | 
apiInstance.deleteService(service_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getService

> ModelService getService(service_id)

Get a service

Get a specific service by id.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServiceApi();
let service_id = "service_id_example"; // String | 
apiInstance.getService(service_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 

### Return type

[**ModelService**](ModelService.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceDetail

> ModelServiceDetail getServiceDetail(service_id)

Get service details

List detailed information on a specified service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServiceApi();
let service_id = "service_id_example"; // String | 
apiInstance.getServiceDetail(service_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 

### Return type

[**ModelServiceDetail**](ModelServiceDetail.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServiceDomains

> [ModelDomain] listServiceDomains(service_id)

List the domains within a service

List the domains within a service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServiceApi();
let service_id = "service_id_example"; // String | 
apiInstance.listServiceDomains(service_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 

### Return type

[**[ModelDomain]**](ModelDomain.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServices

> [ModelService] listServices(opts)

List services

List services.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServiceApi();
let opts = {
  'page': 56, // Number | Current page.
  'per_page': 20, // Number | Number of records per page.
  'sort': "'created'", // String | Field on which to sort.
  'direction': new FastlyApi.Direction() // Direction | Direction in which to sort results.
};
apiInstance.listServices(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Current page. | [optional] 
 **per_page** | **Number**| Number of records per page. | [optional] [default to 20]
 **sort** | **String**| Field on which to sort. | [optional] [default to &#39;created&#39;]
 **direction** | [**Direction**](.md)| Direction in which to sort results. | [optional] 

### Return type

[**[ModelService]**](ModelService.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchService

> ModelService searchService(name)

Search for a service by name

Get a specific service by name.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServiceApi();
let name = "name_example"; // String | 
apiInstance.searchService(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**ModelService**](ModelService.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateService

> ModelService updateService(service_id, opts)

Update a service

Update a service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServiceApi();
let service_id = "service_id_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'comment': "''", // String | A freeform descriptive note.
  'customer_id': "customer_id_example", // String | Alphanumeric string identifying the customer.
  'name': "name_example", // String | The name of the service.
  'paused': true, // Boolean | Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated.
  'type': "type_example", // String | The type of this service.
  'publish_key': "publish_key_example", // String | Unused at this time.
  'id': "id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Current [version](/reference/api/services/version/) of the service.
  'versions': new FastlyApi.SchemasModelVersion() // [SchemasModelVersion] | A list of [versions](/reference/api/services/version/) associated with the service.
};
apiInstance.updateService(service_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **customer_id** | **String**| Alphanumeric string identifying the customer. | [optional] 
 **name** | **String**| The name of the service. | [optional] 
 **paused** | **Boolean**| Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated. | [optional] 
 **type** | **String**| The type of this service. | [optional] 
 **publish_key** | **String**| Unused at this time. | [optional] 
 **id** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Current [version](/reference/api/services/version/) of the service. | [optional] 
 **versions** | [**[SchemasModelVersion]**](SchemasModelVersion.md)| A list of [versions](/reference/api/services/version/) associated with the service. | [optional] 

### Return type

[**ModelService**](ModelService.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

