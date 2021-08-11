# FastlyApi.PublicIpListApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**listFastlyIps**](PublicIpListApi.md#listFastlyIps) | **GET** /public-ip-list | List Fastly&#39;s public IPs



## `listFastlyIps`

> PublicIpList listFastlyIps()

List Fastly&#39;s public IPs

List the public IP addresses for the Fastly network.

### Example

```javascript
let apiInstance = new FastlyApi.PublicIpListApi();
apiInstance.listFastlyIps().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameters.

### Return type

[**PublicIpList**](PublicIpList.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
