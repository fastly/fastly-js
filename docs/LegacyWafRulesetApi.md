# Fastly.LegacyWafRulesetApi

```javascript
const apiInstance = new Fastly.LegacyWafRulesetApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getWafRuleset**](LegacyWafRulesetApi.md#getWafRuleset) | **GET** /service/{service_id}/wafs/{firewall_id}/ruleset | Get a WAF ruleset
[**getWafRulesetVcl**](LegacyWafRulesetApi.md#getWafRulesetVcl) | **GET** /service/{service_id}/wafs/{firewall_id}/ruleset/preview | Generate WAF ruleset VCL
[**updateWafRuleset**](LegacyWafRulesetApi.md#updateWafRuleset) | **PATCH** /service/{service_id}/wafs/{firewall_id}/ruleset | Update a WAF ruleset


## `getWafRuleset`

```javascript
getWafRuleset({ service_id, firewall_id })
```

Get a WAF ruleset for a particular service and firewall object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
};

apiInstance.getWafRuleset(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** | Alphanumeric string identifying the service. |
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |

### Return type

**Object**


## `getWafRulesetVcl`

```javascript
getWafRulesetVcl({ service_id, firewall_id })
```

Get a preview of the WAF ruleset VCL for a particular service and firewall object based on changes to WAF configuration before deploying the ruleset. The response will include a link to status of the background VCL generation job. Once the background job is completed, the preview WAF ruleset VCL can be retrieved from the status response.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
};

apiInstance.getWafRulesetVcl(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** | Alphanumeric string identifying the service. |
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |

### Return type

**Object**


## `updateWafRuleset`

```javascript
updateWafRuleset({ service_id, firewall_id, [request_body] })
```

Update the WAF ruleset for a particular service and firewall object. Use the URL in the response to view the WAF ruleset deploy status.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
  request_body: {"data":{"id":"r5TguUGZzb2W9EuF4mo0N","type":"ruleset"}},
};

apiInstance.updateWafRuleset(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** | Alphanumeric string identifying the service. |
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
