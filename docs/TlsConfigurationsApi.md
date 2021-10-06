# Fastly.TlsConfigurationsApi


```javascript
const apiInstance = new Fastly.TlsConfigurationsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getTlsConfig**](TlsConfigurationsApi.md#getTlsConfig) | **GET** /tls/configurations/{tls_configuration_id} | Get a TLS configuration
[**listTlsConfigs**](TlsConfigurationsApi.md#listTlsConfigs) | **GET** /tls/configurations | List TLS configurations
[**updateTlsConfig**](TlsConfigurationsApi.md#updateTlsConfig) | **PATCH** /tls/configurations/{tls_configuration_id} | Update a TLS configuration



## `getTlsConfig`

```javascript
getTlsConfig({ tls_configuration_id, [include] })
```

Show a TLS configuration.

### Example

```javascript
const options = {
  tls_configuration_id: "tls_configuration_id_example", // required
  include: dns_records,
};

apiInstance.getTlsConfig(options)
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
**tls_configuration_id** | **String** |  |
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: &#x60;dns_records&#x60;.  | [optional]

### Return type

[**TlsConfigurationResponse**](TlsConfigurationResponse.md)


## `listTlsConfigs`

```javascript
listTlsConfigs({ [filter_bulk, ][include, ][page_number, ][page_size] })
```

List all TLS configurations.

### Example

```javascript
const options = {
  filter_bulk: "filter_bulk_example",
  include: dns_records,
  page_number: 56,
  page_size: 20,
};

apiInstance.listTlsConfigs(options)
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
**filter_bulk** | **String** | Optionally filters by the bulk attribute. | [optional]
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: &#x60;dns_records&#x60;.  | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]

### Return type

[**Pagination**](Pagination.md)


## `updateTlsConfig`

```javascript
updateTlsConfig({ tls_configuration_id, [tls_configuration] })
```

Update a TLS configuration.

### Example

```javascript
const options = {
  tls_configuration_id: "tls_configuration_id_example", // required
  tls_configuration: new Fastly.TlsConfiguration(),
};

apiInstance.updateTlsConfig(options)
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
**tls_configuration_id** | **String** |  |
**tls_configuration** | [**TlsConfiguration**](../Model/TlsConfiguration.md) |  | [optional]

### Return type

[**TlsConfigurationResponse**](TlsConfigurationResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
