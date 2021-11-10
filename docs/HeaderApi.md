# Fastly.HeaderApi


```javascript
const apiInstance = new Fastly.HeaderApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createHeaderObject**](HeaderApi.md#createHeaderObject) | **POST** /service/{service_id}/version/{version_id}/header | Create a Header object
[**deleteHeaderObject**](HeaderApi.md#deleteHeaderObject) | **DELETE** /service/{service_id}/version/{version_id}/header/{header_name} | Delete a Header object
[**getHeaderObject**](HeaderApi.md#getHeaderObject) | **GET** /service/{service_id}/version/{version_id}/header/{header_name} | Get a Header object
[**listHeaderObjects**](HeaderApi.md#listHeaderObjects) | **GET** /service/{service_id}/version/{version_id}/header | List Header objects
[**updateHeaderObject**](HeaderApi.md#updateHeaderObject) | **PUT** /service/{service_id}/version/{version_id}/header/{header_name} | Update a Header object



## `createHeaderObject`

```javascript
createHeaderObject({ service_id, version_id, [action, ][cache_condition, ][dst, ][ignore_if_set, ][name, ][priority, ][regex, ][request_condition, ][response_condition, ][src, ][substitution, ][type] })
```

Creates a new Header object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  action: "set",
  cache_condition: "cache_condition_example",
  dst: "dst_example",
  ignore_if_set: 56,
  name: "name_example",
  priority: 100,
  regex: "regex_example",
  request_condition: "request_condition_example",
  response_condition: null,
  src: "src_example",
  substitution: "substitution_example",
  type: "request",
};

apiInstance.createHeaderObject(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**action** | **String** | Accepts a string value. | [optional] [one of: "set", "append", "delete", "regex", "regex_repeat"]
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional]
**dst** | **String** | Header to set. | [optional]
**ignore_if_set** | **Number** | Don&#39;t add the header if it is added already. Only applies to &#39;set&#39; action. | [optional]
**name** | **String** | A handle to refer to this Header object. | [optional]
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional] [defaults to 100]
**regex** | **String** | Regular expression to use. Only applies to `regex` and `regex_repeat` actions. | [optional]
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional]
**response_condition** | [**String**](../Model/String.md) |  | [optional]
**src** | **String** | Variable to be used as a source for the header content. Does not apply to `delete` action. | [optional]
**substitution** | **String** | Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions. | [optional]
**type** | **String** | Accepts a string value. | [optional] [one of: "request", "cache", "response"]

### Return type

[**HeaderResponse**](HeaderResponse.md)


## `deleteHeaderObject`

```javascript
deleteHeaderObject({ service_id, version_id, header_name })
```

Deletes a Header object by name.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  header_name: "header_name_example", // required
};

apiInstance.deleteHeaderObject(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**header_name** | **String** |  |

### Return type

**Object**


## `getHeaderObject`

```javascript
getHeaderObject({ service_id, version_id, header_name })
```

Retrieves a Header object by name.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  header_name: "header_name_example", // required
};

apiInstance.getHeaderObject(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**header_name** | **String** |  |

### Return type

[**HeaderResponse**](HeaderResponse.md)


## `listHeaderObjects`

```javascript
listHeaderObjects({ service_id, version_id })
```

Retrieves all Header objects for a particular Version of a Service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listHeaderObjects(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[HeaderResponse]**](HeaderResponse.md)


## `updateHeaderObject`

```javascript
updateHeaderObject({ service_id, version_id, header_name, [action, ][cache_condition, ][dst, ][ignore_if_set, ][name, ][priority, ][regex, ][request_condition, ][response_condition, ][src, ][substitution, ][type] })
```

Modifies an existing Header object by name.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  header_name: "header_name_example", // required
  action: "set",
  cache_condition: "cache_condition_example",
  dst: "dst_example",
  ignore_if_set: 56,
  name: "name_example",
  priority: 100,
  regex: "regex_example",
  request_condition: "request_condition_example",
  response_condition: null,
  src: "src_example",
  substitution: "substitution_example",
  type: "request",
};

apiInstance.updateHeaderObject(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**header_name** | **String** |  |
**action** | **String** | Accepts a string value. | [optional] [one of: "set", "append", "delete", "regex", "regex_repeat"]
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional]
**dst** | **String** | Header to set. | [optional]
**ignore_if_set** | **Number** | Don&#39;t add the header if it is added already. Only applies to &#39;set&#39; action. | [optional]
**name** | **String** | A handle to refer to this Header object. | [optional]
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional] [defaults to 100]
**regex** | **String** | Regular expression to use. Only applies to `regex` and `regex_repeat` actions. | [optional]
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional]
**response_condition** | [**String**](../Model/String.md) |  | [optional]
**src** | **String** | Variable to be used as a source for the header content. Does not apply to `delete` action. | [optional]
**substitution** | **String** | Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions. | [optional]
**type** | **String** | Accepts a string value. | [optional] [one of: "request", "cache", "response"]

### Return type

[**HeaderResponse**](HeaderResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
