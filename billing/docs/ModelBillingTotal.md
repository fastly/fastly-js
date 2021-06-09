# Billing.ModelBillingTotal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth** | **Number** | The total amount of bandwidth used this month (See bandwidth_units for measurement). | [optional] 
**bandwidthCost** | **Number** | The cost of the bandwidth used this month in USD. | [optional] 
**bandwidthUnits** | **String** | Bandwidth measurement units based on billing plan. | [optional] 
**cost** | **Number** | The final amount to be paid. | [optional] 
**costBeforeDiscount** | **Number** | Total incurred cost plus extras cost. | [optional] 
**discount** | **Number** | Calculated discount rate. | [optional] 
**extras** | [**[ModelBillingTotalExtras]**](ModelBillingTotalExtras.md) | A list of any extras for this invoice. | [optional] 
**extrasCost** | **Number** | Total cost of all extras. | [optional] 
**incurredCost** | **Number** | The total cost of bandwidth and requests used this month. | [optional] 
**overage** | **Number** | How much over the plan minimum has been incurred. | [optional] 
**planCode** | **String** | The short code the plan this invoice was generated under. | [optional] 
**planMinimum** | **Number** | The minimum cost of this plan. | [optional] 
**planName** | **String** | The name of the plan this invoice was generated under. | [optional] 
**requests** | **Number** | The total number of requests used this month. | [optional] 
**requestsCost** | **Number** | The cost of the requests used this month. | [optional] 
**terms** | **String** | Payment terms. Almost always Net15. | [optional] 


