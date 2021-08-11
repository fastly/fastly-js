# FastlyApi.AclEntryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negated** | **Number** | Whether to negate the match. Useful primarily when creating individual exceptions to larger subnets. | [optional] [default to NegatedEnum.0]
**comment** | **String** | A freeform descriptive note. | [optional] 
**ip** | **String** | An IP address. | [optional] 
**subnet** | **Number** | Number of bits for the subnet mask applied to the IP address.  For IPv4 addresses, a value of 32 represents the smallest subnet mask (1 address), 24 represents a class C subnet mask (256 addresses), 16 represents a class B subnet mask (65k addresses),  and 8 is class A subnet mask (16m addresses). If not provided, no mask is applied. | [optional] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**acl_id** | **String** | Alphanumeric string identifying a ACL. | [optional] [readonly] 
**id** | **String** | Alphanumeric string identifying an ACL Entry. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 



## Enum: NegatedEnum


* `0` (value: `0`)

* `1` (value: `1`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
