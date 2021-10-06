# Fastly.ServiceApi


```javascript
const apiInstance = new Fastly.ServiceApi();
```
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

```javascript
createService({ [comment, ][customer_id, ][name] })
```

Create a service.

### Example

```javascript
const options = {
  comment: "comment_example",
  customer_id: "customer_id_example",
  name: "name_example",
};

apiInstance.createService(options)
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
**comment** | **String** | A freeform descriptive note. | [optional]
**customer_id** | **String** | Alphanumeric string identifying the customer. | [optional]
**name** | **String** | The name of the service. | [optional]

### Return type

[**Service**](Service.md)


## `deleteService`

```javascript
deleteService({ service_id })
```

Delete a service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.deleteService(options)
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

### Return type

**Object**


## `getService`

```javascript
getService({ service_id })
```

Get a specific service by id.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.getService(options)
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

### Return type

[**Service**](Service.md)


## `getServiceDetail`

```javascript
getServiceDetail({ service_id })
```

List detailed information on a specified service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.getServiceDetail(options)
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

### Return type

[**Service**](Service.md)


## `listServiceDomains`

```javascript
listServiceDomains({ service_id })
```

List the domains within a service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.listServiceDomains(options)
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

### Return type

[**[Timestamps]**](Timestamps.md)


## `listServices`

```javascript
listServices({ [page, ][per_page, ][sort, ][direction] })
```

List services.

### Example

```javascript
const options = {
  page: 56,
  per_page: 20,
  sort: "'created'",
  direction: ascend,
};

apiInstance.listServices(options)
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
**page** | **Number** | Current page. | [optional]
**per_page** | **Number** | Number of records per page. | [optional] [default to 20]
**sort** | **String** | Field on which to sort. | [optional] [default to &#39;created&#39;]
**direction** | **String** | Direction in which to sort results. | [optional] [default to &#39;ascend&#39;]

### Return type

[**[Service]**](Service.md)


## `searchService`

```javascript
searchService({ name })
```

Get a specific service by name.

### Example

```javascript
const options = {
  name: "name_example", // required
};

apiInstance.searchService(options)
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
**name** | **String** |  |

### Return type

[**Service**](Service.md)


## `updateService`

```javascript
updateService({ service_id, [comment, ], [customer_id, ], [name] })
```

Update a service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  comment: "comment_example",
  customer_id: "customer_id_example",
  name: "name_example",
};

apiInstance.updateService(options)
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
**comment** | **String** | A freeform descriptive note. | [optional]
**customer_id** | **String** | Alphanumeric string identifying the customer. | [optional]
**name** | **String** | The name of the service. | [optional]

### Return type

[**Service**](Service.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
