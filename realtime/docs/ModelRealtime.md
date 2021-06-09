# RealTimeAnalytics.ModelRealtime

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **Number** | Value to use for subsequent requests. | [optional] 
**aggregateDelay** | **Number** | How long the system will wait before aggregating messages for each second. The most recent data returned will have happened at the moment of the request, minus the aggregation delay. | [optional] 
**data** | [**[RecordDataModel]**](RecordDataModel.md) | A list of [records](#record-data-model), each representing one second of time. | [optional] 


