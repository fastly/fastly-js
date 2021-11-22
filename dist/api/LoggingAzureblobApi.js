"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingAzureblobResponse = _interopRequireDefault(require("../model/LoggingAzureblobResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingAzureblob service.
* @module api/LoggingAzureblobApi
* @version 3.0.0-alpha1
*/
var LoggingAzureblobApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingAzureblobApi. 
  * @alias module:api/LoggingAzureblobApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingAzureblobApi(apiClient) {
    _classCallCheck(this, LoggingAzureblobApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create an Azure Blob Storage logging endpoint for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id - Alphanumeric string identifying the service.
   * @param {Number} options.version_id - Integer identifying a service version.
   * @param {String} [options.name] - The name for the real-time logging configuration.
   * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
   * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
   * @param {module:model/String} [options.message_type='classic'] - How the message should be formatted.
   * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
   * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
   * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
   * @param {module:model/String} [options.compression_codec] - The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \\\"gzip\\\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
   * @param {String} [options.path='null'] - The path to upload logs to.
   * @param {String} [options.account_name] - The unique Azure Blob Storage namespace in which your data objects are stored. Required.
   * @param {String} [options.container] - The name of the Azure Blob Storage container in which to store logs. Required.
   * @param {String} [options.sas_token] - The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
   * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
   * @param {Number} [options.file_max_bytes] - The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingAzureblobResponse} and HTTP response
   */


  _createClass(LoggingAzureblobApi, [{
    key: "createLogAzureWithHttpInfo",
    value: function createLogAzureWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'name': options['name'],
        'placement': options['placement'],
        'format_version': options['format_version'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'message_type': options['message_type'],
        'timestamp_format': options['timestamp_format'],
        'period': options['period'],
        'gzip_level': options['gzip_level'],
        'compression_codec': options['compression_codec'],
        'path': options['path'],
        'account_name': options['account_name'],
        'container': options['container'],
        'sas_token': options['sas_token'],
        'public_key': options['public_key'],
        'file_max_bytes': options['file_max_bytes']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingAzureblobResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/azureblob', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an Azure Blob Storage logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/String} [options.message_type='classic'] - How the message should be formatted.
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/String} [options.compression_codec] - The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \\\"gzip\\\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.account_name] - The unique Azure Blob Storage namespace in which your data objects are stored. Required.
     * @param {String} [options.container] - The name of the Azure Blob Storage container in which to store logs. Required.
     * @param {String} [options.sas_token] - The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {Number} [options.file_max_bytes] - The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingAzureblobResponse}
     */

  }, {
    key: "createLogAzure",
    value: function createLogAzure() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogAzureWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the Azure Blob Storage logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_azureblob_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogAzureWithHttpInfo",
    value: function deleteLogAzureWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_azureblob_name' is set.


      if (options['logging_azureblob_name'] === undefined || options['logging_azureblob_name'] === null) {
        throw new Error("Missing the required parameter 'logging_azureblob_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_azureblob_name': options['logging_azureblob_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the Azure Blob Storage logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_azureblob_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogAzure",
    value: function deleteLogAzure() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogAzureWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the Azure Blob Storage logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_azureblob_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingAzureblobResponse} and HTTP response
     */

  }, {
    key: "getLogAzureWithHttpInfo",
    value: function getLogAzureWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_azureblob_name' is set.


      if (options['logging_azureblob_name'] === undefined || options['logging_azureblob_name'] === null) {
        throw new Error("Missing the required parameter 'logging_azureblob_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_azureblob_name': options['logging_azureblob_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingAzureblobResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the Azure Blob Storage logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_azureblob_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingAzureblobResponse}
     */

  }, {
    key: "getLogAzure",
    value: function getLogAzure() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogAzureWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the Azure Blob Storage logging endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingAzureblobResponse>} and HTTP response
     */

  }, {
    key: "listLogAzureWithHttpInfo",
    value: function listLogAzureWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LoggingAzureblobResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/azureblob', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the Azure Blob Storage logging endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingAzureblobResponse>}
     */

  }, {
    key: "listLogAzure",
    value: function listLogAzure() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogAzureWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the Azure Blob Storage logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_azureblob_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/String} [options.message_type='classic'] - How the message should be formatted.
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/String} [options.compression_codec] - The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \\\"gzip\\\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.account_name] - The unique Azure Blob Storage namespace in which your data objects are stored. Required.
     * @param {String} [options.container] - The name of the Azure Blob Storage container in which to store logs. Required.
     * @param {String} [options.sas_token] - The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {Number} [options.file_max_bytes] - The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingAzureblobResponse} and HTTP response
     */

  }, {
    key: "updateLogAzureWithHttpInfo",
    value: function updateLogAzureWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_azureblob_name' is set.


      if (options['logging_azureblob_name'] === undefined || options['logging_azureblob_name'] === null) {
        throw new Error("Missing the required parameter 'logging_azureblob_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_azureblob_name': options['logging_azureblob_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'name': options['name'],
        'placement': options['placement'],
        'format_version': options['format_version'],
        'response_condition': options['response_condition'],
        'format': options['format'],
        'message_type': options['message_type'],
        'timestamp_format': options['timestamp_format'],
        'period': options['period'],
        'gzip_level': options['gzip_level'],
        'compression_codec': options['compression_codec'],
        'path': options['path'],
        'account_name': options['account_name'],
        'container': options['container'],
        'sas_token': options['sas_token'],
        'public_key': options['public_key'],
        'file_max_bytes': options['file_max_bytes']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingAzureblobResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the Azure Blob Storage logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_azureblob_name - The name for the real-time logging configuration.
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/String} [options.placement] - Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
     * @param {module:model/Number} [options.format_version=FormatVersionEnum.v2] - The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/String} [options.message_type='classic'] - How the message should be formatted.
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/String} [options.compression_codec] - The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \\\"gzip\\\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.account_name] - The unique Azure Blob Storage namespace in which your data objects are stored. Required.
     * @param {String} [options.container] - The name of the Azure Blob Storage container in which to store logs. Required.
     * @param {String} [options.sas_token] - The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {Number} [options.file_max_bytes] - The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingAzureblobResponse}
     */

  }, {
    key: "updateLogAzure",
    value: function updateLogAzure() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogAzureWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingAzureblobApi;
}();

exports["default"] = LoggingAzureblobApi;