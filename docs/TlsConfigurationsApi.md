# FastlyApi.TlsConfigurationsApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getTlsConfig**](TlsConfigurationsApi.md#getTlsConfig) | **GET** /tls/configurations/{tls_configuration_id} | Get a TLS configuration
[**listTlsConfigs**](TlsConfigurationsApi.md#listTlsConfigs) | **GET** /tls/configurations | List TLS configurations
[**updateTlsConfig**](TlsConfigurationsApi.md#updateTlsConfig) | **PATCH** /tls/configurations/{tls_configuration_id} | Update a TLS configuration



## `getTlsConfig`

> TlsConfigurationResponse getTlsConfig(tls_configuration_id, opts)

Get a TLS configuration

Show a TLS configuration.

### Example

```javascript
let apiInstance = new FastlyApi.TlsConfigurationsApi();
let tls_configuration_id = "tls_configuration_id_example"; // String | 
let opts = {
  'include': dns_records // String | Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
};
apiInstance.getTlsConfig(tls_configuration_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_configuration_id** | **String** |  |
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: &#x60;dns_records&#x60;.  | [optional]

### Return type

[**TlsConfigurationResponse**](TlsConfigurationResponse.md)


## `listTlsConfigs`

> TlsConfigurationsResponse listTlsConfigs(opts)

List TLS configurations

List all TLS configurations.

### Example

```javascript
let apiInstance = new FastlyApi.TlsConfigurationsApi();
let opts = {
  'filter_bulk': "filter_bulk_example", // String | Optionally filters by the bulk attribute.
  'include': dns_records, // String | Include related objects. Optional, comma-separated values. Permitted values: `dns_records`. 
  'page_number': 56, // Number | Current page.
  'page_size': 20 // Number | Number of records per page.
};
apiInstance.listTlsConfigs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filter_bulk** | **String** | Optionally filters by the bulk attribute. | [optional]
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: &#x60;dns_records&#x60;.  | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]

### Return type

[**TlsConfigurationsResponse**](TlsConfigurationsResponse.md)


## `updateTlsConfig`

> TlsConfigurationResponse updateTlsConfig(tls_configuration_id, opts)

Update a TLS configuration

Update a TLS configuration.

### Example

```javascript
let apiInstance = new FastlyApi.TlsConfigurationsApi();
let tls_configuration_id = "tls_configuration_id_example"; // String | 
let opts = {
  'tls_configuration': {"data":{"type":"tls_configuration","attributes":{"name":"New TLS configuration name"}}} // TlsConfiguration | 
};
apiInstance.updateTlsConfig(tls_configuration_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_configuration_id** | **String** |  |
**tls_configuration** | [**TlsConfiguration**](../Model/TlsConfiguration.md) |  | [optional]

### Return type

[**TlsConfigurationResponse**](TlsConfigurationResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
