# FastlyApi.DirectorBackendApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createDirectorBackend**](DirectorBackendApi.md#createDirectorBackend) | **POST** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Create a director-backend relationship
[**deleteDirectorBackend**](DirectorBackendApi.md#deleteDirectorBackend) | **DELETE** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Delete a director-backend relationship
[**getDirectorBackend**](DirectorBackendApi.md#getDirectorBackend) | **GET** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Get a director-backend relationship



## `createDirectorBackend`

> DirectorBackend createDirectorBackend(director_name, service_id, version_id, backend_name)

Create a director-backend relationship

Establishes a relationship between a Backend and a Director. The Backend is then considered a member of the Director and can be used to balance traffic onto.

### Example

```javascript
let apiInstance = new FastlyApi.DirectorBackendApi();
let director_name = "director_name_example"; // String | 
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.createDirectorBackend(director_name, service_id, version_id, backend_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**director_name** | **String** |  |
**service_id** | **String** |  |
**version_id** | **Number** |  |
**backend_name** | **String** |  |

### Return type

[**DirectorBackend**](DirectorBackend.md)


## `deleteDirectorBackend`

> Object deleteDirectorBackend(director_name, service_id, version_id, backend_name)

Delete a director-backend relationship

Deletes the relationship between a Backend and a Director. The Backend is no longer considered a member of the Director and thus will not have traffic balanced onto it from this Director.

### Example

```javascript
let apiInstance = new FastlyApi.DirectorBackendApi();
let director_name = "director_name_example"; // String | 
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.deleteDirectorBackend(director_name, service_id, version_id, backend_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**director_name** | **String** |  |
**service_id** | **String** |  |
**version_id** | **Number** |  |
**backend_name** | **String** |  |

### Return type

**Object**


## `getDirectorBackend`

> DirectorBackend getDirectorBackend(director_name, service_id, version_id, backend_name)

Get a director-backend relationship

Returns the relationship between a Backend and a Director. If the Backend has been associated with the Director, it returns a simple record indicating this. Otherwise, returns a 404.

### Example

```javascript
let apiInstance = new FastlyApi.DirectorBackendApi();
let director_name = "director_name_example"; // String | 
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.getDirectorBackend(director_name, service_id, version_id, backend_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**director_name** | **String** |  |
**service_id** | **String** |  |
**version_id** | **Number** |  |
**backend_name** | **String** |  |

### Return type

[**DirectorBackend**](DirectorBackend.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
