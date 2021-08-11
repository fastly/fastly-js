# FastlyApi.SnippetApi



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

> SnippetResponse createSnippet(service_id, version_id, opts)

Create a snippet

Create a snippet for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the snippet.
  'dynamic': "dynamic_example", // String | Sets the snippet version.
  'type': "type_example", // String | The location in generated VCL where the snippet should be placed.
  'content': "content_example", // String | The VCL code that specifies exactly what the snippet does.
  'priority': "'100'" // String | Numeric string value. Priority determines execution order. Lower numbers execute first.
};
apiInstance.createSnippet(service_id, version_id, opts).then((data) => {
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
**name** | **String** | The name for the snippet. | [optional]
**dynamic** | **String** | Sets the snippet version. | [optional]
**type** | **String** | The location in generated VCL where the snippet should be placed. | [optional]
**content** | **String** | The VCL code that specifies exactly what the snippet does. | [optional]
**priority** | **String** | Numeric string value. Priority determines execution order. Lower numbers execute first. | [optional] [default to &#39;100&#39;]

### Return type

[**SnippetResponse**](SnippetResponse.md)


## `deleteSnippet`

> Object deleteSnippet(service_id, version_id, snippet_name)

Delete a snippet

Delete a specific snippet for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let snippet_name = "snippet_name_example"; // String | 
apiInstance.deleteSnippet(service_id, version_id, snippet_name).then((data) => {
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
**snippet_name** | **String** |  |

### Return type

**Object**


## `getSnippet`

> SnippetResponse getSnippet(service_id, version_id, snippet_name)

Get a versioned snippet

Get a single snippet for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let snippet_name = "snippet_name_example"; // String | 
apiInstance.getSnippet(service_id, version_id, snippet_name).then((data) => {
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
**snippet_name** | **String** |  |

### Return type

[**SnippetResponse**](SnippetResponse.md)


## `getSnippetDynamic`

> SnippetResponse getSnippetDynamic(service_id, snippet_id)

Get a dynamic snippet

Get a single dynamic snippet for a particular service.

### Example

```javascript
let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let snippet_id = "snippet_id_example"; // String | 
apiInstance.getSnippetDynamic(service_id, snippet_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**snippet_id** | **String** |  |

### Return type

[**SnippetResponse**](SnippetResponse.md)


## `listSnippets`

> [SnippetResponse] listSnippets(service_id, version_id)

List snippets

List all snippets for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listSnippets(service_id, version_id).then((data) => {
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

[**[SnippetResponse]**](SnippetResponse.md)


## `updateSnippet`

> SnippetResponse updateSnippet(service_id, version_id, snippet_name)

Update a versioned snippet

Update a specific snippet for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let snippet_name = "snippet_name_example"; // String | 
apiInstance.updateSnippet(service_id, version_id, snippet_name).then((data) => {
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
**snippet_name** | **String** |  |

### Return type

[**SnippetResponse**](SnippetResponse.md)


## `updateSnippetDynamic`

> SnippetResponse updateSnippetDynamic(service_id, snippet_id, opts)

Update a dynamic snippet

Update a dynamic snippet for a particular service.

### Example

```javascript
let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let snippet_id = "snippet_id_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the snippet.
  'dynamic': "dynamic_example", // String | Sets the snippet version.
  'type': "type_example", // String | The location in generated VCL where the snippet should be placed.
  'content': "content_example", // String | The VCL code that specifies exactly what the snippet does.
  'priority': "'100'" // String | Numeric string value. Priority determines execution order. Lower numbers execute first.
};
apiInstance.updateSnippetDynamic(service_id, snippet_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**snippet_id** | **String** |  |
**name** | **String** | The name for the snippet. | [optional]
**dynamic** | **String** | Sets the snippet version. | [optional]
**type** | **String** | The location in generated VCL where the snippet should be placed. | [optional]
**content** | **String** | The VCL code that specifies exactly what the snippet does. | [optional]
**priority** | **String** | Numeric string value. Priority determines execution order. Lower numbers execute first. | [optional] [default to &#39;100&#39;]

### Return type

[**SnippetResponse**](SnippetResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
