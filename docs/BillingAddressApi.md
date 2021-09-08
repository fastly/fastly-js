# Fastly.BillingAddressApi


```javascript
const apiInstance = new Fastly.BillingAddressApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**addBillingAddr**](BillingAddressApi.md#addBillingAddr) | **POST** /customer/{customer_id}/billing_address | Add a billing address to a customer
[**deleteBillingAddr**](BillingAddressApi.md#deleteBillingAddr) | **DELETE** /customer/{customer_id}/billing_address | Delete a billing address
[**getBillingAddr**](BillingAddressApi.md#getBillingAddr) | **GET** /customer/{customer_id}/billing_address | Get a billing address
[**updateBillingAddr**](BillingAddressApi.md#updateBillingAddr) | **PATCH** /customer/{customer_id}/billing_address | Update a billing address



## `addBillingAddr`

```javascript
addBillingAddr({ customer_id, [inline_object] })
```

Add a billing address to a customer.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required

  inline_object: new Fastly.InlineObject(),
};

apiInstance.addBillingAddr(options)
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
**customer_id** | **String** |  |
**inline_object** | [**InlineObject**](../Model/InlineObject.md) |  | [optional]

### Return type

[**BillingAddressResponse**](BillingAddressResponse.md)


## `deleteBillingAddr`

```javascript
deleteBillingAddr({ customer_id })
```

Delete a customer's billing address.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required
};

apiInstance.deleteBillingAddr(options)
  .then(() => {
    console.log('API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  |

### Return type

null (empty response body)


## `getBillingAddr`

```javascript
getBillingAddr({ customer_id })
```

Get a customer's billing address.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required
};

apiInstance.getBillingAddr(options)
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
**customer_id** | **String** |  |

### Return type

[**BillingAddressResponse**](BillingAddressResponse.md)


## `updateBillingAddr`

```javascript
updateBillingAddr({ customer_id, [inline_object1] })
```

Update a customer's billing address. You may update only part of the customer's billing address.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required

  inline_object1: new Fastly.InlineObject1(),
};

apiInstance.updateBillingAddr(options)
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
**customer_id** | **String** |  |
**inline_object1** | [**InlineObject1**](../Model/InlineObject1.md) |  | [optional]

### Return type

[**BillingAddressResponse**](BillingAddressResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
