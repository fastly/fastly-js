# FastlyApi.ModelBillingTotal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth** | **Number** | The total amount of bandwidth used this month (See bandwidth_units for measurement). | [optional] 
**bandwidth_cost** | **Number** | The cost of the bandwidth used this month in USD. | [optional] 
**bandwidth_units** | **String** | Bandwidth measurement units based on billing plan. | [optional] 
**cost** | **Number** | The final amount to be paid. | [optional] 
**cost_before_discount** | **Number** | Total incurred cost plus extras cost. | [optional] 
**discount** | **Number** | Calculated discount rate. | [optional] 
**extras** | [**[ModelBillingTotalExtras]**](ModelBillingTotalExtras.md) | A list of any extras for this invoice. | [optional] 
**extras_cost** | **Number** | Total cost of all extras. | [optional] 
**incurred_cost** | **Number** | The total cost of bandwidth and requests used this month. | [optional] 
**overage** | **Number** | How much over the plan minimum has been incurred. | [optional] 
**plan_code** | **String** | The short code the plan this invoice was generated under. | [optional] 
**plan_minimum** | **Number** | The minimum cost of this plan. | [optional] 
**plan_name** | **String** | The name of the plan this invoice was generated under. | [optional] 
**requests** | **Number** | The total number of requests used this month. | [optional] 
**requests_cost** | **Number** | The cost of the requests used this month. | [optional] 
**terms** | **String** | Payment terms. Almost always Net15. | [optional] 


