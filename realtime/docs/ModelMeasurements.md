# RealTimeAnalytics.ModelMeasurements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Whether or not we were able to successfully execute the query. | [optional] 
**meta** | **Object** | Meta information about the scope of the query in a human readable format. | [optional] 
**msg** | **String** | If the query was not successful, this will provide a string that explains why. | [optional] 
**data** | **Object** | The [results](#results-data-model) of the query, grouped by service (and optionally, region), and aggregated over the appropriate time span. | [optional] 


