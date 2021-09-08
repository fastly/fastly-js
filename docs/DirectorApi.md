# Fastly.DirectorApi


```javascript
const apiInstance = new Fastly.DirectorApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createDirector**](DirectorApi.md#createDirector) | **POST** /service/{service_id}/version/{version_id}/director | Create a director
[**deleteDirector**](DirectorApi.md#deleteDirector) | **DELETE** /service/{service_id}/version/{version_id}/director/{director_name} | Delete a director
[**getDirector**](DirectorApi.md#getDirector) | **GET** /service/{service_id}/version/{version_id}/director/{director_name} | Get a director
[**listDirectors**](DirectorApi.md#listDirectors) | **GET** /service/{service_id}/version/{version_id}/director | List directors
[**updateDirector**](DirectorApi.md#updateDirector) | **PUT** /service/{service_id}/version/{version_id}/director/{director_name} | Update a director



## `createDirector`

```javascript
createDirector({ service_id, version_id, [backends], , [capacity], , [comment], , [name], , [quorum], , [retries], , [shield], , [type] })
```

Create a director for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required

  backends: new Fastly.Backend(),

  capacity: 56,

  comment: "comment_example",

  name: "name_example",

  quorum: 75,

  retries: 5,

  shield: "'null'",

  type: 1,
};

apiInstance.createDirector(options)
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
**version_id** | **Number** |  |
**backends** | [**[Backend]**](../Model/Backend.md) | List of backends associated to a director. | [optional]
**capacity** | **Number** | Unused. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**name** | **String** | Name for the Director. | [optional]
**quorum** | **Number** | The percentage of capacity that needs to be up for a director to be considered up. &#x60;0&#x60; to &#x60;100&#x60;. | [optional] [default to 75]
**retries** | **Number** | How many backends to search if it fails. | [optional] [default to 5]
**shield** | **String** | Selected POP to serve as a shield for the backends. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
**type** | **Number** | What type of load balance group to use. | [optional] [default to 1]

### Return type

[**DirectorResponse**](DirectorResponse.md)


## `deleteDirector`

```javascript
deleteDirector({ service_id, version_id, director_name })
```

Delete the director for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  director_name: "director_name_example", // required
};

apiInstance.deleteDirector(options)
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
**version_id** | **Number** |  |
**director_name** | **String** |  |

### Return type

**Object**


## `getDirector`

```javascript
getDirector({ service_id, version_id, director_name })
```

Get the director for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  director_name: "director_name_example", // required
};

apiInstance.getDirector(options)
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
**version_id** | **Number** |  |
**director_name** | **String** |  |

### Return type

[**DirectorResponse**](DirectorResponse.md)


## `listDirectors`

```javascript
listDirectors({ service_id, version_id })
```

List the directors for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listDirectors(options)
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
**version_id** | **Number** |  |

### Return type

[**[DirectorResponse]**](DirectorResponse.md)


## `updateDirector`

```javascript
updateDirector({ service_id, version_id, director_name })
```

Update the director for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  director_name: "director_name_example", // required
};

apiInstance.updateDirector(options)
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
**version_id** | **Number** |  |
**director_name** | **String** |  |

### Return type

[**DirectorResponse**](DirectorResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
