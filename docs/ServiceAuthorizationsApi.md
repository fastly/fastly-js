# Fastly.ServiceAuthorizationsApi

```javascript
const apiInstance = new Fastly.ServiceAuthorizationsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createServiceAuthorization**](ServiceAuthorizationsApi.md#createServiceAuthorization) | **POST** /service-authorizations | Create service authorization
[**deleteServiceAuthorization**](ServiceAuthorizationsApi.md#deleteServiceAuthorization) | **DELETE** /service-authorizations/{service_authorization_id} | Delete service authorization
[**listServiceAuthorization**](ServiceAuthorizationsApi.md#listServiceAuthorization) | **GET** /service-authorizations | List service authorizations
[**showServiceAuthorization**](ServiceAuthorizationsApi.md#showServiceAuthorization) | **GET** /service-authorizations/{service_authorization_id} | Show service authorization
[**updateServiceAuthorization**](ServiceAuthorizationsApi.md#updateServiceAuthorization) | **PATCH** /service-authorizations/{service_authorization_id} | Update service authorization


## `createServiceAuthorization`

```javascript
createServiceAuthorization({ , [service_authorization] })
```

Create service authorization.

### Example

```javascript
const options = {
  service_authorization: {"data":{"type":"service_authorization","attributes":{"permission":"read_only"},"relationships":{"user":{"data":{"type":"user","id":"6c7kAlo4vACNchGOdQxP37"}},"service":{"data":[{"type":"service","id":"SU1Z0isxPaozGVKXdv0eY"}]}}}},
};

apiInstance.createServiceAuthorization(options)
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
**service_authorization** | [**ServiceAuthorization**](ServiceAuthorization.md) |  | [optional]

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
**service_authorization_id** | **String** | Alphanumeric string identifying a service authorization. |

### Return type

null (empty response body)


## `listServiceAuthorization`

```javascript
listServiceAuthorization({ , [page_number, ][page_size] })
```

List service authorizations.

### Example

```javascript
const options = {
  page_number: 1,
  page_size: 20,
};

apiInstance.listServiceAuthorization(options)
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
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]

### Return type

[**ServiceAuthorizationsResponse**](ServiceAuthorizationsResponse.md)


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
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_authorization_id** | **String** | Alphanumeric string identifying a service authorization. |

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
  service_authorization: {"data":{"id":"3krg2uUGZzb2W9Euo4moOY","type":"service_authorization","attributes":{"permission":"read_only"}}},
};

apiInstance.updateServiceAuthorization(options)
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
**service_authorization_id** | **String** | Alphanumeric string identifying a service authorization. |
**service_authorization** | [**ServiceAuthorization**](ServiceAuthorization.md) |  | [optional]

### Return type

[**ServiceAuthorizationResponse**](ServiceAuthorizationResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
