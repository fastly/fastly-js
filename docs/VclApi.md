# FastlyApi.VclApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createCustomVcl**](VclApi.md#createCustomVcl) | **POST** /service/{service_id}/version/{version_id}/vcl | Create a custom VCL file
[**deleteCustomVcl**](VclApi.md#deleteCustomVcl) | **DELETE** /service/{service_id}/version/{version_id}/vcl/{vcl_name} | Delete a custom VCL file
[**getCustomVcl**](VclApi.md#getCustomVcl) | **GET** /service/{service_id}/version/{version_id}/vcl/{vcl_name} | Get a custom VCL file
[**getCustomVclBoilerplate**](VclApi.md#getCustomVclBoilerplate) | **GET** /service/{service_id}/version/{version_id}/boilerplate | Get boilerplate VCL
[**getCustomVclGenerated**](VclApi.md#getCustomVclGenerated) | **GET** /service/{service_id}/version/{version_id}/generated_vcl | Get the generated VCL for a service
[**getCustomVclGeneratedHighlighted**](VclApi.md#getCustomVclGeneratedHighlighted) | **GET** /service/{service_id}/version/{version_id}/generated_vcl/content | Get the generated VCL with syntax highlighting
[**getCustomVclHighlighted**](VclApi.md#getCustomVclHighlighted) | **GET** /service/{service_id}/version/{version_id}/vcl/{vcl_name}/content | Get a custom VCL file with syntax highlighting
[**getCustomVclRaw**](VclApi.md#getCustomVclRaw) | **GET** /service/{service_id}/version/{version_id}/vcl/{vcl_name}/download | Download a custom VCL file
[**listCustomVcl**](VclApi.md#listCustomVcl) | **GET** /service/{service_id}/version/{version_id}/vcl | List custom VCL files
[**setCustomVclMain**](VclApi.md#setCustomVclMain) | **PUT** /service/{service_id}/version/{version_id}/vcl/{vcl_name}/main | Set a custom VCL file as main
[**updateCustomVcl**](VclApi.md#updateCustomVcl) | **PUT** /service/{service_id}/version/{version_id}/vcl/{vcl_name} | Update a custom VCL file



## `createCustomVcl`

> VclResponse createCustomVcl(service_id, version_id, opts)

Create a custom VCL file

Upload a VCL for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'content': "content_example", // String | The VCL code to be included.
  'main': true, // Boolean | Set to `true` when this is the main VCL, otherwise `false`.
  'name': "name_example" // String | The name of this VCL.
};
apiInstance.createCustomVcl(service_id, version_id, opts).then((data) => {
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
**content** | **String** | The VCL code to be included. | [optional]
**main** | **Boolean** | Set to &#x60;true&#x60; when this is the main VCL, otherwise &#x60;false&#x60;. | [optional]
**name** | **String** | The name of this VCL. | [optional]

### Return type

[**VclResponse**](VclResponse.md)


## `deleteCustomVcl`

> Object deleteCustomVcl(service_id, version_id, vcl_name)

Delete a custom VCL file

Delete the uploaded VCL for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
apiInstance.deleteCustomVcl(service_id, version_id, vcl_name).then((data) => {
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
**vcl_name** | **String** |  |

### Return type

**Object**


## `getCustomVcl`

> VclResponse getCustomVcl(service_id, version_id, vcl_name, opts)

Get a custom VCL file

Get the uploaded VCL for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
let opts = {
  'no_content': "'0'" // String | Omit VCL content.
};
apiInstance.getCustomVcl(service_id, version_id, vcl_name, opts).then((data) => {
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
**vcl_name** | **String** |  |
**no_content** | **String** | Omit VCL content. | [optional] [default to &#39;0&#39;]

### Return type

[**VclResponse**](VclResponse.md)


## `getCustomVclBoilerplate`

> String getCustomVclBoilerplate(service_id, version_id)

Get boilerplate VCL

Return boilerplate VCL with the service's TTL from the [settings](/reference/api/vcl-services/settings/).

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getCustomVclBoilerplate(service_id, version_id).then((data) => {
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

**String**


## `getCustomVclGenerated`

> VclResponse getCustomVclGenerated(service_id, version_id)

Get the generated VCL for a service

Display the generated VCL for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getCustomVclGenerated(service_id, version_id).then((data) => {
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

[**VclResponse**](VclResponse.md)


## `getCustomVclGeneratedHighlighted`

> getCustomVclGeneratedHighlighted(service_id, version_id)

Get the generated VCL with syntax highlighting

Display the content of generated VCL with HTML syntax highlighting. Include line numbers by sending `lineno=true` as a request parameter.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getCustomVclGeneratedHighlighted(service_id, version_id).then(() => {
  console.log('API called successfully.');
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

null (empty response body)


## `getCustomVclHighlighted`

> getCustomVclHighlighted(service_id, version_id, vcl_name)

Get a custom VCL file with syntax highlighting

Get the uploaded VCL for a particular service and version with HTML syntax highlighting. Include line numbers by sending `lineno=true` as a request parameter.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
apiInstance.getCustomVclHighlighted(service_id, version_id, vcl_name).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**vcl_name** | **String** |  |

### Return type

null (empty response body)


## `getCustomVclRaw`

> String getCustomVclRaw(service_id, version_id, vcl_name)

Download a custom VCL file

Download the specified VCL.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
apiInstance.getCustomVclRaw(service_id, version_id, vcl_name).then((data) => {
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
**vcl_name** | **String** |  |

### Return type

**String**


## `listCustomVcl`

> [VclResponse] listCustomVcl(service_id, version_id)

List custom VCL files

List the uploaded VCLs for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listCustomVcl(service_id, version_id).then((data) => {
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

[**[VclResponse]**](VclResponse.md)


## `setCustomVclMain`

> VclResponse setCustomVclMain(service_id, version_id, vcl_name)

Set a custom VCL file as main

Set the specified VCL as the main.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
apiInstance.setCustomVclMain(service_id, version_id, vcl_name).then((data) => {
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
**vcl_name** | **String** |  |

### Return type

[**VclResponse**](VclResponse.md)


## `updateCustomVcl`

> VclResponse updateCustomVcl(service_id, version_id, vcl_name, opts)

Update a custom VCL file

Update the uploaded VCL for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
let opts = {
  'content': "content_example", // String | The VCL code to be included.
  'main': true, // Boolean | Set to `true` when this is the main VCL, otherwise `false`.
  'name': "name_example" // String | The name of this VCL.
};
apiInstance.updateCustomVcl(service_id, version_id, vcl_name, opts).then((data) => {
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
**vcl_name** | **String** |  |
**content** | **String** | The VCL code to be included. | [optional]
**main** | **Boolean** | Set to &#x60;true&#x60; when this is the main VCL, otherwise &#x60;false&#x60;. | [optional]
**name** | **String** | The name of this VCL. | [optional]

### Return type

[**VclResponse**](VclResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
