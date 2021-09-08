# Fastly.SnippetApi


```javascript
const apiInstance = new Fastly.SnippetApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createSnippet**](SnippetApi.md#createSnippet) | **POST** /service/{service_id}/version/{version_id}/snippet | Create a snippet
[**deleteSnippet**](SnippetApi.md#deleteSnippet) | **DELETE** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Delete a snippet
[**getSnippet**](SnippetApi.md#getSnippet) | **GET** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Get a versioned snippet
[**getSnippetDynamic**](SnippetApi.md#getSnippetDynamic) | **GET** /service/{service_id}/snippet/{snippet_id} | Get a dynamic snippet
[**listSnippets**](SnippetApi.md#listSnippets) | **GET** /service/{service_id}/version/{version_id}/snippet | List snippets
[**updateSnippet**](SnippetApi.md#updateSnippet) | **PUT** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Update a versioned snippet
[**updateSnippetDynamic**](SnippetApi.md#updateSnippetDynamic) | **PUT** /service/{service_id}/snippet/{snippet_id} | Update a dynamic snippet



## `createSnippet`

```javascript
createSnippet({ service_id, version_id, [content], , [dynamic], , [name], , [priority], , [type] })
```

Create a snippet for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required

  content: "content_example",

  dynamic: "dynamic_example",

  name: "name_example",

  priority: "'100'",

  type: "type_example",
};

apiInstance.createSnippet(options)
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
**content** | **String** | The VCL code that specifies exactly what the snippet does. | [optional]
**dynamic** | **String** | Sets the snippet version. | [optional]
**name** | **String** | The name for the snippet. | [optional]
**priority** | **String** | Numeric string value. Priority determines execution order. Lower numbers execute first. | [optional] [default to &#39;100&#39;]
**type** | **String** | The location in generated VCL where the snippet should be placed. | [optional]

### Return type

[**SnippetResponse**](SnippetResponse.md)


## `deleteSnippet`

```javascript
deleteSnippet({ service_id, version_id, snippet_name })
```

Delete a specific snippet for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  snippet_name: "snippet_name_example", // required
};

apiInstance.deleteSnippet(options)
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
**snippet_name** | **String** |  |

### Return type

**Object**


## `getSnippet`

```javascript
getSnippet({ service_id, version_id, snippet_name })
```

Get a single snippet for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  snippet_name: "snippet_name_example", // required
};

apiInstance.getSnippet(options)
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
**snippet_name** | **String** |  |

### Return type

[**SnippetResponse**](SnippetResponse.md)


## `getSnippetDynamic`

```javascript
getSnippetDynamic({ service_id, snippet_id })
```

Get a single dynamic snippet for a particular service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  snippet_id: "snippet_id_example", // required
};

apiInstance.getSnippetDynamic(options)
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
**snippet_id** | **String** |  |

### Return type

[**SnippetResponse**](SnippetResponse.md)


## `listSnippets`

```javascript
listSnippets({ service_id, version_id })
```

List all snippets for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listSnippets(options)
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

[**[SnippetResponse]**](SnippetResponse.md)


## `updateSnippet`

```javascript
updateSnippet({ service_id, version_id, snippet_name })
```

Update a specific snippet for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  snippet_name: "snippet_name_example", // required
};

apiInstance.updateSnippet(options)
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
**snippet_name** | **String** |  |

### Return type

[**SnippetResponse**](SnippetResponse.md)


## `updateSnippetDynamic`

```javascript
updateSnippetDynamic({ service_id, snippet_id, [content], , [dynamic], , [name], , [priority], , [type] })
```

Update a dynamic snippet for a particular service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  snippet_id: "snippet_id_example", // required

  content: "content_example",

  dynamic: "dynamic_example",

  name: "name_example",

  priority: "'100'",

  type: "type_example",
};

apiInstance.updateSnippetDynamic(options)
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
**snippet_id** | **String** |  |
**content** | **String** | The VCL code that specifies exactly what the snippet does. | [optional]
**dynamic** | **String** | Sets the snippet version. | [optional]
**name** | **String** | The name for the snippet. | [optional]
**priority** | **String** | Numeric string value. Priority determines execution order. Lower numbers execute first. | [optional] [default to &#39;100&#39;]
**type** | **String** | The location in generated VCL where the snippet should be placed. | [optional]

### Return type

[**SnippetResponse**](SnippetResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
