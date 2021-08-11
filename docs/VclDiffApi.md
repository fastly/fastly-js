# FastlyApi.VclDiffApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**vclDiffServiceVersions**](VclDiffApi.md#vclDiffServiceVersions) | **GET** /service/{service_id}/vcl/diff/from/{from_version_id}/to/{to_version_id} | Get a comparison of the VCL changes between two service versions



## `vclDiffServiceVersions`

> VclDiff vclDiffServiceVersions(service_id, from_version_id, to_version_id, opts)

Get a comparison of the VCL changes between two service versions

Get a comparison of the VCL changes between two service versions.

### Example

```javascript
let apiInstance = new FastlyApi.VclDiffApi();
let service_id = "service_id_example"; // String | 
let from_version_id = 1; // Number | The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc).
let to_version_id = 2; // Number | The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as `from`.
let opts = {
  'format': "'text'" // String | Optional method to format the diff field.
};
apiInstance.vclDiffServiceVersions(service_id, from_version_id, to_version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**from_version_id** | **Number** | The version number of the service to which changes in the generated VCL are being compared. Can either be a positive number from 1 to your maximum version or a negative number from -1 down (-1 is latest version etc). |
**to_version_id** | **Number** | The version number of the service from which changes in the generated VCL are being compared. Uses same numbering scheme as &#x60;from&#x60;. |
**format** | **String** | Optional method to format the diff field. | [optional] [default to &#39;text&#39;]

### Return type

[**VclDiff**](VclDiff.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
