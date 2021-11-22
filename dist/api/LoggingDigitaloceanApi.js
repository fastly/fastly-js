"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingDigitaloceanResponse = _interopRequireDefault(require("../model/LoggingDigitaloceanResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingDigitalocean service.
* @module api/LoggingDigitaloceanApi
* @version 3.0.0-alpha1
*/
var LoggingDigitaloceanApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingDigitaloceanApi. 
  * @alias module:api/LoggingDigitaloceanApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingDigitaloceanApi(apiClient) {
    _classCallCheck(this, LoggingDigitaloceanApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a DigitalOcean Space for a particular service and version.
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
   * @param {String} [options.bucket_name] - The name of the DigitalOcean Space.
   * @param {String} [options.access_key] - Your DigitalOcean Spaces account access key.
   * @param {String} [options.secret_key] - Your DigitalOcean Spaces account secret key.
   * @param {String} [options.domain='nyc3.digitaloceanspaces.com'] - The domain of the DigitalOcean Spaces endpoint.
   * @param {String} [options.path='null'] - The path to upload logs to.
   * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingDigitaloceanResponse} and HTTP response
   */


  _createClass(LoggingDigitaloceanApi, [{
    key: "createLogDigoceanWithHttpInfo",
    value: function createLogDigoceanWithHttpInfo() {
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
        'bucket_name': options['bucket_name'],
        'access_key': options['access_key'],
        'secret_key': options['secret_key'],
        'domain': options['domain'],
        'path': options['path'],
        'public_key': options['public_key']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingDigitaloceanResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/digitalocean', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a DigitalOcean Space for a particular service and version.
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
     * @param {String} [options.bucket_name] - The name of the DigitalOcean Space.
     * @param {String} [options.access_key] - Your DigitalOcean Spaces account access key.
     * @param {String} [options.secret_key] - Your DigitalOcean Spaces account secret key.
     * @param {String} [options.domain='nyc3.digitaloceanspaces.com'] - The domain of the DigitalOcean Spaces endpoint.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingDigitaloceanResponse}
     */

  }, {
    key: "createLogDigocean",
    value: function createLogDigocean() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogDigoceanWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_digitalocean_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogDigoceanWithHttpInfo",
    value: function deleteLogDigoceanWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_digitalocean_name' is set.


      if (options['logging_digitalocean_name'] === undefined || options['logging_digitalocean_name'] === null) {
        throw new Error("Missing the required parameter 'logging_digitalocean_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_digitalocean_name': options['logging_digitalocean_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_digitalocean_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogDigocean",
    value: function deleteLogDigocean() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogDigoceanWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_digitalocean_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingDigitaloceanResponse} and HTTP response
     */

  }, {
    key: "getLogDigoceanWithHttpInfo",
    value: function getLogDigoceanWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_digitalocean_name' is set.


      if (options['logging_digitalocean_name'] === undefined || options['logging_digitalocean_name'] === null) {
        throw new Error("Missing the required parameter 'logging_digitalocean_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_digitalocean_name': options['logging_digitalocean_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingDigitaloceanResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_digitalocean_name - The name for the real-time logging configuration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingDigitaloceanResponse}
     */

  }, {
    key: "getLogDigocean",
    value: function getLogDigocean() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogDigoceanWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the DigitalOcean Spaces for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingDigitaloceanResponse>} and HTTP response
     */

  }, {
    key: "listLogDigoceanWithHttpInfo",
    value: function listLogDigoceanWithHttpInfo() {
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
      var returnType = [_LoggingDigitaloceanResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/digitalocean', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the DigitalOcean Spaces for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingDigitaloceanResponse>}
     */

  }, {
    key: "listLogDigocean",
    value: function listLogDigocean() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogDigoceanWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_digitalocean_name - The name for the real-time logging configuration.
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
     * @param {String} [options.bucket_name] - The name of the DigitalOcean Space.
     * @param {String} [options.access_key] - Your DigitalOcean Spaces account access key.
     * @param {String} [options.secret_key] - Your DigitalOcean Spaces account secret key.
     * @param {String} [options.domain='nyc3.digitaloceanspaces.com'] - The domain of the DigitalOcean Spaces endpoint.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingDigitaloceanResponse} and HTTP response
     */

  }, {
    key: "updateLogDigoceanWithHttpInfo",
    value: function updateLogDigoceanWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_digitalocean_name' is set.


      if (options['logging_digitalocean_name'] === undefined || options['logging_digitalocean_name'] === null) {
        throw new Error("Missing the required parameter 'logging_digitalocean_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_digitalocean_name': options['logging_digitalocean_name']
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
        'bucket_name': options['bucket_name'],
        'access_key': options['access_key'],
        'secret_key': options['secret_key'],
        'domain': options['domain'],
        'path': options['path'],
        'public_key': options['public_key']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingDigitaloceanResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.logging_digitalocean_name - The name for the real-time logging configuration.
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
     * @param {String} [options.bucket_name] - The name of the DigitalOcean Space.
     * @param {String} [options.access_key] - Your DigitalOcean Spaces account access key.
     * @param {String} [options.secret_key] - Your DigitalOcean Spaces account secret key.
     * @param {String} [options.domain='nyc3.digitaloceanspaces.com'] - The domain of the DigitalOcean Spaces endpoint.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingDigitaloceanResponse}
     */

  }, {
    key: "updateLogDigocean",
    value: function updateLogDigocean() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogDigoceanWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingDigitaloceanApi;
}();

exports["default"] = LoggingDigitaloceanApi;