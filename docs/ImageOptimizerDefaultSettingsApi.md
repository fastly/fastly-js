# Fastly.ImageOptimizerDefaultSettingsApi

```javascript
const apiInstance = new Fastly.ImageOptimizerDefaultSettingsApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**getDefaultSettings**](ImageOptimizerDefaultSettingsApi.md#getDefaultSettings) | **GET** /service/{service_id}/version/{version_id}/image_optimizer_default_settings | Get current Image Optimizer Default Settings
[**updateDefaultSettings**](ImageOptimizerDefaultSettingsApi.md#updateDefaultSettings) | **PATCH** /service/{service_id}/version/{version_id}/image_optimizer_default_settings | Update Image Optimizer Default Settings


## `getDefaultSettings`

```javascript
getDefaultSettings({ service_id, version_id })
```

Retrieve the current Image Optimizer default settings. All properties in the response will be populated. 

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.getDefaultSettings(options)
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
**version_id** | **Number** | Integer identifying a service version. |

### Return type

[**DefaultSettingsResponse**](DefaultSettingsResponse.md)


## `updateDefaultSettings`

```javascript
updateDefaultSettings({ service_id, version_id, [default_settings] })
```

Update one or more default settings. A minimum of one property is required. The endpoint will respond with the new Image Optimizer default settings, with all properties populated. 

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  default_settings: {"type":"object","properties":{"resize_filter":{"type":"string","enum":["lanczos3","lanczos2","bicubic","bilinear","nearest"],"default":"lanczos3","description":"The type of filter to use while resizing an image.","x-enum-descriptions":["A Lanczos filter with a kernel size of 3. Lanczos filters can detect edges and linear features within an image, providing the best possible reconstruction.","A Lanczos filter with a kernel size of 2.","A filter using an average of a 4x4 environment of pixels, weighing the innermost pixels higher.","A filter using an average of a 2x2 environment of pixels.","A filter using the value of nearby translated pixel values. Preserves hard edges."]},"webp":{"type":"boolean","default":false,"description":"Controls whether or not to default to WebP output when the client supports it. This is equivalent to adding \"auto=webp\" to all image optimizer requests.\n"},"webp_quality":{"type":"integer","minimum":1,"maximum":100,"default":85,"description":"The default quality to use with WebP output. This can be overridden with the second option in the \"quality\" URL parameter on specific image optimizer requests.\n"},"jpeg_type":{"type":"string","enum":["auto","baseline","progressive"],"default":"auto","description":"The default type of JPEG output to use. This can be overridden with \"format=bjpeg\" and \"format=pjpeg\" on specific image optimizer requests.\n","x-enum-descriptions":["Match the input JPEG type, or baseline if transforming from a non-JPEG input.","Output baseline JPEG images","Output progressive JPEG images"]},"jpeg_quality":{"type":"integer","minimum":1,"maximum":100,"default":85,"description":"The default quality to use with JPEG output. This can be overridden with the \"quality\" parameter on specific image optimizer requests.\n"},"upscale":{"type":"boolean","default":false,"description":"Whether or not we should allow output images to render at sizes larger than input.\n"},"allow_video":{"type":"boolean","default":false,"description":"Enables GIF to MP4 transformations on this service."}}},
};

apiInstance.updateDefaultSettings(options)
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
**version_id** | **Number** | Integer identifying a service version. |
**default_settings** | [**DefaultSettings**](DefaultSettings.md) |  | [optional]

### Return type

[**DefaultSettingsResponse**](DefaultSettingsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
