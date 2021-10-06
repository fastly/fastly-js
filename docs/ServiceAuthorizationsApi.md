# Fastly.ServiceAuthorizationsApi


```javascript
const apiInstance = new Fastly.ServiceAuthorizationsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createServiceAuthorization**](ServiceAuthorizationsApi.md#createServiceAuthorization) | **POST** /service-authorizations | Create service authorization
[**deleteServiceAuthorization**](ServiceAuthorizationsApi.md#deleteServiceAuthorization) | **DELETE** /service-authorizations/{service_authorization_id} | Delete service authorization
[**deleteServiceAuthorization2**](ServiceAuthorizationsApi.md#deleteServiceAuthorization2) | **DELETE** /service-authorizations | Delete service authorizations
[**listServiceAuthorization**](ServiceAuthorizationsApi.md#listServiceAuthorization) | **GET** /service-authorizations | List service authorizations
[**showServiceAuthorization**](ServiceAuthorizationsApi.md#showServiceAuthorization) | **GET** /service-authorizations/{service_authorization_id} | Show service authorization
[**updateServiceAuthorization**](ServiceAuthorizationsApi.md#updateServiceAuthorization) | **PATCH** /service-authorizations/{service_authorization_id} | Update service authorization
[**updateServiceAuthorization2**](ServiceAuthorizationsApi.md#updateServiceAuthorization2) | **PATCH** /service-authorizations | Update service authorizations



## `createServiceAuthorization`

```javascript
createServiceAuthorization({ [service_authorization] })
```

Create service authorization.

### Example

```javascript
const options = {
  service_authorization: new Fastly.ServiceAuthorization(),
};

apiInstance.createServiceAuthorization(options)
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
**service_authorization** | [**ServiceAuthorization**](../Model/ServiceAuthorization.md) |  | [optional]

### Return type

[**ServiceAuthorizationResponse**](ServiceAuthorizationResponse.md)


## `deleteServiceAuthorization`

```javascript
deleteServiceAuthorization({ service_authorization_id })
```

Delete service authorization.

### Example

```javascript
const options = {
  service_authorization_id: "service_authorization_id_example", // required
};

apiInstance.deleteServiceAuthorization(options)
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
**service_authorization_id** | **String** |  |

### Return type

null (empty response body)


## `deleteServiceAuthorization2`

```javascript
deleteServiceAuthorization2({ [inline_object2] })
```

Delete service authorizations.

### Example

```javascript
const options = {
  inline_object2: new Fastly.InlineObject2(),
};

apiInstance.deleteServiceAuthorization2(options)
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
**inline_object2** | [**InlineObject2**](../Model/InlineObject2.md) |  | [optional]

### Return type

[**InlineResponse204**](InlineResponse204.md)


## `listServiceAuthorization`

```javascript
listServiceAuthorization({ [page_number, ][page_size] })
```

List service authorizations.

### Example

```javascript
const options = {
  page_number: 56,
  page_size: 20,
};

apiInstance.listServiceAuthorization(options)
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
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]

### Return type

[**Pagination**](Pagination.md)


## `showServiceAuthorization`

```javascript
showServiceAuthorization({ service_authorization_id })
```

Show service authorization.

### Example

```javascript
const options = {
  service_authorization_id: "service_authorization_id_example", // required
};

apiInstance.showServiceAuthorization(options)
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
**service_authorization_id** | **String** |  |

### Return type

[**ServiceAuthorizationResponse**](ServiceAuthorizationResponse.md)


## `updateServiceAuthorization`

```javascript
updateServiceAuthorization({ service_authorization_id, [service_authorization] })
```

Update service authorization.

### Example

```javascript
const options = {
  service_authorization_id: "service_authorization_id_example", // required
  service_authorization: new Fastly.ServiceAuthorization(),
};

apiInstance.updateServiceAuthorization(options)
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
**service_authorization_id** | **String** |  |
**service_authorization** | [**ServiceAuthorization**](../Model/ServiceAuthorization.md) |  | [optional]

### Return type

[**ServiceAuthorizationResponse**](ServiceAuthorizationResponse.md)


## `updateServiceAuthorization2`

```javascript
updateServiceAuthorization2({ [inline_object3] })
```

Update service authorizations.

### Example

```javascript
const options = {
  inline_object3: new Fastly.InlineObject3(),
};

apiInstance.updateServiceAuthorization2(options)
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
**inline_object3** | [**InlineObject3**](../Model/InlineObject3.md) |  | [optional]

### Return type

[**Pagination**](Pagination.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
