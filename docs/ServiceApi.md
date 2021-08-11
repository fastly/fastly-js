# FastlyApi.ServiceApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createService**](ServiceApi.md#createService) | **POST** /service | Create a service
[**deleteService**](ServiceApi.md#deleteService) | **DELETE** /service/{service_id} | Delete a service
[**getService**](ServiceApi.md#getService) | **GET** /service/{service_id} | Get a service
[**getServiceDetail**](ServiceApi.md#getServiceDetail) | **GET** /service/{service_id}/details | Get service details
[**listServiceDomains**](ServiceApi.md#listServiceDomains) | **GET** /service/{service_id}/domain | List the domains within a service
[**listServices**](ServiceApi.md#listServices) | **GET** /service | List services
[**searchService**](ServiceApi.md#searchService) | **GET** /service/search | Search for a service by name
[**updateService**](ServiceApi.md#updateService) | **PUT** /service/{service_id} | Update a service



## `createService`

> ServiceResponse createService(opts)

Create a service

Create a service.

### Example

```javascript
let apiInstance = new FastlyApi.ServiceApi();
let opts = {
  'comment': "comment_example", // String | A freeform descriptive note.
  'name': "name_example", // String | The name of the service.
  'customer_id': "customer_id_example", // String | Alphanumeric string identifying the customer.
  'type': "type_example" // String | The type of this service.
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
**comment** | **String** | A freeform descriptive note. | [optional]
**name** | **String** | The name of the service. | [optional]
**customer_id** | **String** | Alphanumeric string identifying the customer. | [optional]
**type** | **String** | The type of this service. | [optional]

### Return type

[**ServiceResponse**](ServiceResponse.md)


## `deleteService`

> Object deleteService(service_id)

Delete a service

Delete a service.

### Example

```javascript
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
**service_id** | **String** |  |

### Return type

**Object**


## `getService`

> ServiceResponse getService(service_id)

Get a service

Get a specific service by id.

### Example

```javascript
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
**service_id** | **String** |  |

### Return type

[**ServiceResponse**](ServiceResponse.md)


## `getServiceDetail`

> ServiceDetail getServiceDetail(service_id)

Get service details

List detailed information on a specified service.

### Example

```javascript
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
**service_id** | **String** |  |

### Return type

[**ServiceDetail**](ServiceDetail.md)


## `listServiceDomains`

> [DomainResponse] listServiceDomains(service_id)

List the domains within a service

List the domains within a service.

### Example

```javascript
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
**service_id** | **String** |  |

### Return type

[**[DomainResponse]**](DomainResponse.md)


## `listServices`

> [ServiceResponse] listServices(opts)

List services

List services.

### Example

```javascript
let apiInstance = new FastlyApi.ServiceApi();
let opts = {
  'page': 56, // Number | Current page.
  'per_page': 20, // Number | Number of records per page.
  'sort': "'created'", // String | Field on which to sort.
  'direction': ascend // String | Direction in which to sort results.
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
**page** | **Number** | Current page. | [optional]
**per_page** | **Number** | Number of records per page. | [optional] [default to 20]
**sort** | **String** | Field on which to sort. | [optional] [default to &#39;created&#39;]
**direction** | **String** | Direction in which to sort results. | [optional] [default to &#39;ascend&#39;]

### Return type

[**[ServiceResponse]**](ServiceResponse.md)


## `searchService`

> ServiceResponse searchService(name)

Search for a service by name

Get a specific service by name.

### Example

```javascript
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
**name** | **String** |  |

### Return type

[**ServiceResponse**](ServiceResponse.md)


## `updateService`

> ServiceResponse updateService(service_id, opts)

Update a service

Update a service.

### Example

```javascript
let apiInstance = new FastlyApi.ServiceApi();
let service_id = "service_id_example"; // String | 
let opts = {
  'comment': "comment_example", // String | A freeform descriptive note.
  'name': "name_example", // String | The name of the service.
  'customer_id': "customer_id_example" // String | Alphanumeric string identifying the customer.
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
**service_id** | **String** |  |
**comment** | **String** | A freeform descriptive note. | [optional]
**name** | **String** | The name of the service. | [optional]
**customer_id** | **String** | Alphanumeric string identifying the customer. | [optional]

### Return type

[**ServiceResponse**](ServiceResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
