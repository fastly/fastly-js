# FastlyApi.DirectorApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createDirector**](DirectorApi.md#createDirector) | **POST** /service/{service_id}/version/{version_id}/director | Create a director
[**deleteDirector**](DirectorApi.md#deleteDirector) | **DELETE** /service/{service_id}/version/{version_id}/director/{director_name} | Delete a director
[**getDirector**](DirectorApi.md#getDirector) | **GET** /service/{service_id}/version/{version_id}/director/{director_name} | Get a director
[**listDirectors**](DirectorApi.md#listDirectors) | **GET** /service/{service_id}/version/{version_id}/director | List directors
[**updateDirector**](DirectorApi.md#updateDirector) | **PUT** /service/{service_id}/version/{version_id}/director/{director_name} | Update a director



## `createDirector`

> DirectorResponse createDirector(service_id, version_id, opts)

Create a director

Create a director for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'backends': new FastlyApi.Backend(), // [Backend] | List of backends associated to a director.
  'capacity': 56, // Number | Unused.
  'comment': "comment_example", // String | A freeform descriptive note.
  'name': "name_example", // String | Name for the Director.
  'quorum': 75, // Number | The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
  'shield': "'null'", // String | Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
  'type': 1, // Number | What type of load balance group to use.
  'retries': 5 // Number | How many backends to search if it fails.
};
apiInstance.createDirector(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**backends** | [**[Backend]**](../Model/Backend.md) | List of backends associated to a director. | [optional]
**capacity** | **Number** | Unused. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**name** | **String** | Name for the Director. | [optional]
**quorum** | **Number** | The percentage of capacity that needs to be up for a director to be considered up. &#x60;0&#x60; to &#x60;100&#x60;. | [optional] [default to 75]
**shield** | **String** | Selected POP to serve as a shield for the backends. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
**type** | **Number** | What type of load balance group to use. | [optional] [default to 1]
**retries** | **Number** | How many backends to search if it fails. | [optional] [default to 5]

### Return type

[**DirectorResponse**](DirectorResponse.md)


## `deleteDirector`

> Object deleteDirector(service_id, version_id, director_name)

Delete a director

Delete the director for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let director_name = "director_name_example"; // String | 
apiInstance.deleteDirector(service_id, version_id, director_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**director_name** | **String** |  |

### Return type

**Object**


## `getDirector`

> DirectorResponse getDirector(service_id, version_id, director_name)

Get a director

Get the director for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let director_name = "director_name_example"; // String | 
apiInstance.getDirector(service_id, version_id, director_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**director_name** | **String** |  |

### Return type

[**DirectorResponse**](DirectorResponse.md)


## `listDirectors`

> [DirectorResponse] listDirectors(service_id, version_id)

List directors

List the directors for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listDirectors(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[DirectorResponse]**](DirectorResponse.md)


## `updateDirector`

> DirectorResponse updateDirector(service_id, version_id, director_name)

Update a director

Update the director for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let director_name = "director_name_example"; // String | 
apiInstance.updateDirector(service_id, version_id, director_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**director_name** | **String** |  |

### Return type

[**DirectorResponse**](DirectorResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
