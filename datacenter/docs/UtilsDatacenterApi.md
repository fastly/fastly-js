# Datacenter.UtilsDatacenterApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listDatacenters**](UtilsDatacenterApi.md#listDatacenters) | **GET** /datacenters | List Fastly datacenters



## listDatacenters

> listDatacenters()

List Fastly datacenters

Get a list of all Fastly datacenters (POPs).

### Example

```javascript
import Datacenter from 'datacenter';
let defaultClient = Datacenter.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Datacenter.UtilsDatacenterApi();
apiInstance.listDatacenters().then(() => {
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

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

