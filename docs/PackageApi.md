# FastlyApi.PackageApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getPackage**](PackageApi.md#getPackage) | **GET** /service/{service_id}/version/{version_id}/package | Get details of the service&#39;s Compute@Edge package.
[**putPackage**](PackageApi.md#putPackage) | **PUT** /service/{service_id}/version/{version_id}/package | Upload a Compute@Edge package.



## `getPackage`

> getPackage(service_id, version_id)

Get details of the service&#39;s Compute@Edge package.

List detailed information about the Compute@Edge package for the specified service.

### Example

```javascript
let apiInstance = new FastlyApi.PackageApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getPackage(service_id, version_id).then((data) => {
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

[**PackageResponse**](PackageResponse.md)


## `putPackage`

> putPackage(service_id, version_id, opts)

Upload a Compute@Edge package.

Upload a Compute@Edge package associated with the specified service version.

### Example

```javascript
let apiInstance = new FastlyApi.PackageApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'expect': 100-continue, // String | We recommend using the Expect header because it may identify issues with the request based upon the headers alone instead of requiring you to wait until the entire binary package upload has completed.
  '_package': "/path/to/file" // File | The content of the Wasm binary package.
};
apiInstance.putPackage(service_id, version_id, opts).then((data) => {
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
**expect** | **String** | We recommend using the Expect header because it may identify issues with the request based upon the headers alone instead of requiring you to wait until the entire binary package upload has completed. | [optional]
**_package** | **File****File** | The content of the Wasm binary package. | [optional]

### Return type

[**PackageResponse**](PackageResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
