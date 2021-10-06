# Fastly.Realtime

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_delay** | **Number** | How long the system will wait before aggregating messages for each second. The most recent data returned will have happened at the moment of the request, minus the aggregation delay. | [optional] 
**data** | [**[RealtimeEntry]**](RealtimeEntry.md) | A list of [records](#record-data-model), each representing one second of time. | [optional] 
**timestamp** | **Number** | Unix epoch timestamp. | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
