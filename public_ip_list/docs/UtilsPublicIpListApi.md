# PublicIpList.UtilsPublicIpListApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listFastlyIps**](UtilsPublicIpListApi.md#listFastlyIps) | **GET** /public-ip-list | List Fastly&#39;s public IPs



## listFastlyIps

> listFastlyIps()

List Fastly&#39;s public IPs

List the public IP addresses for the Fastly network.

### Example

```javascript
import PublicIpList from 'public_ip_list';

let apiInstance = new PublicIpList.UtilsPublicIpListApi();
apiInstance.listFastlyIps().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

