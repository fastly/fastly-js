# Fastly.GetLogRecordsResponseMetaFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_id** | **String** | Specifies the ID of the service for which data should be returned. | [optional] 
**start** | **String** | Start time for the query as supplied in the request. | [optional] 
**end** | **String** | End time for the query as supplied in the request. | [optional] 
**domain_exact_match** | **Boolean** | Value of the `domain_exact_match` filter as supplied in the request. | [optional] 
**limit** | **Number** | Number of records per page. | [optional]  [defaults to 20]
**next_cursor** | **String** | A cursor to specify the next page of results, if any. | [optional] 
**filter_fields** | [**[FilterFieldItem]**](FilterFieldItem.md) |  | [optional] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)