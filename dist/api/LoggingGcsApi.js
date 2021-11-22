"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingGcsResponse = _interopRequireDefault(require("../model/LoggingGcsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingGcs service.
* @module api/LoggingGcsApi
* @version 3.0.0-alpha1
*/
var LoggingGcsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingGcsApi. 
  * @alias module:api/LoggingGcsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingGcsApi(apiClient) {
    _classCallCheck(this, LoggingGcsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create GCS logging for a particular service and version.
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
   * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
   * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
   * @param {String} [options.bucket_name] - The name of the GCS bucket.
   * @param {String} [options.path]
   * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingGcsResponse} and HTTP response
   */


  _createClass(LoggingGcsApi, [{
    key: "createLogGcsWithHttpInfo",
    value: function createLogGcsWithHttpInfo() {
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
        'user': options['user'],
        'secret_key': options['secret_key'],
        'bucket_name': options['bucket_name'],
        'path': options['path'],
        'public_key': options['public_key']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingGcsResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/gcs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create GCS logging for a particular service and version.
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
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
     * @param {String} [options.bucket_name] - The name of the GCS bucket.
     * @param {String} [options.path]
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingGcsResponse}
     */

  }, {
    key: "createLogGcs",
    value: function createLogGcs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogGcsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the GCS Logging for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_gcs_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogGcsWithHttpInfo",
    value: function deleteLogGcsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_gcs_name' is set.


      if (options['logging_gcs_name'] === undefined || options['logging_gcs_name'] === null) {
        throw new Error("Missing the required parameter 'logging_gcs_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_gcs_name': options['logging_gcs_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/gcs/{logging_gcs_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the GCS Logging for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_gcs_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogGcs",
    value: function deleteLogGcs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogGcsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the GCS Logging for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_gcs_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingGcsResponse} and HTTP response
     */

  }, {
    key: "getLogGcsWithHttpInfo",
    value: function getLogGcsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_gcs_name' is set.


      if (options['logging_gcs_name'] === undefined || options['logging_gcs_name'] === null) {
        throw new Error("Missing the required parameter 'logging_gcs_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_gcs_name': options['logging_gcs_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingGcsResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/gcs/{logging_gcs_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the GCS Logging for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_gcs_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingGcsResponse}
     */

  }, {
    key: "getLogGcs",
    value: function getLogGcs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogGcsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the GCS log endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingGcsResponse>} and HTTP response
     */

  }, {
    key: "listLogGcsWithHttpInfo",
    value: function listLogGcsWithHttpInfo() {
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
      var returnType = [_LoggingGcsResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/gcs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the GCS log endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingGcsResponse>}
     */

  }, {
    key: "listLogGcs",
    value: function listLogGcs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogGcsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the GCS for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_gcs_name - The name for the real-time logging configuration.
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
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
     * @param {String} [options.bucket_name] - The name of the GCS bucket.
     * @param {String} [options.path]
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingGcsResponse} and HTTP response
     */

  }, {
    key: "updateLogGcsWithHttpInfo",
    value: function updateLogGcsWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_gcs_name' is set.


      if (options['logging_gcs_name'] === undefined || options['logging_gcs_name'] === null) {
        throw new Error("Missing the required parameter 'logging_gcs_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_gcs_name': options['logging_gcs_name']
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
        'user': options['user'],
        'secret_key': options['secret_key'],
        'bucket_name': options['bucket_name'],
        'path': options['path'],
        'public_key': options['public_key']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingGcsResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/gcs/{logging_gcs_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the GCS for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_gcs_name - The name for the real-time logging configuration.
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
     * @param {String} [options.user] - Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
     * @param {String} [options.secret_key] - Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
     * @param {String} [options.bucket_name] - The name of the GCS bucket.
     * @param {String} [options.path]
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingGcsResponse}
     */

  }, {
    key: "updateLogGcs",
    value: function updateLogGcs() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogGcsWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingGcsApi;
}();

exports["default"] = LoggingGcsApi;