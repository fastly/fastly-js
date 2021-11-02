# Fastly.BillingEstimateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**start_time** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**invoice_id** | **String** | Alphanumeric string identifying the invoice. | [optional] [readonly] 
**customer_id** | **String** | Alphanumeric string identifying the customer. | [optional] [readonly] 
**status** | [**BillingStatus**](BillingStatus.md) |  | [optional] 
**total** | [**BillingTotal**](BillingTotal.md) |  | [optional] 
**regions** | **{String: {String: Object}}** |  | [optional] 
**lines** | [**[BillingEstimateResponseAllOfLines]**](BillingEstimateResponseAllOfLines.md) |  | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
